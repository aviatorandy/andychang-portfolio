import type { ContentBlock } from "@/types/case-study-content";

type CaseStudyContentProps = {
  blocks: ContentBlock[];
};

function Heading({ level, text }: { level: number; text: string }) {
  const className =
    level <= 2
      ? "text-xl font-semibold text-[var(--color-ink)]"
      : level === 3
        ? "text-lg font-semibold text-[var(--color-ink)]"
        : "text-base font-semibold text-[var(--color-ink)]";

  if (level <= 2) return <h2 className={className}>{text}</h2>;
  if (level === 3) return <h3 className={className}>{text}</h3>;
  return <h4 className={className}>{text}</h4>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink-muted)]">
      {items.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyContent({ blocks }: CaseStudyContentProps) {
  const nodes: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    nodes.push(<BulletList key={`bullets-${key++}`} items={bulletBuffer} />);
    bulletBuffer = [];
  };

  for (const block of blocks) {
    if (block.type === "bullet") {
      bulletBuffer.push(block.text);
      continue;
    }

    flushBullets();

    if (block.type === "divider") {
      nodes.push(<hr key={`hr-${key++}`} className="border-[var(--color-border)]" />);
    } else if (block.type === "heading") {
      nodes.push(
        <Heading key={`h-${key++}`} level={block.level} text={block.text} />
      );
    } else if (block.type === "quote") {
      nodes.push(
        <blockquote
          key={`q-${key++}`}
          className="border-l-2 border-[var(--color-border)] pl-4 italic text-[var(--color-ink-muted)]"
        >
          {block.text}
        </blockquote>
      );
    } else if (block.type === "callout") {
      nodes.push(
        <p
          key={`c-${key++}`}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-[var(--color-ink-muted)]"
        >
          {block.text}
        </p>
      );
    } else {
      nodes.push(
        <p key={`p-${key++}`} className="leading-relaxed text-[var(--color-ink-muted)]">
          {block.text}
        </p>
      );
    }
  }

  flushBullets();

  return <div className="space-y-6">{nodes}</div>;
}
