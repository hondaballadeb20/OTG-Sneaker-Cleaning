import { Layers, Feather, Grid3X3, Square, Circle, Hexagon, TriangleAlert } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";

const MATERIALS = [
  { icon: Layers, name: "Leather" },
  { icon: Feather, name: "Suede" },
  { icon: Grid3X3, name: "Mesh" },
  { icon: Square, name: "Canvas" },
  { icon: Circle, name: "Rubber" },
  { icon: Hexagon, name: "Synthetic" },
];

export const Materials = () => (
  <section id="about" data-testid="materials-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5 grain">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead
        testid="materials-head"
        eyebrow="Sneaker Care"
        title="Your Kicks Are an Investment. Treat Them Like One."
        sub="Different sneaker materials demand different cleaning approaches. We match the process to the pair — never one-size-fits-all."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
        {MATERIALS.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06} className="bg-ink-950">
            <div
              className="flex flex-col items-center justify-center gap-4 py-12 px-4 group hover:bg-ink-850 transition-colors duration-500"
              data-testid={`material-${m.name.toLowerCase()}`}
            >
              <m.icon size={28} strokeWidth={1.25} className="text-smoke group-hover:text-white group-hover:-translate-y-1 transition-[color,transform] duration-500" />
              <span className="text-xs tracking-[0.3em] uppercase text-smoke group-hover:text-white transition-colors duration-500">
                {m.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex items-center gap-4 border border-white/15 bg-ink-850 px-6 py-5" data-testid="materials-warning">
          <TriangleAlert size={20} className="text-white shrink-0" />
          <p className="text-sm md:text-base text-white font-semibold tracking-wide">
            Not every sneaker should be cleaned the same way.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
