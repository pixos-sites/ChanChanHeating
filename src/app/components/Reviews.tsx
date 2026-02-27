import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  // PLACEHOLDER: Replace with client-approved reviews before final handover.
  {
    name: "Glasgow Homeowner",
    text: "Fast response when our boiler stopped working and the issue was explained clearly. Friendly service and everything was left tidy.",
  },
  {
    name: "Glasgow Customer",
    text: "Boiler service carried out on time and at a fair price. Great communication and very professional from start to finish.",
  },
  {
    name: "Glasgow Landlord",
    text: "Needed a gas safety certificate quickly and the job was handled efficiently. Would use Chan Chan Heating again.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-[#FBBC05]"
          fill="#FBBC05"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1F2328 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-['Manrope'] font-semibold text-[2rem] sm:text-[2.5rem] text-[#1F2328] tracking-[-0.03em]">
            Don't Just Take Our Word For It
          </h2>
          <p className="font-['DM_Sans'] text-[#5F6F80] mt-3 text-[1rem]">
            Trusted by homeowners and landlords across Glasgow
          </p>
        </motion.div>

        {/* Cards - horizontal scroll on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-7 shadow-sm min-w-[300px] md:min-w-0 snap-center flex flex-col"
            >
              <Stars />
              <p className="font-['DM_Sans'] text-[#0D1B2A]/80 text-[0.9rem] leading-relaxed mt-4 flex-1">
                "{review.text}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-['DM_Sans'] text-[#1F2328] text-[0.9rem]">
                  {review.name}
                </span>
                {/* Google G logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.checkatrade.com/trades/chanchanheating"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-['DM_Sans'] text-[#1F2328] hover:text-[#D96A1B] text-[0.95rem] transition-colors group"
          >
            See Checkatrade reviews for Chan Chan Heating
            <ExternalLink
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
