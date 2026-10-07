import { Reveal } from "./Reveal";

const STATS = [
  { n: "01", label: "Deep Cleaning" },
  { n: "02", label: "Sneaker Care" },
  { n: "03", label: "Deoxidise & Repaint" },
  { n: "04", label: "Second Chances" },
];

export const Manifesto = () => (
  <section id="manifesto" data-testid="manifesto-section" className="relative bg-ink-950 py-28 md:py-40 grain">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <Reveal>
        <p className="eyebrow mb-6">The OTG Standard</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display uppercase text-white text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] max-w-5xl" data-testid="manifesto-headline">
          Dirty Shoes.<br />
          <span className="text-outline">Clean Slate.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-12 gap-12">
        <Reveal delay={0.15} className="lg:col-span-5">
          <p className="text-smoke text-base md:text-lg leading-relaxed" data-testid="manifesto-copy">
            Your favourite sneakers take a beating. OTG gives them the care they deserve.
            Household cleaners and guesswork destroy glue, fade colour and ruin suede —
            professional sneaker care matches the process to the material, so your pair
            comes back fresh instead of finished off.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={0.1 + i * 0.08} className="bg-ink-950">
              <div className="p-8 md:p-12 group hover:bg-ink-850 transition-colors duration-500" data-testid={`manifesto-stat-${s.n}`}>
                <span className="font-display text-5xl md:text-7xl text-outline-faint group-hover:text-white transition-colors duration-500 block">
                  {s.n}
                </span>
                <span className="mt-4 block text-xs tracking-[0.3em] uppercase text-smoke group-hover:text-white transition-colors duration-500">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
