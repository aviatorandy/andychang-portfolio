import { Fragment } from "react";
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

function CardGrid({
  items,
}: {
  items: Array<{ title: string; description?: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4"
        >
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {item.title}
          </p>
          {item.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

type Decision = { decision: string; tradeoff: string; outcome: string };

function DecisionGrid({ items }: { items: Decision[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.decision}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4"
        >
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            {item.decision}
          </p>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="text-xs font-semibold tracking-wide text-[var(--color-ink-subtle)] uppercase">
                Tradeoff
              </dt>
              <dd className="mt-0.5 text-[var(--color-ink-muted)]">
                {item.tradeoff}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-[var(--color-ink-subtle)] uppercase">
                Outcome
              </dt>
              <dd className="mt-0.5 text-[var(--color-ink-muted)]">
                {item.outcome}
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}

function Diagram({
  title,
  before,
  after,
  steps,
  fields,
  note,
}: {
  title: string;
  before?: string[];
  after?: string[];
  steps?: string[];
  fields?: string[];
  note?: string;
}) {
  return (
    <figure className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5">
      <figcaption className="mb-4 text-sm font-semibold text-[var(--color-ink)]">
        {title}
      </figcaption>

      {before && after && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--color-ink-subtle)] uppercase">
              Before
            </p>
            <ul className="space-y-1.5 text-sm text-[var(--color-ink-muted)]">
              {before.map((s) => (
                <li key={s} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-[var(--color-ink-subtle)] uppercase">
              After
            </p>
            <ul className="space-y-1.5 text-sm text-[var(--color-ink-muted)]">
              {after.map((s) => (
                <li key={s} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {steps && (
        <div className="flex flex-wrap items-center gap-2">
          {steps.map((s, i) => (
            <Fragment key={s}>
              <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)]">
                {s}
              </span>
              {i < steps.length - 1 && (
                <span className="text-[var(--color-ink-subtle)]" aria-hidden>
                  →
                </span>
              )}
            </Fragment>
          ))}
        </div>
      )}

      {fields && (
        <div className="flex flex-wrap gap-2">
          {fields.map((f) => (
            <span
              key={f}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs text-[var(--color-ink-muted)]"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      {note && (
        <p className="mt-3 text-xs text-[var(--color-ink-subtle)]">{note}</p>
      )}
    </figure>
  );
}

export function CaseStudyContent({ blocks }: CaseStudyContentProps) {
  const nodes: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let decisionBuffer: Decision[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    nodes.push(<BulletList key={`bullets-${key++}`} items={bulletBuffer} />);
    bulletBuffer = [];
  };

  const flushDecisions = () => {
    if (decisionBuffer.length === 0) return;
    nodes.push(<DecisionGrid key={`dec-${key++}`} items={decisionBuffer} />);
    decisionBuffer = [];
  };

  const flushAll = () => {
    flushBullets();
    flushDecisions();
  };

  for (const block of blocks) {
    if (block.type === "bullet") {
      flushDecisions();
      bulletBuffer.push(block.text);
      continue;
    }

    if (block.type === "decision") {
      flushBullets();
      decisionBuffer.push({
        decision: block.decision,
        tradeoff: block.tradeoff,
        outcome: block.outcome,
      });
      continue;
    }

    flushAll();

    if (block.type === "divider") {
      nodes.push(
        <hr key={`hr-${key++}`} className="border-[var(--color-border)]" />
      );
    } else if (block.type === "heading") {
      nodes.push(
        <Heading key={`h-${key++}`} level={block.level} text={block.text} />
      );
    } else if (block.type === "quote") {
      nodes.push(
        <blockquote
          key={`q-${key++}`}
          className="border-l-2 border-[var(--color-border)] pl-4 text-[var(--color-ink-muted)] italic"
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
    } else if (block.type === "card-grid") {
      nodes.push(<CardGrid key={`cg-${key++}`} items={block.items} />);
    } else if (block.type === "diagram") {
      nodes.push(
        <Diagram
          key={`dg-${key++}`}
          title={block.title}
          before={block.before}
          after={block.after}
          steps={block.steps}
          fields={block.fields}
          note={block.note}
        />
      );
    } else {
      nodes.push(
        <p
          key={`p-${key++}`}
          className="leading-relaxed text-[var(--color-ink-muted)]"
        >
          {block.text}
        </p>
      );
    }
  }

  flushAll();

  return <div className="space-y-6">{nodes}</div>;
}
