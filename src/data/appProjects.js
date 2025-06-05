export default [
  {
    slug: "deskify",
    title: "Deskify",
    figmaLink:
      "https://www.figma.com/design/IywhHRYRhl8vipgPrpIJC8/deskify?node-id=36-3&t=0olSM0eW4whsADt0-1",
    demoLink: "https://deskify-web.vercel.app",
    gitLink: "https://github.com/eloylozano/deskify",
    description:
      "Deskify nace de una pregunta simple: ¿y si el espacio digital pudiera sentirse tan cómodo como el físico Es una idea que creció entre líneas de código y cafés largos, entre pruebas, errores y obsesión por el detalle. Un proyecto que no busca deslumbrar con complejidad, sino con equilibrio. Con cada clic, Deskify intenta hacer más simple lo cotidiano, más bello lo funcional y más tuyo ese rincón donde pasamos tantas horas: el escritorio. Esto no es solo diseño ni solo desarrollo. Es una forma de ordenar el caos.",
    coverImage: "/images/projects/app_deskify.jpg",
    gallery: [
      "/images/projects/app/deskify/Picture5.png",
      "/images/projects/app/deskify/Picture3.png",
      "/images/projects/app/deskify/Picture4.jpg",
      "/images/projects/app/deskify/Picture1.jpg",
    ],
    tech: ["Astro", "Svelte", "Spring", "MySQL"],

    mainFeatures: {
      text: "Deskify es una aplicación web desarrollada para optimizar la gestión de soporte técnico en entornos empresariales. A través de un sistema de tickets intuitivo y personalizable, permite mejorar la comunicación entre usuarios y agentes, centralizar la resolución de incidencias y ofrecer un control más eficiente del flujo de trabajo. Está pensada para escalar fácilmente, adaptarse a diferentes roles dentro de una organización y proporcionar herramientas útiles tanto a nivel operativo como de análisis. Funciones principales de Deskify:",
      functions: [
        "Gestión de tickets: Creación, edición, seguimiento y cierre de incidencias.",
        "Sistema de roles y permisos: Control de accesos según perfil (admin, agente, manager, supervisor, usuario).",
        "Comentarios y respuestas: Comunicación directa entre usuarios y agentes dentro del ticket.",
        "Estados y prioridades: Clasificación de tickets según su urgencia y progreso.",
        "Dashboard en tiempo real: Visualización de estadísticas clave como número de tickets abiertos, tiempo medio de resolución o rendimiento por agente.",
        "API REST: Integración con plataformas externas y automatización de procesos.",
        "Interfaz responsive e intuitiva: Adaptada para facilitar el uso desde cualquier dispositivo.",
        "Gestión de usuarios: Alta, baja y modificación de perfiles de manera senc",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    logo: "/images/projects/app/deskify/logo.png",

    app: {
      text: "Deskify es una Single Page Application desarrollada con Svelte, TypeScript y Vite, diseñada para ofrecer una experiencia fluida y minimalista en la gestión del espacio digital personal. Integra TailwindCSS para un diseño limpio y responsive, y utiliza React Router para una navegación instantánea sin recargas. Entre sus funcionalidades destacan la personalización de widgets, la organización de accesos rápidos y herramientas de productividad integradas, todo pensado para transformar el escritorio en un entorno funcional, estético y centrado en el usuario. Deskify no solo organiza, sino que reinterpreta la forma en la que interactuamos con nuestro espacio digital diario.",
      tech: [
        "Svelte",
        "Vite",
        "TypeScript",
        "Tailwind",
        "Context API",
        "Axios",
      ],
    },

    front: {
      text: "La landing page de Deskify está desarrollada con Astro, aprovechando su arquitectura orientada a la velocidad y la optimización web. Gracias a Astro, la página carga de forma ultrarrápida y genera contenido estático con un SEO optimizado desde el primer render, ideal para captar usuarios sin sacrificar experiencia. La integración con componentes React permite mantener una estética moderna y dinámica, mientras que TailwindCSS aporta un diseño limpio y responsive. Esta landing page es la puerta perfecta para presentar Deskify, combinando rendimiento, estilo y accesibilidad en una experiencia ligera y atractiva.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },

    back: {
      text: "El backend de Deskify está construido con Spring Boot, siguiendo una arquitectura modular y segura. Implementa JWT (JSON Web Tokens) para la autenticación y autorización de usuarios, asegurando sesiones seguras y sin estados. La API RESTful gestiona funcionalidades como el registro, login, y personalización del escritorio, manteniendo una comunicación fluida con el frontend. La persistencia de datos se maneja con JPA y una base de datos PostgreSQL, garantizando integridad y escalabilidad. Todo el sistema está diseñado para ser robusto, eficiente y fácilmente ampliable, permitiendo futuras integraciones o mejoras sin comprometer la estabilidad.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
  },
  {
    slug: "bitten-apol",
    title: "Bitten Apol",
    demoLink: "https://bitten-apol-gamma.vercel.app/",
    gitLink: "https://github.com/eloylozano/bitten-apol-Web",
    description:
      "BittenApol es una plataforma de comercio electrónico con un panel administrativo robusto y un cliente web intuitivo. El panel de administración permite gestionar productos, usuarios, roles y pedidos, con rutas protegidas y una interfaz limpia y responsiva. El cliente web facilita a los usuarios navegar productos, gestionar el carrito, completar la compra e integrar login con Google.",
    coverImage: "/images/projects/app_deskify.jpg",
    gallery: [
      "/images/projects/app_bitten-apol.jpg",
      "/images/projects/app/bittenapol/Picture3.jpg",
      "/images/projects/app/bittenapol/Picture1.png",
      "/images/projects/app/bittenapol/Picture2.png",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Google OAuth",
      "AWS S3",
    ],

    mainFeatures: {
      text: "BittenApol ofrece una solución completa para la gestión de un e-commerce, con panel administrativo y cliente web integrados. Algunas funcionalidades destacadas incluyen:",
      functions: [
        "Gestión de productos: crear, editar y eliminar productos.",
        "Gestión de usuarios y roles con acceso basado en permisos.",
        "Seguimiento de pedidos y actualización de estados.",
        "Rutas administrativas protegidas con autenticación y roles.",
        "Interfaz limpia, responsiva y fácil de usar tanto en admin como en cliente.",
        "Carrito de compras con añadir y eliminar productos.",
        "Dirección de envío autocompletada basada en datos de usuario.",
        "Login con Google integrado para mayor comodidad.",
        "Flujo de checkout (en desarrollo).",
      ],
      image: "/images/projects/app_bitten-apol.jpg",
    },

    logo: "/images/projects/app/bittenapol/logo.png",

    app: {
      text: `
      El cliente web de BittenApol está construido con Next.js y React usando TypeScript para una experiencia rápida y fluida. Integra MongoDB para la gestión de usuarios y datos, autenticación mediante Google OAuth, y utiliza React Context API para el manejo del estado del carrito y usuario. El diseño está basado en Tailwind CSS para mantener una interfaz moderna y responsive.
    `,
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "React Context API",
        "Google OAuth",
      ],
    },

    back: {
      text: `
      El panel administrativo funciona con Next.js API Routes para el backend, usando MongoDB con Mongoose como base de datos. La autenticación está manejada con JWT o sesiones (NextAuth), asegurando rutas protegidas con roles y permisos.  Permite la gestión completa de productos, usuarios, pedidos y roles en una interfaz segura y eficiente.
    `,
      tech: [
        "Next.js",
        "API Routes",
        "MongoDB",
        "AWS S3",
        "Mongoose",
        "JWT",
        "NextAuth",
        "Tailwind CSS",
        "Google OAuth",
      ],
    },
  },
];
