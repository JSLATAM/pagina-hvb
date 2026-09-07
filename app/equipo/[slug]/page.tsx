import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEnabledTeam, getProfessionalBySlug } from "@/data/team";
import { getPageTitle } from "@/lib/seo";
import { ProfessionalProfile } from "@/components/team/professional-profile";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface ProfessionalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const people = getEnabledTeam();

  if (people.length === 0) {
    return [{ slug: "proximo" }];
  }

  return people.map((professional) => ({ slug: professional.slug }));
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
    if (getEnabledTeam().length === 0) {
      return (
        <Container className="py-16">
          <EmptyState
            title="Equipo por incorporar"
            description="Los perfiles se publicarán cuando el hospital entregue nombre, cargo y fotografía reales."
            action={<Button href="/equipo">Volver al equipo</Button>}
          />
        </Container>
      );
    }

    notFound();
  }

  return <ProfessionalProfile professional={professional} />;
}
