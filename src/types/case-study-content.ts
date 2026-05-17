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
  steps?: string[];
  fields?: string[];
  note?: string;
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
  | DiagramBlock;

export type CaseStudyContent = {
  title: string;
  blocks: ContentBlock[];
};
