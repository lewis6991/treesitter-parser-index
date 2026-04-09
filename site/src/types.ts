export interface ParserCapabilities {
  buildFromSource: boolean;
  customScanner: boolean;
  sourceArchive: boolean;
  wasm: boolean;
}

export interface ParserArtifact {
  kind: 'source-archive' | 'release-asset';
  format: string;
  name?: string;
}

export type QueryFiles = string | string[];

export interface ParserRelease {
  id: string;
  name: string;
  language: string;
  package: string;
  synthetic?: 'unknown';
  syntheticPackIds?: string[];
  version: string;
  sourceCommit: string;
  lastUpdated: string | null;
  upstreamSemver: string | null;
  abi: number | null;
  owners: string[];
  capabilities: ParserCapabilities;
  artifacts: ParserArtifact[];
  bundledQueryKinds: string[];
  bundledQueries: Record<string, string[]>;
  bundledQueryEditors: string[];
  summary: string;
}

export interface ParserCompatibility {
  tested?: string[];
  semver?: string;
}

export interface QueryPackLanguage {
  language: string;
  parserLanguage?: string;
  queryKinds: string[];
  testedParserRefs?: string[];
}

export interface QueryPackLayout {
  installRoot: string;
  queryRoot: string;
}

export interface QueryPack {
  id: string;
  name: string;
  package: string;
  version: string;
  languages: string[];
  languageCount?: number;
  languageDetails?: QueryPackLanguage[];
  owners: string[];
  layout: QueryPackLayout;
  targets: string[];
  queryKinds: string[];
  queries: Record<string, QueryFiles>;
  parserCompatibility: ParserCompatibility;
  summary: string;
}

export interface TypedTargetPayload {
  supportedQueryKinds: string[];
  requiredQueryKinds?: string[];
  queryFiles: string[];
}

export interface RawTargetPayload {
  supportedQueryKinds?: string[];
  requiredQueryKinds?: string[];
  installPath: string;
  note?: string;
}

interface BaseEditorTarget {
  id: string;
  editor: string;
  module: string;
  feature: string;
  versionRange: string;
  targetSchema: string;
}

export interface TypedEditorTarget extends BaseEditorTarget {
  targetSchema: Exclude<string, 'raw'>;
  typed: TypedTargetPayload;
  raw?: never;
}

export interface RawEditorTarget extends BaseEditorTarget {
  targetSchema: 'raw';
  raw: RawTargetPayload;
  typed?: never;
}

export type EditorTarget = TypedEditorTarget | RawEditorTarget;

export interface IndexData {
  generatedAt: string;
  parsers: ParserRelease[];
  queryPacks: QueryPack[];
  targets: EditorTarget[];
}
