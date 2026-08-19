import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "../../config/siteConfig";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (!lenis) return;
    open ? lenis.stop() : lenis.start();
  }, [open]);

  return (
    <>
      <header
        data-testid="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-500 border-b ${
          scrolled
            ? "bg-ink-950/92 backdrop-blur-xl border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-5 md:px-10 h-[72px]">
          <a href="#home" data-testid="nav-logo" className="flex items-center gap-3 group">
            <img src={site.logo} alt="OTG Sneaker Cleaning logo" className="w-9 h-9 object-cover invert" />
            <span className="leading-none">
              <span className="font-display text-xl tracking-wide text-white block">{site.logoShort}</span>
              <span className="text-[9px] tracking-[0.3em] text-smoke-dark block">{site.logoSub}</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9" data-testid="nav-links">
            {site.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-xs tracking-[0.2em] uppercase text-smoke hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              data-testid="nav-book-button"
              className="hidden sm:inline-block bg-white text-black text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
            >
              Book a Clean
            </a>
            <button
              data-testid="nav-menu-toggle"
              onClick={() => setOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink-950 flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/10">
              <span className="font-display text-xl text-white">{site.logoShort}</span>
              <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {[...site.nav, { label: "Book", href: "#book" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display uppercase text-4xl sm:text-5xl text-white/80 hover:text-white py-2 transition-colors duration-300"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <p className="px-8 pb-10 text-xs tracking-[0.25em] uppercase text-smoke-dark">{site.tagline}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
