import { motion } from "motion/react";
import { Star, Flame, Clock } from "lucide-react";
import gasSafeLogo from "@/assets/3576a400533664424d96a6eb8a9c38ec8c3b5010.png";
import heroImage from "@/assets/client-images/hero.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88vh] lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-[#1F2328] pt-28 sm:pt-28 lg:pt-32">
      {/* Flowing flame gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 75% 85%, rgba(217,106,27,0.24) 0%, transparent 70%), " +
            "radial-gradient(ellipse 50% 60% at 85% 50%, rgba(249,115,22,0.14) 0%, transparent 65%), " +
            "radial-gradient(ellipse 40% 50% at 65% 70%, rgba(13,43,110,0.14) 0%, transparent 60%)",
        }}
      />
      {/* Subtle upper glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 35% 45% at 80% 25%, rgba(249,115,22,0.10) 0%, transparent 70%), " +
            "radial-gradient(ellipse 25% 35% at 60% 15%, rgba(13,43,110,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column — copy */}
          <div>
            {/* Mobile / tablet hero image (shorter height, above heading) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mb-5 lg:hidden"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3]">
                <ImageWithFallback
                  src={heroImage}
                  alt="Gas boiler installation"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2328]/70 via-[#1F2328]/20 to-transparent" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Manrope'] font-semibold text-[2rem] sm:text-[3.5rem] lg:text-[4rem] text-white leading-[1.08] tracking-[-0.03em]"
            >
              Central Heating &{" "}
              <span className="text-[#D96A1B]">Boiler Specialists</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-[1rem] sm:text-[1.125rem] text-white/70 font-['DM_Sans'] max-w-lg leading-relaxed"
            >
              Chan Chan Heating provides reliable boiler callouts, servicing,
              installations and gas work across Glasgow and surrounding areas
              for homeowners and landlords.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => handleScroll("#contact")}
                className="w-full sm:w-auto bg-[#D96A1B] hover:bg-[#B85714] text-white px-7 py-3.5 rounded-lg font-['DM_Sans'] text-[1rem] transition-colors"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => handleScroll("#reviews")}
                className="w-full sm:w-auto border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-lg font-['DM_Sans'] text-[1rem] transition-colors"
              >
                See Our Reviews &darr;
              </button>
            </motion.div>

            {/* Mobile / tablet trust badges under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 space-y-2.5 sm:space-y-3 lg:hidden"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2.5 shadow-lg shadow-black/10">
                <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 bg-white">
                  <img
                    src={gasSafeLogo}
                    alt="Gas Safe Register"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-white text-[0.9rem] leading-tight">
                    Gas Safe Registered
                  </div>
                  <div className="font-['DM_Sans'] text-white/55 text-[0.76rem] mt-0.5">
                    Licence No. 000000
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2.5 shadow-lg shadow-black/10">
                <div className="w-9 h-9 bg-[#D96A1B]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Star size={17} className="text-[#D96A1B]" fill="#D96A1B" />
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-white text-[0.88rem] leading-tight">
                    9.78 Checkatrade
                  </div>
                  <div className="font-['DM_Sans'] text-white/55 text-[0.74rem] mt-0.5">
                    Trusted local service
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 hidden lg:flex flex-wrap gap-6 text-white/60 font-['DM_Sans'] text-[0.85rem]"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#D96A1B]" fill="#D96A1B" />
                <span>9.78 Checkatrade Score</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#D96A1B]" />
                <span>Approved Since 2024</span>
              </div>
            </motion.div>

          </div>

          {/* Right column — image with overlaid badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[520px]">
              <ImageWithFallback
                src={heroImage}
                alt="Gas boiler installation"
                className="w-full h-full object-cover"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2328]/70 via-[#1F2328]/20 to-transparent" />
            </div>

            {/* Badge cards anchored to image */}
            <div className="absolute -bottom-6 -left-6 flex flex-col gap-3">
              {/* Stat card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 items-center gap-4 shadow-lg shadow-black/10"
              >
                <div className="w-11 h-11 bg-[#D96A1B]/20 rounded-xl flex items-center justify-center">
                  <Flame size={22} className="text-[#D96A1B]" />
                </div>
                <div>
                  <div className="font-['Manrope'] font-semibold text-[1.2rem] text-white leading-none">
                    57+
                  </div>
                  <div className="font-['DM_Sans'] text-white/60 text-[0.78rem] mt-0.5">
                    Checkatrade Reviews
                  </div>
                </div>
              </motion.div>

              {/* Gas Safe Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3.5 shadow-lg shadow-black/10"
              >
                <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={gasSafeLogo}
                    alt="Gas Safe Register"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-white text-[0.85rem] leading-tight">
                    Gas Safe Registered
                  </div>
                  <div className="font-['DM_Sans'] text-white/50 text-[0.72rem] mt-0.5">
                    Licence No. 000000
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
