import { Mail, Phone } from "lucide-react";

interface FooterProps {
  email: string;
  phone: string;
}

export const Footer = ({ email, phone }: FooterProps) => {
  return (
    <footer className="bg-slate-950 px-4 py-10 pb-28 text-white sm:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        
        {/* Footer Logo */}
        <div>
          <a
            href="/bali-tour-package"
            className="inline-flex shrink-0 rounded-2xl bg-white p-2"
          >
            <svg
              viewBox="0 0 260 110"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-auto max-w-[140px] sm:h-14 sm:max-w-[170px] md:h-16 md:max-w-[200px]"
            >
              <text x="105" y="58" fontSize="48" fontFamily="Arial" fill="#f36b21">
                ARN
              </text>

              <text
                x="108"
                y="92"
                fontSize="30"
                fontFamily="Arial"
                letterSpacing="8"
                fill="#333"
              >
                Holidays
              </text>

              <path
                d="M15 65 C60 80 95 45 130 15"
                stroke="#8cc63e"
                strokeWidth="14"
                fill="none"
              />
              <path
                d="M15 82 C65 92 100 55 137 32"
                stroke="#f36b21"
                strokeWidth="14"
                fill="none"
              />
            </svg>
          </a>

          <p className="mt-3 text-sm text-white/60">© 2026 ARN Holidays</p>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-sm text-white/80">
          <a href={`mailto:${email}`} className="flex items-center gap-2">
            <Mail size={16} /> {email}
          </a>
          <a href={`tel:+91${phone}`} className="flex items-center gap-2">
            <Phone size={16} /> +91 {phone}
          </a>
        </div>
      </div>
    </footer>
  );
};
