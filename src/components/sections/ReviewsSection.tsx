import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "../../types";

interface ReviewsSectionProps {
  testimonials: Testimonial[];
}

export const ReviewsSection = ({ testimonials }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="bg-[#fff7e6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-[0.3em] text-orange-500">
            What Our Clients Say
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Happy Travellers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <motion.div
              key={review.name}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] bg-white p-6 shadow-lg"
            >
              <div className="mb-4 flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-7 text-slate-600">“{review.text}”</p>
              <h4 className="mt-6 font-black">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
