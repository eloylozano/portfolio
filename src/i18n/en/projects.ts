// src/i18n/en/projects.ts

export const projects_data = {

  // ===========================================================================================================
  // AI DATA PROJECTS
  // ===========================================================================================================
  viarisk: {
    title: "ViaRisk",
    description: "ViaRisk is not just a map; it is a glimpse into the future of road safety. The project was created with the aim of transforming historical accident data into preventive tools through the use of machine learning. Using an advanced classification model, ViaRisk analyses temporal, climatic and geographical variables to identify risk patterns. It is the union between data science and public safety, designed to help understand not only where accidents have occurred, but under what conditions a fatality is most likely to occur.",
    tryModel: "Test Model",
    sections: {
      model: "Model Architecture",
      dataset: "Dataset and Training",
      deployment: "Deployment and APII"
    },
    content: {
      model_text: "The heart of ViaRisk is a machine learning model based on XGBoost, trained with SMOTE balancing techniques. The backend is built with FastAPI and served by Uvicorn within a Docker container, providing a lightweight and extremely fast architecture to serve predictions in any environment.",
      dataset_text: "ViaRisk is an intelligent ecosystem that processes large volumes of road accident data to provide accurate predictions and interactive visualisations. Through an optimised machine learning pipeline and containerised infrastructure, the platform allows real-time risk assessment based on dynamic conditions",
      deployment_text: "Deployment is carried out using modern infrastructure that guarantees scalability. The model is served through a REST API that allows for quick queries, facilitating integration with interactive dashboards and early warning systems."
    }
  },


  // ===========================================================================================================
  // APP PROJECTS
  // ===========================================================================================================
  deskify: {
    slug: "deskify",
    title: "Deskify",
    description:
      "Deskify was born from a simple question: what if digital spaces could feel as comfortable as physical ones? It is an idea that grew between lines of code and long coffees, through trial, error, and an obsession with detail. A project that doesn't seek to dazzle with complexity, but with balance. With every click, Deskify tries to simplify the everyday, make the functional beautiful, and make that corner where we spend so many hours—the desktop—truly yours. This isn't just design or development; it's a way of bringing order to chaos.",
    alt: "Deskify cover image",
    mainFeatures: {
      text: "Deskify is a web application developed to optimize technical support management in business environments. Through an intuitive and customizable ticketing system, it improves communication between users and agents, centralizes incident resolution, and provides more efficient workflow control. It is designed to scale easily, adapt to different roles within an organization, and provide useful tools at both operational and analytical levels. Key features of Deskify:",
      functions: [
        "Ticket Management: Creation, editing, tracking, and closure of incidents.",
        "Roles and Permissions System: Access control based on profiles (admin, agent, manager, supervisor, user).",
        "Comments and Responses: Direct communication between users and agents within the ticket.",
        "Status and Priorities: Classification of tickets according to urgency and progress.",
        "Real-time Dashboard: Visualization of key statistics such as open tickets, average resolution time, or agent performance.",
        "REST API: Integration with external platforms and process automation.",
        "Responsive and Intuitive Interface: Adapted for ease of use across all devices.",
        "User Management: Simple registration, removal, and modification of user profiles.",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    app: {
      text: "Deskify is a Single Page Application developed with Svelte, TypeScript, and Vite, designed to offer a fluid and minimalist experience in personal digital space management. It integrates TailwindCSS for a clean, responsive design and uses optimized routing for instant, no-reload navigation. Its features include widget customization, shortcut organization, and built-in productivity tools—all designed to transform the desktop into a functional, aesthetic, and user-centered environment. Deskify doesn't just organize; it reinterprets how we interact with our daily digital space.",
    },
    front: {
      text: "The Deskify landing page is built with Astro, leveraging its speed-oriented architecture and web optimization. Thanks to Astro, the page loads ultra-fast and generates SEO-optimized static content from the first render, ideal for engaging users without sacrificing experience. Integration with React components allows for a modern and dynamic aesthetic, while TailwindCSS provides a clean and responsive design. This landing page is the perfect gateway to present Deskify, combining performance, style, and accessibility in a lightweight and attractive experience.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },
    back: {
      text: "The Deskify backend is built with Spring Boot, following a modular and secure architecture. It implements JWT (JSON Web Tokens) for user authentication and authorization, ensuring secure, stateless sessions. The RESTful API manages functionalities such as registration, login, and desktop customization, maintaining fluid communication with the frontend. Data persistence is handled with JPA and a PostgreSQL database, ensuring integrity and scalability. The entire system is designed to be robust, efficient, and easily expandable, allowing for future integrations or improvements without compromising stability.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
    featured: true
  },
  "bitten-apol": {
    slug: "bitten-apol",
    title: "Bitten Apol",
    description:
      "BittenApol is an e-commerce platform featuring a robust administration panel and an intuitive web client. The admin dashboard allows for the management of products, users, roles, and orders, featuring protected routes and a clean, responsive interface. The web client enables users to browse products seamlessly, manage their shopping cart, complete purchases, and benefit from integrated Google Login.",
    alt: "Bitten Apol cover image",
    mainFeatures: {
      text: "BittenApol offers a comprehensive solution for e-commerce management, with an integrated administrative panel and web client. Key features include:",
      functions: [
        "Product Management: Create, edit, and delete products.",
        "User and Role Management: Permission-based access control.",
        "Order Tracking: Real-time status updates and monitoring.",
        "Protected Admin Routes: Secured via authentication and role-based access.",
        "Clean & Responsive Interface: Optimized for ease of use across both admin and client sides.",
        "Shopping Cart: Fully functional add and remove product capabilities.",
        "Autofill Shipping: Address management based on user profile data.",
        "Google OAuth: Integrated login for a seamless user experience.",
        "Checkout Flow: (Currently under development).",
      ],
      image: "/images/projects/app/bittenapol/mockup.png",
    },
    app: {
      text: "The BittenApol web client is built with Next.js and React using TypeScript for a fast and fluid experience. It integrates MongoDB for user and data management, authentication via Google OAuth, and utilizes the React Context API for shopping cart and user state management. The design leverages Tailwind CSS to maintain a modern and responsive interface.",
    },
    back: {
      text: "The administrative panel is powered by Next.js API Routes for the backend, using MongoDB with Mongoose as the database. Authentication is handled with JWT or sessions (NextAuth), ensuring routes are protected with specific roles and permissions. It allows for complete management of products, users, orders, and roles within a secure and efficient interface.",
    },
    featured: false
  },



  // ===========================================================================================================
  // WEB PROJECTS
  // ===========================================================================================================
  "pawtopia": {
    title: "Pawtopia",
    description: "A solidarity platform to promote responsible adoption and connect animals with new homes.",
    summary: "Pawtopia is an initiative born in a small local shelter that has evolved into a leading community for responsible adoptions. The site gives visibility to animals for adoption, facilitates connections with foster homes, and promotes educational and charitable campaigns.",
    client: "Non-profit",
    role: "UX/UI Design + Frontend Development",
    steps: [
      "Definition of social and functional objectives",
      "Research of similar platforms",
      "Design of wireframes and information architecture",
      "Prototyping in Figma focusing on usability and accessibility",
      "Frontend development with deployment on Vercel"
    ]
  },
  "ecovibe": {
    title: "EcoVibe",
    description: "The Green Essence: creating ecological awareness through recycled and sustainable products.",
    summary: "EcoVibe is an organization dedicated to material reuse and the promotion of sustainable habits. It builds a global community committed to planet care through awareness, recycling, and environmental innovation.",
    client: "Personal Project",
    role: "UI/UX Design",
    steps: [
      "Definition of ecological identity and core messaging",
      "Content development for awareness and brand philosophy",
      "Responsive design in Figma with component-based structure",
      "Accessible web implementation with sustainable practices"
    ]
  },
  "appfluence": {
    title: "AppFluence",
    description: "AppFluence is a podcast dedicated to empowering front-end development with updated content, interviews, and essential resources for web developers.",
    summary: "AppFluence offers episodes on tools, frameworks, responsive design, accessibility, and UX/UI, providing notes and links to facilitate learning for web developers.",
    client: "Personal Project",
    role: "Frontend Design & Development, Multimedia Integration",
    steps: [
      "Content planning and podcast structure",
      "Responsive design centered on accessibility",
      "Native Spotify integration for direct playback",
      "Implementation of simple anchor-based navigation and contact form",
      "Development of a past episodes gallery for easy access"
    ]
  },
  "lenslegacy": {
    title: "LensLegacy",
    description: "LensLegacy is a stock photography platform that allows downloading images in different sizes and licenses. Built with HTML, CSS, and JavaScript, focusing on a clear and accessible visual experience.",
    summary: "LensLegacy offers a modern stock photo gallery where users can explore, filter, and download images by size and license. The design is optimized for speed, usability, and aesthetics.",
    client: "Personal Project",
    role: "Complete Frontend Design and Development",
    steps: [
      "Definition of structure and download flow by license",
      "Visual design focused on photographic presentation",
      "Responsive development adapted to multiple devices",
      "Implementation of filters by category and resolution",
      "Image load optimization and user experience enhancement"
    ]
  },
  "flightsim": {
    title: "FlightSimulator",
    description: "FlightSimulator is a landing page dedicated to the FS2020 video game, including a photo gallery, reviews, and system requirements.",
    summary: "An informative and visually attractive page showcasing game images, reviews, and technical requirements to play FS2020, focused on providing clear and fast information.",
    client: "Personal Project",
    role: "Complete Frontend Design and Development",
    steps: [
      "Structure and planning of key content (gallery, reviews, requirements)",
      "Responsive design for mobile and desktop devices",
      "Image gallery integration with visual effects",
      "Loading optimization for better performance",
      "Usability testing and visual detail correction"
    ]
  },
  "cafeparados": {
    title: "Café para Dos",
    description: "Café para Dos is a UI design for a podcast page, focusing on a clean and attractive interface for future audio content.",
    summary: "A visually curated and modern interface designed to host podcasts, with an emphasis on usability and responsive design, prepared for future content integration.",
    client: "Personal Project",
    role: "Complete Frontend Design (UI)",
    steps: [
      "Visual structure design without functional content",
      "Creation of responsive styles for various devices",
      "Implementation of UI elements such as lists, buttons, and simulated players",
      "Visual optimization and accessibility testing"
    ]
  },
  "concesionario": {
    title: "Online Dealership",
    description: "Online Dealership is a UI page inspired by the Lamborghini website but dedicated to Honda motorcycles. This project features rich content and animations.",
    summary: "A major UI project simulating a Honda motorcycle dealership, with a visual experience rich in content and animations, focusing on desktop performance.",
    client: "Personal Project",
    role: "Complete Frontend Design (UI)",
    steps: [
      "Analysis and design based on the Lamborghini website",
      "Implementation of detailed structure and content",
      "Creation of custom animations with CSS and JS",
      "Desktop experience optimization",
      "Visual adjustments and testing"
    ]
  },
  "saviaclub": {
    title: "SaviaClub",
    description: "SaviaClub is a web platform designed to digitize and provide visibility to local businesses.",
    summary: "An informative and visually attractive digital solution that connects neighbors with local shops, highlighting their services, hours, and promotions with a focus on speed and ease of use.",
    client: "Professional / Local Project",
    role: "Integral Frontend Design and Development",
    steps: [
      "Architecture definition focused on local users and local SEO",
      "Responsive interface design optimized for quick mobile queries",
      "Implementation of a visual catalog for shops and services",
      "Performance optimization to ensure smooth navigation on mobile networks",
      "Integration of direct contact channels (WhatsApp, maps, and calls)"
    ]
  },
  "gastronomia": {
    title: "Gastronomía Restaurant",
    description: "Premium design for a high-end gastronomic establishment, featuring an elegant deep blue aesthetic with gold details.",
    summary: "An immersive digital experience presenting the menu, atmosphere, and culinary proposal of the restaurant, focused on attracting diners through sophisticated visual design.",
    client: "Hospitality Project",
    role: "Visual Design and Frontend Development",
    steps: [
      "Visual conceptualization based on a Luxury Design palette (Blue & Gold)",
      "Layout of the digital menu and star dish sections",
      "High-resolution optimized photo gallery design",
      "Implementation of reservation systems and contact forms",
      "Optimization of visual fluidity and smooth scroll effects"
    ]
  },

  "atelier": {
    title: "Ambar Atelier",
    description: "Premium digital ecosystem oriented towards the luxury wellness and aesthetics sector, defined by minimalist art direction and sophisticated visual architecture.",
    summary: "Development of an immersive platform that prioritizes conversion through the strategic use of negative space, editorial typography, and a fluid user experience. The project stands out for its service management system and performance-optimized interactive gallery.",
    client: "Bespoke Aesthetics Studio",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Art direction based on 'Quiet Luxury' aesthetics with organic color palettes.",
      "Development of a scalable and reusable component architecture.",
      "Interaction engineering: implementation of kinetic scroll and custom cursors.",
      "Core Web Vitals optimization to ensure ultra-fast loading times on mobile devices.",
      "Business logic integration for reservation management and reactive service selectors."
    ]
  },
  "axesteel": {
    title: "Axe & Steel",
    description: "High-end landing for Axe & Steel, a bespoke barbershop merging traditional craftsmanship with modern visual architecture. The project follows an 'Industrial-Luxury' art direction.",
    summary: "Construction of an immersive dark-mode experience focused on exclusivity. Using subtle micro-interactions, impeccable editorial hierarchy, and an optimized booking system, we transformed a service website into a digital extension of the physical shop.",
    client: "Axe & Steel // Master Barber Studio",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Implementation of a color palette based on steel, leather, and wood (Quiet Luxury Industrial).",
      "Developed with Astro to achieve 100/100 performance in Core Web Vitals.",
      "Creation of a navigation system and cookie protocols that reinforce brand identity.",
      "Design of an editorial service table ('The Ledger') and a premium membership-style contact section.",
      "Implementation of kinetic smooth scroll and mobile navigation optimized for high-precision touch interaction."
    ]
  },

  // ===========================================================================================================
  // PHOTOGRAPHY PROJECTS
  // ===========================================================================================================
  photography: {
    gallery_title: "Gallery",
    tech_labels: {
      focal: "Focal distance",
      aperture: "Aperture",
      iso: "ISO",
      camera: "Camera",
      lens: "Lens"
    },
    sunsets: {
      title: "Sunsets",
      description: "'Sunsets' is a visual project born from the need to stop time at that exact moment when the sun touches the horizon and the sky becomes a canvas. Each photograph is an attempt to capture the calm, the fire, and the nostalgia that only sunsets can convey. No filters, no excesses—just natural light, sincere colors, and the fleeting beauty of a moment that never repeats."
    },
    nature: {
      title: "Nature",
      description: "'Nature' is a visual project arising from the desire to connect with the essential, to look beyond the noise and find beauty in the simple. Each image is an intimate encounter with the earth: leaves that breathe, branches reaching toward the sky, textures that speak in silence. No artifice, no staging—just light falling as it falls, colors as they are, and the serene pulse of a world that blooms without asking permission."
    },
    architecture: {
      title: "Architecture",
      description: "'Architecture' is a visual exploration of built space. Beyond walls and forms, this project seeks to capture the relationship between human beings and the structures they inhabit, traverse, or contemplate. Each image not only documents a place but also reveals an atmosphere: geometry, light, textures, emptiness, and the scale that either confronts or envelops us. It is a tribute to the spaces that, without uttering a word, define our trajectories."
    },
    me: { 
      title: "Myself",
      description: "'Myself' is an introspective project where the body and expression become a visual language. It is not just about posing, but about inhabiting the scene—conveying a story without speaking. Each image is a reflection of identity, attitude, and presence; a dialogue between the environment and the self that traverses it. From the natural light of the forest to the drama of black and white, this series explores the human element as both an aesthetic and emotional medium."
    },
    planes: {
      title: "Plane Spotting",
      description: "'Plane Spotting' is a collection dedicated to the patient and passionate observation of aircraft. It is a tribute to the intersection of engineering and the sky, to the roar that breaks the clouds, and to the elegance of structures that seem to defy gravity with absolute precision. Each photograph captures a fleeting moment: takeoff, approach, or a turn in the air. Here, the sky is not just a backdrop; it is a stage, and every plane is the protagonist of a mechanical and celestial ballet."
    },
    motor: {
      title: "Motorcycles",
      description: "'Motorcycles' is a declaration of freedom on two wheels, a visual project born from the urge to move, to explore without maps, and to feel the asphalt as an extension of the soul. Each photograph captures that moment when the machine and the landscape merge into a single heartbeat: curves that embrace mountains, engines roaring against the wind, and gazes lost in horizons that promise more. There is no destination here, only the journey. It is the art of traveling without haste, letting the road dictate the rhythm and allowing the silence between the helmet and the mind to speak louder than any word."
    },
  }
};