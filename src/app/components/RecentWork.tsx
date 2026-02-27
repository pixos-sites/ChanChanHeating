import { motion } from "motion/react";
import boilerInstallImage from "@/assets/client-images/recent-work-boiler-install.jpg";
import fullHeatingSystemImage from "@/assets/client-images/recent-work-full-heating-system.jpg";
import gasHobInstallImage from "@/assets/client-images/recent-work-gas-hob-install.jpg";
import radiatorReplacementImage from "@/assets/client-images/recent-work-radiator-replacement.jpg";
import systemFlushImage from "@/assets/client-images/recent-work-system-flush.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera } from "lucide-react";

const projects = [
  // PLACEHOLDER: Replace these images with real Chan Chan Heating project photos.
  {
    label: "Boiler Install",
    src: boilerInstallImage,
    tall: true,
  },
  {
    label: "Radiator Replacement",
    src: radiatorReplacementImage,
    tall: false,
  },
  {
    label: "System Flush",
    src: systemFlushImage,
    tall: false,
  },
  {
    label: "Gas Hob Install",
    src: gasHobInstallImage,
    tall: false,
  },
  {
    label: "Full Heating System",
    src: fullHeatingSystemImage,
    tall: true,
  },
  {
    label: "Smart Thermostat",
    src: "https://images.unsplash.com/photo-1770625467384-304e461ef1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXQlMjB3YWxsJTIwZGlnaXRhbCUyMHRlbXBlcmF0dXJlfGVufDF8fHx8MTc3MTk1NDE0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tall: false,
  },
];

export function RecentWork() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera size={20} className="text-[#D96A1B]" />
            <span className="font-['DM_Sans'] text-[#D96A1B] text-[0.85rem] tracking-wide uppercase">
              Our Projects
            </span>
          </div>
          <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
            Recent Work
          </h2>
          <p className="font-['DM_Sans'] text-[#5F6F80] mt-3 text-[1rem] max-w-lg mx-auto">
            A selection of jobs completed for homeowners across Glasgow.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden break-inside-avoid cursor-pointer"
            >
              <ImageWithFallback
                src={project.src}
                alt={project.label}
                className={`w-full object-cover ${
                  project.tall ? "h-[380px]" : "h-[260px]"
                } group-hover:scale-105 transition-transform duration-500`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#D96A1B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-['Manrope'] font-semibold text-white text-[1.15rem] tracking-[-0.03em]">
                  {project.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
