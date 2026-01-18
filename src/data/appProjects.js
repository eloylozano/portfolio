export default [
  {
    slug: "deskify",
    title: "Deskify",
    figmaLink:
      "https://www.figma.com/design/IywhHRYRhl8vipgPrpIJC8/deskify?node-id=36-3&t=0olSM0eW4whsADt0-1",
    demoLink: "https://deskify-web.vercel.app",
    gitLink: "https://github.com/eloylozano/deskify",
    description:
      "Deskify nació de una simple pregunta: ¿y si el espacio digital pudiera sentirse tan cómodo como el físico? Es una idea que creció entre líneas de código y largos cafés, entre pruebas, errores y obsesión por el detalle. Un proyecto que no busca deslumbrar con la complejidad, sino con el equilibrio. Con cada clic, Deskify intenta hacer más sencillo lo cotidiano, más bello lo funcional y más tuyo ese rincón donde pasamos tantas horas: el escritorio. Esto no es sólo diseño o sólo desarrollo. Es una forma de ordenar el caos.",
    coverImage: "/images/projects/app_deskify.jpg",
    gallery: [
      "/images/projects/app/deskify/Picture5.png",
      "/images/projects/app/deskify/Picture3.png",
      "/images/projects/app/deskify/Picture4.jpg",
      "/images/projects/app/deskify/Picture1.jpg",
    ],
    tech: ["Astro", "Svelte", "Spring", "MySQL"],

    mainFeatures: {
      text: "Deskify es una aplicación web desarrollada para optimizar la gestión del soporte técnico en entornos empresariales. A través de un sistema de tickets intuitivo y personalizable, mejora la comunicación entre usuarios y agentes, centraliza la resolución de incidencias y proporciona un control más eficiente del flujo de trabajo. Está diseñada para escalar fácilmente, adaptarse a diferentes roles dentro de una organización y proporcionar herramientas útiles tanto a nivel operativo como analítico. Principales características de Deskify:",
      functions: [
        "Gestión de tickets: Creación, edición, seguimiento y cierre de incidencias.",
        "Sistema de roles y permisos: Control de acceso según perfil (admin, agente, gestor, supervisor, usuario).",
        "Comentarios y respuestas: Comunicación directa entre usuarios y agentes dentro del ticket.",
        "Estado y prioridades: Clasificación de tickets según urgencia y progreso.",
        "Dashboard en tiempo real: Visualización de estadísticas clave como número de tickets abiertos, tiempo medio de resolución o rendimiento por agente.",
        "API REST: Integración con plataformas externas y automatización de procesos.",
        "Interfaz responsiva e intuitiva: Adaptada para facilitar su uso desde cualquier dispositivo.",
        "Gestión de usuarios: Alta, baja y modificación de perfiles de usuarios de forma sencilla.",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    logo: "/images/projects/app/deskify/logo.png",

    app: {
      text: "Deskify es una Single Page Application desarrollada con Svelte, TypeScript y Vite, diseñada para ofrecer una experiencia fluida y minimalista en la gestión del espacio digital personal. Integra TailwindCSS para un diseño limpio y responsive, y utiliza React Router para una navegación instantánea sin recargas. Sus características incluyen personalización de widgets, organización de accesos directos y herramientas de productividad integradas, todo ello diseñado para transformar el escritorio en un entorno funcional, estético y centrado en el usuario. Deskify no solo organiza, sino que reinterpreta la forma en que interactuamos con nuestro espacio digital diario.",
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
      text: "La landing page de Deskify está desarrollada con Astro, aprovechando su arquitectura orientada a la velocidad y la optimización web. Gracias a Astro, la página carga ultrarrápida y genera contenido estático con SEO optimizado desde la primera renderización, ideal para enganchar a los usuarios sin sacrificar la experiencia. La integración con componentes React permite mantener una estética moderna y dinámica, mientras que TailwindCSS proporciona un diseño limpio y responsive. Esta landing page es la puerta de entrada perfecta para presentar Deskify, combinando rendimiento, estilo y accesibilidad en una experiencia ligera y atractiva.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },

    back: {
      text: "El backend de Deskify está construido con Spring Boot, siguiendo una arquitectura modular y segura. Implementa JWT (JSON Web Tokens) para la autenticación y autorización de usuarios, garantizando sesiones seguras y sin estado. La API RESTful gestiona funcionalidades como el registro, el inicio de sesión y la personalización del escritorio, manteniendo una comunicación fluida con el frontend. La persistencia de datos se gestiona con JPA y una base de datos PostgreSQL, garantizando la integridad y la escalabilidad. Todo el sistema está diseñado para ser robusto, eficiente y fácilmente ampliable, permitiendo futuras integraciones o mejoras sin comprometer la estabilidad.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
    featured: true
  },
  {
    slug: "bitten-apol",
    title: "Bitten Apol",
    demoLink: "https://bitten-apol-gamma.vercel.app/",
    gitLink: "https://github.com/eloylozano/bitten-apol-Web",
    description:
      "BittenApol es una plataforma de comercio electrónico con un sólido panel de administración y un cliente web intuitivo. El panel de administración permite gestionar productos, usuarios, roles y pedidos, con rutas protegidas y una interfaz limpia y responsive. El cliente web facilita a los usuarios la navegación por los productos, la gestión del carrito, la finalización de la compra y la integración del inicio de sesión de Google.",
    coverImage: "/images/projects/app_bittenapol.webp",
    gallery: [
      "/images/projects/app_bitten-apol.webp",
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
      text: "BittenApol ofrece una solución completa para la gestión del comercio electrónico, con panel administrativo y cliente web integrados. Algunas funcionalidades destacadas incluyen:",
      functions: [
        "Gestión de productos: crear, editar y eliminar productos.",
        "Gestión de usuarios y roles con acceso basado en permisos.",
        "Seguimiento de pedidos y actualizaciones de estado.",
        "Rutas administrativas protegidas con autenticación y roles.",
        "Interfaz limpia, receptiva y fácil de usar tanto en el administrador como en el cliente.",
        "Carrito de la compra con añadir y eliminar productos.",
        "Dirección de envío autocompletada basada en los datos del usuario.",
        "Inicio de sesión de Google integrado para mayor comodidad.",
        "Flujo de pago (en desarrollo).",
      ],
      image: "/images/projects/app/bittenapol/mockup.png",
    },

    logo: "/images/projects/app/bittenapol/logo.png",

    app: {
      text: `
      El cliente web de BittenApol está construido con Next.js y React usando TypeScript para una experiencia rápida y fluida. Integra MongoDB para la gestión de usuarios y datos, autenticación vía Google OAuth, y utiliza React Context API para la gestión de carritos y estados de usuario. El diseño se basa en Tailwind CSS para mantener una interfaz moderna y responsive.
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
      El panel administrativo es alimentado por Next.js API Routes para el backend, usando MongoDB con Mongoose como base de datos. La autenticación se maneja con JWT o sesiones (NextAuth), asegurando rutas protegidas con roles y permisos.  Permite la gestión completa de productos, usuarios, pedidos y roles en una interfaz segura y eficiente.
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
    
    featured: false
  },
];
