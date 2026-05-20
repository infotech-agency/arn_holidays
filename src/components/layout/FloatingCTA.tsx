import { Phone, MessageCircle } from "lucide-react";

interface FloatingCTAProps {
  phone: string;
  whatsappLink: string;
}

export const FloatingCTA = ({ phone, whatsappLink }: FloatingCTAProps) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 grid grid-cols-2 gap-3 sm:left-auto sm:right-6 sm:w-[190px] sm:grid-cols-1">
      <a
        href={`tel:+91${phone}`}
        className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-black text-white shadow-2xl"
      >
        <Phone size={18} /> Call
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 font-black text-white shadow-2xl"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  );
};
