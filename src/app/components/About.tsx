import { motion } from "motion/react";
import aboutImage from "@/assets/client-images/about.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Work photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Work photo */}
            <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/5] lg:aspect-[3/4]">
              <ImageWithFallback
                src={aboutImage}
                alt="Heating and boiler installation work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2328]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <User size={20} className="text-[#D96A1B]" />
              <span className="font-['DM_Sans'] text-[#D96A1B] text-[0.85rem] tracking-wide uppercase">
                About
              </span>
            </div>

            <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
              About Chan Chan Heating
            </h2>

            <div className="mt-6 space-y-4 font-['DM_Sans'] text-[#5F6F80] text-[0.95rem] leading-relaxed">
              <p>
                Chan Chan Heating provides boiler repairs, boiler servicing,
                installations and general heating support for homes across
                Glasgow and nearby areas.
              </p>
              <p>
                Led by Mr Chun Kui Chan, the business focuses on quick response times,
                clear advice and reliable workmanship. From emergency boiler
                callouts to planned servicing and upgrades, jobs are handled
                safely and with attention to detail.
              </p>
              <p>
                The service is trusted by local homeowners and landlords who
                want straightforward help with heating and gas work without the
                hassle.
              </p>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#1F2328]/10 pt-8">
              <div className="text-center">
                <div className="font-['Manrope'] font-semibold text-[1.15rem] sm:text-[1.35rem] text-[#D96A1B] leading-none">
                  9.78 / 10
                </div>
                <div className="font-['DM_Sans'] text-[#5F6F80] text-[0.78rem] mt-2">
                  Checkatrade Score
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Manrope'] font-semibold text-[1.15rem] sm:text-[1.35rem] text-[#D96A1B] leading-none">
                  Member Since
                </div>
                <div className="font-['DM_Sans'] text-[#5F6F80] text-[0.78rem] mt-2">
                  February 2024
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Manrope'] font-semibold text-[1.15rem] sm:text-[1.35rem] text-[#D96A1B] leading-none">
                  57+
                </div>
                <div className="font-['DM_Sans'] text-[#5F6F80] text-[0.78rem] mt-2">
                  Reviews
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
