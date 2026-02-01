// es.ts
export default {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    seeProjects: "Ver mis proyectos",
    projects: "Proyectos",
    recommendations: "Más",
    contact: "Contacto",
  },
  settings: {
    settings: "Configuración",
    language: "Idioma",
    downloadCV: "Descargar CV",
  },
  pages: {
    home: {
      title: "El arte también se programa",
      work: "Eloy Lozano desarrollador web y fotógrafo",
      description:
        "Combino líneas de código con sensibilidad visual para crear experiencias digitales únicas.",
    },
    about: {
      title: "Sobre mí",
      description:
        "Mi curiosidad por la tecnología se complementa con mi pasión por la fotografía, lo que me permite aportar un enfoque detallado y creativo a mis proyectos. La fotografía me brinda la oportunidad de tomar distancia y observar el mundo desde distintos ángulos, perfeccionando mi capacidad para captar detalles que a menudo pasan desapercibidos.\n\nCuando no estoy programando, exploro el mundo con mi cámara, capturando momentos que cuentan una historia, ya sea una escena callejera espontánea o la belleza sobrecogedora de un paisaje natural.\n\nEstas experiencias nutren mis diseños, aportando nuevas perspectivas e inspiración que aplico a mi trabajo en tecnología. La disciplina y creatividad que he desarrollado a través de la fotografía enriquecen mis habilidades de resolución de problemas, haciéndome un desarrollador más reflexivo y adaptable.",
    },
    exp: {
      title: "Mi trayectoria",
      description: "De cada experiencia, una lección. De cada proyecto, una nueva visión. Esta es mi evolución.",
      cards: [
        {
          position: "Desarrollador Full Stack",
          company: "Dixitalia Software",
          date: "Enero 2026 - Actualidad",
          description: "Desarrollo de un CRM empresarial a medida.",
          responsibilities: [
            "Desarrollo Full Stack con Laravel y Angular",
            "Gestión de base de datos y lógica de negocio",
            "Mejora de procesos internos en CRM propio",
            "Diseño e implementación de APIs REST"
          ],
          alt:"Logo de Dixitalia",
          imgPath: "/images/experience/dixitalia.png",
        },

        {
          position: "Big Data & IA",
          company: "IES San Clemente",
          date: "Septiembre 2025 - Junio 2026",
          description: "",
          responsibilities: [
            "Modelos, algoritmos y programación de IA",
            "Sistemas de Big Data",
            "Gestión y administración de sistemas automatizados",
            "Aplicaciones prácticas de IA y Big Data en empresas",
            "Transformación digital y uso estratégico de datos",
          ],
          alt:"Logo de la Xunta",
          imgPath: "/images/experience/logoxunta.png",
        },
        {
          position: "Técnico de CAU",
          company: "Audasa",
          date: "Julio - Septiembre 2025",
          description: "Técnico de CAU en la AP-9",
          responsibilities: [
            "Control de incidencias",
            "Supervisión de estación",
            "Atención al cliente",
          ],
          alt:"Logo de Audasa",
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Desarrollador de Integración SAP",
          company: "Deloitte",
          date: "Abril 2025 - Junio 2025",
          description:
            "Participación en proyectos de integración entre sistemas usando SAP Integration Suite (CPI). Diseño de iFlows, trabajo con APIs REST/SOAP, formato JSON/XML y scripting con Groovy.",
          responsibilities: [],
          alt:"Logo de Deloitte",
          imgPath: "/images/experience/deloitte.png",
        },
        {
          position: "Técnico de CAU",
          company: "Audasa",
          date: "Abril 2025",
          description: "Técnico de CAU en la AP-9",
          responsibilities: [
            "Control de incidencias",
            "Supervisión de estación",
            "Atención al cliente",
          ],
          alt:"Logo de Audasa",
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Desarrollo de Aplicaciones Web",
          company: "Liceo La Paz",
          date: "Septiembre 2023 - Marzo 2025",
          description: "",
          alt:"Logo de Liceo La Paz",
          responsibilities: [
            "Desarrollo Full Stack con Spring, Symfony y React",
            "Manejo de bases de datos SQL y noSQL",
            "Experiencia con control de versiones usando Git",
            "Conocimientos de UI/UX, accesibilidad y SEO",
            "Uso de Docker para entornos de desarrollo",
          ],
          imgPath: "/images/experience/liceolapaz.jpg",
        },
        {
          position: "Técnico de CAU",
          company: "Audasa",
          date: "Junio - Agosto 2024",
          description: "Técnico de CAU en la AP-9",
          responsibilities: [
            "Control de incidencias",
            "Supervisión de estación",
            "Atención al cliente",
          ],
          alt:"Logo de Audasa",
          imgPath: "/images/experience/audasa.jpg",
        },
        // {
        //   position: "Asistente de producción",
        //   company: "Bambú Producciones",
        //   date: "Junio - Septiembre 2024",
        //   description: 'Asistente de producción en la serie documental de Netflix: "El caso Asunta"',
        //   responsibilities: [],
        //   imgPath: "/images/experience/bambu.webp",
        // },
        {
          position: "Cobrador de peaje",
          company: "Audasa",
          date: "Julio - Septiembre 2023",
          description: "Cobrador de peaje en la autopista AP-9",
          responsibilities: [
            "Gestión de caja",
            "Supervisión de estación",
            "Atención al cliente",
          ],
          alt:"Logo de Audasa",
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Técnico de Soporte N1",
          company: "Infonet",
          date: "Marzo 2023 - Junio 2023",
          description: "",
          responsibilities: [
            "Resolución de incidencias con Freshdesk",
            "Gestión de recursos con NextCloud",
            "Creación de informes y paneles en PowerBI",
          ],
          alt:"Logo de Infonet",
          imgPath: "/images/experience/infonet.png",
        },
        {
          position: "Sistemas Microinformáticos y Redes",
          company: "Liceo La Paz",
          date: "Septiembre 2021 - Marzo 2023",
          description: "",
          responsibilities: [
            "Instalación y administración de sistemas informáticos",
            "Configuración de distintos CMS como Joomla!, WordPress, PrestaShop y Moodle",
            "Habilidades en administración y configuración de servidores",
          ],
          
          alt:"Logo de Liceo La Paz",
          imgPath: "/images/experience/liceolapaz.jpg",
        },
      ],
    },
    projects: {
      title: "Mis proyectos",
      nav: {
        all: "Todos",
        design: "Diseños Web",
        webApp: "Aplicaciones Web",
        photos: "Fotografía",
      },
      buttons: {
        live: "Visitar web",
        github: "Github",
        view: "Ver proyecto",
      },
      comingSoon: "Próximamente",
    },
    stack: {
      title: "Mi stack",
      backend: "BackEnd",
      frontend: "FrontEnd",
      design: "Diseño",
      data: "Datos",
    },
    recomendations: {
      title: "Recomendaciones",
      monica: {
        text: "Destaca por su participación activa, interés y curiosidad por los temas tratados, así como por su creatividad y capacidad de liderazgo en proyectos grupales.",
        relationship: "Docente - Liceo La Paz",
      },
      dani: {
        text: "Trabajar con Eloy siempre fue una experiencia fluida. Es alguien en quien confío, con quien conecté desde el principio y que sabe hacer fácil lo difícil.",
        relationship: "Compañero - DAW",
      },
      miguel: {
        text: "Es un desarrollador con iniciativa, resolutivo y buen comunicador. Sabe combinar el lado técnico con el diseño.",
        relationship: "Compañero - DAW",
      },
    },
    contact: {
      title: "Contacto",
      description: {
        text01: "Contáctame en cualquier momento en",
        text02: "o encuéntrame en",
        text03: "¡Estoy listo para colaborar contigo!",
      },
      form: {
        name: {
          label: "Nombre",
          placeholder: "Escribe tu nombre",
        },
        email: {
          label: "Correo electrónico",
          placeholder: "Escribe tu correo",
        },
        message: {
          label: "Mensaje",
          placeholder: "Déjame tu mensaje...",
        },
        button: "Enviar",
      },
    },
  },
};
