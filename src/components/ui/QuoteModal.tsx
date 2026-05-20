import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, CalendarDays } from "lucide-react";
import { Package } from "../../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
  setSelectedPackage: (packageName: string) => void;
  packages: Package[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const QuoteModal = ({
  isOpen,
  onClose,
  selectedPackage,
  setSelectedPackage,
  packages,
  handleSubmit,
}: QuoteModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-7"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-orange-100 hover:text-orange-600"
            >
              <X size={22} />
            </button>

            <div className="mb-6 pr-10">
              <h3 className="text-2xl font-black sm:text-3xl">
                Get Free Bali Quote
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Submit your details and our travel expert will call you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <select
                name="package"
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="">Select Package</option>
                {packages.map((p) => (
                  <option key={p.title} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </select>

              <div className="relative">
                <CalendarDays className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  name="travelMonth"
                  type="month"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message / No. of travellers / Special request"
                rows={3}
                className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 font-black text-white shadow-lg shadow-orange-300/50 transition hover:-translate-y-1"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
