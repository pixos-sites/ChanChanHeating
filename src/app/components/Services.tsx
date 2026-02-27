import { motion } from "motion/react";
import {
  Flame,
  Wrench,
  Thermometer,
  Settings,
  ShieldCheck,
  ChefHat,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Boiler Repairs",
    desc: "Fast fault finding and boiler repairs to get your heating and hot water back on quickly.",
  },
  {
    icon: Thermometer,
    title: "Boiler Servicing",
    desc: "Annual boiler servicing to keep your system safe, efficient and manufacturer-compliant.",
  },
  {
    icon: Wrench,
    title: "Boiler Installation",
    desc: "New boiler installations and replacements with advice on the right setup for your home.",
  },
  {
    icon: Thermometer,
    title: "Central Heating Repairs",
    desc: "Diagnosis and repair of central heating faults to restore heat and hot water quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Gas Safety Certificates",
    desc: "Landlord gas safety checks and CP12 certification carried out with clear documentation.",
  },
  {
    icon: ChefHat,
    title: "Gas Cooker Installation",
    desc: "Safe installation and connection of gas cookers and hobs by qualified gas engineers.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Settings size={20} className="text-[#D96A1B]" />
            <span className="font-['DM_Sans'] text-[#D96A1B] text-[0.85rem] tracking-wide uppercase">
              What We Do
            </span>
          </div>
          <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
            Boiler, Heating & Gas Services
          </h2>
          <p className="font-['DM_Sans'] text-[#5F6F80] mt-3 text-[1rem] max-w-lg mx-auto">
            Professional gas, boiler and heating services for homeowners and
            landlords across Glasgow and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
              transition={{ delay: i * 0.06, duration: 0.38, ease: "easeOut" }}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-[#D96A1B]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D96A1B]/20 transition-colors">
                <service.icon size={24} className="text-[#D96A1B]" />
              </div>
              <h3 className="font-['Manrope'] font-semibold text-[1.15rem] text-[#1F2328] mb-2">
                {service.title}
              </h3>
              <p className="font-['DM_Sans'] text-[#5F6F80] text-[0.9rem] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
