import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "consulta-veterinaria-general",
    name: "Consulta Veterinaria General",
    shortDescription:
      "Evaluación clínica para orientar el diagnóstico y el plan de cuidado de cada paciente.",
    description:
      "La consulta general es el punto de partida para comprender el estado de salud del paciente y definir los siguientes pasos médicos.",
    whenToVisit: [
      "Controles de salud y seguimiento",
      "Síntomas nuevos o cambios de conducta",
      "Orientación preventiva",
    ],
    includes: [
      "Evaluación clínica",
      "Orientación al tutor",
      "Derivación a exámenes o especialidad cuando corresponda",
    ],
    howItWorks: [
      "Reserva una hora",
      "Conversamos la historia clínica y revisamos al paciente",
      "Definimos un plan claro y los próximos pasos",
    ],
    faqs: [],
    relatedServiceSlugs: ["medicina-preventiva", "laboratorio-clinico"],
    relatedSpecialtySlugs: ["medicina-interna"],
    teamSlugs: [],
    enabled: true,
    icon: "stethoscope",
  },
  {
    slug: "urgencias-veterinarias",
    name: "Urgencias Veterinarias",
    shortDescription:
      "Atención prioritaria cuando el tiempo y la contención clínica importan.",
    description:
      "La atención de urgencia está pensada para evaluar y estabilizar al paciente cuando presenta un cuadro agudo o un deterioro rápido.",
    whenToVisit: [
      "Dificultad respiratoria",
      "Trauma, convulsiones o decaimiento marcado",
      "Vómitos, diarrea o dolor intenso",
    ],
    includes: [
      "Evaluación prioritaria",
      "Estabilización inicial",
      "Definición de continuidad clínica",
    ],
    howItWorks: [
      "Llama o acude directamente",
      "Priorizamos según gravedad",
      "Informamos el plan y las opciones de continuidad",
    ],
    faqs: [],
    relatedServiceSlugs: ["hospitalizacion", "cirugia"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "siren",
  },
  {
    slug: "hospitalizacion",
    name: "Hospitalización",
    shortDescription:
      "Cuidado continuo cuando el paciente necesita observación y soporte clínico.",
    description:
      "La hospitalización permite monitorear, tratar y acompañar al paciente que requiere continuidad médica más allá de una consulta.",
    whenToVisit: [
      "Recuperación postoperatoria",
      "Cuadros que requieren fluidoterapia o monitoreo",
      "Indicación médica de observación",
    ],
    includes: [
      "Observación clínica",
      "Soporte según indicación médica",
      "Comunicación con el tutor",
    ],
    howItWorks: [
      "El equipo define la necesidad de internación",
      "Se establece un plan de monitoreo y tratamiento",
      "Se informa la evolución y el alta cuando corresponde",
    ],
    faqs: [],
    relatedServiceSlugs: ["cirugia", "laboratorio-clinico"],
    relatedSpecialtySlugs: ["medicina-interna"],
    teamSlugs: [],
    enabled: true,
    icon: "bed-double",
  },
  {
    slug: "cirugia",
    name: "Cirugía",
    shortDescription:
      "Procedimientos quirúrgicos con evaluación previa y seguimiento posterior.",
    description:
      "La cirugía se indica cuando el diagnóstico y el estado del paciente permiten un procedimiento con un plan perioperatorio definido.",
    whenToVisit: [
      "Indicación médica de procedimiento",
      "Evaluación prequirúrgica",
      "Control postoperatorio",
    ],
    includes: [
      "Evaluación previa",
      "Procedimiento indicado",
      "Indicaciones de recuperación",
    ],
    howItWorks: [
      "Confirmamos indicación y preparación",
      "Realizamos el procedimiento",
      "Acompañamos el postoperatorio",
    ],
    faqs: [],
    relatedServiceSlugs: [
      "cirugia-de-tejidos-blandos",
      "traumatologia",
      "hospitalizacion",
    ],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: true,
    icon: "scissors",
  },
  {
    slug: "cirugia-de-tejidos-blandos",
    name: "Cirugía de Tejidos Blandos",
    shortDescription:
      "Procedimientos sobre órganos y tejidos blandos según indicación clínica.",
    description:
      "Esta línea quirúrgica se activa cuando existe una indicación específica y un equipo definido para el procedimiento.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["cirugia", "hospitalizacion"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "scissors",
  },
  {
    slug: "traumatologia",
    name: "Traumatología",
    shortDescription:
      "Evaluación y resolución de lesiones osteoarticulares cuando el servicio esté activo.",
    description:
      "La traumatología se habilitará cuando el hospital confirme el equipo y los procedimientos disponibles.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["cirugia", "radiografias"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "bone",
  },
  {
    slug: "medicina-preventiva",
    name: "Medicina Preventiva",
    shortDescription:
      "Controles, vacunación y desparasitación para anticipar riesgos de salud.",
    description:
      "La medicina preventiva ordena el cuidado a lo largo de la vida del paciente, con un plan adaptado a su etapa y contexto.",
    whenToVisit: [
      "Cachorros y gatitos en desarrollo",
      "Controles anuales",
      "Actualización de vacunas o desparasitación",
    ],
    includes: ["Plan preventivo", "Vacunación", "Desparasitación"],
    howItWorks: [
      "Revisamos historia y etapa de vida",
      "Definimos un plan preventivo",
      "Agendamos los siguientes controles",
    ],
    faqs: [],
    relatedServiceSlugs: ["vacunacion", "desparasitacion"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: true,
    icon: "shield-plus",
  },
  {
    slug: "vacunacion",
    name: "Vacunación",
    shortDescription:
      "Esquemas de vacunación según especie, edad y riesgo.",
    description:
      "La vacunación se indica de forma individual, considerando el historial del paciente y las recomendaciones clínicas vigentes.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["medicina-preventiva"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "syringe",
  },
  {
    slug: "desparasitacion",
    name: "Desparasitación",
    shortDescription:
      "Control de parásitos internos y externos según indicación médica.",
    description:
      "La desparasitación se define caso a caso. El servicio se mostrará cuando se confirme el protocolo del hospital.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["medicina-preventiva"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "bug",
  },
  {
    slug: "laboratorio-clinico",
    name: "Laboratorio Clínico",
    shortDescription:
      "Exámenes que aportan información objetiva para decidir con mayor certeza.",
    description:
      "El laboratorio complementa la evaluación clínica y permite orientar diagnóstico, seguimiento y decisiones terapéuticas.",
    whenToVisit: [
      "Indicación médica de exámenes",
      "Controles de pacientes en tratamiento",
      "Evaluación prequirúrgica",
    ],
    includes: [
      "Toma de muestras",
      "Procesamiento o derivación según el examen",
      "Interpretación clínica",
    ],
    howItWorks: [
      "El médico indica los exámenes necesarios",
      "Se obtiene la muestra",
      "Se comunican resultados y conducta",
    ],
    faqs: [],
    relatedServiceSlugs: ["consulta-veterinaria-general", "imagenologia"],
    relatedSpecialtySlugs: ["medicina-interna"],
    teamSlugs: [],
    enabled: true,
    icon: "flask-conical",
  },
  {
    slug: "radiografias",
    name: "Radiografías",
    shortDescription:
      "Imagen diagnóstica para evaluar estructuras óseas y hallazgos clínicos.",
    description:
      "La radiografía se indica cuando aporta información relevante para el diagnóstico o el seguimiento.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["imagenologia"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "radiation",
  },
  {
    slug: "ecografias",
    name: "Ecografías",
    shortDescription:
      "Estudio de imagen para evaluar órganos y tejidos blandos.",
    description:
      "La ecografía se habilitará en el sitio cuando el hospital confirme disponibilidad y profesionales.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["imagenologia"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "scan",
  },
  {
    slug: "imagenologia",
    name: "Imagenología",
    shortDescription:
      "Apoyo diagnóstico por imagen para complementar la evaluación clínica.",
    description:
      "La imagenología reúne los estudios de imagen que el equipo indica para precisar un diagnóstico o un plan terapéutico.",
    whenToVisit: [
      "Indicación médica de estudio de imagen",
      "Seguimiento de un hallazgo previo",
    ],
    includes: [
      "Indicación clínica",
      "Estudio de imagen correspondiente",
      "Informe e interpretación",
    ],
    howItWorks: [
      "El equipo indica el estudio",
      "Se realiza el examen",
      "Se integran los hallazgos al plan médico",
    ],
    faqs: [],
    relatedServiceSlugs: ["radiografias", "ecografias", "laboratorio-clinico"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: true,
    icon: "images",
  },
  {
    slug: "odontologia-veterinaria",
    name: "Odontología Veterinaria",
    shortDescription:
      "Cuidado de la salud oral cuando el servicio esté confirmado.",
    description:
      "La odontología se mostrará como servicio activo cuando el hospital confirme el alcance de la atención.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["destartraje"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "smile",
  },
  {
    slug: "destartraje",
    name: "Destartraje",
    shortDescription:
      "Limpieza dental profesional bajo criterio médico.",
    description:
      "El destartraje se activará cuando exista confirmación de protocolo, anestesia y equipo.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["odontologia-veterinaria"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "sparkles",
  },
  {
    slug: "medicina-felina",
    name: "Medicina Felina",
    shortDescription:
      "Atención pensada para las particularidades clínicas de los gatos.",
    description:
      "La medicina felina se habilitará cuando se confirme el enfoque y el equipo asociado.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["consulta-veterinaria-general"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "cat",
  },
  {
    slug: "medicina-interna",
    name: "Medicina Interna",
    shortDescription:
      "Estudio de cuadros complejos que requieren un enfoque clínico más profundo.",
    description:
      "La medicina interna se activará cuando el hospital confirme especialistas y el alcance de la atención.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["laboratorio-clinico", "hospitalizacion"],
    relatedSpecialtySlugs: ["medicina-interna"],
    teamSlugs: [],
    enabled: false,
    icon: "activity",
  },
  {
    slug: "cardiologia",
    name: "Cardiología",
    shortDescription:
      "Evaluación del sistema cardiovascular cuando el servicio esté activo.",
    description:
      "La cardiología permanece desactivada hasta confirmar profesionales y estudios disponibles.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: [],
    relatedSpecialtySlugs: ["cardiologia"],
    teamSlugs: [],
    enabled: false,
    icon: "heart-pulse",
  },
  {
    slug: "dermatologia",
    name: "Dermatología",
    shortDescription:
      "Estudio de piel, oídos y alergias según confirmación del servicio.",
    description:
      "La dermatología se mostrará cuando exista confirmación clínica del hospital.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: [],
    relatedSpecialtySlugs: ["dermatologia"],
    teamSlugs: [],
    enabled: false,
    icon: "hand",
  },
  {
    slug: "neurologia",
    name: "Neurología",
    shortDescription:
      "Evaluación neurológica cuando el hospital confirme esta línea.",
    description:
      "La neurología permanece como estructura, no como servicio activo.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: [],
    relatedSpecialtySlugs: ["neurologia"],
    teamSlugs: [],
    enabled: false,
    icon: "brain",
  },
  {
    slug: "oncologia",
    name: "Oncología",
    shortDescription:
      "Acompañamiento clínico en sospecha o diagnóstico oncológico.",
    description:
      "La oncología se activará únicamente cuando el hospital confirme el alcance de esta atención.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: [],
    relatedSpecialtySlugs: ["oncologia"],
    teamSlugs: [],
    enabled: false,
    icon: "ribbon",
  },
  {
    slug: "oftalmologia",
    name: "Oftalmología",
    shortDescription:
      "Cuidado ocular especializado cuando el servicio esté disponible.",
    description:
      "La oftalmología se mostrará al confirmar profesionales y procedimientos.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: [],
    relatedSpecialtySlugs: ["oftalmologia"],
    teamSlugs: [],
    enabled: false,
    icon: "eye",
  },
  {
    slug: "nutricion",
    name: "Nutrición",
    shortDescription:
      "Orientación nutricional clínica según etapa y condición del paciente.",
    description:
      "La nutrición se activará cuando el hospital confirme esta línea de apoyo.",
    whenToVisit: [],
    includes: [],
    howItWorks: [],
    faqs: [],
    relatedServiceSlugs: ["medicina-preventiva"],
    relatedSpecialtySlugs: [],
    teamSlugs: [],
    enabled: false,
    icon: "apple",
  },
];

const FEATURED_SERVICE_SLUGS = [
  "consulta-veterinaria-general",
  "hospitalizacion",
  "cirugia",
  "imagenologia",
] as const;

export function getEnabledServices(): Service[] {
  return services.filter((service) => service.enabled);
}

export function getFeaturedServices(): Service[] {
  return FEATURED_SERVICE_SLUGS.map((slug) => getServiceBySlug(slug)).filter(
    (service): service is Service => Boolean(service?.enabled),
  );
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
