import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Resume", href: "/#resume" },
  { label: "Connect", href: "/#connect" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/portfolio/logo.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold tracking-tight text-[var(--color-ink)]">
            Andy Chang
          </span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
