import { INDEX_DATA } from './index-data.js';
import type {
  EditorTarget,
  IndexData,
  ParserRelease,
  QueryPack,
  QueryPackLanguage,
} from './types.js';

type CompatibilityRank = 0 | 1 | 2 | 3;
type ActiveFilters = Pick<FilterState, 'search' | 'language' | 'editor' | 'queryKind' | 'install'>;

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
const parserCompactDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
});
const parserFullDateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

interface FilterState {
  search: string;
  language: string;
  editor: string;
  queryKind: string;
  install: 'all' | 'wasm' | 'source-archive' | 'build-from-source';
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

interface CountedOption {
  value: string;
  label: string;
  count: number;
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
const allLanguages = unique([
  ...data.parsers.map((parser) => normalizeLanguageId(parser.language)),
  ...data.queryPacks.flatMap((pack) => packLanguageList(pack).map(normalizeLanguageId)),
]).sort();
const allEditors = unique(data.targets.map((target) => target.editor)).sort();
const allQueryKinds = unique([
  ...data.parsers.flatMap((parser) => parser.bundledQueryKinds),
  ...data.queryPacks.flatMap((pack) => pack.queryKinds),
]).sort();
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
// Explorer clicks keep the filters stable, so reuse the expensive filtered lists until a filter changes.
const filteredParserCache = new Map<string, ParserRelease[]>();
const rankedPackCache = new Map<string, RankedPack[]>();
let cachedBaseFilterKey = '';

const state: FilterState = {
  search: '',
  language: 'all',
  editor: 'all',
  queryKind: 'all',
  install: 'all',
  selectedParserId: data.parsers[0]?.id ?? null,
  selectedQueryId: null,
  selectedCoverage: null,
};

const elements = {
  searchInput: queryOptionalElement<HTMLInputElement>('#search-input'),
  languageFilter: queryOptionalElement<HTMLSelectElement>('#language-filter'),
  editorFilter: queryOptionalElement<HTMLSelectElement>('#editor-filter'),
  queryKindFilter: queryOptionalElement<HTMLSelectElement>('#query-kind-filter'),
  installFilter: queryOptionalElement<HTMLSelectElement>('#install-filter'),
  explorerTree: queryOptionalElement<HTMLDivElement>('#explorer-tree'),
  parserCountBadge: queryOptionalElement<HTMLSpanElement>('#parser-count-badge'),
  queryCountBadge: queryOptionalElement<HTMLSpanElement>('#query-count-badge'),
  detailPanel: queryOptionalElement<HTMLDivElement>('#detail-panel'),
  coverageMatrix: queryOptionalElement<HTMLDivElement>('#coverage-matrix'),
  coverageDetail: queryOptionalElement<HTMLDivElement>('#coverage-detail'),
};

init();

function init(): void {
  wireEvents();
  wireSectionNav();
  renderFull();
}

function renderFilterOptions(filters: ActiveFilters): void {
  const languageFilter = elements.languageFilter;
  const editorFilter = elements.editorFilter;
  const queryKindFilter = elements.queryKindFilter;
  const installFilter = elements.installFilter;

  if (!languageFilter || !editorFilter || !queryKindFilter || !installFilter) {
    return;
  }

  const installRoutes: CountedOption[] = [
    {
      value: 'wasm',
      label: 'Wasm',
      count: countFilteredParsers({ ...filters, install: 'wasm' }),
    },
    {
      value: 'source-archive',
      label: 'Source Archive',
      count: countFilteredParsers({ ...filters, install: 'source-archive' }),
    },
    {
      value: 'build-from-source',
      label: 'Build From Source',
      count: countFilteredParsers({ ...filters, install: 'build-from-source' }),
    },
  ];

  setCountedOptions(
    languageFilter,
    'All languages',
    countFilteredParsers({ ...filters, language: 'all' }),
    allLanguages.map((value) => ({
      value,
      label: labelize(value),
      count: countFilteredParsers({ ...filters, language: value }),
    })),
    state.language,
  );
  setCountedOptions(
    editorFilter,
    'All editors',
    countFilteredParsers({ ...filters, editor: 'all' }),
    allEditors.map((value) => ({
      value,
      label: labelize(value),
      count: countFilteredParsers({ ...filters, editor: value }),
    })),
    state.editor,
  );
  setCountedOptions(
    queryKindFilter,
    'All query kinds',
    countFilteredParsers({ ...filters, queryKind: 'all' }),
    allQueryKinds.map((value) => ({
      value,
      label: labelize(value),
      count: countFilteredParsers({ ...filters, queryKind: value }),
    })),
    state.queryKind,
  );
  setCountedOptions(
    installFilter,
    'All routes',
    countFilteredParsers({ ...filters, install: 'all' }),
    installRoutes,
    state.install,
  );
}

function wireEvents(): void {
  const searchInput = elements.searchInput;
  const languageFilter = elements.languageFilter;
  const editorFilter = elements.editorFilter;
  const queryKindFilter = elements.queryKindFilter;
  const installFilter = elements.installFilter;
  const explorerTree = elements.explorerTree;
  const coverageMatrix = elements.coverageMatrix;

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value.trim().toLowerCase();
      renderFull();
    });
  }

  if (languageFilter) {
    languageFilter.addEventListener('change', () => {
      state.language = languageFilter.value;
      renderFull();
    });
  }

  if (editorFilter) {
    editorFilter.addEventListener('change', () => {
      state.editor = editorFilter.value;
      renderFull();
    });
  }

  if (queryKindFilter) {
    queryKindFilter.addEventListener('change', () => {
      state.queryKind = queryKindFilter.value;
      renderFull();
    });
  }

  if (installFilter) {
    installFilter.addEventListener('change', () => {
      state.install = installFilter.value as FilterState['install'];
      renderFull();
    });
  }

  if (explorerTree) {
    explorerTree.addEventListener('click', (event) => {
      if (clickTreeFilterAction(event)) {
        return;
      }

      const queryId = clickDataset(event, 'queryId');

      if (queryId) {
        state.selectedQueryId = queryId;
        renderExplorerSelection();
        return;
      }

      const parserId = clickDataset(event, 'parserId');

      if (!parserId) {
        return;
      }

      state.selectedParserId = parserId;
      state.selectedQueryId = null;
      renderExplorerSelection();
    });

    explorerTree.addEventListener('keydown', (event) => {
      const queryId = keyDataset(event, 'queryId');

      if (queryId) {
        state.selectedQueryId = queryId;
        renderExplorerSelection();
        return;
      }

      const parserId = keyDataset(event, 'parserId');

      if (!parserId) {
        return;
      }

      state.selectedParserId = parserId;
      state.selectedQueryId = null;
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
    });

    coverageMatrix.addEventListener('keydown', (event) => {
      const selection = keyCoverageSelection(event);

      if (!selection) {
        return;
      }

      state.selectedCoverage = selection;
      renderCoverage();
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

function renderFull(): void {
  const filters = getActiveFilters();
  renderFilterOptions(filters);

  if (hasExplorerPanel()) {
    syncRenderCaches(filters);
    renderExplorerPanels(prepareExplorerRenderState(filters));
  }

  if (hasCoveragePanel()) {
    renderCoverage();
  }
}

function renderExplorerSelection(): void {
  if (!hasExplorerPanel()) {
    return;
  }

  const filters = getActiveFilters();
  syncRenderCaches(filters);
  renderExplorerPanels(prepareExplorerRenderState(filters));
}

function renderExplorerPanels(explorerState: ExplorerRenderState): void {
  renderExplorerTree(explorerState.parsers, explorerState.rankedPacks);
  renderDetail(explorerState.selectedParser, explorerState.rankedPacks);
}

function prepareExplorerRenderState(filters: ActiveFilters): ExplorerRenderState {
  const parsers = getFilteredParsers(filters);

  if (!parsers.some((parser) => parser.id === state.selectedParserId)) {
    state.selectedParserId = parsers[0]?.id ?? null;
    state.selectedQueryId = null;
  }

  const selectedParser = parsers.find((parser) => parser.id === state.selectedParserId) ?? null;
  const rankedPacks = getRankedPacks(selectedParser, filters);

  if (!rankedPacks.some((entry) => entry.pack.id === state.selectedQueryId)) {
    state.selectedQueryId = null;
  }

  return {
    parsers,
    selectedParser,
    rankedPacks,
  };
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
      'Adjust the language, package, or install route filters.',
    );
    return;
  }

  explorerTree.innerHTML = parsers
    .map((parser) => {
      const isSelected = parser.id === state.selectedParserId;
      const freshness = parserFreshnessState(parser);
      const chipFilters = {
        ...getActiveFilters(),
        editor: 'all' as const,
      };
      const matchingPacks = isSelected ? rankedPacks : getRankedPacks(parser);
      const chipPacks = getRankedPacks(parser, chipFilters);
      const compatiblePacks = isSelected ? matchingPacks : [];
      const matchingEditors = unique(
        chipPacks.flatMap(({ pack }) => packEditors(pack)),
      );
      const visibleEditors = matchingEditors.slice(0, 3);
      const hiddenEditorCount = matchingEditors.length - visibleEditors.length;
      const inlineEditorChips = [
        ...visibleEditors.map(renderEditorFilterChip),
        ...(hiddenEditorCount > 0
          ? [`<span class="chip chip-outline tree-item-overflow-chip">+${escapeHtml(String(hiddenEditorCount))}</span>`]
          : []),
      ].join('');
      const signalChips = renderParserSignalChips(parser).join('');
      const freshnessClass = freshness === 'neutral' ? '' : `is-${freshness}`;

      return `
        <section class="tree-node">
          <article class="tree-item tree-item-parser ${isSelected ? 'is-selected' : ''} ${freshnessClass}" data-parser-id="${escapeHtml(parser.id)}" role="button" tabindex="0" aria-label="${escapeHtml(`Select parser release ${parser.name}`)}">
            <div class="tree-item-head">
              <div class="tree-item-title-row">
                <h4>${escapeHtml(parser.name)}</h4>
                ${inlineEditorChips ? `<div class="tree-item-inline-chips chip-row">${inlineEditorChips}</div>` : ''}
              </div>
              ${renderParserVersionToken(parser)}
            </div>
            <div class="tree-item-meta">
              <span class="tree-item-summary-inline">${renderPackageLink(parser.package)}</span>
              <span class="tree-item-meta-freshness ${freshnessClass}">${escapeHtml(renderParserLastUpdated(parser, 'compact'))}</span>
              <span>${escapeHtml(shortCommit(parser.sourceCommit))}</span>
              <span>${matchingPacks.length} matching sources</span>
            </div>
            ${signalChips ? `<div class="tree-item-targets chip-row">${signalChips}</div>` : ''}
          </article>
          ${
            isSelected
              ? `
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
  const visibleTargets = filterTargetsForQueryKinds(pack.targets, visibleQueryKinds);
  const filterChips = [
    ...visibleQueryKinds.map(renderQueryKindFilterChip),
    ...visibleTargets.map(renderInteractiveTargetTag),
  ].join('');

  return `
    <section class="tree-node tree-node-pack">
      <article class="tree-item tree-item-pack ${isSelected ? 'is-selected' : ''}" data-query-id="${escapeHtml(pack.id)}" role="button" tabindex="0" aria-label="${escapeHtml(`Select query source ${pack.name}`)}">
        <div class="tree-item-head">
          <div>
            <h4>${escapeHtml(pack.name)}</h4>
          </div>
          <span class="tree-item-token tree-item-token-${compatibilityLabel(rank)}">${escapeHtml(compatibilityLabel(rank))}</span>
        </div>
        <div class="tree-item-meta">
          <span class="tree-item-summary-inline">${renderPackageLink(pack.package)}</span>
          <span>${escapeHtml(packScopeLabel(pack))}</span>
          <span>${escapeHtml(pack.layout.queryRoot)}</span>
        </div>
        ${filterChips ? `<div class="tree-item-targets chip-row">${filterChips}</div>` : ''}
      </article>
      ${
        isSelected
          ? `
            <div class="tree-leaves">
              ${
                visibleTargets.length
                  ? visibleTargets
                      .map(
                        (targetId) => `
                          <div class="tree-leaf">
                            ${renderInteractiveTargetTag(targetId)}
                            <span class="tree-leaf-id">${escapeHtml(targetId)}</span>
                          </div>
                        `,
                      )
                      .join('')
                  : '<div class="tree-empty subtle">No explicit editor support metadata for this language. Queries may ship with the package itself.</div>'
              }
            </div>
          `
          : ''
      }
    </section>
  `;
}

function renderDetail(selectedParser: ParserRelease | null, rankedPacks: RankedPack[]): void {
  const detailPanel = elements.detailPanel;

  if (!detailPanel) {
    return;
  }

  const activeQuery = rankedPacks.find((entry) => entry.pack.id === state.selectedQueryId);

  if (activeQuery) {
    detailPanel.innerHTML = renderQueryDetail(activeQuery, selectedParser);
    return;
  }

  if (!selectedParser) {
    detailPanel.innerHTML = emptyState(
      'Nothing is selected.',
      'Select a parser release to review its artifacts and matching query sources.',
    );
    return;
  }

  detailPanel.innerHTML = renderParserDetail(selectedParser);
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

  return `
    <div class="detail-hero">
      <p class="eyebrow eyebrow-inline">Parser Release</p>
      <h3>${escapeHtml(parser.name)}</h3>
      <p>${escapeHtml(parser.summary)}</p>
    </div>

    <div class="detail-metrics">
      <article class="metric-card">
        <span>Package</span>
        <strong>${renderPackageLink(parser.package)}</strong>
      </article>
      <article class="metric-card">
        <span>Version</span>
        <strong>${renderParserVersionValue(parser)}</strong>
      </article>
      <article class="metric-card">
        <span>Source Commit</span>
        <strong>${escapeHtml(shortCommit(parser.sourceCommit))}</strong>
      </article>
      <article class="metric-card">
        <span>Last Updated</span>
        <strong class="${freshnessClass}">${escapeHtml(renderParserLastUpdated(parser, 'full'))}</strong>
      </article>
      <article class="metric-card">
        <span>ABI</span>
        <strong>${escapeHtml(String(parser.abi))}</strong>
      </article>
    </div>

    ${
      parser.capabilities.wasm
        ? `
          <section class="detail-block">
            <h4>Wasm</h4>
            <div class="chip-row">
              <span class="chip chip-accent">published</span>
            </div>
          </section>
        `
        : ''
    }

    <section class="detail-block">
      <h4>Bundled Query Kinds</h4>
      <div class="chip-row">
        ${chipList(parser.bundledQueryKinds, 'chip chip-outline')}
      </div>
    </section>

    <section class="detail-block">
      <h4>Owners</h4>
      <div class="chip-row">
        ${chipList(parser.owners, 'chip')}
      </div>
    </section>
  `;
}

function renderQueryDetail(
  entry: RankedPack,
  parser: ParserRelease | null,
): string {
  const { pack, rank } = entry;
  const compatibility = pack.parserCompatibility;
  const resolvedLanguage = resolvePackLanguage(pack, parser);
  const resolvedLanguageDetail = resolvedLanguage
    ? packLanguageDetails(pack).find(
        (entry) => normalizeLanguageId(entry.language) === normalizeLanguageId(resolvedLanguage),
      ) ?? null
    : null;
  const exactTestedParserRefs = unique([
    ...(resolvedLanguageDetail?.testedParserRefs ?? []),
    ...(compatibility.tested ?? []),
  ]);
  const sharesTestedParserSource = Boolean(
    parser && exactTestedParserRefs.some((testedParserRef) => parserPackageFromRef(testedParserRef) === parser.package),
  );
  const languageQueryKinds =
    resolvedLanguage && pack.languageDetails?.length
      ? queryKindsForResolvedLanguage(pack, resolvedLanguage)
      : [];
  const visibleQueryKinds = visibleQueryKindsForPack(pack, resolvedLanguage);
  const packageOnlyQueryKinds =
    resolvedLanguage && languageQueryKinds.length
      ? pack.queryKinds.filter((queryKind) => !languageQueryKinds.includes(queryKind))
      : [];
  const visibleTargets = filterTargetsForQueryKinds(pack.targets, visibleQueryKinds);

  return `
    <div class="detail-hero">
      <p class="eyebrow eyebrow-inline">Query Source</p>
      <h3>${escapeHtml(pack.name)}</h3>
      <p>${escapeHtml(pack.summary)}</p>
    </div>

    <div class="detail-metrics">
      <article class="metric-card">
        <span>Package</span>
        <strong>${renderPackageLink(pack.package)}</strong>
      </article>
      <article class="metric-card">
        <span>Compatibility</span>
        <strong>${escapeHtml(compatibilityLabel(rank))}</strong>
      </article>
      <article class="metric-card">
        <span>Languages</span>
        <strong>${escapeHtml(packScopeLabel(pack))}</strong>
      </article>
    </div>

    <section class="detail-block">
      <h4>Query Kinds${resolvedLanguage ? ` for ${escapeHtml(labelize(resolvedLanguage))}` : ''}</h4>
      <div class="chip-row">
        ${chipList(visibleQueryKinds, 'chip')}
      </div>
      ${
        packageOnlyQueryKinds.length
          ? `<p class="subtle">This package also ships ${escapeHtml(packageOnlyQueryKinds.map(labelize).join(', '))} for other languages.</p>`
          : ''
      }
    </section>

    <section class="detail-block">
      <h4>Package Layout</h4>
      <div class="mini-card">
        <div class="mini-card-top">
          <strong>${escapeHtml(pack.layout.queryRoot)}</strong>
          <span class="pill pill-soft">${escapeHtml(pack.layout.installRoot)}</span>
        </div>
        <p>Queries resolve from the package install root shown above.</p>
      </div>
    </section>

    <section class="detail-block">
      <h4>Language Coverage</h4>
      <div class="mini-card">
        <p>${escapeHtml(packCoverageSummary(pack))}</p>
      </div>
      <div class="mini-card">
        <p>${escapeHtml(packCoverageDetail(pack))}</p>
      </div>
      ${
        resolvedLanguageDetail?.parserLanguage &&
        normalizeLanguageId(resolvedLanguageDetail.parserLanguage) !== normalizeLanguageId(resolvedLanguageDetail.language)
          ? `
            <div class="mini-card">
              <div class="mini-card-top">
                <strong>Shared Grammar</strong>
                <span class="pill pill-soft">${escapeHtml(labelize(resolvedLanguageDetail.parserLanguage))}</span>
              </div>
              <p>${escapeHtml(`${labelize(resolvedLanguageDetail.language)} resolves through the ${labelize(resolvedLanguageDetail.parserLanguage)} parser.`)}</p>
            </div>
          `
          : ''
      }
    </section>

    <section class="detail-block">
      <h4>Editor Support${resolvedLanguage ? ` for ${escapeHtml(labelize(resolvedLanguage))}` : ''}</h4>
      ${
        visibleTargets.length
          ? `
            <div class="chip-row">
              ${visibleTargets.map(renderTargetTag).join('')}
            </div>
          `
          : '<p class="subtle">No explicit editor support metadata for this language. These queries may ship with the package itself.</p>'
      }
    </section>

    <section class="detail-block">
      <h4>Compatibility Notes</h4>
      <div class="mini-card">
        <div class="mini-card-top">
          <strong>Selected parser</strong>
          <span class="pill pill-${compatibilityLabel(rank)}">${escapeHtml(compatibilityLabel(rank))}</span>
        </div>
        <p>${parser ? renderPackageLink(parser.package) : 'No parser selected'}</p>
      </div>
      ${
        exactTestedParserRefs.length
          ? `
            <div class="mini-card">
              <div class="mini-card-top">
                <strong>Exact tested parsers</strong>
                <span class="pill">exact</span>
              </div>
              <p>${escapeHtml(exactTestedParserRefs.join(' · '))}</p>
            </div>
          `
          : ''
      }
      ${
        parser && sharesTestedParserSource && rank !== 3
          ? `
            <div class="mini-card">
              <div class="mini-card-top">
                <strong>Same parser source</strong>
                <span class="pill pill-unknown">repo match</span>
              </div>
              <p>The selected parser comes from the same repository, but not the exact pinned revision listed above.</p>
            </div>
          `
          : ''
      }
      ${
        compatibility.semver
          ? `
            <div class="mini-card">
              <div class="mini-card-top">
                <strong>Semver range</strong>
                <span class="pill">range</span>
              </div>
              <p>${escapeHtml(compatibility.semver)}</p>
            </div>
          `
          : !exactTestedParserRefs.length
            ? `
              <div class="mini-card">
                <div class="mini-card-top">
                  <strong>Declared support</strong>
                  <span class="pill pill-unknown">unknown</span>
                </div>
                <p>No parser compatibility metadata has been published yet.</p>
              </div>
            `
            : ''
      }
    </section>

    <section class="detail-block">
      <h4>Files${resolvedLanguage ? ` for ${escapeHtml(labelize(resolvedLanguage))}` : ''}</h4>
      ${
        visibleQueryKinds.length
          ? visibleQueryKinds
              .map(
                (kind) => {
                  const resolvedPaths = resolvedQueryFiles(pack, kind, resolvedLanguage);

                  if (!resolvedPaths.length) {
                    return '';
                  }

                  return `
                  <div class="mini-card">
                    <div class="mini-card-top">
                      <strong>${escapeHtml(kind)}</strong>
                      <span class="pill pill-soft">.scm</span>
                    </div>
                    ${resolvedPaths
                      .map((resolvedPath) => `<p>${renderQueryFileReference(pack, resolvedPath)}</p>`)
                      .join('')}
                  </div>
                `;
                },
              )
              .join('')
          : '<p class="subtle">No query files are published for the current language selection.</p>'
      }
    </section>
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

  const relatedMatches = getRankedPacks(parser, filters);

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

  return matchesSearch(parserSearchIndex.get(parser.id) ?? '', filters.search) || relatedMatches.length > 0;
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
  const rankedPacks = candidates.filter(({ pack }) => matchesPackFilters(pack, filters));

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
): boolean {
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

  if (install === 'source-archive') {
    return parser.capabilities.sourceArchive;
  }

  return parser.capabilities.buildFromSource;
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
    parser.capabilities.wasm ? 'wasm' : '',
    parser.capabilities.sourceArchive ? 'source archive release artifact' : '',
    parser.capabilities.buildFromSource ? 'build from source' : '',
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

function parserRef(parser: ParserRelease): string {
  return `${parser.package}@${parser.version}`;
}

function parserPackageFromRef(ref: string): string {
  return ref.split('@')[0] ?? ref;
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

function packCoverageDetail(pack: QueryPack): string {
  const languages = packLanguageList(pack);
  const preview = languages.slice(0, 10).map(labelize).join(', ');
  const total = packLanguageCount(pack);

  if (total > 10) {
    return `${preview}, plus ${total - 10} more.`;
  }

  return preview;
}

function packCoverageSummary(pack: QueryPack): string {
  if (!pack.languageDetails?.length) {
    return `${packScopeLabel(pack)} with ${pack.queryKinds.length} query kinds.`;
  }

  const coverage = pack.queryKinds
    .map((queryKind) => `${queryKind} ${countLanguagesForKind(pack, queryKind)}`)
    .join(' · ');

  return `${packLanguageCount(pack)} languages. ${coverage}.`;
}

function packLanguageList(pack: QueryPack): string[] {
  return packLanguageDetails(pack).map(({ language }) => language);
}

function countLanguagesForKind(pack: QueryPack, queryKind: string): number {
  return packLanguageDetails(pack).filter((entry) => entry.queryKinds.includes(queryKind)).length;
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

      if (
        state.language !== 'all' &&
        normalizedLanguage !== normalizeLanguageId(state.language)
      ) {
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

      if (
        state.language !== 'all' &&
        normalizedLanguage !== normalizeLanguageId(state.language)
      ) {
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
  return packLanguageDetails(pack)
    .filter((entry) => entry.queryKinds.includes(queryKind))
    .map((entry) => entry.language);
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

    if (
      state.queryKind !== 'all' &&
      !parser.bundledQueryKinds.includes(state.queryKind)
    ) {
      return false;
    }

    return matchesSearch(parserSearchIndex.get(parser.id) ?? '');
  });
}

function getAllLanguages(): string[] {
  return allLanguages;
}

function getActiveFilters(): ActiveFilters {
  return {
    search: state.search,
    language: state.language,
    editor: state.editor,
    queryKind: state.queryKind,
    install: state.install,
  };
}

function filterCacheKey(filters: ActiveFilters): string {
  return [
    filters.search,
    filters.language,
    filters.editor,
    filters.queryKind,
    filters.install,
  ].join('\u0000');
}

function syncRenderCaches(filters: ActiveFilters): void {
  const baseFilterKey = filterCacheKey(filters);

  if (baseFilterKey === cachedBaseFilterKey) {
    return;
  }

  filteredParserCache.clear();
  rankedPackCache.clear();
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
  return renderFilterChip(
    labelize(editor),
    `chip chip-outline chip-editor chip-editor-${editorClassSuffix(editor)}`,
    { 'data-filter-editor': editor },
    state.editor === editor,
  );
}

function renderParserVersionToken(parser: ParserRelease): string {
  const label = parser.upstreamSemver ?? 'commit-only';
  const releasesHref = packageReleasesHref(parser.package);

  if (!parser.upstreamSemver || !releasesHref) {
    return `<span class="tree-item-token">${escapeHtml(label)}</span>`;
  }

  return `<a class="inline-link tree-item-token tree-item-token-release" href="${escapeHtml(releasesHref)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)}</a>`;
}

function renderParserVersionValue(parser: ParserRelease): string {
  const label = parser.upstreamSemver ?? 'commit-only';
  const releasesHref = packageReleasesHref(parser.package);

  if (!parser.upstreamSemver || !releasesHref) {
    return escapeHtml(label);
  }

  return `<a class="inline-link" href="${escapeHtml(releasesHref)}" target="_blank" rel="noreferrer noopener">${escapeHtml(label)}</a>`;
}

function renderTargetTag(targetId: string): string {
  const target = targetIndex.get(targetId);

  if (!target) {
    return `<span class="chip chip-outline">${escapeHtml(targetId)}</span>`;
  }

  return `<span class="chip chip-outline chip-editor chip-editor-${editorClassSuffix(target.editor)}">${escapeHtml(targetLabel(targetId))}</span>`;
}

function renderInteractiveTargetTag(targetId: string): string {
  const target = targetIndex.get(targetId);

  if (!target) {
    return `<span class="chip chip-outline">${escapeHtml(targetId)}</span>`;
  }

  return renderFilterChip(
    targetLabel(targetId),
    `chip chip-outline chip-editor chip-editor-${editorClassSuffix(target.editor)}`,
    { 'data-filter-editor': target.editor },
    state.editor === target.editor,
  );
}

function editorClassSuffix(editor: string): string {
  return editor.toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

function renderQueryKindFilterChip(queryKind: string): string {
  return renderFilterChip(
    labelize(queryKind),
    'chip chip-outline',
    { 'data-filter-query-kind': queryKind },
    state.queryKind === queryKind,
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

  if (parser.capabilities.wasm) {
    chips.push(
      renderFilterChip(
        'wasm',
        'chip chip-accent',
        { 'data-filter-install': 'wasm' },
        state.install === 'wasm',
      ),
    );
  }

  return chips;
}

function renderFilterChip(
  label: string,
  className: string,
  dataset: Record<string, string>,
  isActive: boolean,
): string {
  const attributes = Object.entries(dataset)
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(' ');

  return `<button type="button" class="${className} chip-button ${isActive ? 'is-active' : ''}" ${attributes}>${escapeHtml(label)}</button>`;
}

function packEditors(pack: QueryPack): string[] {
  return unique(
    pack.targets
      .map((targetId) => targetIndex.get(targetId)?.editor ?? '')
      .filter((editor): editor is string => Boolean(editor)),
  );
}

function chipList(items: readonly string[], className: string): string {
  return items
    .map((item) => `<span class="${className}">${escapeHtml(item)}</span>`)
    .join('');
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

function hasBundledQueryPack(parser: ParserRelease): boolean {
  return Object.keys(parser.bundledQueries).length > 0;
}

function compactList(items: readonly string[], maxItems: number): string {
  if (items.length <= maxItems) {
    return items.join(', ');
  }

  return `${items.slice(0, maxItems).join(', ')} +${items.length - maxItems}`;
}

function setCountedOptions(
  select: HTMLSelectElement,
  allLabel: string,
  allCount: number,
  options: readonly CountedOption[],
  selectedValue: string,
): void {
  const visibleOptions = options.filter(
    (option) => option.count > 0 || option.value === selectedValue,
  );

  select.innerHTML = [
    `<option value="all">${escapeHtml(`${allLabel} (${allCount})`)}</option>`,
    ...visibleOptions.map(
      (option) => `
        <option value="${escapeHtml(option.value)}">
          ${escapeHtml(`${option.label} (${option.count})`)}
        </option>
      `,
    ),
  ].join('');
  select.value = selectedValue;
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
      elements.queryCountBadge &&
      elements.detailPanel,
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

function clickTreeFilterAction(event: Event): boolean {
  const target = event.target;

  if (!(target instanceof Element)) {
    return false;
  }

  const control = target.closest<HTMLElement>(
    '[data-filter-editor], [data-filter-query-kind], [data-filter-install]',
  );

  if (!control) {
    return false;
  }

  const editor = control.dataset['filterEditor'];

  if (editor) {
    state.editor = state.editor === editor ? 'all' : editor;
    renderFull();
    return true;
  }

  const queryKind = control.dataset['filterQueryKind'];

  if (queryKind) {
    state.queryKind = state.queryKind === queryKind ? 'all' : queryKind;
    renderFull();
    return true;
  }

  const install = control.dataset['filterInstall'] as FilterState['install'] | undefined;

  if (!install) {
    return false;
  }

  state.install = state.install === install ? 'all' : install;
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

  return `<a class="inline-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(packageId)}</a>`;
}

function packageHref(packageId: string): string {
  if (packageId.includes('://')) {
    return packageId;
  }

  return `https://${packageId}`;
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
