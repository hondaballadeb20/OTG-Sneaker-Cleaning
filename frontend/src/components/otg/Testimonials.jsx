import { Star } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

export const Testimonials = () => (
  <section id="reviews" data-testid="testimonials-section" className="relative bg-ink-900 py-28 md:py-40 border-t border-white/5 grain">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead testid="testimonials-head" eyebrow="Social Proof" title="The Kicks Speak for Themselves." />

      <div className="grid md:grid-cols-3 gap-5">
        {site.testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1} className="h-full">
            <figure
              data-testid={`testimonial-card-${i}`}
              className="h-full flex flex-col bg-ink-850 border border-white/10 p-8 hover:border-white/30 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} className="fill-white text-white" />
                ))}
              </div>
              <blockquote className="text-[#D6D6D6] text-base leading-relaxed flex-1">"{t.review}"</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10 flex items-end justify-between gap-4">
                <div>
                  <span className="block text-white font-bold text-sm">{t.name}</span>
                  <span className="block text-xs text-smoke-dark mt-1">{t.detail}</span>
                </div>
                <span className="text-[9px] tracking-[0.25em] uppercase text-smoke-dark border border-white/10 px-2 py-1" data-testid={`testimonial-sample-${i}`}>
                  Sample
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
