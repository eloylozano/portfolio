// src/data/ai-context.ts
export const eloyData = {
    profile: {
        name: "Eloy Lozano",
        role: "Desarrollador Full Stack, Especialista en IA & Fotógrafo",
        location: "Galicia, España",
        philosophy: "El arte también se programa. Combino líneas de código con sensibilidad visual para crear experiencias digitales únicas donde el lujo se encuentra con la funcionalidad técnica.",
        traits: "Sofisticado, profesional, detallista y con una visión artística del desarrollo."
    },

    // Trayectoria unificada: Estudios y Experiencia Profesional
    experience: [
        {
            period: "Enero 2026 - Febrero 2026",
            company: "Dixitalia Software",
            position: "Desarrollador Full Stack",
            desc: "Desarrollo de un CRM empresarial a medida utilizando Laravel y Angular. Gestión de APIs REST y optimización de procesos internos.",
            responsibilities: ["Laravel/Angular", "Gestión de BD y Lógica de Negocio", "Implementación de APIs"]
        },
        {
            period: "Septiembre 2025 - Junio 2026",
            company: "IES San Clemente",
            position: "Especialización en Big Data e IA",
            desc: "Formación avanzada en modelos de Machine Learning, algoritmos y transformación digital basada en datos.",
            responsibilities: ["ML Algorithms", "Sistemas de Big Data", "Automatización Empresarial"]
        },
        {
            period: "Abril 2025 - Junio 2025",
            company: "Deloitte",
            position: "Desarrollador de Integración SAP",
            desc: "Participación en proyectos de integración usando SAP Integration Suite (CPI), diseñando iFlows y scripting con Groovy.",
            responsibilities: ["SAP CPI", "Groovy Scripting", "APIs REST/SOAP", "XML/JSON"]
        },
        {
            period: "Septiembre 2023 - Marzo 2025",
            company: "Liceo La Paz",
            position: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
            desc: "Formación integral en desarrollo Full Stack.",
            responsibilities: ["Spring/Symfony/React", "SQL & NoSQL", "Docker", "UI/UX & SEO"]
        },
        {
            period: "Julio - Septiembre 2025 (y anteriores)",
            company: "Audasa",
            position: "Técnico de CAU / Supervisión",
            desc: "Control de incidencias y atención al cliente en la autopista AP-9.",
            responsibilities: ["Gestión de incidencias", "Supervisión de estación"]
        },
        {
            period: "Marzo 2023 - Junio 2023",
            company: "Infonet",
            position: "Técnico de Soporte N1",
            desc: "Resolución de incidencias técnicas y creación de paneles analíticos.",
            responsibilities: ["Freshdesk", "PowerBI", "NextCloud"]
        },
        {
            period: "Septiembre 2021 - Marzo 2023",
            company: "Liceo La Paz",
            position: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
            desc: "Administración de sistemas y configuración de servidores/CMS.",
            responsibilities: ["WordPress/PrestaShop", "Redes y Servidores"]
        }
    ],

    stack: {
        frontend: ["Astro", "React", "Svelte", "Angular", "Tailwind CSS", "TypeScript"],
        backend: ["Node.js", "Laravel", "Spring Boot", "FastAPI", "Groovy"],
        data_ai: ["Python", "XGBoost", "Machine Learning", "Big Data", "PostgreSQL", "MongoDB"]
    },

    projects: [
        {
            name: "ViaRisk",
            category: "IA & Big Data",
            highlight: "Sistema predictivo de seguridad vial usando Machine Learning (XGBoost) y FastAPI. Transforma datos históricos en herramientas preventivas.",
            tech: ["FastAPI", "Docker", "XGBoost", "SMOTE"]
        },
        {
            name: "Deskify",
            category: "Web App",
            highlight: "Plataforma de gestión de soporte técnico (Svelte/Spring Boot). Optimiza la comunicación empresa-usuario con un diseño equilibrado.",
            tech: ["Svelte", "Spring Boot", "PostgreSQL", "Astro"]
        },
        {
            name: "Bitten Apol",
            category: "E-commerce",
            highlight: "Plataforma de comercio electrónico con panel de administración robusto y Google OAuth.",
            tech: ["Next.js", "MongoDB", "React Context"]
        },
        {
            name: "Ambar Atelier",
            category: "UI/UX Luxury Design",
            highlight: "Ecosistema digital premium con estética 'Quiet Luxury' y Core Web Vitals optimizados (100/100).",
            tech: ["Astro", "Quiet Luxury Aesthetics", "High-End UX"]
        },
        {
            name: "Nömada Café",
            category: "UI/UX  Design",
            highlight: "Página digital de una cafetería / brunch en Santiago de Compostela.",
            tech: ["Astro", "High-End UX"]
        },
        {
            name: "Axe & Steel",
            category: "UI/UX Luxury Design",
            highlight: "Landing page de alta gama para barbería master con dirección de arte 'Industrial-Luxury'.",
            tech: ["Astro", "Scroll cinético", "UI Editorial"]
        },
        {
            name: "ViaRisk",
            category: "IA & Big Data",
            highlight: "Ecosistema inteligente que procesa volúmenes masivos de datos para predicción de riesgos viales.",
            tech: ["Machine Learning", "FastAPI", "Python"]
        },
        {
            name: "NeuralLedger",
            category: "IA & Big Data",
            highlight: "Procesador inteligente de facturas para la extracción de articulos para procesos contables.",
            tech: ["Machine Learning", "FastAPI", "Python"]
        },
        {
            name: "Pawtopia",
            category: "UI/UX Solidario",
            highlight: "Plataforma para adopción responsable de animales.",
            tech: ["Figma", "UX/UI", "Vercel"]
        },
        {
            name: "AppFluence",
            category: "UI/UX Podcast Multimedia",
            highlight: "Podcast dedicado al desarrollo front-end con integración nativa de Spotify.",
            tech: ["Astro", "Multimedia Integration"]
        },
        {
            name: "LensLegacy",
            category: "UI/UX Fotografía de Stock",
            highlight: "Plataforma visual para descarga de imágenes con filtros por licencia y resolución.",
            tech: ["JS", "HTML/CSS", "UI Fotográfica"]
        },
        {
            name: "EcoVibe",
            category: "UI/UX Sostenibilidad",
            highlight: "Proyecto centrado en la conciencia ecológica y productos reciclados.",
            tech: ["UI/UX", "Component-based Design"]
        }
    ],

    interests: {
        photography: "Especializado en arquitectura y 'Planes Spotting' (avistamiento de aeronaves). La fotografía es su forma de entrenar el ojo para el detalle.",
        motor: "Libertad sobre dos ruedas; el asfalto como extensión del alma y la ruta como proceso creativo."
    },

    curiosidades_inquietudes: [
        "Arquitecto de sistemas por naturaleza: Actualmente desarrolla un ecosistema de servidor doméstico que integra Cloud privado, filtrado de seguridad perimetral y LLMs locales.",
        "Hardware & DIY Industrial: Apasionado de la ingeniería y el por qué de las cosas, construye sus propios prototipos industriales, uniendo lo físico con lo digital.",
        "Visión de Futuro: Su proyecto 'Alter Ego' es solo el inicio; planea integrarlo mediante VoIP en entornos de movilidad (vehículos) para crear una asistencia inteligente real y conversacional.",
        "Mentalidad de Negocio: No solo crea software, crea soluciones. A través de proyectos como Ambar Atelier o SaviaClub, ayuda a digitalizar el pequeño comercio, validando modelos de negocio mientras escala en el mercado tecnológico.",
        "Objetivo Profesional: Su carrera se orienta hacia la estrategia y el Business Intelligence, donde la IA no es solo una herramienta, sino el motor de decisiones empresariales de alto nivel."
    ],

    contact: {
        linkedin: "linkedin.com/in/eloylozano",
        github: "github.com/eloylozano"
    }
};

const listaProyectos = eloyData.projects.map(p => `${p.name} (${p.highlight})`).join(", ");

const listaNombres = eloyData.projects.map(p => p.name).join(", ");
const detalleProyectos = eloyData.projects
  .map(p => `${p.name}: ${p.highlight} [Tech: ${p.tech.join(", ")}]`)
  .join("\n");

  export const systemPrompt = `
  Eres el "Alter Ego" virtual de Eloy Lozano. Tu identidad es la de un estratega tecnológico con sensibilidad artística. Tu tono es sofisticado, directo y de "Quiet Luxury".
  
  CATÁLOGO DE PROYECTOS (PROHIBIDO INVENTAR O GENERALIZAR):
  Usa EXCLUSIVAMENTE estos nombres y detalles:
  ${detalleProyectos}
  
  REGLAS CRÍTICAS DE RESPUESTA:
  1. IDENTIDAD DE PROYECTO: Está terminantemente PROHIBIDO usar descripciones genéricas como "sistemas de ML" o "apps web". Si hablas de un trabajo de Eloy, DEBES usar su nombre propio (ej. ViaRisk, NeuralLedger, Deskify).
  2. CONCISIÓN DE ÉLITE: Máximo 3 frases por respuesta. Cada palabra debe aportar valor estratégico.
  3. SUJETO: Eloy es siempre el protagonista. Usa la tercera persona: "Eloy ha consolidado...", "Su enfoque en...".
  4. EVIDENCIA TÉCNICA: Cada vez que menciones un proyecto, incluye una tecnología clave (Astro, FastAPI, XGBoost) para validar la autoridad técnica.
  5. NO REPETICIÓN: Evita mencionar el "servidor doméstico" a menos que te pregunten por hardware o infraestructura personal. Prioriza los proyectos de IA y UI/UX.
  
  ESTRUCTURA DE CIERRE:
  - Si el usuario muestra interés profesional o pide detalles profundos, activa el protocolo de CONVERSIÓN: Invita a conectar en LinkedIn (${eloyData.contact.linkedin}) o usar el formulario de contacto.
  
  EJEMPLO DE TONO:
  "El Top 5 de Eloy está liderado por ViaRisk, su sistema de predicción vial con XGBoost, seguido por la precisión contable de NeuralLedger y la estética premium de Ambar Atelier. Su portafolio se completa con la robustez de Deskify y la dirección de arte industrial de Axe & Steel, reflejando una mentalidad donde el código es una forma de arte estratégico."
  `;