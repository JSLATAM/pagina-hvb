"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ConversionEvent } from "@/lib/analytics";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-turquoise text-dark-navy hover:bg-turquoise-dark hover:text-white",
  secondary: "bg-navy text-white hover:bg-dark-navy",
  outline:
    "border border-navy/15 bg-white text-navy hover:border-turquoise hover:text-navy",
  ghost: "text-navy hover:bg-light-blue",
  inverse:
    "border border-white/25 bg-transparent text-white hover:border-turquoise hover:text-turquoise",
  danger: "bg-danger text-white hover:bg-[#c13f3f]",
} as const;

const sizes = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm sm:text-[0.95rem]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  event?: ConversionEvent;
  fullWidth?: boolean;
  "aria-label"?: string;
}

interface ButtonAsButton
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends SharedProps {
  href: string;
  target?: string;
  rel?: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: SharedProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-[0.08em] uppercase disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant,
    size,
    event,
    fullWidth,
  } = props;

  const classNames = classes({
    children,
    className,
    variant,
    size,
    event,
    fullWidth,
  });

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");
    const ariaLabel = props["aria-label"];

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classNames}
          aria-label={ariaLabel}
          onClick={() => {
            if (event) {
              track(event);
            }
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        onClick={() => {
          if (event) {
            track(event);
          }
        }}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classNames}
      disabled={buttonProps.disabled}
      aria-label={buttonProps["aria-label"]}
      onClick={(clickEvent) => {
        if (event) {
          track(event);
        }
        buttonProps.onClick?.(clickEvent);
      }}
    >
      {children}
    </button>
  );
}
