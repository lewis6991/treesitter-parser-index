import {
  CATALOG_GENERATED_AT,
  HELIX_RUNTIME_VERSION,
  NVIM_AERIAL_VERSION,
  NVIM_CONTEXT_VERSION,
  NVIM_MATCHUP_VERSION,
  NVIM_TEXTOBJECTS_VERSION,
  NVIM_TREESITTER_VERSION,
  PULSAR_VERSION,
  ZED_VERSION,
} from './catalog-meta.js';
import { NVIM_AERIAL_LANGUAGE_DETAILS, NVIM_AERIAL_LANGUAGES } from './nvim-aerial-data.js';
import { NVIM_CONTEXT_LANGUAGE_DETAILS, NVIM_CONTEXT_LANGUAGES } from './nvim-context-data.js';
import { HELIX_RUNTIME_LANGUAGE_DETAILS, HELIX_RUNTIME_LANGUAGES } from './helix-runtime-data.js';
import { NVIM_MATCHUP_LANGUAGE_DETAILS, NVIM_MATCHUP_LANGUAGES } from './nvim-matchup-data.js';
import { NVIM_TEXTOBJECTS_LANGUAGE_DETAILS, NVIM_TEXTOBJECTS_LANGUAGES } from './nvim-textobjects-data.js';
import { NVIM_TREESITTER_LANGUAGE_DETAILS, NVIM_TREESITTER_LANGUAGES } from './nvim-treesitter-data.js';
import { PARSER_RELEASES } from './parser-catalog.js';
import { PULSAR_GRAMMAR_PACKS } from './pulsar-data.js';
import type { IndexData, ParserRelease, QueryFiles, QueryPack, QueryPackLanguage } from './types.js';
import { ZED_CORE_LANGUAGE_DETAILS, ZED_CORE_LANGUAGES } from './zed-core-data.js';
import { ZED_EXTENSION_PACKS } from './zed-extension-data.js';

const NVIM_RUNTIME_LAYOUT = {
  installRoot: 'runtime',
  queryRoot: 'runtime/queries',
} as const;

const HELIX_RUNTIME_LAYOUT = {
  installRoot: 'runtime',
  queryRoot: 'runtime/queries',
} as const;

const STANDARD_LAYOUT = {
  installRoot: '.',
  queryRoot: 'queries',
} as const;

const ZED_CORE_LAYOUT = {
  installRoot: '.',
  queryRoot: 'crates/grammars/src',
} as const;

const NEOVIM_CORE_TARGETS = [
  'neovim@>=0.11/core:highlights',
  'neovim@>=0.11/core:folds',
  'neovim@>=0.11/core:indents',
] as const;

const HELIX_CORE_TARGETS = [
  'helix@>=25.01/core:highlights',
  'helix@>=25.01/core:folds',
  'helix@>=25.01/core:indents',
  'helix@>=25.01/core:rainbows',
  'helix@>=25.01/core:tags',
  'helix@>=25.01/core:textobjects',
] as const;

const ZED_TARGET_BY_KIND = {
  brackets: 'zed@>=0.180/core:brackets',
  debugger: 'zed@>=0.180/core:debugger',
  folds: 'zed@>=0.180/core:folds',
  highlights: 'zed@>=0.180/core:highlights',
  indents: 'zed@>=0.180/core:indents',
  injections: 'zed@>=0.180/core:injections',
  outline: 'zed@>=0.180/core:outline',
  overrides: 'zed@>=0.180/core:overrides',
  redactions: 'zed@>=0.180/core:redactions',
  runnables: 'zed@>=0.180/core:runnables',
  structure: 'zed@>=0.180/core:structure',
  textobjects: 'zed@>=0.180/core:textobjects',
} as const;

const PULSAR_TARGET_BY_KIND = {
  folds: 'pulsar@>=1.131/core:folds',
  highlights: 'pulsar@>=1.131/core:highlights',
  indents: 'pulsar@>=1.131/core:indents',
  locals: 'pulsar@>=1.131/core:locals',
  tags: 'pulsar@>=1.131/core:tags',
} as const;

const parserQueryPacks: QueryPack[] = PARSER_RELEASES
  .filter(hasBundledQueries)
  .map((parser) => ({
    id: `pack-parser-${parser.id}`,
    name: `${parser.name} Parser Bundle`,
    package: parser.package,
    version: parser.version,
    languages: [parser.language],
    languageCount: 1,
    languageDetails: [
      {
        language: parser.language,
        queryKinds: [...parser.bundledQueryKinds],
      },
    ],
    owners: [...parser.owners],
    layout: {
      installRoot: '.',
      queryRoot: parserBundleQueryRoot(parser),
    },
    targets: parserBundleTargets(parser),
    queryKinds: [...parser.bundledQueryKinds],
    queries: parserBundleQueries(parser),
    parserCompatibility: {
      tested: [`${parser.package}@${parser.version}`],
    },
    summary: parserBundleSummary(parser),
  } satisfies QueryPack))
  .sort((left, right) => left.name.localeCompare(right.name));

const NVIM_AERIAL_OUTLINE_DETAILS = remapQueryKinds(
  NVIM_AERIAL_LANGUAGE_DETAILS,
  { aerial: 'outline' },
);

const coreQueryPacks: QueryPack[] = [
  {
    id: 'pack-neovim-treesitter-runtime',
    name: 'nvim-treesitter',
    package: 'github.com/nvim-treesitter/nvim-treesitter',
    version: NVIM_TREESITTER_VERSION,
    languages: NVIM_TREESITTER_LANGUAGES,
    languageCount: NVIM_TREESITTER_LANGUAGES.length,
    languageDetails: NVIM_TREESITTER_LANGUAGE_DETAILS,
    owners: ['nvim-treesitter'],
    layout: NVIM_RUNTIME_LAYOUT,
    targets: [...NEOVIM_CORE_TARGETS],
    queryKinds: collectQueryKinds(NVIM_TREESITTER_LANGUAGE_DETAILS),
    queries: runtimeQueries(collectQueryKinds(NVIM_TREESITTER_LANGUAGE_DETAILS), 'runtime/queries'),
    parserCompatibility: {},
    summary: `Queries live under runtime/queries for ${NVIM_TREESITTER_LANGUAGES.length} languages.`,
  },
  {
    id: 'pack-neovim-textobjects',
    name: 'nvim-treesitter-textobjects',
    package: 'github.com/nvim-treesitter/nvim-treesitter-textobjects',
    version: NVIM_TEXTOBJECTS_VERSION,
    languages: NVIM_TEXTOBJECTS_LANGUAGES,
    languageCount: NVIM_TEXTOBJECTS_LANGUAGES.length,
    languageDetails: NVIM_TEXTOBJECTS_LANGUAGE_DETAILS,
    owners: ['nvim-treesitter'],
    layout: STANDARD_LAYOUT,
    targets: ['neovim-textobjects@>=0.10/textobjects:select'],
    queryKinds: collectQueryKinds(NVIM_TEXTOBJECTS_LANGUAGE_DETAILS),
    queries: runtimeQueries(collectQueryKinds(NVIM_TEXTOBJECTS_LANGUAGE_DETAILS), 'queries'),
    parserCompatibility: {},
    summary: `Textobject queries live under queries/{language} for ${NVIM_TEXTOBJECTS_LANGUAGES.length} languages.`,
  },
  {
    id: 'pack-neovim-context',
    name: 'nvim-treesitter-context',
    package: 'github.com/nvim-treesitter/nvim-treesitter-context',
    version: NVIM_CONTEXT_VERSION,
    languages: NVIM_CONTEXT_LANGUAGES,
    languageCount: NVIM_CONTEXT_LANGUAGES.length,
    languageDetails: NVIM_CONTEXT_LANGUAGE_DETAILS,
    owners: ['nvim-treesitter'],
    layout: STANDARD_LAYOUT,
    targets: ['neovim-context@>=0.9/context:context'],
    queryKinds: collectQueryKinds(NVIM_CONTEXT_LANGUAGE_DETAILS),
    queries: runtimeQueries(collectQueryKinds(NVIM_CONTEXT_LANGUAGE_DETAILS), 'queries'),
    parserCompatibility: {},
    summary: `Context queries live under queries/{language} for ${NVIM_CONTEXT_LANGUAGES.length} languages.`,
  },
  {
    id: 'pack-neovim-aerial',
    name: 'aerial.nvim',
    package: 'github.com/stevearc/aerial.nvim',
    version: NVIM_AERIAL_VERSION,
    languages: NVIM_AERIAL_LANGUAGES,
    languageCount: NVIM_AERIAL_LANGUAGES.length,
    languageDetails: NVIM_AERIAL_OUTLINE_DETAILS,
    owners: ['stevearc'],
    layout: STANDARD_LAYOUT,
    targets: ['neovim-aerial@>=3.0/aerial:outline'],
    queryKinds: collectQueryKinds(NVIM_AERIAL_OUTLINE_DETAILS),
    queries: {
      outline: 'queries/{language}/aerial.scm',
    },
    parserCompatibility: {},
    summary: `Outline queries live under queries/{language}/aerial.scm for ${NVIM_AERIAL_LANGUAGES.length} languages.`,
  },
  {
    id: 'pack-neovim-matchup',
    name: 'vim-matchup',
    package: 'github.com/andymass/vim-matchup',
    version: NVIM_MATCHUP_VERSION,
    languages: NVIM_MATCHUP_LANGUAGES,
    languageCount: NVIM_MATCHUP_LANGUAGES.length,
    languageDetails: NVIM_MATCHUP_LANGUAGE_DETAILS,
    owners: ['andymass'],
    layout: {
      installRoot: '.',
      queryRoot: 'after/queries',
    },
    targets: ['neovim-matchup@>=0.8/matchup:matchup'],
    queryKinds: collectQueryKinds(NVIM_MATCHUP_LANGUAGE_DETAILS),
    queries: {
      matchup: 'after/queries/{language}/matchup.scm',
    },
    parserCompatibility: {},
    summary: `Tree-sitter matchup queries live under after/queries/{language}/matchup.scm for ${NVIM_MATCHUP_LANGUAGES.length} languages.`,
  },
  ...PULSAR_GRAMMAR_PACKS
    .map((pack) => ({
      id: `pack-pulsar-${pack.id}`,
      name: `Pulsar ${pack.name}`,
      package: 'github.com/pulsar-edit/pulsar',
      version: PULSAR_VERSION,
      languages: [pack.language],
      languageCount: 1,
      languageDetails: [
        {
          language: pack.language,
          queryKinds: [...pack.queryKinds],
        },
      ],
      owners: ['pulsar-edit'],
      layout: {
        installRoot: pack.installRoot,
        queryRoot: pack.queryRoot,
      },
      targets: pulsarTargets(pack.queryKinds),
      queryKinds: [...pack.queryKinds],
      queries: copyQueries(pack.queries),
      parserCompatibility: {},
      summary: `Built-in Pulsar grammar from ${pack.packagePath}.`,
    }) satisfies QueryPack)
    .sort((left, right) => left.name.localeCompare(right.name)),
  {
    id: 'pack-helix-runtime',
    name: 'Helix',
    package: 'github.com/helix-editor/helix',
    version: HELIX_RUNTIME_VERSION,
    languages: HELIX_RUNTIME_LANGUAGES,
    languageCount: HELIX_RUNTIME_LANGUAGES.length,
    languageDetails: HELIX_RUNTIME_LANGUAGE_DETAILS,
    owners: ['helix-editor'],
    layout: HELIX_RUNTIME_LAYOUT,
    targets: [...HELIX_CORE_TARGETS, 'lapce@>=0.4/core:highlights'],
    queryKinds: collectQueryKinds(HELIX_RUNTIME_LANGUAGE_DETAILS),
    queries: runtimeQueries(collectQueryKinds(HELIX_RUNTIME_LANGUAGE_DETAILS), 'runtime/queries'),
    parserCompatibility: {},
    summary: `Queries live under runtime/queries for ${HELIX_RUNTIME_LANGUAGES.length} languages.`,
  },
  {
    id: 'pack-zed-core-runtime',
    name: 'Zed Core Grammars',
    package: 'github.com/zed-industries/zed',
    version: ZED_VERSION,
    languages: ZED_CORE_LANGUAGES,
    languageCount: ZED_CORE_LANGUAGES.length,
    languageDetails: ZED_CORE_LANGUAGE_DETAILS,
    owners: ['zed-industries'],
    layout: ZED_CORE_LAYOUT,
    targets: zedTargets(collectQueryKinds(ZED_CORE_LANGUAGE_DETAILS)),
    queryKinds: collectQueryKinds(ZED_CORE_LANGUAGE_DETAILS),
    queries: runtimeQueries(collectQueryKinds(ZED_CORE_LANGUAGE_DETAILS), 'crates/grammars/src'),
    parserCompatibility: {},
    summary: `Queries live under crates/grammars/src for ${ZED_CORE_LANGUAGES.length} languages.`,
  },
  ...ZED_EXTENSION_PACKS
    .map((pack) => {
      const installRoot = `extensions/${pack.extension}`;
      const queryRoot = `${installRoot}/languages/${pack.language}`;

      return {
        id: `pack-zed-${pack.extension}-${pack.language}`,
        name: `Zed ${formatLanguageName(pack.language)} Extension`,
        package: 'github.com/zed-industries/zed',
        version: ZED_VERSION,
        languages: [pack.language],
        languageDetails: [
          {
            language: pack.language,
            ...(pack.parserLanguage ? { parserLanguage: pack.parserLanguage } : {}),
            queryKinds: [...pack.queryKinds],
          },
        ],
        owners: ['zed-industries'],
        layout: {
          installRoot,
          queryRoot,
        },
        targets: zedTargets(pack.queryKinds),
        queryKinds: [...pack.queryKinds],
        queries: fixedQueries(pack.queryKinds, queryRoot),
        parserCompatibility: {},
        summary: `Queries live under ${queryRoot}.`,
      } satisfies QueryPack;
    })
    .sort((left, right) => left.name.localeCompare(right.name)),
];

const queryPacks: QueryPack[] = [...coreQueryPacks, ...parserQueryPacks];
const parsers: ParserRelease[] = [
  ...PARSER_RELEASES,
  ...buildUnknownParsers(queryPacks, PARSER_RELEASES),
].sort((left, right) => left.name.localeCompare(right.name));

export const INDEX_DATA = {
  generatedAt: CATALOG_GENERATED_AT,
  parsers,
  queryPacks,
  targets: [
    {
      id: 'neovim@>=0.11/core:highlights',
      editor: 'neovim',
      module: 'core',
      feature: 'highlights',
      versionRange: '>=0.11',
      targetSchema: 'tsindex/target/neovim/v1',
      typed: {
        supportedQueryKinds: ['highlights', 'injections', 'locals', 'tags'],
        requiredQueryKinds: ['highlights'],
        queryFiles: ['highlights.scm', 'injections.scm', 'locals.scm', 'tags.scm'],
      },
    },
    {
      id: 'neovim@>=0.11/core:folds',
      editor: 'neovim',
      module: 'core',
      feature: 'folds',
      versionRange: '>=0.11',
      targetSchema: 'tsindex/target/neovim/v1',
      typed: {
        supportedQueryKinds: ['folds'],
        requiredQueryKinds: ['folds'],
        queryFiles: ['folds.scm'],
      },
    },
    {
      id: 'neovim@>=0.11/core:indents',
      editor: 'neovim',
      module: 'core',
      feature: 'indents',
      versionRange: '>=0.11',
      targetSchema: 'tsindex/target/neovim/v1',
      typed: {
        supportedQueryKinds: ['indents'],
        requiredQueryKinds: ['indents'],
        queryFiles: ['indents.scm'],
      },
    },
    {
      id: 'neovim-textobjects@>=0.10/textobjects:select',
      editor: 'neovim',
      module: 'textobjects',
      feature: 'select',
      versionRange: '>=0.10',
      targetSchema: 'tsindex/target/neovim-textobjects/v1',
      typed: {
        supportedQueryKinds: ['textobjects'],
        requiredQueryKinds: ['textobjects'],
        queryFiles: ['textobjects.scm'],
      },
    },
    {
      id: 'neovim-context@>=0.9/context:context',
      editor: 'neovim',
      module: 'context',
      feature: 'context',
      versionRange: '>=0.9',
      targetSchema: 'tsindex/target/neovim-context/v1',
      typed: {
        supportedQueryKinds: ['context'],
        requiredQueryKinds: ['context'],
        queryFiles: ['context.scm'],
      },
    },
    {
      id: 'neovim-aerial@>=3.0/aerial:outline',
      editor: 'neovim',
      module: 'aerial',
      feature: 'outline',
      versionRange: '>=3.0',
      targetSchema: 'tsindex/target/neovim-aerial/v1',
      typed: {
        supportedQueryKinds: ['outline'],
        requiredQueryKinds: ['outline'],
        queryFiles: ['aerial.scm'],
      },
    },
    {
      id: 'neovim-matchup@>=0.8/matchup:matchup',
      editor: 'neovim',
      module: 'matchup',
      feature: 'matchup',
      versionRange: '>=0.8',
      targetSchema: 'tsindex/target/neovim-matchup/v1',
      typed: {
        supportedQueryKinds: ['matchup'],
        requiredQueryKinds: ['matchup'],
        queryFiles: ['matchup.scm'],
      },
    },
    {
      id: 'pulsar@>=1.131/core:folds',
      editor: 'pulsar',
      module: 'core',
      feature: 'folds',
      versionRange: '>=1.131',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['folds'],
        installPath: 'packages/language-*/grammars/*',
        note: 'Declared per grammar via treeSitter.foldsQuery in Pulsar language packages.',
      },
    },
    {
      id: 'pulsar@>=1.131/core:highlights',
      editor: 'pulsar',
      module: 'core',
      feature: 'highlights',
      versionRange: '>=1.131',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['highlights'],
        installPath: 'packages/language-*/grammars/*',
        note: 'Declared per grammar via treeSitter.highlightsQuery in Pulsar language packages.',
      },
    },
    {
      id: 'pulsar@>=1.131/core:indents',
      editor: 'pulsar',
      module: 'core',
      feature: 'indents',
      versionRange: '>=1.131',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['indents'],
        installPath: 'packages/language-*/grammars/*',
        note: 'Declared per grammar via treeSitter.indentsQuery in Pulsar language packages.',
      },
    },
    {
      id: 'pulsar@>=1.131/core:locals',
      editor: 'pulsar',
      module: 'core',
      feature: 'locals',
      versionRange: '>=1.131',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['locals'],
        installPath: 'packages/language-*/grammars/*',
        note: 'Declared per grammar via treeSitter.localsQuery in Pulsar language packages.',
      },
    },
    {
      id: 'pulsar@>=1.131/core:tags',
      editor: 'pulsar',
      module: 'core',
      feature: 'tags',
      versionRange: '>=1.131',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['tags'],
        installPath: 'packages/language-*/grammars/*',
        note: 'Declared per grammar via treeSitter.tagsQuery in Pulsar language packages.',
      },
    },
    {
      id: 'helix@>=25.01/core:highlights',
      editor: 'helix',
      module: 'core',
      feature: 'highlights',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['highlights', 'injections', 'locals'],
        requiredQueryKinds: ['highlights'],
        queryFiles: ['highlights.scm', 'injections.scm', 'locals.scm'],
      },
    },
    {
      id: 'helix@>=25.01/core:folds',
      editor: 'helix',
      module: 'core',
      feature: 'folds',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['folds'],
        requiredQueryKinds: ['folds'],
        queryFiles: ['folds.scm'],
      },
    },
    {
      id: 'helix@>=25.01/core:indents',
      editor: 'helix',
      module: 'core',
      feature: 'indents',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['indents'],
        requiredQueryKinds: ['indents'],
        queryFiles: ['indents.scm'],
      },
    },
    {
      id: 'helix@>=25.01/core:rainbows',
      editor: 'helix',
      module: 'core',
      feature: 'rainbows',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['rainbows'],
        requiredQueryKinds: ['rainbows'],
        queryFiles: ['rainbows.scm'],
      },
    },
    {
      id: 'helix@>=25.01/core:tags',
      editor: 'helix',
      module: 'core',
      feature: 'tags',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['tags'],
        requiredQueryKinds: ['tags'],
        queryFiles: ['tags.scm'],
      },
    },
    {
      id: 'helix@>=25.01/core:textobjects',
      editor: 'helix',
      module: 'core',
      feature: 'textobjects',
      versionRange: '>=25.01',
      targetSchema: 'tsindex/target/helix/v1',
      typed: {
        supportedQueryKinds: ['textobjects'],
        requiredQueryKinds: ['textobjects'],
        queryFiles: ['textobjects.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:highlights',
      editor: 'zed',
      module: 'core',
      feature: 'highlights',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['highlights'],
        requiredQueryKinds: ['highlights'],
        queryFiles: ['highlights.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:brackets',
      editor: 'zed',
      module: 'core',
      feature: 'brackets',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['brackets'],
        requiredQueryKinds: ['brackets'],
        queryFiles: ['brackets.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:debugger',
      editor: 'zed',
      module: 'core',
      feature: 'debugger',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['debugger'],
        requiredQueryKinds: ['debugger'],
        queryFiles: ['debugger.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:folds',
      editor: 'zed',
      module: 'core',
      feature: 'folds',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['folds'],
        requiredQueryKinds: ['folds'],
        queryFiles: ['folds.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:indents',
      editor: 'zed',
      module: 'core',
      feature: 'indents',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['indents'],
        requiredQueryKinds: ['indents'],
        queryFiles: ['indents.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:injections',
      editor: 'zed',
      module: 'core',
      feature: 'injections',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['injections'],
        requiredQueryKinds: ['injections'],
        queryFiles: ['injections.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:outline',
      editor: 'zed',
      module: 'core',
      feature: 'outline',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['outline'],
        requiredQueryKinds: ['outline'],
        queryFiles: ['outline.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:overrides',
      editor: 'zed',
      module: 'core',
      feature: 'overrides',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['overrides'],
        requiredQueryKinds: ['overrides'],
        queryFiles: ['overrides.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:redactions',
      editor: 'zed',
      module: 'core',
      feature: 'redactions',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['redactions'],
        requiredQueryKinds: ['redactions'],
        queryFiles: ['redactions.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:runnables',
      editor: 'zed',
      module: 'core',
      feature: 'runnables',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['runnables'],
        requiredQueryKinds: ['runnables'],
        queryFiles: ['runnables.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:structure',
      editor: 'zed',
      module: 'core',
      feature: 'structure',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['structure'],
        requiredQueryKinds: ['structure'],
        queryFiles: ['structure.scm'],
      },
    },
    {
      id: 'zed@>=0.180/core:textobjects',
      editor: 'zed',
      module: 'core',
      feature: 'textobjects',
      versionRange: '>=0.180',
      targetSchema: 'tsindex/target/zed/v1',
      typed: {
        supportedQueryKinds: ['textobjects'],
        requiredQueryKinds: ['textobjects'],
        queryFiles: ['textobjects.scm'],
      },
    },
    {
      id: 'lapce@>=0.4/core:highlights',
      editor: 'lapce',
      module: 'core',
      feature: 'highlights',
      versionRange: '>=0.4',
      targetSchema: 'raw',
      raw: {
        supportedQueryKinds: ['highlights', 'injections'],
        installPath: 'queries/{language}/{highlights,injections}.scm',
        note: 'Lapce downloads Helix runtime queries and currently loads highlights.scm plus injections.scm.',
      },
    },
  ],
} satisfies IndexData;

function buildUnknownParsers(
  queryPacks: readonly QueryPack[],
  realParsers: readonly ParserRelease[],
): ParserRelease[] {
  const realParserLanguages = new Set(
    realParsers.map((parser) => normalizeLanguageId(parser.language)),
  );
  const realParserLanguagePackages = new Set(
    realParsers.map(
      (parser) => `${normalizeLanguageId(parser.language)}|${parser.package}`,
    ),
  );
  const unknownParsers = new Map<
    string,
    {
      language: string;
      packIds: Set<string>;
      testedParserRefs: Set<string>;
    }
  >();

  for (const pack of queryPacks) {
    for (const detail of packLanguageDetails(pack)) {
      const parserLanguage = detail.parserLanguage ?? detail.language;
      const normalizedLanguage = normalizeLanguageId(parserLanguage);
      const testedParserRefs = unique(detail.testedParserRefs ?? []);
      const hasRealParserMatch = testedParserRefs.length
        ? testedParserRefs.some((parserRef) =>
            realParserLanguagePackages.has(
              `${normalizedLanguage}|${parserPackageFromRef(parserRef)}`,
            ))
        : realParserLanguages.has(normalizedLanguage);

      if (hasRealParserMatch) {
        continue;
      }

      const entry = unknownParsers.get(normalizedLanguage) ?? {
        language: parserLanguage,
        packIds: new Set<string>(),
        testedParserRefs: new Set<string>(),
      };

      for (const parserRef of testedParserRefs) {
        entry.testedParserRefs.add(parserRef);
      }

      entry.packIds.add(pack.id);
      unknownParsers.set(normalizedLanguage, entry);
    }
  }

  return [...unknownParsers.entries()]
    .map(([normalizedLanguage, entry]) => ({
      id: `parser-unknown-${normalizedLanguage}`,
      name: `${formatLanguageName(entry.language)} Unknown Parser`,
      language: entry.language,
      package: 'unknown parser',
      synthetic: 'unknown' as const,
      syntheticPackIds: [...entry.packIds].sort((left, right) => left.localeCompare(right)),
      version: 'unknown',
      sourceCommit: 'unknown',
      lastUpdated: null,
      upstreamSemver: null,
      abi: null,
      owners: [],
      capabilities: {
        buildFromSource: false,
        customScanner: false,
        sourceArchive: false,
        wasm: false,
      },
      artifacts: [],
      bundledQueryKinds: [],
      bundledQueries: {},
      bundledQueryEditors: [],
      summary: unknownParserSummary(entry.testedParserRefs),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

function unknownParserSummary(testedParserRefs: ReadonlySet<string>): string {
  const testedPackages = unique(
    [...testedParserRefs].map((parserRef) => parserPackageFromRef(parserRef)),
  );

  if (!testedPackages.length) {
    return 'Synthetic placeholder for query sources with no matching parser release in the catalog.';
  }

  return `Synthetic placeholder for query sources that target ${testedPackages.join(', ')} but have no matching parser release in the catalog.`;
}

function collectQueryKinds(languageDetails: readonly QueryPackLanguage[]): string[] {
  return unique(languageDetails.flatMap(({ queryKinds }) => queryKinds));
}

function remapQueryKinds(
  languageDetails: readonly QueryPackLanguage[],
  mapping: Readonly<Record<string, string>>,
): QueryPackLanguage[] {
  return languageDetails.map((entry) => ({
    ...entry,
    queryKinds: unique(entry.queryKinds.map((queryKind) => mapping[queryKind] ?? queryKind)),
  }));
}

function runtimeQueries(queryKinds: readonly string[], queryRoot: string): Record<string, string> {
  return Object.fromEntries(
    queryKinds.map((queryKind) => [queryKind, `${queryRoot}/{language}/${queryKind}.scm`]),
  );
}

function parserBundleQueries(parser: ParserRelease): Record<string, QueryFiles> {
  return Object.fromEntries(
    Object.entries(parser.bundledQueries).map(([queryKind, paths]) => [queryKind, [...paths]]),
  );
}

function parserBundleTargets(parser: ParserRelease): string[] {
  const targets = new Set<string>();

  if (!parser.bundledQueryEditors.includes('neovim')) {
    return [];
  }

  for (const queryKind of parser.bundledQueryKinds) {
    if (['highlights', 'injections', 'locals', 'tags'].includes(queryKind)) {
      targets.add('neovim@>=0.11/core:highlights');
      continue;
    }

    if (queryKind === 'folds') {
      targets.add('neovim@>=0.11/core:folds');
      continue;
    }

    if (queryKind === 'indents') {
      targets.add('neovim@>=0.11/core:indents');
      continue;
    }

    if (queryKind === 'textobjects') {
      targets.add('neovim-textobjects@>=0.10/textobjects:select');
      continue;
    }

    if (queryKind === 'context') {
      targets.add('neovim-context@>=0.9/context:context');
      continue;
    }

    if (queryKind === 'outline') {
      targets.add('neovim-aerial@>=3.0/aerial:outline');
      continue;
    }

    if (queryKind === 'matchup') {
      targets.add('neovim-matchup@>=0.8/matchup:matchup');
    }
  }

  return [...targets];
}

function hasBundledQueries(parser: ParserRelease): boolean {
  return Object.keys(parser.bundledQueries).length > 0;
}

function parserBundleQueryRoot(parser: ParserRelease): string {
  const directories = unique(
    Object.values(parser.bundledQueries)
      .flat()
      .map(directoryName),
  );

  if (!directories.length) {
    return 'queries';
  }

  if (directories.length === 1) {
    return directories[0] ?? 'queries';
  }

  if (directories.every((directory) => directory.endsWith('/queries') || directory === 'queries')) {
    return '*/queries';
  }

  return 'repo-managed paths';
}

function parserBundleSummary(parser: ParserRelease): string {
  const queryKinds = parser.bundledQueryKinds.join(', ');
  return `${queryKinds} queries ship with the parser repository.`;
}

function directoryName(path: string): string {
  const index = path.lastIndexOf('/');
  return index === -1 ? '.' : path.slice(0, index);
}

function fixedQueries(queryKinds: readonly string[], queryRoot: string): Record<string, string> {
  return Object.fromEntries(
    queryKinds.map((queryKind) => [queryKind, `${queryRoot}/${queryKind}.scm`]),
  );
}

function copyQueries(queries: Readonly<Record<string, QueryFiles>>): Record<string, QueryFiles> {
  return Object.fromEntries(
    Object.entries(queries).map(([queryKind, queryFiles]) => [
      queryKind,
      Array.isArray(queryFiles) ? [...queryFiles] : queryFiles,
    ]),
  );
}

function pulsarTargets(queryKinds: readonly string[]): string[] {
  return unique(
    queryKinds.flatMap((queryKind) => {
      const target = PULSAR_TARGET_BY_KIND[queryKind as keyof typeof PULSAR_TARGET_BY_KIND];
      return target ? [target] : [];
    }),
  );
}

function zedTargets(queryKinds: readonly string[]): string[] {
  return unique(
    queryKinds.flatMap((queryKind) => {
      const target = ZED_TARGET_BY_KIND[queryKind as keyof typeof ZED_TARGET_BY_KIND];
      return target ? [target] : [];
    }),
  );
}

function packLanguageDetails(pack: QueryPack): QueryPackLanguage[] {
  if (pack.languageDetails?.length) {
    return pack.languageDetails;
  }

  return pack.languages.map((language) => ({
    language,
    queryKinds: pack.queryKinds,
  }));
}

function normalizeLanguageId(language: string): string {
  const languageAliases = {
    'c-sharp': 'c_sharp',
    'common-lisp': 'commonlisp',
    'markdown.inline': 'markdown_inline',
    'ocaml-interface': 'ocaml_interface',
    'php-only': 'php_only',
    protobuf: 'proto',
  } as const;
  const normalized = language
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return languageAliases[normalized as keyof typeof languageAliases] ?? normalized;
}

function parserPackageFromRef(ref: string): string {
  return ref.split('@')[0] ?? ref;
}

function unique(items: readonly string[]): string[] {
  return [...new Set(items)].sort((left, right) => left.localeCompare(right));
}

function formatLanguageName(language: string): string {
  return language
    .split(/[_\-.]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
