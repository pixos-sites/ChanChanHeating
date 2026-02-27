import {
  Flame,
  Wrench,
  Thermometer,
  Settings,
  ShieldCheck,
  ChefHat,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
  const headingReveal = useScrollReveal({ threshold: 0.12 });
  const cardsReveal = useScrollReveal({ threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingReveal.ref as any}
          className={`text-center mb-14 reveal-fade ${headingReveal.isVisible ? "is-visible" : ""}`}
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              ref={i === 0 ? (cardsReveal.ref as any) : undefined}
              key={service.title}
              className={`bg-white rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default reveal-item ${cardsReveal.isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
