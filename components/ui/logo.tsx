import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/site";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoVariant = "header" | "compact" | "footer" | "institutional";

const sizes: Record<
  LogoVariant,
  {
    box: string;
    image: number;
    wordmark: "none" | "short" | "full";
    stacked?: boolean;
  }
> = {
  header: { box: "h-12 w-12", image: 48, wordmark: "short" },
  compact: { box: "h-10 w-10", image: 40, wordmark: "none" },
  footer: { box: "h-16 w-16", image: 64, wordmark: "full", stacked: true },
  institutional: { box: "h-28 w-28 sm:h-36 sm:w-36", image: 144, wordmark: "none" },
};

interface LogoProps {
  variant?: LogoVariant;
  href?: string | null;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "header",
  href = "/",
  className,
  priority = false,
}: LogoProps) {
  const size = sizes[variant];

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        size.stacked && "items-start",
        className,
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full bg-navy shadow-[0_0_0_1px_rgb(255_255_255_/_0.12)]",
          size.box,
        )}
      >
        <Image
          src={brand.logo}
          alt={brand.logoAlt}
          width={size.image}
          height={size.image}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </span>
      {size.wordmark === "short" ? (
        <span className="hidden font-heading text-sm font-semibold tracking-[0.18em] text-navy uppercase sm:block">
          {site.shortName}
        </span>
      ) : null}
      {size.wordmark === "full" ? (
        <span className="min-w-0">
          <span className="block font-heading text-[0.62rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
            {site.shortName}
          </span>
          <span className="mt-0.5 block font-heading text-sm leading-tight font-semibold text-white sm:text-[0.95rem]">
            Hospital Veterinario
            <span className="block text-turquoise">Bilbao</span>
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="rounded-full" aria-label={site.name}>
      {content}
    </Link>
  );
}
