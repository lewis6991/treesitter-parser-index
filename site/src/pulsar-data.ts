import type { QueryFiles } from './types.js';

export interface PulsarGrammarPackData {
  id: string;
  name: string;
  language: string;
  packagePath: string;
  installRoot: string;
  queryRoot: string;
  queryKinds: string[];
  queries: Record<string, QueryFiles>;
}

export const PULSAR_GRAMMAR_PACKS: PulsarGrammarPackData[] = [
  {
    "id": "language-c-c",
    "name": "C",
    "language": "c",
    "packagePath": "packages/language-c",
    "installRoot": "packages/language-c/grammars",
    "queryRoot": "mixed roots",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-c/grammars/common/highlights.scm",
        "packages/language-c/grammars/tree-sitter-c/highlights.scm"
      ],
      "tags": "packages/language-c/grammars/tree-sitter-c/tags.scm",
      "folds": "packages/language-c/grammars/tree-sitter-c/folds.scm",
      "indents": "packages/language-c/grammars/tree-sitter-c/indents.scm"
    }
  },
  {
    "id": "language-csharp-csharp",
    "name": "C#",
    "language": "c_sharp",
    "packagePath": "packages/language-csharp",
    "installRoot": "packages/language-csharp/grammars",
    "queryRoot": "tree-sitter-c-sharp",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-csharp/grammars/tree-sitter-c-sharp/highlights.scm"
      ],
      "tags": "packages/language-csharp/grammars/tree-sitter-c-sharp/tags.scm",
      "folds": "packages/language-csharp/grammars/tree-sitter-c-sharp/folds.scm",
      "indents": "packages/language-csharp/grammars/tree-sitter-c-sharp/indents.scm"
    }
  },
  {
    "id": "language-c-cpp",
    "name": "C++",
    "language": "cpp",
    "packagePath": "packages/language-c",
    "installRoot": "packages/language-c/grammars",
    "queryRoot": "mixed roots",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-c/grammars/common/highlights.scm",
        "packages/language-c/grammars/tree-sitter-cpp/highlights.scm"
      ],
      "tags": "packages/language-c/grammars/tree-sitter-cpp/tags.scm",
      "folds": "packages/language-c/grammars/tree-sitter-cpp/folds.scm",
      "indents": "packages/language-c/grammars/tree-sitter-cpp/indents.scm"
    }
  },
  {
    "id": "language-css-css",
    "name": "CSS",
    "language": "css",
    "packagePath": "packages/language-css",
    "installRoot": "packages/language-css/grammars",
    "queryRoot": "tree-sitter/queries",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-css/grammars/tree-sitter/queries/highlights.scm",
      "folds": "packages/language-css/grammars/tree-sitter/queries/folds.scm",
      "tags": "packages/language-css/grammars/tree-sitter/queries/tags.scm",
      "indents": "packages/language-css/grammars/tree-sitter/queries/indents.scm"
    }
  },
  {
    "id": "language-clojure-clojure",
    "name": "Clojure",
    "language": "clojure",
    "packagePath": "packages/language-clojure",
    "installRoot": "packages/language-clojure/grammars",
    "queryRoot": "ts",
    "queryKinds": [
      "folds",
      "highlights",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-clojure/grammars/ts/highlights.scm",
        "packages/language-clojure/grammars/ts/edn-highlights.scm"
      ],
      "folds": "packages/language-clojure/grammars/ts/folds.scm",
      "tags": "packages/language-clojure/grammars/ts/tags.scm"
    }
  },
  {
    "id": "language-clojure-edn",
    "name": "Clojure EDN",
    "language": "clojure",
    "packagePath": "packages/language-clojure",
    "installRoot": "packages/language-clojure/grammars",
    "queryRoot": "ts",
    "queryKinds": [
      "folds",
      "highlights"
    ],
    "queries": {
      "highlights": [
        "packages/language-clojure/grammars/ts/edn-only-highlights.scm",
        "packages/language-clojure/grammars/ts/edn-highlights.scm"
      ],
      "folds": "packages/language-clojure/grammars/ts/folds.scm"
    }
  },
  {
    "id": "language-html-ejs",
    "name": "EJS",
    "language": "embedded_template",
    "packagePath": "packages/language-html",
    "installRoot": "packages/language-html/grammars",
    "queryRoot": "tree-sitter-embedded-template/ejs",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "queries": {
      "highlights": "packages/language-html/grammars/tree-sitter-embedded-template/ejs/highlights.scm",
      "folds": "packages/language-html/grammars/tree-sitter-embedded-template/ejs/folds.scm",
      "indents": "packages/language-html/grammars/tree-sitter-embedded-template/ejs/indents.scm"
    }
  },
  {
    "id": "language-html-erb",
    "name": "ERB",
    "language": "embedded_template",
    "packagePath": "packages/language-html",
    "installRoot": "packages/language-html/grammars",
    "queryRoot": "tree-sitter-embedded-template/erb",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "queries": {
      "highlights": "packages/language-html/grammars/tree-sitter-embedded-template/erb/highlights.scm",
      "folds": "packages/language-html/grammars/tree-sitter-embedded-template/erb/folds.scm",
      "indents": "packages/language-html/grammars/tree-sitter-embedded-template/erb/indents.scm"
    }
  },
  {
    "id": "language-gfm-gfm",
    "name": "GitHub Markdown",
    "language": "markdown",
    "packagePath": "packages/language-gfm",
    "installRoot": "packages/language-gfm/grammars",
    "queryRoot": "tree-sitter-markdown",
    "queryKinds": [
      "folds",
      "highlights",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-gfm/grammars/tree-sitter-markdown/highlights.scm",
      "folds": "packages/language-gfm/grammars/tree-sitter-markdown/folds.scm",
      "tags": "packages/language-gfm/grammars/tree-sitter-markdown/tags.scm"
    }
  },
  {
    "id": "language-go-go",
    "name": "Go",
    "language": "go",
    "packagePath": "packages/language-go",
    "installRoot": "packages/language-go/grammars",
    "queryRoot": "tree-sitter-go",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "queries": {
      "highlights": "packages/language-go/grammars/tree-sitter-go/highlights.scm",
      "folds": "packages/language-go/grammars/tree-sitter-go/folds.scm",
      "indents": "packages/language-go/grammars/tree-sitter-go/indents.scm"
    }
  },
  {
    "id": "language-html-html",
    "name": "HTML",
    "language": "html",
    "packagePath": "packages/language-html",
    "installRoot": "packages/language-html/grammars",
    "queryRoot": "tree-sitter-html",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "queries": {
      "highlights": "packages/language-html/grammars/tree-sitter-html/highlights.scm",
      "folds": "packages/language-html/grammars/tree-sitter-html/folds.scm",
      "indents": "packages/language-html/grammars/tree-sitter-html/indents.scm"
    }
  },
  {
    "id": "language-hyperlink-hyperlink",
    "name": "Hyperlink",
    "language": "hyperlink",
    "packagePath": "packages/language-hyperlink",
    "installRoot": "packages/language-hyperlink/grammars",
    "queryRoot": "ts",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-hyperlink/grammars/ts/highlights.scm"
    }
  },
  {
    "id": "language-javascript-jsdoc",
    "name": "JSDoc",
    "language": "jsdoc",
    "packagePath": "packages/language-javascript",
    "installRoot": "packages/language-javascript/grammars",
    "queryRoot": "tree-sitter/jsdoc",
    "queryKinds": [
      "folds",
      "highlights",
      "indents"
    ],
    "queries": {
      "highlights": "packages/language-javascript/grammars/tree-sitter/jsdoc/highlights.scm",
      "folds": "packages/language-javascript/grammars/tree-sitter/jsdoc/folds.scm",
      "indents": "packages/language-javascript/grammars/tree-sitter/jsdoc/indents.scm"
    }
  },
  {
    "id": "language-json-json",
    "name": "JSON",
    "language": "json",
    "packagePath": "packages/language-json",
    "installRoot": "packages/language-json/grammars",
    "queryRoot": "tree-sitter/queries",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-json/grammars/tree-sitter/queries/highlights-no-comments.scm",
        "packages/language-json/grammars/tree-sitter/queries/highlights.scm"
      ],
      "indents": "packages/language-json/grammars/tree-sitter/queries/indents.scm",
      "folds": "packages/language-json/grammars/tree-sitter/queries/folds.scm",
      "tags": "packages/language-json/grammars/tree-sitter/queries/tags.scm"
    }
  },
  {
    "id": "language-json-json-with-comments",
    "name": "JSON with Comments",
    "language": "json",
    "packagePath": "packages/language-json",
    "installRoot": "packages/language-json/grammars",
    "queryRoot": "tree-sitter/queries",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-json/grammars/tree-sitter/queries/highlights.scm",
      "indents": "packages/language-json/grammars/tree-sitter/queries/indents.scm",
      "folds": "packages/language-json/grammars/tree-sitter/queries/folds.scm",
      "tags": "packages/language-json/grammars/tree-sitter/queries/tags.scm"
    }
  },
  {
    "id": "language-java-java",
    "name": "Java",
    "language": "java",
    "packagePath": "packages/language-java",
    "installRoot": "packages/language-java/grammars",
    "queryRoot": "tree-sitter-java",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-java/grammars/tree-sitter-java/highlights.scm",
      "tags": "packages/language-java/grammars/tree-sitter-java/tags.scm",
      "indents": "packages/language-java/grammars/tree-sitter-java/indents.scm",
      "folds": "packages/language-java/grammars/tree-sitter-java/folds.scm"
    }
  },
  {
    "id": "language-javascript-javascript",
    "name": "JavaScript",
    "language": "javascript",
    "packagePath": "packages/language-javascript",
    "installRoot": "packages/language-javascript/grammars",
    "queryRoot": "tree-sitter",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "locals",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-javascript/grammars/tree-sitter/highlights.scm",
      "locals": "packages/language-javascript/grammars/tree-sitter/locals.scm",
      "folds": "packages/language-javascript/grammars/tree-sitter/folds.scm",
      "indents": "packages/language-javascript/grammars/tree-sitter/indents.scm",
      "tags": "packages/language-javascript/grammars/tree-sitter/tags.scm"
    }
  },
  {
    "id": "language-javascript-regex",
    "name": "JavaScript RegExp",
    "language": "regex",
    "packagePath": "packages/language-javascript",
    "installRoot": "packages/language-javascript/grammars",
    "queryRoot": "tree-sitter/regex",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-javascript/grammars/tree-sitter/regex/highlights.scm"
    }
  },
  {
    "id": "language-gfm-gfm-inline",
    "name": "Markdown Inline",
    "language": "markdown_inline",
    "packagePath": "packages/language-gfm",
    "installRoot": "packages/language-gfm/grammars",
    "queryRoot": "tree-sitter-markdown-inline",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-gfm/grammars/tree-sitter-markdown-inline/highlights.scm"
    }
  },
  {
    "id": "language-php-php",
    "name": "Php",
    "language": "php",
    "packagePath": "packages/language-php",
    "installRoot": "packages/language-php/grammars",
    "queryRoot": "tree-sitter/queries",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-php/grammars/tree-sitter/queries/highlights.scm",
      "tags": "packages/language-php/grammars/tree-sitter/queries/tags.scm",
      "folds": "packages/language-php/grammars/tree-sitter/queries/folds.scm",
      "indents": "packages/language-php/grammars/tree-sitter/queries/indents.scm"
    }
  },
  {
    "id": "language-php-phpdoc",
    "name": "Phpdoc",
    "language": "phpdoc",
    "packagePath": "packages/language-php",
    "installRoot": "packages/language-php/grammars",
    "queryRoot": "tree-sitter/queries/phpdoc",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-php/grammars/tree-sitter/queries/phpdoc/highlights.scm"
    }
  },
  {
    "id": "language-python-python",
    "name": "Python",
    "language": "python",
    "packagePath": "packages/language-python",
    "installRoot": "packages/language-python/grammars",
    "queryRoot": "ts",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-python/grammars/ts/highlights.scm",
      "tags": "packages/language-python/grammars/ts/tags.scm",
      "folds": "packages/language-python/grammars/ts/folds.scm",
      "indents": "packages/language-python/grammars/ts/indents.scm"
    }
  },
  {
    "id": "language-ruby-regex",
    "name": "Regex",
    "language": "regex",
    "packagePath": "packages/language-ruby",
    "installRoot": "packages/language-ruby/grammars",
    "queryRoot": "tree-sitter-regex",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-ruby/grammars/tree-sitter-regex/highlights.scm"
    }
  },
  {
    "id": "language-typescript-regex",
    "name": "Regex",
    "language": "regex",
    "packagePath": "packages/language-typescript",
    "installRoot": "packages/language-typescript/grammars",
    "queryRoot": "tree-sitter-regex",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-typescript/grammars/tree-sitter-regex/highlights.scm"
    }
  },
  {
    "id": "language-ruby-ruby",
    "name": "Ruby",
    "language": "ruby",
    "packagePath": "packages/language-ruby",
    "installRoot": "packages/language-ruby/grammars",
    "queryRoot": "tree-sitter-ruby",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "locals",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-ruby/grammars/tree-sitter-ruby/highlights.scm",
      "locals": "packages/language-ruby/grammars/tree-sitter-ruby/locals.scm",
      "folds": "packages/language-ruby/grammars/tree-sitter-ruby/folds.scm",
      "indents": "packages/language-ruby/grammars/tree-sitter-ruby/indents.scm",
      "tags": "packages/language-ruby/grammars/tree-sitter-ruby/tags.scm"
    }
  },
  {
    "id": "language-rust-bundled-rust",
    "name": "Rust",
    "language": "rust",
    "packagePath": "packages/language-rust-bundled",
    "installRoot": "packages/language-rust-bundled/grammars",
    "queryRoot": "tree-sitter-rust/queries",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-rust-bundled/grammars/tree-sitter-rust/queries/highlights.scm",
      "tags": "packages/language-rust-bundled/grammars/tree-sitter-rust/queries/tags.scm",
      "folds": "packages/language-rust-bundled/grammars/tree-sitter-rust/queries/folds.scm",
      "indents": "packages/language-rust-bundled/grammars/tree-sitter-rust/queries/indents.scm"
    }
  },
  {
    "id": "language-sass-scss",
    "name": "SCSS",
    "language": "scss",
    "packagePath": "packages/language-sass",
    "installRoot": "packages/language-sass/grammars",
    "queryRoot": "tree-sitter",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-sass/grammars/tree-sitter/highlights.scm",
      "folds": "packages/language-sass/grammars/tree-sitter/folds.scm",
      "indents": "packages/language-sass/grammars/tree-sitter/indents.scm",
      "tags": "packages/language-sass/grammars/tree-sitter/tags.scm"
    }
  },
  {
    "id": "language-shellscript-bash",
    "name": "Shell Script",
    "language": "bash",
    "packagePath": "packages/language-shellscript",
    "installRoot": "packages/language-shellscript/grammars",
    "queryRoot": "tree-sitter",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-shellscript/grammars/tree-sitter/highlights.scm",
      "tags": "packages/language-shellscript/grammars/tree-sitter/tags.scm",
      "folds": "packages/language-shellscript/grammars/tree-sitter/folds.scm",
      "indents": "packages/language-shellscript/grammars/tree-sitter/indents.scm"
    }
  },
  {
    "id": "language-todo-todo",
    "name": "TODO",
    "language": "todo",
    "packagePath": "packages/language-todo",
    "installRoot": "packages/language-todo/grammars",
    "queryRoot": "ts",
    "queryKinds": [
      "highlights"
    ],
    "queries": {
      "highlights": "packages/language-todo/grammars/ts/highlights.scm"
    }
  },
  {
    "id": "language-toml-toml",
    "name": "TOML",
    "language": "toml",
    "packagePath": "packages/language-toml",
    "installRoot": "packages/language-toml/grammars",
    "queryRoot": "tree-sitter-toml",
    "queryKinds": [
      "folds",
      "highlights",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-toml/grammars/tree-sitter-toml/highlights.scm",
      "folds": "packages/language-toml/grammars/tree-sitter-toml/folds.scm",
      "tags": "packages/language-toml/grammars/tree-sitter-toml/tags.scm"
    }
  },
  {
    "id": "language-typescript-typescript",
    "name": "TypeScript",
    "language": "typescript",
    "packagePath": "packages/language-typescript",
    "installRoot": "packages/language-typescript/grammars",
    "queryRoot": "common",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-typescript/grammars/common/highlights.scm",
      "indents": "packages/language-typescript/grammars/common/indents.scm",
      "folds": "packages/language-typescript/grammars/common/folds.scm",
      "tags": "packages/language-typescript/grammars/common/tags.scm"
    }
  },
  {
    "id": "language-typescript-tsx",
    "name": "TypeScript (React)",
    "language": "tsx",
    "packagePath": "packages/language-typescript",
    "installRoot": "packages/language-typescript/grammars",
    "queryRoot": "mixed roots",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": [
        "packages/language-typescript/grammars/tree-sitter-tsx/highlights.scm",
        "packages/language-typescript/grammars/common/highlights.scm"
      ],
      "indents": [
        "packages/language-typescript/grammars/common/indents.scm",
        "packages/language-typescript/grammars/tree-sitter-tsx/indents.scm"
      ],
      "folds": [
        "packages/language-typescript/grammars/common/folds.scm",
        "packages/language-typescript/grammars/tree-sitter-tsx/folds.scm"
      ],
      "tags": "packages/language-typescript/grammars/common/tags.scm"
    }
  },
  {
    "id": "language-yaml-yaml",
    "name": "YAML",
    "language": "yaml",
    "packagePath": "packages/language-yaml",
    "installRoot": "packages/language-yaml/grammars",
    "queryRoot": "tree-sitter",
    "queryKinds": [
      "folds",
      "highlights",
      "indents",
      "tags"
    ],
    "queries": {
      "highlights": "packages/language-yaml/grammars/tree-sitter/highlights.scm",
      "folds": "packages/language-yaml/grammars/tree-sitter/folds.scm",
      "indents": "packages/language-yaml/grammars/tree-sitter/indents.scm",
      "tags": "packages/language-yaml/grammars/tree-sitter/tags.scm"
    }
  }
];
