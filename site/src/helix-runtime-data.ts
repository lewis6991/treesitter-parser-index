import type { QueryPackLanguage } from './types.js';

export const HELIX_RUNTIME_LANGUAGE_DETAILS: QueryPackLanguage[] = [
  {
    "language": "_gjs",
    "queryKinds": [
      "highlights",
      "injections"
    ]
  },
  {
    "language": "_javascript",
    "queryKinds": [
      "highlights",
      "locals",
      "tags"
    ]
  },
  {
    "language": "_jsx",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ]
  },
  {
    "language": "_typescript",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "tags",
      "textobjects"
    ]
  },
  {
    "language": "ada",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/briot/tree-sitter-ada@git-ba0894e"
    ]
  },
  {
    "language": "adl",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/adl-lang/tree-sitter-adl@git-2787d04"
    ]
  },
  {
    "language": "agda",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-agda@git-e8d47a6"
    ]
  },
  {
    "language": "alloy",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/mattsre/tree-sitter-alloy@git-58d462b"
    ]
  },
  {
    "language": "amber",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/amber-lang/tree-sitter-amber@git-107c6d4"
    ]
  },
  {
    "language": "astro",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/virchau13/tree-sitter-astro@git-947e930"
    ]
  },
  {
    "language": "awk",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Beaglefoot/tree-sitter-awk@git-34bbdc7"
    ]
  },
  {
    "language": "bash",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-bash@git-a06c2e4"
    ]
  },
  {
    "language": "basic",
    "queryKinds": [
      "highlights",
      "indents",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Ra77a3l3-jar/tree-sitter-basic@git-a98449c"
    ]
  },
  {
    "language": "bass",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/vito/tree-sitter-bass@git-501133e"
    ]
  },
  {
    "language": "batch",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/wharflab/tree-sitter-batch@git-5fc5f54"
    ]
  },
  {
    "language": "beancount",
    "queryKinds": [
      "folds",
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/polarmutex/tree-sitter-beancount@git-429cff8"
    ]
  },
  {
    "language": "bibtex",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/latex-lsp/tree-sitter-bibtex@git-8d04ed2"
    ]
  },
  {
    "language": "bicep",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-bicep@git-bff5988"
    ]
  },
  {
    "language": "bitbake",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-bitbake@git-10bacac"
    ]
  },
  {
    "language": "blade",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/EmranMR/tree-sitter-blade@git-5dbdcb0"
    ]
  },
  {
    "language": "blueprint",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "gitlab.com/gabmus/tree-sitter-blueprint@git-355ef84"
    ]
  },
  {
    "language": "c",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-c@git-b780e47"
    ]
  },
  {
    "language": "c-sharp",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-c-sharp@git-cac6d5f"
    ]
  },
  {
    "language": "c3",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/c3lang/tree-sitter-c3@git-15d3502"
    ]
  },
  {
    "language": "caddyfile",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/caddyserver/tree-sitter-caddyfile@git-1543743"
    ]
  },
  {
    "language": "cairo",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/starkware-libs/tree-sitter-cairo@git-4c6a256"
    ]
  },
  {
    "language": "capnp",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-capnp@git-7b0883c"
    ]
  },
  {
    "language": "cel",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/bufbuild/tree-sitter-cel@git-9f2b65d"
    ]
  },
  {
    "language": "chuck",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tymbalodeon/tree-sitter-chuck@git-68fb7bd"
    ]
  },
  {
    "language": "circom",
    "queryKinds": [
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/Decurity/tree-sitter-circom@git-0215052"
    ]
  },
  {
    "language": "clarity",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/xlittlerag/tree-sitter-clarity@git-1436da3"
    ]
  },
  {
    "language": "clojure",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/sogaiu/tree-sitter-clojure@git-e43eff8"
    ]
  },
  {
    "language": "cmake",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/uyha/tree-sitter-cmake@git-c7b2a71"
    ]
  },
  {
    "language": "codeql",
    "queryKinds": [
      "highlights",
      "textobjects"
    ],
    "parserLanguage": "ql",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-ql@git-1fd627a"
    ]
  },
  {
    "language": "comment",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/stsewd/tree-sitter-comment@git-66272d2"
    ]
  },
  {
    "language": "common-lisp",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "commonlisp",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-commonlisp@git-3232350"
    ]
  },
  {
    "language": "concerto",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/accordproject/concerto-tree-sitter@git-920ba23"
    ]
  },
  {
    "language": "cpon",
    "queryKinds": [
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/fvacek/tree-sitter-cpon@git-0d01fcd"
    ]
  },
  {
    "language": "cpp",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-cpp@git-8b5b49e"
    ]
  },
  {
    "language": "cross-config",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "toml",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-toml@git-64b5683"
    ]
  },
  {
    "language": "crystal",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/crystal-lang-tools/tree-sitter-crystal@git-50ca9e6"
    ]
  },
  {
    "language": "css",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-css@git-dda5cfc"
    ]
  },
  {
    "language": "csv",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Kalmaegi/rainbow-csv-tree-sitter@git-d3dbf91"
    ]
  },
  {
    "language": "cue",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/eonpatapon/tree-sitter-cue@git-8a5f273"
    ]
  },
  {
    "language": "cylc",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/elliotfontaine/tree-sitter-cylc@git-6d1d811"
    ]
  },
  {
    "language": "cython",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/b0o/tree-sitter-cython@git-62f44f5"
    ]
  },
  {
    "language": "d",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/gdamore/tree-sitter-d@git-8bcb13d"
    ]
  },
  {
    "language": "dart",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/UserNobody14/tree-sitter-dart@git-a9bdfa3"
    ]
  },
  {
    "language": "dbml",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/dynamotn/tree-sitter-dbml@git-2e2fa56"
    ]
  },
  {
    "language": "debian",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "gitlab.com/MggMuggins/tree-sitter-debian@git-9b3f4b7"
    ]
  },
  {
    "language": "devicetree",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/joelspadin/tree-sitter-devicetree@git-e78bf56"
    ]
  },
  {
    "language": "dhall",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/jbellerb/tree-sitter-dhall@git-affb6ee"
    ]
  },
  {
    "language": "diff",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-diff@git-2520c3f"
    ]
  },
  {
    "language": "djot",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/treeman/tree-sitter-djot@git-759a618"
    ]
  },
  {
    "language": "docker-bake",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "hcl",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-hcl@git-64ad627"
    ]
  },
  {
    "language": "docker-compose",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "yaml",
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "dockerfile",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/camdencheek/tree-sitter-dockerfile@git-971acdd"
    ]
  },
  {
    "language": "dot",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/rydesun/tree-sitter-dot@git-9172307"
    ]
  },
  {
    "language": "doxyfile",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tingerrr/tree-sitter-doxyfile@git-18e44c6"
    ]
  },
  {
    "language": "dtd",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/KMikeeU/tree-sitter-dtd@git-6116bec"
    ]
  },
  {
    "language": "dune",
    "queryKinds": [
      "highlights"
    ],
    "parserLanguage": "scheme",
    "testedParserRefs": [
      "github.com/6cdh/tree-sitter-scheme@git-c6cb7c7"
    ]
  },
  {
    "language": "dunstrc",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/rotmh/tree-sitter-dunstrc@git-9cb9d5c"
    ]
  },
  {
    "language": "earthfile",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/glehmann/tree-sitter-earthfile@git-dbfb970"
    ]
  },
  {
    "language": "ebnf",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/RubixDev/ebnf@git-8e635b0"
    ]
  },
  {
    "language": "ecma",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "textobjects"
    ]
  },
  {
    "language": "edoc",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/the-mikedavis/tree-sitter-edoc@git-74774af"
    ]
  },
  {
    "language": "eex",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/connorlay/tree-sitter-eex@git-f742f2f"
    ]
  },
  {
    "language": "eiffel",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/imustafin/tree-sitter-eiffel@git-d934fb4"
    ]
  },
  {
    "language": "ejs",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "embedded-template",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-embedded-template@git-5bce9d5"
    ]
  },
  {
    "language": "elisp",
    "queryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/Wilfred/tree-sitter-elisp@git-29b4e49"
    ]
  },
  {
    "language": "elixir",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/elixir-lang/tree-sitter-elixir@git-7937d3b"
    ]
  },
  {
    "language": "elm",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/elm-tooling/tree-sitter-elm@git-6d9511c"
    ]
  },
  {
    "language": "elvish",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/elves/tree-sitter-elvish@git-e50787c"
    ]
  },
  {
    "language": "embedded-perl",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/jobindex-open/tree-sitter-embedded-perl@git-5557a53"
    ]
  },
  {
    "language": "env",
    "queryKinds": [
      "highlights",
      "textobjects"
    ],
    "parserLanguage": "bash",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-bash@git-a06c2e4"
    ]
  },
  {
    "language": "erb",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "embedded-template",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-embedded-template@git-5bce9d5"
    ]
  },
  {
    "language": "erlang",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/the-mikedavis/tree-sitter-erlang@git-d85b18e"
    ]
  },
  {
    "language": "esdl",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/hongquan/tree-sitter-esdl@git-c824fe2"
    ]
  },
  {
    "language": "fennel",
    "queryKinds": [
      "highlights",
      "locals",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/alexmozaidze/tree-sitter-fennel@git-3f0f6b2"
    ]
  },
  {
    "language": "fga",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/matoous/tree-sitter-fga@git-ce72d1c"
    ]
  },
  {
    "language": "fidl",
    "queryKinds": [
      "folds",
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/google/tree-sitter-fidl@git-0a8910f"
    ]
  },
  {
    "language": "fish",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/ram02z/tree-sitter-fish@git-f435b0b"
    ]
  },
  {
    "language": "flatbuffers",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/yuanchenxi95/tree-sitter-flatbuffers@git-95e6f9e"
    ]
  },
  {
    "language": "forth",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/AlexanderBrevig/tree-sitter-forth@git-360ef13"
    ]
  },
  {
    "language": "fortran",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/stadelmanma/tree-sitter-fortran@git-2880b7a"
    ]
  },
  {
    "language": "freebasic",
    "queryKinds": [
      "highlights",
      "indents",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Ra77a3l3-jar/tree-sitter-freebasic@git-dbf696a"
    ]
  },
  {
    "language": "fsharp",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/ionide/tree-sitter-fsharp@git-cfc1245"
    ]
  },
  {
    "language": "gas",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/sirius94/tree-sitter-gas@git-5d6c0a0"
    ]
  },
  {
    "language": "gdscript",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/PrestonKnopp/tree-sitter-gdscript@git-1f1e782"
    ]
  },
  {
    "language": "gemini",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "git.sr.ht/~nbsp/tree-sitter-gemini@git-3cc5e4b"
    ]
  },
  {
    "language": "gherkin",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/SamyAB/tree-sitter-gherkin@git-43873ee"
    ]
  },
  {
    "language": "ghostty",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/bezhermoso/tree-sitter-ghostty@git-4a0fd2a"
    ]
  },
  {
    "language": "git-attributes",
    "queryKinds": [
      "highlights"
    ],
    "parserLanguage": "gitattributes",
    "testedParserRefs": [
      "github.com/mtoohey31/tree-sitter-gitattributes@git-3dd5080"
    ]
  },
  {
    "language": "git-cliff-config",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "toml",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-toml@git-64b5683"
    ]
  },
  {
    "language": "git-commit",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "gitcommit",
    "testedParserRefs": [
      "github.com/gbprod/tree-sitter-gitcommit@git-49715a9"
    ]
  },
  {
    "language": "git-config",
    "queryKinds": [
      "highlights",
      "injections",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/the-mikedavis/tree-sitter-git-config@git-0fbc9f9"
    ]
  },
  {
    "language": "git-ignore",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "gitignore",
    "testedParserRefs": [
      "github.com/shunsambongi/tree-sitter-gitignore@git-f4685bf"
    ]
  },
  {
    "language": "git-notes",
    "queryKinds": [
      "highlights"
    ],
    "parserLanguage": "gitcommit",
    "testedParserRefs": [
      "github.com/gbprod/tree-sitter-gitcommit@git-49715a9"
    ]
  },
  {
    "language": "git-rebase",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/the-mikedavis/tree-sitter-git-rebase@git-32686d6"
    ]
  },
  {
    "language": "github-action",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "yaml",
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "gitlab-ci",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "yaml",
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "gjs",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "glimmer-javascript",
    "testedParserRefs": [
      "github.com/ember-tooling/tree-sitter-glimmer-javascript@git-d9cf7a2"
    ]
  },
  {
    "language": "gleam",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/gleam-lang/tree-sitter-gleam@git-c610c28"
    ]
  },
  {
    "language": "glimmer",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/ember-tooling/tree-sitter-glimmer@git-88af855"
    ]
  },
  {
    "language": "glsl",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-glsl@git-24a6c8e"
    ]
  },
  {
    "language": "gn",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/willcassella/tree-sitter-gn@git-fbaa7b3"
    ]
  },
  {
    "language": "gnuplot",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "codeberg.org/maribu/tree-sitter-gnuplot@git-21a3a39"
    ]
  },
  {
    "language": "go",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-go@git-2346a3a"
    ]
  },
  {
    "language": "go-format-string",
    "queryKinds": [
      "highlights",
      "rainbows"
    ],
    "testedParserRefs": [
      "codeberg.org/kpbaks/tree-sitter-go-format-string@git-06587ea"
    ]
  },
  {
    "language": "godot-resource",
    "queryKinds": [
      "highlights",
      "injections",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/PrestonKnopp/tree-sitter-godot-resource@git-2ffb90d"
    ]
  },
  {
    "language": "gomod",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/camdencheek/tree-sitter-go-mod@git-6efb596"
    ]
  },
  {
    "language": "gotmpl",
    "queryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/ngalaiko/tree-sitter-go-template@git-aa71f63"
    ]
  },
  {
    "language": "gowork",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/omertuc/tree-sitter-go-work@git-6dd9dd7"
    ]
  },
  {
    "language": "gpr",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/brownts/tree-sitter-gpr@git-cea857d"
    ]
  },
  {
    "language": "graphql",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/bkegley/tree-sitter-graphql@git-5e66e96"
    ]
  },
  {
    "language": "gren",
    "queryKinds": [
      "highlights",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/gren-lang/tree-sitter-gren@git-76554f4"
    ]
  },
  {
    "language": "groovy",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/murtaza64/tree-sitter-groovy@git-235009a"
    ]
  },
  {
    "language": "gts",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "glimmer-typescript",
    "testedParserRefs": [
      "github.com/ember-tooling/tree-sitter-glimmer-typescript@git-12d9894"
    ]
  },
  {
    "language": "hare",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "git.sr.ht/~ecs/tree-sitter-hare@git-07035a2"
    ]
  },
  {
    "language": "haskell",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-haskell@git-0975ef7"
    ]
  },
  {
    "language": "haskell-literate",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/LaurentRDC/tree-sitter-haskell-literate@git-8ad7bd1"
    ]
  },
  {
    "language": "haskell-persistent",
    "queryKinds": [
      "folds",
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/MercuryTechnologies/tree-sitter-haskell-persistent@git-58a6ccf"
    ]
  },
  {
    "language": "haxe",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/vantreeseba/tree-sitter-haxe@git-f2a2394"
    ]
  },
  {
    "language": "hcl",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-hcl@git-64ad627"
    ]
  },
  {
    "language": "hdl",
    "queryKinds": [
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/quantonganh/tree-sitter-hdl@git-2199fdf"
    ]
  },
  {
    "language": "heex",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/phoenixframework/tree-sitter-heex@git-f6b83f3"
    ]
  },
  {
    "language": "helm",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "gotmpl",
    "testedParserRefs": [
      "github.com/ngalaiko/tree-sitter-go-template@git-aa71f63"
    ]
  },
  {
    "language": "hocon",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/antosha417/tree-sitter-hocon@git-c390f10"
    ]
  },
  {
    "language": "hoon",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/urbit-pilled/tree-sitter-hoon@git-1545137"
    ]
  },
  {
    "language": "hosts",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/ath3/tree-sitter-hosts@git-301b937"
    ]
  },
  {
    "language": "html",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-html@git-73a3947"
    ]
  },
  {
    "language": "htmldjango",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/interdependence/tree-sitter-htmldjango@git-a103188"
    ]
  },
  {
    "language": "hurl",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/pfeiferj/tree-sitter-hurl@git-597efbd"
    ]
  },
  {
    "language": "hy",
    "queryKinds": [
      "highlights"
    ],
    "parserLanguage": "scheme",
    "testedParserRefs": [
      "github.com/6cdh/tree-sitter-scheme@git-c6cb7c7"
    ]
  },
  {
    "language": "hyprlang",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-hyprlang@git-27af9b7"
    ]
  },
  {
    "language": "iex",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/elixir-lang/tree-sitter-iex@git-39f20bb"
    ]
  },
  {
    "language": "ini",
    "queryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/justinmk/tree-sitter-ini@git-e4018b5"
    ]
  },
  {
    "language": "ink",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/wldmr/tree-sitter-ink@git-632072b"
    ]
  },
  {
    "language": "inko",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/inko-lang/tree-sitter-inko@git-f58a87a"
    ]
  },
  {
    "language": "janet",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows"
    ],
    "parserLanguage": "janet-simple",
    "testedParserRefs": [
      "github.com/sogaiu/tree-sitter-janet-simple@git-3c1bdcf"
    ]
  },
  {
    "language": "java",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-java@git-e10607b"
    ]
  },
  {
    "language": "javascript",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-javascript@git-58404d8"
    ]
  },
  {
    "language": "jinja",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "jinja2",
    "testedParserRefs": [
      "github.com/varpeti/tree-sitter-jinja2@git-a533cd3"
    ]
  },
  {
    "language": "jjconfig",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "toml",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-toml@git-64b5683"
    ]
  },
  {
    "language": "jjdescription",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/kareigu/tree-sitter-jjdescription@git-1613b8c"
    ]
  },
  {
    "language": "jjrevset",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/bryceberger/tree-sitter-jjrevset@git-d9af239"
    ]
  },
  {
    "language": "jjtemplate",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/bryceberger/tree-sitter-jjtemplate@git-4313eda"
    ]
  },
  {
    "language": "jq",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/flurie/tree-sitter-jq@git-13990f5"
    ]
  },
  {
    "language": "jsdoc",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-jsdoc@git-658d18d"
    ]
  },
  {
    "language": "json",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-json@git-001c28d"
    ]
  },
  {
    "language": "json-ld",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "json",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-json@git-001c28d"
    ]
  },
  {
    "language": "json5",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Joakker/tree-sitter-json5@git-248b856"
    ]
  },
  {
    "language": "jsonc",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "json",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-json@git-001c28d"
    ]
  },
  {
    "language": "jsonnet",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/sourcegraph/tree-sitter-jsonnet@git-ddd075f"
    ]
  },
  {
    "language": "jsx",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "javascript",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-javascript@git-58404d8"
    ]
  },
  {
    "language": "julia",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-julia@git-e0f9dcd"
    ]
  },
  {
    "language": "just",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/poliorcetics/tree-sitter-just@git-00859ee"
    ]
  },
  {
    "language": "kcl",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/KittyCAD/tree-sitter-kcl@git-8905e0b"
    ]
  },
  {
    "language": "kconfig",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-kconfig@git-9ac99fe"
    ]
  },
  {
    "language": "kdl",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-kdl@git-b37e3d5"
    ]
  },
  {
    "language": "klog",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Ansimorph/tree-sitter-klog@git-0b215fe"
    ]
  },
  {
    "language": "koka",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/koka-community/tree-sitter-koka@git-fd3b482"
    ]
  },
  {
    "language": "kotlin",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/fwcd/tree-sitter-kotlin@git-f66d290"
    ]
  },
  {
    "language": "koto",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/koto-lang/tree-sitter-koto@git-633744b"
    ]
  },
  {
    "language": "latex",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/latex-lsp/tree-sitter-latex@git-8c75e93"
    ]
  },
  {
    "language": "ld",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/mtoohey31/tree-sitter-ld@git-0e9695a"
    ]
  },
  {
    "language": "ldif",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/kkmp-dk/tree-sitter-ldif@git-0a91720"
    ]
  },
  {
    "language": "lean",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/Julian/tree-sitter-lean@git-d984261"
    ]
  },
  {
    "language": "ledger",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/cbarrete/tree-sitter-ledger@git-1f864fb"
    ]
  },
  {
    "language": "less",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/jimliang/tree-sitter-less@git-e5ae624"
    ]
  },
  {
    "language": "llvm",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/benwilliamgraham/tree-sitter-llvm@git-c14cb83"
    ]
  },
  {
    "language": "llvm-mir",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Flakebi/tree-sitter-llvm-mir@git-d166ff8"
    ]
  },
  {
    "language": "llvm-mir-yaml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ]
  },
  {
    "language": "log",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Tudyx/tree-sitter-log@git-62cfe30"
    ]
  },
  {
    "language": "lpf",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "gitlab.com/TheZoq2/tree-sitter-lpf@git-db7372e"
    ]
  },
  {
    "language": "lua",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-lua@git-10fe005"
    ]
  },
  {
    "language": "lua-format-string",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "codeberg.org/kpbaks/tree-sitter-lua-format-string@git-b667c8c"
    ]
  },
  {
    "language": "luap",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-luap@git-c134aae"
    ]
  },
  {
    "language": "luau",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/polychromatist/tree-sitter-luau@git-ec187ca"
    ]
  },
  {
    "language": "mail",
    "queryKinds": [
      "highlights",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "codeberg.org/ficd/tree-sitter-mail@git-5eddbfd"
    ]
  },
  {
    "language": "make",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/alemuller/tree-sitter-make@git-a4b9187"
    ]
  },
  {
    "language": "markdoc",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/mohitsinghs/tree-sitter-markdoc@git-e4211fe"
    ]
  },
  {
    "language": "markdown",
    "queryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-markdown@git-f969cd3"
    ]
  },
  {
    "language": "markdown-rustdoc",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "markdown",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-markdown@git-f969cd3"
    ]
  },
  {
    "language": "markdown.inline",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "markdown_inline",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-markdown@git-f969cd3"
    ]
  },
  {
    "language": "matlab",
    "queryKinds": [
      "context",
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/acristoffers/tree-sitter-matlab@git-c2390a5"
    ]
  },
  {
    "language": "mermaid",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/monaqa/tree-sitter-mermaid@git-d787c66"
    ]
  },
  {
    "language": "meson",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-meson@git-c84f354"
    ]
  },
  {
    "language": "metamath",
    "queryKinds": [
      "highlights",
      "locals",
      "tags"
    ],
    "testedParserRefs": [
      "git.sr.ht/~m4dh0rs3/tree-sitter-metamath@git-d6a57b0"
    ]
  },
  {
    "language": "miseconfig",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "toml",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-toml@git-64b5683"
    ]
  },
  {
    "language": "mojo",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/lsh/tree-sitter-mojo@git-3d7c53b"
    ]
  },
  {
    "language": "moonbit",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/moonbitlang/tree-sitter-moonbit@git-36191d7"
    ]
  },
  {
    "language": "move",
    "queryKinds": [
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/tzakian/tree-sitter-move@git-8bc0d16"
    ]
  },
  {
    "language": "msbuild",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "parserLanguage": "xml",
    "testedParserRefs": [
      "github.com/RenjiSann/tree-sitter-xml@git-48a7c2b"
    ]
  },
  {
    "language": "nasm",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/naclsn/tree-sitter-nasm@git-570f3d7"
    ]
  },
  {
    "language": "nearley",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/mi2ebi/tree-sitter-nearley@git-12d0111"
    ]
  },
  {
    "language": "nestedtext",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "yaml",
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "nginx",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "gitlab.com/joncoole/tree-sitter-nginx@git-f6d13cf"
    ]
  },
  {
    "language": "nickel",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/nickel-lang/tree-sitter-nickel@git-88d836a"
    ]
  },
  {
    "language": "nim",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/alaviss/tree-sitter-nim@git-c5f0ce3"
    ]
  },
  {
    "language": "nix",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/numtide/tree-sitter-nix@git-70f34e9"
    ]
  },
  {
    "language": "nu",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/nushell/tree-sitter-nu@git-cc4624f"
    ]
  },
  {
    "language": "nunjucks",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "jinja2",
    "testedParserRefs": [
      "github.com/varpeti/tree-sitter-jinja2@git-a533cd3"
    ]
  },
  {
    "language": "ocaml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-ocaml@git-59e2b9f"
    ]
  },
  {
    "language": "ocaml-interface",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-ocaml@git-59e2b9f"
    ]
  },
  {
    "language": "odin",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-odin@git-6c6b07e"
    ]
  },
  {
    "language": "ohm",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/novusnota/tree-sitter-ohm@git-a1de3e7"
    ]
  },
  {
    "language": "opencl",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/lefp/tree-sitter-opencl@git-8e1d24a"
    ]
  },
  {
    "language": "openscad",
    "queryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/openscad/tree-sitter-openscad@git-4c36a4f"
    ]
  },
  {
    "language": "org",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/emiasims/tree-sitter-org@git-698bb1a"
    ]
  },
  {
    "language": "p",
    "queryKinds": [
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/battesonb/tree-sitter-p@git-701dcc1"
    ]
  },
  {
    "language": "pascal",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Isopod/tree-sitter-pascal@git-042119e"
    ]
  },
  {
    "language": "passwd",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/ath3/tree-sitter-passwd@git-2023939"
    ]
  },
  {
    "language": "pem",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/mtoohey31/tree-sitter-pem@git-62842ea"
    ]
  },
  {
    "language": "penrose",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/klukaszek/tree-sitter-penrose@git-d9368ff"
    ]
  },
  {
    "language": "perl",
    "queryKinds": [
      "fold",
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-perl/tree-sitter-perl@git-72a08a4"
    ]
  },
  {
    "language": "pest",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/pest-parser/tree-sitter-pest@git-c19629a"
    ]
  },
  {
    "language": "php",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-php@git-3f2465c"
    ]
  },
  {
    "language": "php-only",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-php@git-3f2465c"
    ]
  },
  {
    "language": "picat",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/DLR-FT/tree-sitter-picat@git-ecb6b07"
    ]
  },
  {
    "language": "pip-requirements",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "requirements",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-requirements@git-2c3bb29"
    ]
  },
  {
    "language": "pkgbuild",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "bash",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-bash@git-a06c2e4"
    ]
  },
  {
    "language": "pkl",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/apple/tree-sitter-pkl@git-c03f04a"
    ]
  },
  {
    "language": "po",
    "queryKinds": [
      "highlights",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-po@git-417cee9"
    ]
  },
  {
    "language": "pod",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-perl/tree-sitter-pod@git-cd19313"
    ]
  },
  {
    "language": "ponylang",
    "queryKinds": [
      "highlights",
      "indents",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/mfelsche/tree-sitter-ponylang@git-ef66b15"
    ]
  },
  {
    "language": "powershell",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/airbus-cert/tree-sitter-powershell@git-c9316be"
    ]
  },
  {
    "language": "prisma",
    "queryKinds": [
      "highlights",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/victorhqc/tree-sitter-prisma@git-eca2596"
    ]
  },
  {
    "language": "prolog",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "codeberg.org/foxy/tree-sitter-prolog@git-d8d415f"
    ]
  },
  {
    "language": "properties",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-properties@git-6310671"
    ]
  },
  {
    "language": "protobuf",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "proto",
    "testedParserRefs": [
      "github.com/sdoerner/tree-sitter-proto@git-35a6a3b"
    ]
  },
  {
    "language": "proverif",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "codeberg.org/maribu/tree-sitter-proverif@git-7741807"
    ]
  },
  {
    "language": "prql",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/PRQL/tree-sitter-prql@git-09e158c"
    ]
  },
  {
    "language": "ptx",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "codeberg.org/jer-gremlin/tree-sitter-ptx@git-3dfa675"
    ]
  },
  {
    "language": "pug",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/zealot128/tree-sitter-pug@git-13e9195"
    ]
  },
  {
    "language": "puppet",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-puppet@git-15f1929"
    ]
  },
  {
    "language": "purescript",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/postsolar/tree-sitter-purescript@git-f541f95"
    ]
  },
  {
    "language": "python",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-python@git-293fdc0"
    ]
  },
  {
    "language": "qml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "qmljs",
    "testedParserRefs": [
      "github.com/yuja/tree-sitter-qmljs@git-0b2b25b"
    ]
  },
  {
    "language": "quarto",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "parserLanguage": "markdown",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-markdown@git-f969cd3"
    ]
  },
  {
    "language": "quint",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/gruhn/tree-sitter-quint@git-eebbd01"
    ]
  },
  {
    "language": "r",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/r-lib/tree-sitter-r@git-0e6ef77"
    ]
  },
  {
    "language": "racket",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows"
    ],
    "parserLanguage": "scheme",
    "testedParserRefs": [
      "github.com/6cdh/tree-sitter-scheme@git-c6cb7c7"
    ]
  },
  {
    "language": "regex",
    "queryKinds": [
      "highlights",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-regex@git-b2ac15e"
    ]
  },
  {
    "language": "rego",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/FallenAngel97/tree-sitter-rego@git-ddd39af"
    ]
  },
  {
    "language": "rescript",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/rescript-lang/tree-sitter-rescript@git-5e2a44a"
    ]
  },
  {
    "language": "ripple",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals",
      "rainbows",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/Ripple-TS/ripple@git-49762f0"
    ]
  },
  {
    "language": "rmarkdown",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "parserLanguage": "markdown",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-markdown@git-f969cd3"
    ]
  },
  {
    "language": "robot",
    "queryKinds": [
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/Hubro/tree-sitter-robot@git-93c48ca"
    ]
  },
  {
    "language": "robots.txt",
    "queryKinds": [
      "highlights",
      "injections",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "robots-txt",
    "testedParserRefs": [
      "github.com/opa-oz/tree-sitter-robots-txt@git-0c06610"
    ]
  },
  {
    "language": "ron",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-ron@git-7893855"
    ]
  },
  {
    "language": "rpmspec",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "gitlab.com/cryptomilk/tree-sitter-rpmspec@git-d0275cd"
    ]
  },
  {
    "language": "rshtml",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/rshtml/tree-sitter-rshtml@git-a1499c5"
    ]
  },
  {
    "language": "rst",
    "queryKinds": [
      "highlights",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/stsewd/tree-sitter-rst@git-6322f26"
    ]
  },
  {
    "language": "ruby",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-ruby@git-ad907a6"
    ]
  },
  {
    "language": "rust",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-rust@git-77a3747"
    ]
  },
  {
    "language": "rust-format-args",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/nik-rev/tree-sitter-rust-format-args@git-84ffe55"
    ]
  },
  {
    "language": "rust-format-args-macro",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "rust",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-rust@git-77a3747"
    ]
  },
  {
    "language": "sage",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "parserLanguage": "python",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-python@git-293fdc0"
    ]
  },
  {
    "language": "scala",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-scala@git-4d081d9"
    ]
  },
  {
    "language": "scfg",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/rockorager/tree-sitter-scfg@git-d850fd4"
    ]
  },
  {
    "language": "scheme",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/6cdh/tree-sitter-scheme@git-c6cb7c7"
    ]
  },
  {
    "language": "scss",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/serenadeai/tree-sitter-scss@git-c478c68"
    ]
  },
  {
    "language": "sgf",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/lykahb/tree-sitter-sgf@git-b7e0fb7"
    ]
  },
  {
    "language": "shellcheckrc",
    "queryKinds": [
      "highlights",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "codeberg.org/kpbaks/tree-sitter-shellcheckrc@git-ad3da4e"
    ]
  },
  {
    "language": "slang",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-slang@git-327b1b8"
    ]
  },
  {
    "language": "slint",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/slint-ui/tree-sitter-slint@git-68b2524"
    ]
  },
  {
    "language": "slisp",
    "queryKinds": [
      "highlights",
      "tags"
    ],
    "testedParserRefs": [
      "git.sr.ht/~xguerin/tree-sitter-slisp@git-e14f621"
    ]
  },
  {
    "language": "smali",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-smali@git-fdfa6a1"
    ]
  },
  {
    "language": "smithy",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/indoorvivants/tree-sitter-smithy@git-ec4fe14"
    ]
  },
  {
    "language": "sml",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Giorbo/tree-sitter-sml@git-bd4055d"
    ]
  },
  {
    "language": "snakemake",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/osthomas/tree-sitter-snakemake@git-e909815"
    ]
  },
  {
    "language": "solidity",
    "queryKinds": [
      "highlights",
      "locals",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/JoranHonig/tree-sitter-solidity@git-048fe68"
    ]
  },
  {
    "language": "sourcepawn",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/nilshelmig/tree-sitter-sourcepawn@git-5a8fdd4"
    ]
  },
  {
    "language": "spade",
    "queryKinds": [
      "highlights",
      "indents",
      "rainbows"
    ],
    "testedParserRefs": [
      "codeberg.org/spade-lang/tree-sitter-spade@git-4eb2fc0"
    ]
  },
  {
    "language": "spicedb",
    "queryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/authzed/tree-sitter-spicedb@git-a4e4645"
    ]
  },
  {
    "language": "sql",
    "queryKinds": [
      "highlights",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/DerekStride/tree-sitter-sql@git-851e9cb"
    ]
  },
  {
    "language": "ssh_client_config",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/metio/tree-sitter-ssh-client-config@git-4abd07d"
    ]
  },
  {
    "language": "starlark",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "python",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-python@git-293fdc0"
    ]
  },
  {
    "language": "strace",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/sigmaSd/tree-sitter-strace@git-2b18fdf"
    ]
  },
  {
    "language": "strictdoc",
    "queryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "testedParserRefs": [
      "github.com/manueldiagostino/tree-sitter-strictdoc@git-bba07bd"
    ]
  },
  {
    "language": "styx",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/bearcove/styx@git-51feb2a"
    ]
  },
  {
    "language": "supercollider",
    "queryKinds": [
      "folds",
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/madskjeldgaard/tree-sitter-supercollider@git-3b35bd0"
    ]
  },
  {
    "language": "svelte",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/themixednuts/tree-sitter-htmlx@git-c9b9cc3"
    ]
  },
  {
    "language": "sway",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/FuelLabs/tree-sitter-sway@git-e491a00"
    ]
  },
  {
    "language": "swift",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/alex-pinkus/tree-sitter-swift@git-7b7909f"
    ]
  },
  {
    "language": "systemd",
    "queryKinds": [
      "highlights",
      "injections",
      "tags"
    ],
    "parserLanguage": "ini",
    "testedParserRefs": [
      "github.com/justinmk/tree-sitter-ini@git-e4018b5"
    ]
  },
  {
    "language": "systemverilog",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/gmlarumbe/tree-sitter-systemverilog@git-5f7a412"
    ]
  },
  {
    "language": "t32",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "gitlab.com/xasc/tree-sitter-t32@git-6da5e3c"
    ]
  },
  {
    "language": "tablegen",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/Flakebi/tree-sitter-tablegen@git-3e9c482"
    ]
  },
  {
    "language": "tact",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tact-lang/tree-sitter-tact@git-ec57ab2"
    ]
  },
  {
    "language": "task",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/AlexanderBrevig/tree-sitter-task@git-f2cb435"
    ]
  },
  {
    "language": "tcl",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-tcl@git-56ad1fa"
    ]
  },
  {
    "language": "teal",
    "queryKinds": [
      "folds",
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/euclidianAce/tree-sitter-teal@git-3db6559"
    ]
  },
  {
    "language": "templ",
    "queryKinds": [
      "highlights",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/vrischmann/tree-sitter-templ@git-68d6707"
    ]
  },
  {
    "language": "tera",
    "queryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/uncenter/tree-sitter-tera@git-3a38c36"
    ]
  },
  {
    "language": "textproto",
    "queryKinds": [
      "highlights",
      "indents",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/PorterAtGoogle/tree-sitter-textproto@git-568471b"
    ]
  },
  {
    "language": "tfvars",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "injections"
    ],
    "parserLanguage": "hcl",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-hcl@git-64ad627"
    ]
  },
  {
    "language": "thrift",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-thrift@git-68fd0d8"
    ]
  },
  {
    "language": "tilt",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "parserLanguage": "python",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-python@git-293fdc0"
    ]
  },
  {
    "language": "tlaplus",
    "queryKinds": [
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/tlaplus-community/tree-sitter-tlaplus@git-add4081"
    ]
  },
  {
    "language": "todotxt",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/arnarg/tree-sitter-todotxt@git-3937c5c"
    ]
  },
  {
    "language": "tolk",
    "queryKinds": [
      "highlights",
      "indents",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/ton-blockchain/ton-language-server@git-e90dbb8"
    ]
  },
  {
    "language": "toml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-toml@git-64b5683"
    ]
  },
  {
    "language": "tql",
    "queryKinds": [
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/tenzir/tree-sitter-tql@git-477e8ba"
    ]
  },
  {
    "language": "tsq",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "rainbows"
    ],
    "parserLanguage": "query",
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-query@git-a6674e2"
    ]
  },
  {
    "language": "tsx",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-typescript@git-75b3874"
    ]
  },
  {
    "language": "twig",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/gbprod/tree-sitter-twig@git-0afd9a6"
    ]
  },
  {
    "language": "typescript",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-typescript@git-75b3874"
    ]
  },
  {
    "language": "typespec",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/happenslol/tree-sitter-typespec@git-0ee0554"
    ]
  },
  {
    "language": "typst",
    "queryKinds": [
      "highlights",
      "injections",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/uben0/tree-sitter-typst@git-13863dd"
    ]
  },
  {
    "language": "ungrammar",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-ungrammar@git-debd26f"
    ]
  },
  {
    "language": "unison",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/kylegoetz/tree-sitter-unison@git-3c97db7"
    ]
  },
  {
    "language": "uxntal",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Jummit/tree-sitter-uxntal@git-1a44f8d"
    ]
  },
  {
    "language": "v",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/vlang/v-analyzer@git-59a8889"
    ]
  },
  {
    "language": "vala",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/vala-lang/tree-sitter-vala@git-97e6db3"
    ]
  },
  {
    "language": "varlink",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/bachorp/tree-sitter-varlink@git-a80ecff"
    ]
  },
  {
    "language": "vento",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/ventojs/tree-sitter-vento@git-3b32474"
    ]
  },
  {
    "language": "verilog",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-verilog@git-4457145"
    ]
  },
  {
    "language": "vhdl",
    "queryKinds": [
      "highlights",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/jpt13653903/tree-sitter-vhdl@git-b8e31d1"
    ]
  },
  {
    "language": "vhs",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/charmbracelet/tree-sitter-vhs@git-9534865"
    ]
  },
  {
    "language": "vim",
    "queryKinds": [
      "folds",
      "highlights",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-vim@git-f3cd62d"
    ]
  },
  {
    "language": "vue",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-vue@git-91fe275"
    ]
  },
  {
    "language": "wast",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/wasm-lsp/tree-sitter-wasm@git-2ca28a9"
    ]
  },
  {
    "language": "wat",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/wasm-lsp/tree-sitter-wasm@git-2ca28a9"
    ]
  },
  {
    "language": "webc",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "parserLanguage": "html",
    "testedParserRefs": [
      "github.com/tree-sitter/tree-sitter-html@git-73a3947"
    ]
  },
  {
    "language": "werk",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/little-bonsai/tree-sitter-werk@git-92b0f7f"
    ]
  },
  {
    "language": "wesl",
    "queryKinds": [
      "highlights",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/webgpu-tools/tree-sitter-wesl@git-94ee612"
    ]
  },
  {
    "language": "wgsl",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/szebniok/tree-sitter-wgsl@git-272e89e"
    ]
  },
  {
    "language": "wikitext",
    "queryKinds": [
      "folds",
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/wikimedia/tree-sitter-wikitext@git-444214b"
    ]
  },
  {
    "language": "wit",
    "queryKinds": [
      "highlights",
      "indents"
    ],
    "testedParserRefs": [
      "github.com/hh9527/tree-sitter-wit@git-c917790"
    ]
  },
  {
    "language": "woodpecker-ci",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "parserLanguage": "yaml",
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "wren",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "textobjects"
    ],
    "testedParserRefs": [
      "git.sr.ht/~jummit/tree-sitter-wren@git-6748694"
    ]
  },
  {
    "language": "xit",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/synaptiko/tree-sitter-xit@git-7d79024"
    ]
  },
  {
    "language": "xml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/RenjiSann/tree-sitter-xml@git-48a7c2b"
    ]
  },
  {
    "language": "xtc",
    "queryKinds": [
      "highlights"
    ],
    "testedParserRefs": [
      "github.com/Alexis-Lapierre/tree-sitter-xtc@git-7bc11b7"
    ]
  },
  {
    "language": "xwiki",
    "queryKinds": [
      "highlights",
      "injections"
    ],
    "testedParserRefs": [
      "github.com/battesonb/tree-sitter-xwiki@git-58010c6"
    ]
  },
  {
    "language": "yaml",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/ikatyang/tree-sitter-yaml@git-0e36bed"
    ]
  },
  {
    "language": "yara",
    "queryKinds": [
      "highlights",
      "injections",
      "locals"
    ],
    "testedParserRefs": [
      "github.com/egibs/tree-sitter-yara@git-eb3ede2"
    ]
  },
  {
    "language": "yuck",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "rainbows"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-yuck@git-6c60112"
    ]
  },
  {
    "language": "zig",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "locals",
      "rainbows",
      "tags",
      "textobjects"
    ],
    "testedParserRefs": [
      "github.com/tree-sitter-grammars/tree-sitter-zig@git-6479aa1"
    ]
  }
];

export const HELIX_RUNTIME_LANGUAGES = HELIX_RUNTIME_LANGUAGE_DETAILS.map(
  ({ language }) => language,
);
