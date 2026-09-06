export interface NavItem {
  href: string;
  label: string;
}

export const primaryNav: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/hospital", label: "Hospital" },
  { href: "/servicios", label: "Servicios" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/equipo", label: "Equipo" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
];

export const footerHospitalNav: NavItem[] = [
  { href: "/hospital", label: "Nosotros" },
  { href: "/equipo", label: "Equipo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/especialidades", label: "Especialidades" },
];

export const footerPatientsNav: NavItem[] = [
  { href: "/reservar", label: "Reservar" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export const footerLegalNav: NavItem[] = [
  { href: "/politica-de-privacidad", label: "Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos" },
  { href: "/cookies", label: "Cookies" },
];
