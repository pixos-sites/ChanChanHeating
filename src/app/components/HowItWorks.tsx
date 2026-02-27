import { motion } from "motion/react";
import { Phone, FileText, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Get in Touch",
    desc: "Call us or fill out the form — we'll get back to you quickly.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Free Quotation",
    desc: "We'll assess the job and provide a clear, no-obligation quote.",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Job Done Right",
    desc: "Professional work, on time, with no hidden costs. Simple.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap size={20} className="text-[#D96A1B]" />
            <span className="font-['DM_Sans'] text-[#D96A1B] text-[0.85rem] tracking-wide uppercase">
              The Process
            </span>
          </div>
          <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
            How It Works
          </h2>
          <p className="font-['DM_Sans'] text-[#5F6F80] mt-3 text-[1rem]">
            Three simple steps to a warmer home.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Dashed connecting line - desktop only */}
          <div className="hidden md:block absolute top-[32px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] border-t-2 border-dashed border-[#D96A1B]/30 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 bg-white border-2 border-[#D96A1B]/20 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <step.icon size={28} className="text-[#D96A1B]" />
              </div>
              <div className="font-['DM_Sans'] text-[#D96A1B]/50 text-[0.75rem] tracking-widest mt-4 uppercase">
                Step {step.step}
              </div>
              <h3 className="font-['Manrope'] font-semibold text-[1.15rem] text-[#1F2328] mt-2">
                {step.title}
              </h3>
              <p className="font-['DM_Sans'] text-[#5F6F80] text-[0.9rem] mt-2 max-w-xs mx-auto leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}