import { Reveal, SectionHead } from "./Reveal";

const STEPS = [
  { n: "01", title: "Book", text: "Choose your service and submit your sneaker details." },
  { n: "02", title: "Drop Off / Hand Over", text: "Bring your sneakers to OTG or follow the available collection / drop-off process." },
  { n: "03", title: "We Clean", text: "Our process targets dirt, stains, soles and sneaker materials — carefully." },
  { n: "04", title: "Fresh Kicks", text: "Collect your freshly cleaned sneakers and give them a second chance." },
];

export const HowItWorks = () => (
  <section id="how-it-works" data-testid="how-it-works-section" className="relative bg-ink-900 py-28 md:py-40 border-t border-white/5">
    <div className="max-w-[1600px] mx-auto px-5 md:px-10">
      <SectionHead testid="how-it-works-head" eyebrow="The Process" title="From Dirty to OTG." />

      <div className="grid md:grid-cols-4 gap-10 md:gap-6">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.12}>
            <div className="relative border-t border-white/15 pt-8 group" data-testid={`step-${s.n}`}>
              <span className="absolute -top-[5px] left-0 w-2.5 h-2.5 bg-white group-hover:scale-150 transition-transform duration-300" />
              <span className="font-display text-6xl md:text-7xl text-outline-faint group-hover:text-white transition-colors duration-500 block">
                {s.n}
              </span>
              <h3 className="font-display uppercase text-2xl text-white mt-5">{s.title}</h3>
              <p className="mt-3 text-sm text-smoke leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
