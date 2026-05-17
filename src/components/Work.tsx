import Link from "next/link";
import { aiPrototypes, workGroups } from "@/data/work";
import type { AIPrototype, WorkGroupItem } from "@/data/work";

function ProjectCard({ item }: { item: WorkGroupItem }) {
  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 transition-colors hover:border-neutral-400">
      <p className="mb-2 text-sm font-semibold leading-snug text-[var(--color-ink)] group-hover:underline group-hover:underline-offset-2">
        {item.title}
      </p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.metrics.map((m) => (
          <span
            key={m}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-ink-muted)]"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={item.href}>{content}</Link>;
}

function AIPrototypeCard({ proto }: { proto: AIPrototype }) {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Input", value: proto.input },
    { label: "Workflow", value: proto.workflow },
    { label: "Output", value: proto.output },
    { label: "Signal", value: proto.signal },
  ];

  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 transition-colors hover:border-neutral-400">
      <p className="mb-4 text-sm font-semibold text-[var(--color-ink)] group-hover:underline group-hover:underline-offset-2">
        {proto.title}
      </p>
      <dl className="flex-1 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[72px_1fr] gap-3 text-sm">
            <dt className="font-medium text-[var(--color-ink-subtle)]">
              {row.label}
            </dt>
            <dd className="leading-relaxed text-[var(--color-ink-muted)]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );

  if (proto.external) {
    return (
      <a href={proto.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={proto.href}>{content}</Link>;
}

function groupGridCols(count: number) {
  if (count === 1) return "grid-cols-1 max-w-sm";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

export function Work() {
  return (
    <>
      {/* ── Featured Product Work ─────────────────────────────── */}
      <section
        id="work"
        className="border-t border-[var(--color-border)] px-6 py-12"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
            Featured Product Work
          </h2>
          <p className="mb-12 max-w-2xl text-[var(--color-ink-muted)]">
            Case studies across platform systems, AI workflow automation,
            enterprise operations, and 0→1 product development.
          </p>

          <div className="space-y-12">
            {workGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
                  {group.label}
                </h3>
                <div
                  className={`grid gap-4 ${groupGridCols(group.items.length)}`}
                >
                  {group.items.map((item) => (
                    <ProjectCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Prototypes & Workflow Systems ─────────────────── */}
      <section
        id="ai-prototypes"
        className="border-t border-[var(--color-border)] px-6 py-12"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
            AI Prototypes & Workflow Systems
          </h2>
          <p className="mb-10 max-w-2xl text-[var(--color-ink-muted)]">
            Hands-on systems that turn messy inputs into structured outputs,
            decisions, and workflows.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiPrototypes.map((proto) => (
              <AIPrototypeCard key={proto.slug} proto={proto} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
