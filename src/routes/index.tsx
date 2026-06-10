import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, TikTokIcon } from "@/components/SiteShell";
import { ArrowUpRight, Instagram, Sparkle } from "lucide-react";

// ── Real public image paths (served from /public) ──────────────────
const IMG = {
  ashnaStudio:    "/ashna-studio.jpg",
  ashnaCertified: "/ashna-certified.jpg",
  galleryClass1:  "/gallery-class-1.jpg",
  galleryClass2:  "/gallery-class-2.jpg",
  galleryForm:    "/gallery-form.jpg",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashna Chandra — Pilates · NYC · Bollywood × House" },
      {
        name: "description",
        content:
          "Move with the music. Build with the community. Monthly Bollywood × House Pilates events in NYC. Private sessions in-person and virtual.",
      },
      { property: "og:title", content: "Ashna Chandra — Pilates · NYC" },
      {
        property: "og:description",
        content: "Where South Asian culture meets serious strength training.",
      },
      { property: "og:image", content: IMG.ashnaStudio },
    ],
  }),
  component: Home,
});

const PARTNERS = [
  "@kadak_co",
  "@noorsquares",
  "@adanola",
  "@joinfitin",
  "@theproteinshopnyc",
  "@rozstore.co",
  "@dj_axar",
  "FORM app",
];

const GALLERY = [
  { src: IMG.galleryClass1,  caption: "Bollywood × House Pilates · Monthly NYC" },
  { src: IMG.ashnaCertified, caption: "Newly certified · Mat Pilates instructor" },
  { src: IMG.galleryForm,    caption: "Form first. Always." },
  { src: IMG.galleryClass2,  caption: "Deep core, every class." },
] as const;

function Home() {
  return (
    <SiteShell>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative grain overflow-hidden">
        {/* mobile background — solid dark terracotta overlay over hero image */}
        <div className="md:hidden absolute inset-0 -z-10">
          <img
            src={IMG.ashnaStudio}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-terracotta/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        {/* radial wash desktop */}
        <div
          className="hidden md:block absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 25% 40%, rgba(232,196,154,0.35) 0%, transparent 60%), #FAF5F0",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 pt-32 md:pt-36 pb-20 md:pb-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 fade-up">
              <div className="label !text-terracotta md:!text-terracotta text-bg/95 mb-6">
                New York City · Pilates · Bollywood
              </div>
              <h1 className="display text-[44px] sm:text-[58px] md:text-[78px] text-bg md:text-ink">
                Move with the music.
                <br />
                <em className="not-italic md:italic">Build with the community.</em>
              </h1>
              <p className="mt-7 md:mt-8 text-[15px] md:text-base text-bg/90 md:text-ink-soft max-w-xl leading-relaxed">
                Monthly Bollywood × House Pilates events in NYC — where South Asian culture meets
                serious strength training.
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
                <Link to="/events" className="btn-primary">
                  Book June 14 Event <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/book"
                  className="btn-outline md:btn-outline btn-ghost-light md:!border-terracotta md:!text-terracotta"
                >
                  Work With Me
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[12px] text-bg/70 md:text-ink-soft">
                <span>📍 New York City</span>
                <span className="opacity-50">·</span>
                <a
                  href="https://instagram.com/ashna.pilates"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  @ashna.pilates
                </a>
              </div>
            </div>
            {/* desktop hero photo */}
            <div className="hidden md:block md:col-span-5">
              <div className="relative">
                <div
                  className="absolute -inset-4 -z-10 rounded-tl-[120px] rounded-tr-[120px]"
                  style={{ background: "linear-gradient(180deg, #E8C49A 0%, transparent 70%)" }}
                />
                <img
                  src={IMG.ashnaStudio}
                  alt="Ashna Chandra in the studio"
                  className="w-full aspect-[4/5] object-cover object-top rounded-tl-[120px] rounded-tr-[120px]"
                  style={{ filter: "saturate(1.05) contrast(1.02)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────── */}
      <section className="bg-dark text-gold py-4 overflow-hidden border-y border-gold/20">
        <div className="flex whitespace-nowrap marquee">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "187K+ TikTok views",
                "Bollywood × House Pilates",
                "Monthly NYC popups",
                "Kadak Co · Noor Squares · Adanola",
                "The Protein Shop NYC · Rozstore · Fitin",
                "A community of Bollywood-obsessed girls",
              ].map((t, j) => (
                <span key={`${i}-${j}`} className="label !text-gold !tracking-[0.18em] px-8">
                  · {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO IS ASHNA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative inline-block">
              <div className="absolute -inset-3 border border-gold -rotate-1" aria-hidden />
              <img
                src={IMG.ashnaCertified}
                alt="Ashna Chandra, certified mat Pilates instructor"
                className="relative w-full max-w-[480px] aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="label mb-5">Your instructor</div>
            <h2 className="display text-4xl md:text-6xl text-ink">
              Pilates that feels like <em>home.</em>
            </h2>
            <p className="mt-7 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl">
              I'm Ashna — a NYC-based Pilates instructor who created Bollywood × House Pilates
              because I wanted a fitness space where South Asian women feel seen, strong, and
              celebrated. Every month I bring together a community of Bollywood-obsessed girls for
              a class that actually hits. Strength training, live music, real community.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 mt-8 text-sm text-terracotta hover:text-ink transition-colors border-b border-terracotta pb-0.5"
            >
              My full story <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="hairline max-w-[1320px] mx-auto" />

      {/* ── NEXT EVENT ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1C1009" }}>
        {/* Subtle terracotta radial glow — purely decorative, no contrast risk */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,106,58,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-24 md:py-36">
          <div className="text-center fade-up">
            <div className="label !text-gold">Next event</div>
            <h2
              className="display italic text-5xl md:text-7xl mt-5"
              style={{ color: "#FFFFFF" }}
            >
              Bollywood × House Pilates
            </h2>
            <p className="display italic text-2xl md:text-3xl text-gold mt-3">
              A Summer Ritual in Gold
            </p>
            <p className="mt-6 text-sm md:text-base tracking-wide" style={{ color: "#F0E8E0" }}>
              Sunday, June 14 · New York City
            </p>
            <p className="mt-3 text-xs md:text-sm max-w-xl mx-auto" style={{ color: "#C4B5A8" }}>
              With jewelry from{" "}
              <span className="text-gold">@rozstore.co</span> · Cold-press juices from{" "}
              <span className="text-gold">@theproteinshopnyc</span>
            </p>
            <div className="flex items-center gap-3 justify-center mt-8">
              <div className="h-px w-12 bg-gold/60" />
              <Sparkle size={14} className="text-gold" />
              <div className="h-px w-12 bg-gold/60" />
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                tier: "General",
                price: "$35",
                desc: "Your spot in the room. Live DJ. Real community.",
                cta: "Reserve General Spot",
                gold: false,
              },
              {
                tier: "VIP",
                price: "$65",
                desc: "Early access + branded gift bag with sponsor products + front-row placement.",
                cta: "Reserve VIP Spot",
                gold: true,
              },
            ].map((t) => (
              <div
                key={t.tier}
                style={{
                  background: t.gold ? "rgba(232,196,154,0.08)" : "rgba(255,255,255,0.04)",
                  border: t.gold ? "1px solid rgba(232,196,154,0.5)" : "1px solid rgba(255,255,255,0.15)",
                }}
                className="p-7 md:p-9"
              >
                <div className="flex items-baseline justify-between">
                  <div className="label !text-gold">{t.tier}</div>
                  <div className="display italic text-4xl" style={{ color: "#FFFFFF" }}>
                    {t.price}
                  </div>
                </div>
                <p
                  className="mt-5 text-sm leading-relaxed min-h-[3.5rem]"
                  style={{ color: "#E0D4CC" }}
                >
                  {t.desc}
                </p>
                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 text-sm pb-1 hover:text-gold hover:border-gold transition-colors"
                  style={{ color: "#FFFFFF", borderBottom: "1px solid rgba(255,255,255,0.35)" }}
                >
                  {t.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-gold tracking-wider">
            ⚡ Limited spots — this sells out.
          </p>
        </div>
      </section>

      {/* ── THE EXPERIENCE GALLERY ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="label">The experience</div>
              <h2 className="display text-4xl md:text-6xl text-ink mt-3">
                Every month. <em>A new ritual.</em>
              </h2>
            </div>
            <a
              href="https://instagram.com/ashna.pilates"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-terracotta hover:text-ink transition-colors border-b border-terracotta pb-0.5"
            >
              Follow the journey <ArrowUpRight size={14} />
            </a>
          </div>

          {/* mobile swipe */}
          <div className="md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
            {GALLERY.map((g) => (
              <GalleryCard key={g.caption} item={g} mobile />
            ))}
          </div>
          {/* desktop masonry */}
          <div className="hidden md:grid grid-cols-4 gap-5">
            {GALLERY.map((g, i) => (
              <div key={g.caption} className={i === 0 ? "row-span-2" : i === 3 ? "row-span-2" : ""}>
                <GalleryCard item={g} tall={i === 0 || i === 3} />
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com/ashna.pilates"
            target="_blank"
            rel="noreferrer"
            className="md:hidden mt-8 inline-flex items-center gap-1.5 text-sm text-terracotta border-b border-terracotta pb-0.5"
          >
            Follow the journey <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ── WORK WITH ASHNA ──────────────────────────────────────── */}
      <section className="bg-bg py-20 md:py-28 border-t border-gold/40">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="max-w-2xl mb-14">
            <div className="label">Work with me</div>
            <h2 className="display text-4xl md:text-6xl text-ink mt-3">
              More ways to <em>move with me.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Private Sessions",
                img: IMG.galleryForm,
                body: "1-on-1 Pilates with Ashna. In-person or virtual. Tailored to your goals.",
                price: "From $120 / session",
                cta: "Book a Session",
                to: "/book" as const,
              },
              {
                title: "Bollywood × House Pilates",
                img: IMG.galleryClass1,
                body: "Monthly popup events in NYC. Live DJ. South Asian community. Real movement.",
                price: "From $35 / ticket",
                cta: "See Upcoming Events",
                to: "/events" as const,
              },
              {
                title: "Partner With Me",
                img: IMG.galleryClass2,
                body: "Let's bring your brand into the Bollywood × House Pilates world.",
                price: "For brands & studios",
                cta: "Inquire",
                to: "/contact" as const,
              },
            ].map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group bg-card border border-gold/60 overflow-hidden hover:border-terracotta transition-colors"
              >
                <div className="aspect-[5/4] overflow-hidden bg-dark/10">
                  <img
                    src={c.img}
                    alt=""
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="display text-2xl text-ink">{c.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed min-h-[4rem]">
                    {c.body}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-5 border-t border-gold/40">
                    <span className="label !text-ink-soft !text-[10px]">{c.price}</span>
                    <span className="text-sm text-terracotta inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {c.cta} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIRAL MOMENT — TikTok iframe embed ───────────────────── */}
      <section className="bg-dark text-white py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* TikTok iframe — works reliably without external JS */}
          <div className="md:col-span-5 flex justify-center">
            <div
              className="overflow-hidden rounded-lg border border-white/10"
              style={{ width: "325px", height: "580px" }}
            >
              <iframe
                src="https://www.tiktok.com/embed/v2/7623591543038889246"
                allowFullScreen
                allow="encrypted-media"
                style={{
                  width: "325px",
                  height: "580px",
                  border: "none",
                }}
                title="Ashna Pilates Form Breakdown — 187K views"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="label !text-gold">187,300 views and counting</div>
            <h2 className="display text-4xl md:text-6xl mt-4 text-white">
              When the form is right, <em>everything changes.</em>
            </h2>
            <p className="mt-7 text-white/75 leading-relaxed max-w-lg">
              This video reached 187K people because it's true — most of us have been doing Pilates
              with compromised form and never knew it. Come to a class and I'll teach you in person.
            </p>
            <Link to="/events" className="btn-primary mt-9">
              Come to the Next Event <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 grain"
        style={{ background: "linear-gradient(90deg, #FAF5F0 0%, #F1D9BC 100%)" }}
      >
        <div className="max-w-[760px] mx-auto px-5 md:px-10 text-center">
          <div className="label">The list</div>
          <h2 className="display text-4xl md:text-6xl text-ink mt-4">
            Be the <em>first to know.</em>
          </h2>
          <p className="mt-6 text-ink-soft max-w-md mx-auto leading-relaxed">
            Event drops, Pilates tips, and South Asian wellness content — straight to your inbox.
            No spam. Ever.
          </p>
          <form
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-card border border-gold px-5 py-3.5 text-sm placeholder:text-ink-soft/60 focus:outline-none focus:border-terracotta rounded-full"
            />
            <button type="submit" className="btn-primary justify-center">
              Join the community
            </button>
          </form>
          <p className="mt-5 text-xs text-ink-soft tracking-wide">
            Join the women already inside →
          </p>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ──────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div className="label">Follow along · @ashna.pilates</div>
            <a
              href="https://instagram.com/ashna.pilates"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-terracotta inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <Instagram size={14} /> Instagram
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[
              IMG.ashnaStudio,
              IMG.galleryClass1,
              IMG.ashnaCertified,
              IMG.galleryForm,
              IMG.galleryClass2,
              IMG.ashnaStudio,
            ].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/ashna.pilates"
                target="_blank"
                rel="noreferrer"
                className="block aspect-square overflow-hidden bg-dark/5 group relative"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors grid place-items-center">
                  <Instagram
                    size={20}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://tiktok.com/@ashnachandraaaa"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink-soft hover:text-terracotta transition-colors inline-flex items-center gap-2"
            >
              <TikTokIcon className="w-4 h-4" /> @ashna.pilates on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────── */}
      <section className="border-t border-gold/40 py-10 overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              {PARTNERS.map((p, j) => (
                <span
                  key={`${i}-${j}`}
                  className="display italic text-2xl md:text-3xl text-ink-soft px-10"
                >
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function GalleryCard({
  item,
  mobile,
  tall,
}: {
  item: { src: string; caption: string };
  mobile?: boolean;
  tall?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden ${
        mobile ? "min-w-[85%] snap-start" : ""
      } ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
    >
      <img
        src={item.src}
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: "saturate(1.05) contrast(1.02)" }}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-5">
        <figcaption className="label !text-white !text-[10px]">{item.caption}</figcaption>
      </div>
    </figure>
  );
}
