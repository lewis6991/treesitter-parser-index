import type { ParserRelease } from './types.js';

export const PARSER_RELEASES: ParserRelease[] = [
  {
    "id": "parser-maebrooks-gren",
    "name": "MaeBrooksGren",
    "language": "MaeBrooks/gren",
    "package": "github.com/gren-lang/tree-sitter-gren",
    "version": "git-cecd8ce",
    "sourceCommit": "cecd8ce9b18f1803d37682f33b6224978fd04d31",
    "lastUpdated": "2026-03-31",
    "upstreamSemver": "2.0.0",
    "abi": 15,
    "owners": [
      "gren-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2.0.0."
  },
  {
    "id": "parser-abl",
    "name": "abl",
    "language": "abl",
    "package": "github.com/usagi-coffee/tree-sitter-abl",
    "version": "git-28053ba",
    "sourceCommit": "28053ba2253e5a1985e76195533f75413f3fe997",
    "lastUpdated": "2026-04-08",
    "upstreamSemver": "0.0.51",
    "abi": 15,
    "owners": [
      "usagi-coffee"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-abl.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.51."
  },
  {
    "id": "parser-ada",
    "name": "Ada",
    "language": "ada",
    "package": "github.com/briot/tree-sitter-ada",
    "version": "git-6b58259",
    "sourceCommit": "6b58259a08b1a22ba0247a7ce30be384db618da6",
    "lastUpdated": "2025-12-16",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "briot"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-adl",
    "name": "Adl",
    "language": "adl",
    "package": "github.com/adl-lang/tree-sitter-adl",
    "version": "git-2787d04",
    "sourceCommit": "2787d04beadfbe154d3f2da6e98dc45a1b134bbf",
    "lastUpdated": "2024-04-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "adl-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-agda",
    "name": "Agda",
    "language": "agda",
    "package": "github.com/tree-sitter/tree-sitter-agda",
    "version": "git-e8d47a6",
    "sourceCommit": "e8d47a6987effe34d5595baf321d82d3519a8527",
    "lastUpdated": "2025-08-30",
    "upstreamSemver": "1.3.3",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-agda.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.3.3. Official tree-sitter repository."
  },
  {
    "id": "parser-al",
    "name": "AL",
    "language": "al",
    "package": "github.com/SShadowS/tree-sitter-al",
    "version": "git-3e4ccb6",
    "sourceCommit": "3e4ccb672f27d1ad673a8a995b1f5c770bb0f738",
    "lastUpdated": "2026-04-01",
    "upstreamSemver": "2.5.0",
    "abi": 15,
    "owners": [
      "SShadowS"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "dll",
        "name": "tree-sitter-al.dll"
      },
      {
        "kind": "release-asset",
        "format": "dylib",
        "name": "tree-sitter-al.dylib"
      },
      {
        "kind": "release-asset",
        "format": "so",
        "name": "tree-sitter-al.so"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-al.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 2.5.0."
  },
  {
    "id": "parser-alloy",
    "name": "Alloy",
    "language": "alloy",
    "package": "github.com/mattsre/tree-sitter-alloy",
    "version": "git-58d462b",
    "sourceCommit": "58d462b1cdb077682b130caa324f3822aeb00b8e",
    "lastUpdated": "2025-11-29",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "mattsre"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-amber",
    "name": "Amber",
    "language": "amber",
    "package": "github.com/amber-lang/tree-sitter-amber",
    "version": "git-dc69f42",
    "sourceCommit": "dc69f42449fd3c807bacefa398263f62e581f755",
    "lastUpdated": "2025-11-25",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "amber-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-angular",
    "name": "Angular",
    "language": "angular",
    "package": "github.com/dlvandenberg/tree-sitter-angular",
    "version": "git-f0d0685",
    "sourceCommit": "f0d0685701b70883fa2dfe94ee7dc27965cab841",
    "lastUpdated": "2026-02-17",
    "upstreamSemver": "0.8.3",
    "abi": 15,
    "owners": [
      "dlvandenberg"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.8.3."
  },
  {
    "id": "parser-apex",
    "name": "apex",
    "language": "apex",
    "package": "github.com/aheber/tree-sitter-sfapex",
    "version": "git-3597575",
    "sourceCommit": "3597575a429766dd7ecce9f5bb97f6fec4419d5d",
    "lastUpdated": "2025-02-13",
    "upstreamSemver": "0.0.10",
    "abi": 14,
    "owners": [
      "aheber"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "apex/queries/highlights.scm",
        "sosl/queries/highlights.scm",
        "soql/queries/highlights.scm"
      ],
      "tags": [
        "apex/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.0.10. Grammar path apex."
  },
  {
    "id": "parser-arduino",
    "name": "Arduino",
    "language": "arduino",
    "package": "github.com/tree-sitter-grammars/tree-sitter-arduino",
    "version": "git-11dd46c",
    "sourceCommit": "11dd46c9ae25135c473c0003a133bb06a484af0c",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.24.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-arduino.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.24.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-asm",
    "name": "Asm",
    "language": "asm",
    "package": "github.com/RubixDev/tree-sitter-asm",
    "version": "git-839741f",
    "sourceCommit": "839741fef4dab5128952334624905c82b40c7133",
    "lastUpdated": "2025-11-08",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "RubixDev"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/asm/highlights.scm"
      ],
      "injections": [
        "queries/asm/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-astro",
    "name": "Astro",
    "language": "astro",
    "package": "github.com/virchau13/tree-sitter-astro",
    "version": "git-947e930",
    "sourceCommit": "947e93089e60c66e681eba22283f4037841451e7",
    "lastUpdated": "2022-09-13",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "virchau13"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-authzed",
    "name": "Authzed",
    "language": "authzed",
    "package": "github.com/mleonidas/tree-sitter-authzed",
    "version": "git-83e5c26",
    "sourceCommit": "83e5c26a8687eb4688fe91d690c735cc3d21ad81",
    "lastUpdated": "2025-09-11",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "mleonidas"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-awk",
    "name": "Awk",
    "language": "awk",
    "package": "github.com/Beaglefoot/tree-sitter-awk",
    "version": "git-a799bc5",
    "sourceCommit": "a799bc5da7c2a84bc9a06ba5f3540cf1191e4ee3",
    "lastUpdated": "2022-03-30",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "Beaglefoot"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-bash",
    "name": "Bash",
    "language": "bash",
    "package": "github.com/tree-sitter/tree-sitter-bash",
    "version": "git-a06c2e4",
    "sourceCommit": "a06c2e4415e9bc0346c6b86d401879ffb44058f7",
    "lastUpdated": "2025-12-02",
    "upstreamSemver": "0.25.1",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-bash.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.25.1. Official tree-sitter repository."
  },
  {
    "id": "parser-basic",
    "name": "Basic",
    "language": "basic",
    "package": "github.com/Ra77a3l3-jar/tree-sitter-basic",
    "version": "git-a98449c",
    "sourceCommit": "a98449c11d6c688b54c1ca132148a62d7e586a2a",
    "lastUpdated": "2025-11-11",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "Ra77a3l3-jar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-bass",
    "name": "Bass",
    "language": "bass",
    "package": "github.com/vito/tree-sitter-bass",
    "version": "git-501133e",
    "sourceCommit": "501133e260d768ed4e1fd7374912ed5c86d6fd90",
    "lastUpdated": "2022-09-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "vito"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-polarmutex-beancount-beancount",
    "name": "Beancount",
    "language": "beancount",
    "package": "github.com/polarmutex/tree-sitter-beancount",
    "version": "git-9db1ad0",
    "sourceCommit": "9db1ad0d5047e5e7f12db50741aba1c32716779a",
    "lastUpdated": "2026-04-09",
    "upstreamSemver": "2.5.1",
    "abi": 15,
    "owners": [
      "polarmutex"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-beancount.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 2.5.1."
  },
  {
    "id": "parser-yagebu-beancount-beancount",
    "name": "Beancount",
    "language": "beancount",
    "package": "github.com/yagebu/tree-sitter-beancount",
    "version": "git-f2756d2",
    "sourceCommit": "f2756d2f50218437d2854fb591f951877235f29b",
    "lastUpdated": "2026-01-11",
    "upstreamSemver": "0.0.3",
    "abi": 15,
    "owners": [
      "yagebu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-beancount.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.3."
  },
  {
    "id": "parser-bibtex",
    "name": "Bibtex",
    "language": "bibtex",
    "package": "github.com/latex-lsp/tree-sitter-bibtex",
    "version": "git-8d04ed2",
    "sourceCommit": "8d04ed27b3bc7929f14b7df9236797dab9f3fa66",
    "lastUpdated": "2025-04-19",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "latex-lsp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-bicep",
    "name": "Bicep",
    "language": "bicep",
    "package": "github.com/tree-sitter-grammars/tree-sitter-bicep",
    "version": "git-bff5988",
    "sourceCommit": "bff59884307c0ab009bd5e81afd9324b46a6c0f9",
    "lastUpdated": "2024-12-22",
    "upstreamSemver": "1.1.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-bicep.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-bitbake",
    "name": "Bitbake",
    "language": "bitbake",
    "package": "github.com/tree-sitter-grammars/tree-sitter-bitbake",
    "version": "git-10bacac",
    "sourceCommit": "10bacac929ff36a1e8f4056503fe4f8717b21b94",
    "lastUpdated": "2023-11-11",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-blade",
    "name": "Blade",
    "language": "blade",
    "package": "github.com/EmranMR/tree-sitter-blade",
    "version": "git-b9436b7",
    "sourceCommit": "b9436b7b936907aff730de0dac1b99d7c632cc86",
    "lastUpdated": "2026-03-06",
    "upstreamSemver": "0.12.3",
    "abi": 15,
    "owners": [
      "EmranMR"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.12.3."
  },
  {
    "id": "parser-blueprint",
    "name": "Blueprint",
    "language": "blueprint",
    "package": "gitlab.com/gabmus/tree-sitter-blueprint",
    "version": "git-355ef84",
    "sourceCommit": "355ef84ef8a958ac822117b652cf4d49bac16c79",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "gabmus"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-boogie",
    "name": "Boogie",
    "language": "boogie",
    "package": "github.com/katrinafyi/tree-sitter-boogie",
    "version": "git-b7fb601",
    "sourceCommit": "b7fb601ee0a8b9441b461c5f4c526f6a62a02187",
    "lastUpdated": "2026-03-24",
    "upstreamSemver": "0.1.0",
    "abi": null,
    "owners": [
      "katrinafyi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-bp",
    "name": "Bp",
    "language": "bp",
    "package": "github.com/ambroisie/tree-sitter-bp",
    "version": "git-ee641d1",
    "sourceCommit": "ee641d15390183d7535777947ce0f2f1fbcee69f",
    "lastUpdated": "2025-04-02",
    "upstreamSemver": "0.7.0",
    "abi": 15,
    "owners": [
      "ambroisie"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.7.0."
  },
  {
    "id": "parser-bpftrace",
    "name": "Bpftrace",
    "language": "bpftrace",
    "package": "github.com/sgruszka/tree-sitter-bpftrace",
    "version": "git-774f445",
    "sourceCommit": "774f4458ad39691336ead1ee361b22434c4cdec7",
    "lastUpdated": "2026-02-17",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "sgruszka"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-brightscript",
    "name": "Brightscript",
    "language": "brightscript",
    "package": "github.com/ajdelcimmuto/tree-sitter-brightscript",
    "version": "git-253fdfa",
    "sourceCommit": "253fdfaa23814cb46c2d5fc19049fa0f2f62c6da",
    "lastUpdated": "2025-12-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ajdelcimmuto"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-c",
    "name": "C",
    "language": "c",
    "package": "github.com/tree-sitter/tree-sitter-c",
    "version": "git-ae19b67",
    "sourceCommit": "ae19b676b13bdcc13b7665397e6d9b14975473dd",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.24.1",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-c.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.24.1. Official tree-sitter repository."
  },
  {
    "id": "parser-c-sharp",
    "name": "CSharp",
    "language": "c-sharp",
    "package": "github.com/tree-sitter/tree-sitter-c-sharp",
    "version": "git-8836663",
    "sourceCommit": "88366631d598ce6595ec655ce1591b315cffb14c",
    "lastUpdated": "2026-02-17",
    "upstreamSemver": "0.23.1",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-c_sharp.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.23.1. Official tree-sitter repository."
  },
  {
    "id": "parser-c3",
    "name": "C3",
    "language": "c3",
    "package": "github.com/c3lang/tree-sitter-c3",
    "version": "git-8c172f5",
    "sourceCommit": "8c172f52b965e78d36828f5b8e92091b4bc6d9e3",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": "0.8.3",
    "abi": 15,
    "owners": [
      "c3lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-c3.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.8.3."
  },
  {
    "id": "parser-caddy",
    "name": "Caddy",
    "language": "caddy",
    "package": "github.com/opa-oz/tree-sitter-caddy",
    "version": "git-9b3fde9",
    "sourceCommit": "9b3fde99d3d74345b85b655a6d8065e004fbe26f",
    "lastUpdated": "2026-01-02",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "opa-oz"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-caddyfile",
    "name": "Caddyfile",
    "language": "caddyfile",
    "package": "github.com/caddyserver/tree-sitter-caddyfile",
    "version": "git-8951716",
    "sourceCommit": "8951716aa2855e02dada302c540a90f277546095",
    "lastUpdated": "2026-02-14",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "caddyserver"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. highlights, injections, locals queries."
  },
  {
    "id": "parser-starkware-libs-cairo-cairo",
    "name": "Cairo",
    "language": "cairo",
    "package": "github.com/starkware-libs/tree-sitter-cairo",
    "version": "git-4c6a256",
    "sourceCommit": "4c6a25680546761b80a710ead1dd34e76c203125",
    "lastUpdated": "2025-01-27",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "starkware-libs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-cairo-cairo",
    "name": "Cairo",
    "language": "cairo",
    "package": "github.com/tree-sitter-grammars/tree-sitter-cairo",
    "version": "git-6238f60",
    "sourceCommit": "6238f609bea233040fe927858156dee5515a0745",
    "lastUpdated": "2024-04-27",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-capnp",
    "name": "Capnp",
    "language": "capnp",
    "package": "github.com/tree-sitter-grammars/tree-sitter-capnp",
    "version": "git-7b0883c",
    "sourceCommit": "7b0883c03e5edd34ef7bcf703194204299d7099f",
    "lastUpdated": "2024-04-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-cel",
    "name": "CEL",
    "language": "cel",
    "package": "github.com/bufbuild/tree-sitter-cel",
    "version": "git-fd2e8ef",
    "sourceCommit": "fd2e8efaa07e71e46dcc1d5c4c85556a742d8c36",
    "lastUpdated": "2026-03-04",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "bufbuild"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-cfengine",
    "name": "CFEngine",
    "language": "cfengine",
    "package": "github.com/olehermanse/tree-sitter-cfengine",
    "version": "git-0460781",
    "sourceCommit": "04607817eea5b0f05b35de517a2453e8e23c971b",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "1.1.8",
    "abi": 15,
    "owners": [
      "olehermanse"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-cfengine.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.8."
  },
  {
    "id": "parser-cfhtml",
    "name": "Cfhtml",
    "language": "cfhtml",
    "package": "github.com/cfmleditor/tree-sitter-cfml",
    "version": "git-e9f0e9d",
    "sourceCommit": "e9f0e9dfb6e562519476eda8300fe6481b8f6617",
    "lastUpdated": "2026-03-22",
    "upstreamSemver": "0.26.2",
    "abi": 15,
    "owners": [
      "cfmleditor"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "indents",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "cfhtml/queries/highlights.scm"
      ],
      "indents": [
        "cfhtml/queries/indents.scm"
      ],
      "injections": [
        "cfhtml/queries/injections.scm"
      ],
      "tags": [
        "cfhtml/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, indents, injections, tags queries. Latest release tag 0.26.2. Grammar path cfhtml."
  },
  {
    "id": "parser-cfml",
    "name": "Cfml",
    "language": "cfml",
    "package": "github.com/cfmleditor/tree-sitter-cfml",
    "version": "git-e9f0e9d",
    "sourceCommit": "e9f0e9dfb6e562519476eda8300fe6481b8f6617",
    "lastUpdated": "2026-03-22",
    "upstreamSemver": "0.26.2",
    "abi": 15,
    "owners": [
      "cfmleditor"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "indents",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "cfml/queries/highlights.scm"
      ],
      "indents": [
        "cfml/queries/indents.scm"
      ],
      "injections": [
        "cfml/queries/injections.scm"
      ],
      "tags": [
        "cfml/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, indents, injections, tags queries. Latest release tag 0.26.2. Grammar path cfml."
  },
  {
    "id": "parser-cfquery",
    "name": "Cfquery",
    "language": "cfquery",
    "package": "github.com/cfmleditor/tree-sitter-cfml",
    "version": "git-e9f0e9d",
    "sourceCommit": "e9f0e9dfb6e562519476eda8300fe6481b8f6617",
    "lastUpdated": "2026-03-22",
    "upstreamSemver": "0.26.2",
    "abi": 15,
    "owners": [
      "cfmleditor"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "cfquery/queries/highlights.scm"
      ],
      "tags": [
        "cfquery/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.26.2. Grammar path cfquery."
  },
  {
    "id": "parser-cfscript",
    "name": "Cfscript",
    "language": "cfscript",
    "package": "github.com/cfmleditor/tree-sitter-cfml",
    "version": "git-e9f0e9d",
    "sourceCommit": "e9f0e9dfb6e562519476eda8300fe6481b8f6617",
    "lastUpdated": "2026-03-22",
    "upstreamSemver": "0.26.2",
    "abi": 15,
    "owners": [
      "cfmleditor"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "cfscript/queries/highlights.scm"
      ],
      "injections": [
        "cfscript/queries/injections.scm"
      ],
      "tags": [
        "cfscript/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.26.2. Grammar path cfscript."
  },
  {
    "id": "parser-cgsql",
    "name": "CGSQL",
    "language": "cgsql",
    "package": "github.com/ricomariani/tree-sitter-cgsql",
    "version": "git-a52fd00",
    "sourceCommit": "a52fd004e5977b886b931a54b1bdcbd91101d862",
    "lastUpdated": "2025-03-09",
    "upstreamSemver": "0.1.0",
    "abi": null,
    "owners": [
      "ricomariani"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-chatito",
    "name": "Chatito",
    "language": "chatito",
    "package": "github.com/tree-sitter-grammars/tree-sitter-chatito",
    "version": "git-c0ed82c",
    "sourceCommit": "c0ed82c665b732395073f635c74c300f09530a7f",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.5.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-chatito.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-chatl.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.5.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-chatl",
    "name": "Chatl",
    "language": "chatl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-chatito",
    "version": "git-c0ed82c",
    "sourceCommit": "c0ed82c665b732395073f635c74c300f09530a7f",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.5.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-chatito.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-chatl.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "extensions/chatl/queries/highlights.scm"
      ],
      "tags": [
        "extensions/chatl/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.5.0. Maintained in tree-sitter-grammars. Grammar path extensions/chatl."
  },
  {
    "id": "parser-chuck",
    "name": "Chuck",
    "language": "chuck",
    "package": "github.com/tymbalodeon/tree-sitter-chuck",
    "version": "git-68fb7bd",
    "sourceCommit": "68fb7bdba480915d87177feaa5593a666c0bb602",
    "lastUpdated": "2026-03-28",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "tymbalodeon"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-circom",
    "name": "Circom",
    "language": "circom",
    "package": "github.com/Decurity/tree-sitter-circom",
    "version": "git-0215052",
    "sourceCommit": "02150524228b1e6afef96949f2d6b7cc0aaf999e",
    "lastUpdated": "2024-09-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Decurity"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-clarity",
    "name": "Clarity",
    "language": "clarity",
    "package": "github.com/xlittlerag/tree-sitter-clarity",
    "version": "git-7fa5482",
    "sourceCommit": "7fa54825fdd971a1a676f885384f024fe2b7384a",
    "lastUpdated": "2024-12-17",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "xlittlerag"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-clojure",
    "name": "Clojure",
    "language": "clojure",
    "package": "github.com/sogaiu/tree-sitter-clojure",
    "version": "git-e57c569",
    "sourceCommit": "e57c569ae332ca365da623712ae1f50f84daeae2",
    "lastUpdated": "2022-06-03",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "sogaiu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-cmake",
    "name": "Cmake",
    "language": "cmake",
    "package": "github.com/uyha/tree-sitter-cmake",
    "version": "git-c7b2a71",
    "sourceCommit": "c7b2a71e7f8ecb167fad4c97227c838439280175",
    "lastUpdated": "2025-10-17",
    "upstreamSemver": "0.7.2",
    "abi": 14,
    "owners": [
      "uyha"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.7.2."
  },
  {
    "id": "parser-comment",
    "name": "Comment",
    "language": "comment",
    "package": "github.com/stsewd/tree-sitter-comment",
    "version": "git-66272d2",
    "sourceCommit": "66272d2b6c73fb61157541b69dd0a7ce7b42a5ad",
    "lastUpdated": "2025-12-16",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "stsewd"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.3.0."
  },
  {
    "id": "parser-commonlisp",
    "name": "CommonLisp",
    "language": "commonlisp",
    "package": "github.com/tree-sitter-grammars/tree-sitter-commonlisp",
    "version": "git-3232350",
    "sourceCommit": "32323509b3d9fe96607d151c2da2c9009eb13a2f",
    "lastUpdated": "2025-03-16",
    "upstreamSemver": "0.4.1",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.4.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-cooklang",
    "name": "Cooklang",
    "language": "cooklang",
    "package": "github.com/addcninblue/tree-sitter-cooklang",
    "version": "git-4ebe237",
    "sourceCommit": "4ebe237c1cf64cf3826fc249e9ec0988fe07e58e",
    "lastUpdated": "2024-05-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "addcninblue"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-corn",
    "name": "Corn",
    "language": "corn",
    "package": "github.com/corn-config/tree-sitter-corn",
    "version": "git-4646547",
    "sourceCommit": "464654742cbfd3a3de560aba120998f1d5dfa844",
    "lastUpdated": "2024-06-16",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "corn-config"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-fvacek-cpon-cpon",
    "name": "Cpon",
    "language": "cpon",
    "package": "github.com/fvacek/tree-sitter-cpon",
    "version": "git-0d01fcd",
    "sourceCommit": "0d01fcdae5a53191df5b1349f9bce053833270e7",
    "lastUpdated": "2022-06-01",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "fvacek"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-cpon-cpon",
    "name": "Cpon",
    "language": "cpon",
    "package": "github.com/tree-sitter-grammars/tree-sitter-cpon",
    "version": "git-594289e",
    "sourceCommit": "594289eadfec719198e560f9d7fd243c4db678d5",
    "lastUpdated": "2024-04-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-cpp",
    "name": "CPP",
    "language": "cpp",
    "package": "github.com/tree-sitter/tree-sitter-cpp",
    "version": "git-8b5b49e",
    "sourceCommit": "8b5b49eb196bec7040441bee33b2c9a4838d6967",
    "lastUpdated": "2026-02-25",
    "upstreamSemver": "0.23.4",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-cpp.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.23.4. Official tree-sitter repository."
  },
  {
    "id": "parser-crystal-lang-tools-crystal-crystal",
    "name": "Crystal",
    "language": "crystal",
    "package": "github.com/crystal-lang-tools/tree-sitter-crystal",
    "version": "git-76afc1f",
    "sourceCommit": "76afc1f53518a2b68b51a5abcde01d268a9cb47c",
    "lastUpdated": "2025-06-18",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "crystal-lang-tools"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-keidax-crystal-crystal",
    "name": "Crystal",
    "language": "crystal",
    "package": "github.com/keidax/tree-sitter-crystal",
    "version": "git-51ad141",
    "sourceCommit": "51ad1411de9414b4600227553bb70953c352a627",
    "lastUpdated": "2024-12-23",
    "upstreamSemver": "0.0.1",
    "abi": 14,
    "owners": [
      "keidax"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-css",
    "name": "CSS",
    "language": "css",
    "package": "github.com/tree-sitter/tree-sitter-css",
    "version": "git-dda5cfc",
    "sourceCommit": "dda5cfc5722c429eaba1c910ca32c2c0c5bb1a3f",
    "lastUpdated": "2025-09-28",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-css.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-cst",
    "name": "CST",
    "language": "cst",
    "package": "github.com/tree-sitter-grammars/tree-sitter-cst",
    "version": "git-d58f8a6",
    "sourceCommit": "d58f8a6a4fb60789fab750e86b1976cffc1528e1",
    "lastUpdated": "2025-08-10",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-cst.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-kalmaegi-rainbow-csv-tree-sitter-csv",
    "name": "Csv",
    "language": "csv",
    "package": "github.com/Kalmaegi/rainbow-csv-tree-sitter",
    "version": "git-d3dbf91",
    "sourceCommit": "d3dbf916446131417e4c2ea9eb8591b23b466d27",
    "lastUpdated": "2024-06-21",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Kalmaegi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-csv-csv",
    "name": "Csv",
    "language": "csv",
    "package": "github.com/tree-sitter-grammars/tree-sitter-csv",
    "version": "git-f6bf6e3",
    "sourceCommit": "f6bf6e35eb0b95fbadea4bb39cb9709507fcb181",
    "lastUpdated": "2025-11-13",
    "upstreamSemver": "1.2.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "csv/queries/highlights.scm"
      ],
      "injections": [
        "csv/queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.2.0. Maintained in tree-sitter-grammars. Grammar path csv."
  },
  {
    "id": "parser-cuda",
    "name": "CUDA",
    "language": "cuda",
    "package": "github.com/tree-sitter-grammars/tree-sitter-cuda",
    "version": "git-48b066f",
    "sourceCommit": "48b066f334f4cf2174e05a50218ce2ed98b6fd01",
    "lastUpdated": "2025-09-18",
    "upstreamSemver": "0.21.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.21.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-cue",
    "name": "cue",
    "language": "cue",
    "package": "github.com/eonpatapon/tree-sitter-cue",
    "version": "git-a9e713c",
    "sourceCommit": "a9e713c2fa2da69de03ceb799807043420ca7c4b",
    "lastUpdated": "2026-03-30",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "eonpatapon"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-cyberchef",
    "name": "CyberChef",
    "language": "cyberchef",
    "package": "github.com/tree-sitter-grammars/tree-sitter-cyberchef",
    "version": "git-8bad395",
    "sourceCommit": "8bad395b98253324085b4b5227b14d4988f374b7",
    "lastUpdated": "2026-03-18",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-cylc",
    "name": "Cylc",
    "language": "cylc",
    "package": "github.com/elliotfontaine/tree-sitter-cylc",
    "version": "git-30dd40d",
    "sourceCommit": "30dd40d9bf23912e4aefa93eeb4c7090bda3d0f6",
    "lastUpdated": "2024-10-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "elliotfontaine"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-cython",
    "name": "Cython",
    "language": "cython",
    "package": "github.com/b0o/tree-sitter-cython",
    "version": "git-62f44f5",
    "sourceCommit": "62f44f5e7e41dde03c5f0a05f035e293bcf2bcf8",
    "lastUpdated": "2024-12-21",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "b0o"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. highlights, injections, locals, tags queries."
  },
  {
    "id": "parser-d",
    "name": "D",
    "language": "d",
    "package": "github.com/gdamore/tree-sitter-d",
    "version": "git-5566f8c",
    "sourceCommit": "5566f8ce8fc24186fad06170bbb3c8d97c935d74",
    "lastUpdated": "2023-12-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "gdamore"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-dafny",
    "name": "Dafny",
    "language": "dafny",
    "package": "github.com/hath995/tree-sitter-dafny",
    "version": "git-47f97f8",
    "sourceCommit": "47f97f8a5b0006511b9ee85c8c71e86dc61734af",
    "lastUpdated": "2026-03-23",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "hath995"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "indents",
      "locals",
      "tags",
      "textobjects"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "indents": [
        "queries/indents.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ],
      "textobjects": [
        "queries/textobjects.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, indents, locals, tags, textobjects queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-dart",
    "name": "Dart",
    "language": "dart",
    "package": "github.com/UserNobody14/tree-sitter-dart",
    "version": "git-0fc19c3",
    "sourceCommit": "0fc19c3a57b1109802af41d2b8f60d8835c5da3a",
    "lastUpdated": "2026-03-14",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "UserNobody14"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-dynamotn-dbml-dbml",
    "name": "Dbml",
    "language": "dbml",
    "package": "github.com/dynamotn/tree-sitter-dbml",
    "version": "git-2e2fa56",
    "sourceCommit": "2e2fa5640268c33c3d3f27f7e676f631a9c68fd9",
    "lastUpdated": "2023-11-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "dynamotn"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gsihaj5-dbml-dbml",
    "name": "Dbml",
    "language": "dbml",
    "package": "github.com/gsihaj5/tree-sitter-dbml",
    "version": "git-1bd1d1e",
    "sourceCommit": "1bd1d1e69e5465332faaeb5518799436c939cf14",
    "lastUpdated": "2026-01-08",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "gsihaj5"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-debian",
    "name": "Debian",
    "language": "debian",
    "package": "gitlab.com/MggMuggins/tree-sitter-debian",
    "version": "git-9b3f4b7",
    "sourceCommit": "9b3f4b78c45aab8a2f25a5f9e7bbc00995bc3dde",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "MggMuggins"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-desktop",
    "name": "Desktop",
    "language": "desktop",
    "package": "github.com/ValdezFOmar/tree-sitter-desktop",
    "version": "git-954da72",
    "sourceCommit": "954da7259e0f6c3bb4f811fddce11eb5ac94d9f6",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": "1.1.1",
    "abi": 15,
    "owners": [
      "ValdezFOmar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-desktop.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/desktop/highlights.scm"
      ],
      "injections": [
        "queries/desktop/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.1.1."
  },
  {
    "id": "parser-devicetree",
    "name": "Devicetree",
    "language": "devicetree",
    "package": "github.com/joelspadin/tree-sitter-devicetree",
    "version": "git-e685f1f",
    "sourceCommit": "e685f1f6ac1702b046415efb476444167d63e41a",
    "lastUpdated": "2025-11-02",
    "upstreamSemver": "0.15.0",
    "abi": 15,
    "owners": [
      "joelspadin"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-devicetree.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.15.0."
  },
  {
    "id": "parser-dhall",
    "name": "Dhall",
    "language": "dhall",
    "package": "github.com/jbellerb/tree-sitter-dhall",
    "version": "git-6201325",
    "sourceCommit": "62013259b26ac210d5de1abf64cf1b047ef88000",
    "lastUpdated": "2025-04-13",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "jbellerb"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-diff",
    "name": "Diff",
    "language": "diff",
    "package": "github.com/tree-sitter-grammars/tree-sitter-diff",
    "version": "git-2520c3f",
    "sourceCommit": "2520c3f934b3179bb540d23e0ef45f75304b5fed",
    "lastUpdated": "2025-10-29",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-diff.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-disassembly",
    "name": "Disassembly",
    "language": "disassembly",
    "package": "github.com/ColinKennedy/tree-sitter-disassembly",
    "version": "git-0229c02",
    "sourceCommit": "0229c0211dba909c5d45129ac784a3f4d49c243a",
    "lastUpdated": "2023-12-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ColinKennedy"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-djot",
    "name": "Djot",
    "language": "djot",
    "package": "github.com/treeman/tree-sitter-djot",
    "version": "git-74fac1f",
    "sourceCommit": "74fac1f53c6d52aeac104b6874e5506be6d0cfe6",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "2.0.0",
    "abi": 14,
    "owners": [
      "treeman"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2.0.0."
  },
  {
    "id": "parser-dockerfile",
    "name": "Dockerfile",
    "language": "dockerfile",
    "package": "github.com/camdencheek/tree-sitter-dockerfile",
    "version": "git-971acdd",
    "sourceCommit": "971acdd908568b4531b0ba28a445bf0bb720aba5",
    "lastUpdated": "2025-01-12",
    "upstreamSemver": "0.2.0",
    "abi": 14,
    "owners": [
      "camdencheek"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.2.0."
  },
  {
    "id": "parser-dot",
    "name": "Dot",
    "language": "dot",
    "package": "github.com/rydesun/tree-sitter-dot",
    "version": "git-9172307",
    "sourceCommit": "917230743aa10f45a408fea2ddb54bbbf5fbe7b7",
    "lastUpdated": "2022-03-11",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "rydesun"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-doxyfile",
    "name": "Doxyfile",
    "language": "doxyfile",
    "package": "github.com/tingerrr/tree-sitter-doxyfile",
    "version": "git-18e44c6",
    "sourceCommit": "18e44c6da639632a4e42264c7193df34be915f34",
    "lastUpdated": "2025-08-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tingerrr"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-doxygen",
    "name": "Doxygen",
    "language": "doxygen",
    "package": "github.com/tree-sitter-grammars/tree-sitter-doxygen",
    "version": "git-ccd998f",
    "sourceCommit": "ccd998f378c3f9345ea4eeb223f56d7b84d16687",
    "lastUpdated": "2024-06-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-drools",
    "name": "Drools",
    "language": "drools",
    "package": "github.com/iByteABit256/tree-sitter-drools",
    "version": "git-f1404d2",
    "sourceCommit": "f1404d2a3974dfcfd4193246e763edeeb4b399c1",
    "lastUpdated": "2026-02-21",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "iByteABit256"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-kmikeeu-dtd-dtd",
    "name": "Dtd",
    "language": "dtd",
    "package": "github.com/KMikeeU/tree-sitter-dtd",
    "version": "git-6116bec",
    "sourceCommit": "6116becb02a6b8e9588ef73d300a9ba4622e156f",
    "lastUpdated": "2023-04-07",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "KMikeeU"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-xml-dtd",
    "name": "DTD",
    "language": "dtd",
    "package": "github.com/tree-sitter-grammars/tree-sitter-xml",
    "version": "git-5000ae8",
    "sourceCommit": "5000ae8f22d11fbe93939b05c1e37cf21117162d",
    "lastUpdated": "2026-01-21",
    "upstreamSemver": "0.7.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-dtd.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-xml.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "dtd/queries/dtd/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.7.0. Maintained in tree-sitter-grammars. Grammar path dtd."
  },
  {
    "id": "parser-dunstrc",
    "name": "Dunstrc",
    "language": "dunstrc",
    "package": "github.com/rotmh/tree-sitter-dunstrc",
    "version": "git-9cb9d5c",
    "sourceCommit": "9cb9d5cc51cf5e2a47bb2a0e2f2e519ff11c1431",
    "lastUpdated": "2025-05-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "rotmh"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-earthfile",
    "name": "Earthfile",
    "language": "earthfile",
    "package": "github.com/glehmann/tree-sitter-earthfile",
    "version": "git-5baef88",
    "sourceCommit": "5baef88717ad0156fd29a8b12d0d8245bb1096a8",
    "lastUpdated": "2025-10-27",
    "upstreamSemver": "0.6.0",
    "abi": 15,
    "owners": [
      "glehmann"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.6.0."
  },
  {
    "id": "parser-ebnf",
    "name": "Ebnf",
    "language": "ebnf",
    "package": "github.com/RubixDev/ebnf",
    "version": "git-8e635b0",
    "sourceCommit": "8e635b0b723c620774dfb8abf382a7f531894b40",
    "lastUpdated": "2023-02-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "RubixDev"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path crates/tree-sitter-ebnf."
  },
  {
    "id": "parser-editorconfig",
    "name": "Editorconfig",
    "language": "editorconfig",
    "package": "github.com/ValdezFOmar/tree-sitter-editorconfig",
    "version": "git-bfd7439",
    "sourceCommit": "bfd74395e393f56ba58db953458b346f02d6f7b2",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": "2.0.0",
    "abi": 15,
    "owners": [
      "ValdezFOmar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-editorconfig.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/editorconfig/highlights.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2.0.0."
  },
  {
    "id": "parser-edoc",
    "name": "Edoc",
    "language": "edoc",
    "package": "github.com/the-mikedavis/tree-sitter-edoc",
    "version": "git-74774af",
    "sourceCommit": "74774af7b45dd9cefbf9510328fc6ff2374afc50",
    "lastUpdated": "2022-11-23",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "the-mikedavis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-eds",
    "name": "Eds",
    "language": "eds",
    "package": "github.com/uyha/tree-sitter-eds",
    "version": "git-26d529e",
    "sourceCommit": "26d529e6cfecde391a03c21d1474eb51e0285805",
    "lastUpdated": "2024-10-14",
    "upstreamSemver": "0.0.1",
    "abi": 14,
    "owners": [
      "uyha"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-eex",
    "name": "Eex",
    "language": "eex",
    "package": "github.com/connorlay/tree-sitter-eex",
    "version": "git-f742f2f",
    "sourceCommit": "f742f2fe327463335e8671a87c0b9b396905d1d1",
    "lastUpdated": "2022-01-12",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "connorlay"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-eiffel",
    "name": "Eiffel",
    "language": "eiffel",
    "package": "github.com/imustafin/tree-sitter-eiffel",
    "version": "git-d934fb4",
    "sourceCommit": "d934fb44f1d22bb76be6b56a7b2425ab3b1daf8b",
    "lastUpdated": "2024-06-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "imustafin"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. highlights queries."
  },
  {
    "id": "parser-elisp",
    "name": "Elisp",
    "language": "elisp",
    "package": "github.com/Wilfred/tree-sitter-elisp",
    "version": "git-29b4e49",
    "sourceCommit": "29b4e49275f4a947ce17c8533bc20a1f97768c70",
    "lastUpdated": "2025-11-16",
    "upstreamSemver": "1.3.0",
    "abi": 15,
    "owners": [
      "Wilfred"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.3.0."
  },
  {
    "id": "parser-elixir",
    "name": "Elixir",
    "language": "elixir",
    "package": "github.com/elixir-lang/tree-sitter-elixir",
    "version": "git-7937d3b",
    "sourceCommit": "7937d3b4d65fa574163cfa59394515d3c1cf16f4",
    "lastUpdated": "2026-03-13",
    "upstreamSemver": "0.3.5",
    "abi": 14,
    "owners": [
      "elixir-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-elixir.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.3.5."
  },
  {
    "id": "parser-elm",
    "name": "Elm",
    "language": "elm",
    "package": "github.com/elm-tooling/tree-sitter-elm",
    "version": "git-6d9511c",
    "sourceCommit": "6d9511c28181db66daee4e883f811f6251220943",
    "lastUpdated": "2025-12-17",
    "upstreamSemver": "5.9.0",
    "abi": 15,
    "owners": [
      "elm-tooling"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 5.9.0."
  },
  {
    "id": "parser-elsa",
    "name": "Elsa",
    "language": "elsa",
    "package": "github.com/glapa-grossklag/tree-sitter-elsa",
    "version": "git-0a66b2b",
    "sourceCommit": "0a66b2b3f3c1915e67ad2ef9f7dbd2a84820d9d7",
    "lastUpdated": "2023-02-21",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "glapa-grossklag"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-elvish",
    "name": "Elvish",
    "language": "elvish",
    "package": "github.com/elves/tree-sitter-elvish",
    "version": "git-e50787c",
    "sourceCommit": "e50787cadd3bc54f6d9c0704493a79078bb8a4e5",
    "lastUpdated": "2022-03-26",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "elves"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-embedded-perl",
    "name": "Embedded Perl",
    "language": "embedded-perl",
    "package": "github.com/jobindex-open/tree-sitter-embedded-perl",
    "version": "git-14b9a94",
    "sourceCommit": "14b9a948030edd99c132b78a3d3dc2c7537a061b",
    "lastUpdated": "2026-03-06",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "jobindex-open"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-embedded-template",
    "name": "EmbeddedTemplate",
    "language": "embedded-template",
    "package": "github.com/tree-sitter/tree-sitter-embedded-template",
    "version": "git-3499d85",
    "sourceCommit": "3499d85f0a0d937c507a4a65368f2f63772786e1",
    "lastUpdated": "2025-08-31",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-embedded_template.wasm"
      }
    ],
    "bundledQueryKinds": [
      "injections"
    ],
    "bundledQueries": {
      "injections": [
        "queries/injections-etlua.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. injections queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-enforce",
    "name": "Enforce",
    "language": "enforce",
    "package": "github.com/simonvic/tree-sitter-enforce",
    "version": "git-eb27968",
    "sourceCommit": "eb2796871d966264cdb041b797416ef1757c8b4f",
    "lastUpdated": "2025-10-07",
    "upstreamSemver": "0.3.2",
    "abi": 15,
    "owners": [
      "simonvic"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-enforce.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.3.2."
  },
  {
    "id": "parser-whatsapp-erlang-erlang",
    "name": "Erlang",
    "language": "erlang",
    "package": "github.com/WhatsApp/tree-sitter-erlang",
    "version": "git-1d78195",
    "sourceCommit": "1d78195c4fbb1fc027eb3e4220427f1eb8bfc89e",
    "lastUpdated": "2026-03-11",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "WhatsApp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-the-mikedavis-erlang-erlang",
    "name": "Erlang",
    "language": "erlang",
    "package": "github.com/the-mikedavis/tree-sitter-erlang",
    "version": "git-d85b18e",
    "sourceCommit": "d85b18e76962d6a3ba131bc5b514d77558e82762",
    "lastUpdated": "2025-09-24",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "the-mikedavis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-esdl",
    "name": "Esdl",
    "language": "esdl",
    "package": "github.com/hongquan/tree-sitter-esdl",
    "version": "git-c824fe2",
    "sourceCommit": "c824fe2bbbed6b29e50c694420aa2b377782f80a",
    "lastUpdated": "2026-02-10",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "hongquan"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-facility",
    "name": "Facility",
    "language": "facility",
    "package": "github.com/FacilityApi/tree-sitter-facility",
    "version": "git-e4bfd3e",
    "sourceCommit": "e4bfd3e960de9f4b4648acb1c92e9b95b47d8cfb",
    "lastUpdated": "2025-01-14",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "FacilityApi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-faust",
    "name": "Faust",
    "language": "faust",
    "package": "github.com/khiner/tree-sitter-faust",
    "version": "git-122dd10",
    "sourceCommit": "122dd101919289ea809bad643712fcb483a1bed0",
    "lastUpdated": "2025-07-01",
    "upstreamSemver": "1.1.5",
    "abi": 15,
    "owners": [
      "khiner"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.5."
  },
  {
    "id": "parser-fennel",
    "name": "Fennel",
    "language": "fennel",
    "package": "github.com/alexmozaidze/tree-sitter-fennel",
    "version": "git-3f0f6b2",
    "sourceCommit": "3f0f6b24d599e92460b969aabc4f4c5a914d15a0",
    "lastUpdated": "2026-01-21",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "alexmozaidze"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-fga",
    "name": "Fga",
    "language": "fga",
    "package": "github.com/matoous/tree-sitter-fga",
    "version": "git-ce72d1c",
    "sourceCommit": "ce72d1c484ba133a18e966d67be66bce85695451",
    "lastUpdated": "2026-03-19",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "matoous"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-fidl",
    "name": "Fidl",
    "language": "fidl",
    "package": "github.com/google/tree-sitter-fidl",
    "version": "git-bdbb635",
    "sourceCommit": "bdbb635a7f5035e424f6173f2f11b9cd79703f8d",
    "lastUpdated": "2024-02-23",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "google"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-firrtl",
    "name": "Firrtl",
    "language": "firrtl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-firrtl",
    "version": "git-8503d3a",
    "sourceCommit": "8503d3a0fe0f9e427863cb0055699ff2d29ae5f5",
    "lastUpdated": "2024-04-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-fish",
    "name": "Fish",
    "language": "fish",
    "package": "github.com/ram02z/tree-sitter-fish",
    "version": "git-a78aef9",
    "sourceCommit": "a78aef9abc395c600c38a037ac779afc7e3cc9e0",
    "lastUpdated": "2024-04-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ram02z"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-flatbuffers",
    "name": "Flatbuffers",
    "language": "flatbuffers",
    "package": "github.com/yuanchenxi95/tree-sitter-flatbuffers",
    "version": "git-95e6f9e",
    "sourceCommit": "95e6f9ef101ea97e870bf6eebc0bd1fdfbaf5490",
    "lastUpdated": "2024-10-24",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "yuanchenxi95"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-flow",
    "name": "Flow",
    "language": "flow",
    "package": "github.com/tree-sitter/tree-sitter-typescript",
    "version": "git-75b3874",
    "sourceCommit": "75b3874edb2dc714fb1fd77a32013d0f8699989f",
    "lastUpdated": "2025-01-30",
    "upstreamSemver": "0.23.2",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-tsx.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-typescript.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "tsx/queries/highlights.scm"
      ],
      "tags": [
        "tsx/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.23.2. Official tree-sitter repository. Grammar path tsx."
  },
  {
    "id": "parser-foam",
    "name": "Foam",
    "language": "foam",
    "package": "github.com/FoamScience/tree-sitter-foam",
    "version": "git-472c24f",
    "sourceCommit": "472c24f11a547820327fb1be565bcfff98ea96a4",
    "lastUpdated": "2025-09-12",
    "upstreamSemver": "0.4.4",
    "abi": 15,
    "owners": [
      "FoamScience"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.4.4."
  },
  {
    "id": "parser-forth",
    "name": "Forth",
    "language": "forth",
    "package": "github.com/AlexanderBrevig/tree-sitter-forth",
    "version": "git-360ef13",
    "sourceCommit": "360ef13f8c609ec6d2e80782af69958b84e36cd0",
    "lastUpdated": "2025-12-01",
    "upstreamSemver": "0.2.0",
    "abi": 15,
    "owners": [
      "AlexanderBrevig"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.2.0."
  },
  {
    "id": "parser-fortran",
    "name": "Fortran",
    "language": "fortran",
    "package": "github.com/stadelmanma/tree-sitter-fortran",
    "version": "git-be30d90",
    "sourceCommit": "be30d90dc7dfa4080b9c4abed3f400c9163a88df",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.5.1",
    "abi": 15,
    "owners": [
      "stadelmanma"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.5.1."
  },
  {
    "id": "parser-freebasic",
    "name": "Freebasic",
    "language": "freebasic",
    "package": "github.com/Ra77a3l3-jar/tree-sitter-freebasic",
    "version": "git-dbf696a",
    "sourceCommit": "dbf696adb4c0b9c020074e75043c90592981ee7f",
    "lastUpdated": "2025-11-11",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "Ra77a3l3-jar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-fsh",
    "name": "Fsh",
    "language": "fsh",
    "package": "github.com/mgramigna/tree-sitter-fsh",
    "version": "git-fad2e17",
    "sourceCommit": "fad2e175099a45efbc98f000cc196d3674cc45e0",
    "lastUpdated": "2024-04-27",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mgramigna"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-fsharp",
    "name": "FSharp",
    "language": "fsharp",
    "package": "github.com/ionide/tree-sitter-fsharp",
    "version": "git-594c500",
    "sourceCommit": "594c500ecace8618db32dd1144307897277db067",
    "lastUpdated": "2026-03-29",
    "upstreamSemver": "0.2.2",
    "abi": 15,
    "owners": [
      "ionide"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-fsharp.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-fsharp_signature.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "fsharp/queries/highlights.scm"
      ],
      "injections": [
        "fsharp/queries/injections.scm"
      ],
      "tags": [
        "fsharp/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.2.2. Grammar path fsharp."
  },
  {
    "id": "parser-fsharp-signature",
    "name": "FSharpSignature",
    "language": "fsharp_signature",
    "package": "github.com/ionide/tree-sitter-fsharp",
    "version": "git-594c500",
    "sourceCommit": "594c500ecace8618db32dd1144307897277db067",
    "lastUpdated": "2026-03-29",
    "upstreamSemver": "0.2.2",
    "abi": 15,
    "owners": [
      "ionide"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-fsharp.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-fsharp_signature.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "fsharp_signature/queries/highlights.scm"
      ],
      "injections": [
        "fsharp_signature/queries/injections.scm"
      ],
      "tags": [
        "fsharp_signature/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.2.2. Grammar path fsharp_signature."
  },
  {
    "id": "parser-func",
    "name": "Func",
    "language": "func",
    "package": "github.com/tree-sitter-grammars/tree-sitter-func",
    "version": "git-f780ca5",
    "sourceCommit": "f780ca55e65e7d7360d0229331763e16c452fc98",
    "lastUpdated": "2024-04-27",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-gap",
    "name": "gap",
    "language": "gap",
    "package": "github.com/gap-system/tree-sitter-gap",
    "version": "git-ed2480d",
    "sourceCommit": "ed2480d42281586932920527823b307bc45052b8",
    "lastUpdated": "2026-01-26",
    "upstreamSemver": "0.3.1",
    "abi": 15,
    "owners": [
      "gap-system"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-gap.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals_ts.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.3.1."
  },
  {
    "id": "parser-gaptst",
    "name": "gaptst",
    "language": "gaptst",
    "package": "github.com/gap-system/tree-sitter-gaptst",
    "version": "git-69086d7",
    "sourceCommit": "69086d7627c03e1f4baf766bcef14c60d9e92331",
    "lastUpdated": "2024-12-27",
    "upstreamSemver": "0.4.2",
    "abi": 14,
    "owners": [
      "gap-system"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-gaptst.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.4.2."
  },
  {
    "id": "parser-gas",
    "name": "Gas",
    "language": "gas",
    "package": "github.com/sirius94/tree-sitter-gas",
    "version": "git-60f4436",
    "sourceCommit": "60f443646b20edee3b7bf18f3a4fb91dc214259a",
    "lastUpdated": "2023-09-15",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "sirius94"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gdscript",
    "name": "GDScript",
    "language": "gdscript",
    "package": "github.com/PrestonKnopp/tree-sitter-gdscript",
    "version": "git-89e66b6",
    "sourceCommit": "89e66b6bdc002ab976283f277cbb48b780c5d0e9",
    "lastUpdated": "2025-12-12",
    "upstreamSemver": "6.1.0",
    "abi": 14,
    "owners": [
      "PrestonKnopp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 6.1.0."
  },
  {
    "id": "parser-gdshader",
    "name": "Gdshader",
    "language": "gdshader",
    "package": "github.com/airblast-dev/tree-sitter-gdshader",
    "version": "git-6826863",
    "sourceCommit": "68268631c8b6dc093985f1246b099f81b30ea7d1",
    "lastUpdated": "2025-11-23",
    "upstreamSemver": "0.4.0",
    "abi": 15,
    "owners": [
      "airblast-dev"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.4.0."
  },
  {
    "id": "parser-gemini",
    "name": "Gemini",
    "language": "gemini",
    "package": "git.sr.ht/~nbsp/tree-sitter-gemini",
    "version": "git-3cc5e4b",
    "sourceCommit": "3cc5e4bdf572d5df4277fc2e54d6299bd59a54b3",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "~nbsp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gherkin",
    "name": "Gherkin",
    "language": "gherkin",
    "package": "github.com/SamyAB/tree-sitter-gherkin",
    "version": "git-43873ee",
    "sourceCommit": "43873ee8de16476635b48d52c46f5b6407cb5c09",
    "lastUpdated": "2024-07-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "SamyAB"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ghostty",
    "name": "Ghostty",
    "language": "ghostty",
    "package": "github.com/bezhermoso/tree-sitter-ghostty",
    "version": "git-8438a93",
    "sourceCommit": "8438a93b44367e962b2ea3a3b6511885bebd196a",
    "lastUpdated": "2025-01-28",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "bezhermoso"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-git-config",
    "name": "GitConfig",
    "language": "git-config",
    "package": "github.com/the-mikedavis/tree-sitter-git-config",
    "version": "git-0fbc9f9",
    "sourceCommit": "0fbc9f99d5a28865f9de8427fb0672d66f9d83a5",
    "lastUpdated": "2025-05-11",
    "upstreamSemver": "0.0.0",
    "abi": 14,
    "owners": [
      "the-mikedavis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.0."
  },
  {
    "id": "parser-git-rebase",
    "name": "GitRebase",
    "language": "git_rebase",
    "package": "github.com/the-mikedavis/tree-sitter-git-rebase",
    "version": "git-760ba8e",
    "sourceCommit": "760ba8e34e7a68294ffb9c495e1388e030366188",
    "lastUpdated": "2026-03-14",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "the-mikedavis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-mtoohey31-gitattributes-gitattributes",
    "name": "Gitattributes",
    "language": "gitattributes",
    "package": "github.com/mtoohey31/tree-sitter-gitattributes",
    "version": "git-3dd5080",
    "sourceCommit": "3dd50808e3096f93dccd5e9dc7dc3dba2eb12dc4",
    "lastUpdated": "2022-05-04",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "mtoohey31"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-gitattributes-gitattributes",
    "name": "GitAttributes",
    "language": "gitattributes",
    "package": "github.com/tree-sitter-grammars/tree-sitter-gitattributes",
    "version": "git-1b7af09",
    "sourceCommit": "1b7af09d45b579f9f288453b95ad555f1f431645",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.2.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.2.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-gitcommit",
    "name": "gitcommit",
    "language": "gitcommit",
    "package": "github.com/gbprod/tree-sitter-gitcommit",
    "version": "git-33fe854",
    "sourceCommit": "33fe8548abcc6e374feaac5724b5a2364bf23090",
    "lastUpdated": "2026-03-09",
    "upstreamSemver": "0.5.0",
    "abi": 15,
    "owners": [
      "gbprod"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.5.0."
  },
  {
    "id": "parser-gitignore",
    "name": "Gitignore",
    "language": "gitignore",
    "package": "github.com/shunsambongi/tree-sitter-gitignore",
    "version": "git-f4685bf",
    "sourceCommit": "f4685bf11ac466dd278449bcfe5fd014e94aa504",
    "lastUpdated": "2022-05-04",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "shunsambongi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gleam",
    "name": "Gleam",
    "language": "gleam",
    "package": "github.com/gleam-lang/tree-sitter-gleam",
    "version": "git-0153f8b",
    "sourceCommit": "0153f8b875cd02034b553f3a84a2f5ee67a80364",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "gleam-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals, tags queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-glimmer",
    "name": "Glimmer",
    "language": "glimmer",
    "package": "github.com/ember-tooling/tree-sitter-glimmer",
    "version": "git-88af855",
    "sourceCommit": "88af85568bde3b91acb5d4c352ed094d0c1f9d84",
    "lastUpdated": "2026-01-12",
    "upstreamSemver": "1.6.0-tree-sitter-glimmer",
    "abi": 15,
    "owners": [
      "ember-tooling"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "folds": [
        "queries/glimmer/folds.scm"
      ],
      "highlights": [
        "queries/glimmer/highlights.scm"
      ],
      "indents": [
        "queries/glimmer/indents.scm"
      ],
      "injections": [
        "queries/glimmer/injections.scm"
      ],
      "locals": [
        "queries/glimmer/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. folds, highlights, indents, injections, locals queries. Latest release tag 1.6.0-tree-sitter-glimmer."
  },
  {
    "id": "parser-glimmer-javascript",
    "name": "GlimmerJavascript",
    "language": "glimmer-javascript",
    "package": "github.com/ember-tooling/tree-sitter-glimmer-javascript",
    "version": "git-5cc865a",
    "sourceCommit": "5cc865a2a0a77cbfaf5062c8fcf2a9919bd54f87",
    "lastUpdated": "2025-04-01",
    "upstreamSemver": "0.2.0-tree-sitter-glimmer-javascript",
    "abi": 14,
    "owners": [
      "ember-tooling"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "./queries/highlights.scm"
      ],
      "locals": [
        "./queries/locals.scm"
      ],
      "tags": [
        "./queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.2.0-tree-sitter-glimmer-javascript. Grammar path ./."
  },
  {
    "id": "parser-glimmer-typescript",
    "name": "GlimmerTypescript",
    "language": "glimmer-typescript",
    "package": "github.com/ember-tooling/tree-sitter-glimmer-typescript",
    "version": "git-12d9894",
    "sourceCommit": "12d98944c1d5077b957cbdb90d663a7c4d50118c",
    "lastUpdated": "2025-04-01",
    "upstreamSemver": "0.3.0-tree-sitter-glimmer-typescript",
    "abi": 14,
    "owners": [
      "ember-tooling"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "./queries/highlights.scm"
      ],
      "locals": [
        "./queries/locals.scm"
      ],
      "tags": [
        "./queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.3.0-tree-sitter-glimmer-typescript. Grammar path ./."
  },
  {
    "id": "parser-glsl",
    "name": "Glsl",
    "language": "glsl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-glsl",
    "version": "git-24a6c8e",
    "sourceCommit": "24a6c8ef698e4480fecf8340d771fbcb5de8fbb4",
    "lastUpdated": "2025-03-16",
    "upstreamSemver": "0.2.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.2.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tree-sitter-grammars-gn-gn",
    "name": "Gn",
    "language": "gn",
    "package": "github.com/tree-sitter-grammars/tree-sitter-gn",
    "version": "git-bc06955",
    "sourceCommit": "bc06955bc1e3c9ff8e9b2b2a55b38b94da923c05",
    "lastUpdated": "2023-10-22",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-willcassella-gn-gn",
    "name": "Gn",
    "language": "gn",
    "package": "github.com/willcassella/tree-sitter-gn",
    "version": "git-e18d6e3",
    "sourceCommit": "e18d6e36a79b20dafb58f19d407bd38b0e60260e",
    "lastUpdated": "2021-10-20",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "willcassella"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-maribu-gnuplot-gnuplot",
    "name": "Gnuplot",
    "language": "gnuplot",
    "package": "codeberg.org/maribu/tree-sitter-gnuplot",
    "version": "git-21a3a39",
    "sourceCommit": "21a3a3929facb964b3592daeb69119294ff84cf2",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "maribu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-dpezto-gnuplot-gnuplot",
    "name": "Gnuplot",
    "language": "gnuplot",
    "package": "github.com/dpezto/tree-sitter-gnuplot",
    "version": "git-8923c1e",
    "sourceCommit": "8923c1e38b9634a688a6c0dce7c18c8ffb823e79",
    "lastUpdated": "2024-12-23",
    "upstreamSemver": "1.0.0",
    "abi": 14,
    "owners": [
      "dpezto"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-go",
    "name": "Go",
    "language": "go",
    "package": "github.com/tree-sitter/tree-sitter-go",
    "version": "git-2346a3a",
    "sourceCommit": "2346a3ab1bb3857b48b29d779a1ef9799a248cd7",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-go.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-go-format-string",
    "name": "Go Format String",
    "language": "go-format-string",
    "package": "codeberg.org/kpbaks/tree-sitter-go-format-string",
    "version": "git-06587ea",
    "sourceCommit": "06587ea641155db638f46a32c959d68796cd36bb",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "kpbaks"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-go-template",
    "name": "GoTemplate",
    "language": "go-template",
    "package": "github.com/ngalaiko/tree-sitter-go-template",
    "version": "git-aa71f63",
    "sourceCommit": "aa71f63de226c5592dfbfc1f29949522d7c95fac",
    "lastUpdated": "2026-03-21",
    "upstreamSemver": "0.19.5",
    "abi": 15,
    "owners": [
      "ngalaiko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.19.5."
  },
  {
    "id": "parser-go-template-helm",
    "name": "GoTemplateHelm",
    "language": "go-template-helm",
    "package": "github.com/ngalaiko/tree-sitter-go-template",
    "version": "git-aa71f63",
    "sourceCommit": "aa71f63de226c5592dfbfc1f29949522d7c95fac",
    "lastUpdated": "2026-03-21",
    "upstreamSemver": "0.19.5",
    "abi": 15,
    "owners": [
      "ngalaiko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.19.5. Grammar path dialects/helm."
  },
  {
    "id": "parser-goctl",
    "name": "Goctl",
    "language": "goctl",
    "package": "github.com/chaozwn/tree-sitter-goctl",
    "version": "git-49c4353",
    "sourceCommit": "49c43532689fe1f53e8b9e009d0521cab02c432b",
    "lastUpdated": "2024-08-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "chaozwn"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-godot-resource",
    "name": "GodotResource",
    "language": "godot_resource",
    "package": "github.com/PrestonKnopp/tree-sitter-godot-resource",
    "version": "git-302c189",
    "sourceCommit": "302c1895f54bf74d53a08572f7b26a6614209adc",
    "lastUpdated": "2025-09-27",
    "upstreamSemver": "0.7.0",
    "abi": 14,
    "owners": [
      "PrestonKnopp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.7.0."
  },
  {
    "id": "parser-gomod",
    "name": "Gomod",
    "language": "gomod",
    "package": "github.com/camdencheek/tree-sitter-go-mod",
    "version": "git-2e88687",
    "sourceCommit": "2e886870578eeba1927a2dc4bd2e2b3f598c5f9a",
    "lastUpdated": "2025-10-23",
    "upstreamSemver": "1.1.0",
    "abi": 15,
    "owners": [
      "camdencheek"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.0."
  },
  {
    "id": "parser-gosum",
    "name": "GoSum",
    "language": "gosum",
    "package": "github.com/tree-sitter-grammars/tree-sitter-go-sum",
    "version": "git-27816eb",
    "sourceCommit": "27816eb6b7315746ae9fcf711e4e1396dc1cf237",
    "lastUpdated": "2025-07-10",
    "upstreamSemver": "1.0.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-gotmpl",
    "name": "Gotmpl",
    "language": "gotmpl",
    "package": "github.com/ngalaiko/tree-sitter-go-template",
    "version": "git-ca26229",
    "sourceCommit": "ca26229bafcd3f37698a2496c2a5efa2f07e86bc",
    "lastUpdated": "2025-10-04",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "ngalaiko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gowork",
    "name": "Gowork",
    "language": "gowork",
    "package": "github.com/omertuc/tree-sitter-go-work",
    "version": "git-6dd9dd7",
    "sourceCommit": "6dd9dd79fb51e9f2abc829d5e97b15015b6a8ae2",
    "lastUpdated": "2021-12-18",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "omertuc"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gpg",
    "name": "GPG",
    "language": "gpg",
    "package": "github.com/tree-sitter-grammars/tree-sitter-gpg-config",
    "version": "git-4024eb2",
    "sourceCommit": "4024eb268c59204280f8ac71ef146b8ff5e737f6",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-gpr",
    "name": "Gpr",
    "language": "gpr",
    "package": "github.com/brownts/tree-sitter-gpr",
    "version": "git-cea857d",
    "sourceCommit": "cea857d3c18d1385d1f5b66cd09ea1e44173945c",
    "lastUpdated": "2024-08-13",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "brownts"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-graphql",
    "name": "Graphql",
    "language": "graphql",
    "package": "github.com/bkegley/tree-sitter-graphql",
    "version": "git-5e66e96",
    "sourceCommit": "5e66e961eee421786bdda8495ed1db045e06b5fe",
    "lastUpdated": "2021-05-10",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "bkegley"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gren",
    "name": "Gren",
    "language": "gren",
    "package": "github.com/gren-lang/tree-sitter-gren",
    "version": "git-76554f4",
    "sourceCommit": "76554f4f2339f5a24eed19c58f2079b51c694152",
    "lastUpdated": "2024-12-16",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "gren-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-groovy",
    "name": "Groovy",
    "language": "groovy",
    "package": "github.com/murtaza64/tree-sitter-groovy",
    "version": "git-781d9cd",
    "sourceCommit": "781d9cd1b482a70a6b27091e5c9e14bbcab3b768",
    "lastUpdated": "2026-03-04",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "murtaza64"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-groq",
    "name": "Groq",
    "language": "groq",
    "package": "github.com/ajrussellaudio/tree-sitter-groq",
    "version": "git-1fa1ab0",
    "sourceCommit": "1fa1ab0eb391a270957e8ad8c731b492e3645649",
    "lastUpdated": "2025-07-18",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "ajrussellaudio"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-groq.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-gstlaunch",
    "name": "Gstlaunch",
    "language": "gstlaunch",
    "package": "github.com/tree-sitter-grammars/tree-sitter-gstlaunch",
    "version": "git-549aef2",
    "sourceCommit": "549aef253fd38a53995cda1bf55c501174372bf7",
    "lastUpdated": "2024-04-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-hack",
    "name": "Hack",
    "language": "hack",
    "package": "github.com/slackhq/tree-sitter-hack",
    "version": "git-1a7ded9",
    "sourceCommit": "1a7ded90288189746c54861ac144ede97df95081",
    "lastUpdated": "2025-11-03",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "slackhq"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-ecs-hare-hare",
    "name": "Hare",
    "language": "hare",
    "package": "git.sr.ht/~ecs/tree-sitter-hare",
    "version": "git-07035a2",
    "sourceCommit": "07035a248943575444aa0b893ffe306e1444c0ab",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "~ecs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-hare-hare",
    "name": "Hare",
    "language": "hare",
    "package": "github.com/tree-sitter-grammars/tree-sitter-hare",
    "version": "git-eed7ddf",
    "sourceCommit": "eed7ddf6a66b596906aa8ca3d40521b8278adc6f",
    "lastUpdated": "2025-10-07",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tree-sitter-grammars-haskell-haskell",
    "name": "Haskell",
    "language": "haskell",
    "package": "github.com/tree-sitter-grammars/tree-sitter-haskell",
    "version": "git-7fa19f1",
    "sourceCommit": "7fa19f195803a77855f036ee7f49e4b22856e338",
    "lastUpdated": "2025-11-25",
    "upstreamSemver": "0.23.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.23.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tree-sitter-haskell-haskell",
    "name": "Haskell",
    "language": "haskell",
    "package": "github.com/tree-sitter/tree-sitter-haskell",
    "version": "git-0975ef7",
    "sourceCommit": "0975ef72fc3c47b530309ca93937d7d143523628",
    "lastUpdated": "2025-01-31",
    "upstreamSemver": "0.23.1",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-haskell.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.23.1. Official tree-sitter repository."
  },
  {
    "id": "parser-haskell-literate",
    "name": "Haskell Literate",
    "language": "haskell-literate",
    "package": "github.com/LaurentRDC/tree-sitter-haskell-literate",
    "version": "git-8ad7bd1",
    "sourceCommit": "8ad7bd1b1595f4cc1a4ccc775d4a3c460f43a596",
    "lastUpdated": "2025-10-30",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "LaurentRDC"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. highlights queries."
  },
  {
    "id": "parser-haskell-persistent",
    "name": "Haskell Persistent",
    "language": "haskell-persistent",
    "package": "github.com/MercuryTechnologies/tree-sitter-haskell-persistent",
    "version": "git-58a6ccf",
    "sourceCommit": "58a6ccfd56d9f1de8fb9f77e6c42151f8f0d0f3d",
    "lastUpdated": "2023-06-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "MercuryTechnologies"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-haxe",
    "name": "Haxe",
    "language": "haxe",
    "package": "github.com/vantreeseba/tree-sitter-haxe",
    "version": "git-a55f3e2",
    "sourceCommit": "a55f3e2cf1e4449200fd089a80d3af642bcf5f94",
    "lastUpdated": "2025-10-22",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "vantreeseba"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-hcl",
    "name": "HCL",
    "language": "hcl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-hcl",
    "version": "git-64ad627",
    "sourceCommit": "64ad62785d442eb4d45df3a1764962dafd5bc98b",
    "lastUpdated": "2026-01-17",
    "upstreamSemver": "1.2.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-hcl.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-terraform.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.2.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-hdl",
    "name": "Hdl",
    "language": "hdl",
    "package": "github.com/quantonganh/tree-sitter-hdl",
    "version": "git-2939023",
    "sourceCommit": "293902330423b2cd36ab1ec4b6b967163a4ed57b",
    "lastUpdated": "2025-08-12",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "quantonganh"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-heex",
    "name": "Heex",
    "language": "heex",
    "package": "github.com/phoenixframework/tree-sitter-heex",
    "version": "git-5842537",
    "sourceCommit": "5842537f734d7c12685bf27d6005313e3e5a47a0",
    "lastUpdated": "2026-03-23",
    "upstreamSemver": "0.9.0",
    "abi": 15,
    "owners": [
      "phoenixframework"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.9.0."
  },
  {
    "id": "parser-helm",
    "name": "Helm",
    "language": "helm",
    "package": "github.com/ngalaiko/tree-sitter-go-template",
    "version": "git-aa71f63",
    "sourceCommit": "aa71f63de226c5592dfbfc1f29949522d7c95fac",
    "lastUpdated": "2026-03-21",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "ngalaiko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path dialects/helm."
  },
  {
    "id": "parser-hjson",
    "name": "Hjson",
    "language": "hjson",
    "package": "github.com/winston0410/tree-sitter-hjson",
    "version": "git-02fa3b7",
    "sourceCommit": "02fa3b79b3ff9a296066da6277adfc3f26cbc9e0",
    "lastUpdated": "2021-08-02",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "winston0410"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-hlsl",
    "name": "Hlsl",
    "language": "hlsl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-hlsl",
    "version": "git-bab9111",
    "sourceCommit": "bab9111922d53d43668fabb61869bec51bbcb915",
    "lastUpdated": "2025-03-23",
    "upstreamSemver": "0.2.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.2.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-hlsplaylist",
    "name": "Hlsplaylist",
    "language": "hlsplaylist",
    "package": "github.com/Freed-Wu/tree-sitter-hlsplaylist",
    "version": "git-3bfda92",
    "sourceCommit": "3bfda9271e3adb08d35f47a2102fe957009e1c55",
    "lastUpdated": "2024-08-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Freed-Wu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-hocon",
    "name": "Hocon",
    "language": "hocon",
    "package": "github.com/antosha417/tree-sitter-hocon",
    "version": "git-c390f10",
    "sourceCommit": "c390f10519ae69fdb03b3e5764f5592fb6924bcc",
    "lastUpdated": "2022-11-07",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "antosha417"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-hoon",
    "name": "Hoon",
    "language": "hoon",
    "package": "github.com/urbit-pilled/tree-sitter-hoon",
    "version": "git-1d5df35",
    "sourceCommit": "1d5df35af3e0afe592832a67b9fb3feeeba1f7b6",
    "lastUpdated": "2023-09-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "urbit-pilled"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-hosts",
    "name": "Hosts",
    "language": "hosts",
    "package": "github.com/ath3/tree-sitter-hosts",
    "version": "git-301b937",
    "sourceCommit": "301b9379ce7dfc8bdbe2c2699a6887dcb73953f9",
    "lastUpdated": "2022-12-01",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ath3"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-html",
    "name": "HTML",
    "language": "html",
    "package": "github.com/tree-sitter/tree-sitter-html",
    "version": "git-73a3947",
    "sourceCommit": "73a3947324f6efddf9e17c0ea58d454843590cc0",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.23.2",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-html.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.23.2. Official tree-sitter repository."
  },
  {
    "id": "parser-htmldjango",
    "name": "htmlDjango",
    "language": "htmldjango",
    "package": "github.com/interdependence/tree-sitter-htmldjango",
    "version": "git-3a64316",
    "sourceCommit": "3a643167ad9afac5d61e092f08ff5b054576fadf",
    "lastUpdated": "2025-04-16",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "interdependence"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-pasisalenius-http-http",
    "name": "Http",
    "language": "http",
    "package": "github.com/PasiSalenius/tree-sitter-http",
    "version": "git-59dd878",
    "sourceCommit": "59dd87893c920788b80f97ae0cb87ca1e6c188b9",
    "lastUpdated": "2026-03-21",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "PasiSalenius"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-rest-nvim-http-http",
    "name": "Http",
    "language": "http",
    "package": "github.com/rest-nvim/tree-sitter-http",
    "version": "git-db8b439",
    "sourceCommit": "db8b4398de90b6d0b6c780aba96aaa2cd8e9202c",
    "lastUpdated": "2025-03-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "rest-nvim"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-hurl",
    "name": "Hurl",
    "language": "hurl",
    "package": "github.com/pfeiferj/tree-sitter-hurl",
    "version": "git-1124058",
    "sourceCommit": "1124058cd192e80d80914652a5850a5b1887cc10",
    "lastUpdated": "2025-09-07",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "pfeiferj"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-hyprlang",
    "name": "Hyprlang",
    "language": "hyprlang",
    "package": "github.com/tree-sitter-grammars/tree-sitter-hyprlang",
    "version": "git-cecd6b7",
    "sourceCommit": "cecd6b748107d9da1f7b4ca03ef95f1f71d93b8f",
    "lastUpdated": "2026-03-12",
    "upstreamSemver": "3.1.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-hyprlang.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/hyprlang/highlights.scm"
      ],
      "injections": [
        "queries/hyprlang/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 3.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-idl",
    "name": "idl",
    "language": "idl",
    "package": "github.com/cathaysia/tree-sitter-idl",
    "version": "git-fb65762",
    "sourceCommit": "fb65762a13538b397e41a5fc1e9564c9df841410",
    "lastUpdated": "2026-03-23",
    "upstreamSemver": "3.17.0",
    "abi": 15,
    "owners": [
      "cathaysia"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 3.17.0."
  },
  {
    "id": "parser-idris",
    "name": "Idris",
    "language": "idris",
    "package": "github.com/kayhide/tree-sitter-idris",
    "version": "git-c56a25c",
    "sourceCommit": "c56a25cf57c68ff929356db25505c1cc4c7820f6",
    "lastUpdated": "2024-11-05",
    "upstreamSemver": "0.0.1",
    "abi": 14,
    "owners": [
      "kayhide"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-iex",
    "name": "Iex",
    "language": "iex",
    "package": "github.com/elixir-lang/tree-sitter-iex",
    "version": "git-39f20bb",
    "sourceCommit": "39f20bb51f502e32058684e893c0c0b00bb2332c",
    "lastUpdated": "2022-01-08",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "elixir-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ini",
    "name": "Ini",
    "language": "ini",
    "package": "github.com/justinmk/tree-sitter-ini",
    "version": "git-e4018b5",
    "sourceCommit": "e4018b5176132b4f3c5d6e61cea383f42288d0f5",
    "lastUpdated": "2025-12-08",
    "upstreamSemver": "1.4.0",
    "abi": 15,
    "owners": [
      "justinmk"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.4.0."
  },
  {
    "id": "parser-ink",
    "name": "Ink",
    "language": "ink",
    "package": "github.com/rhizoome/tree-sitter-ink2",
    "version": "git-8486e9b",
    "sourceCommit": "8486e9b1627b0bc6b2deb9ee8102277a7c1281ac",
    "lastUpdated": "2025-02-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "rhizoome"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-inko",
    "name": "Inko",
    "language": "inko",
    "package": "github.com/inko-lang/tree-sitter-inko",
    "version": "git-5c1226a",
    "sourceCommit": "5c1226a901341f0a6f52924a5c2584b5e2df1119",
    "lastUpdated": "2026-01-09",
    "upstreamSemver": "0.4.0",
    "abi": 15,
    "owners": [
      "inko-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-inko.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.4.0."
  },
  {
    "id": "parser-ispc",
    "name": "Ispc",
    "language": "ispc",
    "package": "github.com/tree-sitter-grammars/tree-sitter-ispc",
    "version": "git-9b2f9ae",
    "sourceCommit": "9b2f9aec2106b94b4e099fe75e73ebd8ae707c04",
    "lastUpdated": "2023-08-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-janet",
    "name": "Janet",
    "language": "janet",
    "package": "github.com/GrayJack/tree-sitter-janet",
    "version": "git-64db751",
    "sourceCommit": "64db751b233ba44ce06fa6c729701bdf87779011",
    "lastUpdated": "2025-09-18",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "GrayJack"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-janet-simple",
    "name": "JanetSimple",
    "language": "janet_simple",
    "package": "github.com/sogaiu/tree-sitter-janet-simple",
    "version": "git-3c1bdcf",
    "sourceCommit": "3c1bdcfff374138da03a1db25c75efce623910fe",
    "lastUpdated": "2026-03-29",
    "upstreamSemver": "0.0.8",
    "abi": 14,
    "owners": [
      "sogaiu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.8."
  },
  {
    "id": "parser-java",
    "name": "Java",
    "language": "java",
    "package": "github.com/tree-sitter/tree-sitter-java",
    "version": "git-e10607b",
    "sourceCommit": "e10607b45ff745f5f876bfa3e94fbcc6b44bdc11",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.23.5",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-java.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.23.5. Official tree-sitter repository."
  },
  {
    "id": "parser-javadoc",
    "name": "Javadoc",
    "language": "javadoc",
    "package": "github.com/rmuir/tree-sitter-javadoc",
    "version": "git-11ec3cd",
    "sourceCommit": "11ec3cd9d2a6a8f9a451249043e852d3581c856f",
    "lastUpdated": "2026-04-04",
    "upstreamSemver": "0.3.1",
    "abi": 15,
    "owners": [
      "rmuir"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-javadoc.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.3.1."
  },
  {
    "id": "parser-javascript",
    "name": "JavaScript",
    "language": "javascript",
    "package": "github.com/tree-sitter/tree-sitter-javascript",
    "version": "git-58404d8",
    "sourceCommit": "58404d8cf191d69f2674a8fd507bd5776f46cb11",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-javascript.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm",
        "queries/highlights-jsx.scm",
        "queries/highlights-params.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-jinja",
    "name": "Jinja",
    "language": "jinja",
    "package": "github.com/cathaysia/tree-sitter-jinja",
    "version": "git-413dba9",
    "sourceCommit": "413dba9fea354b62f6adada1815b2f504e32ffb5",
    "lastUpdated": "2026-03-28",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "cathaysia"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path tree-sitter-jinja."
  },
  {
    "id": "parser-jinja2",
    "name": "Jinja2",
    "language": "jinja2",
    "package": "github.com/varpeti/tree-sitter-jinja2",
    "version": "git-a533cd3",
    "sourceCommit": "a533cd3c33aea6acb0f9bf9a56f35dcfe6a8eb53",
    "lastUpdated": "2023-02-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "varpeti"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-jinja-inline",
    "name": "Jinja Inline",
    "language": "jinja_inline",
    "package": "github.com/cathaysia/tree-sitter-jinja",
    "version": "git-413dba9",
    "sourceCommit": "413dba9fea354b62f6adada1815b2f504e32ffb5",
    "lastUpdated": "2026-03-28",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "cathaysia"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path tree-sitter-jinja_inline."
  },
  {
    "id": "parser-kareigu-jjdescription-jjdescription",
    "name": "Jjdescription",
    "language": "jjdescription",
    "package": "github.com/kareigu/tree-sitter-jjdescription",
    "version": "git-1613b8c",
    "sourceCommit": "1613b8c85b6ead48464d73668f39910dcbb41911",
    "lastUpdated": "2025-02-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "kareigu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ribru17-jjdescription-jjdescription",
    "name": "Jjdescription",
    "language": "jjdescription",
    "package": "github.com/ribru17/tree-sitter-jjdescription",
    "version": "git-v1.0.3",
    "sourceCommit": "v1.0.3",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "ribru17"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-jjrevset",
    "name": "Jjrevset",
    "language": "jjrevset",
    "package": "github.com/bryceberger/tree-sitter-jjrevset",
    "version": "git-d9af239",
    "sourceCommit": "d9af23944b884ec528b505f41d81923bb3136a51",
    "lastUpdated": "2025-07-10",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "bryceberger"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-jjtemplate",
    "name": "Jjtemplate",
    "language": "jjtemplate",
    "package": "github.com/bryceberger/tree-sitter-jjtemplate",
    "version": "git-4313eda",
    "sourceCommit": "4313eda8ac31c60e550e3ad5841b100a0a686715",
    "lastUpdated": "2025-07-10",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "bryceberger"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-flurie-jq-jq",
    "name": "Jq",
    "language": "jq",
    "package": "github.com/flurie/tree-sitter-jq",
    "version": "git-13990f5",
    "sourceCommit": "13990f530e8e6709b7978503da9bc8701d366791",
    "lastUpdated": "2022-09-20",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "flurie"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-nverno-jq-jq",
    "name": "Jq",
    "language": "jq",
    "package": "github.com/nverno/tree-sitter-jq",
    "version": "git-1e139eb",
    "sourceCommit": "1e139eba1fd3a9c34a36f0f0f47ed8b73c9b4636",
    "lastUpdated": "2025-02-26",
    "upstreamSemver": "1.0.2",
    "abi": 15,
    "owners": [
      "nverno"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.2."
  },
  {
    "id": "parser-jsdoc",
    "name": "JSDoc",
    "language": "jsdoc",
    "package": "github.com/tree-sitter/tree-sitter-jsdoc",
    "version": "git-658d18d",
    "sourceCommit": "658d18dcdddb75c760363faa4963427a7c6b52db",
    "lastUpdated": "2025-09-13",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-jsdoc.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-json",
    "name": "JSON",
    "language": "json",
    "package": "github.com/tree-sitter/tree-sitter-json",
    "version": "git-001c28d",
    "sourceCommit": "001c28d7a29832b06b0e831ec77845553c89b56d",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.24.8",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-json.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.24.8. Official tree-sitter repository."
  },
  {
    "id": "parser-json5",
    "name": "Json5",
    "language": "json5",
    "package": "github.com/Joakker/tree-sitter-json5",
    "version": "git-aa630ef",
    "sourceCommit": "aa630ef48903ab99e406a8acd2e2933077cc34e1",
    "lastUpdated": "2025-11-21",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "Joakker"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-jsonnet",
    "name": "Jsonnet",
    "language": "jsonnet",
    "package": "github.com/sourcegraph/tree-sitter-jsonnet",
    "version": "git-0475a50",
    "sourceCommit": "0475a5017ad7dc84845d1d33187f2321abcb261d",
    "lastUpdated": "2022-05-27",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "sourcegraph"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-julia-julia",
    "name": "Julia",
    "language": "julia",
    "package": "github.com/tree-sitter-grammars/tree-sitter-julia",
    "version": "git-8454f26",
    "sourceCommit": "8454f266717232525ed03c7b09164b0404a03150",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.23.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.23.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tree-sitter-julia-julia",
    "name": "Julia",
    "language": "julia",
    "package": "github.com/tree-sitter/tree-sitter-julia",
    "version": "git-e0f9dcd",
    "sourceCommit": "e0f9dcd180fdcfcfa8d79a3531e11d99e79321d3",
    "lastUpdated": "2025-11-08",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-julia.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-casey-just-just",
    "name": "Just",
    "language": "just",
    "package": "github.com/casey/tree-sitter-just",
    "version": "git-5685543",
    "sourceCommit": "5685543a6e64f66335e25518c9ae8ffa1dae3d01",
    "lastUpdated": "2026-03-25",
    "upstreamSemver": "0.2.0",
    "abi": 15,
    "owners": [
      "casey"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries-src/highlights.scm"
      ],
      "injections": [
        "queries-src/injections.scm"
      ],
      "locals": [
        "queries-src/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.2.0."
  },
  {
    "id": "parser-poliorcetics-just-just",
    "name": "Just",
    "language": "just",
    "package": "github.com/poliorcetics/tree-sitter-just",
    "version": "git-b75dace",
    "sourceCommit": "b75dace757e5d122d25c1a1a7772cb87b560f829",
    "lastUpdated": "2025-08-05",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "poliorcetics"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-kittycad-kcl-kcl",
    "name": "Kcl",
    "language": "kcl",
    "package": "github.com/KittyCAD/tree-sitter-kcl",
    "version": "git-8905e0b",
    "sourceCommit": "8905e0bdbf5870b50bc3f24345f1af27746f42e8",
    "lastUpdated": "2025-10-07",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "KittyCAD"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-kcl-lang-kcl-kcl",
    "name": "KCL",
    "language": "kcl",
    "package": "github.com/kcl-lang/tree-sitter-kcl",
    "version": "git-b0b2eb3",
    "sourceCommit": "b0b2eb38009e04035a6e266c7e11e541f3caab7c",
    "lastUpdated": "2025-02-15",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "kcl-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-kconfig",
    "name": "Kconfig",
    "language": "kconfig",
    "package": "github.com/tree-sitter-grammars/tree-sitter-kconfig",
    "version": "git-9ac99fe",
    "sourceCommit": "9ac99fe4c0c27a35dc6f757cef534c646e944881",
    "lastUpdated": "2024-12-22",
    "upstreamSemver": "1.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-kconfig.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 1.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-kdl",
    "name": "Kdl",
    "language": "kdl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-kdl",
    "version": "git-3ca569b",
    "sourceCommit": "3ca569b9f9af43593c24f9e7a21f02f43a13bb88",
    "lastUpdated": "2023-05-13",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-kitty",
    "name": "Kitty",
    "language": "kitty",
    "package": "github.com/OXY2DEV/tree-sitter-kitty",
    "version": "git-fa6ab3f",
    "sourceCommit": "fa6ab3fd32d890a0217495c96b35761e6d2dcb5b",
    "lastUpdated": "2026-02-20",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "OXY2DEV"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-klog",
    "name": "Klog",
    "language": "klog",
    "package": "github.com/Ansimorph/tree-sitter-klog",
    "version": "git-0b215fe",
    "sourceCommit": "0b215fe75bdeb8368546e3cee36aca8c19212d06",
    "lastUpdated": "2026-01-10",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "Ansimorph"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-koka-community-koka-koka",
    "name": "Koka",
    "language": "koka",
    "package": "github.com/koka-community/tree-sitter-koka",
    "version": "git-fd3b482",
    "sourceCommit": "fd3b482274d6988349ba810ea5740e29153b1baf",
    "lastUpdated": "2025-07-31",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "koka-community"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-mtoohey31-koka-koka",
    "name": "Koka",
    "language": "koka",
    "package": "github.com/mtoohey31/tree-sitter-koka",
    "version": "git-6dce132",
    "sourceCommit": "6dce132911ac375ac1a3591c868c47a2a84b30aa",
    "lastUpdated": "2025-07-26",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "mtoohey31"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-kos",
    "name": "Kos",
    "language": "kos",
    "package": "github.com/kos-lang/tree-sitter-kos",
    "version": "git-03b261c",
    "sourceCommit": "03b261c1a78b71c38cf4616497f253c4a4ce118b",
    "lastUpdated": "2026-01-04",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "kos-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-fwcd-kotlin-kotlin",
    "name": "Kotlin",
    "language": "kotlin",
    "package": "github.com/fwcd/tree-sitter-kotlin",
    "version": "git-6032dfd",
    "sourceCommit": "6032dfd418aefbc0d5085051c3c58aa07791e813",
    "lastUpdated": "2026-03-30",
    "upstreamSemver": "0.3.8",
    "abi": 14,
    "owners": [
      "fwcd"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-kotlin.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.3.8."
  },
  {
    "id": "parser-tree-sitter-grammars-kotlin-kotlin",
    "name": "Kotlin",
    "language": "kotlin",
    "package": "github.com/tree-sitter-grammars/tree-sitter-kotlin",
    "version": "git-3dea6df",
    "sourceCommit": "3dea6dfa9c0129deb7c4315afbda806c85c41667",
    "lastUpdated": "2025-01-16",
    "upstreamSemver": "1.1.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-kotlin.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-koto",
    "name": "Koto",
    "language": "koto",
    "package": "github.com/koto-lang/tree-sitter-koto",
    "version": "git-f8b3f62",
    "sourceCommit": "f8b3f62c0eed185dca1559789e78759d4bee60e5",
    "lastUpdated": "2025-11-17",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "koto-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-kusto",
    "name": "Kusto",
    "language": "kusto",
    "package": "github.com/Willem-J-an/tree-sitter-kusto",
    "version": "git-8353a12",
    "sourceCommit": "8353a1296607d6ba33db7c7e312226e5fc83e8ce",
    "lastUpdated": "2023-11-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Willem-J-an"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-lalrpop",
    "name": "Lalrpop",
    "language": "lalrpop",
    "package": "github.com/traxys/tree-sitter-lalrpop",
    "version": "git-27b0f7b",
    "sourceCommit": "27b0f7bb55b4cabd8f01a933d9ee6a49dbfc2192",
    "lastUpdated": "2026-01-18",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "traxys"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-latex",
    "name": "Latex",
    "language": "latex",
    "package": "github.com/latex-lsp/tree-sitter-latex",
    "version": "git-7e0ecdc",
    "sourceCommit": "7e0ecdc02926c7b9b2e0c76003d4fe7b0944f957",
    "lastUpdated": "2025-09-19",
    "upstreamSemver": "0.6.0",
    "abi": null,
    "owners": [
      "latex-lsp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.6.0."
  },
  {
    "id": "parser-ld",
    "name": "Ld",
    "language": "ld",
    "package": "github.com/mtoohey31/tree-sitter-ld",
    "version": "git-0e9695a",
    "sourceCommit": "0e9695ae0ede47b8744a8e2ad44d4d40c5d4e4c9",
    "lastUpdated": "2024-04-12",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mtoohey31"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ldif",
    "name": "Ldif",
    "language": "ldif",
    "package": "github.com/kkmp-dk/tree-sitter-ldif",
    "version": "git-0a91720",
    "sourceCommit": "0a917207f65ba3e3acfa9cda16142ee39c4c1aaa",
    "lastUpdated": "2023-05-27",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "kkmp-dk"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-lean",
    "name": "Lean",
    "language": "lean",
    "package": "github.com/Julian/tree-sitter-lean",
    "version": "git-efe6b87",
    "sourceCommit": "efe6b87145608d12f5996bd7f0cf6095a0e82261",
    "lastUpdated": "2024-12-25",
    "upstreamSemver": "0.1.0",
    "abi": 13,
    "owners": [
      "Julian"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-ledger",
    "name": "Ledger",
    "language": "ledger",
    "package": "github.com/cbarrete/tree-sitter-ledger",
    "version": "git-22a1ab8",
    "sourceCommit": "22a1ab8195c1f6e808679f803007756fe7638c6f",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "cbarrete"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-leo",
    "name": "Leo",
    "language": "leo",
    "package": "github.com/r001/tree-sitter-leo",
    "version": "git-6bc5564",
    "sourceCommit": "6bc5564917edacd070afc4d33cf5e2e677831ea9",
    "lastUpdated": "2025-01-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "r001"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-less",
    "name": "Less",
    "language": "less",
    "package": "github.com/jimliang/tree-sitter-less",
    "version": "git-e5ae624",
    "sourceCommit": "e5ae6245f841b5778c79ac93b28fa4f56b679c5d",
    "lastUpdated": "2025-10-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "jimliang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-lilypond",
    "name": "LilyPond",
    "language": "lilypond",
    "package": "github.com/tristanperalta/tree-sitter-lilypond",
    "version": "git-0bb6c94",
    "sourceCommit": "0bb6c9475e45bd45bcd6143b8a11fba61bdff85d",
    "lastUpdated": "2025-12-17",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "tristanperalta"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-linkerscript",
    "name": "Linkerscript",
    "language": "linkerscript",
    "package": "github.com/tree-sitter-grammars/tree-sitter-linkerscript",
    "version": "git-f99011a",
    "sourceCommit": "f99011a3554213b654985a4b0a65b3b032ec4621",
    "lastUpdated": "2023-11-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-liquid",
    "name": "Liquid",
    "language": "liquid",
    "package": "github.com/hankthetank27/tree-sitter-liquid",
    "version": "git-9566ca7",
    "sourceCommit": "9566ca79911052919fce09d26f1f655b5e093857",
    "lastUpdated": "2026-03-26",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "hankthetank27"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-liquidsoap",
    "name": "Liquidsoap",
    "language": "liquidsoap",
    "package": "github.com/savonet/tree-sitter-liquidsoap",
    "version": "git-0169d92",
    "sourceCommit": "0169d92b0a93e9f32289533ef23abdafca579e56",
    "lastUpdated": "2026-03-06",
    "upstreamSemver": "1.1.4",
    "abi": 15,
    "owners": [
      "savonet"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.4."
  },
  {
    "id": "parser-llvm",
    "name": "Llvm",
    "language": "llvm",
    "package": "github.com/benwilliamgraham/tree-sitter-llvm",
    "version": "git-2914786",
    "sourceCommit": "2914786ae6774d4c4e25a230f4afe16aa68fe1c1",
    "lastUpdated": "2025-08-22",
    "upstreamSemver": "1.1.0",
    "abi": 15,
    "owners": [
      "benwilliamgraham"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.1.0."
  },
  {
    "id": "parser-llvm-mir",
    "name": "Llvm Mir",
    "language": "llvm-mir",
    "package": "github.com/Flakebi/tree-sitter-llvm-mir",
    "version": "git-d166ff8",
    "sourceCommit": "d166ff8c5950f80b0a476956e7a0ad2f27c12505",
    "lastUpdated": "2024-10-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Flakebi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-log",
    "name": "Log",
    "language": "log",
    "package": "github.com/Tudyx/tree-sitter-log",
    "version": "git-62cfe30",
    "sourceCommit": "62cfe307e942af3417171243b599cc7deac5eab9",
    "lastUpdated": "2023-11-26",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Tudyx"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-lpf",
    "name": "Lpf",
    "language": "lpf",
    "package": "gitlab.com/TheZoq2/tree-sitter-lpf",
    "version": "git-db7372e",
    "sourceCommit": "db7372e60c722ca7f12ab359e57e6bf7611ab126",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "TheZoq2"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-lua",
    "name": "Lua",
    "language": "lua",
    "package": "github.com/tree-sitter-grammars/tree-sitter-lua",
    "version": "git-10fe005",
    "sourceCommit": "10fe0054734eec83049514ea2e718b2a56acd0c9",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.5.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-lua.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals, tags queries. Latest release tag 0.5.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-lua-format-string",
    "name": "Lua Format String",
    "language": "lua-format-string",
    "package": "codeberg.org/kpbaks/tree-sitter-lua-format-string",
    "version": "git-b667c8c",
    "sourceCommit": "b667c8cab109df307e1b4d56b0b43f5c4a353533",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "kpbaks"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-luadoc",
    "name": "Luadoc",
    "language": "luadoc",
    "package": "github.com/tree-sitter-grammars/tree-sitter-luadoc",
    "version": "git-873612a",
    "sourceCommit": "873612aadd3f684dd4e631bdf42ea8990c57634e",
    "lastUpdated": "2024-02-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-luap",
    "name": "Luap",
    "language": "luap",
    "package": "github.com/tree-sitter-grammars/tree-sitter-luap",
    "version": "git-c134aae",
    "sourceCommit": "c134aaec6acf4fa95fe4aa0dc9aba3eacdbbe55a",
    "lastUpdated": "2024-06-08",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-polychromatist-luau-luau",
    "name": "Luau",
    "language": "luau",
    "package": "github.com/polychromatist/tree-sitter-luau",
    "version": "git-71b03e6",
    "sourceCommit": "71b03e66b2c8dd04e0133c9b998a54a58f239ca4",
    "lastUpdated": "2025-12-08",
    "upstreamSemver": "0.3.0",
    "abi": 14,
    "owners": [
      "polychromatist"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "helix-queries/highlights.scm"
      ],
      "injections": [
        "helix-queries/injections.scm"
      ],
      "locals": [
        "helix-queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.3.0."
  },
  {
    "id": "parser-tree-sitter-grammars-luau-luau",
    "name": "Luau",
    "language": "luau",
    "package": "github.com/tree-sitter-grammars/tree-sitter-luau",
    "version": "git-a8914d6",
    "sourceCommit": "a8914d6c1fc5131f8e1c13f769fa704c9f5eb02f",
    "lastUpdated": "2024-12-22",
    "upstreamSemver": "1.2.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-luau.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.2.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-m68k",
    "name": "M68k",
    "language": "m68k",
    "package": "github.com/grahambates/tree-sitter-m68k",
    "version": "git-e128454",
    "sourceCommit": "e128454c2210c0e0c10b68fe45ddb8fee80182a3",
    "lastUpdated": "2024-07-24",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "grahambates"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-magik",
    "name": "Magik",
    "language": "magik",
    "package": "github.com/krn-robin/tree-sitter-magik",
    "version": "git-7f821c1",
    "sourceCommit": "7f821c17c1b109ecd4f7559bb5ebb7eff5315cbc",
    "lastUpdated": "2026-04-06",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "krn-robin"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-ficd-mail-mail",
    "name": "Mail",
    "language": "mail",
    "package": "codeberg.org/ficd/tree-sitter-mail",
    "version": "git-5eddbfd",
    "sourceCommit": "5eddbfdbec4c893182c79047499901c196332e78",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "ficd"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-stevenxxiu-mail-mail",
    "name": "Mail",
    "language": "mail",
    "package": "github.com/stevenxxiu/tree-sitter-mail",
    "version": "git-8d2905d",
    "sourceCommit": "8d2905d06a15586652c3a73387b4170424201e1a",
    "lastUpdated": "2026-02-11",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "stevenxxiu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-alemuller-make-make",
    "name": "Make",
    "language": "make",
    "package": "github.com/alemuller/tree-sitter-make",
    "version": "git-a4b9187",
    "sourceCommit": "a4b9187417d6be349ee5fd4b6e77b4172c6827dd",
    "lastUpdated": "2021-12-16",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "alemuller"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-make-make",
    "name": "Make",
    "language": "make",
    "package": "github.com/tree-sitter-grammars/tree-sitter-make",
    "version": "git-70613f3",
    "sourceCommit": "70613f3d812cbabbd7f38d104d60a409c4008b43",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "1.1.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-make.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-markdoc",
    "name": "Markdoc",
    "language": "markdoc",
    "package": "github.com/mohitsinghs/tree-sitter-markdoc",
    "version": "git-5ffe71b",
    "sourceCommit": "5ffe71b29e8a3f94823913ea9cea51fcfa7e3bf8",
    "lastUpdated": "2023-03-15",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mohitsinghs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-markdown",
    "name": "Markdown",
    "language": "markdown",
    "package": "github.com/tree-sitter-grammars/tree-sitter-markdown",
    "version": "git-f969cd3",
    "sourceCommit": "f969cd3ae3f9fbd4e43205431d0ae286014c05b5",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.5.3",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-markdown.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-markdown_inline.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "tree-sitter-markdown/queries/highlights.scm"
      ],
      "injections": [
        "tree-sitter-markdown/queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.5.3. Maintained in tree-sitter-grammars. Grammar path tree-sitter-markdown."
  },
  {
    "id": "parser-markdown-inline",
    "name": "MarkdownInline",
    "language": "markdown_inline",
    "package": "github.com/tree-sitter-grammars/tree-sitter-markdown",
    "version": "git-f969cd3",
    "sourceCommit": "f969cd3ae3f9fbd4e43205431d0ae286014c05b5",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.5.3",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-markdown.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-markdown_inline.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "tree-sitter-markdown-inline/queries/highlights.scm"
      ],
      "injections": [
        "tree-sitter-markdown-inline/queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.5.3. Maintained in tree-sitter-grammars. Grammar path tree-sitter-markdown-inline."
  },
  {
    "id": "parser-matlab",
    "name": "Matlab",
    "language": "matlab",
    "package": "github.com/acristoffers/tree-sitter-matlab",
    "version": "git-c2390a5",
    "sourceCommit": "c2390a59016f74e7d5f75ef09510768b4f30217e",
    "lastUpdated": "2026-03-04",
    "upstreamSemver": "1.3.0",
    "abi": 15,
    "owners": [
      "acristoffers"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/neovim/highlights.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.3.0."
  },
  {
    "id": "parser-mcfunction",
    "name": "MCFunction",
    "language": "mcfunction",
    "package": "github.com/bbfh-dev/tree-sitter-mcfunction",
    "version": "git-6015276",
    "sourceCommit": "6015276e6f42767fb2f5b07b463260a16a0d9a73",
    "lastUpdated": "2026-03-29",
    "upstreamSemver": "0.4.0",
    "abi": 15,
    "owners": [
      "bbfh-dev"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-mcfunction.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/mcfunction/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.4.0."
  },
  {
    "id": "parser-menhir",
    "name": "Menhir",
    "language": "menhir",
    "package": "github.com/Kerl13/tree-sitter-menhir",
    "version": "git-be8866a",
    "sourceCommit": "be8866a6bcc2b563ab0de895af69daeffa88fe70",
    "lastUpdated": "2023-07-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "Kerl13"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-mermaid",
    "name": "Mermaid",
    "language": "mermaid",
    "package": "github.com/monaqa/tree-sitter-mermaid",
    "version": "git-d787c66",
    "sourceCommit": "d787c66276e7e95899230539f556e8b83ee16f6d",
    "lastUpdated": "2022-04-02",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "monaqa"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-staysail-meson-meson",
    "name": "Meson",
    "language": "meson",
    "package": "github.com/staysail/tree-sitter-meson",
    "version": "git-32a83e8",
    "sourceCommit": "32a83e8f200c347232fa795636cfe60dde22957a",
    "lastUpdated": "2022-11-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "staysail"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-meson-meson",
    "name": "Meson",
    "language": "meson",
    "package": "github.com/tree-sitter-grammars/tree-sitter-meson",
    "version": "git-c84f354",
    "sourceCommit": "c84f3540624b81fc44067030afce2ff78d6ede05",
    "lastUpdated": "2026-01-22",
    "upstreamSemver": "1.3.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-mlir",
    "name": "Mlir",
    "language": "mlir",
    "package": "github.com/artagnon/tree-sitter-mlir",
    "version": "git-60d1fee",
    "sourceCommit": "60d1feeabf01f730e6b8500e23918d9972772baf",
    "lastUpdated": "2026-04-03",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "artagnon"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-mojo",
    "name": "Mojo",
    "language": "mojo",
    "package": "github.com/lsh/tree-sitter-mojo",
    "version": "git-3d7c53b",
    "sourceCommit": "3d7c53b8038f9ebbb57cd2e61296180aa5c1cf64",
    "lastUpdated": "2024-05-12",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "lsh"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-move",
    "name": "Move",
    "language": "move",
    "package": "github.com/tzakian/tree-sitter-move",
    "version": "git-8bc0d16",
    "sourceCommit": "8bc0d1692caa8763fef54d48068238d9bf3c0264",
    "lastUpdated": "2024-03-22",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tzakian"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-muttrc",
    "name": "Muttrc",
    "language": "muttrc",
    "package": "github.com/neomutt/tree-sitter-muttrc",
    "version": "git-173b0ab",
    "sourceCommit": "173b0ab53a9c07962c9777189c4c70e90f1c1837",
    "lastUpdated": "2024-08-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "neomutt"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-nasm",
    "name": "Nasm",
    "language": "nasm",
    "package": "github.com/naclsn/tree-sitter-nasm",
    "version": "git-570f3d7",
    "sourceCommit": "570f3d7be01fffc751237f4cfcf52d04e20532d1",
    "lastUpdated": "2024-05-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "naclsn"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-nearley",
    "name": "Nearley",
    "language": "nearley",
    "package": "github.com/mi2ebi/tree-sitter-nearley",
    "version": "git-12d0111",
    "sourceCommit": "12d01113e194c8e83f6341aab8c2a5f21db9cac9",
    "lastUpdated": "2025-09-24",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "mi2ebi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-opa-oz-nginx-nginx",
    "name": "NginX",
    "language": "nginx",
    "package": "github.com/opa-oz/tree-sitter-nginx",
    "version": "git-47ade64",
    "sourceCommit": "47ade644d754cce57974aac44d2c9450e823d4f4",
    "lastUpdated": "2026-01-02",
    "upstreamSemver": "1.0.1",
    "abi": 15,
    "owners": [
      "opa-oz"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.1."
  },
  {
    "id": "parser-joncoole-nginx-nginx",
    "name": "Nginx",
    "language": "nginx",
    "package": "gitlab.com/joncoole/tree-sitter-nginx",
    "version": "git-b4b61db",
    "sourceCommit": "b4b61db443602b69410ab469c122c01b1e685aa0",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "joncoole"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-nickel",
    "name": "Nickel",
    "language": "nickel",
    "package": "github.com/nickel-lang/tree-sitter-nickel",
    "version": "git-b5b6cc3",
    "sourceCommit": "b5b6cc3bc7b9ea19f78fed264190685419cd17a8",
    "lastUpdated": "2026-02-14",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "nickel-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-nim",
    "name": "Nim",
    "language": "nim",
    "package": "github.com/alaviss/tree-sitter-nim",
    "version": "git-3878440",
    "sourceCommit": "3878440d9398515ae053c6f6024986e69868bb74",
    "lastUpdated": "2026-03-21",
    "upstreamSemver": "0.6.2",
    "abi": 14,
    "owners": [
      "alaviss"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.6.2."
  },
  {
    "id": "parser-nim-format-string",
    "name": "Nim Format String",
    "language": "nim_format_string",
    "package": "github.com/aMOPel/tree-sitter-nim-format-string",
    "version": "git-d45f750",
    "sourceCommit": "d45f75022d147cda056e98bfba68222c9c8eca3a",
    "lastUpdated": "2023-10-21",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "aMOPel"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-ninja",
    "name": "Ninja",
    "language": "ninja",
    "package": "github.com/alemuller/tree-sitter-ninja",
    "version": "git-0a95cfd",
    "sourceCommit": "0a95cfdc0745b6ae82f60d3a339b37f19b7b9267",
    "lastUpdated": "2022-01-07",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "alemuller"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-nix",
    "name": "Nix",
    "language": "nix",
    "package": "github.com/nix-community/tree-sitter-nix",
    "version": "git-eabf968",
    "sourceCommit": "eabf96807ea4ab6d6c7f09b671a88cd483542840",
    "lastUpdated": "2025-12-03",
    "upstreamSemver": "0.3.0",
    "abi": 13,
    "owners": [
      "nix-community"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "tags"
    ],
    "bundledQueries": {
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. tags queries. Latest release tag 0.3.0."
  },
  {
    "id": "parser-nlua",
    "name": "Nlua",
    "language": "nlua",
    "package": "github.com/tjdevries/tree-sitter-lua",
    "version": "git-4932594",
    "sourceCommit": "4932594a24f04e4ccf046919bc354272841b0077",
    "lastUpdated": "2024-10-23",
    "upstreamSemver": "1.0.0",
    "abi": 14,
    "owners": [
      "tjdevries"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-noir",
    "name": "Noir",
    "language": "noir",
    "package": "github.com/hhamud/tree-sitter-noir",
    "version": "git-89cc4db",
    "sourceCommit": "89cc4dbbfbc4ab3fadf75bf8f5c54d6a5f8ce682",
    "lastUpdated": "2026-03-25",
    "upstreamSemver": "1.0.1",
    "abi": 15,
    "owners": [
      "hhamud"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.1."
  },
  {
    "id": "parser-nqc",
    "name": "Nqc",
    "language": "nqc",
    "package": "github.com/tree-sitter-grammars/tree-sitter-nqc",
    "version": "git-14e6da1",
    "sourceCommit": "14e6da1627aaef21d2b2aa0c37d04269766dcc1d",
    "lastUpdated": "2023-08-31",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-fdncred-nu-nu",
    "name": "Nu",
    "language": "nu",
    "package": "github.com/fdncred/tree-sitter-nu",
    "version": "git-696d257",
    "sourceCommit": "696d257f6b652edb50878a783b30ad7833dec49e",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "fdncred"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/nu/highlights.scm"
      ],
      "injections": [
        "queries/nu/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-nushell-nu-nu",
    "name": "Nu",
    "language": "nu",
    "package": "github.com/nushell/tree-sitter-nu",
    "version": "git-696d257",
    "sourceCommit": "696d257f6b652edb50878a783b30ad7833dec49e",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "nushell"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/nu/highlights.scm"
      ],
      "injections": [
        "queries/nu/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.0.1."
  },
  {
    "id": "parser-objc",
    "name": "Objc",
    "language": "objc",
    "package": "github.com/tree-sitter-grammars/tree-sitter-objc",
    "version": "git-181a81b",
    "sourceCommit": "181a81b8f23a2d593e7ab4259981f50122909fda",
    "lastUpdated": "2025-01-31",
    "upstreamSemver": "3.0.2",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-objc.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 3.0.2. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-objdump",
    "name": "Objdump",
    "language": "objdump",
    "package": "github.com/ColinKennedy/tree-sitter-objdump",
    "version": "git-28d3b2e",
    "sourceCommit": "28d3b2e25a0b1881d1b47ed1924ca276c7003d45",
    "lastUpdated": "2023-11-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ColinKennedy"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-ocaml",
    "name": "OCaml",
    "language": "ocaml",
    "package": "github.com/tree-sitter/tree-sitter-ocaml",
    "version": "git-5a979b3",
    "sourceCommit": "5a979b3ec7f1fe990b8e8c4412294a0cf7228e45",
    "lastUpdated": "2026-03-27",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_interface.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_type.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "grammars/ocaml/queries/highlights.scm"
      ],
      "locals": [
        "grammars/ocaml/queries/locals.scm"
      ],
      "tags": [
        "grammars/ocaml/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.24.2. Official tree-sitter repository. Grammar path grammars/ocaml."
  },
  {
    "id": "parser-ocaml-interface",
    "name": "OCamlInterface",
    "language": "ocaml_interface",
    "package": "github.com/tree-sitter/tree-sitter-ocaml",
    "version": "git-5a979b3",
    "sourceCommit": "5a979b3ec7f1fe990b8e8c4412294a0cf7228e45",
    "lastUpdated": "2026-03-27",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_interface.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_type.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "grammars/interface/queries/highlights.scm"
      ],
      "locals": [
        "grammars/interface/queries/locals.scm"
      ],
      "tags": [
        "grammars/interface/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.24.2. Official tree-sitter repository. Grammar path grammars/interface."
  },
  {
    "id": "parser-ocaml-type",
    "name": "OCamlType",
    "language": "ocaml_type",
    "package": "github.com/tree-sitter/tree-sitter-ocaml",
    "version": "git-5a979b3",
    "sourceCommit": "5a979b3ec7f1fe990b8e8c4412294a0cf7228e45",
    "lastUpdated": "2026-03-27",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_interface.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocaml_type.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "grammars/type/queries/highlights.scm"
      ],
      "locals": [
        "grammars/type/queries/locals.scm"
      ],
      "tags": [
        "grammars/type/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.24.2. Official tree-sitter repository. Grammar path grammars/type."
  },
  {
    "id": "parser-ocamllex",
    "name": "OCamllex",
    "language": "ocamllex",
    "package": "github.com/314eter/tree-sitter-ocamllex",
    "version": "git-33722b8",
    "sourceCommit": "33722b8be73079946a7c6dd9598e3f57956ed36d",
    "lastUpdated": "2025-11-02",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "314eter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ocamllex.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.25.0."
  },
  {
    "id": "parser-odin",
    "name": "Odin",
    "language": "odin",
    "package": "github.com/tree-sitter-grammars/tree-sitter-odin",
    "version": "git-d2ca8ef",
    "sourceCommit": "d2ca8efb4487e156a60d5bd6db2598b872629403",
    "lastUpdated": "2025-01-12",
    "upstreamSemver": "1.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-odin.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ohm",
    "name": "Ohm",
    "language": "ohm",
    "package": "github.com/novusnota/tree-sitter-ohm",
    "version": "git-80f14f0",
    "sourceCommit": "80f14f0e477ddacc1e137d5ed8e830329e3fb7a3",
    "lastUpdated": "2024-02-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "novusnota"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-opencl",
    "name": "Opencl",
    "language": "opencl",
    "package": "github.com/lefp/tree-sitter-opencl",
    "version": "git-8e1d24a",
    "sourceCommit": "8e1d24a57066b3cd1bb9685bbc1ca9de5c1b78fb",
    "lastUpdated": "2023-03-30",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "lefp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-openscad",
    "name": "Openscad",
    "language": "openscad",
    "package": "github.com/openscad/tree-sitter-openscad",
    "version": "git-acc196e",
    "sourceCommit": "acc196e969a169cadd8b7f8d9f81ff2d30e3e253",
    "lastUpdated": "2025-01-22",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "openscad"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-org",
    "name": "Org",
    "language": "org",
    "package": "github.com/emiasims/tree-sitter-org",
    "version": "git-698bb1a",
    "sourceCommit": "698bb1a34331e68f83fc24bdd1b6f97016bb30de",
    "lastUpdated": "2022-08-16",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "emiasims"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-pascal",
    "name": "Pascal",
    "language": "pascal",
    "package": "github.com/Isopod/tree-sitter-pascal",
    "version": "git-042119e",
    "sourceCommit": "042119eca2e18a60e56317fb06ee3ba5c32cb447",
    "lastUpdated": "2025-12-23",
    "upstreamSemver": "0.10.2",
    "abi": 14,
    "owners": [
      "Isopod"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.10.2."
  },
  {
    "id": "parser-passwd",
    "name": "Passwd",
    "language": "passwd",
    "package": "github.com/ath3/tree-sitter-passwd",
    "version": "git-2023939",
    "sourceCommit": "20239395eacdc2e0923a7e5683ad3605aee7b716",
    "lastUpdated": "2022-12-01",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ath3"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-mtoohey31-pem-pem",
    "name": "Pem",
    "language": "pem",
    "package": "github.com/mtoohey31/tree-sitter-pem",
    "version": "git-be67a43",
    "sourceCommit": "be67a4330a1aa507c7297bc322204f936ec1132c",
    "lastUpdated": "2023-02-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mtoohey31"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-pem-pem",
    "name": "PEM",
    "language": "pem",
    "package": "github.com/tree-sitter-grammars/tree-sitter-pem",
    "version": "git-e525b17",
    "sourceCommit": "e525b177a229b1154fd81bc0691f943028d9e685",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-penrose",
    "name": "Penrose",
    "language": "penrose",
    "package": "github.com/klukaszek/tree-sitter-penrose",
    "version": "git-d9368ff",
    "sourceCommit": "d9368ff7f743b2ac2145a3342db13b1ad950cba5",
    "lastUpdated": "2026-01-26",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "klukaszek"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ganezdragon-perl-perl",
    "name": "Perl",
    "language": "perl",
    "package": "github.com/ganezdragon/tree-sitter-perl",
    "version": "git-973ea86",
    "sourceCommit": "973ea86be2a8d2db37a8a09155302ff4983fe876",
    "lastUpdated": "2026-01-25",
    "upstreamSemver": "1.1.1",
    "abi": 15,
    "owners": [
      "ganezdragon"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.1."
  },
  {
    "id": "parser-tree-sitter-perl-perl-perl",
    "name": "Perl",
    "language": "perl",
    "package": "github.com/tree-sitter-perl/tree-sitter-perl",
    "version": "git-8917c6e",
    "sourceCommit": "8917c6e94b30f30670f008979309e2cbfc54400f",
    "lastUpdated": "2026-03-31",
    "upstreamSemver": "1.0.0",
    "abi": null,
    "owners": [
      "tree-sitter-perl"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-perl.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-pest",
    "name": "Pest",
    "language": "pest",
    "package": "github.com/pest-parser/tree-sitter-pest",
    "version": "git-c19629a",
    "sourceCommit": "c19629a0c50e6ca2485c3b154b1dde841a08d169",
    "lastUpdated": "2025-10-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "pest-parser"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-pgn",
    "name": "Pgn",
    "language": "pgn",
    "package": "github.com/rolandwalker/tree-sitter-pgn",
    "version": "git-26122e7",
    "sourceCommit": "26122e7d009eb19d0ba7ac31f790610a1528767a",
    "lastUpdated": "2026-03-12",
    "upstreamSemver": "1.4.3",
    "abi": 15,
    "owners": [
      "rolandwalker"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.4.3."
  },
  {
    "id": "parser-php",
    "name": "PHP",
    "language": "php",
    "package": "github.com/tree-sitter/tree-sitter-php",
    "version": "git-3f2465c",
    "sourceCommit": "3f2465c217d0a966d41e584b42d75522f2a3149e",
    "lastUpdated": "2026-03-19",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-php.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-php_only.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "php/queries/highlights.scm"
      ],
      "injections": [
        "php/queries/injections.scm",
        "php/queries/injections-text.scm"
      ],
      "tags": [
        "php/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.24.2. Official tree-sitter repository. Grammar path php."
  },
  {
    "id": "parser-php-only",
    "name": "PHP_Only",
    "language": "php_only",
    "package": "github.com/tree-sitter/tree-sitter-php",
    "version": "git-3f2465c",
    "sourceCommit": "3f2465c217d0a966d41e584b42d75522f2a3149e",
    "lastUpdated": "2026-03-19",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-php.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-php_only.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "php_only/queries/highlights.scm"
      ],
      "injections": [
        "php_only/queries/injections.scm"
      ],
      "tags": [
        "php_only/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.24.2. Official tree-sitter repository. Grammar path php_only."
  },
  {
    "id": "parser-phpdoc",
    "name": "Phpdoc",
    "language": "phpdoc",
    "package": "github.com/claytonrcarter/tree-sitter-phpdoc",
    "version": "git-12d5030",
    "sourceCommit": "12d50307e6c02e5f4f876fa6cf2edea1f7808c0d",
    "lastUpdated": "2025-12-17",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "claytonrcarter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-picat",
    "name": "Picat",
    "language": "picat",
    "package": "github.com/DLR-FT/tree-sitter-picat",
    "version": "git-ecb6b07",
    "sourceCommit": "ecb6b07d280f2cef8214bc4b999ad83ac1d9205c",
    "lastUpdated": "2026-01-28",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "DLR-FT"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-pioasm",
    "name": "Pioasm",
    "language": "pioasm",
    "package": "github.com/leo60228/tree-sitter-pioasm",
    "version": "git-afece58",
    "sourceCommit": "afece58efdb30440bddd151ef1347fa8d6f744a9",
    "lastUpdated": "2024-10-12",
    "upstreamSemver": "1.0.0",
    "abi": 14,
    "owners": [
      "leo60228"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-pkl",
    "name": "Pkl",
    "language": "pkl",
    "package": "github.com/apple/tree-sitter-pkl",
    "version": "git-f5beed1",
    "sourceCommit": "f5beed1da8e5fc856a1a11e29a929d0b7cdcfe3c",
    "lastUpdated": "2026-03-27",
    "upstreamSemver": "0.20.0",
    "abi": 15,
    "owners": [
      "apple"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.20.0."
  },
  {
    "id": "parser-po",
    "name": "Po",
    "language": "po",
    "package": "github.com/tree-sitter-grammars/tree-sitter-po",
    "version": "git-417cee9",
    "sourceCommit": "417cee9abb2053ed26b19e7de972398f2da9b29e",
    "lastUpdated": "2023-02-15",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-pod",
    "name": "Pod",
    "language": "pod",
    "package": "github.com/tree-sitter-perl/tree-sitter-pod",
    "version": "git-57c606a",
    "sourceCommit": "57c606aa3373ba876d44113d13fe7bdc2c060723",
    "lastUpdated": "2026-03-23",
    "upstreamSemver": "1.0.0",
    "abi": null,
    "owners": [
      "tree-sitter-perl"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-pod.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-poe-filter",
    "name": "PoEFilter",
    "language": "poe_filter",
    "package": "github.com/tree-sitter-grammars/tree-sitter-poe-filter",
    "version": "git-205a7d5",
    "sourceCommit": "205a7d576984feb38a9fc2d8cfe729617f9e0548",
    "lastUpdated": "2025-08-17",
    "upstreamSemver": "0.4.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-poe_filter.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.4.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-pony",
    "name": "Pony",
    "language": "pony",
    "package": "github.com/tree-sitter-grammars/tree-sitter-pony",
    "version": "git-73ff874",
    "sourceCommit": "73ff874ae4c9e9b45462673cbc0a1e350e2522a7",
    "lastUpdated": "2024-04-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ponylang",
    "name": "Ponylang",
    "language": "ponylang",
    "package": "github.com/mfelsche/tree-sitter-ponylang",
    "version": "git-ef66b15",
    "sourceCommit": "ef66b151bc2604f431b5668fcec4747db4290e11",
    "lastUpdated": "2023-01-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mfelsche"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-powershell",
    "name": "Powershell",
    "language": "powershell",
    "package": "github.com/airbus-cert/tree-sitter-powershell",
    "version": "git-73800ec",
    "sourceCommit": "73800ecc8bddeee8f1079a5a2e0c13c3d00269bb",
    "lastUpdated": "2026-03-16",
    "upstreamSemver": "0.26.3",
    "abi": 15,
    "owners": [
      "airbus-cert"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.26.3."
  },
  {
    "id": "parser-printf",
    "name": "Printf",
    "language": "printf",
    "package": "github.com/tree-sitter-grammars/tree-sitter-printf",
    "version": "git-ec4e567",
    "sourceCommit": "ec4e5674573d5554fccb87a887c97d4aec489da7",
    "lastUpdated": "2025-07-16",
    "upstreamSemver": "0.5.1",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-printf.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.5.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-prisma",
    "name": "Prisma",
    "language": "prisma",
    "package": "github.com/victorhqc/tree-sitter-prisma",
    "version": "git-3556b2c",
    "sourceCommit": "3556b2c1f20ec9ac91e92d32c43d9d2a0ca3cc49",
    "lastUpdated": "2025-10-02",
    "upstreamSemver": "1.6.0",
    "abi": 15,
    "owners": [
      "victorhqc"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.6.0."
  },
  {
    "id": "parser-problog",
    "name": "Problog",
    "language": "problog",
    "package": "github.com/foxyseta/tree-sitter-prolog",
    "version": "git-d8d415f",
    "sourceCommit": "d8d415f6a1cf80ca138524bcc395810b176d40fa",
    "lastUpdated": "2025-03-23",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "foxyseta"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path grammars/problog."
  },
  {
    "id": "parser-foxy-prolog-prolog",
    "name": "Prolog",
    "language": "prolog",
    "package": "codeberg.org/foxy/tree-sitter-prolog",
    "version": "git-d8d415f",
    "sourceCommit": "d8d415f6a1cf80ca138524bcc395810b176d40fa",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "foxy"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path grammars/prolog."
  },
  {
    "id": "parser-foxyseta-prolog-prolog",
    "name": "Prolog",
    "language": "prolog",
    "package": "github.com/foxyseta/tree-sitter-prolog",
    "version": "git-d8d415f",
    "sourceCommit": "d8d415f6a1cf80ca138524bcc395810b176d40fa",
    "lastUpdated": "2025-03-23",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "foxyseta"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path grammars/prolog."
  },
  {
    "id": "parser-promql",
    "name": "Promql",
    "language": "promql",
    "package": "github.com/MichaHoffmann/tree-sitter-promql",
    "version": "git-77625d7",
    "sourceCommit": "77625d78eebc3ffc44d114a07b2f348dff3061b0",
    "lastUpdated": "2023-08-13",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "MichaHoffmann"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-properties",
    "name": "Properties",
    "language": "properties",
    "package": "github.com/tree-sitter-grammars/tree-sitter-properties",
    "version": "git-6310671",
    "sourceCommit": "6310671b24d4e04b803577b1c675d765cbd5773b",
    "lastUpdated": "2025-07-14",
    "upstreamSemver": "0.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-properties.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-coder3101-proto-proto",
    "name": "Proto",
    "language": "proto",
    "package": "github.com/coder3101/tree-sitter-proto",
    "version": "git-d65a18c",
    "sourceCommit": "d65a18ce7c2242801f702770114ad08056c7f8c9",
    "lastUpdated": "2026-03-15",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "coder3101"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-sdoerner-proto-proto",
    "name": "Proto",
    "language": "proto",
    "package": "github.com/sdoerner/tree-sitter-proto",
    "version": "git-778ab6e",
    "sourceCommit": "778ab6ed18a7fcf82c83805a87d63376c51e80bc",
    "lastUpdated": "2024-12-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "sdoerner"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-proverif",
    "name": "Proverif",
    "language": "proverif",
    "package": "codeberg.org/maribu/tree-sitter-proverif",
    "version": "git-7741807",
    "sourceCommit": "7741807092c4009c1fe4c3648da60ca72b1b80f1",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "maribu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-prql",
    "name": "Prql",
    "language": "prql",
    "package": "github.com/PRQL/tree-sitter-prql",
    "version": "git-09e158c",
    "sourceCommit": "09e158cd3650581c0af4c49c2e5b10c4834c8646",
    "lastUpdated": "2023-07-28",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "PRQL"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-psv",
    "name": "Psv",
    "language": "psv",
    "package": "github.com/tree-sitter-grammars/tree-sitter-csv",
    "version": "git-f6bf6e3",
    "sourceCommit": "f6bf6e35eb0b95fbadea4bb39cb9709507fcb181",
    "lastUpdated": "2025-11-13",
    "upstreamSemver": "1.2.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "psv/queries/highlights.scm"
      ],
      "injections": [
        "psv/queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.2.0. Maintained in tree-sitter-grammars. Grammar path psv."
  },
  {
    "id": "parser-ptx",
    "name": "Ptx",
    "language": "ptx",
    "package": "codeberg.org/jer-gremlin/tree-sitter-ptx",
    "version": "git-3dfa675",
    "sourceCommit": "3dfa6758d4c15832d051f933101992b9e01d6611",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "jer-gremlin"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-pug",
    "name": "Pug",
    "language": "pug",
    "package": "github.com/zealot128/tree-sitter-pug",
    "version": "git-13e9195",
    "sourceCommit": "13e9195370172c86a8b88184cc358b23b677cc46",
    "lastUpdated": "2024-11-17",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "zealot128"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-puppet",
    "name": "Puppet",
    "language": "puppet",
    "package": "github.com/tree-sitter-grammars/tree-sitter-puppet",
    "version": "git-15f1929",
    "sourceCommit": "15f192929b7d317f5914de2b4accd37b349182a6",
    "lastUpdated": "2024-12-22",
    "upstreamSemver": "1.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-puppet.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-purescript",
    "name": "PureScript",
    "language": "purescript",
    "package": "github.com/postsolar/tree-sitter-purescript",
    "version": "git-f541f95",
    "sourceCommit": "f541f95ffd6852fbbe88636317c613285bc105af",
    "lastUpdated": "2025-06-17",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "postsolar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.3.0."
  },
  {
    "id": "parser-pymanifest",
    "name": "PyManifest",
    "language": "pymanifest",
    "package": "github.com/tree-sitter-grammars/tree-sitter-pymanifest",
    "version": "git-debbdb8",
    "sourceCommit": "debbdb83fe6356adc7261c41c69b45ba49c97294",
    "lastUpdated": "2025-07-19",
    "upstreamSemver": "0.6.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-pymanifest.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.6.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-python",
    "name": "Python",
    "language": "python",
    "package": "github.com/tree-sitter/tree-sitter-python",
    "version": "git-26855ea",
    "sourceCommit": "26855eabccb19c6abf499fbc5b8dc7cc9ab8bc64",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-python.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-ql",
    "name": "QL",
    "language": "ql",
    "package": "github.com/tree-sitter/tree-sitter-ql",
    "version": "git-1fd627a",
    "sourceCommit": "1fd627a4e8bff8c24c11987474bd33112bead857",
    "lastUpdated": "2024-11-11",
    "upstreamSemver": "0.23.1",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ql.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.23.1. Official tree-sitter repository."
  },
  {
    "id": "parser-ql-dbscheme",
    "name": "QlDbscheme",
    "language": "ql-dbscheme",
    "package": "github.com/tree-sitter/tree-sitter-ql-dbscheme",
    "version": "git-15baf01",
    "sourceCommit": "15baf01feb5f20bb3d668d27abc0a36e944b183f",
    "lastUpdated": "2024-11-11",
    "upstreamSemver": "0.23.1",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ql_dbscheme.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.23.1. Official tree-sitter repository."
  },
  {
    "id": "parser-qmldir",
    "name": "Qmldir",
    "language": "qmldir",
    "package": "github.com/tree-sitter-grammars/tree-sitter-qmldir",
    "version": "git-6b2b5e4",
    "sourceCommit": "6b2b5e41734bd6f07ea4c36ac20fb6f14061c841",
    "lastUpdated": "2023-03-01",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-qmljs",
    "name": "Qmljs",
    "language": "qmljs",
    "package": "github.com/yuja/tree-sitter-qmljs",
    "version": "git-0bec435",
    "sourceCommit": "0bec4359a7eb2f6c9220cd57372d87d236f66d59",
    "lastUpdated": "2025-10-17",
    "upstreamSemver": "0.3.0",
    "abi": 14,
    "owners": [
      "yuja"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals queries. Latest release tag 0.3.0."
  },
  {
    "id": "parser-query",
    "name": "Query",
    "language": "query",
    "package": "github.com/tree-sitter-grammars/tree-sitter-query",
    "version": "git-fc5409c",
    "sourceCommit": "fc5409c6820dd5e02b0b0a309d3da2bfcde2db17",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.8.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-query.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/query/highlights.scm"
      ],
      "injections": [
        "queries/query/injections.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.8.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-quint",
    "name": "Quint",
    "language": "quint",
    "package": "github.com/gruhn/tree-sitter-quint",
    "version": "git-eebbd01",
    "sourceCommit": "eebbd01edfeff6404778c92efe5554e42e506a18",
    "lastUpdated": "2024-10-17",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "gruhn"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-r",
    "name": "R",
    "language": "r",
    "package": "github.com/r-lib/tree-sitter-r",
    "version": "git-0e6ef77",
    "sourceCommit": "0e6ef7741712c09dc3ee6e81c42e919820cc65ef",
    "lastUpdated": "2025-09-16",
    "upstreamSemver": "1.2.0",
    "abi": 14,
    "owners": [
      "r-lib"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-r.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 1.2.0."
  },
  {
    "id": "parser-racket",
    "name": "Racket",
    "language": "racket",
    "package": "github.com/6cdh/tree-sitter-racket",
    "version": "git-54649be",
    "sourceCommit": "54649be8b939341d2d5410b594ab954fe8814bd0",
    "lastUpdated": "2026-03-17",
    "upstreamSemver": "0.24.7-1",
    "abi": 14,
    "owners": [
      "6cdh"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.24.7-1."
  },
  {
    "id": "parser-ralph",
    "name": "Ralph",
    "language": "ralph",
    "package": "github.com/alephium/tree-sitter-ralph",
    "version": "git-f6d81bf",
    "sourceCommit": "f6d81bf7a4599c77388035439cf5801cd461ff77",
    "lastUpdated": "2024-06-24",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "alephium"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-rasi",
    "name": "Rasi",
    "language": "rasi",
    "package": "github.com/Fymyte/tree-sitter-rasi",
    "version": "git-e735c68",
    "sourceCommit": "e735c6881d8b475aaa4ef8f0a2bdfd825b438143",
    "lastUpdated": "2025-04-13",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "Fymyte"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-razor",
    "name": "Razor",
    "language": "razor",
    "package": "github.com/tris203/tree-sitter-razor",
    "version": "git-fe46ce5",
    "sourceCommit": "fe46ce5ea7d844e53d59bc96f2175d33691c61c5",
    "lastUpdated": "2025-02-17",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "tris203"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-rbs",
    "name": "Rbs",
    "language": "rbs",
    "package": "github.com/joker1007/tree-sitter-rbs",
    "version": "git-5282e2f",
    "sourceCommit": "5282e2f36d4109f5315c1d9486b5b0c2044622bb",
    "lastUpdated": "2025-11-13",
    "upstreamSemver": "0.2.2",
    "abi": 15,
    "owners": [
      "joker1007"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.2.2."
  },
  {
    "id": "parser-re2c",
    "name": "Re2c",
    "language": "re2c",
    "package": "github.com/tree-sitter-grammars/tree-sitter-re2c",
    "version": "git-c18a3c2",
    "sourceCommit": "c18a3c2f4b6665e35b7e50d6048ea3cff770c572",
    "lastUpdated": "2024-09-25",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-readline",
    "name": "Readline",
    "language": "readline",
    "package": "github.com/tree-sitter-grammars/tree-sitter-readline",
    "version": "git-6b744c5",
    "sourceCommit": "6b744c527aebd12e46a5ecb3aebdb8d621a8e83e",
    "lastUpdated": "2025-11-23",
    "upstreamSemver": "1.1.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-regex",
    "name": "Regex",
    "language": "regex",
    "package": "github.com/tree-sitter/tree-sitter-regex",
    "version": "git-b2ac15e",
    "sourceCommit": "b2ac15e27fce703d2f37a79ccd94a5c0cbe9720b",
    "lastUpdated": "2025-09-13",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-regex.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-rego",
    "name": "Rego",
    "language": "rego",
    "package": "github.com/FallenAngel97/tree-sitter-rego",
    "version": "git-ddd39af",
    "sourceCommit": "ddd39af81fe8b0288102a7cb97959dfce723e0f3",
    "lastUpdated": "2026-01-14",
    "upstreamSemver": "1.1.0",
    "abi": 15,
    "owners": [
      "FallenAngel97"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.1.0."
  },
  {
    "id": "parser-requirements",
    "name": "Requirements",
    "language": "requirements",
    "package": "github.com/tree-sitter-grammars/tree-sitter-requirements",
    "version": "git-caeb2ba",
    "sourceCommit": "caeb2ba854dea55931f76034978de1fd79362939",
    "lastUpdated": "2025-07-06",
    "upstreamSemver": "0.5.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-requirements.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.5.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-rescript",
    "name": "ReScript",
    "language": "rescript",
    "package": "github.com/rescript-lang/tree-sitter-rescript",
    "version": "git-43c2f1f",
    "sourceCommit": "43c2f1f35024918d415dc933d4cc534d6419fedf",
    "lastUpdated": "2026-02-19",
    "upstreamSemver": "5.0.0",
    "abi": 15,
    "owners": [
      "rescript-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 5.0.0."
  },
  {
    "id": "parser-rifleconf",
    "name": "Rifleconf",
    "language": "rifleconf",
    "package": "github.com/purarue/tree-sitter-rifleconf",
    "version": "git-6389ef0",
    "sourceCommit": "6389ef0fc0d48f0397ec233109c074a0cb685e36",
    "lastUpdated": "2026-01-23",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "purarue"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-ripple",
    "name": "Ripple",
    "language": "ripple",
    "package": "github.com/Ripple-TS/ripple",
    "version": "git-49762f0",
    "sourceCommit": "49762f0a63de0d1845fcd2e6632639c095995336",
    "lastUpdated": "2025-11-15",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "Ripple-TS"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path packages/tree-sitter."
  },
  {
    "id": "parser-rnoweb",
    "name": "Rnoweb",
    "language": "rnoweb",
    "package": "github.com/bamonroe/tree-sitter-rnoweb",
    "version": "git-1a74dc0",
    "sourceCommit": "1a74dc0ed731ad07db39f063e2c5a6fe528cae7f",
    "lastUpdated": "2024-03-14",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "bamonroe"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-robot",
    "name": "Robot",
    "language": "robot",
    "package": "github.com/Hubro/tree-sitter-robot",
    "version": "git-b317756",
    "sourceCommit": "b317756ae0fb90ca945f900c77cdd3513d0c0eb4",
    "lastUpdated": "2026-04-07",
    "upstreamSemver": "1.3.0",
    "abi": 15,
    "owners": [
      "Hubro"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-robot.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.3.0."
  },
  {
    "id": "parser-robots",
    "name": "Robots",
    "language": "robots",
    "package": "github.com/opa-oz/tree-sitter-robots-txt",
    "version": "git-8e3a420",
    "sourceCommit": "8e3a4205b76236bb6dbebdbee5afc262ce38bb62",
    "lastUpdated": "2024-06-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "opa-oz"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-robots-txt",
    "name": "RobotsTxt",
    "language": "robots_txt",
    "package": "github.com/opa-oz/tree-sitter-robots-txt",
    "version": "git-0c06610",
    "sourceCommit": "0c066107e3548de79316a6a4ec771e2f7cf7c468",
    "lastUpdated": "2026-01-02",
    "upstreamSemver": "1.0.1",
    "abi": 15,
    "owners": [
      "opa-oz"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.1."
  },
  {
    "id": "parser-roc",
    "name": "Roc",
    "language": "roc",
    "package": "github.com/faldor20/tree-sitter-roc",
    "version": "git-edc1805",
    "sourceCommit": "edc18052a9d7382ac9f9f5bf413db3a78d5ea12c",
    "lastUpdated": "2026-01-26",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "faldor20"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-ron",
    "name": "Ron",
    "language": "ron",
    "package": "github.com/tree-sitter-grammars/tree-sitter-ron",
    "version": "git-7893855",
    "sourceCommit": "78938553b93075e638035f624973083451b29055",
    "lastUpdated": "2024-05-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ros-interface",
    "name": "ROSInterface",
    "language": "ros_interface",
    "package": "github.com/SuperJappie08/tree-sitter-ros-interface",
    "version": "git-9eed370",
    "sourceCommit": "9eed3703424441e1c0fec97cb911cfa199bbeef5",
    "lastUpdated": "2026-03-19",
    "upstreamSemver": "0.1.1",
    "abi": 15,
    "owners": [
      "SuperJappie08"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.1.1."
  },
  {
    "id": "parser-rpmspec",
    "name": "Rpmspec",
    "language": "rpmspec",
    "package": "gitlab.com/cryptomilk/tree-sitter-rpmspec",
    "version": "git-d0275cd",
    "sourceCommit": "d0275cd1316d9b7a2e0fae028ce95a5a18741e1d",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "cryptomilk"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-rshtml",
    "name": "Rshtml",
    "language": "rshtml",
    "package": "github.com/rshtml/tree-sitter-rshtml",
    "version": "git-89ae0f3",
    "sourceCommit": "89ae0f3a5e221a83aad243def85e822616d3b3c2",
    "lastUpdated": "2025-11-04",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "rshtml"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. highlights, injections queries."
  },
  {
    "id": "parser-rst",
    "name": "Rst",
    "language": "rst",
    "package": "github.com/stsewd/tree-sitter-rst",
    "version": "git-4e562e1",
    "sourceCommit": "4e562e1598b95b93db4f3f64fe40ddefbc677a15",
    "lastUpdated": "2025-02-24",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "stsewd"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-ruby",
    "name": "Ruby",
    "language": "ruby",
    "package": "github.com/tree-sitter/tree-sitter-ruby",
    "version": "git-ad907a6",
    "sourceCommit": "ad907a69da0c8a4f7a943a7fe012712208da6dee",
    "lastUpdated": "2026-03-10",
    "upstreamSemver": "0.23.1",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ruby.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.23.1. Official tree-sitter repository."
  },
  {
    "id": "parser-runescript",
    "name": "RuneScript",
    "language": "runescript",
    "package": "github.com/LostCityRS/tree-sitter-runescript",
    "version": "git-cf85bbd",
    "sourceCommit": "cf85bbd5da0c5ad243301d889c7f84d790a4cae4",
    "lastUpdated": "2024-11-06",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "LostCityRS"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-rust",
    "name": "Rust",
    "language": "rust",
    "package": "github.com/tree-sitter/tree-sitter-rust",
    "version": "git-77a3747",
    "sourceCommit": "77a3747266f4d621d0757825e6b11edcbf991ca5",
    "lastUpdated": "2026-03-27",
    "upstreamSemver": "0.24.2",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-rust.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.24.2. Official tree-sitter repository."
  },
  {
    "id": "parser-rust-format-args",
    "name": "Rust Format Args",
    "language": "rust-format-args",
    "package": "github.com/nik-rev/tree-sitter-rust-format-args",
    "version": "git-84ffe55",
    "sourceCommit": "84ffe550e261cf5ea40a0ec31849ba2443bae99f",
    "lastUpdated": "2025-06-06",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "nik-rev"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-scala",
    "name": "Scala",
    "language": "scala",
    "package": "github.com/tree-sitter/tree-sitter-scala",
    "version": "git-617e8af",
    "sourceCommit": "617e8afd805658f497e0705dbf7678fbeffd479f",
    "lastUpdated": "2026-04-09",
    "upstreamSemver": "0.25.0",
    "abi": 15,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-scala.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.25.0. Official tree-sitter repository."
  },
  {
    "id": "parser-scfg",
    "name": "Scfg",
    "language": "scfg",
    "package": "github.com/rockorager/tree-sitter-scfg",
    "version": "git-d850fd4",
    "sourceCommit": "d850fd470445d73de318a21d734d1e09e29b773c",
    "lastUpdated": "2025-10-29",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "rockorager"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-scheme",
    "name": "Scheme",
    "language": "scheme",
    "package": "github.com/6cdh/tree-sitter-scheme",
    "version": "git-c6cb7c7",
    "sourceCommit": "c6cb7c7d7a04b3f5d999c28e2e9c0c31b2d50ece",
    "lastUpdated": "2026-03-17",
    "upstreamSemver": "0.24.7-1",
    "abi": 14,
    "owners": [
      "6cdh"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.24.7-1."
  },
  {
    "id": "parser-scss",
    "name": "Scss",
    "language": "scss",
    "package": "github.com/serenadeai/tree-sitter-scss",
    "version": "git-c478c68",
    "sourceCommit": "c478c6868648eff49eb04a4df90d703dc45b312a",
    "lastUpdated": "2022-02-03",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "serenadeai"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-sdml",
    "name": "Sdml",
    "language": "sdml",
    "package": "github.com/sdm-lang/tree-sitter-sdml",
    "version": "git-1b9cebf",
    "sourceCommit": "1b9cebf8fd5a83c36456111c8c0a7a664ce78fb3",
    "lastUpdated": "2025-10-30",
    "upstreamSemver": "0.4.14",
    "abi": 15,
    "owners": [
      "sdm-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals, tags queries. Latest release tag 0.4.14."
  },
  {
    "id": "parser-sflog",
    "name": "sfLog",
    "language": "sflog",
    "package": "github.com/aheber/tree-sitter-sfapex",
    "version": "git-3597575",
    "sourceCommit": "3597575a429766dd7ecce9f5bb97f6fec4419d5d",
    "lastUpdated": "2025-02-13",
    "upstreamSemver": "0.0.10",
    "abi": 14,
    "owners": [
      "aheber"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "sflog/queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.10. Grammar path sflog."
  },
  {
    "id": "parser-shellcheckrc",
    "name": "Shellcheckrc",
    "language": "shellcheckrc",
    "package": "codeberg.org/kpbaks/tree-sitter-shellcheckrc",
    "version": "git-ad3da4e",
    "sourceCommit": "ad3da4e8f7fd72dcc5e93a6b89822c59a7cd10ff",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "kpbaks"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-slang",
    "name": "Slang",
    "language": "slang",
    "package": "github.com/tree-sitter-grammars/tree-sitter-slang",
    "version": "git-1dbcc4a",
    "sourceCommit": "1dbcc4abc7b3cdd663eb03d93031167d6ed19f56",
    "lastUpdated": "2025-09-01",
    "upstreamSemver": "0.3.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.3.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-slim",
    "name": "Slim",
    "language": "slim",
    "package": "github.com/theoo/tree-sitter-slim",
    "version": "git-a06113f",
    "sourceCommit": "a06113f5175b805a37d20df0a6f9d722e0ab6cfe",
    "lastUpdated": "2025-06-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "theoo"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-slint",
    "name": "Slint",
    "language": "slint",
    "package": "github.com/slint-ui/tree-sitter-slint",
    "version": "git-4d7ad06",
    "sourceCommit": "4d7ad0617c30f865f051bbac04a9826bea29f987",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "slint-ui"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-slisp",
    "name": "Slisp",
    "language": "slisp",
    "package": "github.com/xenogenics/tree-sitter-slisp",
    "version": "git-29f9c67",
    "sourceCommit": "29f9c6707ce9dfc2fc915d175ec720b207f179f3",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "xenogenics"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-smali",
    "name": "Smali",
    "language": "smali",
    "package": "github.com/tree-sitter-grammars/tree-sitter-smali",
    "version": "git-fdfa6a1",
    "sourceCommit": "fdfa6a1febc43c7467aa7e937b87b607956f2346",
    "lastUpdated": "2024-05-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-smithy",
    "name": "Smithy",
    "language": "smithy",
    "package": "github.com/indoorvivants/tree-sitter-smithy",
    "version": "git-8327eb8",
    "sourceCommit": "8327eb84d55639ffbe08c9dc82da7fff72a1ad07",
    "lastUpdated": "2023-11-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "indoorvivants"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-giorbo-sml-sml",
    "name": "Sml",
    "language": "sml",
    "package": "github.com/Giorbo/tree-sitter-sml",
    "version": "git-bd4055d",
    "sourceCommit": "bd4055d5554614520d4a0706b34dc0c317c6b608",
    "lastUpdated": "2022-09-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Giorbo"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-matthewfluet-sml-sml",
    "name": "SML",
    "language": "sml",
    "package": "github.com/MatthewFluet/tree-sitter-sml",
    "version": "git-fd4b495",
    "sourceCommit": "fd4b4955bb998262840ab8119885b3edf20ea75a",
    "lastUpdated": "2025-05-22",
    "upstreamSemver": "0.23.0",
    "abi": 15,
    "owners": [
      "MatthewFluet"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.23.0."
  },
  {
    "id": "parser-snakemake",
    "name": "Snakemake",
    "language": "snakemake",
    "package": "github.com/osthomas/tree-sitter-snakemake",
    "version": "git-6801043",
    "sourceCommit": "68010430c3e51c0e84c1ce21c6551df0e2469f51",
    "lastUpdated": "2025-09-18",
    "upstreamSemver": "2.1.0",
    "abi": 15,
    "owners": [
      "osthomas"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/snakemake/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2.1.0."
  },
  {
    "id": "parser-snl",
    "name": "Snl",
    "language": "snl",
    "package": "github.com/minijackson/tree-sitter-snl",
    "version": "git-846e2d6",
    "sourceCommit": "846e2d6809ac5863a15b5494f20fd267c21221c8",
    "lastUpdated": "2025-09-17",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "minijackson"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. highlights, injections queries."
  },
  {
    "id": "parser-solidity",
    "name": "Solidity",
    "language": "solidity",
    "package": "github.com/JoranHonig/tree-sitter-solidity",
    "version": "git-048fe68",
    "sourceCommit": "048fe686cb1fde267243739b8bdbec8fc3a55272",
    "lastUpdated": "2026-02-11",
    "upstreamSemver": "1.2.3",
    "abi": 15,
    "owners": [
      "JoranHonig"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.2.3."
  },
  {
    "id": "parser-soql",
    "name": "soql",
    "language": "soql",
    "package": "github.com/aheber/tree-sitter-sfapex",
    "version": "git-3597575",
    "sourceCommit": "3597575a429766dd7ecce9f5bb97f6fec4419d5d",
    "lastUpdated": "2025-02-13",
    "upstreamSemver": "0.0.10",
    "abi": 14,
    "owners": [
      "aheber"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "soql/queries/highlights-distinct.scm",
        "soql/queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.10. Grammar path soql."
  },
  {
    "id": "parser-sosl",
    "name": "sosl",
    "language": "sosl",
    "package": "github.com/aheber/tree-sitter-sfapex",
    "version": "git-3597575",
    "sourceCommit": "3597575a429766dd7ecce9f5bb97f6fec4419d5d",
    "lastUpdated": "2025-02-13",
    "upstreamSemver": "0.0.10",
    "abi": 14,
    "owners": [
      "aheber"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "soql/queries/highlights.scm",
        "sosl/queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.0.10. Grammar path sosl."
  },
  {
    "id": "parser-sourcepawn",
    "name": "Sourcepawn",
    "language": "sourcepawn",
    "package": "github.com/nilshelmig/tree-sitter-sourcepawn",
    "version": "git-5a8fdd4",
    "sourceCommit": "5a8fdd446b516c81e218245c12129c6ad4bccfa2",
    "lastUpdated": "2025-06-13",
    "upstreamSemver": "0.7.8",
    "abi": 14,
    "owners": [
      "nilshelmig"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-sourcepawn.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.7.8."
  },
  {
    "id": "parser-spade",
    "name": "Spade",
    "language": "spade",
    "package": "codeberg.org/spade-lang/tree-sitter-spade",
    "version": "git-996aaab",
    "sourceCommit": "996aaabea9a9fbe498ae0876356028a78e6ef8db",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "spade-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-sparql",
    "name": "SPARQL",
    "language": "sparql",
    "package": "github.com/GordianDziwis/tree-sitter-sparql",
    "version": "git-1ef52d3",
    "sourceCommit": "1ef52d35a73a2a5f2e433ecfd1c751c1360a923b",
    "lastUpdated": "2025-10-15",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "GordianDziwis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-spicedb",
    "name": "Spicedb",
    "language": "spicedb",
    "package": "github.com/authzed/tree-sitter-spicedb",
    "version": "git-a4e4645",
    "sourceCommit": "a4e4645651f86d6684c15dfa9931b7841dc52a66",
    "lastUpdated": "2024-02-08",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "authzed"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-sproto",
    "name": "Sproto",
    "language": "sproto",
    "package": "github.com/hanxi/tree-sitter-sproto",
    "version": "git-d554c14",
    "sourceCommit": "d554c1456e35e7b2690552d52921c987d0cf6799",
    "lastUpdated": "2025-08-12",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "hanxi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-sql",
    "name": "SQL",
    "language": "sql",
    "package": "github.com/DerekStride/tree-sitter-sql",
    "version": "git-c2e1e08",
    "sourceCommit": "c2e1e08db1ea20dc23bdb8d228a81a8756e9c450",
    "lastUpdated": "2026-03-02",
    "upstreamSemver": "0.3.11",
    "abi": null,
    "owners": [
      "DerekStride"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.3.11."
  },
  {
    "id": "parser-squirrel",
    "name": "Squirrel",
    "language": "squirrel",
    "package": "github.com/tree-sitter-grammars/tree-sitter-squirrel",
    "version": "git-072c969",
    "sourceCommit": "072c969749e66f000dba35a33c387650e203e96e",
    "lastUpdated": "2024-07-08",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ssh-client-config",
    "name": "SshClientConfig",
    "language": "ssh-client-config",
    "package": "github.com/metio/tree-sitter-ssh-client-config",
    "version": "git-c01c35b",
    "sourceCommit": "c01c35b4aacb3b1864fce2f3b492eb8baafd42a5",
    "lastUpdated": "2026-04-03",
    "upstreamSemver": "2026.4.9",
    "abi": 14,
    "owners": [
      "metio"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2026.4.9."
  },
  {
    "id": "parser-ssh-config",
    "name": "SSHConfig",
    "language": "ssh_config",
    "package": "github.com/tree-sitter-grammars/tree-sitter-ssh-config",
    "version": "git-71d2693",
    "sourceCommit": "71d2693deadaca8cdc09e38ba41d2f6042da1616",
    "lastUpdated": "2025-09-15",
    "upstreamSemver": "0.4.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-ssh_config.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.4.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-sshclientconfig",
    "name": "Sshclientconfig",
    "language": "sshclientconfig",
    "package": "github.com/metio/tree-sitter-ssh-client-config",
    "version": "git-e45c6d5",
    "sourceCommit": "e45c6d5c71657344d4ecaf87dafae7736f776c57",
    "lastUpdated": "2022-10-30",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "metio"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-stan",
    "name": "Stan",
    "language": "stan",
    "package": "github.com/WardBrian/tree-sitter-stan",
    "version": "git-a92d6a5",
    "sourceCommit": "a92d6a59f724ca2b0d5db87c8042563158e9b4e6",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.3.1",
    "abi": 14,
    "owners": [
      "WardBrian"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "grammars/stan/queries/highlights.scm"
      ],
      "locals": [
        "grammars/stan/queries/locals.scm"
      ],
      "tags": [
        "grammars/stan/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.3.1. Grammar path grammars/stan/."
  },
  {
    "id": "parser-stanfunctions",
    "name": "StanFunctions",
    "language": "stanfunctions",
    "package": "github.com/WardBrian/tree-sitter-stan",
    "version": "git-a92d6a5",
    "sourceCommit": "a92d6a59f724ca2b0d5db87c8042563158e9b4e6",
    "lastUpdated": "2026-03-20",
    "upstreamSemver": "0.3.1",
    "abi": 14,
    "owners": [
      "WardBrian"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "grammars/stanfunctions/queries/sf-highlights.scm"
      ],
      "locals": [
        "grammars/stanfunctions/queries/sf-locals.scm"
      ],
      "tags": [
        "grammars/stanfunctions/queries/sf-tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.3.1. Grammar path grammars/stanfunctions/."
  },
  {
    "id": "parser-starlark",
    "name": "Starlark",
    "language": "starlark",
    "package": "github.com/tree-sitter-grammars/tree-sitter-starlark",
    "version": "git-a453dbf",
    "sourceCommit": "a453dbf3ba433db0e5ec621a38a7e59d72e4dc69",
    "lastUpdated": "2024-12-05",
    "upstreamSemver": "1.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-starlark.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals, tags queries. Latest release tag 1.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-strace",
    "name": "strace",
    "language": "strace",
    "package": "github.com/sigmaSd/tree-sitter-strace",
    "version": "git-ac874dd",
    "sourceCommit": "ac874ddfcc08d689fee1f4533789e06d88388f29",
    "lastUpdated": "2025-12-21",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "sigmaSd"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-strictdoc",
    "name": "Strictdoc",
    "language": "strictdoc",
    "package": "github.com/manueldiagostino/tree-sitter-strictdoc",
    "version": "git-070edcf",
    "sourceCommit": "070edcf23f7c85af355437706048f73833e0ea10",
    "lastUpdated": "2025-09-02",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "manueldiagostino"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-styled",
    "name": "Styled",
    "language": "styled",
    "package": "github.com/mskelton/tree-sitter-styled",
    "version": "git-319cdca",
    "sourceCommit": "319cdcaa0346ba6db668a222d938e5c3569e2a51",
    "lastUpdated": "2025-02-25",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "mskelton"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-styx",
    "name": "Styx",
    "language": "styx",
    "package": "github.com/bearcove/styx",
    "version": "git-ff7f496",
    "sourceCommit": "ff7f49629a20a308111810a0c5e6228617133ea7",
    "lastUpdated": "2026-02-01",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "bearcove"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path crates/tree-sitter-styx."
  },
  {
    "id": "parser-supercollider",
    "name": "SuperCollider",
    "language": "supercollider",
    "package": "github.com/madskjeldgaard/tree-sitter-supercollider",
    "version": "git-2b03ff4",
    "sourceCommit": "2b03ff49dd19b046add072d0861c4d1ca8a384c8",
    "lastUpdated": "2026-03-22",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "madskjeldgaard"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.3.0."
  },
  {
    "id": "parser-superhtml",
    "name": "Superhtml",
    "language": "superhtml",
    "package": "github.com/kristoff-it/superhtml",
    "version": "git-8b5bb27",
    "sourceCommit": "8b5bb272b269afdd38cdf641c4a707dd92fbe902",
    "lastUpdated": "2025-10-18",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "kristoff-it"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path tree-sitter-superhtml."
  },
  {
    "id": "parser-surface",
    "name": "Surface",
    "language": "surface",
    "package": "github.com/connorlay/tree-sitter-surface",
    "version": "git-f4586b3",
    "sourceCommit": "f4586b35ac8548667a9aaa4eae44456c1f43d032",
    "lastUpdated": "2022-01-19",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "connorlay"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-svelte",
    "name": "Svelte",
    "language": "svelte",
    "package": "github.com/tree-sitter-grammars/tree-sitter-svelte",
    "version": "git-ae5199d",
    "sourceCommit": "ae5199db47757f785e43a14b332118a5474de1a2",
    "lastUpdated": "2024-10-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-sway",
    "name": "Sway",
    "language": "sway",
    "package": "github.com/FuelLabs/tree-sitter-sway",
    "version": "git-9b7845c",
    "sourceCommit": "9b7845ce06ecb38b040c3940970b4fd0adc331d1",
    "lastUpdated": "2025-09-02",
    "upstreamSemver": "1.0.0",
    "abi": 14,
    "owners": [
      "FuelLabs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.0."
  },
  {
    "id": "parser-swift",
    "name": "Swift",
    "language": "swift",
    "package": "github.com/alex-pinkus/tree-sitter-swift",
    "version": "git-da7f937",
    "sourceCommit": "da7f9370b70ba31357122c211734db98eb6f6a35",
    "lastUpdated": "2026-04-06",
    "upstreamSemver": "0.7.1-pypi",
    "abi": null,
    "owners": [
      "alex-pinkus"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-swift.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals queries. Latest release tag 0.7.1-pypi."
  },
  {
    "id": "parser-sxhkdrc",
    "name": "Sxhkdrc",
    "language": "sxhkdrc",
    "package": "github.com/RaafatTurki/tree-sitter-sxhkdrc",
    "version": "git-440d5f9",
    "sourceCommit": "440d5f913d9465c9c776a1bd92334d32febcf065",
    "lastUpdated": "2022-08-31",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "RaafatTurki"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-systemtap",
    "name": "Systemtap",
    "language": "systemtap",
    "package": "github.com/ok-ryoko/tree-sitter-systemtap",
    "version": "git-f2b378a",
    "sourceCommit": "f2b378a9af0b7e1192cff67a5fb45508c927205d",
    "lastUpdated": "2024-08-07",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ok-ryoko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-systemverilog",
    "name": "SystemVerilog",
    "language": "systemverilog",
    "package": "github.com/gmlarumbe/tree-sitter-systemverilog",
    "version": "git-2939285",
    "sourceCommit": "293928578cb27fbd0005fcc5f09c09a1e8628c89",
    "lastUpdated": "2026-02-23",
    "upstreamSemver": "0.3.1",
    "abi": 15,
    "owners": [
      "gmlarumbe"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-systemverilog.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.3.1."
  },
  {
    "id": "parser-xasc-t32-t32",
    "name": "T32",
    "language": "t32",
    "package": "github.com/xasc/tree-sitter-t32",
    "version": "git-3bce397",
    "sourceCommit": "3bce3977303c3f88bfa9fcdfcfd1a4f8f6ffa0b0",
    "lastUpdated": "2026-03-07",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "xasc"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-xasc-t32-t32-2",
    "name": "T32",
    "language": "t32",
    "package": "gitlab.com/xasc/tree-sitter-t32",
    "version": "git-6da5e3c",
    "sourceCommit": "6da5e3cbabd376b566d04282005e52ffe67ef74a",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "xasc"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-flakebi-tablegen-tablegen",
    "name": "Tablegen",
    "language": "tablegen",
    "package": "github.com/Flakebi/tree-sitter-tablegen",
    "version": "git-3e9c482",
    "sourceCommit": "3e9c4822ab5cdcccf4f8aa9dcd42117f736d51d9",
    "lastUpdated": "2024-10-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Flakebi"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-tablegen-tablegen",
    "name": "Tablegen",
    "language": "tablegen",
    "package": "github.com/tree-sitter-grammars/tree-sitter-tablegen",
    "version": "git-b117088",
    "sourceCommit": "b1170880c61355aaf38fc06f4af7d3c55abdabc4",
    "lastUpdated": "2024-05-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tact",
    "name": "Tact",
    "language": "tact",
    "package": "github.com/tact-lang/tree-sitter-tact",
    "version": "git-a6267c2",
    "sourceCommit": "a6267c2091ed432c248780cec9f8d42c8766d9ad",
    "lastUpdated": "2025-05-01",
    "upstreamSemver": "1.6.0",
    "abi": 14,
    "owners": [
      "tact-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, locals, tags queries. Latest release tag 1.6.0."
  },
  {
    "id": "parser-task",
    "name": "Task",
    "language": "task",
    "package": "github.com/AlexanderBrevig/tree-sitter-task",
    "version": "git-f2cb435",
    "sourceCommit": "f2cb435c5dbf3ee19493e224485d977cb2d36d8b",
    "lastUpdated": "2022-08-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "AlexanderBrevig"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tcl",
    "name": "Tcl",
    "language": "tcl",
    "package": "github.com/tree-sitter-grammars/tree-sitter-tcl",
    "version": "git-8f11ac7",
    "sourceCommit": "8f11ac7206a54ed11210491cee1e0657e2962c47",
    "lastUpdated": "2025-05-14",
    "upstreamSemver": "1.1.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/tcl/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-teal",
    "name": "Teal",
    "language": "teal",
    "package": "github.com/euclidianAce/tree-sitter-teal",
    "version": "git-05d276e",
    "sourceCommit": "05d276e737055e6f77a21335b7573c9d3c091e2f",
    "lastUpdated": "2025-05-14",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "euclidianAce"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-teal.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-templ",
    "name": "Templ",
    "language": "templ",
    "package": "github.com/vrischmann/tree-sitter-templ",
    "version": "git-1c6db04",
    "sourceCommit": "1c6db04effbcd7773c826bded9783cbc3061bd55",
    "lastUpdated": "2025-12-31",
    "upstreamSemver": "2.2.0",
    "abi": 15,
    "owners": [
      "vrischmann"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/templ/highlights.scm"
      ],
      "injections": [
        "queries/templ/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 2.2.0."
  },
  {
    "id": "parser-tera",
    "name": "Tera",
    "language": "tera",
    "package": "github.com/uncenter/tree-sitter-tera",
    "version": "git-3a38c36",
    "sourceCommit": "3a38c368e806268daac9923a27e72bcafbbc16bb",
    "lastUpdated": "2025-12-14",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "uncenter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-terraform",
    "name": "Terraform",
    "language": "terraform",
    "package": "github.com/tree-sitter-grammars/tree-sitter-hcl",
    "version": "git-64ad627",
    "sourceCommit": "64ad62785d442eb4d45df3a1764962dafd5bc98b",
    "lastUpdated": "2026-01-17",
    "upstreamSemver": "1.2.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-hcl.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-terraform.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.2.0. Maintained in tree-sitter-grammars. Grammar path dialects/terraform."
  },
  {
    "id": "parser-test",
    "name": "Test",
    "language": "test",
    "package": "github.com/tree-sitter-grammars/tree-sitter-test",
    "version": "git-76b419f",
    "sourceCommit": "76b419f178da018c29d3004fcbf14f755649eb58",
    "lastUpdated": "2025-08-29",
    "upstreamSemver": "0.3.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-test.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/test/highlights.scm"
      ],
      "injections": [
        "queries/test/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-textproto",
    "name": "Textproto",
    "language": "textproto",
    "package": "github.com/PorterAtGoogle/tree-sitter-textproto",
    "version": "git-568471b",
    "sourceCommit": "568471b80fd8793d37ed01865d8c2208a9fefd1b",
    "lastUpdated": "2024-10-16",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "PorterAtGoogle"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-thrift",
    "name": "Thrift",
    "language": "thrift",
    "package": "github.com/tree-sitter-grammars/tree-sitter-thrift",
    "version": "git-68fd0d8",
    "sourceCommit": "68fd0d80943a828d9e6f49c58a74be1e9ca142cf",
    "lastUpdated": "2024-04-20",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tiger",
    "name": "Tiger",
    "language": "tiger",
    "package": "github.com/ambroisie/tree-sitter-tiger",
    "version": "git-4a77b2d",
    "sourceCommit": "4a77b2d7a004587646bddc4e854779044b6db459",
    "lastUpdated": "2025-03-13",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ambroisie"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-tlaplus",
    "name": "TLAplus",
    "language": "tlaplus",
    "package": "github.com/tlaplus-community/tree-sitter-tlaplus",
    "version": "git-add4081",
    "sourceCommit": "add40814fda369f6efd989977b2c498aaddde984",
    "lastUpdated": "2026-02-17",
    "upstreamSemver": "1.5.0",
    "abi": 14,
    "owners": [
      "tlaplus-community"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-tlaplus.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "locals": [
        "queries/locals.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals queries. Latest release tag 1.5.0."
  },
  {
    "id": "parser-tmux",
    "name": "tmux",
    "language": "tmux",
    "package": "github.com/Freed-Wu/tree-sitter-tmux",
    "version": "git-75d1b99",
    "sourceCommit": "75d1b995b0c23400ac8e49db757a2e0386f9fa8f",
    "lastUpdated": "2025-10-23",
    "upstreamSemver": "0.0.4",
    "abi": 15,
    "owners": [
      "Freed-Wu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.4."
  },
  {
    "id": "parser-todotxt",
    "name": "Todotxt",
    "language": "todotxt",
    "package": "github.com/arnarg/tree-sitter-todotxt",
    "version": "git-3937c5c",
    "sourceCommit": "3937c5cd105ec4127448651a21aef45f52d19609",
    "lastUpdated": "2024-01-15",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "arnarg"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ikatyang-toml-toml",
    "name": "Toml",
    "language": "toml",
    "package": "github.com/ikatyang/tree-sitter-toml",
    "version": "git-7cff70b",
    "sourceCommit": "7cff70bbcbbc62001b465603ca1ea88edd668704",
    "lastUpdated": "2021-03-31",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "ikatyang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-toml-toml",
    "name": "TOML",
    "language": "toml",
    "package": "github.com/tree-sitter-grammars/tree-sitter-toml",
    "version": "git-64b5683",
    "sourceCommit": "64b56832c2cffe41758f28e05c756a3a98d16f41",
    "lastUpdated": "2024-12-03",
    "upstreamSemver": "0.7.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-toml.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.7.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-tql",
    "name": "Tql",
    "language": "tql",
    "package": "github.com/tenzir/tree-sitter-tql",
    "version": "git-d3b3b26",
    "sourceCommit": "d3b3b2699bc09fd0c63e2c13f15f6e474665c62e",
    "lastUpdated": "2026-03-07",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "tenzir"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-vb-dotnet",
    "name": "TreeSitterVbDotnet",
    "language": "tree_sitter_vb_dotnet",
    "package": "github.com/CodeAnt-AI/tree-sitter-vb-dotnet",
    "version": "git-cfca210",
    "sourceCommit": "cfca210ce8fdcb5245bd9cd5c47ce0a21a8488d5",
    "lastUpdated": "2025-07-28",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "CodeAnt-AI"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-tree-sitter-vcl",
    "name": "TreeSitterVcl",
    "language": "tree_sitter_vcl",
    "package": "github.com/ntsk/tree-sitter-vcl",
    "version": "git-567aa57",
    "sourceCommit": "567aa57c6513df349cdb218500672166c105b897",
    "lastUpdated": "2025-12-14",
    "upstreamSemver": "0.2.1",
    "abi": 15,
    "owners": [
      "ntsk"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.2.1."
  },
  {
    "id": "parser-treesitter-gularen",
    "name": "TreesitterGularen",
    "language": "treesitter-gularen",
    "package": "github.com/noorwachid/tree-sitter-gularen",
    "version": "git-9b089d7",
    "sourceCommit": "9b089d770db747cf9239b237e1fc356a06591139",
    "lastUpdated": "2025-11-07",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "noorwachid"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-tsv",
    "name": "Tsv",
    "language": "tsv",
    "package": "github.com/tree-sitter-grammars/tree-sitter-csv",
    "version": "git-f6bf6e3",
    "sourceCommit": "f6bf6e35eb0b95fbadea4bb39cb9709507fcb181",
    "lastUpdated": "2025-11-13",
    "upstreamSemver": "1.2.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "tsv/queries/highlights.scm"
      ],
      "injections": [
        "tsv/queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.2.0. Maintained in tree-sitter-grammars. Grammar path tsv."
  },
  {
    "id": "parser-tsx",
    "name": "TSX",
    "language": "tsx",
    "package": "github.com/tree-sitter/tree-sitter-typescript",
    "version": "git-75b3874",
    "sourceCommit": "75b3874edb2dc714fb1fd77a32013d0f8699989f",
    "lastUpdated": "2025-01-30",
    "upstreamSemver": "0.23.2",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-tsx.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-typescript.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "tsx/queries/highlights.scm"
      ],
      "tags": [
        "tsx/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.23.2. Official tree-sitter repository. Grammar path tsx."
  },
  {
    "id": "parser-turtle",
    "name": "Turtle",
    "language": "turtle",
    "package": "github.com/GordianDziwis/tree-sitter-turtle",
    "version": "git-7f789ea",
    "sourceCommit": "7f789ea7ef765080f71a298fc96b7c957fa24422",
    "lastUpdated": "2024-07-02",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "GordianDziwis"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-twig",
    "name": "Twig",
    "language": "twig",
    "package": "github.com/gbprod/tree-sitter-twig",
    "version": "git-085648e",
    "sourceCommit": "085648e01d1422163a1702a44e72303b4e2a0bd1",
    "lastUpdated": "2024-06-15",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "gbprod"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-typescript",
    "name": "TypeScript",
    "language": "typescript",
    "package": "github.com/tree-sitter/tree-sitter-typescript",
    "version": "git-75b3874",
    "sourceCommit": "75b3874edb2dc714fb1fd77a32013d0f8699989f",
    "lastUpdated": "2025-01-30",
    "upstreamSemver": "0.23.2",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-tsx.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-typescript.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "typescript/queries/highlights.scm"
      ],
      "locals": [
        "typescript/queries/locals.scm"
      ],
      "tags": [
        "typescript/queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, locals, tags queries. Latest release tag 0.23.2. Official tree-sitter repository. Grammar path typescript."
  },
  {
    "id": "parser-typespec",
    "name": "Typespec",
    "language": "typespec",
    "package": "github.com/happenslol/tree-sitter-typespec",
    "version": "git-395bef1",
    "sourceCommit": "395bef1e1eb4dd18365401642beb534e8a244056",
    "lastUpdated": "2026-01-01",
    "upstreamSemver": "0.0.1",
    "abi": 15,
    "owners": [
      "happenslol"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.1."
  },
  {
    "id": "parser-typoscript",
    "name": "TypoScript",
    "language": "typoscript",
    "package": "github.com/Teddytrombone/tree-sitter-typoscript",
    "version": "git-b5d0162",
    "sourceCommit": "b5d0162b328ec52cf300054a8a23d47f84f55cb4",
    "lastUpdated": "2026-03-23",
    "upstreamSemver": "0.1.2",
    "abi": 15,
    "owners": [
      "Teddytrombone"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.2."
  },
  {
    "id": "parser-typst",
    "name": "Typst",
    "language": "typst",
    "package": "github.com/uben0/tree-sitter-typst",
    "version": "git-13863dd",
    "sourceCommit": "13863ddcbaa7b68ee6221cea2e3143415e64aea4",
    "lastUpdated": "2024-04-09",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "uben0"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-udev",
    "name": "Udev",
    "language": "udev",
    "package": "github.com/tree-sitter-grammars/tree-sitter-udev",
    "version": "git-2fcb563",
    "sourceCommit": "2fcb563a4d56a6b8e8c129252325fc6335e4acbf",
    "lastUpdated": "2025-07-18",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections, tags queries. Latest release tag 0.3.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ungrammar",
    "name": "Ungrammar",
    "language": "ungrammar",
    "package": "github.com/tree-sitter-grammars/tree-sitter-ungrammar",
    "version": "git-a7e1046",
    "sourceCommit": "a7e104629cff5a8b7367187610631e8f5eb7c6ea",
    "lastUpdated": "2022-07-12",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-unified-diff",
    "name": "UnifiedDiff",
    "language": "unified-diff",
    "package": "github.com/hsaliak/tree-sitter-unified-diff",
    "version": "git-95ff5ed",
    "sourceCommit": "95ff5ede9d906914b3393260f938d93bd94de2a4",
    "lastUpdated": "2026-03-12",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "hsaliak"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-unison",
    "name": "Unison",
    "language": "unison",
    "package": "github.com/kylegoetz/tree-sitter-unison",
    "version": "git-10365cc",
    "sourceCommit": "10365cc70ab2b2de85ea7ab35cf6b7636c36ce8b",
    "lastUpdated": "2026-02-27",
    "upstreamSemver": "2.1.3",
    "abi": 15,
    "owners": [
      "kylegoetz"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-unison.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 2.1.3."
  },
  {
    "id": "parser-usd",
    "name": "Usd",
    "language": "usd",
    "package": "github.com/ColinKennedy/tree-sitter-usd",
    "version": "git-4e0875f",
    "sourceCommit": "4e0875f724d94d0c2ff36f9b8cb0b12f8b20d216",
    "lastUpdated": "2024-04-29",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "ColinKennedy"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-jummit-uxntal-uxntal",
    "name": "Uxntal",
    "language": "uxntal",
    "package": "github.com/Jummit/tree-sitter-uxntal",
    "version": "git-d684060",
    "sourceCommit": "d68406066648cd6db4c6a2f11ec305af02079884",
    "lastUpdated": "2023-11-01",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Jummit"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-uxntal-uxntal",
    "name": "Uxntal",
    "language": "uxntal",
    "package": "github.com/tree-sitter-grammars/tree-sitter-uxntal",
    "version": "git-ad9b638",
    "sourceCommit": "ad9b638b914095320de85d59c49ab271603af048",
    "lastUpdated": "2024-05-05",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-v",
    "name": "V",
    "language": "v",
    "package": "github.com/vlang/v-analyzer",
    "version": "git-59a8889",
    "sourceCommit": "59a8889d84a293d7c0366d14c8dbb0eec24fe889",
    "lastUpdated": "2025-04-25",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "vlang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path tree_sitter_v."
  },
  {
    "id": "parser-vala",
    "name": "Vala",
    "language": "vala",
    "package": "github.com/vala-lang/tree-sitter-vala",
    "version": "git-c9eea93",
    "sourceCommit": "c9eea93ba2ec4ec1485392db11945819779745b3",
    "lastUpdated": "2022-04-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "vala-lang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-varlink",
    "name": "Varlink",
    "language": "varlink",
    "package": "github.com/bachorp/tree-sitter-varlink",
    "version": "git-c2aab4b",
    "sourceCommit": "c2aab4b36b371b0e9563e15d2d8cf9be67fbe92a",
    "lastUpdated": "2026-04-05",
    "upstreamSemver": "0.6.1",
    "abi": 15,
    "owners": [
      "bachorp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-varlink.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.6.1."
  },
  {
    "id": "parser-vcard",
    "name": "VCard",
    "language": "vcard",
    "package": "github.com/TitouanReal/tree-sitter-vcard",
    "version": "git-8c07771",
    "sourceCommit": "8c0777114ca3dea2872809d75a629eac7013a413",
    "lastUpdated": "2025-11-22",
    "upstreamSemver": "0.3.0",
    "abi": 15,
    "owners": [
      "TitouanReal"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.3.0."
  },
  {
    "id": "parser-vento",
    "name": "Vento",
    "language": "vento",
    "package": "github.com/ventojs/tree-sitter-vento",
    "version": "git-4569bc1",
    "sourceCommit": "4569bc1fb81f050ca4ef3ceefdd31cfeb35c4f0a",
    "lastUpdated": "2026-02-23",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "ventojs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-verilog",
    "name": "Verilog",
    "language": "verilog",
    "package": "github.com/tree-sitter/tree-sitter-verilog",
    "version": "git-227d277",
    "sourceCommit": "227d277b6a1a5e2bf818d6206935722a7503de08",
    "lastUpdated": "2024-11-11",
    "upstreamSemver": "1.0.3",
    "abi": 14,
    "owners": [
      "tree-sitter"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-verilog.wasm"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 1.0.3. Official tree-sitter repository."
  },
  {
    "id": "parser-vhdl",
    "name": "Vhdl",
    "language": "vhdl",
    "package": "github.com/jpt13653903/tree-sitter-vhdl",
    "version": "git-9df4e7a",
    "sourceCommit": "9df4e7a9543699e10e08aa1232a9ec8076b948cf",
    "lastUpdated": "2026-04-05",
    "upstreamSemver": "1.5.0",
    "abi": 15,
    "owners": [
      "jpt13653903"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-vhdl.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/Neovim/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 1.5.0."
  },
  {
    "id": "parser-vhs",
    "name": "Vhs",
    "language": "vhs",
    "package": "github.com/charmbracelet/tree-sitter-vhs",
    "version": "git-9534865",
    "sourceCommit": "9534865e614c95eb9418e5e73f061c32fa4d9540",
    "lastUpdated": "2023-12-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "charmbracelet"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-vim",
    "name": "Vim",
    "language": "vim",
    "package": "github.com/tree-sitter-grammars/tree-sitter-vim",
    "version": "git-3092fcd",
    "sourceCommit": "3092fcd99eb87bbd0fc434aa03650ba58bd5b43b",
    "lastUpdated": "2026-02-26",
    "upstreamSemver": "0.8.1",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-vim.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/vim/highlights.scm"
      ],
      "injections": [
        "queries/vim/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 0.8.1. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-vimdoc",
    "name": "Vimdoc",
    "language": "vimdoc",
    "package": "github.com/neovim/tree-sitter-vimdoc",
    "version": "git-f061895",
    "sourceCommit": "f061895a0eff1d5b90e4fb60d21d87be3267031a",
    "lastUpdated": "2025-12-15",
    "upstreamSemver": "4.1.0",
    "abi": 15,
    "owners": [
      "neovim"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/vimdoc/highlights.scm"
      ],
      "injections": [
        "queries/vimdoc/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 4.1.0."
  },
  {
    "id": "parser-vrl",
    "name": "Vrl",
    "language": "vrl",
    "package": "github.com/belltoy/tree-sitter-vrl",
    "version": "git-274b3ce",
    "sourceCommit": "274b3ce63f72aa8ffea18e7fc280d3062d28f0ba",
    "lastUpdated": "2024-07-30",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "belltoy"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-ikatyang-vue-vue",
    "name": "Vue",
    "language": "vue",
    "package": "github.com/ikatyang/tree-sitter-vue",
    "version": "git-91fe275",
    "sourceCommit": "91fe2754796cd8fba5f229505a23fa08f3546c06",
    "lastUpdated": "2021-04-04",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "ikatyang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-vue-vue",
    "name": "Vue",
    "language": "vue",
    "package": "github.com/tree-sitter-grammars/tree-sitter-vue",
    "version": "git-ce8011a",
    "sourceCommit": "ce8011a414fdf8091f4e4071752efc376f4afb08",
    "lastUpdated": "2026-01-24",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-wast",
    "name": "Wast",
    "language": "wast",
    "package": "github.com/wasm-lsp/tree-sitter-wasm",
    "version": "git-2ca28a9",
    "sourceCommit": "2ca28a9f9d709847bf7a3de0942a84e912f59088",
    "lastUpdated": "2022-05-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "wasm-lsp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path wast."
  },
  {
    "id": "parser-g-plane-wat-wat",
    "name": "Wat",
    "language": "wat",
    "package": "github.com/g-plane/tree-sitter-wat",
    "version": "git-e376947",
    "sourceCommit": "e3769473b2d90643d8af500b5cfc2f25a674888a",
    "lastUpdated": "2026-02-28",
    "upstreamSemver": "0.1.0",
    "abi": 15,
    "owners": [
      "g-plane"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "tags"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "tags": [
        "queries/tags.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, tags queries. Latest release tag 0.1.0."
  },
  {
    "id": "parser-wasm-lsp-wasm-wat",
    "name": "Wat",
    "language": "wat",
    "package": "github.com/wasm-lsp/tree-sitter-wasm",
    "version": "git-2ca28a9",
    "sourceCommit": "2ca28a9f9d709847bf7a3de0942a84e912f59088",
    "lastUpdated": "2022-05-17",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "wasm-lsp"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected. Grammar path wat."
  },
  {
    "id": "parser-werk",
    "name": "Werk",
    "language": "werk",
    "package": "github.com/little-bonsai/tree-sitter-werk",
    "version": "git-92b0f7f",
    "sourceCommit": "92b0f7fe98465c4c435794a58e961306193d1c1e",
    "lastUpdated": "2025-03-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "little-bonsai"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-wesl",
    "name": "Wesl",
    "language": "wesl",
    "package": "github.com/wgsl-tooling-wg/tree-sitter-wesl",
    "version": "git-94ee612",
    "sourceCommit": "94ee6122680ef8ce2173853ca7c99f7aaeeda8ce",
    "lastUpdated": "2025-02-14",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "wgsl-tooling-wg"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-gpuweb-wgsl-wgsl",
    "name": "Wgsl",
    "language": "wgsl",
    "package": "github.com/gpuweb/tree-sitter-wgsl",
    "version": "git-52e3c62",
    "sourceCommit": "52e3c620a9c316cc8c1d504dd1908eb8cebe255b",
    "lastUpdated": "2025-11-27",
    "upstreamSemver": "0.0.9",
    "abi": null,
    "owners": [
      "gpuweb"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.9."
  },
  {
    "id": "parser-szebniok-wgsl-wgsl",
    "name": "Wgsl",
    "language": "wgsl",
    "package": "github.com/szebniok/tree-sitter-wgsl",
    "version": "git-272e89e",
    "sourceCommit": "272e89ef2aeac74178edb9db4a83c1ffef80a463",
    "lastUpdated": "2022-07-30",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "szebniok"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-wgsl-bevy",
    "name": "WGSLBevy",
    "language": "wgsl_bevy",
    "package": "github.com/tree-sitter-grammars/tree-sitter-wgsl-bevy",
    "version": "git-d9306a7",
    "sourceCommit": "d9306a798ede627001a8e5752f775858c8edd7e4",
    "lastUpdated": "2025-09-18",
    "upstreamSemver": "0.1.4",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.4. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-wikitext",
    "name": "Wikitext",
    "language": "wikitext",
    "package": "github.com/santhoshtr/tree-sitter-wikitext",
    "version": "git-444214b",
    "sourceCommit": "444214b31695e9dd4d32fb06247397fb8778a9d2",
    "lastUpdated": "2025-08-21",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "santhoshtr"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-wing",
    "name": "Wing",
    "language": "wing",
    "package": "github.com/winglang/tree-sitter-wing",
    "version": "git-76e0c25",
    "sourceCommit": "76e0c25844a66ebc6e866d690fcc5f4e90698947",
    "lastUpdated": "2024-09-03",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "winglang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-bytecodealliance-wit-wit",
    "name": "Wit",
    "language": "wit",
    "package": "github.com/bytecodealliance/tree-sitter-wit",
    "version": "git-ae17db1",
    "sourceCommit": "ae17db1678681a8e75c1ac48107d6efb95343cb3",
    "lastUpdated": "2026-03-04",
    "upstreamSemver": "1.3.0",
    "abi": 15,
    "owners": [
      "bytecodealliance"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-wit.wasm"
      }
    ],
    "bundledQueryKinds": [
      "folds",
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "folds": [
        "queries/folds.scm"
      ],
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. folds, highlights, injections queries. Latest release tag 1.3.0."
  },
  {
    "id": "parser-hh9527-wit-wit",
    "name": "Wit",
    "language": "wit",
    "package": "github.com/hh9527/tree-sitter-wit",
    "version": "git-c917790",
    "sourceCommit": "c917790ab9aec50c5fd664cbfad8dd45110cfff3",
    "lastUpdated": "2022-10-31",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "hh9527"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-wren",
    "name": "Wren",
    "language": "wren",
    "package": "git.sr.ht/~jummit/tree-sitter-wren",
    "version": "git-6748694",
    "sourceCommit": "6748694be32f11e7ec6b5faeb1b48ca6156d4e06",
    "lastUpdated": null,
    "upstreamSemver": null,
    "abi": null,
    "owners": [
      "~jummit"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": false,
      "wasm": false
    },
    "artifacts": [],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-wxml",
    "name": "Wxml",
    "language": "wxml",
    "package": "github.com/BlockLune/tree-sitter-wxml",
    "version": "git-7b821c7",
    "sourceCommit": "7b821c748dc410332f59496c0dea2632168c4e5a",
    "lastUpdated": "2025-08-21",
    "upstreamSemver": null,
    "abi": 15,
    "owners": [
      "BlockLune"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-xcompose",
    "name": "XCompose",
    "language": "xcompose",
    "package": "github.com/tree-sitter-grammars/tree-sitter-xcompose",
    "version": "git-a51d636",
    "sourceCommit": "a51d6366f041dbefec4da39a7eb3168a9b1cbc0e",
    "lastUpdated": "2025-07-17",
    "upstreamSemver": "0.4.0",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-xcompose.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.4.0. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-xit",
    "name": "Xit",
    "language": "xit",
    "package": "github.com/synaptiko/tree-sitter-xit",
    "version": "git-7d79024",
    "sourceCommit": "7d7902456061bc2ad21c64c44054f67b5515734c",
    "lastUpdated": "2022-04-18",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "synaptiko"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-renjisann-xml-xml",
    "name": "Xml",
    "language": "xml",
    "package": "github.com/RenjiSann/tree-sitter-xml",
    "version": "git-48a7c2b",
    "sourceCommit": "48a7c2b6fb9d515577e115e6788937e837815651",
    "lastUpdated": "2023-01-17",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "RenjiSann"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-panicinc-xml-xml",
    "name": "XML",
    "language": "xml",
    "package": "github.com/panicinc/tree-sitter-xml",
    "version": "git-53dfc22",
    "sourceCommit": "53dfc22f454c18be9f1852b473044346480666be",
    "lastUpdated": "2025-04-22",
    "upstreamSemver": "0.1.0",
    "abi": 14,
    "owners": [
      "panicinc"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.1.0."
  },
  {
    "id": "parser-tree-sitter-grammars-xml-xml",
    "name": "XML",
    "language": "xml",
    "package": "github.com/tree-sitter-grammars/tree-sitter-xml",
    "version": "git-5000ae8",
    "sourceCommit": "5000ae8f22d11fbe93939b05c1e37cf21117162d",
    "lastUpdated": "2026-01-21",
    "upstreamSemver": "0.7.0",
    "abi": 14,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-dtd.wasm"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-xml.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "xml/queries/xml/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.7.0. Maintained in tree-sitter-grammars. Grammar path xml."
  },
  {
    "id": "parser-xresources",
    "name": "Xresources",
    "language": "xresources",
    "package": "github.com/ValdezFOmar/tree-sitter-xresources",
    "version": "git-586e9a5",
    "sourceCommit": "586e9a578f473bf39b17d302d7f33f1777652967",
    "lastUpdated": "2026-04-02",
    "upstreamSemver": "1.0.0",
    "abi": 15,
    "owners": [
      "ValdezFOmar"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-xresources.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/xresources/highlights.scm"
      ],
      "injections": [
        "queries/xresources/injections.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.0.0."
  },
  {
    "id": "parser-xtc",
    "name": "Xtc",
    "language": "xtc",
    "package": "github.com/Alexis-Lapierre/tree-sitter-xtc",
    "version": "git-7bc11b7",
    "sourceCommit": "7bc11b736250c45e25cfb0215db2f8393779957e",
    "lastUpdated": "2024-04-15",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Alexis-Lapierre"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-ikatyang-yaml-yaml",
    "name": "Yaml",
    "language": "yaml",
    "package": "github.com/ikatyang/tree-sitter-yaml",
    "version": "git-0e36bed",
    "sourceCommit": "0e36bed171768908f331ff7dff9d956bae016efb",
    "lastUpdated": "2021-05-11",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "ikatyang"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-tree-sitter-grammars-yaml-yaml",
    "name": "YAML",
    "language": "yaml",
    "package": "github.com/tree-sitter-grammars/tree-sitter-yaml",
    "version": "git-4463985",
    "sourceCommit": "4463985dfccc640f3d6991e3396a2047610cf5f8",
    "lastUpdated": "2026-01-25",
    "upstreamSemver": "0.7.2",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-yaml.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ]
    },
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. highlights queries. Latest release tag 0.7.2. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-yang",
    "name": "Yang",
    "language": "yang",
    "package": "github.com/Hubro/tree-sitter-yang",
    "version": "git-2c0e6be",
    "sourceCommit": "2c0e6be8dd4dcb961c345fa35c309ad4f5bd3502",
    "lastUpdated": "2022-11-21",
    "upstreamSemver": null,
    "abi": 13,
    "owners": [
      "Hubro"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-yara",
    "name": "Yara",
    "language": "yara",
    "package": "github.com/egibs/tree-sitter-yara",
    "version": "git-eb3ede2",
    "sourceCommit": "eb3ede203275c38000177f72ec0f9965312806ef",
    "lastUpdated": "2024-12-12",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "egibs"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in Helix. No bundled query files detected."
  },
  {
    "id": "parser-yuck",
    "name": "Yuck",
    "language": "yuck",
    "package": "github.com/tree-sitter-grammars/tree-sitter-yuck",
    "version": "git-6c60112",
    "sourceCommit": "6c60112b3b3e739fb1ca4a8ea4bea2b6ffe11318",
    "lastUpdated": "2026-04-03",
    "upstreamSemver": "0.0.2",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.0.2. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-zathurarc",
    "name": "Zathurarc",
    "language": "zathurarc",
    "package": "github.com/Freed-Wu/tree-sitter-zathurarc",
    "version": "git-0554b4a",
    "sourceCommit": "0554b4a5d313244b7fc000cbb41c04afae4f4e31",
    "lastUpdated": "2024-08-04",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "Freed-Wu"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected."
  },
  {
    "id": "parser-zig",
    "name": "Zig",
    "language": "zig",
    "package": "github.com/tree-sitter-grammars/tree-sitter-zig",
    "version": "git-6479aa1",
    "sourceCommit": "6479aa13f32f701c383083d8b28360ebd682fb7d",
    "lastUpdated": "2025-09-10",
    "upstreamSemver": "1.1.2",
    "abi": 15,
    "owners": [
      "tree-sitter-grammars"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": true
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      },
      {
        "kind": "release-asset",
        "format": "wasm",
        "name": "tree-sitter-zig.wasm"
      }
    ],
    "bundledQueryKinds": [
      "highlights",
      "injections"
    ],
    "bundledQueries": {
      "highlights": [
        "queries/highlights.scm"
      ],
      "injections": [
        "queries/injections.scm"
      ]
    },
    "bundledQueryEditors": [
      "neovim"
    ],
    "summary": "Real parser repo snapshot. highlights, injections queries. Latest release tag 1.1.2. Maintained in tree-sitter-grammars."
  },
  {
    "id": "parser-ziggy",
    "name": "Ziggy",
    "language": "ziggy",
    "package": "github.com/kristoff-it/ziggy",
    "version": "git-4353b20",
    "sourceCommit": "4353b20ef2ac750e35c6d68e4eb2a07c2d7cf901",
    "lastUpdated": "2025-08-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "kristoff-it"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path tree-sitter-ziggy."
  },
  {
    "id": "parser-ziggy-schema",
    "name": "Ziggy Schema",
    "language": "ziggy_schema",
    "package": "github.com/kristoff-it/ziggy",
    "version": "git-4353b20",
    "sourceCommit": "4353b20ef2ac750e35c6d68e4eb2a07c2d7cf901",
    "lastUpdated": "2025-08-19",
    "upstreamSemver": null,
    "abi": 14,
    "owners": [
      "kristoff-it"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": false,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Pinned in nvim-treesitter. No bundled query files detected. Grammar path tree-sitter-ziggy-schema."
  },
  {
    "id": "parser-zsh",
    "name": "Zsh",
    "language": "zsh",
    "package": "github.com/georgeharker/tree-sitter-zsh",
    "version": "git-a1741ee",
    "sourceCommit": "a1741eec390116d5dd95745c58f9ec8e958fa98c",
    "lastUpdated": "2026-04-08",
    "upstreamSemver": "0.60.0",
    "abi": 15,
    "owners": [
      "georgeharker"
    ],
    "capabilities": {
      "buildFromSource": true,
      "customScanner": true,
      "sourceArchive": true,
      "wasm": false
    },
    "artifacts": [
      {
        "kind": "source-archive",
        "format": "tar.gz"
      }
    ],
    "bundledQueryKinds": [],
    "bundledQueries": {},
    "bundledQueryEditors": [],
    "summary": "Real parser repo snapshot. No bundled query files detected. Latest release tag 0.60.0."
  }
];
