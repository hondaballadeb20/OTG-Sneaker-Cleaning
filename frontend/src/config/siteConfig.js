// ─────────────────────────────────────────────────────────────
// OTG SNEAKER CLEANING — CENTRAL SITE CONFIGURATION
// Edit ALL business details, services, prices, testimonials,
// gallery images and contact info here. Nothing is hardcoded
// inside components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "OTG Sneaker Cleaning",
  logoShort: "OTG",
  logoSub: "SNEAKER CLEANING",
  tagline: "Where Dirty Sneakers Get a Second Chance.",
  logo: "/images/otg-logo.jpg",

  // ── CONTACT / BUSINESS DETAILS (edit these when available) ──
  contact: {
    whatsappNumber: "", // TODO: international format, no "+" — e.g. "27821234567"
    whatsappMessage:
      "Hi OTG, I'd like to enquire about getting my sneakers cleaned.",
    instagramUrl: "", // TODO: e.g. "https://instagram.com/otgsneakercleaning"
    instagramHandle: "@otg", // display label only until URL is set
    email: "", // TODO: e.g. "hello@otgcleaning.com"
    location: "", // TODO: e.g. "Cape Town, South Africa"
    hours: "", // TODO: e.g. "Mon–Sat, 09:00–18:00"
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],

  // ── SERVICES (leave price "" to show GET A QUOTE) ──
  services: [
    {
      id: "basic",
      name: "BASIC CLEAN",
      tagline: "For sneakers that need a freshen-up.",
      features: [
        "Surface cleaning",
        "Sole cleaning",
        "Basic stain treatment",
        "Deodorising",
      ],
      price: "", // TODO: e.g. "R250"
      cta: "BOOK BASIC CLEAN",
      featured: false,
    },
    {
      id: "deep",
      name: "DEEP CLEAN",
      tagline: "For sneakers that need serious attention.",
      features: [
        "Full upper cleaning",
        "Deep sole cleaning",
        "Stain treatment",
        "Lace cleaning",
        "Deodorising",
        "Detailed finishing",
      ],
      price: "", // TODO: e.g. "R400"
      cta: "BOOK DEEP CLEAN",
      featured: true,
    },
    {
      id: "restoration",
      name: "RESTORATION",
      tagline: "For sneakers that need more than a clean.",
      features: [
        "Deep restoration",
        "Heavy stain treatment",
        "Material care",
        "Colour restoration where applicable",
        "Detailed finishing",
      ],
      price: "", // TODO
      cta: "ENQUIRE ABOUT RESTORATION",
      featured: false,
    },
  ],

  // ── BEFORE / AFTER (placeholder imagery — swap in real OTG results) ──
  // NOTE: the same photo is shown treated (dirty) vs untreated (clean) as a
  // placeholder. Replace `image` with real before/after pairs when available.
  beforeAfter: [
    {
      id: 1,
      image: "/images/ba1.jpg",
      sneaker: "AIR FORCE 1",
      service: "Deep Clean",
      quote: "From everyday beat-up to fresh-out-the-box.",
    },
    {
      id: 2,
      image: "/images/ba2.jpg",
      sneaker: "RETRO HIGH",
      service: "Restoration",
      quote: "Creased, scuffed and tired — brought back to life.",
    },
    {
      id: 3,
      image: "/images/ba3.jpg",
      sneaker: "COURT CLASSIC",
      service: "Deep Clean",
      quote: "Grey uppers and tired soles, reset to fresh.",
    },
  ],

  // ── GALLERY (real OTG work first; placeholders after — swap freely) ──
  gallery: [
    { src: "/images/real-5.webp", alt: "Freshly cleaned blue Adidas Campus 00s by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-3.webp", alt: "Grey Air Jordan 3 poolside after an OTG deep clean", tag: "OTG WORK", real: true },
    { src: "/images/real-2.jpg", alt: "Green and white Air Jordan 1 Low restored by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-1.jpg", alt: "Burgundy leopard Nike Air Max 90 cleaned by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-4.webp", alt: "Pink Adidas Spezial after a professional OTG clean", tag: "OTG WORK", real: true },
    { src: "/images/kit.jpg", alt: "Sneaker cleaning brushes and kit", tag: "THE KIT" },
    { src: "/images/g2.jpg", alt: "Black and white high-top sneaker studio shot", tag: "STUDIO" },
    { src: "/images/g10.jpg", alt: "Black sneaker close-up on dark background", tag: "DETAIL" },
    { src: "/images/g9.jpg", alt: "Clean white sneaker macro detail", tag: "DETAIL" },
  ],

  // ── TESTIMONIALS (PLACEHOLDER — replace with real customer reviews) ──
  testimonials: [
    {
      name: "Placeholder",
      review:
        "Placeholder review — swap in a real customer quote here. Keep it short, specific and sneaker-focused.",
      detail: "Deep Clean · Air Force 1",
    },
    {
      name: "Placeholder",
      review:
        "Placeholder review — a real review might mention turnaround time, care taken, or how fresh the pair came back.",
      detail: "Restoration · Jordan 1",
    },
    {
      name: "Placeholder",
      review:
        "Placeholder review — real social proof goes here once OTG customers send feedback.",
      detail: "Basic Clean · Daily beaters",
    },
  ],

  // ── FAQ (edit answers as operational details are confirmed) ──
  faqs: [
    {
      q: "How long does sneaker cleaning take?",
      a: "Turnaround depends on the service and the condition of your pair. Message us on WhatsApp when you book and we'll confirm timing for your sneakers.",
    },
    {
      q: "What types of sneakers can you clean?",
      a: "We work across leather, suede, mesh, canvas, rubber and synthetic uppers — each material gets its own process. If you're unsure about your pair, send us a photo first.",
    },
    {
      q: "Can you remove yellowing?",
      a: "Yellowing is assessed case by case — results depend on the material and how far the oxidation has set in. Send us photos and we'll give you an honest answer before you book.",
    },
    {
      q: "Can you clean suede sneakers?",
      a: "Yes — suede gets a dedicated, gentle process. It's one of the materials we treat most carefully, so mention it when booking.",
    },
    {
      q: "Can you remove tough stains?",
      a: "Most stains improve significantly with professional treatment, but we never promise miracles we can't deliver. Send a photo of the stain and we'll tell you exactly what to expect.",
    },
    {
      q: "Do you offer sneaker restoration?",
      a: "Yes — restoration goes beyond cleaning: heavy stain treatment, material care and colour restoration where applicable. Enquire with photos for a quote.",
    },
    {
      q: "How do I book?",
      a: "Use the booking form on this page or message us directly on WhatsApp — tell us your sneaker, the service you need, and we'll take it from there.",
    },
    {
      q: "Where are you located?",
      a: "Location details are being finalised — check back soon or reach out on WhatsApp and we'll share drop-off details.",
    },
    {
      q: "Do you offer collection/delivery?",
      a: "Collection and delivery options are being confirmed. Ask us on WhatsApp when you book and we'll arrange the easiest hand-over for you.",
    },
  ],
};

export const whatsappLink = () => {
  const { whatsappNumber, whatsappMessage } = site.contact;
  if (!whatsappNumber) return "#book";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
