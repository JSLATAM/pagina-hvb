import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDocument } from "@/data/legal";
import { getPageTitle } from "@/lib/seo";
import { LegalPage } from "@/components/layout/legal-page";

const document = getLegalDocument("terminos-y-condiciones");

export const metadata: Metadata = {
  title: getPageTitle("Términos y condiciones"),
  description: "Términos y condiciones de Hospital Veterinario Bilbao. Documento en redacción.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  if (!document) {
    notFound();
  }

  return <LegalPage document={document} />;
}
