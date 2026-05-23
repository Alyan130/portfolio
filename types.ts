import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  category: 'Automation' | 'Custom Built';
  imageUrl: string;
  link: string;
  problem: string;
  whatIBuilt: string[];
  outcome: string;
  techStack: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  organization: string;
  year: string;
  link: string;
}

export interface StackItem {
  name: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export interface Award {
  name: string;
  organization: string;
  year: string;
}

export interface Recommendation {
  name: string;
  role: string;
  quote: string;
}

export interface Article {
  title: string;
  meta: string;
  description: string;
  imageUrl: string;
  link: string;
}
