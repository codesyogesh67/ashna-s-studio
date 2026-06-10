import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.2h-3.2v13.1a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .9.1V9.2a6 6 0 1 0 5.1 5.9V8.5a8.5 8.5 0 0 0 5.1 1.7V6.3z"/>
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = "text-[13px] tracking-wide transition-colors";
  const linkBase = scrolled ? "text-ink hover:text-terracotta" : "text-ink hover:text-terracotta";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="display text-[22px] md:text-[26px] text-ink leading-none">ashna</span>
          <span className="label text-[10px] mt-1 hidden sm:inline">pilates · nyc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <Link to="/events" className={`${linkCls} ${linkBase}`}>Events</Link>
          <Link to="/book" className={`${linkCls} ${linkBase}`}>Book a Session</Link>
          <Link to="/about" className={`${linkCls} ${linkBase}`}>About</Link>
          <Link to="/contact" className={`${linkCls} ${linkBase}`}>Contact</Link>
        </nav>
        <Link to="/events" className="btn-primary !py-2.5 !px-4 text-[12px]">
          Book June 14 →
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-bg/90">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div>
            <div className="display italic text-3xl text-bg leading-none mb-3">ashna</div>
            <p className="text-sm text-bg/60 max-w-xs leading-relaxed">
              Ashna Chandra · NYC-based Pilates instructor. Bollywood × House Pilates, monthly.
            </p>
          </div>
          <nav className="flex flex-col gap-3 md:items-center text-sm">
            <Link to="/events" className="hover:text-terracotta transition-colors">Events</Link>
            <Link to="/book" className="hover:text-terracotta transition-colors">Book a Session</Link>
            <Link to="/about" className="hover:text-terracotta transition-colors">About</Link>
            <Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
          </nav>
          <div className="md:text-right">
            <div className="label !text-gold mb-4">Find me</div>
            <div className="flex md:justify-end gap-3">
              <a
                href="https://instagram.com/ashna.pilates"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-bg/20 grid place-items-center hover:bg-terracotta hover:border-terracotta transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://tiktok.com/@ashna.pilates"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-bg/20 grid place-items-center hover:bg-terracotta hover:border-terracotta transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-bg/40 mt-6">@ashna.pilates · New York City</p>
          </div>
        </div>
        <hr className="border-bg/10 my-10" />
        <p className="text-[11px] text-bg/40 tracking-wide">
          © 2025 Ashna Chandra · Built for the community 🤍
        </p>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export { TikTokIcon };
