import { Heart } from "lucide-react";

interface FinalCTASectionProps {
  openQuote: () => void;
}

export const FinalCTASection = ({ openQuote }: FinalCTASectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <img
        src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1800&q=90"
        alt="Bali Honeymoon"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Heart className="mx-auto mb-5 text-pink-400" size={46} />
        <h2 className="text-3xl font-black sm:text-5xl">
          Ready to Book Your Bali Tour Package?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/85">
          Get custom itinerary, best price and quick assistance from ARN Holidays.
        </p>
        <button
          onClick={() => openQuote()}
          className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-orange-600"
        >
          Get Free Quote
        </button>
      </div>
    </section>
  );
};
