// en.ts
export default {
  nav: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    seeProjects: "See my projects",
    recommendations: "More",
    contact: "Contact",
  },
  settings: {
    settings: "Settings",
    language: "Language",
    downloadCV: "Download CV",
  },
  pages: {
    home: {
      title: "Art is also programmed",
      work: "Web Developer and Photographer",
      description:
        "I’m Eloy Lozano, a web developer and portrait photographer. I combine lines of code with visual sensitivity to create unique digital experiences.",
    },
    about: {
      title: "About Me",
      description:
        "My curiosity for technology is complemented by my passion for photography, allowing me to bring a detailed and creative approach to my projects. Photography gives me the chance to take a step back and observe the world from different angles, honing my ability to capture intricate details that often go unnoticed.\n\nWhen I’m not coding, I explore the world through my camera, capturing moments that tell a story, whether it’s a spontaneous street scene or the breathtaking beauty of natural landscapes.\n\nThese experiences fuel my designs, providing new perspectives and inspiration that I apply to my work in technology. The discipline and creativity I’ve developed through photography enhance my problem-solving skills, making me a more thoughtful and adaptable developer.",
    },
    exp: {
      title: "My Story",
      description: "From every experience, a lesson. From every project, a new vision. This is my evolution.",
      cards: [
        // {
        //   position: "Toll Collector",
        //   company: "Audasa",
        //   date: "July - September 2025",
        //   description: "Toll collector on the AP-9 highway",
        //   responsibilities: [
        //     "Cash management",
        //     "Station supervision",
        //     "Customer service",
        //   ],
        //   imgPath: "/images/experience/audasa.jpg",
        // },
        {
          position: "SAP Integration Developer",
          company: "Deloitte",
          date: "April 2025 - June 2025",
          description:
            "Participation in integration projects between systems using SAP Integration Suite (CPI). Designing iFlows, working with REST/SOAP APIs, JSON/XML formatting, and scripting with Groovy.",
          responsibilities: [],
          imgPath: "/images/experience/deloitte.png",
        },
        {
          position: "Toll Collector",
          company: "Audasa",
          date: "April 2025",
          description: "Toll collector on the AP-9 highway",
          responsibilities: [
            "Cash management",
            "Station supervision",
            "Customer service",
          ],
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Web Application Development",
          company: "Liceo La Paz",
          date: "September 2023 - March 2025",
          description: "",
          responsibilities: [
            "Full Stack development with Spring, Symfony, and React",
            "Handling SQL and noSQL databases",
            "Experience with version control using Git",
            "Knowledge of UI/UX, accessibility, and SEO",
            "Use of Docker for development environments",
          ],
          imgPath: "/images/experience/liceolapaz.jpg",
        },
        {
          position: "Toll Collector",
          company: "Audasa",
          date: "June - August 2024",
          description: "Toll collector on the AP-9 highway",
          responsibilities: [
            "Cash management",
            "Station supervision",
            "Customer service",
          ],
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Production Assistant",
          company: "Bambú Producciones",
          date: "June - September 2024",
          description: 'Production assistant for the Netflix documentary series: "The Asunta Case"',
          responsibilities: [],
          imgPath: "/images/experience/bambu.webp",
        },
        {
          position: "Toll Collector",
          company: "Audasa",
          date: "July - September 2023",
          description: "Toll collector on the AP-9 highway",
          responsibilities: [
            "Cash management",
            "Station supervision",
            "Customer service",
          ],
          imgPath: "/images/experience/audasa.jpg",
        },
        {
          position: "Microcomputer Systems and Networks",
          company: "Liceo La Paz",
          date: "September 2021 - March 2023",
          description: "",
          responsibilities: [
            "Installation and administration of computer systems",
            "Configuring various CMS such as Joomla!, WordPress, PrestaShop, and Moodle",
            "Skills in server management and configuration",
          ],
          imgPath: "/images/experience/liceolapaz.jpg",
        },
      ],
    },
    projects: {
      title: "My projects",
      nav: {
        all: "All",
        design: "Web Designs",
        webApp: "Web Apps",
        photos: "Photography",
      },
      buttons: {
        live: "Live Demo",
        github: "Github",
        view: "Go to project",
      }
    },
    stack: {
      title: "My stack",
      backend: "BackEnd",
      frontend: "FrontEnd",
      design: "Design",
      data: "Data",
    },
    recomendations: {
      title: "Recommendations",
      monica: {
        text: "He stands out for his technical curiosity, ability to adapt to new technologies and commitment to each project. You have a clearly professional profile.",
        relationship: "Teacher",
      },
      dani: {
        text: "Working with Eloy was always a smooth experience. He is someone I trust, with whom I connected from the beginning and who knows how to make difficult things easy.",
        relationship: "Classmate",
      },
      miguel: {
        text: "He is a developer with initiative, decisive and a good communicator. You know how to combine the technical side with design.",
        relationship: "Classmate",
      },
    },
    contact: {
      title: "Contact",
      description:{
        text01:"Contact me at any time at", 
        text02:"or find me at", 
        text03:"I am ready to collaborate with you!", 
      },
      form: {
        name: {
          label: "Name",
          placeholder: "Write your Name",
        },
        email: {
          label: "Email",
          placeholder: "Write your Email",
        },
        message: {
          label: "Message",
          placeholder: "Let your message...",
        },
        button: "Send",
      },
    }
  },
};

