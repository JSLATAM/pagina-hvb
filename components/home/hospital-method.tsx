import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function HospitalMethod() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="Cómo trabaja el hospital"
          description="La continuidad clínica importa más que una promesa de infraestructura que aún no está documentada con imágenes reales."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-line px-8 py-10">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              Método clínico
            </h3>
            <p className="mt-5 text-base leading-8 text-muted">
              Evaluación, diagnóstico y un plan que se comunica con
              precisión. El tutor sabe qué se observa, qué se indica y cuál
              es el siguiente paso.
            </p>
          </article>
          <article className="rounded-[2rem] border border-line px-8 py-10">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              Recinto
            </h3>
            <p className="mt-5 text-base leading-8 text-muted">
              Las fotografías de fachada, consultas, hospitalización y
              pabellón se incorporarán cuando existan registros reales. No
              usamos imágenes genéricas para simular el hospital.
            </p>
          </article>
        </div>
        <div className="mt-10 text-center">
          <Button href="/hospital" variant="outline">
            Conocer el hospital
          </Button>
        </div>
      </Container>
    </section>
  );
}
