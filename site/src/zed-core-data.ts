import type { QueryPackLanguage } from './types.js';

export const ZED_CORE_LANGUAGE_DETAILS: QueryPackLanguage[] = [
  {
    "language": "bash",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "overrides",
      "redactions",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "c",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "cpp",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "textobjects"
    ]
  },
  {
    "language": "css",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "textobjects"
    ]
  },
  {
    "language": "diff",
    "queryKinds": [
      "highlights",
      "injections"
    ]
  },
  {
    "language": "gitcommit",
    "queryKinds": [
      "highlights",
      "injections"
    ]
  },
  {
    "language": "go",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "gomod",
    "queryKinds": [
      "highlights",
      "injections",
      "structure"
    ]
  },
  {
    "language": "gowork",
    "queryKinds": [
      "highlights",
      "injections"
    ]
  },
  {
    "language": "javascript",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ],
    "parserLanguage": "tsx"
  },
  {
    "language": "jsdoc",
    "queryKinds": [
      "brackets",
      "highlights"
    ]
  },
  {
    "language": "json",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "outline",
      "overrides",
      "redactions",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "jsonc",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "redactions",
      "textobjects"
    ]
  },
  {
    "language": "markdown",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "textobjects"
    ]
  },
  {
    "language": "markdown-inline",
    "queryKinds": [
      "highlights",
      "injections"
    ]
  },
  {
    "language": "python",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "regex",
    "queryKinds": [
      "brackets",
      "highlights"
    ]
  },
  {
    "language": "rust",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "tsx",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "typescript",
    "queryKinds": [
      "brackets",
      "debugger",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides",
      "runnables",
      "textobjects"
    ]
  },
  {
    "language": "yaml",
    "queryKinds": [
      "brackets",
      "highlights",
      "injections",
      "outline",
      "overrides",
      "redactions",
      "textobjects"
    ]
  },
  {
    "language": "zed-keybind-context",
    "queryKinds": [
      "brackets",
      "highlights"
    ],
    "parserLanguage": "rust"
  }
];

export const ZED_CORE_LANGUAGES = ZED_CORE_LANGUAGE_DETAILS.map(
  ({ language }) => language,
);
