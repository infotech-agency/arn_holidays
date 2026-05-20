import { Mail, Menu, X } from "lucide-react";

interface HeaderProps {
  email: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  openQuote: () => void;
}

export const Header = ({ email, menuOpen, setMenuOpen, openQuote }: HeaderProps) => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-white/80 shadow-lg backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        
        {/* Responsive Logo */}
        <a href="/bali-tour-package" className="flex shrink-0 items-center">
          <svg
            viewBox="0 0 260 110"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-auto max-w-[140px] sm:h-12 sm:max-w-[160px] md:h-14 md:max-w-[180px] lg:h-16"
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

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm font-semibold">
            <Mail size={16} /> {email}
          </a>

          <button
            onClick={() => openQuote()}
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-black text-white shadow-lg hover:scale-105 transition"
          >
            Get Free Quote
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl bg-orange-100 p-2 text-orange-600 lg:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};
