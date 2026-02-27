import { motion } from "motion/react";
import { Shield, Clock, ShieldCheck, Star } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Gas Safe Registered" },
  { icon: Clock, label: "Fast Emergency Callouts" },
  { icon: ShieldCheck, label: "Approved Since 2024" },
  { icon: Star, label: "9.78 Checkatrade Score" },
];

export function TrustBar() {
  return (
    <section className="bg-[#1F2328] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-3 py-3 md:border-r last:border-r-0 border-white/10"
            >
              <item.icon size={20} className="text-[#D96A1B] shrink-0" />
              <span className="font-['DM_Sans'] text-white/80 text-[0.85rem] sm:text-[0.9rem]">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
