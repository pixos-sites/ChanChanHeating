type BrandMarkProps = {
  variant?: "nav" | "footer";
};

export function BrandMark({ variant = "nav" }: BrandMarkProps) {
  const isFooter = variant === "footer";

  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-sm shadow-black/20">
        <span className="font-['Manrope'] font-semibold text-[0.8rem] leading-none text-white tracking-[-0.03em]">
          CCH
        </span>
        <span className="absolute -bottom-0.5 h-1.5 w-6 rounded-full bg-[#D96A1B]" />
      </div>

      <div className="leading-none">
        <div className="font-['Manrope'] font-semibold text-[1rem] sm:text-[1.08rem] tracking-[-0.03em] text-white">
          Chan Chan <span className="text-[#D96A1B]">Heating</span>
        </div>
        <div className="mt-1 font-['DM_Sans'] text-[0.58rem] sm:text-[0.64rem] uppercase tracking-[0.16em] text-white/60">
          {isFooter
            ? "Boiler, Heating & Gas Services"
            : "Glasgow & Surrounding Areas"}
        </div>
      </div>
    </div>
  );
}
