export type DecisionCardBlock = {
  type: "decision";
  decision: string;
  tradeoff: string;
  outcome: string;
};

export type CardGridBlock = {
  type: "card-grid";
  items: Array<{ title: string; description?: string }>;
};

export type DiagramBlock = {
  type: "diagram";
  title: string;
  before?: string[];
  after?: string[];
  beforeLabel?: string;
  afterLabel?: string;
  steps?: string[];
  fields?: string[];
  note?: string;
};

export type MatrixBlock = {
  type: "matrix";
  title: string;
  columns: string[];
  rows: Array<{ cells: string[]; highlighted?: boolean }>;
};

export type ContentBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullet"; text: string }
  | { type: "numbered"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string }
  | { type: "divider" }
  | CardGridBlock
  | DecisionCardBlock
  | DiagramBlock
  | MatrixBlock;

export type CaseStudyContent = {
  title: string;
  blocks: ContentBlock[];
};
