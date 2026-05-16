export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          About
        </h2>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          I build and scale automation-first platforms that simplify complex
          workflows across startup and enterprise environments. I turn ambiguous,
          high-friction processes into automated systems organizations can trust.
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Specialized in platform PM, operational efficiency, and 0→1 products.
          Former co-founder, startup-to-IPO operator, and hands-on PM who ships
          alongside engineers. Most recently at Omnicell in healthcare; previously
          Co-founder at Sahara Cloud and Senior Platform Manager at Yext
          (pre-IPO to IPO).
        </p>
      </div>
    </section>
  );
}
