// src/i18n/en/projects.ts

export const projects_data = {

  // ===========================================================================================================
  // PROYECTOS DE IA / DATOS
  // ===========================================================================================================
  viarisk: {
    title: "ViaRisk",
    description: "ViaRisk no es solo un mapa; es un vistazo al futuro de la seguridad vial. El proyecto nació con el objetivo de transformar datos históricos de accidentes en herramientas preventivas mediante el uso de aprendizaje automático (machine learning). Utilizando un modelo de clasificación avanzado, ViaRisk analiza variables temporales, climáticas y geográficas para identificar patrones de riesgo. Es la unión entre la ciencia de datos y la seguridad pública, diseñada para ayudar a entender no solo dónde han ocurrido accidentes, sino bajo qué condiciones es más probable que ocurra una fatalidad.",
    tryModel: "Probar Modelo",
    sections: {
      model: "Arquitectura del Modelo",
      dataset: "Dataset y Entrenamiento",
      deployment: "Despliegue y API"
    },
    content: {
      model_text: "El corazón de ViaRisk es un modelo de aprendizaje automático basado en XGBoost, entrenado con técnicas de balanceo SMOTE. El backend está construido con FastAPI y servido por Uvicorn dentro de un contenedor Docker, proporcionando una arquitectura ligera y extremadamente rápida para servir predicciones en cualquier entorno.",
      dataset_text: "ViaRisk es un ecosistema inteligente que procesa grandes volúmenes de datos de accidentes de tráfico para proporcionar predicciones precisas y visualizaciones interactivas. A través de un pipeline de machine learning optimizado e infraestructura contenerizada, la plataforma permite la evaluación de riesgos en tiempo real basada en condiciones dinámicas.",
      deployment_text: "El despliegue se realiza utilizando una infraestructura moderna que garantiza la escalabilidad. El modelo se sirve a través de una API REST que permite consultas rápidas, facilitando la integración con cuadros de mando interactivos y sistemas de alerta temprana."
    }
  },


  // ===========================================================================================================
  // PROYECTOS DE APLICACIONES
  // ===========================================================================================================
  deskify: {
    slug: "deskify",
    title: "Deskify",
    description:
      "Deskify nació de una pregunta sencilla: ¿y si los espacios digitales pudieran sentirse tan cómodos como los físicos? Es una idea que creció entre líneas de código y largos cafés, a través del ensayo, el error y una obsesión por el detalle. Un proyecto que no busca deslumbrar por su complejidad, sino por su equilibrio. Con cada clic, Deskify intenta simplificar lo cotidiano, hacer que lo funcional sea bello y lograr que ese rincón donde pasamos tantas horas —el escritorio— sea realmente tuyo. Esto no es solo diseño o desarrollo; es una forma de poner orden al caos.",
    alt: "Imagen de portada de Deskify",
    mainFeatures: {
      text: "Deskify es una aplicación web desarrollada para optimizar la gestión de soporte técnico en entornos empresariales. A través de un sistema de tickets intuitivo y personalizable, mejora la comunicación entre usuarios y agentes, centraliza la resolución de incidentes y proporciona un control de flujo de trabajo más eficiente. Está diseñado para escalar fácilmente, adaptarse a diferentes roles dentro de una organización y proporcionar herramientas útiles tanto a nivel operativo como analítico. Características clave de Deskify:",
      functions: [
        "Gestión de Tickets: Creación, edición, seguimiento y cierre de incidentes.",
        "Sistema de Roles y Permisos: Control de acceso basado en perfiles (admin, agente, gerente, supervisor, usuario).",
        "Comentarios y Respuestas: Comunicación directa entre usuarios y agentes dentro del ticket.",
        "Estados y Prioridades: Clasificación de tickets según urgencia y progreso.",
        "Panel en Tiempo Real: Visualización de estadísticas clave como tickets abiertos, tiempo promedio de resolución o rendimiento de agentes.",
        "API REST: Integración con plataformas externas y automatización de procesos.",
        "Interfaz Responsiva e Intuitiva: Adaptada para facilitar su uso en todos los dispositivos.",
        "Gestión de Usuarios: Registro, eliminación y modificación sencilla de perfiles de usuario.",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    app: {
      text: "Deskify es una Single Page Application desarrollada con Svelte, TypeScript y Vite, diseñada para ofrecer una experiencia fluida y minimalista en la gestión del espacio digital personal. Integra TailwindCSS para un diseño limpio y responsivo, y utiliza un enrutamiento optimizado para una navegación instantánea sin recargas. Sus funciones incluyen la personalización de widgets, organización de accesos directos y herramientas de productividad integradas, todo diseñado para transformar el escritorio en un entorno funcional, estético y centrado en el usuario. Deskify no solo organiza; reinterpreta cómo interactuamos con nuestro espacio digital diario.",
    },
    front: {
      text: "La landing page de Deskify está construida con Astro, aprovechando su arquitectura orientada a la velocidad y optimización web. Gracias a Astro, la página carga ultrarrápido y genera contenido estático optimizado para SEO desde el primer renderizado, ideal para captar usuarios sin sacrificar la experiencia. La integración con componentes de React permite una estética moderna y dinámica, mientras que TailwindCSS proporciona un diseño limpio y responsivo. Esta landing page es la puerta de entrada perfecta para presentar Deskify, combinando rendimiento, estilo y accesibilidad en una experiencia ligera y atractiva.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },
    back: {
      text: "El backend de Deskify está construido con Spring Boot, siguiendo una arquitectura modular y segura. Implementa JWT (JSON Web Tokens) para la autenticación y autorización de usuarios, garantizando sesiones seguras y sin estado. La API RESTful gestiona funcionalidades como el registro, inicio de sesión y personalización del escritorio, manteniendo una comunicación fluida con el frontend. La persistencia de datos se maneja con JPA y una base de datos PostgreSQL, asegurando integridad y escalabilidad. Todo el sistema está diseñado para ser robusto, eficiente y fácilmente ampliable, permitiendo futuras integraciones o mejoras sin comprometer la estabilidad.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
    featured: true
  },
  "bitten-apol": {
    slug: "bitten-apol",
    title: "Bitten Apol",
    description:
      "BittenApol es una plataforma de comercio electrónico que cuenta con un robusto panel de administración y un cliente web intuitivo. El panel de control permite la gestión de productos, usuarios, roles y pedidos, con rutas protegidas y una interfaz limpia y responsiva. El cliente web permite a los usuarios navegar por los productos sin problemas, gestionar su carrito de la compra, completar adquisiciones y beneficiarse del inicio de sesión integrado con Google.",
    alt: "Imagen de portada de Bitten Apol",
    mainFeatures: {
      text: "BittenApol ofrece una solución integral para la gestión de e-commerce, con un panel administrativo y un cliente web integrados. Las características clave incluyen:",
      functions: [
        "Gestión de Productos: Crear, editar y eliminar productos.",
        "Gestión de Usuarios y Roles: Control de acceso basado en permisos.",
        "Seguimiento de Pedidos: Actualizaciones de estado y monitorización en tiempo real.",
        "Rutas de Admin Protegidas: Aseguradas mediante autenticación y acceso por roles.",
        "Interfaz Limpia y Responsiva: Optimizada para facilitar el uso tanto en el lado del admin como del cliente.",
        "Carrito de Compras: Funcionalidad completa para añadir y eliminar productos.",
        "Autocompletado de Envío: Gestión de direcciones basada en los datos del perfil de usuario.",
        "Google OAuth: Inicio de sesión integrado para una experiencia de usuario fluida.",
        "Flujo de Pago (Checkout): (Actualmente en desarrollo).",
      ],
      image: "/images/projects/app/bittenapol/mockup.png",
    },
    app: {
      text: "El cliente web de BittenApol está construido con Next.js y React utilizando TypeScript para una experiencia rápida y fluida. Integra MongoDB para la gestión de usuarios y datos, autenticación a través de Google OAuth, y utiliza la API React Context para la gestión del estado del carrito y del usuario. El diseño aprovecha Tailwind CSS para mantener una interfaz moderna y responsiva.",
    },
    back: {
      text: "El panel administrativo utiliza Next.js API Routes para el backend, empleando MongoDB con Mongoose como base de datos. La autenticación se gestiona con JWT o sesiones (NextAuth), garantizando que las rutas estén protegidas con roles y permisos específicos. Permite una gestión completa de productos, usuarios, pedidos y roles dentro de una interfaz segura y eficiente.",
    },
    featured: false
  },



  // ===========================================================================================================
  // PROYECTOS WEB
  // ===========================================================================================================
  "pawtopia": {
    title: "Pawtopia",
    description: "Una plataforma solidaria para promover la adopción responsable y conectar animales con nuevos hogares.",
    summary: "Pawtopia es una iniciativa nacida en un pequeño refugio local que ha evolucionado hasta convertirse en una comunidad referente para adopciones responsables. El sitio da visibilidad a animales en adopción, facilita la conexión con casas de acogida y promueve campañas educativas y benéficas.",
    client: "Sin ánimo de lucro",
    role: "Diseño UX/UI + Desarrollo Frontend",
    steps: [
      "Definición de objetivos sociales y funcionales",
      "Investigación de plataformas similares",
      "Diseño de wireframes y arquitectura de información",
      "Prototipado en Figma centrado en usabilidad y accesibilidad",
      "Desarrollo frontend con despliegue en Vercel"
    ]
  },
  "ecovibe": {
    title: "EcoVibe",
    description: "La Esencia Verde: creando conciencia ecológica a través de productos reciclados y sostenibles.",
    summary: "EcoVibe es una organización dedicada a la reutilización de materiales y la promoción de hábitos sostenibles. Construye una comunidad global comprometida con el cuidado del planeta mediante la concienciación, el reciclaje y la innovación ambiental.",
    client: "Proyecto Personal",
    role: "Diseño UI/UX",
    steps: [
      "Definición de la identidad ecológica y mensaje central",
      "Desarrollo de contenido para concienciación y filosofía de marca",
      "Diseño responsivo en Figma con estructura basada en componentes",
      "Implementación web accesible con prácticas sostenibles"
    ]
  },
  "appfluence": {
    title: "AppFluence",
    description: "AppFluence es un podcast dedicado a potenciar el desarrollo front-end con contenido actualizado, entrevistas y recursos esenciales para desarrolladores web.",
    summary: "AppFluence ofrece episodios sobre herramientas, frameworks, diseño responsivo, accesibilidad y UX/UI, proporcionando notas y enlaces para facilitar el aprendizaje de los desarrolladores web.",
    client: "Proyecto Personal",
    role: "Diseño y Desarrollo Frontend, Integración Multimedia",
    steps: [
      "Planificación de contenidos y estructura del podcast",
      "Diseño responsivo centrado en la accesibilidad",
      "Integración nativa de Spotify para reproducción directa",
      "Implementación de navegación sencilla basada en anclas y formulario de contacto",
      "Desarrollo de una galería de episodios anteriores para facilitar el acceso"
    ]
  },
  "lenslegacy": {
    title: "LensLegacy",
    description: "LensLegacy es una plataforma de fotografía de stock que permite descargar imágenes en diferentes tamaños y licencias. Construida con HTML, CSS y JavaScript, enfocándose en una experiencia visual clara y accesible.",
    summary: "LensLegacy ofrece una moderna galería de fotos de stock donde los usuarios pueden explorar, filtrar y descargar imágenes por tamaño y licencia. El diseño está optimizado para la velocidad, la usabilidad y la estética.",
    client: "Proyecto Personal",
    role: "Diseño y Desarrollo Frontend Completo",
    steps: [
      "Definición de estructura y flujo de descarga por licencia",
      "Diseño visual enfocado en la presentación fotográfica",
      "Desarrollo responsivo adaptado a múltiples dispositivos",
      "Implementación de filtros por categoría y resolución",
      "Optimización de carga de imágenes y mejora de la experiencia de usuario"
    ]
  },
  "flightsim": {
    title: "FlightSimulator",
    description: "FlightSimulator es una landing page dedicada al videojuego FS2020, que incluye una galería de fotos, reseñas y requisitos del sistema.",
    summary: "Una página informativa y visualmente atractiva que muestra imágenes del juego, críticas y los requisitos técnicos para jugar a FS2020, centrada en proporcionar información clara y rápida.",
    client: "Proyecto Personal",
    role: "Diseño y Desarrollo Frontend Completo",
    steps: [
      "Estructura y planificación de contenidos clave (galería, reseñas, requisitos)",
      "Diseño responsivo para dispositivos móviles y de escritorio",
      "Integración de galería de imágenes con efectos visuales",
      "Optimización de carga para un mejor rendimiento",
      "Pruebas de usabilidad y corrección de detalles visuales"
    ]
  },
  "cafeparados": {
    title: "Café para Dos",
    description: "Café para Dos es un diseño de UI para una página de podcast, centrado en una interfaz limpia y atractiva para futuros contenidos de audio.",
    summary: "Una interfaz visualmente cuidada y moderna diseñada para albergar podcasts, con énfasis en la usabilidad y el diseño responsivo, preparada para la futura integración de contenidos.",
    client: "Proyecto Personal",
    role: "Diseño Frontend Completo (UI)",
    steps: [
      "Diseño de estructura visual sin contenido funcional",
      "Creación de estilos responsivos para diversos dispositivos",
      "Implementación de elementos de UI como listas, botones y reproductores simulados",
      "Optimización visual y pruebas de accesibilidad"
    ]
  },
  "concesionario": {
    title: "Concesionario Online",
    description: "Concesionario Online es una página de UI inspirada en el sitio web de Lamborghini pero dedicada a las motocicletas Honda. Este proyecto cuenta con contenido enriquecido y animaciones.",
    summary: "Un proyecto de UI de gran envergadura que simula un concesionario de motocicletas Honda, con una experiencia visual rica en contenido y animaciones, centrado en el rendimiento de escritorio.",
    client: "Proyecto Personal",
    role: "Diseño Frontend Completo (UI)",
    steps: [
      "Análisis y diseño basado en el sitio web de Lamborghini",
      "Implementación de estructura y contenido detallado",
      "Creación de animaciones personalizadas con CSS y JS",
      "Optimización de la experiencia en escritorio",
      "Ajustes visuales y pruebas"
    ]
  },
  "saviaclub": {
    title: "SaviaClub",
    description: "SaviaClub es una plataforma web diseñada para digitalizar y dar visibilidad a los negocios locales.",
    summary: "Una solución digital informativa y visualmente atractiva que conecta a los vecinos con los comercios locales, destacando sus servicios, horarios y promociones con un enfoque en la rapidez y facilidad de uso.",
    client: "Proyecto Profesional / Local",
    role: "Diseño y Desarrollo Frontend Integral",
    steps: [
      "Definición de arquitectura centrada en usuarios locales y SEO local",
      "Diseño de interfaz responsiva optimizada para consultas móviles rápidas",
      "Implementación de un catálogo visual para comercios y servicios",
      "Optimización del rendimiento para asegurar una navegación fluida en redes móviles",
      "Integración de canales de contacto directo (WhatsApp, mapas y llamadas)"
    ]
  },
  "gastronomia": {
    title: "Restaurante Gastronomía",
    description: "Diseño premium para un establecimiento gastronómico de alta gama, con una estética elegante en azul profundo y detalles dorados.",
    summary: "Una experiencia digital inmersiva que presenta el menú, el ambiente y la propuesta culinaria del restaurante, enfocada en atraer a los comensales a través de un diseño visual sofisticado.",
    client: "Proyecto Hostelería",
    role: "Diseño Visual y Desarrollo Frontend",
    steps: [
      "Conceptualización visual basada en una paleta Luxury Design (Azul y Oro)",
      "Maquetación del menú digital y secciones de platos estrella",
      "Diseño de galería fotográfica optimizada en alta resolución",
      "Implementación de sistemas de reserva y formularios de contacto",
      "Optimización de la fluidez visual y efectos de desplazamiento suave (smooth scroll)"
    ]
  },

  "atelier": {
    title: "Ambar Atelier",
    description: "Ecosistema digital premium orientado al sector del bienestar y la estética de lujo, definido por una dirección de arte minimalista y una arquitectura visual sofisticada.",
    summary: "Desarrollo de una plataforma inmersiva que prioriza la conversión mediante el uso estratégico del espacio negativo, tipografía editorial y una experiencia de usuario fluida. El proyecto destaca por su sistema de gestión de servicios y una galería interactiva optimizada para el rendimiento.",
    client: "Estudio de Estética Personalizado",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Dirección de arte basada en la estética 'Quiet Luxury' con paletas de colores orgánicos.",
      "Desarrollo de una arquitectura de componentes escalable y reutilizable.",
      "Ingeniería de interacción: implementación de scroll cinético y cursores personalizados.",
      "Optimización de Core Web Vitals para asegurar tiempos de carga ultra rápidos en dispositivos móviles.",
      "Integración de lógica de negocio para la gestión de reservas y selectores de servicios reactivos."
    ]
  },
  "axesteel": {
    title: "Axe & Steel",
    description: "Landing page de alta gama para Axe & Steel, una barbería a medida que fusiona la artesanía tradicional con una arquitectura visual moderna. El proyecto sigue una dirección de arte 'Industrial-Luxury'.",
    summary: "Construcción de una experiencia inmersiva en modo oscuro enfocada en la exclusividad. Mediante sutiles micro-interacciones, una jerarquía editorial impecable y un sistema de reservas optimizado, transformamos un sitio web de servicios en una extensión digital de la tienda física.",
    client: "Axe & Steel // Master Barber Studio",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Implementación de una paleta de colores basada en acero, cuero y madera (Quiet Luxury Industrial).",
      "Desarrollado con Astro para lograr un rendimiento de 100/100 en Core Web Vitals.",
      "Creación de un sistema de navegación y protocolos de cookies que refuerzan la identidad de marca.",
      "Diseño de una tabla de servicios editorial ('The Ledger') y una sección de contacto de estilo membresía premium.",
      "Implementación de scroll suave cinético y navegación móvil optimizada para interacción táctil de alta precisión."
    ]
  },

  // ===========================================================================================================
  // PROYECTOS DE FOTOGRAFÍA
  // ===========================================================================================================
  photography: {
    gallery_title: "Galería",
    tech_labels: {
      focal: "Distancia focal",
      aperture: "Apertura",
      iso: "ISO",
      camera: "Cámara",
      lens: "Objetivo"
    },
    sunsets: {
      title: "Atardeceres",
      description: "'Atardeceres' es un proyecto visual nacido de la necesidad de detener el tiempo en ese momento exacto en que el sol toca el horizonte y el cielo se convierte en un lienzo. Cada fotografía es un intento de capturar la calma, el fuego y la nostalgia que solo las puestas de sol pueden transmitir. Sin filtros, sin excesos: solo luz natural, colores sinceros y la belleza fugaz de un momento que nunca se repite."
    },
    nature: {
      title: "Naturaleza",
      description: "'Naturaleza' es un proyecto visual que surge del deseo de conectar con lo esencial, de mirar más allá del ruido y encontrar la belleza en lo simple. Cada imagen es un encuentro íntimo con la tierra: hojas que respiran, ramas que buscan el cielo, texturas que hablan en silencio. Sin artificios ni puestas en escena: solo la luz cayendo como cae, los colores tal cual son, y el pulso sereno de un mundo que florece sin pedir permiso."
    },
    architecture: {
      title: "Arquitectura",
      description: "'Arquitectura' es una exploración visual del espacio construido. Más allá de muros y formas, este proyecto busca capturar la relación entre el ser humano y las estructuras que habita, recorre o contempla. Cada imagen no solo documenta un lugar, sino que revela una atmósfera: geometría, luz, texturas, vacío y la escala que nos confronta o nos envuelve. Es un tributo a los espacios que, sin articular palabra, definen nuestras trayectorias."
    },
    me: { 
      title: "Mismo",
      description: "'Mismo' es un proyecto introspectivo donde el cuerpo y la expresión se convierten en lenguaje visual. No se trata solo de posar, sino de habitar la escena; de transmitir una historia sin hablar. Cada imagen es un reflejo de identidad, actitud y presencia; un diálogo entre el entorno y el yo que lo recorre. Desde la luz natural del bosque hasta el drama del blanco y negro, esta serie explora el elemento humano como medio tanto estético como emocional."
    },
    planes: {
      title: "Avistamiento de Aviones",
      description: "'Avistamiento de Aviones' es una colección dedicada a la observación paciente y apasionada de las aeronaves. Es un tributo a la intersección entre la ingeniería y el cielo, al rugido que rompe las nubes y a la elegancia de estructuras que parecen desafiar la gravedad con absoluta precisión. Cada fotografía captura un instante fugaz: el despegue, la aproximación o un viraje en el aire. Aquí, el cielo no es solo un fondo; es un escenario, y cada avión es el protagonista de un ballet mecánico y celestial."
    },
    motor: {
      title: "Motocicletas",
      description: "'Motocicletas' es una declaración de libertad sobre dos ruedas, un proyecto visual nacido del impulso de moverse, de explorar sin mapas y de sentir el asfalto como una extensión del alma. Cada fotografía captura ese momento en que la máquina y el paisaje se funden en un solo latido: curvas que abrazan montañas, motores rugiendo contra el viento y miradas perdidas en horizontes que prometen más. Aquí no hay destino, solo el camino. Es el arte de viajar sin prisa, dejando que la carretera dicte el ritmo y permitiendo que el silencio entre el casco y la mente hable más alto que cualquier palabra."
    },
  }
};