import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingCTA } from "../components/layout/FloatingCTA";
import { HeroSection } from "../components/sections/HeroSection";
import { WhySection } from "../components/sections/WhySection";
import { PackagesSection } from "../components/sections/PackagesSection";
import { LocationsSection } from "../components/sections/LocationsSection";
import { HighlightsSection } from "../components/sections/HighlightsSection";
import { ReviewsSection } from "../components/sections/ReviewsSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { FAQSection } from "../components/sections/FAQSection";
import { QuoteModal } from "../components/ui/QuoteModal";
import {
  contactInfo,
  packages,
  baliLocations,
  highlights,
  testimonials,
  faqs,
  whyChooseUs,
} from "../data/baliData";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openQuote = (packageName = "") => {
    setSelectedPackage(packageName);
    setQuoteOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phoneNumber = String(formData.get("phone") || "");

    if (!name.trim() || phoneNumber.trim().length < 10) {
      alert("Please enter valid name and phone number.");
      return;
    }

    window.location.href = "/thank-you";
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff8ed] text-slate-900">
      <Header
        email={contactInfo.email}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openQuote={openQuote}
      />

      <HeroSection openQuote={openQuote} />

      <WhySection items={whyChooseUs} />

      <PackagesSection
        packages={packages}
        phone={contactInfo.phone}
        openQuote={openQuote}
      />

      <LocationsSection locations={baliLocations} />

      <HighlightsSection highlights={highlights} />

      <ReviewsSection testimonials={testimonials} />

      <FinalCTASection openQuote={openQuote} />

      <FAQSection faqs={faqs} />

      <Footer email={contactInfo.email} phone={contactInfo.phone} />

      <FloatingCTA
        phone={contactInfo.phone}
        whatsappLink={contactInfo.whatsappLink}
      />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        packages={packages}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
