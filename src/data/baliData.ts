import {
  Hotel,
  Waves,
  Camera,
  Plane,
  Clock,
  Send,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { FAQ, Package, BaliLocation, Highlight, Testimonial } from "../types";

export const contactInfo = {
  phone: "8384001669",
  email: "info@arnholidays.com",
  whatsappLink: "https://wa.me/918384001669",
};

export const faqs: FAQ[] = [
  {
    question: "What is included in ARN Holidays Bali tour package?",
    answer:
      "Our Bali packages include 4-star hotel stay, daily breakfast, airport pickup and drop, sightseeing, water sports, private transfers and selected activities as per package.",
  },
  {
    question: "What is the starting price of Bali tour package?",
    answer:
      "Bali tour packages start from ₹25,000. Final price depends on travel date, hotel category, number of travellers and selected package.",
  },
  {
    question: "Is Bali good for honeymoon couples?",
    answer:
      "Yes, Bali is one of the best honeymoon destinations with beaches, villas, candle light dinner, Bali Swing, waterfalls, temples and romantic private transfers.",
  },
  {
    question: "Do you provide private transfers in Bali?",
    answer:
      "Yes, most ARN Holidays Bali packages include tours and transfers on private basis.",
  },
  {
    question: "Can I customize my Bali itinerary?",
    answer:
      "Yes, you can customize hotel nights, sightseeing, activities, transfers and travel dates as per your requirement.",
  },
  {
    question: "How can I book Bali package?",
    answer:
      "You can call us or submit the free quote form. Our travel expert will contact you with the best Bali package options.",
  },
];

export const packages: Package[] = [
  {
    title: "Bali Promo Package",
    duration: "03N/04D",
    price: "₹25,000",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=90",
    tag: "Budget Friendly",
    inclusions: [
      "3N - 4* Hotel Stay in Bali",
      "Daily breakfast",
      "Candle Light Dinner",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Pura Lempuyang & Tirta Gangga",
      "Airport pick & drop",
      "Private transfers",
    ],
  },
  {
    title: "Best Of Bali",
    duration: "04N/05D",
    price: "₹27,999",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1400&q=90",
    tag: "Best Seller",
    inclusions: [
      "4N - 4* Hotel Stay in Bali",
      "Daily breakfast",
      "Candle Light Dinner",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Gate of Heaven Tour",
      "Airport pick & drop",
      "Private transfers",
    ],
  },
  {
    title: "Honeymoon Package",
    duration: "05N/06D",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1400&q=90",
    tag: "Couple Special",
    inclusions: [
      "5N - 4* Hotel Stay in Bali",
      "Daily breakfast",
      "Candle Light Dinner",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Kintamani Tour",
      "Bali Swing",
      "Airport pick & drop",
    ],
  },
  {
    title: "Exploring Bali",
    duration: "06N/07D",
    price: "₹35,000",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1400&q=90",
    tag: "Complete Bali",
    inclusions: [
      "6N - 4* Hotel Stay in Bali",
      "Daily breakfast",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Pura Lempuyang Tour",
      "Tegenungan Waterfall",
      "Bali Swing",
      "Private transfers",
    ],
  },
  {
    title: "Best of Bali Days",
    duration: "04N/05D",
    price: "₹40,000",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=1400&q=90",
    tag: "Nusa Dua Stay",
    inclusions: [
      "02N Kuta + 02N Nusa Dua",
      "4* Hotel Stay in Bali",
      "Daily breakfast",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "West Nusa Penida Tour",
      "Airport pick & drop",
      "Private transfers",
    ],
  },
  {
    title: "Deluxe Package",
    duration: "03N/04D",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1400&q=90",
    tag: "Deluxe Stay",
    inclusions: [
      "02N Kuta + 01N Seminyak",
      "4* Hotel Stay",
      "Daily breakfast",
      "Candle Light Dinner",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Airport pick & drop",
    ],
  },
  {
    title: "Splendid Package",
    duration: "04N/05D",
    price: "₹35,000",
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=1400&q=90",
    tag: "Adventure Pick",
    inclusions: [
      "03N Kuta + 01N Seminyak",
      "4* Hotel Stay",
      "Daily breakfast",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "Kintamani Tour",
      "Bali Swing",
      "Private transfers",
    ],
  },
  {
    title: "Memorable Bali Package",
    duration: "04N/05D",
    price: "₹62,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=90",
    tag: "Premium",
    inclusions: [
      "04N Bali - 4* Hotel Stay",
      "Daily breakfast",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "West Nusa Penida Tour",
      "Airport pick & drop",
      "Private transfers",
    ],
  },
  {
    title: "Calmness in Bali",
    duration: "04N/05D",
    price: "₹35,999",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1400&q=90",
    tag: "Gili Island",
    inclusions: [
      "02N Kuta + 02N Gili Island",
      "4* Hotel Stay",
      "Daily breakfast",
      "Candle Light Dinner",
      "Water Sport Activity",
      "Uluwatu Temple",
      "Kecak Fire Dance",
      "West Nusa Penida Tour",
      "Airport pick & drop",
    ],
  },
];

export const baliLocations: BaliLocation[] = [
  {
    name: "Kuta",
    image:
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=900&q=80",
    text: "Beaches, nightlife and water activities.",
  },
  {
    name: "Seminyak",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80",
    text: "Luxury cafes, villas and romantic stays.",
  },
  {
    name: "Nusa Penida",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=900&q=80",
    text: "Iconic cliffs, beaches and island tour.",
  },
  {
    name: "Ubud",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=80",
    text: "Waterfalls, temples, rice terraces and Bali Swing.",
  },
];

export const highlights: Highlight[] = [
  { icon: Hotel, title: "4-Star Hotels", text: "Comfortable stays included." },
  { icon: Waves, title: "Water Sports", text: "Banana boat, jet ski and more." },
  { icon: Camera, title: "Top Sightseeing", text: "Uluwatu, Penida, Gate of Heaven." },
  { icon: Plane, title: "Airport Pickup", text: "Smooth private transfers." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mr. Prateek Tayal",
    text: "Booked my Dubai trip with ARN Holidays. The price offered was quite less than other tour companies. Very professional service.",
  },
  {
    name: "Mr. Tavneet Singh",
    text: "The booking process was very easy and the package amount was reasonable. Everything was handled smoothly.",
  },
  {
    name: "Mr. Sanchit Chadha",
    text: "Booked my Maldives trip from ARN Holidays. Excellent experience and itinerary was exactly as discussed.",
  },
];

export const whyChooseUs = [
  { icon: Clock, title: "Save Time", text: "No need to search multiple websites." },
  { icon: Send, title: "Options", text: "Get personalised Bali itineraries." },
  { icon: Wallet, title: "Save Money", text: "Choose best value packages." },
  { icon: ShieldCheck, title: "Trusted", text: "500+ reliable travel network." },
];
