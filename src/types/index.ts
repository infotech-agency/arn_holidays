import { LucideIcon } from "lucide-react";

export interface Package {
  title: string;
  duration: string;
  price: string;
  image: string;
  tag: string;
  inclusions: string[];
}

export interface BaliLocation {
  name: string;
  image: string;
  text: string;
}

export interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
