import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  openQuote: () => void;
}

export const HeroSection = ({ openQuote }: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <img
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1900&q=90"
        alt="Bali Tour Package"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.35),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider backdrop-blur-md sm:text-sm">
            Lowest Price Guaranteed
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Bali Tour Packages by{" "}
            <span className="bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent">
              ARN Holidays
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Book Bali honeymoon, family and private tour packages with 4-star
            hotels, breakfast, water sports, sightseeing and airport transfers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#packages"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-1"
            >
              View Packages
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>

            <button
              onClick={() => openQuote()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-black text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              Get Free Quote
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["4★ Hotels", "Private Transfers", "Water Sports", "Honeymoon Deals"].map(
              (item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center text-sm font-bold backdrop-blur-md"
                >
                  {item}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Hero Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <h2 className="text-2xl font-black">Plan Your Bali Trip</h2>
          <p className="mt-2 text-sm text-slate-500">
            Get custom itinerary, best price and instant callback.
          </p>

          <div className="mt-6 space-y-4">
            {[
              "Personalised Bali itinerary",
              "Best honeymoon & family packages",
              "Private transfers available",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle size={18} className="text-green-500" />
                {item}
              </p>
            ))}
          </div>

          <button
            onClick={() => openQuote()}
            className="mt-7 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 font-black text-white shadow-lg shadow-orange-300/50 transition hover:-translate-y-1"
          >
            Get Free Bali Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Internal CheckCircle for simplicity if not imported globally
const CheckCircle = ({ size, className }: { size: number; className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
