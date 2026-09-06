import type { Professional } from "@/types/content";

export const team: Professional[] = [];

export function getEnabledTeam(): Professional[] {
  return team.filter((professional) => professional.enabled);
}

export function getProfessionalBySlug(
  slug: string,
): Professional | undefined {
  return team.find((professional) => professional.slug === slug);
}
