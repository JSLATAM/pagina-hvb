import type { Testimonial } from "@/types/content";

export const testimonials: Testimonial[] = [];

export function getEnabledTestimonials(): Testimonial[] {
  return testimonials.filter((item) => item.enabled);
}

export const googleReviews = {
  rating: null as number | null,
  count: null as number | null,
  url: "",
};
