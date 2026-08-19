import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { site } from "../../config/siteConfig";
import { Reveal, SectionHead } from "./Reveal";

export const Faq = () => (
  <section id="faq" data-testid="faq-section" className="relative bg-ink-950 py-28 md:py-40 border-t border-white/5">
    <div className="max-w-[1000px] mx-auto px-5 md:px-10">
      <SectionHead testid="faq-head" eyebrow="Questions" title="Before You Ask." />

      <Reveal>
        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {site.faqs.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-white/10">
              <AccordionTrigger
                data-testid={`faq-question-${i}`}
                className="text-left font-display uppercase text-lg md:text-2xl text-white hover:text-smoke hover:no-underline py-6 transition-colors duration-300"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-smoke text-base leading-relaxed pb-6 max-w-2xl" data-testid={`faq-answer-${i}`}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
