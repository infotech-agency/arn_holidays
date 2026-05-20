import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhyItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface WhySectionProps {
  items: WhyItem[];
}

export const WhySection = ({ items }: WhySectionProps) => {
  return (
    <section id="why" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm ring-1 ring-orange-100 transition hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
