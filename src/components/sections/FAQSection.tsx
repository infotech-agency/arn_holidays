import { motion } from "framer-motion";
import { FAQ } from "../../types";

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <section id="faqs" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-black uppercase tracking-[0.3em] text-orange-500">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Everything you need to know before booking your Bali tour package.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-white to-orange-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-slate-900 sm:text-lg">
                {faq.question}

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-orange-100 pt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
