import gasSafeLogo from "@/assets/3576a400533664424d96a6eb8a9c38ec8c3b5010.png";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F2328] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Logo + details */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start">
              <BrandLogo variant="footer" />
            </div>
            <p className="font-['DM_Sans'] text-white/50 text-[0.8rem] mt-3 leading-relaxed">
              Boiler Repairs, Servicing, Installs & Gas Work
              <br />
              Glasgow & surrounding areas
              <br />
              Fast emergency response
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="font-['DM_Sans'] text-white/80 text-[0.85rem] tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 items-center md:items-start">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-center md:text-left font-['DM_Sans'] text-white/50 hover:text-[#D96A1B] text-[0.9rem] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social + Gas Safe */}
          <div className="text-center md:text-left">
            <h4 className="font-['DM_Sans'] text-white/80 text-[0.85rem] tracking-wide uppercase mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <a
                href="https://www.checkatrade.com/trades/chanchanheating"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D96A1B]/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Checkatrade Reviews"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
              </a>
            </div>
            <div className="mx-auto md:mx-0 flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-lg shadow-black/10 max-w-xs">
              <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 bg-white">
                <img
                  src={gasSafeLogo}
                  alt="Gas Safe Register"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-['DM_Sans'] text-white text-[0.85rem] leading-tight">
                  Gas Safe Registered
                </div>
                <div className="font-['DM_Sans'] text-white/50 text-[0.72rem] mt-0.5">
                  Licence No. 000000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['DM_Sans'] text-white/30 text-[0.8rem] text-center">
            &copy; 2026 Chan Chan Heating. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
