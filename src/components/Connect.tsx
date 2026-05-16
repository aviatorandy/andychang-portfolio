const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/andy-chang-/",
    display: "linkedin.com/in/andy-chang-/",
  },
  {
    label: "Email",
    href: "mailto:achang326@gmail.com",
    display: "achang326@gmail.com",
  },
];

export function Connect() {
  return (
    <section id="connect" className="border-t border-[var(--color-border)] px-6 py-12 pb-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          Connect
        </h2>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-lg font-medium text-[var(--color-ink)] transition-colors hover:underline"
              >
                {link.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
