#!/usr/bin/env python3

from __future__ import annotations

import base64
import hashlib
import json
import os
import re
import subprocess
import sys
import time
import tomllib
import urllib.request
from datetime import date
from functools import lru_cache
from pathlib import Path
from typing import Literal, NotRequired, Protocol, TypeAlias, TypeGuard, TypedDict, cast


REPO_ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = REPO_ROOT / "site" / "src"
CACHE_DIR = REPO_ROOT / ".cache" / "gh-api"
# Cache GitHub API responses between runs. Freshness is still controllable with
# SCRAPER_REFRESH=1 or SCRAPER_CACHE_HOURS=0 when we want a cold scrape.
CACHE_HOURS = float(os.environ.get("SCRAPER_CACHE_HOURS", "24"))
REFRESH_CACHE = os.environ.get("SCRAPER_REFRESH", "").lower() in {"1", "true", "yes"}


ORG_PARSER_SOURCES = [
    "tree-sitter",
    "tree-sitter-grammars",
]

EXTRA_PARSER_REPOS = [
    "uyha/tree-sitter-cmake",
    "camdencheek/tree-sitter-dockerfile",
    "Joakker/tree-sitter-json5",
    "nix-community/tree-sitter-nix",
    "mitchellh/tree-sitter-proto",
]
TREE_SITTER_PARSER_WIKI_URL = "https://raw.githubusercontent.com/wiki/tree-sitter/tree-sitter/List-of-parsers.md"


JsonObject: TypeAlias = dict[str, object]
JsonArray: TypeAlias = list[object]
ParserDescriptor: TypeAlias = dict[str, object]
GrammarObject: TypeAlias = dict[str, object]


class ResponseLike(Protocol):
    def __enter__(self) -> ResponseLike: ...
    def __exit__(self, exc_type: object, exc: object, traceback: object) -> object: ...
    def read(self) -> bytes: ...


class RepoSnapshot(TypedDict):
    default_branch: str
    source_commit: str
    paths: list[str]


class CommitInfo(TypedDict):
    sha: str
    committed_at: str | None


class CountVersionResult(TypedDict):
    count: int
    version: str


class CountResult(TypedDict):
    count: int


class UpdateResult(TypedDict):
    updated: int


class QueryPackConfig(TypedDict):
    repo: str
    pathPattern: str
    outputName: str
    parserLanguageSource: NotRequired[str]
    testedParserRefsSource: NotRequired[str]


class LanguagesTomlSupportSource(TypedDict):
    kind: Literal["languages-toml-support"]
    repo: str
    path: str


class TomlConfigMapSource(TypedDict):
    kind: Literal["toml-config-map"]
    repo: str
    pathPattern: str
    valueKey: str


class LuaParserRegistrySource(TypedDict):
    kind: Literal["lua-parser-registry"]
    repo: str
    registryPath: str
    lockfilePath: str
    refCandidates: list[str]


ParserLanguageSourceConfig: TypeAlias = LanguagesTomlSupportSource | TomlConfigMapSource
TestedParserRefsSourceConfig: TypeAlias = LanguagesTomlSupportSource | LuaParserRegistrySource


class QueryPackScrapeConfig(TypedDict):
    queryPacks: list[QueryPackConfig]
    parserLanguageSources: dict[str, ParserLanguageSourceConfig]
    testedParserRefsSources: dict[str, TestedParserRefsSourceConfig]


class QueryPackResult(TypedDict):
    repo: str
    outputName: str
    count: int
    version: str


REPO_CACHE: dict[str, RepoSnapshot] = {}
COMMIT_INFO_CACHE: dict[tuple[str, str], CommitInfo] = {}
LATEST_RELEASE_CACHE: dict[str, str | None] = {}
PULSAR_QUERY_KEY_TO_KIND = {
    "foldsQuery": "folds",
    "highlightsQuery": "highlights",
    "indentsQuery": "indents",
    "localsQuery": "locals",
    "tagsQuery": "tags",
}
NEOVIM_ONLY_QUERY_PREDICATE_RE = re.compile(r"#(?:any-)?(?:lua|vim)-match\?")


def string_list(value: object) -> list[str] | None:
    if not isinstance(value, list):
        return None

    items = cast(list[object], value)
    strings = [item for item in items if isinstance(item, str)]
    return strings if len(strings) == len(items) else None


def query_file_map(value: object) -> dict[str, list[str]] | None:
    if not isinstance(value, dict):
        return None

    mapping = cast(JsonObject, value)
    result: dict[str, list[str]] = {}

    for key, item in mapping.items():
        query_files = string_list(item)

        if query_files is None:
            return None

        result[key] = query_files

    return result


def load_json_value(text: str) -> object:
    return cast(object, json.loads(text))


def load_json_object(text: str) -> JsonObject:
    parsed = load_json_value(text)

    if not isinstance(parsed, dict):
        raise RuntimeError("Expected JSON object")

    return cast(JsonObject, parsed)


def load_json_array(text: str) -> JsonArray:
    parsed = load_json_value(text)

    if not isinstance(parsed, list):
        raise RuntimeError("Expected JSON array")

    return cast(JsonArray, parsed)


def query_pack_name(output_name: str) -> str:
    return Path(output_name).stem.removesuffix("-data")


def query_pack_const_prefix(output_name: str) -> str:
    return query_pack_name(output_name).replace("-", "_").upper()


def query_pack_summary_label(output_name: str) -> str:
    name = query_pack_name(output_name)

    if name == "nvim-treesitter":
        return "nvim runtime languages"

    if name == "nvim-textobjects":
        return "textobject languages"

    if name.startswith("nvim-"):
        return f"{name.removeprefix('nvim-').replace('-', ' ')} languages"

    return f"{name.replace('-', ' ')} languages"


def parse_query_pack_configs(query_packs_value: object) -> list[QueryPackConfig]:
    if not isinstance(query_packs_value, list):
        raise RuntimeError("Expected queryPacks to be a list")

    query_packs = cast(list[object], query_packs_value)
    configs: list[QueryPackConfig] = []
    seen_names: set[str] = set()

    for index, entry in enumerate(query_packs):
        if not isinstance(entry, dict):
            raise RuntimeError(f"Expected queryPacks[{index}] to be an object")

        entry_object = cast(JsonObject, entry)
        repo = entry_object.get("repo")
        path_pattern = entry_object.get("pathPattern")
        output_name = entry_object.get("outputName")

        if not isinstance(repo, str) or not repo:
            raise RuntimeError(f"Expected queryPacks[{index}].repo to be a non-empty string")

        if not isinstance(path_pattern, str) or not path_pattern:
            raise RuntimeError(f"Expected queryPacks[{index}].pathPattern to be a non-empty string")

        if not isinstance(output_name, str) or not output_name:
            raise RuntimeError(f"Expected queryPacks[{index}].outputName to be a non-empty string")

        if not output_name.endswith("-data.ts"):
            raise RuntimeError(f"Expected queryPacks[{index}].outputName to end with -data.ts")

        name = query_pack_name(output_name)

        if name in seen_names:
            raise RuntimeError(f"Duplicate query pack config output: {output_name}")

        config: QueryPackConfig = {
            "repo": repo,
            "pathPattern": path_pattern,
            "outputName": output_name,
        }

        parser_language_source = entry_object.get("parserLanguageSource")

        if parser_language_source is not None:
            if not isinstance(parser_language_source, str) or not parser_language_source:
                raise RuntimeError(
                    f"Expected queryPacks[{index}].parserLanguageSource to be a non-empty string",
                )

            config["parserLanguageSource"] = parser_language_source

        tested_parser_refs_source = entry_object.get("testedParserRefsSource")

        if tested_parser_refs_source is not None:
            if not isinstance(tested_parser_refs_source, str) or not tested_parser_refs_source:
                raise RuntimeError(
                    f"Expected queryPacks[{index}].testedParserRefsSource to be a non-empty string",
                )

            config["testedParserRefsSource"] = tested_parser_refs_source

        configs.append(config)
        seen_names.add(name)

    return configs


def parse_parser_language_sources(
    sources_value: object,
) -> dict[str, ParserLanguageSourceConfig]:
    if not isinstance(sources_value, dict):
        raise RuntimeError("Expected parserLanguageSources to be an object")

    sources = cast(JsonObject, sources_value)
    result: dict[str, ParserLanguageSourceConfig] = {}

    for source_name, source_value in sources.items():
        if not isinstance(source_value, dict):
            raise RuntimeError(f"Expected parserLanguageSources.{source_name} to be an object")

        source = cast(JsonObject, source_value)
        kind = source.get("kind")

        if kind == "languages-toml-support":
            repo = source.get("repo")
            path = source.get("path")

            if not isinstance(repo, str) or not repo or not isinstance(path, str) or not path:
                raise RuntimeError(
                    f"Expected parserLanguageSources.{source_name} to include repo and path",
                )

            result[source_name] = {
                "kind": "languages-toml-support",
                "repo": repo,
                "path": path,
            }
            continue

        if kind == "toml-config-map":
            repo = source.get("repo")
            path_pattern = source.get("pathPattern")
            value_key = source.get("valueKey")

            if (
                not isinstance(repo, str)
                or not repo
                or not isinstance(path_pattern, str)
                or not path_pattern
                or not isinstance(value_key, str)
                or not value_key
            ):
                raise RuntimeError(
                    f"Expected parserLanguageSources.{source_name} to include repo, pathPattern, and valueKey",
                )

            result[source_name] = {
                "kind": "toml-config-map",
                "repo": repo,
                "pathPattern": path_pattern,
                "valueKey": value_key,
            }
            continue

        raise RuntimeError(f"Unsupported parserLanguageSources.{source_name}.kind: {kind}")

    return result


def parse_tested_parser_refs_sources(
    sources_value: object,
) -> dict[str, TestedParserRefsSourceConfig]:
    if not isinstance(sources_value, dict):
        raise RuntimeError("Expected testedParserRefsSources to be an object")

    sources = cast(JsonObject, sources_value)
    result: dict[str, TestedParserRefsSourceConfig] = {}

    for source_name, source_value in sources.items():
        if not isinstance(source_value, dict):
            raise RuntimeError(f"Expected testedParserRefsSources.{source_name} to be an object")

        source = cast(JsonObject, source_value)
        kind = source.get("kind")

        if kind == "languages-toml-support":
            repo = source.get("repo")
            path = source.get("path")

            if not isinstance(repo, str) or not repo or not isinstance(path, str) or not path:
                raise RuntimeError(
                    f"Expected testedParserRefsSources.{source_name} to include repo and path",
                )

            result[source_name] = {
                "kind": "languages-toml-support",
                "repo": repo,
                "path": path,
            }
            continue

        if kind == "lua-parser-registry":
            repo = source.get("repo")
            registry_path = source.get("registryPath")
            lockfile_path = source.get("lockfilePath")
            ref_candidates = string_list(source.get("refCandidates"))

            if (
                not isinstance(repo, str)
                or not repo
                or not isinstance(registry_path, str)
                or not registry_path
                or not isinstance(lockfile_path, str)
                or not lockfile_path
                or ref_candidates is None
                or not ref_candidates
            ):
                raise RuntimeError(
                    f"Expected testedParserRefsSources.{source_name} to include repo, registryPath, lockfilePath, and refCandidates",
                )

            result[source_name] = {
                "kind": "lua-parser-registry",
                "repo": repo,
                "registryPath": registry_path,
                "lockfilePath": lockfile_path,
                "refCandidates": ref_candidates,
            }
            continue

        raise RuntimeError(f"Unsupported testedParserRefsSources.{source_name}.kind: {kind}")

    return result


def load_query_pack_scrape_config(config_path: Path) -> QueryPackScrapeConfig:
    parsed = load_json_object(config_path.read_text(encoding="utf8"))
    query_packs = parse_query_pack_configs(parsed.get("queryPacks"))
    parser_language_sources = parse_parser_language_sources(parsed.get("parserLanguageSources"))
    tested_parser_refs_sources = parse_tested_parser_refs_sources(parsed.get("testedParserRefsSources"))

    for index, query_pack in enumerate(query_packs):
        parser_language_source = query_pack.get("parserLanguageSource")

        if parser_language_source is not None and parser_language_source not in parser_language_sources:
            raise RuntimeError(
                f"Unknown parserLanguageSource in queryPacks[{index}]: {parser_language_source}",
            )

        tested_parser_refs_source = query_pack.get("testedParserRefsSource")

        if tested_parser_refs_source is not None and tested_parser_refs_source not in tested_parser_refs_sources:
            raise RuntimeError(
                f"Unknown testedParserRefsSource in queryPacks[{index}]: {tested_parser_refs_source}",
            )

    return {
        "queryPacks": query_packs,
        "parserLanguageSources": parser_language_sources,
        "testedParserRefsSources": tested_parser_refs_sources,
    }


def config_path_from_argv(argv: list[str]) -> Path:
    if len(argv) != 1:
        script_name = Path(sys.argv[0]).name
        raise SystemExit(f"usage: {script_name} <query-pack-config.json>")

    return Path(argv[0])


def load_toml_object(text: str) -> JsonObject:
    parsed = cast(object, tomllib.loads(text))

    if not isinstance(parsed, dict):
        raise RuntimeError("Expected TOML table")

    return cast(JsonObject, parsed)


def repo_owner_login(repo_info: JsonObject) -> str | None:
    owner = repo_info.get("owner")

    if not isinstance(owner, dict):
        return None

    login = cast(JsonObject, owner).get("login")
    return login if isinstance(login, str) else None


def gh_cache_path(path: str, jq: str | None) -> Path:
    digest = hashlib.sha256(
        json.dumps({"path": path, "jq": jq}, sort_keys=True).encode("utf8"),
    ).hexdigest()
    return CACHE_DIR / f"{digest}.txt"


def load_cached_gh_response(path: str, jq: str | None) -> str | None:
    if REFRESH_CACHE or CACHE_HOURS <= 0:
        return None

    cache_path = gh_cache_path(path, jq)

    if not cache_path.exists():
        return None

    age_seconds = time.time() - cache_path.stat().st_mtime

    if age_seconds > CACHE_HOURS * 60 * 60:
        return None

    return cache_path.read_text(encoding="utf8")


def store_cached_gh_response(path: str, jq: str | None, value: str) -> None:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    _ = gh_cache_path(path, jq).write_text(value, encoding="utf8")


def gh_api(path: str, jq: str | None = None) -> str:
    cached = load_cached_gh_response(path, jq)

    if cached is not None:
        return cached

    command = ["gh", "api", path]

    if jq is not None:
        command.extend(["--jq", jq])

    completed = subprocess.run(
        command,
        capture_output=True,
        text=True,
        check=False,
    )

    if completed.returncode != 0:
        error = completed.stderr.strip() or completed.stdout.strip() or f"gh api failed for {path}"
        raise RuntimeError(error)

    value = completed.stdout.strip()
    store_cached_gh_response(path, jq, value)
    return value


def gh_api_json(path: str) -> object:
    return load_json_value(gh_api(path))


def repo_content_text(repo: str, path: str, ref: str) -> str:
    encoded = gh_api(
        f"repos/{repo}/contents/{path}?ref={ref}",
        ".content",
    )
    return base64.b64decode(encoded).decode("utf8")


def repo_content_text_for_refs(repo: str, path: str, refs: list[str]) -> str:
    seen: set[str] = set()
    last_error = None

    for ref in refs:
        if ref in seen:
            continue

        seen.add(ref)

        try:
            return repo_content_text(repo, path, ref)
        except RuntimeError as error:
            last_error = error

    if last_error is not None:
        raise last_error

    raise RuntimeError(f"No refs provided for {repo}:{path}")


def repo_snapshot(repo: str) -> RepoSnapshot:
    cached = REPO_CACHE.get(repo)

    if cached is not None:
        return cached

    repo_info = load_json_object(gh_api(f"repos/{repo}"))
    default_branch_value = repo_info.get("default_branch")
    default_branch = default_branch_value if isinstance(default_branch_value, str) else None

    if default_branch is None or not default_branch:
        raise RuntimeError(f"Missing default_branch for {repo}")

    source_commit = repo_head_commit(repo, default_branch)
    raw_paths = gh_api(
        f"repos/{repo}/git/trees/{default_branch}?recursive=1",
        ".tree[].path",
    )

    snapshot: RepoSnapshot = {
        "default_branch": default_branch,
        "source_commit": source_commit,
        "paths": raw_paths.splitlines(),
    }
    REPO_CACHE[repo] = snapshot
    return snapshot


def repo_head_commit(repo: str, default_branch: str) -> str:
    return repo_commit_info(repo, default_branch)["sha"]

def repo_commit_date(repo: str, ref: str) -> str | None:
    return repo_commit_info(repo, ref)["committed_at"]


def repo_commit_info(repo: str, ref: str) -> CommitInfo:
    key = (repo, ref)
    cached = COMMIT_INFO_CACHE.get(key)

    if cached is not None:
        return cached

    raw_commit = gh_api_json(f"repos/{repo}/commits/{ref}")

    if not isinstance(raw_commit, dict):
        raise RuntimeError(f"Missing commit payload for {repo}@{ref}")

    commit_payload = cast(JsonObject, raw_commit)
    sha = commit_payload.get("sha")

    if not isinstance(sha, str) or not sha:
        raise RuntimeError(f"Missing commit sha for {repo}@{ref}")

    committed_at = None
    commit_block = commit_payload.get("commit")

    if isinstance(commit_block, dict):
        commit_details = cast(JsonObject, commit_block)

        for person_key in ["committer", "author"]:
            person = commit_details.get(person_key)

            if not isinstance(person, dict):
                continue

            date_value = cast(JsonObject, person).get("date")

            if isinstance(date_value, str) and date_value:
                committed_at = date_value.split("T")[0]
                break

    info: CommitInfo = {
        "sha": sha,
        "committed_at": committed_at,
    }
    COMMIT_INFO_CACHE[key] = info
    _ = COMMIT_INFO_CACHE.setdefault((repo, sha), info)
    return info


def short_commit(commit: str) -> str:
    return commit[:7]


def normalize_id(value: str) -> str:
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", value.lower())).strip("-")


def display_name(value: str) -> str:
    return " ".join(part[:1].upper() + part[1:] for part in re.split(r"[-_]+", value) if part)


def normalize_language_id(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", value.lower()).strip("_")


def parse_scalar_value(text: str, key: str) -> str | None:
    patterns = [
        rf"(?m)^\s*(?:#\s*)?{re.escape(key)}:\s*'([^']+)'",
        rf'(?m)^\s*(?:#\s*)?{re.escape(key)}:\s*"([^"]+)"',
        rf'(?m)^\s*"{re.escape(key)}"\s*:\s*"([^"]+)"',
    ]

    for pattern in patterns:
        match = re.search(pattern, text)

        if match is not None:
            return match.group(1)

    return None


def extract_query_values(text: str) -> dict[str, str | list[str]]:
    values: dict[str, str | list[str]] = {}
    lines = text.splitlines()
    index = 0

    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        matched_key = next(
            (
                key
                for key in PULSAR_QUERY_KEY_TO_KIND
                if re.match(rf'^(?:\"{re.escape(key)}\"|{re.escape(key)})\s*:', stripped)
            ),
            None,
        )

        if matched_key is None:
            index += 1
            continue

        remainder = re.sub(
            rf'^(?:\"{re.escape(matched_key)}\"|{re.escape(matched_key)})\s*:\s*',
            "",
            stripped,
        )
        kind = PULSAR_QUERY_KEY_TO_KIND[matched_key]

        if remainder.startswith("["):
            entries: list[str] = []
            index += 1

            while index < len(lines):
                item_line = lines[index].strip()

                if item_line.startswith("]"):
                    break

                item_match = re.match(r"^(?:'([^']+)'|\"([^\"]+)\")\s*,?$", item_line)

                if item_match is not None:
                    entries.append(item_match.group(1) or item_match.group(2))

                index += 1

            if entries:
                values[kind] = entries
        else:
            item_match = re.match(r"^(?:'([^']+)'|\"([^\"]+)\")", remainder)

            if item_match is not None:
                values[kind] = item_match.group(1) or item_match.group(2)

        index += 1

    return values


def pulsar_parser_language(parser: str) -> str:
    parser_name = parser.split("/")[-1]

    if parser_name.startswith("tree-sitter-"):
        parser_name = parser_name.removeprefix("tree-sitter-")

    return normalize_language_id(parser_name)


def resolve_query_paths(
    install_root: str,
    queries: dict[str, str | list[str]],
) -> dict[str, str | list[str]]:
    resolved: dict[str, str | list[str]] = {}

    for query_kind, query_files in queries.items():
        if isinstance(query_files, list):
            resolved[query_kind] = [f"{install_root}/{query_file}" for query_file in query_files]
        else:
            resolved[query_kind] = f"{install_root}/{query_files}"

    return resolved


def common_query_root(install_root: str, queries: dict[str, str | list[str]]) -> str:
    paths = [
        query_path
        for query_files in queries.values()
        for query_path in (query_files if isinstance(query_files, list) else [query_files])
    ]

    if not paths:
        return "."

    directories = [str(Path(path).parent) for path in paths]
    common = os.path.commonpath(directories)
    relative = os.path.relpath(common, install_root)
    normalized = relative.replace("\\", "/")

    if normalized == "." and len(set(directories)) > 1:
        return "mixed roots"

    return normalized


def descriptor_package(descriptor: dict[str, object]) -> str:
    package = descriptor.get("package")

    if isinstance(package, str) and package:
        return package

    repo = descriptor.get("repo")

    if isinstance(repo, str) and repo:
        if repo.startswith(("github.com/", "gitlab.com/")):
            return repo

        return f"github.com/{repo}"

    raise ValueError(f"Descriptor has no package or repo: {descriptor}")


def descriptor_repo_identity(descriptor: dict[str, object]) -> str:
    github_repo = descriptor.get("github_repo")

    if isinstance(github_repo, str) and github_repo:
        return github_repo

    repo = descriptor.get("repo")

    if isinstance(repo, str) and repo:
        return repo

    return descriptor_package(descriptor)


def package_owner_repo(package: str) -> tuple[str, str]:
    parts = package.split("/")

    if len(parts) >= 3:
        owner = parts[1]
        repo_name = "-".join(parts[2:]) or parts[-1]
        return owner, repo_name

    if len(parts) == 2:
        return parts[0], parts[1]

    return "repo", package


def package_from_url(url: str) -> str:
    normalized = re.sub(r"^https?://", "", url).rstrip("/")
    return normalized.removesuffix(".git")


def github_repo_from_package(package: str) -> str | None:
    if not package.startswith("github.com/"):
        return None

    parts = package.split("/")

    if len(parts) < 3:
        return None

    return "/".join(parts[1:3])


def parser_descriptor_sort_key(descriptor: dict[str, object]) -> tuple[str, str]:
    return (str(descriptor["language"]), descriptor_package(descriptor))


def descriptor_merge_key(descriptor: dict[str, object]) -> tuple[str, str]:
    return (
        descriptor_package(descriptor),
        normalize_language_id(str(descriptor["language"])),
    )


def grammar_file_types(grammar: dict[str, object]) -> list[str]:
    file_types = grammar.get("file-types")

    if not isinstance(file_types, list):
        return []

    file_type_values = cast(list[object], file_types)
    return [value for value in file_type_values if isinstance(value, str)]


def list_org_repos(org: str) -> list[JsonObject]:
    repos: list[JsonObject] = []
    page = 1

    while True:
        raw_page_items = gh_api_json(f"orgs/{org}/repos?type=public&per_page=100&page={page}")

        if not isinstance(raw_page_items, list) or not raw_page_items:
            break

        page_items = cast(list[object], raw_page_items)

        for item in page_items:
            if isinstance(item, dict):
                repos.append(cast(JsonObject, item))

        if len(page_items) < 100:
            break

        page += 1

    return repos


def fetch_text(url: str) -> str:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "treesitter-parser-index-scraper/1.0"},
    )

    with cast(ResponseLike, urllib.request.urlopen(request, timeout=30)) as response:
        return response.read().decode("utf8")


def load_tree_sitter_json(repo: str, default_branch: str | None = None) -> JsonObject | None:
    if default_branch is None:
        raw_repo_info = gh_api_json(f"repos/{repo}")

        if not isinstance(raw_repo_info, dict):
            return None

        repo_info = cast(JsonObject, raw_repo_info)

        refs = [
            ref
            for ref in [
                repo_info.get("default_branch") if isinstance(repo_info.get("default_branch"), str) else None,
                "main",
                "master",
            ]
            if isinstance(ref, str)
        ]
    else:
        refs = [default_branch]

    try:
        decoded = repo_content_text_for_refs(repo, "tree-sitter.json", refs)
    except RuntimeError:
        return None

    parsed = load_json_value(decoded)
    return cast(JsonObject, parsed) if isinstance(parsed, dict) else None


def load_tree_sitter_wiki_parser_repos() -> list[str]:
    try:
        markdown = fetch_text(TREE_SITTER_PARSER_WIKI_URL)
    except OSError:
        return []

    covered_repos = set(EXTRA_PARSER_REPOS)
    wiki_repos: list[str] = []

    for line in markdown.splitlines():
        if not line.startswith("|"):
            continue

        cells = [cell.strip() for cell in line.split("|")[1:-1]]

        if len(cells) != 6 or cells[0] in {"name", "---"}:
            continue

        url_cell = cells[1]
        link_match = re.search(r"\((https?://[^)]+)\)", url_cell)
        raw_url = link_match.group(1) if link_match is not None else url_cell
        package = package_from_url(raw_url)
        github_repo = github_repo_from_package(package)

        if github_repo is None:
            continue

        if any(github_repo.startswith(f"{org}/") for org in ORG_PARSER_SOURCES):
            continue

        if github_repo in covered_repos:
            continue

        covered_repos.add(github_repo)
        wiki_repos.append(github_repo)

    return wiki_repos


def is_query_file(value: object) -> TypeGuard[str]:
    return isinstance(value, str) and value.endswith(".scm")


def unique_in_order(values: list[str]) -> list[str]:
    seen: set[str] = set()
    unique_values: list[str] = []

    for value in values:
        if value in seen:
            continue

        seen.add(value)
        unique_values.append(value)

    return unique_values


def query_paths_from_value(value: object) -> list[str]:
    if is_query_file(value):
        return [value]

    if isinstance(value, list):
        query_values = cast(list[object], value)
        return [item for item in query_values if is_query_file(item)]

    return []


def resolve_query_path(path: str, location: str | None) -> str | None:
    normalized = path.removeprefix("./")

    # Parser bundles should only expose files owned by the repo itself.
    if normalized.startswith("node_modules/"):
        return None

    if location and location not in {"", "."} and normalized.startswith("queries/"):
        return f"{location.rstrip('/')}/{normalized}"

    return normalized


def bundled_queries_from_grammar(
    grammar: GrammarObject,
) -> dict[str, list[str]]:
    bundled_queries: dict[str, list[str]] = {}
    path = grammar.get("path")
    location = path if isinstance(path, str) else None

    for key, value in grammar.items():
        if key in {
            "name",
            "camelcase",
            "scope",
            "path",
            "file-types",
            "first-line-regex",
            "content-regex",
            "injection-regex",
            "external-files",
        }:
            continue

        raw_paths = query_paths_from_value(value)

        if not raw_paths:
            continue

        resolved_paths = unique_in_order(
            [
                resolved
                for raw_path in raw_paths
                if (resolved := resolve_query_path(raw_path, location)) is not None
            ]
        )

        if resolved_paths:
            bundled_queries[key] = resolved_paths

    return bundled_queries


def discover_repo_parser_descriptors(repo: str, default_branch: str, owner: str) -> list[ParserDescriptor]:
    tree_sitter_json = load_tree_sitter_json(repo, default_branch)

    if tree_sitter_json is None:
        return []

    grammars_value = tree_sitter_json.get("grammars")
    grammars = cast(list[object], grammars_value) if isinstance(grammars_value, list) else None
    metadata_value = tree_sitter_json.get("metadata")
    metadata = cast(JsonObject, metadata_value) if isinstance(metadata_value, dict) else None
    metadata_version = None

    if metadata is not None:
        version = metadata.get("version")
        metadata_version = normalize_semver(version if isinstance(version, str) else None)

    if grammars is None:
        return []

    source_commit = repo_head_commit(repo, default_branch)
    descriptors: list[ParserDescriptor] = []

    for grammar in grammars:
        if not isinstance(grammar, dict):
            continue

        grammar_object = cast(GrammarObject, grammar)

        language = grammar_object.get("name")

        if not isinstance(language, str) or not language:
            continue

        bundled_queries = bundled_queries_from_grammar(grammar_object)
        camelcase = grammar_object.get("camelcase")
        scope = grammar_object.get("scope")
        location = grammar_object.get("path")

        descriptors.append(
            {
                "id": "",
                "name": camelcase if isinstance(camelcase, str) else display_name(language),
                "language": language,
                "package": f"github.com/{repo}",
                "repo": repo,
                "github_repo": repo,
                "owners": [owner],
                "default_branch": default_branch,
                "source_commit": source_commit,
                "bundled_query_kinds": sorted(bundled_queries),
                "bundled_queries": bundled_queries,
                "metadata_version": metadata_version,
                "scope": scope,
                "file_types": grammar_file_types(grammar_object),
                "discovery_source": "tree-sitter-json",
                **(
                    {"location": location}
                    if isinstance(location, str) and location not in {"", "."}
                    else {}
                ),
            }
        )

    return descriptors


def matching_grammar_for_descriptor(
    tree_sitter_json: JsonObject,
    descriptor: ParserDescriptor,
) -> GrammarObject | None:
    grammars_value = tree_sitter_json.get("grammars")
    grammars = cast(list[object], grammars_value) if isinstance(grammars_value, list) else None

    if grammars is None:
        return None

    language = descriptor.get("language")

    if not isinstance(language, str) or not language:
        return None

    candidates: list[GrammarObject] = []

    for grammar in grammars:
        if not isinstance(grammar, dict):
            continue

        grammar_object = cast(GrammarObject, grammar)

        grammar_name = grammar_object.get("name")

        if isinstance(grammar_name, str) and normalize_id(grammar_name) == normalize_id(language):
            candidates.append(grammar_object)

    if not candidates:
        return None

    location = descriptor.get("location")

    if isinstance(location, str) and location:
        for grammar in candidates:
            path = grammar.get("path")

            if isinstance(path, str) and path == location:
                return grammar

    return candidates[0]


def discover_descriptor_bundled_queries(
    descriptor: ParserDescriptor,
) -> tuple[list[str], dict[str, list[str]], str | None]:
    existing_query_kinds = descriptor.get("bundled_query_kinds")
    existing_queries = descriptor.get("bundled_queries")
    location = descriptor.get("location")
    query_kinds = string_list(existing_query_kinds)
    query_files = query_file_map(existing_queries)

    if query_kinds and query_files is not None:
        return list(query_kinds), query_files, location if isinstance(location, str) else None

    github_repo = descriptor.get("github_repo")
    default_branch = descriptor.get("default_branch")

    if not isinstance(github_repo, str) or not github_repo:
        return [], {}, None

    tree_sitter_json = load_tree_sitter_json(
        github_repo,
        default_branch if isinstance(default_branch, str) else None,
    )

    if tree_sitter_json is None:
        return [], {}, None

    grammar = matching_grammar_for_descriptor(tree_sitter_json, descriptor)

    if grammar is None:
        return [], {}, None

    bundled_queries = bundled_queries_from_grammar(grammar)
    grammar_path = grammar.get("path")
    bundled_location = grammar_path if isinstance(grammar_path, str) and grammar_path not in {"", "."} else None
    return sorted(bundled_queries), bundled_queries, bundled_location


def bundled_query_editors(
    descriptor: dict[str, object],
    bundled_queries: dict[str, list[str]],
    source_commit: str,
) -> list[str]:
    github_repo = descriptor.get("github_repo")

    if not isinstance(github_repo, str) or not github_repo or not bundled_queries:
        return []

    # Neovim-specific predicates like #lua-match? and #vim-match? make the query
    # bundle non-portable even when it ships from the parser repository itself.
    for path in sorted({path for paths in bundled_queries.values() for path in paths}):
        if not path.endswith(".scm"):
            continue

        try:
            text = repo_content_text(github_repo, path, source_commit)
        except RuntimeError:
            continue

        if NEOVIM_ONLY_QUERY_PREDICATE_RE.search(text):
            return ["neovim"]

    return []


def discover_org_parser_descriptors(org: str) -> list[ParserDescriptor]:
    descriptors: list[ParserDescriptor] = []

    for repo_info in list_org_repos(org):
        full_name_value = repo_info.get("full_name")
        default_branch_value = repo_info.get("default_branch")
        full_name = full_name_value if isinstance(full_name_value, str) else None
        default_branch = default_branch_value if isinstance(default_branch_value, str) else None
        owner = repo_owner_login(repo_info)

        if not isinstance(full_name, str) or not isinstance(default_branch, str) or not isinstance(owner, str):
            continue

        descriptors.extend(
            discover_repo_parser_descriptors(
                full_name,
                default_branch,
                owner,
            ),
        )

    return descriptors


def discover_extra_parser_descriptors() -> list[ParserDescriptor]:
    descriptors: list[ParserDescriptor] = []

    for repo in EXTRA_PARSER_REPOS:
        repo_info_raw = gh_api_json(f"repos/{repo}")

        if not isinstance(repo_info_raw, dict):
            continue

        repo_info = cast(JsonObject, repo_info_raw)

        default_branch_value = repo_info.get("default_branch")
        default_branch = default_branch_value if isinstance(default_branch_value, str) else None
        owner = repo_owner_login(repo_info)

        if not isinstance(default_branch, str) or not isinstance(owner, str):
            continue

        descriptors.extend(
            discover_repo_parser_descriptors(
                repo,
                default_branch,
                owner,
            ),
        )

    return descriptors


def discover_wiki_parser_descriptors() -> list[ParserDescriptor]:
    descriptors: list[ParserDescriptor] = []

    for repo in load_tree_sitter_wiki_parser_repos():
        try:
            repo_info_raw = gh_api_json(f"repos/{repo}")
        except RuntimeError:
            continue

        if not isinstance(repo_info_raw, dict):
            continue

        repo_info = cast(JsonObject, repo_info_raw)

        default_branch_value = repo_info.get("default_branch")
        default_branch = default_branch_value if isinstance(default_branch_value, str) else None
        owner = repo_owner_login(repo_info)

        if not isinstance(default_branch, str) or not isinstance(owner, str):
            continue

        descriptors.extend(
            discover_repo_parser_descriptors(
                repo,
                default_branch,
                owner,
            ),
        )

    return descriptors


@lru_cache(maxsize=None)
def load_parser_lockfile(
    repo: str,
    path: str,
    ref_candidates: tuple[str, ...],
) -> dict[str, str]:
    parsed = load_json_object(repo_content_text_for_refs(repo, path, list(ref_candidates)))

    revisions: dict[str, str] = {}

    for language, payload in parsed.items():
        if not isinstance(payload, dict):
            continue

        payload_object = cast(JsonObject, payload)

        revision = payload_object.get("revision")

        if isinstance(revision, str) and revision:
            revisions[language] = revision

    return revisions


def load_nvim_lockfile(repo: str, ref: str) -> dict[str, str]:
    # nvim-treesitter moved off master. Keep main first and only fall back when
    # scraping older references that still expect the deprecated branch name.
    return load_parser_lockfile(repo, "lockfile.json", ("main", ref, "master"))


def parse_nvim_install_info(block_lines: list[str]) -> dict[str, str] | None:
    install_depth = 0
    in_install_info = False
    url = None
    location = None
    branch = None
    revision = None

    for line in block_lines:
        if not in_install_info:
            if re.match(r"^\s*install_info\s*=\s*{", line):
                in_install_info = True
                install_depth = line.count("{") - line.count("}")
            continue

        url_match = re.search(r"url\s*=\s*['\"]([^'\"]+)['\"]", line)
        location_match = re.search(r"location\s*=\s*['\"]([^'\"]+)['\"]", line)
        branch_match = re.search(r"branch\s*=\s*['\"]([^'\"]+)['\"]", line)
        revision_match = re.search(r"revision\s*=\s*['\"]([^'\"]+)['\"]", line)

        if url_match:
            url = url_match.group(1)

        if location_match:
            location = location_match.group(1)

        if branch_match:
            branch = branch_match.group(1)

        if revision_match:
            revision = revision_match.group(1)

        install_depth += line.count("{") - line.count("}")

        if install_depth <= 0:
            break

    if url is None:
        return None

    info = {"url": url}

    if location is not None:
        info["location"] = location

    if branch is not None:
        info["branch"] = branch

    if revision is not None:
        info["revision"] = revision

    return info


@lru_cache(maxsize=None)
def load_lua_parser_registry(
    repo: str,
    path: str,
    ref_candidates: tuple[str, ...],
) -> dict[str, dict[str, str]]:
    text = repo_content_text_for_refs(
        repo,
        path,
        list(ref_candidates),
    )
    registry: dict[str, dict[str, str]] = {}
    current_language = None
    current_block: list[str] = []
    block_depth = 0

    for line in text.splitlines():
        if current_language is None:
            match = re.match(r"^\s*([A-Za-z0-9_]+)\s*=\s*{", line)

            if match is None:
                continue

            current_language = match.group(1)
            current_block = [line]
            block_depth = line.count("{") - line.count("}")
            continue

        current_block.append(line)
        block_depth += line.count("{") - line.count("}")

        if block_depth > 0:
            continue

        install_info = parse_nvim_install_info(current_block)

        if install_info is not None:
            registry[current_language] = install_info

        current_language = None
        current_block = []
        block_depth = 0

    return registry


def load_nvim_parser_registry(repo: str, ref: str) -> dict[str, dict[str, str]]:
    # nvim-treesitter's canonical branch is main. Keep it first so the parser
    # registry stays aligned with current pins and repository URLs.
    return load_lua_parser_registry(
        repo,
        "lua/nvim-treesitter/parsers.lua",
        ("main", ref, "master"),
    )


@lru_cache(maxsize=None)
def load_lua_parser_registry_tested_refs(
    repo: str,
    registry_path: str,
    lockfile_path: str,
    ref_candidates: tuple[str, ...],
) -> dict[str, list[str]]:
    lockfile = load_parser_lockfile(repo, lockfile_path, ref_candidates)
    registry = load_lua_parser_registry(repo, registry_path, ref_candidates)
    tested_parser_refs: dict[str, list[str]] = {}

    for language, install_info in sorted(registry.items()):
        url = install_info.get("url")

        if not isinstance(url, str) or not url:
            continue

        revision = install_info.get("revision") or lockfile.get(language)

        if not isinstance(revision, str) or not revision:
            continue

        tested_parser_refs[language] = [f"{package_from_url(url)}@git-{short_commit(revision)}"]

    return tested_parser_refs


def load_nvim_tested_parser_refs(repo: str, ref: str) -> dict[str, list[str]]:
    return load_lua_parser_registry_tested_refs(
        repo,
        "lua/nvim-treesitter/parsers.lua",
        "lockfile.json",
        ("main", ref, "master"),
    )


def discover_nvim_parser_descriptors() -> list[ParserDescriptor]:
    repo = "nvim-treesitter/nvim-treesitter"
    ref = repo_snapshot(repo)["default_branch"]
    lockfile = load_nvim_lockfile(repo, ref)
    registry = load_nvim_parser_registry(repo, ref)
    descriptors: list[ParserDescriptor] = []

    for language, install_info in sorted(registry.items()):
        url = install_info.get("url")

        if not isinstance(url, str) or not url:
            continue

        package = package_from_url(url)
        github_repo = github_repo_from_package(package)
        owner, _ = package_owner_repo(package)
        descriptor: dict[str, object] = {
            "id": "",
            "name": display_name(language),
            "language": language,
            "package": package,
            "repo": github_repo or package,
            "github_repo": github_repo,
            "owners": [owner],
            "default_branch": install_info.get("branch") or "master",
            "bundled_query_kinds": [],
            "metadata_version": None,
            "scope": None,
            "file_types": [],
            "discovery_source": "nvim-treesitter",
        }

        location = install_info.get("location")

        if isinstance(location, str) and location:
            descriptor["location"] = location

        revision = install_info.get("revision") or lockfile.get(language)

        if revision:
            descriptor["source_commit"] = revision

        descriptors.append(descriptor)

    return descriptors


def discover_helix_parser_descriptors() -> list[ParserDescriptor]:
    repo = "helix-editor/helix"
    ref = repo_snapshot(repo)["default_branch"]
    parsed = load_toml_object(repo_content_text(repo, "languages.toml", ref))
    grammars_value = parsed.get("grammar")
    grammars = cast(list[object], grammars_value) if isinstance(grammars_value, list) else None

    if grammars is None:
        return []

    descriptors: list[ParserDescriptor] = []

    for grammar in grammars:
        if not isinstance(grammar, dict):
            continue

        grammar_object = cast(JsonObject, grammar)

        language = grammar_object.get("name")
        source_value = grammar_object.get("source")
        source = cast(JsonObject, source_value) if isinstance(source_value, dict) else None

        if not isinstance(language, str) or not language or source is None:
            continue

        git = source.get("git")
        revision = source.get("rev")

        if not isinstance(git, str) or not git or not isinstance(revision, str) or not revision:
            continue

        package = package_from_url(git)
        github_repo = github_repo_from_package(package)
        owner, _ = package_owner_repo(package)
        descriptor: ParserDescriptor = {
            "id": "",
            "name": display_name(language),
            "language": language,
            "package": package,
            "repo": github_repo or package,
            "github_repo": github_repo,
            "owners": [owner],
            "default_branch": source.get("branch") if isinstance(source.get("branch"), str) else "master",
            "source_commit": revision,
            "bundled_query_kinds": [],
            "metadata_version": None,
            "scope": None,
            "file_types": [],
            "discovery_source": "helix",
        }

        location_value = source.get("subpath")
        location = location_value if isinstance(location_value, str) else None

        if isinstance(location, str) and location:
            descriptor["location"] = location

        descriptors.append(descriptor)

    return descriptors


@lru_cache(maxsize=None)
def load_languages_toml_support(
    repo: str,
    path: str,
) -> tuple[dict[str, str], dict[str, list[str]]]:
    ref = repo_snapshot(repo)["default_branch"]
    parsed = load_toml_object(repo_content_text(repo, path, ref))
    grammars_value = parsed.get("grammar")
    languages_value = parsed.get("language")
    grammars = cast(list[object], grammars_value) if isinstance(grammars_value, list) else None
    languages = cast(list[object], languages_value) if isinstance(languages_value, list) else None
    grammar_parser_refs: dict[str, list[str]] = {}

    if grammars is not None:
        for grammar in grammars:
            if not isinstance(grammar, dict):
                continue

            grammar_object = cast(JsonObject, grammar)

            grammar_name = grammar_object.get("name")
            source_value = grammar_object.get("source")
            source = cast(JsonObject, source_value) if isinstance(source_value, dict) else None

            if not isinstance(grammar_name, str) or not grammar_name or source is None:
                continue

            git = source.get("git")
            revision = source.get("rev")

            if not isinstance(git, str) or not git or not isinstance(revision, str) or not revision:
                continue

            grammar_parser_refs[grammar_name] = [f"{package_from_url(git)}@git-{short_commit(revision)}"]

    if languages is None:
        return {}, grammar_parser_refs

    mapping: dict[str, str] = {}
    tested_parser_refs_by_language = dict(grammar_parser_refs)

    for entry in languages:
        if not isinstance(entry, dict):
            continue

        entry_object = cast(JsonObject, entry)

        language = entry_object.get("name")
        parser_language = entry_object.get("grammar") or language

        if not isinstance(language, str) or not language or not isinstance(parser_language, str) or not parser_language:
            continue

        if parser_language != language:
            mapping[language] = parser_language

        tested_parser_refs = grammar_parser_refs.get(parser_language) or grammar_parser_refs.get(language)

        if tested_parser_refs:
            tested_parser_refs_by_language[language] = tested_parser_refs

    return mapping, tested_parser_refs_by_language


def load_helix_language_support() -> tuple[dict[str, str], dict[str, list[str]]]:
    return load_languages_toml_support("helix-editor/helix", "languages.toml")


@lru_cache(maxsize=None)
def load_toml_config_map(
    repo: str,
    path_pattern: str,
    value_key: str,
) -> dict[tuple[str, ...], str]:
    snapshot = repo_snapshot(repo)
    ref = snapshot["default_branch"]
    mapping: dict[tuple[str, ...], str] = {}
    compiled_pattern = re.compile(path_pattern)

    for path in snapshot["paths"]:
        match = compiled_pattern.match(path)

        if match is None:
            continue

        config = load_toml_object(repo_content_text(repo, path, ref))
        parser_language = config.get(value_key)

        if not isinstance(parser_language, str) or not parser_language:
            continue

        mapping[match.groups()] = parser_language

    return mapping


def load_zed_parser_language_map(
    path_pattern: re.Pattern[str],
) -> dict[tuple[str, ...], str]:
    return load_toml_config_map(
        "zed-industries/zed",
        path_pattern.pattern,
        "grammar",
    )


def parser_language_source_data(
    source: ParserLanguageSourceConfig,
) -> dict[str, str]:
    if source["kind"] == "languages-toml-support":
        return load_languages_toml_support(source["repo"], source["path"])[0]

    mapping = load_toml_config_map(
        source["repo"],
        source["pathPattern"],
        source["valueKey"],
    )
    parser_languages: dict[str, str] = {}

    for groups, parser_language in mapping.items():
        if len(groups) != 1:
            continue

        parser_languages[groups[0]] = parser_language

    return parser_languages


def tested_parser_refs_source_data(
    source: TestedParserRefsSourceConfig,
) -> dict[str, list[str]]:
    if source["kind"] == "languages-toml-support":
        return load_languages_toml_support(source["repo"], source["path"])[1]

    return load_lua_parser_registry_tested_refs(
        source["repo"],
        source["registryPath"],
        source["lockfilePath"],
        tuple(source["refCandidates"]),
    )


def assign_parser_ids(descriptors: list[dict[str, object]]) -> list[dict[str, object]]:
    counts: dict[str, int] = {}
    repo_language_counts: dict[tuple[str, str], int] = {}

    for descriptor in descriptors:
        base_id = f"parser-{normalize_id(str(descriptor['language']))}"
        counts[base_id] = counts.get(base_id, 0) + 1
        repo_language_key = (descriptor_repo_identity(descriptor), str(descriptor["language"]))
        repo_language_counts[repo_language_key] = repo_language_counts.get(repo_language_key, 0) + 1

    used_ids: dict[str, int] = {}

    for descriptor in descriptors:
        base_id = f"parser-{normalize_id(str(descriptor['language']))}"

        if counts[base_id] == 1:
            parser_id = base_id
        else:
            owner, repo_name = package_owner_repo(descriptor_package(descriptor))
            repo_suffix = repo_name.removeprefix("tree-sitter-")
            parser_id = (
                f"parser-{normalize_id(owner)}-"
                f"{normalize_id(repo_suffix)}-"
                f"{normalize_id(str(descriptor['language']))}"
            )

            repo_language_key = (descriptor_repo_identity(descriptor), str(descriptor["language"]))

            if repo_language_counts[repo_language_key] > 1:
                file_types = descriptor["file_types"]
                scope = descriptor["scope"]
                variant = (
                    file_types[0]
                    if isinstance(file_types, list) and file_types and isinstance(file_types[0], str)
                    else scope
                    if isinstance(scope, str)
                    else "variant"
                )
                parser_id = f"{parser_id}-{normalize_id(variant)}"

        used_ids[parser_id] = used_ids.get(parser_id, 0) + 1

        if used_ids[parser_id] > 1:
            parser_id = f"{parser_id}-{used_ids[parser_id]}"

        descriptor["id"] = parser_id

    return descriptors


def discover_parser_descriptors() -> list[dict[str, object]]:
    base_descriptors: list[dict[str, object]] = []

    for org in ORG_PARSER_SOURCES:
        base_descriptors.extend(discover_org_parser_descriptors(org))

    base_descriptors.extend(discover_extra_parser_descriptors())
    base_descriptors.extend(discover_wiki_parser_descriptors())
    nvim_descriptors = discover_nvim_parser_descriptors()
    helix_descriptors = discover_helix_parser_descriptors()
    merged: dict[tuple[str, str], dict[str, object]] = {}

    for descriptor in nvim_descriptors:
        merged[descriptor_merge_key(descriptor)] = descriptor

    for descriptor in helix_descriptors:
        merged[descriptor_merge_key(descriptor)] = descriptor

    for descriptor in base_descriptors:
        merged[descriptor_merge_key(descriptor)] = descriptor

    descriptors = sorted(merged.values(), key=parser_descriptor_sort_key)
    return assign_parser_ids(descriptors)


def write_query_pack_data(
    *,
    repo: str,
    path_pattern: re.Pattern[str],
    output_name: str,
    parser_language_by_language: dict[str, str] | None = None,
    tested_parser_refs_by_language: dict[str, list[str]] | None = None,
) -> CountVersionResult:
    snapshot = repo_snapshot(repo)
    const_prefix = query_pack_const_prefix(output_name)
    detail_const = f"{const_prefix}_LANGUAGE_DETAILS"
    languages_const = f"{const_prefix}_LANGUAGES"
    languages: dict[str, list[str]] = {}

    for path in snapshot["paths"]:
        match = path_pattern.match(path)

        if match is None:
            continue

        language, query_kind = match.groups()
        kinds = languages.setdefault(language, [])

        if query_kind not in kinds:
            kinds.append(query_kind)

    rows: list[JsonObject] = []

    for language, query_kinds in sorted(languages.items()):
        parser_language = None
        tested_parser_refs: list[str] = []

        if parser_language_by_language is not None:
            candidate = parser_language_by_language.get(language)

            if isinstance(candidate, str) and candidate and candidate != language:
                parser_language = candidate

        if tested_parser_refs_by_language is not None:
            tested_parser_refs = sorted(
                {
                    parser_ref
                    for parser_ref in tested_parser_refs_by_language.get(language, [])
                    if parser_ref
                },
            )

        row: JsonObject = {
            "language": language,
            "queryKinds": sorted(query_kinds),
        }

        if parser_language is not None:
            row["parserLanguage"] = parser_language

        if tested_parser_refs:
            row["testedParserRefs"] = tested_parser_refs

        rows.append(row)

    content = "".join(
        [
            "import type { QueryPackLanguage } from './types.js';\n\n",
            f"export const {detail_const}: QueryPackLanguage[] = {json.dumps(rows, indent=2)};\n\n",
            f"export const {languages_const} = {detail_const}.map(\n",
            "  ({ language }) => language,\n",
            ");\n",
        ],
    )

    _ = (SRC_DIR / output_name).write_text(content, encoding="utf8")
    return {
        "count": len(rows),
        "version": f"git-{short_commit(snapshot['source_commit'])}",
    }


def write_configured_query_pack_data(
    scrape_config: QueryPackScrapeConfig,
) -> list[QueryPackResult]:
    parser_language_cache: dict[str, dict[str, str]] = {}
    tested_parser_refs_cache: dict[str, dict[str, list[str]]] = {}
    results: list[QueryPackResult] = []

    for config in scrape_config["queryPacks"]:
        parser_language_by_language = None
        parser_language_source = config.get("parserLanguageSource")

        if parser_language_source is not None:
            parser_language_by_language = parser_language_cache.get(parser_language_source)

            if parser_language_by_language is None:
                parser_language_by_language = parser_language_source_data(
                    scrape_config["parserLanguageSources"][parser_language_source],
                )
                parser_language_cache[parser_language_source] = parser_language_by_language

        tested_parser_refs_by_language = None
        tested_parser_refs_source = config.get("testedParserRefsSource")

        if tested_parser_refs_source is not None:
            tested_parser_refs_by_language = tested_parser_refs_cache.get(tested_parser_refs_source)

            if tested_parser_refs_by_language is None:
                tested_parser_refs_by_language = tested_parser_refs_source_data(
                    scrape_config["testedParserRefsSources"][tested_parser_refs_source],
                )
                tested_parser_refs_cache[tested_parser_refs_source] = tested_parser_refs_by_language

        result = write_query_pack_data(
            repo=config["repo"],
            path_pattern=re.compile(config["pathPattern"]),
            output_name=config["outputName"],
            parser_language_by_language=parser_language_by_language,
            tested_parser_refs_by_language=tested_parser_refs_by_language,
        )
        results.append(
            {
                "repo": config["repo"],
                "outputName": config["outputName"],
                "count": result["count"],
                "version": result["version"],
            },
        )

    return results


def write_pulsar_pack_data() -> CountVersionResult:
    repo = "pulsar-edit/pulsar"
    snapshot = repo_snapshot(repo)
    default_branch = snapshot["default_branch"]
    rows: list[JsonObject] = []

    for path in sorted(snapshot["paths"]):
        if not re.match(r"^packages/language-[^/]+/grammars/.*\.(?:cson|json)$", path):
            continue

        text = repo_content_text(repo, path, default_branch)

        if "modern-tree-sitter" not in text:
            continue

        parser = parse_scalar_value(text, "parser")

        if parser is None:
            continue

        query_values = extract_query_values(text)

        if not query_values:
            continue

        grammar_stem = Path(path).stem
        grammar_key = grammar_stem.removeprefix("modern-tree-sitter-").removeprefix("tree-sitter-")
        package_path = "/".join(path.split("/")[:2])
        install_root = str(Path(path).parent).replace("\\", "/")
        language = pulsar_parser_language(parser)
        resolved_queries = resolve_query_paths(install_root, query_values)
        query_root = common_query_root(install_root, resolved_queries)
        name = parse_scalar_value(text, "name") or display_name(language)

        rows.append(
            {
                "id": normalize_id(f"{path.split('/')[1]}-{grammar_key}"),
                "name": name,
                "language": language,
                "packagePath": package_path,
                "installRoot": install_root,
                "queryRoot": query_root,
                "queryKinds": sorted(resolved_queries),
                "queries": resolved_queries,
            }
        )

    rows.sort(key=lambda row: (str(row["name"]), str(row["id"])))
    content = "".join(
        [
            "import type { QueryFiles } from './types.js';\n\n",
            "export interface PulsarGrammarPackData {\n",
            "  id: string;\n",
            "  name: string;\n",
            "  language: string;\n",
            "  packagePath: string;\n",
            "  installRoot: string;\n",
            "  queryRoot: string;\n",
            "  queryKinds: string[];\n",
            "  queries: Record<string, QueryFiles>;\n",
            "}\n\n",
            f"export const PULSAR_GRAMMAR_PACKS: PulsarGrammarPackData[] = {json.dumps(rows, indent=2)};\n",
        ],
    )

    _ = (SRC_DIR / "pulsar-data.ts").write_text(content, encoding="utf8")
    return {
        "count": len(rows),
        "version": f"git-{short_commit(snapshot['source_commit'])}",
    }


def write_zed_extension_data() -> CountVersionResult:
    snapshot = repo_snapshot("zed-industries/zed")
    parser_language_by_extension = load_zed_parser_language_map(
        re.compile(r"^extensions/([^/]+)/languages/([^/]+)/config\.toml$"),
    )
    packs: dict[tuple[str, str], list[str]] = {}

    for path in snapshot["paths"]:
        match = re.match(r"^extensions/([^/]+)/languages/([^/]+)/([^/]+)\.scm$", path)

        if match is None:
            continue

        extension, language, query_kind = match.groups()

        if extension.startswith("test-"):
            continue

        key = (extension, language)
        kinds = packs.setdefault(key, [])

        if query_kind not in kinds:
            kinds.append(query_kind)

    rows: list[JsonObject] = [
        {
            "extension": extension,
            "language": language,
            **(
                {
                    "parserLanguage": parser_language_by_extension[(extension, language)],
                }
                if parser_language_by_extension.get((extension, language)) not in {None, language}
                else {}
            ),
            "queryKinds": sorted(query_kinds),
        }
        for (extension, language), query_kinds in sorted(packs.items())
    ]

    content = "".join(
        [
            "export interface ZedExtensionPackData {\n",
            "  extension: string;\n",
            "  language: string;\n",
            "  parserLanguage?: string;\n",
            "  queryKinds: string[];\n",
            "}\n\n",
            f"export const ZED_EXTENSION_PACKS: ZedExtensionPackData[] = {json.dumps(rows, indent=2)};\n",
        ],
    )

    _ = (SRC_DIR / "zed-extension-data.ts").write_text(content, encoding="utf8")
    return {
        "count": len(rows),
        "version": f"git-{short_commit(snapshot['source_commit'])}",
    }


def latest_release_tag(repo: str) -> str | None:
    if repo in LATEST_RELEASE_CACHE:
        return LATEST_RELEASE_CACHE[repo]

    try:
        tag = gh_api(f"repos/{repo}/releases/latest", ".tag_name")
    except RuntimeError:
        tag = None

    LATEST_RELEASE_CACHE[repo] = tag
    return tag


def normalize_semver(tag: str | None) -> str | None:
    if tag is None:
        return None

    normalized = tag.removeprefix("v")
    return normalized if re.match(r"^\d+\.\d+\.\d+", normalized) else None


def parser_summary(
    descriptor: dict[str, object],
    query_kinds: list[str],
    upstream_semver: str | None,
) -> str:
    repo = str(descriptor.get("github_repo") or descriptor.get("repo") or descriptor_package(descriptor))
    parts = [
        "Pinned in nvim-treesitter."
        if descriptor.get("discovery_source") == "nvim-treesitter"
        else "Pinned in Helix."
        if descriptor.get("discovery_source") == "helix"
        else "Real parser repo snapshot."
    ]

    if query_kinds:
        parts.append(f"{', '.join(query_kinds)} queries.")
    else:
        parts.append("No bundled query files detected.")

    if upstream_semver:
        parts.append(f"Latest release tag {upstream_semver}.")

    if repo.startswith("tree-sitter/"):
        parts.append("Official tree-sitter repository.")
    elif repo.startswith("tree-sitter-grammars/"):
        parts.append("Maintained in tree-sitter-grammars.")

    location = descriptor.get("location")

    if isinstance(location, str) and location:
        parts.append(f"Grammar path {location}.")

    return " ".join(parts)


def backfill_parser_catalog_bundled_queries() -> UpdateResult:
    catalog_path = SRC_DIR / "parser-catalog.ts"
    content = catalog_path.read_text(encoding="utf8")
    match = re.search(
        r"export const PARSER_RELEASES: ParserRelease\[] = (\[.*\]);\s*$",
        content,
        re.S,
    )

    if match is None:
        raise RuntimeError("Failed to parse parser catalog")

    releases = load_json_array(match.group(1))
    updated = 0

    for release in releases:
        if not isinstance(release, dict):
            continue

        release_object = cast(JsonObject, release)

        bundled_queries = release_object.get("bundledQueries")

        if isinstance(bundled_queries, dict) and bundled_queries:
            continue

        package = release_object.get("package")

        if not isinstance(package, str) or not package.startswith("github.com/"):
            continue

        summary = release_object.get("summary")
        location_match = re.search(r"Grammar path (.+?)\.", summary) if isinstance(summary, str) else None
        descriptor: ParserDescriptor = {
            "language": release_object.get("language"),
            "github_repo": package.removeprefix("github.com/"),
            "bundled_query_kinds": [],
        }

        if location_match is not None:
            descriptor["location"] = location_match.group(1)

        query_kinds, bundled_queries, _location = discover_descriptor_bundled_queries(descriptor)

        if not bundled_queries:
            continue

        release_object["bundledQueryKinds"] = query_kinds
        release_object["bundledQueries"] = bundled_queries

        if isinstance(summary, str) and "No bundled query files detected." in summary:
            release_object["summary"] = summary.replace(
                "No bundled query files detected.",
                f"{', '.join(query_kinds)} queries.",
            )

        updated += 1

    content = "".join(
        [
            "import type { ParserRelease } from './types.js';\n\n",
            f"export const PARSER_RELEASES: ParserRelease[] = {json.dumps(releases, indent=2)};\n",
        ],
    )
    _ = catalog_path.write_text(content, encoding="utf8")
    return {"updated": updated}


def write_parser_catalog() -> CountResult:
    parser_descriptors = discover_parser_descriptors()
    releases: list[JsonObject] = []

    for descriptor in parser_descriptors:
        github_repo = descriptor.get("github_repo")
        source_commit = descriptor.get("source_commit")
        last_updated = None

        if not isinstance(source_commit, str) or not source_commit:
            if isinstance(github_repo, str) and github_repo:
                source_commit = repo_head_commit(
                    github_repo,
                    str(descriptor["default_branch"]),
                )
            else:
                continue

        if isinstance(github_repo, str) and github_repo:
            last_updated = repo_commit_date(github_repo, source_commit)

        bundled_query_kinds, bundled_queries, bundled_query_location = discover_descriptor_bundled_queries(
            descriptor,
        )

        if bundled_query_location and not descriptor.get("location"):
            descriptor["location"] = bundled_query_location

        # nvim-treesitter adds a large long tail of parser repos. Avoid live release
        # lookups for those entries or catalog generation turns into hundreds of API
        # requests for metadata we do not currently need.
        metadata_version = descriptor.get("metadata_version")
        upstream_semver = (
            normalize_semver(latest_release_tag(github_repo))
            if (
                isinstance(github_repo, str)
                and github_repo
                and descriptor.get("discovery_source") == "tree-sitter-json"
            )
            else None
        ) or (metadata_version if isinstance(metadata_version, str) else None)
        package = descriptor_package(descriptor)
        wasm = package.startswith("github.com/tree-sitter/tree-sitter-")
        source_archive = package.startswith(("github.com/", "gitlab.com/"))

        releases.append(
            {
                "id": descriptor["id"],
                "name": descriptor["name"],
                "language": descriptor["language"],
                "package": package,
                "version": f"git-{short_commit(str(source_commit))}",
                "sourceCommit": source_commit,
                "lastUpdated": last_updated,
                "upstreamSemver": upstream_semver,
                "abi": 15,
                "owners": descriptor["owners"],
                "capabilities": {
                    "buildFromSource": True,
                    "sourceArchive": source_archive,
                    "wasm": wasm,
                },
                "artifacts": [
                    *([{"kind": "source-archive", "format": "tar.gz"}] if source_archive else []),
                    *([{"kind": "wasm", "format": "wasm"}] if wasm else []),
                ],
                "bundledQueryKinds": bundled_query_kinds,
                "bundledQueries": bundled_queries,
                "bundledQueryEditors": bundled_query_editors(
                    descriptor,
                    bundled_queries,
                    str(source_commit),
                ),
                "summary": parser_summary(
                    descriptor,
                    bundled_query_kinds,
                    upstream_semver,
                ),
            }
        )

    content = "".join(
        [
            "import type { ParserRelease } from './types.js';\n\n",
            f"export const PARSER_RELEASES: ParserRelease[] = {json.dumps(releases, indent=2)};\n",
        ],
    )

    _ = (SRC_DIR / "parser-catalog.ts").write_text(content, encoding="utf8")
    return {"count": len(releases)}


def write_catalog_meta(
    *,
    query_pack_results: list[QueryPackResult],
    pulsar_version: str,
    zed_version: str,
) -> None:
    generated_at = date.today().isoformat()
    content = "".join(
        [
            f"export const CATALOG_GENERATED_AT = '{generated_at}';\n",
            *[
                f"export const {query_pack_const_prefix(result['outputName'])}_VERSION = '{result['version']}';\n"
                for result in query_pack_results
            ],
            f"export const PULSAR_VERSION = '{pulsar_version}';\n",
            f"export const ZED_VERSION = '{zed_version}';\n",
        ],
    )

    _ = (SRC_DIR / "catalog-meta.ts").write_text(content, encoding="utf8")


def scrape_summary(
    parser_count: int,
    query_pack_results: list[QueryPackResult],
    pulsar_count: int,
    zed_extension_count: int,
) -> str:
    parts = ["Scraped catalog: ", f"{parser_count} parsers, "]

    for result in query_pack_results:
        parts.append(f"{result['count']} {query_pack_summary_label(result['outputName'])}, ")

    parts.extend(
        [
            f"{pulsar_count} pulsar grammars, ",
            f"{zed_extension_count} zed extension packs.",
        ],
    )

    return "".join(parts)


def main(argv: list[str]) -> None:
    query_pack_results = write_configured_query_pack_data(
        load_query_pack_scrape_config(config_path_from_argv(argv)),
    )
    pulsar = write_pulsar_pack_data()
    zed_extensions = write_zed_extension_data()
    parser_catalog = write_parser_catalog()
    write_catalog_meta(
        query_pack_results=query_pack_results,
        pulsar_version=pulsar["version"],
        zed_version=zed_extensions["version"],
    )

    print(
        scrape_summary(
            parser_catalog["count"],
            query_pack_results,
            pulsar["count"],
            zed_extensions["count"],
        ),
    )


if __name__ == "__main__":
    main(sys.argv[1:])
