import { Instagram, Music2 } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal } from "./Reveal";

const SHOTS = ["/images/real-1.jpg", "/images/real-2.jpg", "/images/real-3.webp", "/images/real-4.webp"];

export const Social = () => (
  <section id="social" data-testid="social-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5 overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-14 items-center">
      <div className="lg:col-span-5">
        <Reveal>
          <p className="eyebrow mb-5">Instagram</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-white" data-testid="social-headline">
            Follow<br />the <span className="text-outline">Clean.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-smoke text-base md:text-lg max-w-sm leading-relaxed">
            Before. During. After. Follow OTG and watch the transformations.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.contact.instagramUrl || "#social"}
              target={site.contact.instagramUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-testid="social-follow-button"
              className="inline-flex items-center gap-3 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase px-9 py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
            >
              <Instagram size={16} /> Follow OTG
            </a>
            <a
              href={site.contact.tiktokUrl || "#social"}
              target={site.contact.tiktokUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-testid="social-tiktok-button"
              className="inline-flex items-center gap-3 bg-transparent text-white text-xs font-bold tracking-[0.2em] uppercase px-9 py-4 border border-white/25 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Music2 size={16} /> OTG on TikTok
            </a>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-7 grid grid-cols-2 gap-4">
        {SHOTS.map((s, i) => (
          <Reveal key={s} delay={i * 0.08} className={i % 2 === 1 ? "mt-8" : ""}>
            <div className="overflow-hidden border border-white/10 group" data-testid={`social-shot-${i}`}>
              <img
                src={s}
                alt="OTG sneaker transformation on Instagram"
                loading="lazy"
                className="w-full aspect-square object-cover img-mono group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
