export function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          Resume
        </h2>
        <a
          href="https://docs.google.com/document/d/1ZaWqFi8pC1g16V21NkrVqCIo2xyRrPzdL9swsZcs_fc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-neutral-400"
        >
          View Resume →
        </a>
      </div>
    </section>
  );
}
