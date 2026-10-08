import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

const CompareSlider = ({ beforeImage, afterImage, alt }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  const onDown = (e) => {
    dragging.current = true;
    update(e.clientX);
    const move = (ev) => dragging.current && update(ev.clientX);
    const up = () => {
      dragging.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div
      ref={ref}
      data-testid="ba-slider"
      onPointerDown={onDown}
      className="ba-handle relative aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-white/10 select-none"
    >
      <img src={afterImage} alt={`${alt} — after professional cleaning`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeImage} alt={`${alt} — before cleaning`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      <span className="absolute top-4 left-4 bg-ink-950/80 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase text-white border border-white/15" data-testid="ba-before-label">
        Before
      </span>
      <span className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 text-[10px] tracking-[0.3em] uppercase text-black" data-testid="ba-after-label">
        After
      </span>

      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white text-black flex items-center justify-center shadow-xl" data-testid="ba-handle">
          <MoveHorizontal size={18} />
        </div>
      </div>
    </div>
  );
};

export const BeforeAfter = () => {
  const ex = site.beforeAfter[0];

  return (
    <section id="results" data-testid="before-after-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5 grain">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <SectionHead
          testid="before-after-head"
          eyebrow="Before / After"
          title="The Difference Is Dirty."
          sub="See what a second chance looks like. Drag the handle."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <CompareSlider beforeImage="/images/Dirty.JPG" afterImage="/images/Clean.JPG" alt={ex.sneaker} />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <div className="lg:col-span-4">
            <Reveal>
              <div className="w-full border border-white/10 bg-ink-850 p-6 md:p-8" data-testid="ba-result-details">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display uppercase text-xl text-white">{ex.sneaker}</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-smoke-dark">{ex.service}</span>
                </div>
                <p className="mt-2 text-sm text-smoke">"{ex.quote}"</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
