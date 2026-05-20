import { motion } from "framer-motion";
import { Highlight } from "../../types";

interface HighlightsSectionProps {
  highlights: Highlight[];
}

export const HighlightsSection = ({ highlights }: HighlightsSectionProps) => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.3em] text-orange-500">
              Package Highlights
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Everything You Need for a Perfect Bali Trip
            </h2>
            <p className="mt-5 text-slate-600">
              From airport pickup to hotel stay, sightseeing, water sports and
              romantic experiences, ARN Holidays makes your Bali travel smooth
              and memorable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-xl"
                >
                  <Icon className="mb-4 text-orange-500" size={34} />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
