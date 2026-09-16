import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/otg/Navbar";
import { Hero } from "@/components/otg/Hero";
import { Marquee } from "@/components/otg/Marquee";
import { Manifesto } from "@/components/otg/Manifesto";
import { Services } from "@/components/otg/Services";
import { Products } from "@/components/otg/Products";
import { BeforeAfter } from "@/components/otg/BeforeAfter";
import { HowItWorks } from "@/components/otg/HowItWorks";
import { Materials } from "@/components/otg/Materials";
import { Gallery } from "@/components/otg/Gallery";
import { WhyOtg } from "@/components/otg/WhyOtg";
import { Testimonials } from "@/components/otg/Testimonials";
import { Social } from "@/components/otg/Social";
import { Booking } from "@/components/otg/Booking";
import { Faq } from "@/components/otg/Faq";
import { Footer } from "@/components/otg/Footer";
import { WhatsAppFloat } from "@/components/otg/WhatsAppFloat";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -70 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="App bg-ink-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Products />
        <BeforeAfter />
        <HowItWorks />
        <Materials />
        <Gallery />
        <WhyOtg />
        <Testimonials />
        <Social />
        <Booking />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}

export default App;
