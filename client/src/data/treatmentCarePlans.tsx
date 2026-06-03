export const treatmentSelector = [
  {
    slug: "endolift",
    name: "Endolift",
  },

  {
    slug: "primex",
    name: "Primex",
  },

  {
    slug: "toxina-botulinica",
    name: "Toxina Botulínica",
  },

  {
    slug: "acido-hialuronico",
    name: "Ácido Hialurónico",
  },

  {
    slug: "bioestimulacion",
    name: "Bioestimulación",
  },
];

export const carePrograms = [
  {
    id: "limpiador-suave",
    name: "Limpiador Suave",
    image: "/images/products/limpiador.png",
    description:
      "Limpieza delicada para preparar la piel antes de procedimientos médicos.",
    stages: ["before"],
    recommendedFor: [
      "endolift",
      "toxina-botulinica",
      "acido-hialuronico",
      "bioestimulacion",
    ],
  },

  {
    id: "tonico-equilibrante",
    name: "Tónico Equilibrante",
    image: "/images/products/tonico.png",
    description:
      "Ayuda a equilibrar la piel y mejorar la absorción de activos.",
    stages: ["before", "maintenance"],
    recommendedFor: [
      "endolift",
      "toxina-botulinica",
      "acido-hialuronico",
      "bioestimulacion",
      "primex",
    ],
  },

  {
    id: "serum-pre-tratamiento",
    name: "Sérum Pre Tratamiento",
    image: "/images/products/serum.png",
    description:
      "Fortalece la barrera cutánea y optimiza la respuesta al tratamiento.",
    stages: ["before"],
    recommendedFor: ["endolift", "bioestimulacion", "primex"],
  },

  {
    id: "gel-calmante",
    name: "Gel Calmante",
    image: "/images/products/gel.png",
    description: "Ayuda a disminuir molestias e inflamación inmediata.",
    stages: ["during", "after"],
    recommendedFor: ["endolift", "acido-hialuronico", "bioestimulacion"],
  },

  {
    id: "crema-regeneradora",
    name: "Crema Regeneradora",
    image: "/images/products/crema.png",
    description: "Favorece la recuperación y regeneración de la piel.",
    stages: ["after"],
    recommendedFor: ["endolift", "bioestimulacion", "primex"],
  },

  {
    id: "protector-solar-medico",
    name: "Protector Solar Médico",
    image: "/images/products/protector.png",
    description: "Protección diaria indispensable para preservar resultados.",
    stages: ["after", "maintenance"],
    recommendedFor: [
      "endolift",
      "toxina-botulinica",
      "acido-hialuronico",
      "bioestimulacion",
      "primex",
    ],
  },

  {
    id: "spray-calmante",
    name: "Spray Calmante",
    image: "/images/products/spray.png",
    description:
      "Ayuda a aliviar la sensación de irritación después del tratamiento.",
    stages: ["after"],
    recommendedFor: ["endolift", "bioestimulacion"],
  },

  {
    id: "serum-antioxidante",
    name: "Sérum Antioxidante",
    image: "/images/products/suero.png",
    description: "Protección antioxidante para mantener la calidad de la piel.",
    stages: ["maintenance"],
    recommendedFor: [
      "endolift",
      "toxina-botulinica",
      "acido-hialuronico",
      "bioestimulacion",
      "primex",
    ],
  },

  {
    id: "colageno",
    name: "Colágeno",
    image: "/images/products/colageno.png",
    description: "Apoyo nutricional para firmeza y elasticidad de la piel.",
    stages: ["maintenance"],
    recommendedFor: ["endolift", "bioestimulacion", "primex"],
  },
];
export const treatmentPacks = [
  {
    id: "endolift-before",
    treatment: "endolift",
    stage: "before",
    name: "Pack Preparación Endolift",
    description: "Productos recomendados para preparar para el tratamiento.",
    products: [
      "limpiador-suave",
      "tonico-equilibrante",
      "serum-pre-tratamiento",
    ],
    whatsappMessage: "Hola doctora, me interesa el Pack Preparación Endolift.",
  },
  {
    id: "endolift-after",
    treatment: "endolift",
    stage: "after",
    name: "Pack Recuperación Endolift",
    description:
      "Productos recomendados para favorecer la recuperación y proteger los resultados.",
    products: [
      "crema-regeneradora",
      "spray-calmante",
      "protector-solar-medico",
    ],
    whatsappMessage: "Hola doctora, me interesa el Pack Recuperación Endolift.",
  },
  {
    id: "endolift-contorno",
    treatment: "endolift",
    stage: "maintenance",
    name: "Pack Contorno Facial",
    description:
      "Pensado para pacientes que desean mantener la definición y firmeza lograda con Endolift.",
    products: ["colageno", "serum-antioxidante", "protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Contorno Facial.",
  },
  {
    id: "endolift-premium",
    treatment: "endolift",
    stage: "full",
    name: "Pack Completo Endolift",
    description:
      "Preparación, recuperación y mantenimiento en un solo paquete.",
    products: [
      "limpiador-suave",
      "tonico-equilibrante",
      "serum-pre-tratamiento",
      "crema-regeneradora",
      "spray-calmante",
      "protector-solar-medico",
      "serum-antioxidante",
      "colageno",
    ],
    whatsappMessage: "Hola doctora, me interesa el Pack Completo Endolift.",
  },

  {
    id: "primex-recovery",
    treatment: "primex",
    stage: "after",
    name: "Pack Recuperación Primex",
    description:
      "Productos recomendados para acompañar tu recuperación y potenciar resultados.",
    products: ["crema-regeneradora", "protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Recuperación Primex.",
  },

  {
    id: "primex-body-shape",
    treatment: "primex",
    stage: "maintenance",
    name: "Pack Remodelación Corporal",
    description:
      "Complementa tus sesiones Primex con productos orientados al mantenimiento.",
    products: ["colageno", "serum-antioxidante"],
    whatsappMessage: "Hola doctora, me interesa el Pack Remodelación Corporal.",
  },

  {
    id: "botox-maintenance",
    treatment: "toxina-botulinica",
    stage: "maintenance",
    name: "Pack Mantenimiento Botox",
    description:
      "Complementa tu tratamiento con una rutina diseñada para prolongar resultados.",
    products: ["protector-solar-medico", "serum-antioxidante"],
    whatsappMessage: "Hola doctora, me interesa el Pack Mantenimiento Botox.",
  },

  {
    id: "botox-recovery",
    treatment: "toxina-botulinica",
    stage: "after",
    name: "Pack Cuidado Post Botox",
    description: "Protección y cuidado para complementar tu tratamiento.",
    products: ["protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Cuidado Post Botox.",
  },

  {
    id: "botox-longevity",
    treatment: "toxina-botulinica",
    stage: "maintenance",
    name: "Pack Longevidad Facial",
    description:
      "Apoya la calidad de tu piel para prolongar una apariencia fresca y descansada.",
    products: ["protector-solar-medico", "serum-antioxidante"],
    whatsappMessage: "Hola doctora, me interesa el Pack Longevidad Facial.",
  },

  {
    id: "acido-hialuronico-recovery",
    treatment: "acido-hialuronico",
    stage: "after",
    name: "Pack Recuperación Facial",
    description:
      "Productos recomendados para proteger y preservar los resultados de tu armonización facial.",
    products: ["protector-solar-medico", "gel-calmante"],
    whatsappMessage: "Hola doctora, me interesa el Pack Recuperación Facial.",
  },

  {
    id: "acido-hialuronico-glow",
    treatment: "acido-hialuronico",
    stage: "maintenance",
    name: "Pack Glow & Hydration",
    description:
      "Mantén tu piel luminosa, hidratada y saludable después del tratamiento.",
    products: ["serum-antioxidante", "protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Glow & Hydration.",
  },

  {
    id: "bioestimulacion-recovery",
    treatment: "bioestimulacion",
    stage: "after",
    name: "Pack Recuperación Bioestimulación",
    description:
      "Ayuda a tu piel a recuperarse mientras favoreces la producción natural de colágeno.",
    products: [
      "crema-regeneradora",
      "spray-calmante",
      "protector-solar-medico",
    ],
    whatsappMessage:
      "Hola doctora, me interesa el Pack Recuperación Bioestimulación.",
  },

  {
    id: "bioestimulacion-colageno",
    treatment: "bioestimulacion",
    stage: "maintenance",
    name: "Pack Colágeno Premium",
    description:
      "Diseñado para pacientes que buscan prolongar los beneficios de la bioestimulación.",
    products: ["colageno", "serum-antioxidante", "protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Colágeno Premium.",
  },

  {
    id: "colageno-premium",
    treatment: "all",
    stage: "maintenance",
    name: "Pack Colágeno y Longevidad",
    description:
      "Ideal para pacientes que desean mantener una piel firme y saludable durante todo el año.",
    products: ["colageno", "serum-antioxidante", "protector-solar-medico"],
    whatsappMessage: "Hola doctora, me interesa el Pack Colágeno y Longevidad.",
  },
];

export const treatmentCarePlans = {
  endolift: {
    recommendedPacks: [
      "endolift-after",
      "endolift-premium",
      "endolift-contorno",
    ],
    before: {
      recommendations: [
        "Mantener buena hidratación",
        "Evitar exposición solar intensa",
        "Acudir sin maquillaje",
      ],
      products: [
        "limpiador-suave",
        "tonico-equilibrante",
        "serum-pre-tratamiento",
      ],
    },
    during: {
      recommendations: [
        "Evaluación médica continua",
        "Aplicación personalizada",
      ],
      products: ["gel-calmante"],
    },
    after: {
      recommendations: [
        "Protección solar diaria",
        "Evitar calor excesivo",
        "Seguir indicaciones médicas",
      ],
      products: [
        "crema-regeneradora",
        "spray-calmante",
        "protector-solar-medico",
      ],
    },
    maintenance: {
      recommendations: [
        "Controles periódicos",
        "Rutina médica de skincare",
        "Estimulación continua de colágeno",
      ],
      products: ["serum-antioxidante", "colageno"],
    },
  },

  "toxina-botulinica": {
    recommendedPacks: [
      "botox-maintenance",
      "colageno-premium",
      "botox-recovery",
      "botox-longevity",
    ],
    before: {
      recommendations: [
        "Evitar alcohol 24 horas antes",
        "Mantener la piel limpia",
      ],
      products: ["limpiador-suave", "tonico-equilibrante"],
    },
    during: {
      recommendations: ["Aplicación médica personalizada"],
      products: [],
    },
    after: {
      recommendations: [
        "No acostarse durante 4 horas",
        "Evitar ejercicio intenso",
      ],
      products: ["protector-solar-medico"],
    },
    maintenance: {
      recommendations: ["Protección solar diaria", "Rutina antioxidante"],
      products: ["protector-solar-medico", "serum-antioxidante"],
    },
  },

  "acido-hialuronico": {
    recommendedPacks: ["acido-hialuronico-recovery", "acido-hialuronico-glow"],
    before: {
      recommendations: ["Hidratación adecuada", "Evaluación médica previa"],
      products: ["limpiador-suave"],
    },
    during: {
      recommendations: ["Diseño facial personalizado"],
      products: ["gel-calmante"],
    },
    after: {
      recommendations: ["Evitar presión sobre la zona", "Protección solar"],
      products: ["protector-solar-medico"],
    },
    maintenance: {
      recommendations: ["Seguimiento periódico"],
      products: ["serum-antioxidante"],
    },
  },
  primex: {
    recommendedPacks: ["primex-recovery", "primex-body-shape"],
    before: {
      recommendations: [
        "Mantener buena hidratación",
        "Seguir indicaciones nutricionales",
        "Evitar comidas pesadas antes de la sesión",
      ],
      products: ["limpiador-suave", "serum-pre-tratamiento"],
    },
    during: {
      recommendations: [
        "Evaluación continua de zonas a tratar",
        "Protocolos personalizados según objetivos",
      ],
      products: ["gel-calmante"],
    },
    after: {
      recommendations: [
        "Mantener hidratación adecuada",
        "Seguir plan recomendado por la doctora",
        "Favorecer hábitos saludables",
      ],
      products: ["crema-regeneradora", "protector-solar-medico"],
    },
    maintenance: {
      recommendations: [
        "Sesiones de refuerzo según evolución",
        "Nutricosmética personalizada",
        "Rutina médica de mantenimiento",
      ],
      products: ["colageno", "serum-antioxidante"],
    },
  },
  bioestimulacion: {
    recommendedPacks: ["bioestimulacion-recovery", "bioestimulacion-colageno"],
    before: {
      recommendations: [
        "Mantener buena hidratación",
        "Evitar exposición solar excesiva",
        "Preparar la piel con skincare adecuado",
      ],
      products: [
        "limpiador-suave",
        "tonico-equilibrante",
        "serum-pre-tratamiento",
      ],
    },
    during: {
      recommendations: [
        "Aplicación personalizada",
        "Evaluación médica integral",
      ],
      products: ["gel-calmante"],
    },
    after: {
      recommendations: [
        "Protección solar diaria",
        "Mantener la piel hidratada",
        "Seguir protocolo de recuperación",
      ],
      products: [
        "crema-regeneradora",
        "spray-calmante",
        "protector-solar-medico",
      ],
    },
    maintenance: {
      recommendations: [
        "Estimulación continua de colágeno",
        "Skincare médico",
        "Control periódico",
      ],
      products: ["colageno", "serum-antioxidante", "protector-solar-medico"],
    },
  },
};
