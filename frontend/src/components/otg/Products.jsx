import { Check, MessageCircle } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

const orderLink = (p) => {
  const { whatsappNumber } = site.contact;
  if (!whatsappNumber) return "#book";
  const msg = `Hi OTG, I'd like to order the ${p.name} (${p.price}).`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const Products = () => (
  <section id="kits" data-testid="products-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5 grain">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead
        testid="products-head"
        eyebrow="OTG Products"
        title="Take the Clean Home."
        sub="The same care we use on your pairs, packed for you. Order directly on WhatsApp."
      />

      <div className="grid md:grid-cols-2 gap-5 lg:gap-8 max-w-5xl">
        {site.products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.12} className="h-full">
            <article
              data-testid={`product-card-${p.id}`}
              className={`h-full flex flex-col border transition-colors duration-500 ${
                p.featured
                  ? "bg-white text-black border-white"
                  : "bg-ink-850 border-white/10 hover:border-white/30"
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.tagline}`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-top img-mono group-hover:grayscale-0 group-hover:scale-[1.03] transition-[transform,filter] duration-700 ease-out"
                />
                {p.featured && (
                  <span className="absolute top-0 right-0 bg-black text-white text-[10px] tracking-[0.25em] uppercase px-4 py-2" data-testid="product-featured-badge">
                    Full Setup
                  </span>
                )}
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-display uppercase text-3xl md:text-4xl">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-black/60" : "text-smoke"}`}>{p.tagline}</p>

                <ul className="mt-7 space-y-2.5 flex-1">
                  {p.contents.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm">
                      <Check size={15} className={`mt-0.5 shrink-0 ${p.featured ? "text-black" : "text-white/60"}`} />
                      <span className={p.featured ? "text-black/80" : "text-[#C9C9C9]"}>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-8 pt-6 border-t ${p.featured ? "border-black/15" : "border-white/10"}`}>
                  <p className="font-display text-3xl mb-5" data-testid={`product-price-${p.id}`}>{p.price}</p>
                  <a
                    href={orderLink(p)}
                    target={orderLink(p).startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-testid={`product-order-${p.id}`}
                    className={`flex items-center justify-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase px-6 py-4 border transition-colors duration-300 ${
                      p.featured
                        ? "bg-black text-white border-black hover:bg-transparent hover:text-black"
                        : "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    }`}
                  >
                    <MessageCircle size={15} /> Order on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6">Inside the Kits</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-4">
          {site.productShots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.08}>
              <div className="overflow-hidden border border-white/10 group" data-testid={`product-shot-${i}`}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover img-mono group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-700"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
