import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 36, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ eyebrow, title, sub, testid }) => (
  <div className="mb-14 md:mb-20" data-testid={testid}>
    <Reveal>
      <p className="eyebrow mb-5">{eyebrow}</p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-7xl leading-[0.95] text-white max-w-4xl">
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className="mt-6 max-w-xl text-smoke text-base md:text-lg leading-relaxed">{sub}</p>
      </Reveal>
    )}
  </div>
);
