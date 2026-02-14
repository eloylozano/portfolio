// src/i18n/de/projects.ts

export const projects_data = {

  // ===========================================================================================================
  // KI- / DATENPROJEKTE
  // ===========================================================================================================
  viarisk: {
    title: "ViaRisk",
    description: "ViaRisk ist nicht nur eine Karte; es ist ein Blick in die Zukunft der Verkehrssicherheit. Das Projekt entstand mit dem Ziel, historische Unfalldaten mithilfe von maschinellem Lernen (Machine Learning) in präventive Werkzeuge zu verwandeln. Durch ein fortschrittliches Klassifizierungsmodell analysiert ViaRisk zeitliche, klimatische und geografische Variablen, um Risikomuster zu identifizieren. Es ist die Verbindung von Datenwissenschaft und öffentlicher Sicherheit, entwickelt, um nicht nur zu verstehen, wo Unfälle passiert sind, sondern unter welchen Bedingungen ein tödlicher Unfall am wahrscheinlichsten ist.",
    tryModel: "Modell testen",
    sections: {
      model: "Modellarchitektur",
      dataset: "Datensatz und Training",
      deployment: "Bereitstellung und API"
    },
    content: {
      model_text: "Das Herzstück von ViaRisk ist ein Machine-Learning-Modell auf Basis von XGBoost, das mit SMOTE-Balancing-Techniken trainiert wurde. Das Backend wurde mit FastAPI erstellt und wird von Uvicorn in einem Docker-Container bereitgestellt, was eine leichtgewichtige und extrem schnelle Architektur für Vorhersagen in jeder Umgebung bietet.",
      dataset_text: "ViaRisk ist ein intelligentes Ökosystem, das große Mengen an Verkehrsunfalldaten verarbeitet, um präzise Vorhersagen und interaktive Visualisierungen zu liefern. Durch eine optimierte Machine-Learning-Pipeline und eine containerisierte Infrastruktur ermöglicht die Plattform eine Risikobewertung in Echtzeit basierend auf dynamischen Bedingungen.",
      deployment_text: "Die Bereitstellung erfolgt über eine moderne Infrastruktur, die Skalierbarkeit garantiert. Das Modell wird über eine REST-API bereitgestellt, die schnelle Abfragen ermöglicht und die Integration in interaktive Dashboards und Frühwarnsysteme erleichtert."
    }
  },


  // ===========================================================================================================
  // ANWENDUNGSPROJEKTE
  // ===========================================================================================================
  deskify: {
    slug: "deskify",
    title: "Deskify",
    description:
      "Deskify entstand aus einer einfachen Frage: Was wäre, wenn sich digitale Räume so behaglich anfühlen könnten wie physische? Es ist eine Idee, die zwischen Codezeilen und langen Kaffeestunden gewachsen ist, durch Versuch und Irrtum und eine Besessenheit für Details. Ein Projekt, das nicht durch Komplexität beeindrucken will, sondern durch seine Balance. Mit jedem Klick versucht Deskify, den Alltag zu vereinfachen, das Funktionale ästhetisch zu gestalten und den Ort, an dem wir so viele Stunden verbringen – den Schreibtisch – wirklich zu Ihrem zu machen. Dies ist nicht nur Design oder Entwicklung; es ist ein Weg, Ordnung in das Chaos zu bringen.",
    alt: "Deskify Cover-Bild",
    mainFeatures: {
      text: "Deskify ist eine Webanwendung, die zur Optimierung des technischen Support-Managements in Geschäftsumgebungen entwickelt wurde. Durch ein intuitives und anpassbares Ticket-System verbessert es die Kommunikation zwischen Benutzern und Agenten, zentralisiert die Störungsbehebung und bietet eine effizientere Workflow-Kontrolle. Es ist auf einfache Skalierbarkeit ausgelegt und bietet nützliche Werkzeuge auf operativer und analytischer Ebene. Hauptmerkmale von Deskify:",
      functions: [
        "Ticket-Management: Erstellung, Bearbeitung, Verfolgung und Abschluss von Vorfällen.",
        "Rollen- und Berechtigungssystem: Zugriffskontrolle basierend auf Profilen (Admin, Agent, Manager, Supervisor, Benutzer).",
        "Kommentare und Antworten: Direkte Kommunikation zwischen Benutzern und Agenten innerhalb des Tickets.",
        "Status und Prioritäten: Klassifizierung von Tickets nach Dringlichkeit und Fortschritt.",
        "Echtzeit-Dashboard: Visualisierung wichtiger Statistiken wie offene Tickets, durchschnittliche Lösungszeit oder Agentenleistung.",
        "REST API: Integration mit externen Plattformen und Prozessautomatisierung.",
        "Responsive & intuitive Benutzeroberfläche: Optimiert für die einfache Nutzung auf allen Geräten.",
        "Benutzerverwaltung: Einfache Registrierung, Löschung und Änderung von Benutzerprofilen.",
      ],
      image: "/images/projects/app/deskify/mockup.png",
    },
    app: {
      text: "Deskify ist eine Single Page Application, die mit Svelte, TypeScript und Vite entwickelt wurde, um eine flüssige und minimalistische Erfahrung bei der Verwaltung des persönlichen digitalen Raums zu bieten. Sie integriert TailwindCSS für ein sauberes Design und nutzt optimiertes Routing für sofortige Navigation ohne Neuladen. Zu den Funktionen gehören die Anpassung von Widgets, die Organisation von Verknüpfungen und integrierte Produktivitätswerkzeuge. Deskify organisiert nicht nur; es interpretiert neu, wie wir mit unserem täglichen digitalen Raum interagieren.",
    },
    front: {
      text: "Die Deskify Landingpage wurde mit Astro erstellt, wobei dessen geschwindigkeitsorientierte Architektur genutzt wurde. Dank Astro lädt die Seite extrem schnell und generiert SEO-optimierte statische Inhalte vom ersten Rendering an. Die Integration von React-Komponenten ermöglicht eine moderne Ästhetik, während TailwindCSS ein klares Design bietet. Diese Landingpage ist das perfekte Tor zu Deskify und kombiniert Leistung, Stil und Barrierefreiheit.",
      tech: ["Node", "Astro", "TypeScript", "Tailwind"],
    },
    back: {
      text: "Das Backend von Deskify basiert auf Spring Boot und folgt einer modularen Architektur. Es implementiert JWT (JSON Web Tokens) für die Benutzerauthentifizierung und gewährleistet sichere, zustandslose Sitzungen. Die RESTful API verwaltet Funktionen wie Registrierung, Login und Desktop-Anpassung. Die Datenpersistenz wird mit JPA und einer PostgreSQL-Datenbank gehandhabt. Das System ist robust, effizient und leicht erweiterbar konzipiert.",
      tech: ["MySQL", "Spring JPA", "Spring Security", "SpringMVC", "Vercel"],
    },
    featured: true
  },
  "bitten-apol": {
    slug: "bitten-apol",
    title: "Bitten Apol",
    description:
      "BittenApol ist eine E-Commerce-Plattform mit einem robusten Administrationspanel und einem intuitiven Web-Client. Das Admin-Dashboard ermöglicht die Verwaltung von Produkten, Benutzern, Rollen und Bestellungen mit geschützten Routen. Der Web-Client ermöglicht es Benutzern, nahtlos Produkte zu durchsuchen, ihren Warenkorb zu verwalten und Käufe mit integriertem Google-Login abzuschließen.",
    alt: "Bitten Apol Cover-Bild",
    mainFeatures: {
      text: "BittenApol bietet eine umfassende Lösung für das E-Commerce-Management mit integriertem Administrationspanel und Web-Client. Zu den wichtigsten Funktionen gehören:",
      functions: [
        "Produktmanagement: Erstellen, Bearbeiten und Löschen von Produkten.",
        "Benutzer- und Rollenmanagement: Berechtigungsbasierte Zugriffskontrolle.",
        "Bestellverfolgung: Statusaktualisierungen und Echtzeit-Monitoring.",
        "Geschützte Admin-Routen: Gesichert durch Authentifizierung und Rollenzugriff.",
        "Saubere & responsive Oberfläche: Optimiert für Admin und Kunden.",
        "Warenkorb: Voll funktionsfähiges Hinzufügen und Entfernen von Produkten.",
        "Versand-Autofill: Adressverwaltung basierend auf Benutzerprofildaten.",
        "Google OAuth: Integrierter Login für eine nahtlose Benutzererfahrung.",
        "Zahlungsfluss (Checkout): (Derzeit in Entwicklung).",
      ],
      image: "/images/projects/app/bittenapol/mockup.png",
    },
    app: {
      text: "Der BittenApol Web-Client wurde mit Next.js und React unter Verwendung von TypeScript für eine schnelle Erfahrung erstellt. Er integriert MongoDB für die Datenverwaltung, Authentifizierung über Google OAuth und nutzt die React Context API für das Statusmanagement von Warenkorb und Benutzer. Das Design nutzt Tailwind CSS für eine moderne Oberfläche.",
    },
    back: {
      text: "Das Administrationspanel nutzt Next.js API Routes für das Backend und MongoDB mit Mongoose als Datenbank. Die Authentifizierung erfolgt über JWT oder Sitzungen (NextAuth), wodurch sichergestellt wird, dass Routen mit spezifischen Rollen geschützt sind. Es ermöglicht ein vollständiges Management von Produkten, Benutzern und Bestellungen.",
    },
    featured: false
  },



  // ===========================================================================================================
  // WEBPROJEKTE
  // ===========================================================================================================
  "pawtopia": {
    title: "Pawtopia",
    description: "Eine solidarische Plattform zur Förderung verantwortungsvoller Adoptionen und zur Vermittlung von Tieren in ein neues Zuhause.",
    summary: "Pawtopia ist eine Initiative, die in einem kleinen lokalen Tierheim entstand und sich zu einer führenden Community für verantwortungsvolle Adoptionen entwickelt hat. Die Seite macht Tiere sichtbar, erleichtert den Kontakt zu Pflegestellen und fördert Bildungskampagnen.",
    client: "Gemeinnützig",
    role: "UX/UI Design + Frontend-Entwicklung",
    steps: [
      "Definition sozialer und funktionaler Ziele",
      "Recherche ähnlicher Plattformen",
      "Design von Wireframes und Informationsarchitektur",
      "Prototyping in Figma mit Fokus auf Usability und Barrierefreiheit",
      "Frontend-Entwicklung mit Deployment auf Vercel"
    ]
  },
  "ecovibe": {
    title: "EcoVibe",
    description: "Die grüne Essenz: Schaffung von ökologischem Bewusstsein durch recycelte und nachhaltige Produkte.",
    summary: "EcoVibe ist eine Organisation, die sich der Wiederverwendung von Materialien und der Förderung nachhaltiger Gewohnheiten widmet. Sie baut eine globale Gemeinschaft auf, die sich durch Innovation für den Planeten einsetzt.",
    client: "Persönliches Projekt",
    role: "UI/UX Design",
    steps: [
      "Definition der ökologischen Identität und Kernbotschaft",
      "Inhaltsentwicklung für Bewusstsein und Markenphilosophie",
      "Responsives Design in Figma mit Komponentenstruktur",
      "Barrierefreie Web-Implementierung mit nachhaltigen Praktiken"
    ]
  },
  "appfluence": {
    title: "AppFluence",
    description: "AppFluence ist ein Podcast, der sich der Förderung der Frontend-Entwicklung mit aktuellen Inhalten, Interviews und Ressourcen widmet.",
    summary: "AppFluence bietet Episoden über Tools, Frameworks, responsives Design und UX/UI und stellt Ressourcen bereit, um das Lernen von Webentwicklern zu erleichtern.",
    client: "Persönliches Projekt",
    role: "Frontend-Entwicklung & Multimedia-Integration",
    steps: [
      "Planung von Inhalten und Podcast-Struktur",
      "Responsives Design mit Fokus auf Barrierefreiheit",
      "Native Spotify-Integration für direkte Wiedergabe",
      "Implementierung einer einfachen Navigation und Kontaktformularen",
      "Entwicklung einer Episodengalerie für einfachen Zugriff"
    ]
  },
  "lenslegacy": {
    title: "LensLegacy",
    description: "LensLegacy ist eine Stockfotografie-Plattform, die den Download von Bildern in verschiedenen Größen und Lizenzen ermöglicht.",
    summary: "Eine moderne Galerie, in der Benutzer Bilder erkunden, filtern und herunterladen können. Das Design ist auf Geschwindigkeit, Usability und Ästhetik optimiert.",
    client: "Persönliches Projekt",
    role: "Vollständiges Frontend-Design & Entwicklung",
    steps: [
      "Definition von Struktur und Lizenz-Download-Flow",
      "Visuelles Design mit Fokus auf Fotopräsentation",
      "Responsive Entwicklung für alle Geräte",
      "Implementierung von Filtern nach Kategorien",
      "Optimierung der Bildladezeiten"
    ]
  },
  "flightsim": {
    title: "FlightSimulator",
    description: "Landingpage für das Videospiel FS2020 mit Bildergalerie, Rezensionen und Systemanforderungen.",
    summary: "Eine informative und visuell ansprechende Seite, die technische Details und Medien zum Spiel FS2020 übersichtlich präsentiert.",
    client: "Persönliches Projekt",
    role: "Vollständiges Frontend-Design & Entwicklung",
    steps: [
      "Strukturierung der Kerninhalte (Galerie, Reviews, Anforderungen)",
      "Responsives Design für Mobile und Desktop",
      "Integration der Bildergalerie mit visuellen Effekten",
      "Performance-Optimierung",
      "Usability-Tests"
    ]
  },
  "cafeparados": {
    title: "Café para Dos",
    description: "UI-Design für eine Podcast-Seite mit sauberer und attraktiver Benutzeroberfläche.",
    summary: "Eine modern gestaltete Oberfläche für Podcasts mit Schwerpunkt auf Usability und responsivem Design.",
    client: "Persönliches Projekt",
    role: "Vollständiges Frontend-Design (UI)",
    steps: [
      "Visuelles Strukturdesign ohne funktionale Inhalte",
      "Erstellung responsiver Stile",
      "Implementierung von UI-Elementen (Listen, Player-Simulatoren)",
      "Visuelle Optimierung"
    ]
  },
  "concesionario": {
    title: "Online-Autohaus",
    description: "UI-Seite inspiriert von Lamborghini, jedoch gewidmet Honda-Motorrädern, mit reichhaltigen Inhalten und Animationen.",
    summary: "Ein umfangreiches UI-Projekt, das ein Honda-Autohaus simuliert, mit Fokus auf Desktop-Performance und visueller Wirkung.",
    client: "Persönliches Projekt",
    role: "Vollständiges Frontend-Design (UI)",
    steps: [
      "Design-Analyse basierend auf Lamborghini.com",
      "Implementierung detaillierter Inhalte",
      "Erstellung benutzerdefinierter CSS/JS-Animationen",
      "Desktop-Optimierung",
      "Visuelles Finetuning"
    ]
  },
  "saviaclub": {
    title: "SaviaClub",
    description: "Webplattform zur Digitalisierung und Sichtbarkeit lokaler Unternehmen.",
    summary: "Eine visuell ansprechende digitale Lösung, die Nachbarn mit lokalen Geschäften verbindet und Dienstleistungen sowie Aktionen hervorhebt.",
    client: "Professionelles / Lokales Projekt",
    role: "Ganzheitliches Frontend-Design & Entwicklung",
    steps: [
      "Architektur mit Fokus auf lokale Nutzer und SEO",
      "Responsives Interface für schnelle mobile Abfragen",
      "Implementierung eines visuellen Katalogs",
      "Performance-Optimierung für Mobilfunknetze",
      "Integration direkter Kontaktkanäle (WhatsApp, Karten)"
    ]
  },
  "gastronomia": {
    title: "Gastronomie-Restaurant",
    description: "Premium-Design für ein High-End-Restaurant mit einer eleganten Ästhetik in Deep Blue und Gold.",
    summary: "Eine immersive digitale Erfahrung, die das Menü und das Ambiente präsentiert, um Gäste durch anspruchsvolles Design zu gewinnen.",
    client: "Gastronomie-Projekt",
    role: "Visuelles Design & Frontend-Entwicklung",
    steps: [
      "Visuelle Konzeption basierend auf 'Luxury Design' Paletten",
      "Erstellung des digitalen Menüs",
      "Optimierte hochauflösende Fotogalerie",
      "Implementierung von Reservierungssystemen",
      "Smooth-Scroll-Effekte"
    ]
  },

  "atelier": {
    title: "Ambar Atelier",
    description: "Premium-Digital-Ökosystem für den Luxus-Wellness-Sektor, definiert durch minimalistische Art Direction und anspruchsvolle Architektur.",
    summary: "Entwicklung einer immersiven Plattform, die Konversion durch strategischen Einsatz von Leerraum und editorielle Typografie priorisiert.",
    client: "Bespoke Aesthetics Studio",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Art Direction basierend auf 'Quiet Luxury' Ästhetik",
      "Entwicklung einer skalierbaren Komponenten-Architektur",
      "Interaktions-Engineering: Kinetisches Scrollen",
      "Optimierung der Core Web Vitals",
      "Integration der Reservierungslogik"
    ]
  },
  "axesteel": {
    title: "Axe & Steel",
    description: "High-End Landingpage für Axe & Steel, einen Barbershop, der traditionelles Handwerk mit moderner visueller Architektur verbindet.",
    summary: "Bau einer immersiven Dark-Mode-Erfahrung mit Fokus auf Exklusivität und erstklassiger redaktioneller Hierarchie.",
    client: "Axe & Steel // Master Barber Studio",
    role: "Lead Frontend & Brand Experience",
    steps: [
      "Implementierung einer 'Industrial-Luxury' Farbpalette",
      "Entwicklung mit Astro für 100/100 Performance",
      "Erstellung eines markenstarken Navigationssystems",
      "Design einer redaktionellen Service-Tabelle ('The Ledger')",
      "Implementierung von kinetischem Smooth-Scroll"
    ]
  },

  // ===========================================================================================================
  // FOTOGRAFIE-PROJEKTE
  // ===========================================================================================================
  photography: {
    gallery_title: "Galerie",
    tech_labels: {
      focal: "Brennweite",
      aperture: "Blende",
      iso: "ISO",
      camera: "Kamera",
      lens: "Objektiv"
    },
    sunsets: {
      title: "Sonnenuntergänge",
      description: "'Sunsets' ist ein visuelles Projekt, das aus dem Bedürfnis entstand, die Zeit genau in dem Moment anzuhalten, in dem die Sonne den Horizont berührt. Jede Fotografie fängt die Ruhe und das Feuer ein, das nur das Abendrot vermitteln kann."
    },
    nature: {
      title: "Natur",
      description: "'Nature' entspringt dem Wunsch, sich mit dem Wesentlichen zu verbinden. Jedes Bild ist eine intime Begegnung mit der Erde: Blätter, die atmen, und Texturen, die in der Stille sprechen."
    },
    architecture: {
      title: "Architektur",
      description: "Eine visuelle Erkundung des gebauten Raums. Dieses Projekt sucht die Beziehung zwischen dem Menschen und den Strukturen einzufangen, die ihn umgeben. Ein Tribut an Geometrie und Licht."
    },
    me: { 
      title: "Ich selbst",
      description: "Ein introspektives Projekt, in dem Körper und Ausdruck zur visuellen Sprache werden. Es geht darum, eine Geschichte ohne Worte zu vermitteln und die Identität im Raum zu erkunden."
    },
    planes: {
      title: "Plane Spotting",
      description: "Eine Sammlung, die der leidenschaftlichen Beobachtung von Flugzeugen gewidmet ist. Ein Tribut an die Ingenieurskunst und die Eleganz von Strukturen, die der Schwerkraft trotzen."
    },
    motor: {
      title: "Motorräder",
      description: "Eine Freiheitserklärung auf zwei Rädern. Dieses Projekt fängt den Moment ein, in dem Maschine und Landschaft zu einem einzigen Herzschlag verschmelzen. Es gibt kein Ziel, nur den Weg."
    },
  }
};