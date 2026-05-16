import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/work";

type WorkCardProps = {
  item: WorkItem;
};

export function WorkCard({ item }: WorkCardProps) {
  const imageClass =
    item.imageFit === "contain"
      ? "object-contain p-6"
      : "object-cover object-top";

  const inner = (
    <>
      <div
        className={`relative aspect-[4/3] overflow-hidden ${item.imageBg}`}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className={imageClass}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <p className="bg-neutral-800 px-4 py-3.5 text-sm leading-snug font-medium text-white">
        {item.caption}
      </p>
    </>
  );

  const className =
    "group block overflow-hidden rounded-lg border border-[var(--color-border)] transition-colors hover:border-neutral-500 hover:shadow-md";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}
