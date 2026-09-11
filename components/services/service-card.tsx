import { ServiceIcon } from "@/lib/icons";
import type { Service } from "@/types/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white",
        featured ? "shadow-soft" : "border border-line",
      )}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(86_225_210_/_0.16)_0%,transparent_62%)]"
        />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-turquoise">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-heading text-lg font-semibold text-navy">
          {service.name}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {service.shortDescription}
        </p>
        <div className="mt-6">
          <Button href={`/servicios/${service.slug}`} variant="ghost" size="sm">
            Ver servicio
          </Button>
        </div>
      </div>
    </article>
  );
}
