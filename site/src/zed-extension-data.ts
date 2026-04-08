export interface ZedExtensionPackData {
  extension: string;
  language: string;
  parserLanguage?: string;
  queryKinds: string[];
}

export const ZED_EXTENSION_PACKS: ZedExtensionPackData[] = [
  {
    "extension": "glsl",
    "language": "glsl",
    "queryKinds": [
      "brackets",
      "highlights",
      "injections"
    ]
  },
  {
    "extension": "html",
    "language": "html",
    "queryKinds": [
      "brackets",
      "highlights",
      "indents",
      "injections",
      "outline",
      "overrides"
    ]
  },
  {
    "extension": "proto",
    "language": "proto",
    "queryKinds": [
      "highlights",
      "indents",
      "injections",
      "outline",
      "textobjects"
    ]
  }
];
