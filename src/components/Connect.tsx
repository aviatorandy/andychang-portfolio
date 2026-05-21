"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success";

const socialLinks = [
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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${fields.name}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`
    );

    window.open(
      `mailto:achang326@gmail.com?subject=${subject}&body=${body}`
    );

    setStatus("success");
    setFields({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="connect"
      className="border-t border-[var(--color-border)] px-6 py-12 pb-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
          Contact
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Open to new opportunities, collaborations, and conversations. Reach
          out anytime.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: links */}
          <div>
            <ul className="space-y-6">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
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

          {/* Right: contact form */}
          <div>
            {status === "success" ? (
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  Message ready to send
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  Your email client opened with your message pre-filled. Hit
                  send when you&apos;re ready.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-[var(--color-ink)] underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] outline-none transition-colors focus:border-[var(--color-ink-muted)] focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] outline-none transition-colors focus:border-[var(--color-ink-muted)] focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-ink-muted)]"
                  >
                    What would you like to talk about?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell me what's on your mind..."
                    className="w-full resize-none rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-2.5 text-sm text-[var(--color-ink)] placeholder-[var(--color-ink-subtle)] outline-none transition-colors focus:border-[var(--color-ink-muted)] focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-md bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-[var(--color-surface)] transition-opacity hover:opacity-80 disabled:opacity-50"
                >
                  {status === "loading" ? "Opening..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
