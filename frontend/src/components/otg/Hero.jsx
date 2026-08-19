import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "../../config/siteConfig";

const lineWrap = {
  hidden: {},
  show: (i) => ({ transition: { staggerChildren: 0.14, delayChildren: 0.25 + i * 0.14 } }),
};

const MaskedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="relative min-h-screen bg-ink-950 overflow-hidden grain">
      <div className="absolute inset-0 spotlight" />
      <span aria-hidden className="font-display text-outline-faint absolute -bottom-[4vw] left-0 text-[26vw] leading-none select-none pointer-events-none">
        OTG
      </span>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-10 pt-[120px] lg:pt-0 lg:min-h-screen grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div style={{ opacity: fade }} className="lg:col-span-7 pb-10 lg:pb-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow mb-7 flex items-center gap-3"
            data-testid="hero-eyebrow"
          >
            <span className="w-8 h-px bg-white/40 inline-block" />
            {site.name}
          </motion.p>

          <h1 className="font-display uppercase text-white text-[clamp(3.4rem,8.6vw,8.5rem)] leading-[0.92]" data-testid="hero-headline">
            <MaskedLine delay={0.2}>Your Sneakers</MaskedLine>
            <MaskedLine delay={0.34}>Deserve</MaskedLine>
            <MaskedLine delay={0.48}>
              A <span className="text-outline">Second Chance.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 max-w-md text-smoke text-base md:text-lg leading-relaxed"
            data-testid="hero-subcopy"
          >
            Premium sneaker cleaning, deep cleaning &amp; restoration for the sneakers you actually care about.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#book"
              data-testid="hero-book-button"
              className="bg-white text-black text-xs font-bold tracking-[0.2em] uppercase px-9 py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
            >
              Book a Clean
            </a>
            <a
              href="#services"
              data-testid="hero-services-button"
              className="bg-transparent text-white text-xs font-bold tracking-[0.2em] uppercase px-9 py-4 border border-white/25 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View Services
            </a>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5 relative pb-16 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] max-h-[72vh] w-full overflow-hidden border border-white/10"
            data-testid="hero-image-frame"
          >
            <motion.img
              src="/images/hero.jpg"
              alt="Freshly cleaned premium sneaker in a dark studio"
              style={{ y: imgY, scale: imgScale }}
              className="w-full h-full object-cover img-mono"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-10 top-8 bg-ink-950/85 backdrop-blur border border-white/15 px-4 py-3"
            data-testid="hero-chip-tagline"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-white">Clean. Restore. Repeat.</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-2 md:-right-6 bottom-10 bg-ink-950/85 backdrop-blur border border-white/15 px-4 py-3"
            data-testid="hero-chip-index"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-smoke">Sneaker Care / 01</p>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#manifesto"
        data-testid="hero-scroll-indicator"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden lg:flex absolute bottom-8 left-10 items-center gap-3 text-smoke-dark text-[10px] tracking-[0.3em] uppercase z-10"
      >
        <ArrowDown size={14} className="animate-bounce" /> Scroll
      </motion.a>
    </section>
  );
};
