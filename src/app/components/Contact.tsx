import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ca9c9fe3-7e54-4750-b5f3-dab5153f81ea",
          subject: "New Enquiry from Chan Chan Heating Website Demo",
          from_name: "Chan Chan Heating Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitError("Couldn't send right now. Please call or email instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em] leading-tight">
              Get a Free,
              <br />
              <span className="text-[#D96A1B]">No-Obligation Quote</span>
            </h2>
            <p className="font-['DM_Sans'] text-[#5F6F80] text-[1rem] mt-4 leading-relaxed max-w-md">
              Tell us what you need and we'll get back to you fast — usually the
              same day. No pressure, no jargon, just a straight answer and a
              fair price.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:07453365352"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#D96A1B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D96A1B]/20 transition-colors">
                  <Phone size={20} className="text-[#D96A1B]" />
                </div>
                <span className="font-['DM_Sans'] text-[#1F2328] text-[0.95rem] group-hover:text-[#D96A1B] transition-colors">
                  07453 365352
                </span>
              </a>
              <a
                href="mailto:dannyboycck@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#D96A1B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D96A1B]/20 transition-colors">
                  <Mail size={20} className="text-[#D96A1B]" />
                </div>
                <span className="font-['DM_Sans'] text-[#1F2328] text-[0.95rem] group-hover:text-[#D96A1B] transition-colors">
                  dannyboycck@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#D96A1B]/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-[#D96A1B]" />
                </div>
                <span className="font-['DM_Sans'] text-[#1F2328] text-[0.95rem]">
                  Glasgow & surrounding areas
                </span>
              </div>
              <a
                href="https://www.checkatrade.com/trades/chanchanheating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 bg-[#1F2328] hover:bg-[#111418] text-white px-4 py-2 rounded-lg font-['DM_Sans'] text-[0.9rem] transition-colors"
              >
                View Checkatrade Profile
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="bg-[#F7F3EC] rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center h-full text-center">
                <CheckCircle size={48} className="text-[#D96A1B] mb-4" />
                <h3 className="font-['Manrope'] font-semibold text-[1.25rem] text-[#1F2328]">
                  Thanks for getting in touch!
                </h3>
                <p className="font-['DM_Sans'] text-[#5F6F80] mt-2 text-[0.9rem]">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F7F3EC] rounded-2xl p-4 sm:p-8 space-y-5"
              >
                <div>
                  <label className="font-['DM_Sans'] text-[#0D1B2A] text-[0.85rem] block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full bg-white border border-[#0D1B2A]/10 rounded-lg px-4 py-3 font-['DM_Sans'] text-[0.9rem] text-[#0D1B2A] placeholder:text-[#5F6F80]/50 focus:outline-none focus:ring-2 focus:ring-[#D96A1B]/30 focus:border-[#D96A1B] transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-['DM_Sans'] text-[#0D1B2A] text-[0.85rem] block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@email.com"
                      className="w-full bg-white border border-[#0D1B2A]/10 rounded-lg px-4 py-3 font-['DM_Sans'] text-[0.9rem] text-[#0D1B2A] placeholder:text-[#5F6F80]/50 focus:outline-none focus:ring-2 focus:ring-[#D96A1B]/30 focus:border-[#D96A1B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-['DM_Sans'] text-[#0D1B2A] text-[0.85rem] block mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="07xxx xxx xxx"
                      className="w-full bg-white border border-[#0D1B2A]/10 rounded-lg px-4 py-3 font-['DM_Sans'] text-[0.9rem] text-[#0D1B2A] placeholder:text-[#5F6F80]/50 focus:outline-none focus:ring-2 focus:ring-[#D96A1B]/30 focus:border-[#D96A1B] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-['DM_Sans'] text-[#0D1B2A] text-[0.85rem] block mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your job..."
                    className="w-full bg-white border border-[#0D1B2A]/10 rounded-lg px-4 py-3 font-['DM_Sans'] text-[0.9rem] text-[#0D1B2A] placeholder:text-[#5F6F80]/50 focus:outline-none focus:ring-2 focus:ring-[#D96A1B]/30 focus:border-[#D96A1B] transition-all resize-none"
                  />
                </div>
                {submitError ? (
                  <p className="text-sm text-red-600 font-['DM_Sans']">
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#D96A1B] hover:bg-[#B85714] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-['DM_Sans'] text-[0.95rem] transition-colors"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
