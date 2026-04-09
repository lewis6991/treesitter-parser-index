import { INDEX_DATA } from './index-data.js';
import type {
  EditorTarget,
  IndexData,
  ParserArtifact,
  ParserRelease,
  QueryPack,
  QueryPackLanguage,
} from './types.js';

type CompatibilityRank = 0 | 1 | 2 | 3;
type ActiveFilters = Pick<FilterState, 'search' | 'language' | 'editor' | 'queryKind' | 'install' | 'scanner' | 'release' | 'abi'>;
type FilterControlKey = Exclude<keyof ActiveFilters, 'search' | 'language'>;

const LANGUAGE_ALIASES: Record<string, string> = {
  'c-sharp': 'c_sharp',
  'common-lisp': 'commonlisp',
  'markdown.inline': 'markdown_inline',
  'ocaml-interface': 'ocaml_interface',
  'php-only': 'php_only',
  protobuf: 'proto',
};
const ACTIVE_PARSER_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const STALE_PARSER_AGE_MS = 730 * 24 * 60 * 60 * 1000;
const SEARCH_INPUT_DEBOUNCE_MS = 80;
const SEARCH_FILTER_STRIP_DEBOUNCE_MS = 180;
const parserCompactDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
});
const parserFullDateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
const SHARED_LIBRARY_ARTIFACT_FORMATS = ['so', 'dylib', 'dll'] as const;

interface FilterState {
  search: string;
  language: string;
  editor: string;
  queryKind: string;
  install: 'all' | 'wasm' | 'shared-library' | 'source-archive' | 'build-from-source';
  scanner: 'all' | 'custom' | 'none';
  release: 'all' | 'semver' | 'none';
  abi: 'all' | 'none' | `${number}`;
  selectedParserId: string | null;
  selectedQueryId: string | null;
  selectedCoverage: CoverageSelection | null;
}

interface RankedPack {
  pack: QueryPack;
  rank: CompatibilityRank;
}

interface CoverageSelection {
  editor: string;
  queryKind: string;
}

type CoverageContributor =
  | {
      type: 'parser';
      parser: ParserRelease;
      languages: string[];
    }
  | {
      type: 'pack';
      pack: QueryPack;
      languages: string[];
    };

interface FilterOption {
  value: string;
  label: string;
}

interface ChipAction {
  dataset: Record<string, string>;
  isActive?: boolean;
  dismissible?: boolean;
}

interface FilterControlSpec {
  key: FilterControlKey;
  label: string;
  choices: () => FilterOption[];
  className: (value: string) => string;
}

interface BuildMeta {
  label?: string;
  commitUrl?: string | null;
}

interface ExplorerRenderState {
  parsers: ParserRelease[];
  selectedParser: ParserRelease | null;
  rankedPacks: RankedPack[];
}

const data: IndexData = INDEX_DATA;
const targetIndex = new Map<string, EditorTarget>(
  data.targets.map((target) => [target.id, target]),
);
const parserLanguageIndex = (() => {
  const index = new Map<string, Set<string>>();

  for (const pack of data.queryPacks) {
    for (const entry of packLanguageDetails(pack)) {
      if (!entry.parserLanguage) {
        continue;
      }

      const language = normalizeLanguageId(entry.language);
      const parserLanguage = normalizeLanguageId(entry.parserLanguage);

      if (language === parserLanguage) {
        continue;
      }

      const parserLanguages = index.get(language) ?? new Set<string>();
      parserLanguages.add(parserLanguage);
      index.set(language, parserLanguages);
    }
  }

  return new Map(
    [...index.entries()].map(([language, parserLanguages]) => [
      language,
      [...parserLanguages].sort(),
    ]),
  );
})();
const sortedParsers = [...data.parsers].sort((left, right) => left.name.localeCompare(right.name));
const parserByRefIndex = new Map<string, ParserRelease>(
  data.parsers.map((parser) => [`${parser.package}@${parser.version}`, parser] as const),
);
const allLanguages = unique([
  ...data.parsers.map((parser) => normalizeLanguageId(parser.language)),
  ...data.queryPacks.flatMap((pack) => packLanguageList(pack).map(normalizeLanguageId)),
]).sort();
const allEditors = unique(data.targets.map((target) => target.editor)).sort();
const allQueryKinds = unique([
  ...data.parsers.flatMap((parser) => parser.bundledQueryKinds),
  ...data.queryPacks.flatMap((pack) => pack.queryKinds),
]).sort();
const abiFilterChoices = unique(
  data.parsers
    .map((parser) => parser.abi)
    .filter((abi): abi is number => abi !== null)
    .sort((left, right) => left - right)
    .map(String),
);
const FILTER_CONTROL_SPECS: readonly FilterControlSpec[] = [
  {
    key: 'editor',
    label: 'Editor',
    choices: () => allEditors.map((value) => ({
      value,
      label: labelize(value),
    })),
    className: (value) => value === 'all'
      ? 'chip chip-active-filter chip-outline'
      : `chip chip-active-filter chip-outline chip-editor chip-editor-${editorClassSuffix(value)}`,
  },
  {
    key: 'queryKind',
    label: 'Kind',
    choices: () => allQueryKinds.map((value) => ({
      value,
      label: labelize(value),
    })),
    className: () => 'chip chip-active-filter chip-outline',
  },
  {
    key: 'install',
    label: 'Install',
    choices: () => [
      { value: 'wasm', label: 'Wasm' },
      { value: 'shared-library', label: 'Shared Library' },
      { value: 'source-archive', label: 'Source Archive' },
      { value: 'build-from-source', label: 'Build From Source' },
    ],
    className: (value) => value === 'wasm' || value === 'shared-library'
      ? 'chip chip-active-filter chip-accent'
      : 'chip chip-active-filter chip-outline',
  },
  {
    key: 'scanner',
    label: 'Scanner',
    choices: () => [
      { value: 'custom', label: 'Custom Scanner' },
      { value: 'none', label: 'No Custom Scanner' },
    ],
    className: (value) => value === 'custom'
      ? 'chip chip-active-filter chip-danger'
      : 'chip chip-active-filter chip-outline',
  },
  {
    key: 'release',
    label: 'Release',
    choices: () => [
      { value: 'semver', label: 'Semver Release' },
      { value: 'none', label: 'No Semver Release' },
    ],
    className: (value) => value === 'semver'
      ? 'chip chip-active-filter chip-success'
      : value === 'none'
        ? 'chip chip-active-filter chip-danger'
        : 'chip chip-active-filter chip-outline',
  },
  {
    key: 'abi',
    label: 'ABI',
    choices: () => [
      { value: 'none', label: 'No ABI' },
      ...abiFilterChoices.map((value) => ({
        value,
        label: `ABI ${value}`,
      })),
    ],
    className: () => 'chip chip-active-filter chip-outline',
  },
];
const FILTER_CONTROL_SPEC_BY_KEY = new Map(
  FILTER_CONTROL_SPECS.map((spec) => [spec.key, spec] as const),
);
const FILTER_CLICK_SELECTOR = [
  '[data-filter-search]',
  ...FILTER_CONTROL_SPECS.map((spec) => `[data-filter-${filterDataSuffix(spec.key)}]`),
  '[data-clear-all-filters]',
].join(', ');
const parserSearchIndex = new Map(
  sortedParsers.map((parser) => [parser.id, getParserSearchText(parser).toLowerCase()]),
);
const packSearchIndex = new Map(
  data.queryPacks.map((pack) => [pack.id, getPackSearchText(pack).toLowerCase()]),
);
const allRankedPacks = data.queryPacks
  .map((pack) => ({ pack, rank: 0 as CompatibilityRank }))
  .sort(compareRankedPacks);
const compatiblePacksByParserId = new Map(
  sortedParsers.map((parser) => [parser.id, buildCompatiblePacks(parser)]),
);
const packSearchTextByParserId = new Map<string, string>();
const packSearchMatchByParserId = new Map<string, boolean>();
// Explorer clicks keep the filters stable, so reuse the expensive filtered lists until a filter changes.
const filteredParserCache = new Map<string, ParserRelease[]>();
const rankedPackCache = new Map<string, RankedPack[]>();
let cachedBaseFilterKey = '';
let pendingSearchRenderTimer: number | null = null;
let pendingFilterStripRenderTimer: number | null = null;

const state: FilterState = {
  search: '',
  language: 'all',
  editor: 'all',
  queryKind: 'all',
  install: 'all',
  scanner: 'all',
  release: 'all',
  abi: 'all',
  selectedParserId: null,
  selectedQueryId: null,
  selectedCoverage: null,
};

const elements = {
  searchInput: queryOptionalElement<HTMLInputElement>('#search-input'),
  activeFilters: queryOptionalElement<HTMLDivElement>('#active-filters'),
  siteRevision: queryOptionalElement<HTMLAnchorElement>('#site-revision'),
  explorerTree: queryOptionalElement<HTMLDivElement>('#explorer-tree'),
  parserCountBadge: queryOptionalElement<HTMLSpanElement>('#parser-count-badge'),
  queryCountBadge: queryOptionalElement<HTMLSpanElement>('#query-count-badge'),
  coverageMatrix: queryOptionalElement<HTMLDivElement>('#coverage-matrix'),
  coverageDetail: queryOptionalElement<HTMLDivElement>('#coverage-detail'),
};

init();

function init(): void {
  restoreStateFromUrl();
  wireEvents();
  wireSectionNav();
  syncPreservedPageLinks(window.location.search);
  void renderSiteRevision();
  renderFull();
}

function syncFilterInputs(): void {
  const searchInput = elements.searchInput;

  if (!searchInput) {
    return;
  }

  searchInput.value = state.search;
}

async function renderSiteRevision(): Promise<void> {
  const siteRevision = elements.siteRevision;

  if (!siteRevision) {
    return;
  }

  try {
    const response = await fetch('dist/build-meta.json', { cache: 'no-store' });

    if (!response.ok) {
      return;
    }

    const buildMeta = await response.json() as BuildMeta;

    if (!buildMeta.label) {
      return;
    }

    siteRevision.textContent = buildMeta.label;
    siteRevision.title = `Site revision ${buildMeta.label}`;

    if (buildMeta.commitUrl) {
      siteRevision.href = buildMeta.commitUrl;
      siteRevision.target = '_blank';
      siteRevision.rel = 'noreferrer noopener';
    } else {
      siteRevision.removeAttribute('href');
      siteRevision.removeAttribute('target');
      siteRevision.removeAttribute('rel');
    }

    siteRevision.hidden = false;
  } catch {
    // Keep the revision hidden when build metadata is unavailable.
  }
}

function wireEvents(): void {
  const searchInput = elements.searchInput;
  const activeFilters = elements.activeFilters;
  const explorerTree = elements.explorerTree;
  const coverageMatrix = elements.coverageMatrix;

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value.trim().toLowerCase();
      scheduleSearchRender();
    });
  }

  if (activeFilters) {
    activeFilters.addEventListener('click', (event) => {
      clickFilterAction(event);
    });
    activeFilters.addEventListener('change', (event) => {
      changeActiveFilterControl(event);
    });
  }

  if (explorerTree) {
    explorerTree.addEventListener('click', (event) => {
      if (clickFilterAction(event)) {
        return;
      }

      const queryId = clickDataset(event, 'queryId');

      if (queryId) {
        toggleSelectedQuery(queryId);
        renderExplorerSelection();
        return;
      }

      const parserId = clickDataset(event, 'parserId');

      if (!parserId) {
        return;
      }

      toggleSelectedParser(parserId);
      renderExplorerSelection();
    });

    explorerTree.addEventListener('keydown', (event) => {
      const queryId = keyDataset(event, 'queryId');

      if (queryId) {
        toggleSelectedQuery(queryId);
        renderExplorerSelection();
        return;
      }

      const parserId = keyDataset(event, 'parserId');

      if (!parserId) {
        return;
      }

      toggleSelectedParser(parserId);
      renderExplorerSelection();
    });
  }

  if (coverageMatrix) {
    coverageMatrix.addEventListener('click', (event) => {
      const selection = clickCoverageSelection(event);

      if (!selection) {
        return;
      }

      state.selectedCoverage = selection;
      renderCoverage();
      syncUrlState();
    });

    coverageMatrix.addEventListener('keydown', (event) => {
      const selection = keyCoverageSelection(event);

      if (!selection) {
        return;
      }

      state.selectedCoverage = selection;
      renderCoverage();
      syncUrlState();
    });
  }

}

function wireSectionNav(): void {
  const sidebarLinks = getSidebarLinks();

  if (!sidebarLinks.length) {
    return;
  }

  const sections = sidebarLinks
    .map((link) => {
      const targetId = link.dataset['navTarget'];

      if (!targetId) {
        return null;
      }

      return document.getElementById(targetId);
    })
    .filter((section): section is HTMLElement => section instanceof HTMLElement);

  const initialSectionId = window.location.hash.slice(1) || sections[0]?.id || 'intro';
  setActiveSectionLink(initialSectionId);

  window.addEventListener('hashchange', () => {
    setActiveSectionLink(window.location.hash.slice(1) || sections[0]?.id || 'intro');
  });

  if (typeof IntersectionObserver === 'undefined' || !sections.length) {
    return;
  }

  let activeSectionId = initialSectionId;

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => {
          if (right.intersectionRatio !== left.intersectionRatio) {
            return right.intersectionRatio - left.intersectionRatio;
          }

          return left.boundingClientRect.top - right.boundingClientRect.top;
        });

      const nextSectionId = visibleEntries[0]?.target.id;

      if (!nextSectionId || nextSectionId === activeSectionId) {
        return;
      }

      activeSectionId = nextSectionId;
      setActiveSectionLink(nextSectionId);
    },
    {
      rootMargin: '-18% 0px -60% 0px',
      threshold: [0.15, 0.35, 0.6],
    },
  );

  for (const section of sections) {
    observer.observe(section);
  }
}

function renderFull(options: { deferFilterStrip?: boolean } = {}): void {
  cancelScheduledSearchRender();
  cancelScheduledFilterStripRender();
  const filters = getActiveFilters();
  syncFilterInputs();
  if (options.deferFilterStrip) {
    scheduleFilterStripRender();
  } else {
    renderActiveFilterStrip();
  }

  if (hasExplorerPanel()) {
    syncRenderCaches(filters);
    renderExplorerPanels(prepareExplorerRenderState(filters));
  }

  if (hasCoveragePanel()) {
    renderCoverage();
  }

  syncUrlState();
}

function renderExplorerSelection(): void {
  cancelScheduledSearchRender();
  if (!hasExplorerPanel()) {
    return;
  }

  const filters = getActiveFilters();
  syncRenderCaches(filters);
  renderExplorerPanels(prepareExplorerRenderState(filters));
  syncUrlState();
}

// Search is the only control that can fire on every keystroke, so batch it slightly.
function scheduleSearchRender(): void {
  cancelScheduledSearchRender();
  cancelScheduledFilterStripRender();
  pendingSearchRenderTimer = window.setTimeout(() => {
    pendingSearchRenderTimer = null;
    renderFull({ deferFilterStrip: true });
  }, SEARCH_INPUT_DEBOUNCE_MS);
}

function cancelScheduledSearchRender(): void {
  if (pendingSearchRenderTimer === null) {
    return;
  }

  window.clearTimeout(pendingSearchRenderTimer);
  pendingSearchRenderTimer = null;
}

function scheduleFilterStripRender(): void {
  cancelScheduledFilterStripRender();
  pendingFilterStripRenderTimer = window.setTimeout(() => {
    pendingFilterStripRenderTimer = null;
    renderActiveFilterStrip();
  }, SEARCH_FILTER_STRIP_DEBOUNCE_MS);
}

function cancelScheduledFilterStripRender(): void {
  if (pendingFilterStripRenderTimer === null) {
    return;
  }

  window.clearTimeout(pendingFilterStripRenderTimer);
  pendingFilterStripRenderTimer = null;
}

function renderExplorerPanels(explorerState: ExplorerRenderState): void {
  renderExplorerTree(explorerState.parsers, explorerState.rankedPacks);
}

function prepareExplorerRenderState(filters: ActiveFilters): ExplorerRenderState {
  const parsers = getFilteredParsers(filters);

  if (state.selectedParserId !== null && !parsers.some((parser) => parser.id === state.selectedParserId)) {
    state.selectedParserId = null;
    state.selectedQueryId = null;
  }

  const selectedParser = parsers.find((parser) => parser.id === state.selectedParserId) ?? null;
  const rankedPacks = selectedParser ? getRankedPacks(selectedParser, filters) : [];

  if (!rankedPacks.some((entry) => entry.pack.id === state.selectedQueryId)) {
    state.selectedQueryId = null;
  }

  return {
    parsers,
    selectedParser,
    rankedPacks,
  };
}

function toggleSelectedParser(parserId: string): void {
  if (state.selectedParserId === parserId) {
    state.selectedParserId = null;
    state.selectedQueryId = null;
    return;
  }

  state.selectedParserId = parserId;
  state.selectedQueryId = null;
}

function toggleSelectedQuery(queryId: string): void {
  state.selectedQueryId = state.selectedQueryId === queryId ? null : queryId;
}

function renderExplorerTree(parsers: ParserRelease[], rankedPacks: RankedPack[]): void {
  const explorerTree = elements.explorerTree;
  const parserCountBadge = elements.parserCountBadge;
  const queryCountBadge = elements.queryCountBadge;

  if (!explorerTree || !parserCountBadge || !queryCountBadge) {
    return;
  }

  parserCountBadge.textContent = `${parsers.length} parsers`;
  queryCountBadge.textContent = `${rankedPacks.length} sources`;

  if (!parsers.length) {
    explorerTree.innerHTML = emptyState(
      'No parser releases match the current filters.',
      'Adjust the active filters to widen the parser list.',
    );
    return;
  }

  explorerTree.innerHTML = parsers
    .map((parser) => {
      const isSelected = parser.id === state.selectedParserId;
      const freshness = parserFreshnessState(parser);
      const chipFilters = {
        ...getActiveFilters(),
        search: '',
        editor: 'all' as const,
      };
      const matchingPacks = isSelected ? rankedPacks : getRankedPacks(parser);
      const chipPacks = getRankedPacks(parser, chipFilters);
      const compatiblePacks = isSelected ? matchingPacks : [];
      const matchingEditors = unique(
        chipPacks.flatMap(({ pack }) => packEditors(pack)),
      );
      const inlineEditorChips = matchingEditors.map(renderEditorFilterChip).join('');
      const signalChips = renderParserSignalChips(parser).join('');
      const inlineChipGroups = [
        inlineEditorChips
          ? `<div class="tree-item-inline-chips chip-row">${inlineEditorChips}</div>`
          : '',
        signalChips
          ? `<div class="tree-item-inline-signals chip-row">${signalChips}</div>`
          : '',
      ]
        .filter(Boolean)
        .join('');
      const freshnessClass = freshness === 'neutral' ? '' : `is-${freshness}`;

      return `
        <section class="tree-node">
          <article class="tree-item tree-item-parser ${isSelected ? 'is-selected' : ''} ${freshnessClass}" data-parser-id="${escapeHtml(parser.id)}" role="button" tabindex="0" aria-label="${escapeHtml(`Select parser release ${parser.name}`)}">
            <div class="tree-item-head tree-item-head-parser">
              <div class="tree-item-main">
                <div class="tree-item-title-row">
                  <h4>${escapeHtml(parser.name)}</h4>
                  ${inlineChipGroups ? `<div class="tree-item-chip-groups">${inlineChipGroups}</div>` : ''}
                </div>
                <div class="tree-item-title-package">${renderPackageLink(parser.package)}</div>
              </div>
              <div class="tree-item-side">
                ${renderParserVersionToken(parser)}
                <span>commit ${escapeHtml(renderParserSourceCommit(parser))}</span>
                <span class="tree-item-meta-freshness ${freshnessClass}">${escapeHtml(renderParserLastUpdated(parser, 'compact'))}</span>
              </div>
            </div>
          </article>
          ${
            isSelected
              ? `
                <div class="tree-selection-detail tree-selection-detail-parser">
                  ${renderParserDetail(parser)}
                </div>
                <div class="tree-subsection-heading">
                  <h4>Query Sources</h4>
                </div>
                <div class="tree-children">
                  ${
                    compatiblePacks.length
                      ? compatiblePacks.map(({ pack, rank }) => renderTreePack(pack, rank, parser)).join('')
                      : '<div class="tree-empty subtle">No matching query sources for the current filters.</div>'
                  }
                </div>
              `
              : ''
          }
        </section>
      `;
    })
    .join('');
}

function renderTreePack(pack: QueryPack, rank: CompatibilityRank, parser: ParserRelease | null): string {
  const isSelected = pack.id === state.selectedQueryId;
  const resolvedLanguage = resolvePackLanguage(pack, parser);
  const visibleQueryKinds = visibleQueryKindsForPack(pack, resolvedLanguage);
  const compatibilityToken = compatibilityTokenLabel(pack, parser, rank);
  const filterChips = renderTreePackSupportChips(visibleQueryKinds, pack.targets);
  const disclosureLabel = isSelected ? '▾' : '▸';

  return `
    <section class="tree-node tree-node-pack">
      <article class="tree-item tree-item-pack ${isSelected ? 'is-selected' : ''}" data-query-id="${escapeHtml(pack.id)}" role="button" tabindex="0" aria-label="${escapeHtml(`Select query source ${pack.name}`)}">
        <div class="tree-item-head">
          <div>
            <div class="tree-item-title-row">
              <span class="tree-item-disclosure">${escapeHtml(disclosureLabel)}</span>
              <h4>${escapeHtml(pack.name)}</h4>
              ${filterChips ? `<div class="tree-item-chip-groups">${filterChips}</div>` : ''}
            </div>
          </div>
          <div class="tree-item-side tree-item-side-pack">
            ${renderCompatibilityBadge(rank, 'tree-item-token', compatibilityToken)}
          </div>
        </div>
        <div class="tree-item-meta">
          <span class="tree-item-summary-inline">${renderPackageLink(pack.package)}</span>
          <span>${escapeHtml(packScopeLabel(pack))}</span>
          <span>${escapeHtml(pack.layout.queryRoot)}</span>
        </div>
      </article>
      ${
        isSelected
          ? `
            <div class="tree-selection-detail tree-selection-detail-pack">
              ${renderQueryDetail({ pack, rank }, parser)}
            </div>
          `
          : ''
      }
    </section>
  `;
}

function renderTreePackSupportChips(
  queryKinds: readonly string[],
  targetIds: readonly string[],
): string {
  return queryKinds
    .map((queryKind) =>
      renderSupportChipsForQueryKind(
        queryKind,
        filterTargetsForQueryKinds(targetIds, [queryKind]),
        { interactive: true },
      ))
    .join('');
}

function renderCoverage(): void {
  const coverageMatrix = elements.coverageMatrix;
  const coverageDetail = elements.coverageDetail;

  if (!coverageMatrix || !coverageDetail) {
    return;
  }

  const packs = data.queryPacks.filter((pack) => matchesPackFilters(pack));
  const parsers = getCoverageParsers();
  const kinds = state.queryKind === 'all'
    ? unique([
        ...packs.flatMap((pack) => pack.queryKinds),
        ...parsers.flatMap((parser) => parser.bundledQueryKinds),
      ]).sort()
    : [state.queryKind].filter(
        (queryKind) =>
          packs.some((pack) => pack.queryKinds.includes(queryKind)) ||
          parsers.some((parser) => parser.bundledQueryKinds.includes(queryKind)),
      );
  const editors = unique(
    packs
      .flatMap((pack) => pack.targets)
      .map((targetId) => targetIndex.get(targetId)?.editor ?? '')
      .filter((editor): editor is string => Boolean(editor)),
  ).filter((editor) => kinds.some((kind) => countCoverageLanguages(packs, parsers, editor, kind) > 0));
  const coverageColumns = [...editors, 'unknown'];
  const hasCoverage = coverageColumns.some((column) =>
    kinds.some((kind) => countCoverageLanguages(packs, parsers, column, kind) > 0),
  );

  if (!kinds.length || !hasCoverage) {
    coverageMatrix.innerHTML = emptyState(
      'No coverage to map from the current filters.',
      'Widen the filters to bring the matrix back.',
    );
    coverageDetail.innerHTML = '';
    return;
  }

  const firstSelection = firstCoverageSelection(packs, parsers, coverageColumns, kinds);

  if (
    !state.selectedCoverage ||
    !coverageColumns.includes(state.selectedCoverage.editor) ||
    !kinds.includes(state.selectedCoverage.queryKind) ||
    countCoverageLanguages(
      packs,
      parsers,
      state.selectedCoverage.editor,
      state.selectedCoverage.queryKind,
    ) === 0
  ) {
    state.selectedCoverage = firstSelection;
  }

  coverageMatrix.innerHTML = `
    <table class="matrix-table">
      <thead>
        <tr>
          <th scope="col">Kind</th>
          ${coverageColumns
            .map((column) => `<th scope="col">${escapeHtml(labelize(column))}</th>`)
            .join('')}
        </tr>
      </thead>
      <tbody>
        ${kinds
          .map((kind) => {
            const cells = coverageColumns
              .map((column) => {
                const count = countCoverageLanguages(packs, parsers, column, kind);
                const isSelected =
                  state.selectedCoverage?.editor === column &&
                  state.selectedCoverage?.queryKind === kind;

                return `
                  <td class="matrix-value ${count ? 'is-hot' : 'is-cold'} ${isSelected ? 'is-selected' : ''}">
                    ${
                      count
                        ? `
                          <button
                            type="button"
                            class="matrix-button"
                            data-coverage-editor="${escapeHtml(column)}"
                            data-coverage-kind="${escapeHtml(kind)}"
                            aria-label="${escapeHtml(`Show ${labelize(kind)} coverage entries for ${labelize(column)}`)}"
                          >
                            ${escapeHtml(String(count))}
                          </button>
                        `
                        : '<span class="matrix-empty">—</span>'
                    }
                  </td>
                `;
              })
              .join('');

            return `
              <tr>
                <th scope="row" class="matrix-kind">${escapeHtml(kind)}</th>
                ${cells}
              </tr>
            `;
          })
          .join('')}
      </tbody>
    </table>
  `;

  coverageDetail.innerHTML = state.selectedCoverage
    ? renderCoverageDetail(
        state.selectedCoverage,
        getCoverageContributors(
          packs,
          parsers,
          state.selectedCoverage.editor,
          state.selectedCoverage.queryKind,
        ),
        countCoverageLanguages(
          packs,
          parsers,
          state.selectedCoverage.editor,
          state.selectedCoverage.queryKind,
        ),
      )
    : '';
}

function renderParserDetail(parser: ParserRelease): string {
  const freshness = parserFreshnessState(parser);
  const freshnessClass = freshness === 'neutral' ? '' : `metric-value-${freshness}`;
  const updatedClass = freshnessClass ? ` class="${freshnessClass}"` : '';
  const parserFacts = [
    `Version ${renderParserVersionValue(parser)}`,
    `Updated <span${updatedClass}>${escapeHtml(renderParserLastUpdated(parser, 'full'))}</span>`,
    parser.abi === null ? '' : `ABI ${escapeHtml(renderParserAbi(parser))}`,
  ]
    .filter(Boolean)
    .join(' · ');

  return `
    <div class="parser-detail">
      <div class="detail-header">
        <p class="subtle detail-note">${parserFacts}</p>
      </div>

      <section class="detail-block detail-block-primary parser-artifacts">
        <h4>Artifacts</h4>
        <div class="parser-artifact-links">
          ${renderParserArtifacts(parser)}
        </div>
      </section>
    </div>
  `;
}

function renderQueryDetail(
  entry: RankedPack,
  parser: ParserRelease | null,
): string {
  const { pack, rank } = entry;
  const compatibility = pack.parserCompatibility;
  const resolvedLanguage = resolvePackLanguage(pack, parser);
  const exactTestedParserRefs = unique([
    ...(resolvedLanguage
      ? packLanguageDetails(pack).find(
          (detail) => normalizeLanguageId(detail.language) === normalizeLanguageId(resolvedLanguage),
        )?.testedParserRefs ?? []
      : []),
    ...(compatibility.tested ?? []),
  ]);
  const exactTestedParserToken = summarizeVersionLabels(
    parser
      ? parserVersionsFromRefs(exactTestedParserRefs, parser.package)
      : parserVersionsFromRefs(exactTestedParserRefs),
  );
  const sharesTestedParserSource = Boolean(
    parser && exactTestedParserRefs.some((testedParserRef) => parserPackageFromRef(testedParserRef) === parser.package),
  );
  const visibleQueryKinds = visibleQueryKindsForPack(pack, resolvedLanguage);
  const visibleQueryRows = visibleQueryKinds.flatMap((kind) => {
    const resolvedPaths = resolvedQueryFiles(pack, kind, resolvedLanguage);

    if (!resolvedPaths.length) {
      return [];
    }

    return [{
      queryKind: kind,
      resolvedPaths,
      targetIds: filterTargetsForQueryKinds(pack.targets, [kind]),
    }];
  });
  const compatibilityNote = exactTestedParserRefs.length
    ? [
        exactTestedParserRefs.length === 1
          ? `Targets parser ${exactTestedParserToken}.`
          : `Publishes ${exactTestedParserRefs.length} exact parser pins for this language.`,
        parser && sharesTestedParserSource && rank !== 3
          ? 'The selected parser is from the same repository but a different revision.'
          : '',
      ]
        .filter(Boolean)
        .join(' ')
    : compatibility.semver
      ? `Declares parser support ${compatibility.semver}.`
      : '';

  return `
    <div class="query-detail">
      <div class="detail-header">
        ${
          compatibilityNote
            ? `<p class="subtle detail-note">${escapeHtml(compatibilityNote)}</p>`
            : ''
        }
      </div>

      <section class="detail-block detail-block-primary">
        <h4>Files${resolvedLanguage ? ` for ${escapeHtml(labelize(resolvedLanguage))}` : ''}</h4>
        ${
          visibleQueryRows.length
            ? `
              <div class="query-file-table">
                <div class="query-file-table-head" aria-hidden="true">
                  <span>Support</span>
                  <span>Files</span>
                </div>
                <div class="query-file-table-files">
                  ${visibleQueryRows
                    .map(
                      ({ queryKind, resolvedPaths, targetIds }) => `
                        <div class="query-file-row">
                          <div class="query-file-meta">
                            ${renderQueryFileSupportTags(queryKind, targetIds)}
                          </div>
                          <div class="query-file-paths">
                            ${resolvedPaths
                              .map((resolvedPath) => `<div class="query-file-path">${renderQueryFileReference(pack, resolvedPath)}</div>`)
                              .join('')}
                          </div>
                        </div>
                      `,
                    )
                    .join('')}
                </div>
              </div>
            `
            : '<p class="subtle detail-note">No query files are published for the current language selection.</p>'
        }
      </section>
    </div>
  `;
}

function getFilteredParsers(filters: ActiveFilters = getActiveFilters()): ParserRelease[] {
  const cacheKey = filterCacheKey(filters);
  const cached = filteredParserCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const parsers = sortedParsers.filter((parser) => parserMatchesFilters(parser, filters));
  filteredParserCache.set(cacheKey, parsers);
  return parsers;
}

function countFilteredParsers(filters: ActiveFilters): number {
  return getFilteredParsers(filters).length;
}

function parserMatchesFilters(parser: ParserRelease, filters: ActiveFilters): boolean {
  if (!matchesLanguage(parser.language, filters.language)) {
    return false;
  }

  if (!matchesInstall(parser, filters.install)) {
    return false;
  }

  if (!matchesCustomScanner(parser, filters.scanner)) {
    return false;
  }

  if (!matchesRelease(parser, filters.release)) {
    return false;
  }

  if (!matchesAbi(parser, filters.abi)) {
    return false;
  }

  const packFiltersWithoutSearch = {
    ...filters,
    search: '',
  };
  const relatedMatches = getRankedPacks(parser, packFiltersWithoutSearch);

  if (filters.editor !== 'all' && !relatedMatches.length) {
    return false;
  }

  if (
    filters.queryKind !== 'all' &&
    !parser.bundledQueryKinds.includes(filters.queryKind) &&
    !relatedMatches.length
  ) {
    return false;
  }

  if (!filters.search) {
    return true;
  }

  return (
    matchesSearch(parserSearchIndex.get(parser.id) ?? '', filters.search) ||
    relatedMatches.some(({ pack }) => packMatchesSearchForParser(pack, parser, filters.search))
  );
}

function getRankedPacks(
  parser: ParserRelease | null,
  filters: ActiveFilters = getActiveFilters(),
): RankedPack[] {
  const cacheKey = `${parser?.id ?? '__all__'}\u0000${filterCacheKey(filters)}`;
  const cached = rankedPackCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const candidates = parser
    ? compatiblePacksByParserId.get(parser.id) ?? []
    : allRankedPacks;
  const rankedPacks = candidates.filter(({ pack }) => matchesPackFilters(pack, filters, parser));

  rankedPackCache.set(cacheKey, rankedPacks);
  return rankedPacks;
}

function compatibilityRank(
  pack: QueryPack,
  parser: ParserRelease | null,
): CompatibilityRank {
  if (!parser || !packSupportsParserLanguage(pack, parser.language)) {
    return 0;
  }

  if (parser.synthetic === 'unknown') {
    return parser.syntheticPackIds?.includes(pack.id) ? 1 : 0;
  }

  const testedParserRefs = unique(
    matchingPackLanguageDetails(pack, parser.language).flatMap(
      (entry) => entry.testedParserRefs ?? [],
    ),
  );

  if (testedParserRefs.length) {
    if (testedParserRefs.includes(parserRef(parser))) {
      return 3;
    }

    if (testedParserRefs.some((testedParserRef) => parserPackageFromRef(testedParserRef) === parser.package)) {
      return 1;
    }

    return 0;
  }

  const compatibility = pack.parserCompatibility;
  const tested = compatibility.tested ?? [];

  if (tested.includes(parserRef(parser))) {
    return 3;
  }

  // The prototype only needs wildcard support like 0.25.x or 3.x for now.
  if (matchesSemverRange(parser.upstreamSemver, compatibility.semver)) {
    return 2;
  }

  if (!tested.length && !compatibility.semver) {
    return 1;
  }

  return 0;
}

function buildCompatiblePacks(parser: ParserRelease): RankedPack[] {
  return data.queryPacks
    .map((pack) => ({
      pack,
      rank: compatibilityRank(pack, parser),
    }))
    .filter((entry) => entry.rank > 0)
    .sort(compareRankedPacks);
}

function matchesPackFilters(
  pack: QueryPack,
  filters: ActiveFilters = getActiveFilters(),
  parser: ParserRelease | null = null,
): boolean {
  if (parser) {
    const parserQueryKinds = packQueryKindsForParser(pack, parser);

    if (!parserQueryKinds.length) {
      return false;
    }

    if (filters.editor !== 'all') {
      const filterQueryKinds = filters.queryKind === 'all'
        ? parserQueryKinds
        : [filters.queryKind];
      const filteredTargets = filterTargetsForQueryKinds(pack.targets, filterQueryKinds);

      if (!filteredTargets.some((targetId) => (targetIndex.get(targetId)?.editor ?? '') === filters.editor)) {
        return false;
      }
    }

    if (filters.queryKind !== 'all' && !parserQueryKinds.includes(filters.queryKind)) {
      return false;
    }

    return packMatchesSearchForParser(pack, parser, filters.search);
  }

  if (filters.language !== 'all' && !packSupportsLanguage(pack, filters.language)) {
    return false;
  }

  if (
    filters.editor !== 'all' &&
    !pack.targets.some((targetId) => (targetIndex.get(targetId)?.editor ?? '') === filters.editor)
  ) {
    return false;
  }

  if (filters.queryKind !== 'all' && !pack.queryKinds.includes(filters.queryKind)) {
    return false;
  }

  return matchesSearch(packSearchIndex.get(pack.id) ?? '', filters.search);
}

function matchesInstall(
  parser: ParserRelease,
  install: ActiveFilters['install'] = state.install,
): boolean {
  if (install === 'all') {
    return true;
  }

  if (install === 'wasm') {
    return parser.capabilities.wasm;
  }

  if (install === 'shared-library') {
    return sharedLibraryArtifactFormats(parser).length > 0;
  }

  if (install === 'source-archive') {
    return parser.capabilities.sourceArchive;
  }

  return parser.capabilities.buildFromSource;
}

function matchesRelease(
  parser: ParserRelease,
  release: ActiveFilters['release'] = state.release,
): boolean {
  if (release === 'all') {
    return true;
  }

  if (release === 'semver') {
    return Boolean(parser.upstreamSemver);
  }

  return !parser.upstreamSemver;
}

function matchesAbi(
  parser: ParserRelease,
  abi: ActiveFilters['abi'] = state.abi,
): boolean {
  if (abi === 'all') {
    return true;
  }

  if (abi === 'none') {
    return parser.abi === null;
  }

  return String(parser.abi) === abi;
}

function matchesCustomScanner(
  parser: ParserRelease,
  scanner: ActiveFilters['scanner'] = state.scanner,
): boolean {
  if (scanner === 'all') {
    return true;
  }

  if (scanner === 'custom') {
    return parser.capabilities.customScanner;
  }

  return !parser.capabilities.customScanner;
}

function matchesSearch(text: string, search: string = state.search): boolean {
  if (!search) {
    return true;
  }

  return text.includes(search);
}

function getParserSearchText(parser: ParserRelease): string {
  const freshness = parserFreshnessState(parser);

  return [
    parser.name,
    parser.language,
    parser.package,
    parser.sourceCommit,
    parser.lastUpdated ?? '',
    parser.summary,
    parser.owners.join(' '),
    parser.bundledQueryKinds.join(' '),
    freshness === 'stale' ? 'stale inactive abandoned' : '',
    freshness === 'active' ? 'active maintained current' : '',
    parser.abi === null ? 'no abi abi none' : `abi abi-${parser.abi} abi ${parser.abi}`,
    parser.capabilities.customScanner ? 'scanner custom scanner external scanner' : '',
    parser.capabilities.wasm ? 'wasm' : '',
    sharedLibraryArtifactFormats(parser).length ? 'shared library native shared object dylib dll so' : '',
    parser.capabilities.sourceArchive ? 'source archive release artifact' : '',
    parser.capabilities.buildFromSource ? 'build from source' : '',
    parser.artifacts.map(parserArtifactLabel).join(' '),
  ].join(' ');
}

function getPackSearchText(pack: QueryPack): string {
  return [
    pack.name,
    pack.package,
    packLanguageList(pack).join(' '),
    packParserLanguageList(pack).join(' '),
    packTestedParserRefs(pack).join(' '),
    String(packLanguageCount(pack)),
    pack.summary,
    packScopeLabel(pack),
    pack.layout.installRoot,
    pack.layout.queryRoot,
    pack.queryKinds.join(' '),
    pack.targets.join(' '),
    pack.targets.map(targetLabel).join(' '),
    pack.owners.join(' '),
    queryFileSearchText(pack),
  ].join(' ');
}

function packMatchesSearchForParser(
  pack: QueryPack,
  parser: ParserRelease,
  search: string,
): boolean {
  if (!search) {
    return true;
  }

  const cacheKey = `${search}\u0000${pack.id}\u0000${parser.id}`;
  const cached = packSearchMatchByParserId.get(cacheKey);

  if (cached !== undefined) {
    return cached;
  }

  const matches = matchesSearch(getPackSearchTextForParserCached(pack, parser), search);
  packSearchMatchByParserId.set(cacheKey, matches);
  return matches;
}

function getPackSearchTextForParser(pack: QueryPack, parser: ParserRelease): string {
  const languageDetails = matchingPackLanguageDetails(pack, parser.language);

  return [
    pack.name,
    pack.package,
    pack.summary,
    pack.layout.installRoot,
    pack.layout.queryRoot,
    pack.queryKinds.join(' '),
    pack.targets.join(' '),
    pack.targets.map(targetLabel).join(' '),
    pack.owners.join(' '),
    languageDetails.map((detail) => detail.language).join(' '),
    languageDetails.map((detail) => detail.parserLanguage ?? '').join(' '),
    languageDetails.flatMap((detail) => detail.queryKinds).join(' '),
    languageDetails.flatMap((detail) => detail.testedParserRefs ?? []).join(' '),
    queryFileSearchText(pack),
  ].join(' ');
}

function getPackSearchTextForParserCached(pack: QueryPack, parser: ParserRelease): string {
  const cacheKey = `${pack.id}\u0000${parser.id}`;
  const cached = packSearchTextByParserId.get(cacheKey);

  if (cached) {
    return cached;
  }

  const searchText = getPackSearchTextForParser(pack, parser).toLowerCase();
  packSearchTextByParserId.set(cacheKey, searchText);
  return searchText;
}

function parserRef(parser: ParserRelease): string {
  return `${parser.package}@${parser.version}`;
}

function parserPackageFromRef(ref: string): string {
  return ref.split('@')[0] ?? ref;
}

function parserVersionFromRef(ref: string): string {
  const parser = parserByRefIndex.get(ref);
  return parser ? preferredParserVersionLabel(parser) : displayVersionLabel(ref.split('@')[1] ?? ref);
}

function parserVersionsFromRefs(
  refs: readonly string[],
  packageId?: string,
): string[] {
  return unique(
    refs
      .filter((ref) => !packageId || parserPackageFromRef(ref) === packageId)
      .map(parserVersionFromRef),
  );
}

function summarizeVersionLabels(versions: readonly string[]): string {
  if (!versions.length) {
    return 'unknown';
  }

  if (versions.length === 1) {
    return versions[0] ?? 'unknown';
  }

  return `${versions.length} pins`;
}

function preferredParserVersionLabel(parser: ParserRelease): string {
  if (parser.synthetic === 'unknown') {
    return 'unknown';
  }

  return parser.upstreamSemver ?? displayVersionLabel(parser.version);
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

function firstPackLanguageDetail(pack: QueryPack, language: string): QueryPackLanguage | null {
  const normalized = normalizeLanguageId(language);

  return (
    packLanguageDetails(pack).find(
      (entry) => normalizeLanguageId(entry.language) === normalized,
    ) ?? null
  );
}

function matchingPackLanguageDetails(pack: QueryPack, parserLanguage: string): QueryPackLanguage[] {
  const normalized = normalizeLanguageId(parserLanguage);

  return packLanguageDetails(pack).filter((entry) => {
    if (normalizeLanguageId(entry.language) === normalized) {
      return true;
    }

    return normalizeLanguageId(entry.parserLanguage ?? entry.language) === normalized;
  });
}

function packSupportsLanguage(pack: QueryPack, language: string): boolean {
  return firstPackLanguageDetail(pack, language) !== null;
}

function packSupportsParserLanguage(pack: QueryPack, parserLanguage: string): boolean {
  return matchingPackLanguageDetails(pack, parserLanguage).length > 0;
}

function packQueryKindsForParser(pack: QueryPack, parser: ParserRelease): string[] {
  return unique(
    matchingPackLanguageDetails(pack, parser.language).flatMap((entry) => entry.queryKinds),
  );
}

function packParserLanguageList(pack: QueryPack): string[] {
  return unique(
    packLanguageDetails(pack).map((entry) => normalizeLanguageId(entry.parserLanguage ?? entry.language)),
  );
}

function packTestedParserRefs(pack: QueryPack): string[] {
  return unique(
    packLanguageDetails(pack).flatMap((entry) => entry.testedParserRefs ?? []),
  );
}

function packLanguageCount(pack: QueryPack): number {
  return packLanguageDetails(pack).length;
}

function packScopeLabel(pack: QueryPack): string {
  const total = packLanguageCount(pack);

  if (total <= 1) {
    return labelize(packLanguageList(pack)[0] ?? 'unknown');
  }

  return `${total} languages`;
}

function packLanguageList(pack: QueryPack): string[] {
  return packLanguageDetails(pack).map(({ language }) => language);
}

function countCoverageLanguages(
  packs: readonly QueryPack[],
  parsers: readonly ParserRelease[],
  editor: string,
  queryKind: string,
): number {
  const coveredLanguages = new Set<string>();

  for (const pack of packs) {
    if (editor === 'unknown') {
      if (packHasExplicitSupport(pack, queryKind)) {
        continue;
      }
    } else if (!packSupportsEditorKind(pack, editor, queryKind)) {
      continue;
    }

    for (const language of packLanguagesForKind(pack, queryKind)) {
      const normalizedLanguage = normalizeLanguageId(language);

      if (!matchesLanguage(language, state.language)) {
        continue;
      }

      coveredLanguages.add(normalizedLanguage);
    }
  }

  if (editor === 'unknown') {
    for (const parser of parsers) {
      if (!parser.bundledQueryKinds.includes(queryKind)) {
        continue;
      }

      const normalizedLanguage = normalizeLanguageId(parser.language);

      if (!matchesLanguage(parser.language, state.language)) {
        continue;
      }

      coveredLanguages.add(normalizedLanguage);
    }
  }

  return coveredLanguages.size;
}

function getCoverageContributors(
  packs: readonly QueryPack[],
  parsers: readonly ParserRelease[],
  editor: string,
  queryKind: string,
): CoverageContributor[] {
  const contributors: CoverageContributor[] = [];

  for (const pack of packs) {
    const contributes = editor === 'unknown'
      ? !packHasExplicitSupport(pack, queryKind) && pack.queryKinds.includes(queryKind)
      : packSupportsEditorKind(pack, editor, queryKind);

    if (!contributes) {
      continue;
    }

    const languages = filterCoverageLanguages(packLanguagesForKind(pack, queryKind));

    if (!languages.length) {
      continue;
    }

    contributors.push({
      type: 'pack',
      pack,
      languages,
    });
  }

  if (editor === 'unknown') {
    for (const parser of parsers) {
      if (!parser.bundledQueryKinds.includes(queryKind)) {
        continue;
      }

      const languages = filterCoverageLanguages([parser.language]);

      if (!languages.length) {
        continue;
      }

      contributors.push({
        type: 'parser',
        parser,
        languages,
      });
    }
  }

  return contributors.sort((left, right) => {
    if (right.languages.length !== left.languages.length) {
      return right.languages.length - left.languages.length;
    }

    const leftName = left.type === 'pack' ? left.pack.name : left.parser.name;
    const rightName = right.type === 'pack' ? right.pack.name : right.parser.name;

    return leftName.localeCompare(rightName);
  });
}

function packSupportsEditorKind(pack: QueryPack, editor: string, queryKind: string): boolean {
  if (!pack.queryKinds.includes(queryKind)) {
    return false;
  }

  return pack.targets.some((targetId) => {
    const target = targetIndex.get(targetId);

    if (!target || target.editor !== editor) {
      return false;
    }

    return getSupportedQueryKinds(target).includes(queryKind);
  });
}

function packHasExplicitSupport(pack: QueryPack, queryKind: string): boolean {
  if (!pack.queryKinds.includes(queryKind)) {
    return false;
  }

  return pack.targets.some((targetId) => {
    const target = targetIndex.get(targetId);

    if (!target) {
      return false;
    }

    return getSupportedQueryKinds(target).includes(queryKind);
  });
}

function packLanguagesForKind(pack: QueryPack, queryKind: string): string[] {
  // Coverage is parser-centric, so collapse editor-specific aliases like
  // docker-compose -> yaml or jsx -> javascript where the pack provides it.
  return packLanguageDetails(pack)
    .filter((entry) => entry.queryKinds.includes(queryKind))
    .map((entry) => entry.parserLanguage ?? entry.language);
}

function firstCoverageSelection(
  packs: readonly QueryPack[],
  parsers: readonly ParserRelease[],
  editors: readonly string[],
  queryKinds: readonly string[],
): CoverageSelection | null {
  for (const queryKind of queryKinds) {
    for (const editor of editors) {
      if (countCoverageLanguages(packs, parsers, editor, queryKind) > 0) {
        return {
          editor,
          queryKind,
        };
      }
    }
  }

  return null;
}

function filterCoverageLanguages(languages: readonly string[]): string[] {
  return languages.filter((language) => languageMatchesFilter(language));
}

function getCoverageParsers(): ParserRelease[] {
  return sortedParsers.filter((parser) => {
    if (hasBundledQueryPack(parser)) {
      return false;
    }

    if (!languageMatchesFilter(parser.language)) {
      return false;
    }

    if (!matchesInstall(parser)) {
      return false;
    }

    if (!matchesRelease(parser)) {
      return false;
    }

    if (!matchesAbi(parser)) {
      return false;
    }

    if (
      state.queryKind !== 'all' &&
      !parser.bundledQueryKinds.includes(state.queryKind)
    ) {
      return false;
    }

    return matchesSearch(parserSearchIndex.get(parser.id) ?? '');
  });
}

function getActiveFilters(): ActiveFilters {
  return {
    search: state.search,
    language: state.language,
    editor: state.editor,
    queryKind: state.queryKind,
    install: state.install,
    scanner: state.scanner,
    release: state.release,
    abi: state.abi,
  };
}

function restoreStateFromUrl(): void {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const search = params.get('q');

  if (search) {
    state.search = search.trim().toLowerCase();
  }

  const language = params.get('lang');

  if (!search && language) {
    const normalizedLanguage = normalizeLanguageId(language);

    if (allLanguages.includes(normalizedLanguage)) {
      state.search = labelize(normalizedLanguage).toLowerCase();
    }
  }

  const editor = params.get('editor');

  if (editor && allEditors.includes(editor)) {
    state.editor = editor;
  }

  const queryKind = params.get('kind');

  if (queryKind && allQueryKinds.includes(queryKind)) {
    state.queryKind = queryKind;
  }

  const install = params.get('install');

  if (install === 'wasm' || install === 'shared-library' || install === 'source-archive' || install === 'build-from-source') {
    state.install = install;
  }

  const scanner = params.get('scanner');

  if (scanner === 'custom' || scanner === 'none') {
    state.scanner = scanner;
  }

  const release = params.get('release');

  if (release === 'semver' || release === 'none') {
    state.release = release;
  }

  const abi = params.get('abi');

  if (abi === 'none' || /^\d+$/.test(abi ?? '')) {
    state.abi = abi as FilterState['abi'];
  }

  const parserId = params.get('parser');

  if (parserId && parserById(parserId)) {
    state.selectedParserId = parserId;
  }

  const queryId = params.get('source');

  if (queryId && queryPackById(queryId)) {
    state.selectedQueryId = queryId;
  }

  const coverageEditor = params.get('coverageEditor');
  const coverageKind = params.get('coverageKind');

  if (
    coverageEditor &&
    coverageKind &&
    (coverageEditor === 'unknown' || allEditors.includes(coverageEditor)) &&
    allQueryKinds.includes(coverageKind)
  ) {
    state.selectedCoverage = {
      editor: coverageEditor,
      queryKind: coverageKind,
    };
  }
}

function syncUrlState(): void {
  const url = new URL(window.location.href);
  const params = searchParamsFromState(state);
  const nextSearch = params.toString();
  const nextHref = `${url.pathname}${nextSearch ? `?${nextSearch}` : ''}${url.hash}`;
  const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextHref !== currentHref) {
    window.history.replaceState(null, '', nextHref);
  }

  syncPreservedPageLinks(nextSearch ? `?${nextSearch}` : '');
}

function syncPreservedPageLinks(search: string): void {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-preserve-search]'));

  for (const link of links) {
    const baseHref = link.dataset['preserveSearchHref'] ?? link.getAttribute('href') ?? '';

    if (!baseHref) {
      continue;
    }

    link.dataset['preserveSearchHref'] = baseHref;

    const href = new URL(baseHref, window.location.href);
    href.search = search;
    link.setAttribute('href', `${href.pathname}${href.search}${href.hash}`);
  }
}

function searchParamsFromState(snapshot: FilterState): URLSearchParams {
  const params = new URLSearchParams();

  if (snapshot.search) {
    params.set('q', snapshot.search);
  }

  if (snapshot.editor !== 'all') {
    params.set('editor', snapshot.editor);
  }

  if (snapshot.queryKind !== 'all') {
    params.set('kind', snapshot.queryKind);
  }

  if (snapshot.install !== 'all') {
    params.set('install', snapshot.install);
  }

  if (snapshot.scanner !== 'all') {
    params.set('scanner', snapshot.scanner);
  }

  if (snapshot.release !== 'all') {
    params.set('release', snapshot.release);
  }

  if (snapshot.abi !== 'all') {
    params.set('abi', snapshot.abi);
  }

  if (snapshot.selectedParserId) {
    params.set('parser', snapshot.selectedParserId);
  }

  if (snapshot.selectedQueryId) {
    params.set('source', snapshot.selectedQueryId);
  }

  if (snapshot.selectedCoverage) {
    params.set('coverageEditor', snapshot.selectedCoverage.editor);
    params.set('coverageKind', snapshot.selectedCoverage.queryKind);
  }

  return params;
}

function filterCacheKey(filters: ActiveFilters): string {
  return [
    filters.search,
    filters.language,
    filters.editor,
    filters.queryKind,
    filters.install,
    filters.scanner,
    filters.release,
    filters.abi,
  ].join('\u0000');
}

function syncRenderCaches(filters: ActiveFilters): void {
  const baseFilterKey = filterCacheKey(filters);

  if (baseFilterKey === cachedBaseFilterKey) {
    return;
  }

  filteredParserCache.clear();
  rankedPackCache.clear();
  packSearchMatchByParserId.clear();
  cachedBaseFilterKey = baseFilterKey;
}

function normalizeLanguageId(language: string): string {
  const normalized = language.toLowerCase().replace(/[.-]/g, '_');
  return LANGUAGE_ALIASES[normalized] ?? normalized;
}

function parserLanguagesForFilterLanguage(language: string): string[] {
  const normalized = normalizeLanguageId(language);

  return unique([
    normalized,
    ...(parserLanguageIndex.get(normalized) ?? []),
  ]);
}

function languageMatchesFilter(language: string): boolean {
  return matchesLanguage(language, state.language);
}

function matchesLanguage(language: string, selectedLanguage: string): boolean {
  if (selectedLanguage === 'all') {
    return true;
  }

  return parserLanguagesForFilterLanguage(selectedLanguage).includes(
    normalizeLanguageId(language),
  );
}

function matchesSemverRange(version: string | null, range?: string): boolean {
  if (!version || !range) {
    return false;
  }

  const versionParts = version.split('.');
  const rangeParts = range.split('.');

  return rangeParts.every((part, index) => part === 'x' || part === versionParts[index]);
}

function targetLabel(targetId: string): string {
  const target = targetIndex.get(targetId);

  if (!target) {
    return targetId;
  }

  return `${labelize(target.editor)} / ${labelize(target.feature)}`;
}

function renderEditorFilterChip(editor: string): string {
  return renderChip(
    labelize(editor),
    `chip chip-outline chip-editor chip-editor-${editorClassSuffix(editor)}`,
    {
      dataset: { 'data-filter-editor': editor },
      isActive: state.editor === editor,
    },
  );
}

function renderParserVersionToken(parser: ParserRelease): string {
  if (parser.synthetic === 'unknown') {
    return '<span class="tree-item-token tree-item-token-commit-only">unknown</span>';
  }

  const label = preferredParserVersionLabel(parser);
  const href = parserVersionHref(parser);
  const versionClass = parser.upstreamSemver
    ? 'tree-item-token-semver'
    : 'tree-item-token-commit-only';

  if (!href) {
    return `<span class="tree-item-token ${versionClass}">${escapeHtml(label)}</span>`;
  }

  return `<a class="inline-link tree-item-token tree-item-token-release ${versionClass}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)}</a>`;
}

function renderParserVersionValue(parser: ParserRelease): string {
  if (parser.synthetic === 'unknown') {
    return 'unknown';
  }

  const label = preferredParserVersionLabel(parser);
  const href = parserVersionHref(parser);

  if (!href) {
    return escapeHtml(label);
  }

  return `<a class="inline-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)}</a>`;
}

function parserVersionHref(parser: ParserRelease): string | null {
  if (parser.upstreamSemver) {
    return packageReleasesHref(parser.package);
  }

  if (parser.version.startsWith('git-')) {
    return packageCommitHref(parser.package, parser.sourceCommit);
  }

  return packageReleasesHref(parser.package);
}

function renderQueryFileSupportTags(
  queryKind: string,
  targetIds: readonly string[],
): string {
  return renderSupportChipsForQueryKind(queryKind, targetIds);
}

function renderSupportChipsForQueryKind(
  queryKind: string,
  targetIds: readonly string[],
  options: {
    interactive?: boolean;
  } = {},
): string {
  const seenEditors = new Set<string>();
  const editorTags = targetIds
    .map((targetId) => {
      const target = targetIndex.get(targetId);

      if (!target || seenEditors.has(target.editor)) {
        return '';
      }

      seenEditors.add(target.editor);
      return renderTargetEditorChip(targetId, {
        queryKind,
        interactive: options.interactive ?? false,
      });
    })
    .join('');

  return editorTags || renderQueryKindChip(queryKind, options.interactive);
}

function renderTargetEditorChip(
  targetId: string,
  options: {
    queryKind?: string;
    interactive?: boolean;
  } = {},
): string {
  const target = targetIndex.get(targetId);

  if (!target) {
    return renderChip(targetId, 'chip chip-outline');
  }

  const { interactive = false, queryKind } = options;
  const label = queryKind
    ? `${labelize(target.editor)} / ${labelize(queryKind)}`
    : labelize(target.editor);
  const filterDataset = queryKind
    ? {
        'data-filter-editor': target.editor,
        'data-filter-query-kind': queryKind,
      }
    : {
        'data-filter-editor': target.editor,
      };

  return renderChip(
    label,
    `chip chip-outline chip-editor chip-editor-${editorClassSuffix(target.editor)}`,
    interactive
      ? {
          dataset: filterDataset,
          isActive: state.editor === target.editor && (!queryKind || state.queryKind === queryKind),
        }
      : undefined,
  );
}

function editorClassSuffix(editor: string): string {
  return editor.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

function renderQueryKindChip(queryKind: string, interactive: boolean = false): string {
  return renderChip(
    labelize(queryKind),
    'chip chip-outline',
    interactive
      ? {
          dataset: { 'data-filter-query-kind': queryKind },
          isActive: state.queryKind === queryKind,
        }
      : undefined,
  );
}

function parserLastUpdatedDate(parser: ParserRelease): Date | null {
  if (!parser.lastUpdated) {
    return null;
  }

  const date = new Date(parser.lastUpdated);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isStaleParser(parser: ParserRelease): boolean {
  return parserFreshnessState(parser) === 'stale';
}

function parserFreshnessState(parser: ParserRelease): 'active' | 'neutral' | 'stale' {
  const lastUpdatedDate = parserLastUpdatedDate(parser);

  if (!lastUpdatedDate) {
    return 'neutral';
  }

  const ageMs = Date.now() - lastUpdatedDate.getTime();

  if (ageMs >= STALE_PARSER_AGE_MS) {
    return 'stale';
  }

  if (ageMs <= ACTIVE_PARSER_AGE_MS) {
    return 'active';
  }

  return 'neutral';
}

function renderParserLastUpdated(
  parser: ParserRelease,
  format: 'compact' | 'full',
): string {
  const lastUpdatedDate = parserLastUpdatedDate(parser);

  if (!lastUpdatedDate) {
    return format === 'compact' ? 'updated unknown' : 'unknown';
  }

  const formatter = format === 'compact'
    ? parserCompactDateFormatter
    : parserFullDateFormatter;
  const label = formatter.format(lastUpdatedDate);

  return format === 'compact' ? `updated ${label}` : label;
}

function renderParserSignalChips(parser: ParserRelease): string[] {
  const chips: string[] = [];

  if (parser.abi !== null) {
    chips.push(
      renderChip(
        `abi ${renderParserAbi(parser)}`,
        'chip chip-outline',
        {
          dataset: { 'data-filter-abi': renderParserAbi(parser) },
          isActive: state.abi === renderParserAbi(parser),
        },
      ),
    );
  }

  if (parser.capabilities.customScanner) {
    chips.push(
      renderChip(
        'scanner',
        'chip chip-danger',
        {
          dataset: { 'data-filter-scanner': 'custom' },
          isActive: state.scanner === 'custom',
        },
      ),
    );
  }

  if (parser.capabilities.wasm) {
    chips.push(
      renderChip(
        'wasm',
        'chip chip-accent',
        {
          dataset: { 'data-filter-install': 'wasm' },
          isActive: state.install === 'wasm',
        },
      ),
    );
  }

  for (const format of sharedLibraryArtifactFormats(parser)) {
    chips.push(
      renderChip(
        `.${format}`,
        'chip chip-accent',
        {
          dataset: { 'data-filter-install': 'shared-library' },
          isActive: state.install === 'shared-library',
        },
      ),
    );
  }

  return chips;
}

function renderParserArtifacts(parser: ParserRelease): string {
  if (!parser.artifacts.length) {
    return '<span class="parser-artifact-empty subtle">none listed</span>';
  }

  return parser.artifacts
    .map((artifact) => renderParserArtifact(parser, artifact))
    .join('');
}

function renderParserArtifact(parser: ParserRelease, artifact: ParserArtifact): string {
  const label = escapeHtml(parserArtifactLabel(artifact));
  const className = `artifact-link ${parserArtifactLinkClass(artifact)}`;
  const href = parserArtifactHref(parser, artifact);

  if (!href) {
    return `<span class="${className} artifact-link-static">${label}</span>`;
  }

  return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function renderParserAbi(parser: ParserRelease): string {
  return parser.abi === null ? 'none' : String(parser.abi);
}

function renderParserSourceCommit(parser: ParserRelease): string {
  return parser.synthetic === 'unknown' ? 'n/a' : shortCommit(parser.sourceCommit);
}

function parserArtifactLabel(artifact: ParserArtifact): string {
  if (artifact.kind === 'source-archive') {
    return `source archive (.${artifact.format})`;
  }

  return artifact.name ?? `release asset (.${artifact.format})`;
}

function parserArtifactLinkClass(artifact: ParserArtifact): string {
  return 'artifact-link-default';
}

function sharedLibraryArtifactFormats(parser: ParserRelease): string[] {
  return SHARED_LIBRARY_ARTIFACT_FORMATS.filter((format) =>
    parser.artifacts.some((artifact) => artifact.kind === 'release-asset' && artifact.format === format),
  );
}

function parserArtifactHref(parser: ParserRelease, artifact: ParserArtifact): string | null {
  if (artifact.kind === 'source-archive') {
    return packageSourceArchiveHref(parser.package, parser.sourceCommit);
  }

  if (!artifact.name) {
    return packageReleasesHref(parser.package);
  }

  return packageReleaseAssetHref(parser.package, artifact.name) ?? packageReleasesHref(parser.package);
}

function renderChip(
  label: string,
  className: string,
  action?: ChipAction,
): string {
  if (!action) {
    return `<span class="${className}">${escapeHtml(label)}</span>`;
  }

  const attributes = Object.entries(action.dataset)
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(' ');
  const content = action.dismissible
    ? `<span>${escapeHtml(label)}</span><span class="chip-dismiss" aria-hidden="true">×</span>`
    : escapeHtml(label);

  return `<button type="button" class="${className} chip-button ${action.isActive ? 'is-active' : ''}" ${attributes}>${content}</button>`;
}

function renderActiveFilterSelectControl(
  label: string,
  value: string,
  options: readonly FilterOption[],
  filter: FilterControlKey,
  className: string,
): string {
  const isActive = value !== 'all';
  const optionMarkup = options
    .map(
      (option) => `
        <option value="${escapeHtml(option.value)}" ${option.value === value ? 'selected' : ''}>
          ${escapeHtml(option.label)}
        </option>
      `,
    )
    .join('');

  return `
    <div class="${className} active-filter-control">
      <span class="active-filter-control-label">${escapeHtml(label)}</span>
      <select class="active-filter-select" data-active-filter="${escapeHtml(filter)}" aria-label="${escapeHtml(label)} filter">
        ${optionMarkup}
      </select>
      ${
        isActive
          ? `
            <button
              type="button"
              class="active-filter-clear"
              data-filter-${filterDataSuffix(filter)}="${escapeHtml(value)}"
              aria-label="${escapeHtml(`Clear ${label} filter`)}"
            >
              ×
            </button>
          `
          : ''
      }
    </div>
  `;
}

function countFilterValue(
  filters: ActiveFilters,
  filter: FilterControlKey,
  value: string,
): number {
  return countFilteredParsers({
    ...filters,
    [filter]: value,
  } as ActiveFilters);
}

function buildCountedFilterOptions(
  filters: ActiveFilters,
  filter: FilterControlKey,
  currentValue: string,
  choices: readonly FilterOption[],
): FilterOption[] {
  const allOption: FilterOption = {
    value: 'all',
    label: `All (${countFilterValue(filters, filter, 'all')})`,
  };

  const countedOptions = choices
    .map((choice) => ({
      ...choice,
      count: countFilterValue(filters, filter, choice.value),
    }))
    .filter((choice) => choice.count > 0 || choice.value === currentValue)
    .map(({ value, label, count }) => ({
      value,
      label: `${label} (${count})`,
    }));

  return [allOption, ...countedOptions];
}

function filterDataSuffix(filter: FilterControlKey): string {
  return filter === 'queryKind' ? 'query-kind' : filter;
}

function filterDatasetKey(filter: FilterControlKey): string {
  return filter === 'queryKind'
    ? 'filterQueryKind'
    : `filter${filter.charAt(0).toUpperCase()}${filter.slice(1)}`;
}

function filterControlValue(filter: FilterControlKey): string {
  return state[filter];
}

function setFilterControlValue(filter: FilterControlKey, value: string): void {
  switch (filter) {
    case 'editor':
      state.editor = value;
      break;
    case 'queryKind':
      state.queryKind = value;
      break;
    case 'install':
      state.install = value as FilterState['install'];
      break;
    case 'scanner':
      state.scanner = value as FilterState['scanner'];
      break;
    case 'release':
      state.release = value as FilterState['release'];
      break;
    case 'abi':
      state.abi = value as FilterState['abi'];
      break;
  }
}

function packEditors(pack: QueryPack): string[] {
  return unique(
    pack.targets
      .map((targetId) => targetIndex.get(targetId)?.editor ?? '')
      .filter((editor): editor is string => Boolean(editor)),
  );
}

function renderCoverageDetail(
  selection: CoverageSelection,
  contributors: readonly CoverageContributor[],
  uniqueLanguageCount: number,
): string {
  return `
    <div class="coverage-detail-head">
      <p class="eyebrow eyebrow-inline">Selection</p>
      <h4>${escapeHtml(labelize(selection.queryKind))} / ${escapeHtml(labelize(selection.editor))}</h4>
      <p>${escapeHtml(`${uniqueLanguageCount} unique languages from ${contributors.length} contributing entries.`)}</p>
      <p class="subtle">Entry language ranges can overlap. The cell count is deduplicated by language.</p>
    </div>
    <div class="coverage-entry-list">
      ${contributors.map((contributor) => renderCoverageContributor(contributor, selection.queryKind)).join('')}
    </div>
  `;
}

function renderCoverageContributor(
  contributor: CoverageContributor,
  queryKind: string,
): string {
  const languagePreview = previewLanguages(contributor.languages);

  if (contributor.type === 'pack') {
    return `
      <article class="mini-card coverage-entry">
        <div class="mini-card-top">
          <strong>${escapeHtml(contributor.pack.name)}</strong>
          <span class="pill pill-soft">query source</span>
        </div>
        <p>${renderPackageLink(contributor.pack.package)}</p>
        <p>${escapeHtml(`${contributor.languages.length} languages · ${contributor.pack.layout.queryRoot}`)}</p>
        <p class="subtle">${escapeHtml(languagePreview)}</p>
      </article>
    `;
  }

  return `
    <article class="mini-card coverage-entry">
      <div class="mini-card-top">
        <strong>${escapeHtml(contributor.parser.name)}</strong>
        <span class="pill pill-soft">parser</span>
      </div>
      <p>${renderPackageLink(contributor.parser.package)}</p>
      <p>${escapeHtml(`${labelize(contributor.parser.language)} · bundled ${queryKind} query`)}</p>
      <p class="subtle">${escapeHtml(languagePreview)}</p>
    </article>
  `;
}

function previewLanguages(languages: readonly string[]): string {
  const preview = languages.slice(0, 10).map(labelize).join(', ');

  if (languages.length > 10) {
    return `${preview}, plus ${languages.length - 10} more.`;
  }

  return preview;
}

function resolvePackLanguage(pack: QueryPack, parser: ParserRelease | null): string | null {
  if (state.language !== 'all' && packSupportsLanguage(pack, state.language)) {
    return firstPackLanguageDetail(pack, state.language)?.language ?? null;
  }

  if (parser) {
    const exactLanguage = firstPackLanguageDetail(pack, parser.language);

    if (exactLanguage) {
      return exactLanguage.language;
    }

    const parserMatch = packLanguageDetails(pack).find(
      (entry) => normalizeLanguageId(entry.parserLanguage ?? entry.language) === normalizeLanguageId(parser.language),
    );

    if (parserMatch) {
      return parserMatch.language;
    }
  }

  const languages = packLanguageList(pack);

  return languages.length === 1 ? (languages[0] ?? null) : null;
}

function queryKindsForResolvedLanguage(
  pack: QueryPack,
  resolvedLanguage: string | null,
): string[] {
  if (!resolvedLanguage || !pack.languageDetails?.length) {
    return pack.queryKinds;
  }

  const normalizedLanguage = normalizeLanguageId(resolvedLanguage);
  const languageDetail = pack.languageDetails.find(
    ({ language }) => normalizeLanguageId(language) === normalizedLanguage,
  );

  if (!languageDetail) {
    return [];
  }

  return pack.queryKinds.filter((queryKind) => languageDetail.queryKinds.includes(queryKind));
}

function visibleQueryKindsForPack(
  pack: QueryPack,
  resolvedLanguage: string | null,
): string[] {
  if (!resolvedLanguage || !pack.languageDetails?.length) {
    return pack.queryKinds;
  }

  return queryKindsForResolvedLanguage(pack, resolvedLanguage);
}

function filterTargetsForQueryKinds(
  targetIds: readonly string[],
  queryKinds: readonly string[],
): string[] {
  return targetIds.filter((targetId) => {
    const target = targetIndex.get(targetId);

    if (!target) {
      return true;
    }

    const supportedQueryKinds = getSupportedQueryKinds(target);

    if (!supportedQueryKinds.length) {
      return true;
    }

    return supportedQueryKinds.some((queryKind) => queryKinds.includes(queryKind));
  });
}

function resolvedQueryFiles(
  pack: QueryPack,
  queryKind: string,
  resolvedLanguage: string | null,
): string[] {
  const queryFiles = pack.queries[queryKind];

  if (!queryFiles) {
    return [];
  }

  const paths = Array.isArray(queryFiles) ? queryFiles : [queryFiles];

  return paths.map((path) =>
    resolvedLanguage ? path.replaceAll('{language}', resolvedLanguage) : path,
  );
}

function renderQueryFileReference(
  pack: QueryPack,
  resolvedPath: string,
): string {
  if (resolvedPath.includes('{language}')) {
    return escapeHtml(resolvedPath);
  }

  const href = packageFileHref(pack.package, pack.version, resolvedPath);

  if (!href) {
    return escapeHtml(resolvedPath);
  }

  return `<a class="inline-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(resolvedPath)}</a>`;
}

function queryFileSearchText(pack: QueryPack): string {
  return Object.values(pack.queries)
    .flatMap((queryFiles) => (Array.isArray(queryFiles) ? queryFiles : [queryFiles]))
    .join(' ');
}

function displayVersionLabel(version: string): string {
  if (version.startsWith('git-')) {
    const rawVersion = version.slice('git-'.length);

    if (/^v?\d/.test(rawVersion)) {
      return rawVersion;
    }
  }

  return version;
}

function hasBundledQueryPack(parser: ParserRelease): boolean {
  return Object.keys(parser.bundledQueries).length > 0;
}

function renderActiveFilterStrip(): void {
  const activeFilters = elements.activeFilters;

  if (!activeFilters) {
    return;
  }

  const filters = getActiveFilters();
  const chips: string[] = [];
  const hasActiveFilters = Boolean(
    state.search ||
    state.editor !== 'all' ||
    state.queryKind !== 'all' ||
    state.install !== 'all' ||
    state.scanner !== 'all' ||
    state.release !== 'all' ||
    state.abi !== 'all',
  );

  if (state.search) {
    chips.push(
      renderChip(
        `Search: ${state.search}`,
        'chip chip-active-filter chip-accent',
        {
          dataset: { 'data-filter-search': state.search },
          dismissible: true,
        },
      ),
    );
  }

  chips.push(
    ...FILTER_CONTROL_SPECS.map((spec) =>
      renderActiveFilterSelectControl(
        spec.label,
        filterControlValue(spec.key),
        buildCountedFilterOptions(
          filters,
          spec.key,
          filterControlValue(spec.key),
          spec.choices(),
        ),
        spec.key,
        spec.className(filterControlValue(spec.key)),
      )),
  );

  activeFilters.hidden = false;
  activeFilters.innerHTML = `
    <span class="active-filters-label">Filters</span>
    ${chips.join('')}
    ${
      hasActiveFilters
        ? '<button type="button" class="active-filters-reset" data-clear-all-filters="true">Clear all</button>'
        : ''
    }
  `;
}

function compatibilityLabel(rank: CompatibilityRank): 'exact' | 'range' | 'unknown' {
  if (rank === 3) {
    return 'exact';
  }

  if (rank === 2) {
    return 'range';
  }

  return 'unknown';
}

function compatibilityExplanation(rank: CompatibilityRank): string {
  if (rank === 3) {
    return 'Matches an exact tested parser ref.';
  }

  if (rank === 2) {
    return 'Matches the declared semver support range.';
  }

  return 'Matches the language, but no exact parser pin or semver range is published for this selection.';
}

function compatibilityTokenLabel(
  pack: QueryPack,
  parser: ParserRelease | null,
  rank: CompatibilityRank,
): string {
  if (rank === 2 && pack.parserCompatibility.semver) {
    return pack.parserCompatibility.semver;
  }

  const exactTestedParserRefs = unique([
    ...(parser ? matchingPackLanguageDetails(pack, parser.language).flatMap((entry) => entry.testedParserRefs ?? []) : []),
    ...(pack.parserCompatibility.tested ?? []),
  ]);
  const matchingVersions = parser
    ? parserVersionsFromRefs(exactTestedParserRefs, parser.package)
    : [];

  if (matchingVersions.length) {
    return summarizeVersionLabels(matchingVersions);
  }

  const publishedVersions = parserVersionsFromRefs(exactTestedParserRefs);

  if (publishedVersions.length) {
    return summarizeVersionLabels(publishedVersions);
  }

  return 'unknown';
}

function compatibilityBadgeVariant(label: string): 'exact' | 'range' | 'unknown' {
  const trimmedLabel = label.trim();

  if (!trimmedLabel || trimmedLabel === 'unknown' || /\bpins?\b/i.test(trimmedLabel)) {
    return 'unknown';
  }

  if (/^git-[0-9a-f]{7,40}$/i.test(trimmedLabel) || /^[0-9a-f]{7,40}$/i.test(trimmedLabel)) {
    return 'exact';
  }

  if (/^[v\d]/i.test(trimmedLabel) || /^[~^<>=]/.test(trimmedLabel)) {
    return 'range';
  }

  return 'unknown';
}

function renderCompatibilityBadge(
  rank: CompatibilityRank,
  baseClass: 'pill' | 'tree-item-token',
  label: string = compatibilityLabel(rank),
): string {
  const variant = compatibilityBadgeVariant(label);
  const explanation = compatibilityExplanation(rank);

  return `<span class="${baseClass} ${baseClass}-${variant}" title="${escapeHtml(explanation)}" aria-label="${escapeHtml(`${label}: ${explanation}`)}">${escapeHtml(label)}</span>`;
}

function compareRankedPacks(left: RankedPack, right: RankedPack): number {
  if (right.rank !== left.rank) {
    return right.rank - left.rank;
  }

  if (right.pack.queryKinds.length !== left.pack.queryKinds.length) {
    return right.pack.queryKinds.length - left.pack.queryKinds.length;
  }

  return left.pack.name.localeCompare(right.pack.name);
}

function labelize(value: string): string {
  return value
    .split(/[-_]/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function shortCommit(commit: string): string {
  return commit.slice(0, 7);
}

function unique<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

function parserById(parserId: string | null): ParserRelease | null {
  if (!parserId) {
    return null;
  }

  return data.parsers.find((parser) => parser.id === parserId) ?? null;
}

function queryPackById(queryId: string | null): QueryPack | null {
  if (!queryId) {
    return null;
  }

  return data.queryPacks.find((pack) => pack.id === queryId) ?? null;
}

function emptyState(title: string, copy: string): string {
  return `
    <div class="empty-state">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(copy)}</p>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function queryOptionalElement<T extends Element>(selector: string): T | null {
  return document.querySelector<T>(selector);
}

function hasExplorerPanel(): boolean {
  return Boolean(
    elements.explorerTree &&
      elements.parserCountBadge &&
      elements.queryCountBadge,
  );
}

function hasCoveragePanel(): boolean {
  return Boolean(elements.coverageMatrix && elements.coverageDetail);
}

function clickCoverageSelection(event: Event): CoverageSelection | null {
  const target = event.target;

  if (!(target instanceof Element)) {
    return null;
  }

  const button = target.closest<HTMLElement>('[data-coverage-editor][data-coverage-kind]');

  if (!button) {
    return null;
  }

  const editor = button.dataset['coverageEditor'];
  const queryKind = button.dataset['coverageKind'];

  if (!editor || !queryKind) {
    return null;
  }

  return { editor, queryKind };
}

function resetActiveFilters(): void {
  state.search = '';
  for (const spec of FILTER_CONTROL_SPECS) {
    setFilterControlValue(spec.key, 'all');
  }
}

function controlFilterSelections(control: HTMLElement): Partial<Record<FilterControlKey, string>> {
  const selections: Partial<Record<FilterControlKey, string>> = {};

  for (const spec of FILTER_CONTROL_SPECS) {
    const value = control.dataset[filterDatasetKey(spec.key)];

    if (value) {
      selections[spec.key] = value;
    }
  }

  return selections;
}

function clickFilterAction(event: Event): boolean {
  const target = event.target;

  if (!(target instanceof Element)) {
    return false;
  }

  const control = target.closest<HTMLElement>(FILTER_CLICK_SELECTOR);

  if (!control) {
    return false;
  }

  if (control.dataset['clearAllFilters'] !== undefined) {
    resetActiveFilters();
    renderFull();
    return true;
  }

  const search = control.dataset['filterSearch'];

  if (search !== undefined) {
    state.search = state.search === search ? '' : search;
    renderFull();
    return true;
  }

  const selections = controlFilterSelections(control);
  const selectedFilters = Object.entries(selections) as [FilterControlKey, string][];

  if (!selectedFilters.length) {
    return false;
  }

  const isExactMatch = selectedFilters.every(([filter, value]) => filterControlValue(filter) === value);

  for (const [filter, value] of selectedFilters) {
    setFilterControlValue(filter, isExactMatch ? 'all' : value);
  }

  renderFull();
  return true;
}

function changeActiveFilterControl(event: Event): boolean {
  const target = event.target;

  if (!(target instanceof HTMLSelectElement)) {
    return false;
  }

  const filter = target.dataset['activeFilter'];

  if (!filter) {
    return false;
  }

  if (!FILTER_CONTROL_SPEC_BY_KEY.has(filter as FilterControlKey)) {
    return false;
  }

  setFilterControlValue(filter as FilterControlKey, target.value);

  renderFull();
  return true;
}

function keyCoverageSelection(event: KeyboardEvent): CoverageSelection | null {
  if (event.key !== 'Enter' && event.key !== ' ') {
    return null;
  }

  return clickCoverageSelection(event);
}

function getSidebarLinks(): HTMLAnchorElement[] {
  return Array.from(document.querySelectorAll<HTMLAnchorElement>('.sidebar-link'));
}

function setActiveSectionLink(sectionId: string): void {
  for (const link of getSidebarLinks()) {
    const isActive = link.dataset['navTarget'] === sectionId;

    link.classList.toggle('is-active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'location');
      continue;
    }

    link.removeAttribute('aria-current');
  }
}

function clickDataset(event: Event, key: 'parserId' | 'queryId'): string | null {
  const target = event.target;

  if (!(target instanceof Element)) {
    return null;
  }

  if (target.closest('a[href], button')) {
    return null;
  }

  const button = target.closest<HTMLElement>(`[data-${key === 'parserId' ? 'parser-id' : 'query-id'}]`);

  if (!button) {
    return null;
  }

  return button.dataset[key] ?? null;
}

function keyDataset(
  event: KeyboardEvent,
  key: 'parserId' | 'queryId',
): string | null {
  if (event.key !== 'Enter' && event.key !== ' ') {
    return null;
  }

  const target = event.target;

  if (!(target instanceof Element)) {
    return null;
  }

  if (target.closest('a[href], button')) {
    return null;
  }

  const item = target.closest<HTMLElement>(`[data-${key === 'parserId' ? 'parser-id' : 'query-id'}]`);

  if (!item) {
    return null;
  }

  event.preventDefault();

  return item.dataset[key] ?? null;
}

function renderPackageLink(packageId: string): string {
  const href = packageHref(packageId);

  if (!href) {
    return escapeHtml(packageId);
  }

  return `<a class="inline-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(packageId)}</a>`;
}

function packageHref(packageId: string): string | null {
  if (packageId.includes('://')) {
    return packageId;
  }

  if (packageId.startsWith('github.com/') || packageId.startsWith('gitlab.com/')) {
    return `https://${packageId}`;
  }

  return null;
}

function packageReleasesHref(packageId: string): string | null {
  if (packageId.startsWith('github.com/')) {
    return `https://${packageId}/releases`;
  }

  if (packageId.startsWith('gitlab.com/')) {
    return `https://${packageId}/-/releases`;
  }

  return null;
}

function packageReleaseAssetHref(packageId: string, assetName: string): string | null {
  if (packageId.startsWith('github.com/')) {
    return `https://${packageId}/releases/latest/download/${encodeURIComponent(assetName)}`;
  }

  return null;
}

function packageSourceArchiveHref(packageId: string, sourceCommit: string): string | null {
  if (packageId.startsWith('github.com/')) {
    return `https://${packageId}/archive/${encodeURIComponent(sourceCommit)}.tar.gz`;
  }

  return packageHref(packageId);
}

function packageCommitHref(packageId: string, ref: string): string | null {
  if (packageId.startsWith('github.com/')) {
    return `https://${packageId}/commit/${encodeURIComponent(ref)}`;
  }

  if (packageId.startsWith('gitlab.com/')) {
    return `https://${packageId}/-/commit/${encodeURIComponent(ref)}`;
  }

  return null;
}

function packageFileHref(packageId: string, version: string, path: string): string | null {
  if (!packageId.startsWith('github.com/')) {
    return null;
  }

  const repoPath = packageId.slice('github.com/'.length);
  const ref = version.replace(/^git-/, '').split('+')[0] || 'HEAD';

  return `https://github.com/${repoPath}/blob/${ref}/${path}`;
}

function getSupportedQueryKinds(target: EditorTarget): string[] {
  if ('typed' in target && target.typed) {
    return target.typed.supportedQueryKinds;
  }

  return target.raw?.supportedQueryKinds ?? [];
}
