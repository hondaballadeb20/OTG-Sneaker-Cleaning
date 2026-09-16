import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

export const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" data-testid="gallery-section" className="relative bg-ink-900 py-28 md:py-40 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <SectionHead
          testid="gallery-head"
          eyebrow="Gallery"
          title="OTG in the Wild."
          sub="Real pairs, real second chances — straight off the OTG bench. Hover a photo to see the colour come back."
        />

        <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
          {site.gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.07} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setSelected(g)}
                data-testid={`gallery-item-${i}`}
                className="relative block w-full overflow-hidden border border-white/10 group"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-105 ${
                    g.real ? "img-mono group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100" : "img-mono"
                  }`}
                />
                <span className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/35 transition-colors duration-500" />
                <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.3em] uppercase text-white/70 bg-ink-950/70 px-2.5 py-1 border border-white/10">
                  {g.tag}
                </span>
                <span className="absolute top-3 right-3 w-8 h-8 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Plus size={16} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setSelected(null)}
          >
            <button data-testid="lightbox-close" className="absolute top-6 right-6 text-white p-2" aria-label="Close">
              <X size={30} />
            </button>
            <motion.figure
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} className={`w-full max-h-[78vh] object-contain border border-white/10 ${selected.real ? "" : "img-mono"}`} />
              <figcaption className="mt-4 text-xs tracking-[0.25em] uppercase text-smoke">{selected.alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
