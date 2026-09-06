import { ServiceIcon } from "@/lib/icons";
import type { Service } from "@/types/content";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-light-blue text-navy">
        <ServiceIcon name={service.icon} className="h-5 w-5" />
      </span>
      <h2 className="mt-5 font-heading text-lg font-semibold text-navy">
        {service.name}
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        {service.shortDescription}
      </p>
      <div className="mt-6">
        <Button href={`/servicios/${service.slug}`} variant="ghost" size="sm">
          Ver servicio
        </Button>
      </div>
    </article>
  );
}
