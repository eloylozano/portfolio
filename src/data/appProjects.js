export default [
  {
    slug: "deskify",
    title: "Deskify",
    figmaLink:
      "https://www.figma.com/design/IywhHRYRhl8vipgPrpIJC8/deskify?node-id=36-3&t=0olSM0eW4whsADt0-1",
    demoLink: "https://deskify-web.vercel.app",
    gitLink: "https://github.com/eloylozano/deskify",
    description:
      "Deskify was born from a simple question: what if the digital space could feel as comfortable as the physical one? It is an idea that grew between lines of code and long coffees, between tests, errors and obsession for detail. A project that does not seek to dazzle with complexity, but with balance. With each click, Deskify tries to make the everyday simpler, the functional more beautiful and that corner where we spend so many hours more yours: the desktop. This is not just design or just development. It's a way of ordering chaos.",
    coverImage: "/images/projects/app_deskify.jpg",
    gallery: [
      "/images/projects/app/deskify/Picture5.png",
      "/images/projects/app/deskify/Picture3.png",
      "/images/projects/app/deskify/Picture4.jpg",
      "/images/projects/app/deskify/Picture1.jpg",
    ],
    tech: ["Astro", "Svelte", "Spring", "MySQL"],

    mainFeatures: {
      text: "Deskify is a web application developed to optimize technical support management in enterprise environments. Through an intuitive and customizable ticketing system, it improves communication between users and agents, centralizes incident resolution and provides more efficient workflow control. It is designed to scale easily, adapt to different roles within an organization and provide useful tools at both the operational and analytical levels. Deskify's main features:",
      functions: [
        "Ticket management: Creation, edition, follow-up and closing of incidents.",
        "Roles and permissions system: Access control according to profile (admin, agent, manager, supervisor, user).",
        "Comments and answers: Direct communication between users and agents within the ticket.",
        "Status and priorities: Classification of tickets according to urgency and progress.",
        "Real-time Dashboard: Visualization of key statistics such as number of open tickets, average resolution time or performance per agent.",
        "API REST: Integration with external platforms and process automation.",
        "Responsive and intuitive interface: Adapted for easy use from any device.",
        "User management: Simple user registration, deletion and modification of profiles.",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    logo: "/images/projects/app/deskify/logo.png",

    app: {
      text: "Deskify is a Single Page Application developed with Svelte, TypeScript and Vite, designed to offer a fluid and minimalist experience in managing personal digital space. It integrates TailwindCSS for a clean and responsive design, and uses React Router for instant navigation without reloads. Features include widget customization, shortcut organization and integrated productivity tools, all designed to transform the desktop into a functional, aesthetic and user-centric environment. Deskify not only organizes, it reinterprets the way we interact with our daily digital space.",
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
      text: "Deskify's landing page is developed with Astro, taking advantage of its speed-oriented architecture and web optimization. Thanks to Astro, the page loads ultra-fast and generates static content with SEO optimized from the first render, ideal for engaging users without sacrificing experience. The integration with React components allows to maintain a modern and dynamic aesthetic, while TailwindCSS provides a clean and responsive design. This landing page is the perfect gateway to introduce Deskify, combining performance, style and accessibility in a light and engaging experience.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },

    back: {
      text: "Deskify's backend is built with Spring Boot, following a modular and secure architecture. It implements JWT (JSON Web Tokens) for user authentication and authorization, ensuring secure and stateless sessions. The RESTful API manages functionalities such as registration, login, and desktop customization, maintaining seamless communication with the frontend. Data persistence is handled with JPA and a PostgreSQL database, ensuring integrity and scalability. The entire system is designed to be robust, efficient and easily extendable, allowing for future integrations or enhancements without compromising stability.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
  },
  {
    slug: "bitten-apol",
    title: "Bitten Apol",
    demoLink: "https://bitten-apol-gamma.vercel.app/",
    gitLink: "https://github.com/eloylozano/bitten-apol-Web",
    description:
      "BittenApol is an e-commerce platform with a robust administrative panel and an intuitive web client. The admin panel allows you to manage products, users, roles and orders, with protected paths and a clean and responsive interface. The web client makes it easy for users to browse products, manage the cart, complete the purchase and integrate Google login.",
    coverImage: "/images/projects/app_deskify.jpg",
    gallery: [
      "/images/projects/app_bitten-apol.jpg",
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
      text: "BittenApol offers a complete solution for e-commerce management, with integrated administrative panel and web client. Some outstanding functionalities include:",
      functions: [
        "Product management: create, edit and delete products.",
        "User and role management with permission-based access.",
        "Order tracking and status updates.",
        "Protected administrative routes with authentication and roles.",
        "Clean, responsive and easy to use interface in both admin and client.",
        "Shopping cart with add and remove products.",
        "Auto-completed sending address based on user data.",
        "Integrated Google login for added convenience.",
        "Checkout flow (under development).",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },

    logo: "/images/projects/app/bittenapol/logo.png",

    app: {
      text: `
      BittenApol's web client is built with Next.js and React using TypeScript for a fast and smooth experience. It integrates MongoDB for user and data management, authentication via Google OAuth, and uses React Context API for cart and user state management. The design is based on Tailwind CSS to maintain a modern and responsive interface.
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
      The administrative panel is powered by Next.js API Routes for the backend, using MongoDB with Mongoose as database. Authentication is handled with JWT or sessions (NextAuth), ensuring protected routes with roles and permissions.  It allows complete management of products, users, orders and roles in a secure and efficient interface.
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
