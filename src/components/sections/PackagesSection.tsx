import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Package } from "../../types";

interface PackagesSectionProps {
  packages: Package[];
  phone: string;
  openQuote: (packageName?: string) => void;
}

export const PackagesSection = ({ packages, phone, openQuote }: PackagesSectionProps) => {
  return (
    <section id="packages" className="bg-gradient-to-b from-[#fff3dd] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-[0.3em] text-orange-500">
            Best Selling Tour Packages
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Bali Holiday Packages
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-orange-100 transition hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white">
                  {pkg.tag}
                </span>

                <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">
                  {pkg.duration}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{pkg.title}</h3>

                <div className="mt-3 flex items-end justify-between gap-3">
                  <span className="text-sm font-bold text-slate-500">Starting From</span>
                  <span className="text-3xl font-black text-orange-500">{pkg.price}</span>
                </div>

                <div className="mt-5 space-y-2">
                  {pkg.inclusions.slice(0, 6).map((item) => (
                    <p key={item} className="flex gap-2 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 shrink-0 text-green-500" size={17} />
                      {item}
                    </p>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:+91${phone}`}
                    className="rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    Call
                  </a>

                  <button
                    onClick={() => openQuote(pkg.title)}
                    className="rounded-full bg-orange-500 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-orange-600"
                  >
                    Free Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
