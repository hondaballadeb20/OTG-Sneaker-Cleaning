import { Crosshair, Footprints, RotateCcw, HeartHandshake } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const POINTS = [
  { icon: Crosshair, title: "Detail Matters", text: "Every sneaker gets attention where it actually needs it." },
  { icon: Footprints, title: "Sneaker-First", text: "We understand sneakers, materials and sneaker culture." },
  { icon: RotateCcw, title: "Second Chances", text: "We believe dirty doesn't always mean done." },
  { icon: HeartHandshake, title: "Built for Your Kicks", text: "Daily pair or grail — we treat them with the same care." },
];

export const WhyOtg = () => (
  <section id="why-otg" data-testid="why-otg-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead testid="why-otg-head" eyebrow="The Difference" title="Why OTG?" />

      <div>
        {POINTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div
              data-testid={`why-point-${i}`}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center border-t border-white/10 last:border-b py-10 md:py-14 hover:bg-ink-900 transition-colors duration-500 px-2 md:px-6"
            >
              <span className="md:col-span-1 font-display text-outline-faint text-3xl group-hover:text-white transition-colors duration-500">
                0{i + 1}
              </span>
              <h3 className="md:col-span-5 font-display uppercase text-3xl md:text-5xl text-white group-hover:translate-x-2 transition-transform duration-500">
                {p.title}
              </h3>
              <p className="md:col-span-5 text-smoke text-base leading-relaxed">{p.text}</p>
              <span className="hidden md:flex md:col-span-1 justify-end">
                <p.icon size={30} strokeWidth={1.25} className="text-smoke-dark group-hover:text-white transition-colors duration-500" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
