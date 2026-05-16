export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-[var(--color-ink-subtle)]">
          © {new Date().getFullYear()} Andy Chang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
