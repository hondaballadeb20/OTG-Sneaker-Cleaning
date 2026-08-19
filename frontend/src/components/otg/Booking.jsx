import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { site, whatsappLink } from "../../config/siteConfig";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CONDITIONS = [
  "Lightly worn",
  "Daily beater",
  "Heavily worn",
  "Stained",
  "Yellowing",
  "Needs restoration",
];

const inputCls =
  "w-full bg-ink-800 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-smoke-dark focus:border-white/50 focus:outline-none transition-colors duration-300";

const downscale = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, 1200 / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const emptyForm = {
  full_name: "",
  whatsapp: "",
  email: "",
  sneaker_brand: "",
  sneaker_model: "",
  service: "",
  condition: "",
  preferred_date: "",
  notes: "",
};

export const Booking = () => {
  const [form, setForm] = useState(emptyForm);
  const [photos, setPhotos] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    const onSelect = (e) => setForm((f) => ({ ...f, service: e.detail }));
    window.addEventListener("otg:select-service", onSelect);
    return () => window.removeEventListener("otg:select-service", onSelect);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const addPhotos = async (files) => {
    const room = 5 - photos.length;
    const picked = Array.from(files).slice(0, room);
    const processed = await Promise.all(
      picked.map(async (f) => ({ filename: f.name, data: await downscale(f) }))
    );
    setPhotos((p) => [...p, ...processed]);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/bookings`, { ...form, photos });
      setConfirmation(data);
      window.__lenis?.scrollTo("#book", { offset: -60 });
    } catch (err) {
      toast.error("Something went wrong sending your booking. Try WhatsApp instead.");
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
                  onClick={() => { setConfirmation(null); setForm(emptyForm); setPhotos([]); }}
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
              <input required data-testid="booking-brand-input" placeholder="Sneaker Brand * (e.g. Nike)" value={form.sneaker_brand} onChange={set("sneaker_brand")} className={inputCls} />
              <input required data-testid="booking-model-input" placeholder="Sneaker Model * (e.g. Air Force 1)" value={form.sneaker_model} onChange={set("sneaker_model")} className={inputCls} />
              <select required data-testid="booking-service-select" value={form.service} onChange={set("service")} className={`${inputCls} ${!form.service && "text-smoke-dark"}`}>
                <option value="" disabled>Service Required *</option>
                {site.services.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
                <option value="unsure">Not sure — advise me</option>
              </select>
              <select required data-testid="booking-condition-select" value={form.condition} onChange={set("condition")} className={`${inputCls} ${!form.condition && "text-smoke-dark"}`}>
                <option value="" disabled>Sneaker Condition *</option>
                {CONDITIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-black/50 mb-2">Preferred Drop-Off / Collection Date</label>
                <input type="date" data-testid="booking-date-input" value={form.preferred_date} onChange={set("preferred_date")} className={inputCls} />
              </div>
              <textarea data-testid="booking-notes-input" placeholder="Additional Notes" value={form.notes} onChange={set("notes")} rows={4} className={`${inputCls} md:col-span-2 resize-none`} />

              <div className="md:col-span-2">
                <label
                  data-testid="booking-upload-zone"
                  className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-black/25 hover:border-black/60 px-6 py-10 cursor-pointer transition-colors duration-300"
                >
                  <Upload size={22} />
                  <span className="text-xs tracking-[0.25em] uppercase font-bold">Upload Sneaker Photos (up to 5)</span>
                  <span className="text-xs text-black/50">Clear shots of the uppers, soles and any stains help us quote accurately.</span>
                  <input type="file" accept="image/*" multiple className="hidden" data-testid="booking-file-input" onChange={(e) => addPhotos(e.target.files)} />
                </label>
                {photos.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3" data-testid="booking-photo-previews">
                    {photos.map((p, i) => (
                      <div key={i} className="relative w-20 h-20 border border-black/20">
                        <img src={p.data} alt={`Sneaker upload ${i + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          data-testid={`remove-photo-${i}`}
                          onClick={() => setPhotos((ps) => ps.filter((_, x) => x !== i))}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white flex items-center justify-center"
                          aria-label="Remove photo"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
