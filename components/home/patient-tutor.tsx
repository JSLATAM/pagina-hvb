import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PatientTutor() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          title="El paciente y el tutor"
          description="El lenguaje del hospital es clínico y cercano: hablamos de paciente, tutor y equipo médico."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-light px-8 py-10">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              El paciente
            </h3>
            <span
              aria-hidden="true"
              className="mt-4 block h-1 w-12 rounded-full bg-turquoise"
            />
            <p className="mt-6 text-base leading-8 text-muted">
              Cada decisión parte del estado clínico. Priorizamos evaluación,
              contención y continuidad cuando el cuadro lo requiere, sin
              reducir el cuidado a un paquete comercial.
            </p>
          </article>
          <article className="rounded-[2rem] bg-light px-8 py-10">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              El tutor
            </h3>
            <span
              aria-hidden="true"
              className="mt-4 block h-1 w-12 rounded-full bg-turquoise"
            />
            <p className="mt-6 text-base leading-8 text-muted">
              Explicamos qué observamos, qué opciones existen y qué implica
              cada paso. El tutor participa informado, con un trato
              profesional y sin un tono infantilizado.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
