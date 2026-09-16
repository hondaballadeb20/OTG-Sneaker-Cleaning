import { Instagram, MessageCircle, Mail, MapPin, Music2 } from "lucide-react";
import { site, whatsappLink } from "../../config/siteConfig";

export const Footer = () => {
  const c = site.contact;
  return (
    <footer data-testid="site-footer" className="relative bg-ink-950 border-t border-white/10 grain">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img src={site.logo} alt="OTG Sneaker Cleaning logo" className="w-14 h-14 object-cover invert" />
              <div>
                <p className="font-display text-3xl text-white leading-none">{site.logoShort}</p>
                <p className="text-[10px] tracking-[0.35em] text-smoke-dark mt-1">{site.logoSub}</p>
              </div>
            </div>
            <p className="mt-6 text-smoke text-sm max-w-xs leading-relaxed" data-testid="footer-tagline">
              {site.tagline}
            </p>
            <div className="mt-8 flex gap-3">
              <a href={c.instagramUrl || "#social"} data-testid="footer-instagram" aria-label="Instagram" className="w-11 h-11 border border-white/15 flex items-center justify-center text-smoke hover:text-black hover:bg-white transition-colors duration-300">
                <Instagram size={17} />
              </a>
              <a href={whatsappLink()} data-testid="footer-whatsapp" aria-label="WhatsApp" className="w-11 h-11 border border-white/15 flex items-center justify-center text-smoke hover:text-black hover:bg-white transition-colors duration-300">
                <MessageCircle size={17} />
              </a>
              <a href={c.tiktokUrl || "#social"} target={c.tiktokUrl ? "_blank" : undefined} rel="noopener noreferrer" data-testid="footer-tiktok" aria-label="TikTok" className="w-11 h-11 border border-white/15 flex items-center justify-center text-smoke hover:text-black hover:bg-white transition-colors duration-300">
                <Music2 size={17} />
              </a>
              <a href={c.email ? `mailto:${c.email}` : "#book"} data-testid="footer-email" aria-label="Email" className="w-11 h-11 border border-white/15 flex items-center justify-center text-smoke hover:text-black hover:bg-white transition-colors duration-300">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {[...site.nav, { label: "Book", href: "#book" }].map((l) => (
                <a key={l.href} href={l.href} data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-smoke hover:text-white transition-colors duration-300 w-fit">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-4 text-sm text-smoke" data-testid="footer-contact">
              <li className="flex items-center gap-3">
                <MessageCircle size={15} className="text-white/50" />
                {c.whatsappNumber ? `+${c.whatsappNumber}` : "WhatsApp — number dropping soon"}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-white/50" />
                {c.email || "Email — coming soon"}
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-white/50" />
                {c.location || "Location — to be announced"}
              </li>
              {c.hours && <li className="text-smoke-dark">{c.hours}</li>}
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display uppercase text-2xl md:text-4xl text-outline-faint select-none">
            Second Chances Only.
          </p>
          <p className="text-xs text-smoke-dark" data-testid="footer-copyright">
            © 2026 OTG Sneaker Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
