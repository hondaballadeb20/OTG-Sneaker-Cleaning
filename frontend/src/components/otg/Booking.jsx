import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { site, whatsappLink } from "../../config/siteConfig";
import { Reveal } from "./Reveal";

const CONDITIONS = [
  "Lightly worn",
  "Daily beater",
  "Heavily worn",
  "Stained",
  "Yellowing",
  "Needs deoxidising",
];

const inputCls =
  "w-full bg-ink-800 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-smoke-dark focus:border-white/50 focus:outline-none transition-colors duration-300";

const emptyPair = {
  sneaker_brand: "",
  sneaker_model: "",
  service: "",
  condition: "",
  notes: "",
};

const buildBookingMessage = (form, pairs) => {
  const lines = [
    "Hi OTG, I'd like to book multiple sneaker cleanings.",
    `Full Name: ${form.full_name}`,
    `WhatsApp: ${form.whatsapp}`,
    `Email: ${form.email}`,
    `Preferred Date: ${form.preferred_date || "Flexible"}`,
    "",
    "Pairs:",
  ];

  pairs.forEach((pair, index) => {
    lines.push(`Pair ${index + 1}:`);
    lines.push(`- Brand: ${pair.sneaker_brand || "Not specified"}`);
    lines.push(`- Model: ${pair.sneaker_model || "Not specified"}`);
    lines.push(`- Service: ${pair.service || "Not sure yet"}`);
    lines.push(`- Condition: ${pair.condition || "Not specified"}`);
    lines.push(`- Notes: ${pair.notes || "No extra notes"}`);
    lines.push("");
  });

  return lines.join("\n");
};

export const Booking = () => {
  const [form, setForm] = useState({
    full_name: "",
    whatsapp: "",
    email: "",
    preferred_date: "",
  });
  const [pairs, setPairs] = useState([emptyPair]);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    const onSelect = (e) => setPairs((current) => {
      const next = [...current];
      next[0] = { ...next[0], service: e.detail };
      return next;
    });
    window.addEventListener("otg:select-service", onSelect);
    return () => window.removeEventListener("otg:select-service", onSelect);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const updatePair = (index, key) => (e) => {
    setPairs((current) => current.map((pair, pairIndex) =>
      pairIndex === index ? { ...pair, [key]: e.target.value } : pair
    ));
  };

  const addPair = () => setPairs((current) => [...current, { ...emptyPair }]);

  const removePair = (index) => {
    setPairs((current) => current.length > 1 ? current.filter((_, pairIndex) => pairIndex !== index) : current);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const invalidPair = pairs.find((pair) => !pair.sneaker_brand || !pair.sneaker_model || !pair.service || !pair.condition);
      if (invalidPair) {
        toast.error("Complete every pair's brand, model, service, and condition before sending.");
        return;
      }

      const message = buildBookingMessage(form, pairs);
      const url = whatsappLink(message);
      window.open(url, "_blank", "noopener,noreferrer");

      setConfirmation({
        id: "WHATSAPP",
        message: "Your booking details are ready in WhatsApp. Send the message and OTG will confirm the next step.",
      });
      window.__lenis?.scrollTo("#book", { offset: -60 });
    } catch (err) {
      toast.error("Something went wrong preparing your booking. Please message OTG directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" data-testid="booking-section" className="relative bg-white text-black py-28 md:py-40">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase text-black/50 font-semibold mb-5">Book OTG</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display uppercase text-[clamp(2.6rem,6.5vw,6rem)] leading-[0.95]" data-testid="booking-headline">
            Ready to Give Your Kicks a <span className="text-black/30">Second Chance?</span>
          </h2>
        </Reveal>

        <AnimatePresence mode="wait">
          {confirmation ? (
            <motion.div
              key="done"
              data-testid="booking-confirmation"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 border-2 border-black p-10 md:p-16 text-center"
            >
              <CheckCircle2 size={52} className="mx-auto mb-6" />
              <h3 className="font-display uppercase text-4xl md:text-5xl">Booking Received.</h3>
              <p className="mt-4 text-black/60 max-w-md mx-auto">
                {confirmation.message} Reference: <span className="font-mono font-bold text-black">{confirmation.id.slice(0, 8).toUpperCase()}</span>
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink()}
                  data-testid="confirmation-whatsapp-button"
                  className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 border border-black hover:bg-transparent hover:text-black transition-colors duration-300"
                >
                  <MessageCircle size={15} /> Chat with OTG
                </a>
                <button
                  onClick={() => { setConfirmation(null); setForm({ full_name: "", whatsapp: "", email: "", preferred_date: "" }); setPairs([emptyPair]); }}
                  data-testid="book-another-button"
                  className="text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 border border-black/30 hover:border-black transition-colors duration-300"
                >
                  Book Another Pair
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              data-testid="booking-form"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 grid md:grid-cols-2 gap-5"
            >
              <input required data-testid="booking-name-input" placeholder="Full Name *" value={form.full_name} onChange={set("full_name")} className={inputCls} />
              <input required data-testid="booking-whatsapp-input" placeholder="WhatsApp Number *" value={form.whatsapp} onChange={set("whatsapp")} className={inputCls} />
              <input required type="email" data-testid="booking-email-input" placeholder="Email *" value={form.email} onChange={set("email")} className={inputCls} />

              <div className="md:col-span-2">
                <label className="block text-[10px] tracking-[0.25em] uppercase text-black/50 mb-2">Preferred Drop-Off / Collection Date</label>
                <input type="date" data-testid="booking-date-input" value={form.preferred_date} onChange={set("preferred_date")} className={inputCls} />
              </div>

              {pairs.map((pair, index) => (
                <div key={index} className="md:col-span-2 border border-black/15 p-5 md:p-6 space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs tracking-[0.25em] uppercase font-bold">Pair {index + 1}</p>
                    {pairs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePair(index)}
                        data-testid={`remove-pair-${index}`}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:text-black/60"
                      >
                        <X size={14} /> Remove
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input required data-testid={`booking-brand-input-${index}`} placeholder="Sneaker Brand * (e.g. Nike)" value={pair.sneaker_brand} onChange={updatePair(index, "sneaker_brand")} className={inputCls} />
                    <input required data-testid={`booking-model-input-${index}`} placeholder="Sneaker Model * (e.g. Air Force 1)" value={pair.sneaker_model} onChange={updatePair(index, "sneaker_model")} className={inputCls} />
                    <select required data-testid={`booking-service-select-${index}`} value={pair.service} onChange={updatePair(index, "service")} className={`${inputCls} ${!pair.service && "text-smoke-dark"}`}>
                      <option value="" disabled>Service Required *</option>
                      {site.services.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                      <option value="Not sure — advise me">Not sure — advise me</option>
                    </select>
                    <select required data-testid={`booking-condition-select-${index}`} value={pair.condition} onChange={updatePair(index, "condition")} className={`${inputCls} ${!pair.condition && "text-smoke-dark"}`}>
                      <option value="" disabled>Sneaker Condition *</option>
                      {CONDITIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <textarea data-testid={`booking-notes-input-${index}`} placeholder="Pair Notes" value={pair.notes} onChange={updatePair(index, "notes")} rows={3} className={`${inputCls} resize-none`} />
                </div>
              ))}

              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={addPair}
                  data-testid="add-pair-button"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-6 py-4 border border-black/30 hover:border-black transition-colors duration-300"
                >
                  <Plus size={15} /> Add Another Pair
                </button>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="booking-submit-button"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white text-sm font-bold tracking-[0.25em] uppercase px-14 py-5 border border-black hover:bg-transparent hover:text-black transition-colors duration-300 disabled:opacity-60"
                >
                  {submitting ? <Loader2 size={18} className="animate-spin" /> : null}
                  {submitting ? "Sending..." : "Book Your Clean"}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
