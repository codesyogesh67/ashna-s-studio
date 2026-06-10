import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";



import galleryClass2 from "@/assets/gallery-class-2.jpg.asset.json";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Bollywood × House Pilates · NYC" },
      {
        name: "description",
        content:
          "Monthly Bollywood × House Pilates popups in New York City. Reserve your spot — they sell out every time.",
      },
      { property: "og:title", content: "Events — Bollywood × House Pilates" },
      { property: "og:image", content: "/gallery-class-1.jpg" },
    ],
  }),
  component: EventsPage,
});

const PAST = [
  {
    title: "The Chai Experience",
    date: "May 30, 2025",
    partners: "@kadak_co · @noorsquares · @dj_axar",
    img: "/ashna-certified.jpg",
  },
  {
    title: "April Popup",
    date: "April 18, 2025",
    partners: "@theproteinshopnyc · @adanola",
    img: galleryClass2.url,
  },
  {
    title: "March Popup",
    date: "March 25, 2025",
    partners: "@rozstore.co · @joinfitin",
    img: "/gallery-class-1.jpg",
  },
];

function EventsPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={"/gallery-class-1.jpg"}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative h-full max-w-[1320px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24 text-bg">
          <div className="label !text-gold">Events</div>
          <h1 className="display text-5xl md:text-7xl mt-4">Bollywood × House Pilates</h1>
          <p className="display italic text-gold text-2xl md:text-3xl mt-2">
            Monthly. NYC. Sold out every time.
          </p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="label mb-3">Upcoming</div>
          <h2 className="display text-4xl md:text-5xl text-ink mb-12">June 14 · A Summer Ritual in Gold</h2>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10 bg-card border border-gold p-6 md:p-10">
            <div className="md:col-span-5 aspect-[4/5] overflow-hidden bg-dark/10">
              <img src={"/gallery-class-1.jpg"} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-7 flex flex-col">
              <div className="label">Sunday · June 14, 2025</div>
              <h3 className="display text-3xl md:text-5xl text-ink mt-3">
                A Summer Ritual <em>in Gold</em>
              </h3>
              <p className="mt-5 text-ink-soft leading-relaxed">
                The next ritual. Live DJ. Live movement. A room full of women who get it. Jewelry
                giveaway from <span className="text-terracotta">@rozstore.co</span>, cold-press
                juice from <span className="text-terracotta">@theproteinshopnyc</span>, and the
                community you wish your fitness class had.
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-y-4 text-sm">
                <dt className="label !text-ink-soft">Location</dt>
                <dd className="text-ink">New York City</dd>
                <dt className="label !text-ink-soft">Partners</dt>
                <dd className="text-ink">@rozstore.co · @theproteinshopnyc</dd>
                <dt className="label !text-ink-soft">Spots left</dt>
                <dd className="text-terracotta">12 of 40 remaining</dd>
              </dl>

              <hr className="hairline my-7" />

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  /* TODO: Stripe link — General */
                  className="border border-ink p-5 hover:bg-ink hover:text-bg transition-colors group"
                >
                  <div className="label">General</div>
                  <div className="display italic text-3xl mt-2">$35</div>
                  <div className="text-xs mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Reserve <ArrowUpRight size={12} />
                  </div>
                </a>
                <a
                  href="#"
                  /* TODO: Stripe link — VIP */
                  className="bg-terracotta text-bg p-5 hover:bg-ink transition-colors group"
                >
                  <div className="label !text-gold">VIP</div>
                  <div className="display italic text-3xl mt-2">$65</div>
                  <div className="text-xs mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Reserve <ArrowUpRight size={12} />
                  </div>
                </a>
              </div>
              <p className="text-xs text-ink-soft mt-4">⚡ Limited spots — this sells out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAST */}
      <section className="py-20 md:py-28 bg-bg border-t border-gold/50">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="label mb-3">Past rituals</div>
          <h2 className="display text-4xl md:text-5xl text-ink mb-12">
            The <em>archive.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PAST.map((p) => (
              <article key={p.title} className="bg-card border border-gold/60">
                <div className="aspect-[4/3] overflow-hidden bg-dark/10">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="label !text-ink-soft !text-[10px]">{p.date}</div>
                  <h3 className="display text-2xl text-ink mt-2">{p.title}</h3>
                  <p className="text-xs text-ink-soft mt-3">{p.partners}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-dark text-bg py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
          <div className="label !text-gold">For brands</div>
          <h2 className="display text-4xl md:text-6xl mt-5">
            Want to bring your brand to the <em>next event?</em>
          </h2>
          <p className="mt-7 text-bg/75 max-w-2xl mx-auto leading-relaxed">
            We've worked with Kadak Co, Noor Squares, Rozstore, and more. Let's build something
            your audience will actually remember.
          </p>
          <Link to="/contact" className="btn-primary mt-9 mx-auto">
            Partner With Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
