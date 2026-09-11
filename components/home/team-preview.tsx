import { getEnabledTeam } from "@/data/team";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TeamPreview() {
  const people = getEnabledTeam();

  return (
    <section className="bg-light">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="Equipo médico"
          description="Los perfiles se publican con cargo, formación y fotografía reales. Hasta entonces, no inventamos un equipo."
        />
        <div className="mt-12">
          {people.length === 0 ? (
            <EmptyState
              className="rounded-[2rem] border-0 bg-white"
              title="Equipo por incorporar"
              description="Cuando el hospital entregue los perfiles, esta sección mostrará al equipo con un camino claro a reserva."
              action={
                <Button href="/reservar" event="click_reservar">
                  Reservar hora
                </Button>
              }
            />
          ) : (
            <div className="text-center">
              <Button href="/equipo" variant="outline">
                Conocer al equipo
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
