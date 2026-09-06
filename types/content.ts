export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceIconName =
  | "stethoscope"
  | "siren"
  | "bed-double"
  | "scissors"
  | "bone"
  | "shield-plus"
  | "syringe"
  | "bug"
  | "flask-conical"
  | "radiation"
  | "scan"
  | "images"
  | "smile"
  | "sparkles"
  | "cat"
  | "activity"
  | "heart-pulse"
  | "hand"
  | "brain"
  | "ribbon"
  | "eye"
  | "apple";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  whenToVisit: string[];
  includes: string[];
  howItWorks: string[];
  faqs: FAQ[];
  relatedServiceSlugs: string[];
  relatedSpecialtySlugs: string[];
  teamSlugs: string[];
  enabled: boolean;
  icon: ServiceIconName;
}

export interface Specialty {
  slug: string;
  name: string;
  description: string;
  professionalSlugs: string[];
  relatedServiceSlugs: string[];
  enabled: boolean;
}

export interface Professional {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  education: string[];
  interests: string[];
  description: string;
  serviceSlugs: string[];
  photo: string;
  enabled: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  source?: string;
  enabled: boolean;
}

export interface LegalDocument {
  slug: "politica-de-privacidad" | "terminos-y-condiciones" | "cookies";
  title: string;
  updatedAt: string;
  draft: boolean;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}
