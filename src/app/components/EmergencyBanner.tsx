import { Phone } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="fixed top-18 left-0 right-0 z-40 bg-[#D96A1B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span className="hidden sm:inline text-[0.85rem] font-['DM_Sans'] leading-tight">
          🔧 Boiler broken down? Fast emergency callouts across Glasgow and nearby areas.
        </span>
        <span className="sm:hidden text-[0.8rem] font-['DM_Sans'] leading-tight">
          🔧 Emergency callouts —
        </span>
        <a
          href="tel:07529953972"
          className="inline-flex items-center justify-center gap-1.5 font-['DM_Sans'] text-[0.8rem] sm:text-[0.85rem] hover:underline max-w-full"
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping" />
            <Phone size={14} className="relative" />
          </span>
          <span className="sm:hidden">Call: 07529 953972</span>
          <span className="hidden sm:inline">Call now: 07529 953972</span>
        </a>
      </div>
    </div>
  );
}
