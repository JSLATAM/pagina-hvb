import { getEnabledSpecialties } from "@/data/specialties";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SpecialtiesPreview() {
  const items = getEnabledSpecialties();

  return (
    <section className="bg-light">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="Especialidades"
          description="Las líneas especializadas se muestran aquí cuando el hospital confirma el alcance y el equipo. No anticipamos una oferta que aún no está validada."
        />
        {items.length > 0 ? (
          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {items.map((specialty) => (
              <li key={specialty.slug}>
                <Button href="/especialidades" variant="outline" size="sm">
                  {specialty.name}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-[2rem] bg-white px-6 py-10 text-center">
            <p className="text-sm leading-7 text-muted sm:text-base">
              La arquitectura de especialidades ya está lista. Esta sección se
              convertirá en un listado de etiquetas cuando existan líneas
              activas.
            </p>
          </div>
        )}
        <div className="mt-10 text-center">
          <Button href="/especialidades" variant="ghost">
            Ver especialidades
          </Button>
        </div>
      </Container>
    </section>
  );
}
