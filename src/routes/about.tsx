import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArrowUpRight } from "lucide-react";

const IMG = {
  ashnaCertified: "/ashna-certified.jpg",
  ashnaStudio:    "/ashna-studio.jpg",
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashna Chandra — NYC Pilates Instructor" },
      {
        name: "description",
        content:
          "South Asian, NYC-based Pilates instructor. Strength over aesthetics. Culture is not a costume. Community is the workout.",
      },
      { property: "og:title", content: "About Ashna Chandra" },
      { property: "og:image", content: IMG.ashnaCertified },
    ],
  }),
  component: AboutPage,
});

const PARTNERS = [
  "@kadak_co", "@noorsquares", "@adanola", "@joinfitin",
  "@theproteinshopnyc", "@rozstore.co", "@dj_axar", "FORM app",
];

function AboutPage() {
  return (
    <SiteShell>
      {/* EDITORIAL HEADER — real photo with overlay */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden grain">
        <img
          src={IMG.ashnaStudio}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-terracotta/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-dark/55" />
        <div className="relative h-full max-w-[1320px] mx-auto px-5 md:px-10 flex items-end pb-16 md:pb-24">
          <div className="text-white">
            <div className="label !text-gold">About</div>
            <h1 className="display text-6xl md:text-[96px] mt-4 text-white">
              Hi, I'm <em>Ashna.</em>
            </h1>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="relative inline-block">
              <div className="absolute -inset-3 border border-gold rotate-1" aria-hidden />
              <img
                src={IMG.ashnaCertified}
                alt="Ashna Chandra, certified mat Pilates instructor"
                className="relative w-full max-w-[480px] aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-7 text-base md:text-lg text-ink-soft leading-relaxed">
            <p>
              I'm a New York City-based Pilates instructor focused on strength, mobility, and the
              kind of community that actually makes you want to show up.
            </p>
            <p>
              I created Bollywood × House Pilates because I wanted a fitness class where South
              Asian women didn't have to leave their culture at the door. Where the music hits,
              the movement is real, and you leave feeling like yourself. Every month I curate an
              experience — not just a workout.
            </p>
            <p className="display italic text-3xl text-ink leading-snug">
              Pilates changed how I move through the world. I want that for you too.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-bg border-y border-gold/50">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="label text-center">Philosophy</div>
          <h2 className="display text-4xl md:text-6xl text-ink mt-4 text-center">
            Three <em>principles.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-14">
            {[
              { icon: "💪", title: "Strength over aesthetics.", body: "Train for what your body can do, not how it looks." },
              { icon: "🎵", title: "Culture is not a costume.", body: "The music is the heritage. The class is the celebration." },
              { icon: "🤍", title: "Community is the workout.", body: "We get stronger because we get stronger together." },
            ].map((p) => (
              <div key={p.title} className="bg-card border border-gold/60 p-8">
                <div className="text-3xl mb-5">{p.icon}</div>
                <h3 className="display italic text-2xl text-ink">{p.title}</h3>
                <p className="text-sm text-ink-soft mt-4 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 mb-8">
          <div className="label">Brand partners</div>
        </div>
        <div className="flex whitespace-nowrap marquee">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              {PARTNERS.map((p, j) => (
                <span key={`${i}-${j}`} className="display italic text-3xl md:text-4xl text-ink-soft px-10">
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* VIRAL VIDEO — real TikTok embed */}
      <section className="py-20 md:py-28 bg-dark text-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
          <div className="label !text-gold">Why people trust my teaching</div>
          <h2 className="display text-4xl md:text-6xl mt-4 text-white">
            187,000 people watched this.
            <br />
            <em>Here's what they learned.</em>
          </h2>
          <div className="mt-12 flex justify-center">
            <div
              className="overflow-hidden rounded-lg border border-white/10"
              style={{ width: "325px", height: "580px" }}
            >
              <iframe
                src="https://www.tiktok.com/embed/v2/7623591543038889246"
                allowFullScreen
                allow="encrypted-media"
                style={{ width: "325px", height: "580px", border: "none" }}
                title="Ashna Pilates Form Breakdown — 187K views"
              />
            </div>
          </div>
          <p className="text-white/70 mt-8 max-w-lg mx-auto text-sm">
            "ribs knit in, core is engaged, lower back is supported." — the form breakdown that
            taught 187K people to actually feel Pilates work.
          </p>
        </div>
      </section>

      {/* END CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          <h2 className="display text-4xl md:text-6xl text-ink">
            Ready to come to the <em>next class?</em>
          </h2>
          <Link to="/events" className="btn-primary mt-9 mx-auto">
            See Upcoming Events <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
