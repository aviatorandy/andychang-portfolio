const metrics = [
  { value: "20,000+", label: "hours saved annually" },
  { value: "~$1M", label: "operating costs eliminated" },
  { value: "~$2M", label: "regulatory exposure reduced" },
  { value: "2,000+", label: "AI-assisted cases resolved" },
];

export function MetricStrip() {
  return (
    <section className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                {m.value}
              </p>
              <p className="mt-0.5 text-sm text-[var(--color-ink-muted)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
