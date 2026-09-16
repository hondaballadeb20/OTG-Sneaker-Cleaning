# OTG Sneaker Cleaning — PRD

## Original Problem Statement
Build a premium, modern, youth-focused website for OTG Sneaker Cleaning (sneaker cleaning & restoration brand). Strict monochrome identity (black/charcoal/white) from the existing OTG logo. Dark, editorial, streetwear-boutique aesthetic — NOT a generic cleaning-company template. Full sections: kinetic hero, trust manifesto, services (Basic/Deep/Restoration), interactive before/after slider, 4-step process, material care education, masonry gallery + lightbox, Why OTG, testimonials, Instagram section, booking form with photo upload, floating WhatsApp CTA, FAQ accordion, minimal footer. Lenis smooth scroll + framer-motion. Central config file for all business data. Local SEO foundations. Fully responsive.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion 11 + lenis 1.3, shadcn accordion, sonner toasts
- Backend: FastAPI `/api/bookings` (POST create, GET list) — MongoDB via motor
- Central config: `/app/frontend/src/config/siteConfig.js` (business info, services, prices, testimonials, gallery, FAQs, WhatsApp/Instagram links)
- Components: `/app/frontend/src/components/otg/*` (Navbar, Hero, Marquee, Manifesto, Services, BeforeAfter, HowItWorks, Materials, Gallery, WhyOtg, Testimonials, Social, Booking, Faq, Footer, WhatsAppFloat, Reveal)
- Images: local, in `/app/frontend/public/images/` (grayscale-treated for monochrome identity)

## User Personas
- Sneakerhead wanting grails restored safely
- Casual wearer with beat-up daily pairs
- Parent/young professional wanting a trusted local service

## Implemented (2026-07-19 build, verified 2026-08-19)
- 2026-09-16: Replaced gallery placeholders with 5 real OTG result photos (Campus 00s, Jordan 3, Jordan 1 Low, Air Max 90, Spezial) — grayscale by default, colour reveals on hover, full colour in lightbox
- 2026-09-16: Added "TAKE THE CLEAN HOME." products section (#kits) — OTG Travel Kit R250 + OTG Cleaning Kit R350 (featured) with real product photography (flat-lays rotated upright, bottle/brush shots), WhatsApp ordering per product (pre-filled message, falls back to #book until whatsappNumber set), "Inside the Kits" strip, KITS nav link
- Full single-page site, all 20 brief sections, award-direction motion (masked hero reveal, parallax, marquee, scroll reveals, Lenis)
- Booking form end-to-end (validated, photo upload up to 5 with client-side downscale, Mongo storage, confirmation state with reference ID) — tested via UI submit + curl
- Before/after drag slider (3 examples, placeholder-treated imagery, clearly marked)
- FAQ accordion with safe placeholder answers; testimonials marked SAMPLE; gallery/before-after marked placeholder
- SEO: title, meta description, OG tags, LocalBusiness JSON-LD, semantic headings
- WhatsApp float + all contact details wired to config (currently empty → fall back to #book)

## Credentials
No authentication in this app. No test credentials needed.

## Backlog (prioritized)
- P0: Add real WhatsApp number, Instagram URL, email, location in `siteConfig.js` (one file)
- P0: Replace placeholder before/after + gallery photography with real OTG shots
- P1: Add real prices to services (config `price` field) and real testimonials
- P1: Simple admin view for bookings (or email/WhatsApp notification on new booking — Resend)
- P2: More before/after examples, OG share image, sitemap.xml, Google Business profile link
