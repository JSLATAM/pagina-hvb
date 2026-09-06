import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEnabledTeam, getProfessionalBySlug } from "@/data/team";
import { getPageTitle } from "@/lib/seo";
import { ProfessionalProfile } from "@/components/team/professional-profile";

interface ProfessionalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEnabledTeam().map((professional) => ({ slug: professional.slug }));
}

export async function generateMetadata({
  params,
}: ProfessionalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);

  if (!professional || !professional.enabled) {
    return { title: getPageTitle("Equipo") };
  }

  return {
    title: getPageTitle(professional.name),
    description: professional.description,
  };
}

export default async function ProfessionalPage({
  params,
}: ProfessionalPageProps) {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);

  if (!professional || !professional.enabled) {
    notFound();
  }

  return <ProfessionalProfile professional={professional} />;
}
