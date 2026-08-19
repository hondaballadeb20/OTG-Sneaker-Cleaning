import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

const CompareSlider = ({ image, alt }) => {
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
      <img src={image} alt={`${alt} — after professional cleaning`} className="absolute inset-0 w-full h-full object-cover img-mono" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={image} alt={`${alt} — before cleaning (placeholder treatment)`} className="absolute inset-0 w-full h-full object-cover img-dirty" draggable={false} />
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
  const [active, setActive] = useState(0);
  const ex = site.beforeAfter[active];

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
                <CompareSlider image={ex.image} alt={ex.sneaker} />
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-[10px] tracking-[0.25em] uppercase text-smoke-dark" data-testid="ba-placeholder-note">
              Placeholder imagery — real OTG results drop here soon.
            </p>
          </Reveal>

          <div className="lg:col-span-4 space-y-3">
            {site.beforeAfter.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.08}>
                <button
                  onClick={() => setActive(i)}
                  data-testid={`ba-tab-${b.id}`}
                  className={`w-full text-left p-6 border transition-colors duration-300 ${
                    i === active ? "border-white bg-ink-850" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display uppercase text-xl text-white">{b.sneaker}</span>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-smoke-dark">{b.service}</span>
                  </div>
                  <p className="mt-2 text-sm text-smoke">"{b.quote}"</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
