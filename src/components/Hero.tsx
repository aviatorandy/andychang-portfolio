import Image from "next/image";

const focusAreas = [
  "Platform PM",
  "Operational Efficiency",
  "0→1 Products",
  "AI Automation",
];

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-14">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_280px] lg:gap-14">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
            Platform Product Manager & Builder
          </p>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            Andy Chang
          </h1>
          <p className="mb-4 text-xl font-medium leading-snug text-[var(--color-ink)] sm:text-2xl">
            Product leader building data-driven solutions that scale.
          </p>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
            10+ years in platform PM and operational efficiency — 0→1 products,
            enterprise automation, and AI workflows. I don&apos;t just write
            specs; I build, prototype, and ship systems teams actually use.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              View My Work
            </a>
            <a
              href="mailto:achang326@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-neutral-400"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-sm">
            <Image
              src="/images/portfolio/profile.png"
              alt="Andy Chang"
              width={560}
              height={560}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
