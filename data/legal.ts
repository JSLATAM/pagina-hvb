import type { LegalDocument } from "@/types/content";

export const legalDocuments: LegalDocument[] = [
  {
    slug: "politica-de-privacidad",
    title: "Política de privacidad",
    updatedAt: "2026-09-06",
    draft: true,
    sections: [
      {
        heading: "Documento en redacción",
        body: "Este texto es un marcador editable. No constituye la política de privacidad definitiva de Hospital Veterinario Bilbao. Debe ser revisado y reemplazado por el documento legal aprobado.",
      },
    ],
  },
  {
    slug: "terminos-y-condiciones",
    title: "Términos y condiciones",
    updatedAt: "2026-09-06",
    draft: true,
    sections: [
      {
        heading: "Documento en redacción",
        body: "Este texto es un marcador editable. No constituye los términos y condiciones definitivos de Hospital Veterinario Bilbao. Debe ser revisado y reemplazado por el documento legal aprobado.",
      },
    ],
  },
  {
    slug: "cookies",
    title: "Política de cookies",
    updatedAt: "2026-09-06",
    draft: true,
    sections: [
      {
        heading: "Documento en redacción",
        body: "Este texto es un marcador editable. No constituye la política de cookies definitiva de Hospital Veterinario Bilbao. Debe ser revisado y reemplazado por el documento legal aprobado.",
      },
    ],
  },
];

export function getLegalDocument(
  slug: LegalDocument["slug"],
): LegalDocument | undefined {
  return legalDocuments.find((document) => document.slug === slug);
}
