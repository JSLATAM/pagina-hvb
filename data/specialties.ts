import type { Specialty } from "@/types/content";

export const specialties: Specialty[] = [
  {
    slug: "medicina-interna",
    name: "Medicina Interna",
    description:
      "Enfoque clínico para cuadros que requieren estudio, seguimiento y decisiones médicas más complejas.",
    professionalSlugs: [],
    relatedServiceSlugs: ["medicina-interna", "laboratorio-clinico"],
    enabled: false,
  },
  {
    slug: "cardiologia",
    name: "Cardiología",
    description:
      "Evaluación del sistema cardiovascular. Se publicará cuando el hospital confirme el equipo.",
    professionalSlugs: [],
    relatedServiceSlugs: ["cardiologia"],
    enabled: false,
  },
  {
    slug: "dermatologia",
    name: "Dermatología",
    description:
      "Estudio de piel y oídos. Permanece desactivada hasta confirmación.",
    professionalSlugs: [],
    relatedServiceSlugs: ["dermatologia"],
    enabled: false,
  },
  {
    slug: "neurologia",
    name: "Neurología",
    description:
      "Evaluación neurológica. Se activará cuando exista confirmación institucional.",
    professionalSlugs: [],
    relatedServiceSlugs: ["neurologia"],
    enabled: false,
  },
  {
    slug: "oncologia",
    name: "Oncología",
    description:
      "Acompañamiento oncológico. No se publica como especialidad activa hasta confirmar alcance.",
    professionalSlugs: [],
    relatedServiceSlugs: ["oncologia"],
    enabled: false,
  },
  {
    slug: "oftalmologia",
    name: "Oftalmología",
    description:
      "Cuidado ocular especializado. Pendiente de confirmación.",
    professionalSlugs: [],
    relatedServiceSlugs: ["oftalmologia"],
    enabled: false,
  },
];

export function getEnabledSpecialties(): Specialty[] {
  return specialties.filter((specialty) => specialty.enabled);
}

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find((specialty) => specialty.slug === slug);
}
