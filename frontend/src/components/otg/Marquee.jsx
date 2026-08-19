const PHRASES = ["Clean.", "Restore.", "Repeat."];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {Array.from({ length: 6 }).map((_, r) =>
      PHRASES.map((p, i) => (
        <span key={`${r}-${i}`} className="flex items-center">
          <span
            className={`font-display uppercase text-4xl md:text-6xl px-6 ${
              i % 2 === 0 ? "text-white" : "text-outline-faint"
            }`}
          >
            {p}
          </span>
          <span className="text-white/20 text-xl">◆</span>
        </span>
      ))
    )}
  </div>
);

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-6 select-none"
    aria-hidden
  >
    <div className="flex w-max animate-marquee">
      <Row />
      <Row />
    </div>
  </div>
);
