import Image from "next/image";
import Link from "next/link";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import type { CaseStudy } from "@/data/case-studies";
import type { CaseStudyContent as CaseStudyContentType } from "@/types/case-study-content";
import { getProjectImageStyles } from "@/lib/project-image-styles";

type CaseStudyDetailProps = {
  study: CaseStudy;
  content: CaseStudyContentType;
};

export function CaseStudyDetail({ study, content }: CaseStudyDetailProps) {
  const pageTitle = content.title || `${study.company} — ${study.title}`;

  return (
    <article className="px-6 pt-14 pb-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="mb-8 inline-block text-sm text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
        >
          ← Back to work
        </Link>

        {study.image && (() => {
          const imageStyle = getProjectImageStyles(study.image);
          return (
            <div
              className={`relative mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-[var(--color-border)] ${imageStyle.container}`}
            >
              <Image
                src={study.image}
                alt={pageTitle}
                fill
                className={imageStyle.img}
                sizes="768px"
                priority
              />
            </div>
          );
        })()}

        <span className="mb-3 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]">
          {study.company}
        </span>

        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          {pageTitle}
        </h1>

        {study.role && (
          <p className="mb-6 text-sm text-[var(--color-ink-subtle)]">{study.role}</p>
        )}

        <div className="mb-10 flex flex-wrap gap-2">
          {study.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2.5 py-1 text-xs text-[var(--color-ink-muted)]"
            >
              {metric}
            </span>
          ))}
        </div>

        <CaseStudyContent blocks={content.blocks} />
      </div>
    </article>
  );
}
