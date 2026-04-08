import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { INDEX_DATA } from '../site/dist/index-data.js';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const targetIndex = new Map(INDEX_DATA.targets.map((target) => [target.id, target]));
const LANGUAGE_ALIASES = {
  'c-sharp': 'c_sharp',
  'common-lisp': 'commonlisp',
  'markdown.inline': 'markdown_inline',
  'ocaml-interface': 'ocaml_interface',
  'php-only': 'php_only',
  protobuf: 'proto',
};

function unique(values) {
  return [...new Set(values)];
}

function normalizeLanguageId(language) {
  const normalized = language.toLowerCase().replace(/[.-]/g, '_');
  return LANGUAGE_ALIASES[normalized] ?? normalized;
}

function packLanguageDetails(pack) {
  if (pack.languageDetails?.length) {
    return pack.languageDetails;
  }

  return pack.languages.map((language) => ({
    language,
    queryKinds: pack.queryKinds,
  }));
}

function packLanguages(pack) {
  return packLanguageDetails(pack).map(({ language }) => language);
}

function packQueryKindsForLanguage(pack, language) {
  return unique(
    packLanguageDetails(pack)
      .filter((entry) => normalizeLanguageId(entry.language) === language)
      .flatMap((entry) => entry.queryKinds),
  );
}

function packParserLanguagesForLanguage(pack, language) {
  return unique(
    packLanguageDetails(pack)
      .filter((entry) => normalizeLanguageId(entry.language) === language)
      .map((entry) => normalizeLanguageId(entry.parserLanguage ?? entry.language)),
  );
}

const languages = unique([
  ...INDEX_DATA.parsers.map((parser) => normalizeLanguageId(parser.language)),
  ...INDEX_DATA.queryPacks.flatMap((pack) => packLanguages(pack).map(normalizeLanguageId)),
]).sort();

const languageItems = languages.map((language) => {
  const queryPacks = INDEX_DATA.queryPacks.filter((pack) =>
    packLanguages(pack).some((entry) => normalizeLanguageId(entry) === language),
  );
  const sharedParserLanguages = unique(
    queryPacks.flatMap((pack) => packParserLanguagesForLanguage(pack, language)),
  )
    .filter((parserLanguage) => parserLanguage !== language)
    .sort();
  const parserLanguages = unique([
    language,
    ...sharedParserLanguages,
  ]).sort();
  const parsers = INDEX_DATA.parsers.filter((parser) =>
    parserLanguages.includes(normalizeLanguageId(parser.language)),
  );
  const editors = unique(
    queryPacks.flatMap((pack) =>
      pack.targets
        .map((targetId) => targetIndex.get(targetId)?.editor)
        .filter(Boolean),
    ),
  ).sort();
  const queryKinds = unique(
    queryPacks.flatMap((pack) => packQueryKindsForLanguage(pack, language)),
  ).sort();

  return {
    language,
    ...(sharedParserLanguages.length === 1
      ? { parserLanguage: sharedParserLanguages[0] }
      : {}),
    parserCount: parsers.length,
    queryPackCount: queryPacks.length,
    editors,
    queryKinds,
    queryRoots: unique(queryPacks.map((pack) => pack.layout.queryRoot)).sort(),
    hasWasm: parsers.some((parser) => parser.capabilities.wasm),
    hasReleaseArtifacts: parsers.some((parser) => parser.capabilities.sourceArchive),
  };
});

const allOwners = unique([
  ...INDEX_DATA.parsers.flatMap((parser) => parser.owners),
  ...INDEX_DATA.queryPacks.flatMap((pack) => pack.owners),
]).sort();

const allEditors = unique(INDEX_DATA.targets.map((target) => target.editor)).sort();
const allQueryKinds = unique([
  ...INDEX_DATA.parsers.flatMap((parser) => parser.bundledQueryKinds),
  ...INDEX_DATA.queryPacks.flatMap((pack) => pack.queryKinds),
]).sort();

const files = [
  {
    name: 'parsers.json',
    payload: {
      generatedAt: INDEX_DATA.generatedAt,
      kind: 'prototype-parsers',
      count: INDEX_DATA.parsers.length,
      items: INDEX_DATA.parsers,
    },
  },
  {
    name: 'query-packs.json',
    payload: {
      generatedAt: INDEX_DATA.generatedAt,
      kind: 'prototype-query-packs',
      count: INDEX_DATA.queryPacks.length,
      items: INDEX_DATA.queryPacks,
    },
  },
  {
    name: 'targets.json',
    payload: {
      generatedAt: INDEX_DATA.generatedAt,
      kind: 'prototype-targets',
      count: INDEX_DATA.targets.length,
      items: INDEX_DATA.targets,
    },
  },
  {
    name: 'languages.json',
    payload: {
      generatedAt: INDEX_DATA.generatedAt,
      kind: 'prototype-languages',
      count: languageItems.length,
      items: languageItems,
    },
  },
];

const rootIndex = {
  generatedAt: INDEX_DATA.generatedAt,
  kind: 'prototype-index',
  counts: {
    parsers: INDEX_DATA.parsers.length,
    queryPacks: INDEX_DATA.queryPacks.length,
    targets: INDEX_DATA.targets.length,
    languages: languageItems.length,
    editors: allEditors.length,
    owners: allOwners.length,
    queryKinds: allQueryKinds.length,
  },
  files: {
    parsers: 'parsers.json',
    queryPacks: 'query-packs.json',
    targets: 'targets.json',
    languages: 'languages.json',
  },
};

for (const file of files) {
  await writeFile(
    resolve(repoRoot, file.name),
    `${JSON.stringify(file.payload, null, 2)}\n`,
    'utf8',
  );
}

await writeFile(
  resolve(repoRoot, 'index.json'),
  `${JSON.stringify(rootIndex, null, 2)}\n`,
  'utf8',
);
