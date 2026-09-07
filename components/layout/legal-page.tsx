import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import type { LegalDocument } from "@/types/content";

interface LegalPageProps {
  document: LegalDocument;
}

export function LegalPage({ document }: LegalPageProps) {
  return (
    <>
      <PageIntro
        title={document.title}
        description={
          document.draft
            ? "Documento editable en redacción. No es un texto legal definitivo."
            : `Actualizado el ${document.updatedAt}.`
        }
        breadcrumbs={[
          { href: "/", label: "Inicio" },
          { label: document.title },
        ]}
      />
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-2xl space-y-8">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-navy">
                {section.heading}
              </h2>
              <p className="mt-3 leading-8 text-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
