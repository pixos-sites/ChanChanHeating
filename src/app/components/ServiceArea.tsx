import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const areas = [
  "Glasgow",
  "East Kilbride",
  "Newton Mearns",
  "Paisley",
  "Rutherglen",
  "Bearsden",
  "Milngavie",
  "Surrounding Areas",
];

export function ServiceArea() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Abstract Glasgow watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.1]">
        <svg
          viewBox="0 0 800 400"
          className="w-[90%] max-w-4xl"
          fill="none"
          stroke="#D96A1B"
          strokeWidth="1.5"
        >
          {/* Abstract city skyline silhouette */}
          <path d="M50,350 L50,280 L80,280 L80,250 L100,250 L100,200 L120,200 L120,180 L140,180 L140,200 L160,200 L160,150 L180,150 L180,120 L200,120 L200,150 L220,150 L220,100 L240,80 L260,100 L260,160 L280,160 L280,130 L300,130 L300,90 L320,70 L340,90 L340,140 L360,140 L360,180 L380,180 L380,120 L400,100 L420,120 L420,160 L440,160 L440,200 L460,200 L460,140 L480,140 L480,100 L500,80 L520,100 L520,170 L540,170 L540,200 L560,200 L560,160 L580,160 L580,190 L600,190 L600,220 L620,220 L620,180 L640,180 L640,210 L660,210 L660,250 L680,250 L680,280 L700,280 L700,300 L720,300 L720,350" />
          {/* River Clyde */}
          <path
            d="M0,320 C100,310 150,330 250,315 C350,300 400,325 500,310 C600,295 700,320 800,305"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin size={20} className="text-[#D96A1B]" />
            <span className="font-['DM_Sans'] text-[#D96A1B] text-[0.85rem] tracking-wide uppercase">
              Our Coverage
            </span>
          </div>
          <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
            Covering Glasgow
            <br className="hidden sm:block" /> & Surrounding Areas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 bg-[#F7F3EC] border border-[#1F2328]/8 rounded-full px-5 py-2.5 font-['DM_Sans'] text-[#1F2328] text-[0.9rem] hover:border-[#D96A1B]/40 hover:bg-[#D96A1B]/5 transition-all cursor-default"
            >
              <MapPin size={14} className="text-[#D96A1B]" />
              {area}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
