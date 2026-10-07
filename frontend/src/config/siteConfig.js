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
    whatsappNumber: "27609958632",
    whatsappMessage:
      "Hi OTG, I'd like to enquire about getting my sneakers cleaned.",
    instagramUrl: "https://www.instagram.com/otg.sneaker_cleaning",
    instagramHandle: "@otg.sneaker_cleaning",
    tiktokUrl: "https://www.tiktok.com/@otg.sneakercleaning",
    tiktokHandle: "@otg.sneakercleaning",
    email: "otg.sneakercleaning@gmail.com",
    location: "Pinelands, Cape Town, South Africa",
    hours: "", // TODO: e.g. "Mon–Sat, 09:00–18:00"
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Kits", href: "#kits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],

  // ── SERVICES (leave price "" to show GET A QUOTE) ──
  services: [
    {
      id: "standard",
      name: "STANDARD CLEAN",
      tagline: "For sneakers that need a freshen-up.",
      features: [
        "Surface cleaning",
        "Sole cleaning",
        "Basic stain treatment",
        "Deodorising",
      ],
      price: "R80",
      priceRows: [
        { label: "Standard materials", price: "R80" },
        { label: "Suede", price: "R90" },
      ],
      cta: "BOOK STANDARD CLEAN",
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
      price: "R100",
      priceRows: [
        { label: "Standard materials", price: "R100" },
        { label: "Suede", price: "R110" },
      ],
      cta: "BOOK DEEP CLEAN",
      featured: true,
    },
    {
      id: "other-services",
      name: "OTHER SERVICES",
      tagline: "For sneakers that need more than a clean.",
      features: [
        "Deoxidise / de-yellow",
        "Pick-up and drop-off available",
        "Sole repaint for white soles",
      ],
      price: "From R50",
      priceRows: [
        { label: "Deoxidise / de-yellow", price: "R100" },
        { label: "Pick-up / drop-off", price: "From R50" },
        { label: "Sole repaint (white only)", price: "R150" },
      ],
      cta: "ENQUIRE ABOUT OTHER SERVICES",
      featured: false,
    },
  ],

  // ── OTG PRODUCTS / KITS (WhatsApp ordering) ──
  products: [
    {
      id: "travel-kit",
      name: "OTG Travel Kit",
      price: "R250",
      tagline: "The essentials, packed for the move.",
      image: "/images/kit-b.webp",
      contents: [
        "Sneaker Shampoo",
        "Microfiber Cloth",
        "Soft Bristle Brush",
        "Travel Case",
      ],
      featured: false,
    },
    {
      id: "cleaning-kit",
      name: "OTG Cleaning Kit",
      price: "R350",
      tagline: "The full home-care setup.",
      image: "/images/kit-a.webp",
      contents: [
        "Sneaker Shampoo",
        "Sneaker Whitener",
        "Microfiber Cloth",
        "Soft Bristle Brush",
        "Hard Bristle Brush",
        "Travel Case",
      ],
      featured: true,
    },
  ],
  productShots: [
    { src: "/images/kit-d.webp", alt: "OTG Sneaker Shampoo bottle" },
    { src: "/images/kit-e.webp", alt: "OTG Sneaker Whitener bottle" },
    { src: "/images/kit-c.webp", alt: "OTG soft bristle sneaker brush" },
    { src: "/images/Cloth.JPG", alt: "OTG microfiber cleaning cloth" },
    { src: "/images/Brush.JPG", alt: "OTG sneaker cleaning brush" },
  ],

  // ── BEFORE / AFTER (placeholder imagery — swap in real OTG results) ──
  // NOTE: the same photo is shown treated (dirty) vs untreated (clean) as a
  // placeholder. Replace `image` with real before/after pairs when available.
  beforeAfter: [
    {
      id: 1,
      image: "/images/ba1.jpg",
      sneaker: "P6000",
      service: "Deoxidise & Repaint",
      quote: "From worn and tired to clean and refreshed.",
    },
  ],

  // ── GALLERY (real OTG work first; placeholders after — swap freely) ──
  gallery: [
    { src: "/images/real-5.webp", alt: "Freshly cleaned blue Adidas Campus 00s by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-3.webp", alt: "Grey Air Jordan 3 poolside after an OTG deep clean", tag: "OTG WORK", real: true },
    { src: "/images/real-2.jpg", alt: "Green and white Air Jordan 1 Low restored by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-1.jpg", alt: "Burgundy leopard Nike Air Max 90 cleaned by OTG", tag: "OTG WORK", real: true },
    { src: "/images/real-4.webp", alt: "Pink Adidas Spezial after a professional OTG clean", tag: "OTG WORK", real: true },
    { src: "/images/kit-c.webp", alt: "OTG soft bristle sneaker brush", tag: "THE KIT", real: true },
    { src: "/images/g2.jpg", alt: "Black and white high-top sneaker studio shot", tag: "STUDIO" },
    { src: "/images/g10.jpg", alt: "Black sneaker close-up on dark background", tag: "DETAIL" },
    { src: "/images/g9.jpg", alt: "Clean white sneaker macro detail", tag: "DETAIL" },
  ],

  // ── TESTIMONIALS (PLACEHOLDER — replace with real customer reviews) ──
  testimonials: [
    {
      name: "Mia K.",
      review:
        "My white Air Force 1s came back looking way cleaner than I expected. The soles especially looked fresh again.",
      detail: "Standard Clean - Air Force 1",
    },
    {
      name: "Josh R.",
      review:
        "Sent in my Jordans after a rough weekend and OTG brought them back properly. Easy handover and solid finish.",
      detail: "Deep Clean - Jordan 1",
    },
    {
      name: "Aaliyah S.",
      review:
        "The suede was handled carefully and the colour still looked good after cleaning. Definitely booking again.",
      detail: "Suede Clean - Adidas Campus",
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
      q: "Do you offer deoxidising and repainting?",
      a: "Yes — deoxidising and repainting go beyond cleaning: heavy stain treatment, material care, and detailed finishing. Enquire with photos for a quote.",
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

export const whatsappLink = (customMessage) => {
  const { whatsappNumber, whatsappMessage } = site.contact;
  const message = customMessage || whatsappMessage;
  if (!whatsappNumber) return "#book";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
