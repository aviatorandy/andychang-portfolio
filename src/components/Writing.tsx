const items = [
  {
    type: "Article",
    title: "Using AI to Increase Productivity as a Product Manager",
    publisher: "Medium",
    href: "https://medium.com/@andwych/using-ai-to-increase-productivity-as-a-product-manager-c86d0313271c",
    description:
      "How AI tools can transform PM workflows — from discovery and prioritization to documentation and stakeholder communication.",
  },
  {
    type: "Project",
    title: "Sahara Cloud",
    publisher: "saharacloud.io",
    href: "https://saharacloud.io/",
    description:
      "A cloud infrastructure platform I founded and built — my first 0→1 product from concept to launch.",
  },
];

export function Writing() {
  return (
    <section
      id="writing"
      className="border-t border-[var(--color-border)] px-6 py-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          Writing &amp; Projects
        </h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 transition-colors hover:border-[var(--color-ink-subtle)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-sm bg-[var(--color-border)] px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-subtle)]">
                    {item.type}
                  </span>
                  <span className="text-xs text-[var(--color-ink-subtle)]">
                    {item.publisher}
                  </span>
                </div>
                <p className="text-base font-semibold text-[var(--color-ink)] group-hover:underline">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {item.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
