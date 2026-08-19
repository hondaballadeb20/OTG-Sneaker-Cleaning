import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../config/siteConfig";

export const WhatsAppFloat = () => (
  <motion.a
    href={whatsappLink()}
    target={whatsappLink().startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    data-testid="whatsapp-float-button"
    initial={{ opacity: 0, scale: 0.6, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="fixed bottom-5 right-5 z-50 group flex items-center gap-0 bg-white text-black border border-white shadow-2xl hover:bg-ink-950 hover:text-white transition-colors duration-300"
    aria-label="Chat with OTG on WhatsApp"
  >
    <span className="flex items-center justify-center w-14 h-14">
      <MessageCircle size={22} />
    </span>
    <span className="max-w-0 overflow-hidden group-hover:max-w-[160px] transition-[max-width] duration-500 ease-out whitespace-nowrap">
      <span className="pr-5 text-[11px] font-bold tracking-[0.2em] uppercase">Chat with OTG</span>
    </span>
  </motion.a>
);
