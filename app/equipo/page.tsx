import type { Metadata } from "next";
import { getEnabledTeam } from "@/data/team";
import { getPageTitle } from "@/lib/seo";
import { EmptyState } from "@/components/ui/empty-state";
import { PageIntro } from "@/components/layout/page-intro";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: getPageTitle("Equipo médico"),
  description:
    "Equipo de Medicina Veterinaria de Hospital Veterinario Bilbao. Los perfiles se publicarán con cargo, formación y fotografía reales.",
};

export default function TeamPage() {
  const people = getEnabledTeam();

  return (
    <>
      <PageIntro
        eyebrow="Equipo"
        title="Profesionales que se presentan con información real."
        description="No inventamos nombres, cargos ni fotografías. Esta página quedará lista para incorporar al equipo cuando el hospital entregue los perfiles."
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: "Equipo" },
        ]}
      />
      <Container className="py-14 sm:py-16">
        {people.length === 0 ? (
          <EmptyState
            title="Equipo por incorporar"
            description="Cada profesional tendrá fotografía, cargo, especialidad, formación, áreas de interés y un botón de reserva asociado."
            action={
              <Button href="/reservar">Reservar hora</Button>
            }
          />
        ) : null}
      </Container>
    </>
  );
}
