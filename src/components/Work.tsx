import Link from "next/link";
import {
  additionalCaseStudies,
  featuredWork,
  sideProjects,
} from "@/data/work";
import { WorkCard } from "./WorkCard";

export function Work() {
  return (
    <section id="work" className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          Work
        </h2>
        <p className="mb-10 max-w-2xl text-[var(--color-ink-muted)]">
          Case studies across product management, AI workflow automation,
          compliance platforms, enterprise data operations, and 0→1 product
          systems.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWork.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>

        <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
          More at Omnicell:{" "}
          {additionalCaseStudies.map((item, i) => (
            <span key={item.href}>
              {i > 0 && " · "}
              <Link
                href={item.href}
                className="font-medium text-[var(--color-ink)] underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </p>

        <div className="mt-14">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
            Side Projects
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
