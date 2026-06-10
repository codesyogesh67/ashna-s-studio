import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import ashnaStudio from "@/assets/ashna-studio.jpg.asset.json";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Private Session — Ashna Pilates · NYC" },
      {
        name: "description",
        content:
          "Private Pilates with Ashna in NYC or virtually worldwide. Single sessions and discounted packs.",
      },
      { property: "og:title", content: "Book a Private Session — Ashna Pilates" },
      { property: "og:image", content: ashnaStudio.url },
    ],
  }),
  component: BookPage,
});

const PACKS = [
  {
    name: "Single Session",
    price: "$120",
    save: null,
    desc: "One focused hour. Form corrections, personalized programming, real feedback.",
  },
  {
    name: "3-Session Pack",
    price: "$330",
    save: "Save $30",
    desc: "Build a practice over three weeks. Most popular for beginners.",
    highlight: true,
  },
  {
    name: "5-Session Pack",
    price: "$500",
    save: "Save $100",
    desc: "Commit to the transformation. Best value for serious movers.",
  },
];

const FAQS = [
  {
    q: "What do I need for an in-person session?",
    a: "A mat is optional — I bring everything. Just wear something you can move in and bring water.",
  },
  {
    q: "Is this right for complete beginners?",
    a: "Yes. Most of my clients started new. We move at your pace and build proper form before adding load.",
  },
  {
    q: "How do virtual sessions work?",
    a: "Zoom, 60 minutes. I can see your full setup, walk you through every cue, and send you a written follow-up plan after.",
  },
  {
    q: "What's your cancellation policy?",
    a: "24 hours notice for a full credit. Anything later is charged in full out of respect for the time slot.",
  },
  {
    q: "Do you offer student or first-timer discounts?",
    a: "First session is always $90 — message me on Instagram to claim it.",
  },
];

function BookPage() {
  const [mode, setMode] = useState<"in-person" | "virtual">("in-person");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 grain">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6">
            <div className="label">Private sessions</div>
            <h1 className="display text-5xl md:text-7xl text-ink mt-4">
              Private Pilates <em>with Ashna.</em>
            </h1>
            <p className="mt-7 text-lg text-ink-soft max-w-lg leading-relaxed">
              In-person or virtual. Tailored to you. Real results.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src={ashnaStudio.url}
              alt="Ashna in the studio"
              className="w-full aspect-[4/5] object-cover max-w-[480px] ml-auto"
            />
          </div>
        </div>
      </section>

      {/* SESSION TYPE TOGGLE + PRICING */}
      <section className="py-16 md:py-20 bg-bg border-t border-gold/40">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setMode("in-person")}
              className={`px-6 py-2.5 rounded-full text-sm transition-colors ${
                mode === "in-person"
                  ? "bg-ink text-bg"
                  : "border border-ink/20 text-ink-soft hover:border-ink"
              }`}
            >
              In-Person (NYC)
            </button>
            <button
              onClick={() => setMode("virtual")}
              className={`px-6 py-2.5 rounded-full text-sm transition-colors ${
                mode === "virtual"
                  ? "bg-ink text-bg"
                  : "border border-ink/20 text-ink-soft hover:border-ink"
              }`}
            >
              Virtual (Worldwide)
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PACKS.map((p) => (
              <div
                key={p.name}
                className={`p-8 border ${
                  p.highlight
                    ? "bg-ink text-bg border-ink"
                    : "bg-card border-gold/60"
                }`}
              >
                {p.save && (
                  <div
                    className={`label !text-[10px] mb-2 ${
                      p.highlight ? "!text-gold" : "!text-terracotta"
                    }`}
                  >
                    {p.save}
                  </div>
                )}
                <h3 className="display text-2xl">{p.name}</h3>
                <div className="display italic text-5xl mt-4">{p.price}</div>
                <p
                  className={`text-sm mt-5 leading-relaxed min-h-[5rem] ${
                    p.highlight ? "text-bg/75" : "text-ink-soft"
                  }`}
                >
                  {p.desc}
                </p>
                <a
                  href="#booking"
                  className={`mt-7 inline-flex items-center gap-1.5 text-sm border-b pb-0.5 transition-all ${
                    p.highlight
                      ? "border-gold text-gold hover:text-bg"
                      : "border-terracotta text-terracotta hover:text-ink hover:border-ink"
                  }`}
                >
                  Choose {p.name.split(" ")[0]} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED PLACEHOLDER */}
      <section id="booking" className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
          <div className="label">Schedule</div>
          <h2 className="display text-4xl md:text-5xl text-ink mt-4">
            Pick a time that <em>works for you.</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-lg mx-auto">
            {mode === "in-person"
              ? "In-person sessions take place in NYC. Address shared at booking confirmation."
              : "Virtual sessions run on Zoom — available worldwide in your time zone."}
          </p>
          {/* TODO: replace with Calendly inline embed pointing to Ashna's link */}
          <div className="mt-10 aspect-video bg-card border border-dashed border-gold grid place-items-center">
            <div className="text-center px-6">
              <div className="label">Calendly embed</div>
              <p className="text-ink-soft text-sm mt-3 max-w-sm">
                Paste your Calendly link into <code className="text-terracotta">/src/routes/book.tsx</code> to
                replace this placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-bg border-t border-gold/40">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          <div className="label text-center">FAQ</div>
          <h2 className="display text-4xl md:text-5xl text-ink mt-4 text-center">
            The <em>real questions.</em>
          </h2>
          <div className="mt-12 divide-y divide-gold/60 border-y border-gold/60">
            {FAQS.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-medium text-ink text-base md:text-lg group-hover:text-terracotta transition-colors">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-soft transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="pb-6 -mt-2 text-ink-soft leading-relaxed text-sm md:text-base max-w-2xl fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-dark text-bg">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="label !text-gold text-center">From the DMs</div>
          <h2 className="display text-3xl md:text-5xl mt-4 text-center">
            What the <em>community says.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                q: "you look so pretty 🥺 and the cues are SO clear, finally my core actually engages",
                a: "@anika.k",
              },
              {
                q: "Ashna's class is the only fitness thing I've stuck with. The music alone is worth it.",
                a: "@priya.nyc",
              },
              {
                q: "187K views for a reason — she breaks down form like nobody else. signed up for a private",
                a: "@meera_moves",
              },
            ].map((t) => (
              <figure key={t.a} className="border border-bg/15 p-7">
                <p className="display italic text-2xl leading-snug text-bg">"{t.q}"</p>
                <figcaption className="label !text-gold mt-5">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
