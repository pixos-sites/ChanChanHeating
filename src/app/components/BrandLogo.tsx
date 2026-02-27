import logoImage from "@/assets/client-images/chan-chan-heating-logo.png";

type BrandLogoProps = {
  variant?: "nav" | "footer";
};

export function BrandLogo({ variant = "nav" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className="inline-flex items-center rounded-[4px] border border-white/15 bg-black/30 shadow-lg shadow-black/25 overflow-hidden p-1">
      <img
        src={logoImage}
        alt="Chan Chan Heating"
        className={`block w-auto object-contain ${
          isFooter ? "h-[44px] sm:h-[52px]" : "h-[34px] sm:h-[40px]"
        }`}
      />
    </div>
  );
}
