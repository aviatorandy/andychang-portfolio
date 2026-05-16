export type ContentBlock =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullet"; text: string }
  | { type: "numbered"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string }
  | { type: "divider" };

export type CaseStudyContent = {
  title: string;
  blocks: ContentBlock[];
};
