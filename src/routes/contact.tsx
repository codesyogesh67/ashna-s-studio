import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Instagram, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ashna Chandra · NYC Pilates" },
      {
        name: "description",
        content:
          "Private sessions, brand partnerships, event collabs, press — let's work together.",
      },
      { property: "og:title", content: "Contact — Ashna Chandra" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="label">Contact</div>
            <h1 className="display text-5xl md:text-7xl text-ink mt-4">
              Let's <em>work together.</em>
            </h1>
            <p className="mt-7 text-ink-soft leading-relaxed max-w-md">
              Whether it's a private session, brand partnership, or event collab — I'd love to
              hear from you.
            </p>
            <hr className="hairline my-10" />
            <div className="space-y-5">
              <div>
                <div className="label !text-ink-soft !text-[10px]">Prefer to DM?</div>
                <a
                  href="https://instagram.com/ashna.pilates"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-terracotta hover:text-ink transition-colors"
                >
                  <Instagram size={16} /> @ashna.pilates
                </a>
              </div>
              <p className="text-xs text-ink-soft">
                I typically respond within 48 hours 🤍
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            {/* TODO: replace action with your Formspree endpoint */}
            <form
              className="bg-card border border-gold p-7 md:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Name" name="name">
                <input
                  required
                  name="name"
                  className="w-full bg-transparent border-b border-ink/15 py-2.5 focus:outline-none focus:border-terracotta text-ink"
                />
              </Field>
              <Field label="Email" name="email">
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-transparent border-b border-ink/15 py-2.5 focus:outline-none focus:border-terracotta text-ink"
                />
              </Field>
              <Field label="Inquiry type" name="type">
                <select
                  name="type"
                  className="w-full bg-transparent border-b border-ink/15 py-2.5 focus:outline-none focus:border-terracotta text-ink"
                >
                  <option>Private Session</option>
                  <option>Event Partnership</option>
                  <option>Brand Deal</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Message" name="message">
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-ink/15 py-2.5 focus:outline-none focus:border-terracotta resize-none text-ink"
                />
              </Field>
              <div className="pt-4">
                <button type="submit" className="btn-primary">
                  Send Message <Send size={14} />
                </button>
              </div>
              {sent && (
                <p className="text-sm text-terracotta fade-up">
                  Sent ✨ Ashna will be in touch within 48 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="label !text-ink-soft !text-[10px] block mb-1">{label}</span>
      {children}
    </label>
  );
}
