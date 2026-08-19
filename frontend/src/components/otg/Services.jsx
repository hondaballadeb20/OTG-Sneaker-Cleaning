import { Check } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

const selectService = (id) => {
  window.dispatchEvent(new CustomEvent("otg:select-service", { detail: id }));
};

export const Services = () => (
  <section id="services" data-testid="services-section" className="relative bg-ink-900 py-28 md:py-40 border-t border-white/5">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead
        testid="services-head"
        eyebrow="Services"
        title="What We Do"
        sub="More than a clean. It's sneaker care."
      />

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {site.services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1} className="h-full">
            <article
              data-testid={`service-card-${s.id}`}
              className={`relative h-full flex flex-col p-8 md:p-10 border transition-colors duration-500 group ${
                s.featured
                  ? "bg-white text-black border-white lg:-translate-y-4"
                  : "bg-ink-850 border-white/10 hover:border-white/30"
              }`}
            >
              {s.featured && (
                <span className="absolute top-0 right-0 bg-black text-white text-[10px] tracking-[0.25em] uppercase px-4 py-2" data-testid="service-featured-badge">
                  Most Popular
                </span>
              )}
              <span className={`font-display text-sm ${s.featured ? "text-black/40" : "text-white/25"}`}>
                0{i + 1}
              </span>
              <h3 className="font-display uppercase text-3xl md:text-4xl mt-3">{s.name}</h3>
              <p className={`mt-3 text-sm ${s.featured ? "text-black/60" : "text-smoke"}`}>{s.tagline}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={15} className={`mt-0.5 shrink-0 ${s.featured ? "text-black" : "text-white/60"}`} />
                    <span className={s.featured ? "text-black/80" : "text-[#C9C9C9]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-10 pt-6 border-t ${s.featured ? "border-black/15" : "border-white/10"}`}>
                <p className={`font-display text-2xl mb-5 ${s.featured ? "text-black" : "text-white"}`} data-testid={`service-price-${s.id}`}>
                  {s.price || "Get a Quote"}
                </p>
                <a
                  href="#book"
                  onClick={() => selectService(s.id)}
                  data-testid={`service-cta-${s.id}`}
                  className={`block text-center text-xs font-bold tracking-[0.2em] uppercase px-6 py-4 border transition-colors duration-300 ${
                    s.featured
                      ? "bg-black text-white border-black hover:bg-transparent hover:text-black"
                      : "bg-white text-black border-white hover:bg-transparent hover:text-white"
                  }`}
                >
                  {s.cta}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
