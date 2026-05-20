import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BaliLocation } from "../../types";

interface LocationsSectionProps {
  locations: BaliLocation[];
}

export const LocationsSection = ({ locations }: LocationsSectionProps) => {
  return (
    <section id="locations" className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-[0.3em] text-orange-400">
            Bali Locations
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Places Covered in Bali
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <motion.div
              key={loc.name}
              whileHover={{ y: -8 }}
              className="group relative h-80 overflow-hidden rounded-[2rem]"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <MapPin className="mb-3 text-orange-400" />
                <h3 className="text-2xl font-black">{loc.name}</h3>
                <p className="mt-2 text-sm text-white/80">{loc.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
