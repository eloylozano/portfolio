export default [
  {
    slug: "viarisk",
    title: "ViaRisk",
    demoLink: "https://viarisk.vercel.app",
    gitLink: "https://github.com/eloylozano/viarisk",

    coverImage: "/images/projects/ai_viarisk.webp",
    gallery: [
      "/images/projects/ai_viarisk.webp",
      "/images/projects/ai/viarisk/dashboard.png",
      "/images/projects/ai/viarisk/main.png",
      "/images/projects/ai/viarisk/simulator.png",
    ],
    tech: ["Python", "FastAPI", "XGBoost", "MachineLearning", "Astro", "Docker"],
    logo: "/images/projects/ai/viarisk/logo.png",
    app: {
      tech: [
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
        "Leaflet/Mapbox",
        "Docker",
      ],
    },

    front: {
      tech: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    model: {
      tech: ["Python", "FastAPI", "XGBoost", "Scikit-Learn", "Docker Compose", "Joblib"],
    },
    featured: true
  },
  {
    slug: "neuralledger",
    title: "Neural Ledger",
    // demoLink: "https://neuralledger.vercel.app", // O tu dominio si lo despliegas
    gitLink: "https://github.com/eloylozano/neuralledger",

    coverImage: "/images/projects/ai_neuralledger.webp",
    gallery: [
      "/images/projects/ai_neuralledger.webp",
      "/images/projects/ai/neuralledger/dashboard.png",
      "/images/projects/ai/neuralledger/editor.png",
      "/images/projects/ai/neuralledger/settings.png", 
      "/images/projects/ai/neuralledger/invoices.png", 
      "/images/projects/ai/neuralledger/suppliers.png", 
    ],
    // Tech generales (las que salen en las etiquetas rápidas)
    tech: ["Python", "FastAPI", "Svelte 5", "Ollama", "LLM", "Docker"],
    logo: "/images/projects/ai/neuralledger/logo.png",
    
    // Configuración detallada para las secciones del portfolio
    app: {
      tech: [
        "Svelte 5 (Runes)",
        "Tailwind CSS",
        "ApexCharts",
        "Lucide Icons",
        "Docker",
      ],
    },

    front: {
      tech: ["Svelte 5", "SvelteKit", "TypeScript", "Tailwind CSS"],
    },
    
    // He renombrado 'model' a algo más acorde a un sistema de IA Generativa
    model: {
      tech: [
        "Ollama (Llama 3.1/3.2)",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Pydantic V2",
        "PyMuPDF",
      ],
    },
    featured: true
  },
]