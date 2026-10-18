import { PortfolioConfig } from "../types";

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Shakthi Gopinath",
    role: {
      en: "Java Backend / Full-Stack Developer",
      de: "Java Backend / Full-Stack Entwickler",
    },
    bio: {
      en: "Entry-level Java Developer with a strong foundation in Core Java, OOP, JDBC, SQL, and layered application design. Experienced in building database-driven systems and backed by MNC corporate experience in root-cause analysis and defect documentation.",
      de: "Angehender Java-Entwickler mit fundierten Kenntnissen in Core Java, OOP, JDBC, SQL und mehrschichtiger Anwendungsarchitektur sowie praktischer Industrieerfahrung in der Fehleranalyse.",
    },
    location: {
      en: "Chennai / Trichy, India (IST / GMT+5:30)",
      de: "Chennai / Trichy, Indien (IST / GMT+5:30)",
    },
    email: "shakthigopinathj@gmail.com",
    phone: "+91 9994199885",
    whatsapp: "https://wa.me/919994199885",
    github: "https://github.com/ShakthiReign",
    linkedin: "https://www.linkedin.com/in/shakthi-gopinath-29a11a339/",
    resumePath: "/Shakthi_G_Resume.pdf",
  },
  projects: [
    {
      id: "shareplate",
      title: "SharePlate",
      tagline: {
        en: "Food Rescue & Distribution Platform",
        de: "Lebensmittelrettungs- & Verteilungsplattform",
      },
      description: {
        en: "Database-backed coordination platform connecting food donors, NGOs, and volunteers to manage food collection and delivery workflows.",
        de: "Datenbankgestützte Plattform zur Koordination von Lebensmittelspendern, NGOs und Freiwilligen für Abhol- und Lieferprozesse.",
      },
      problemSolved: {
        en: "Engineered role-based workflows for food listings, claims, volunteer assignment, and real-time handover status tracking with structured relational schema design.",
        de: "Entwickelte rollenbasierte Workflows für Spendenlisten, Reservierungen, Freiwilligenzuweisung und Statusverfolgung.",
      },
      architecture: ["Web Client UI", "Role-Based Controller", "Service & DAO Layer", "PostgreSQL"],
      stack: ["Java", "PostgreSQL", "HTML5 / CSS3", "JavaScript", "RBAC Workflows"],
      githubUrl: "https://github.com/ShakthiReign/shareplate",
      demoUrl: "https://shareplate-green.vercel.app",
    },
    {
      id: "jobforge",
      title: "JobForge",
      tagline: {
        en: "Java Job Management System",
        de: "Java Bewerbungs- & Job-Managementsystem",
      },
      description: {
        en: "Layered Java backend application built using the Repository-Service pattern to cleanly separate core business logic from persistence and data access.",
        de: "Mehrschichtige Java-Anwendung auf Basis des Repository-Service-Patterns zur sauberen Trennung von Geschäftslogik und Datenzugriff.",
      },
      problemSolved: {
        en: "Implemented JDBC CRUD operations with parameterized PreparedStatement queries, multi-criteria job search, input validation, and custom exception handling.",
        de: "Implementierte sichere JDBC-CRUD-Operationen mit PreparedStatements, mehrstufiger Jobsuche, Validierung und eigenem Exception-Handling.",
      },
      architecture: ["Presentation Layer", "Service Layer (Validation)", "Repository (PreparedStatement)", "PostgreSQL"],
      stack: ["Core Java", "OOP", "JDBC", "PostgreSQL", "SQL", "Git"],
      status: {
        en: "In Progress",
        de: "In Entwicklung",
      },
    },
    {
      id: "voice-email",
      title: "Voice-Based E-Mail System",
      tagline: {
        en: "Accessibility Interface for Visually Impaired Users",
        de: "Barrierefreies Sprach-E-Mail-System",
      },
      description: {
        en: "Hands-free, voice-driven email management system enabling visually impaired users to compose, read, and manage inbox workflows purely through voice commands.",
        de: "Sprachgesteuertes E-Mail-System, das sehbehinderten Nutzern das Verfassen und Verwalten von E-Mails per Sprachbefehl ermöglicht.",
      },
      problemSolved: {
        en: "Integrated speech-to-text, text-to-speech synthesis, and Natural Language Processing (NLP) pipelines to eliminate screen-reader navigation friction.",
        de: "Kombinierte Speech-to-Text, Text-to-Speech und NLP-Textverarbeitung für eine vollständig bildschirmfreie Interaktion.",
      },
      architecture: ["Voice Input", "Speech-to-Text Engine", "NLP Command Parser", "Audio Synthesis"],
      stack: ["Python", "NLP", "Speech Recognition", "Text-to-Speech"],
    },
  ],
  experience: [
    {
      role: {
        en: "Java Full-Stack Development Trainee",
        de: "Java Full-Stack Development Trainee",
      },
      company: "QSpiders — Software Testing & Development Institute",
      period: "2025 – Present",
      highlights: {
        en: [
          "Intensive hands-on engineering training in Core Java, OOP, JDBC, SQL, Servlets/JSP, and layered backend architecture.",
          "Building production-style relational database applications with PostgreSQL and Repository-Service design patterns.",
        ],
        de: [
          "Praxisorientiertes Training in Core Java, OOP, JDBC, SQL, Servlets/JSP und mehrschichtiger Backend-Architektur.",
          "Entwicklung datenbankgestützter Anwendungen mit PostgreSQL und dem Repository-Service-Pattern.",
        ],
      },
    },
    {
      role: {
        en: "Product Testing Trainee",
        de: "Product Testing Trainee",
      },
      company: "Syrma SGS Technology Private Limited",
      period: "Jan 2025 – Nov 2025",
      highlights: {
        en: [
          "Joined intentionally to gain foundational exposure to MNC organizational structures and enterprise quality standards while preparing for a software career transition.",
          "Performed functional, quality, and parametric testing on FTC solar controllers and Danfoss embedded systems.",
          "Documented structured failure logs and root-cause analysis (RCA) findings to drive defect investigation and process reliability.",
        ],
        de: [
          "Gezielter Einstieg zum Verständnis multinationaler Unternehmensstrukturen und Qualitätsstandards während der Vorbereitung auf den Wechsel in die Softwareentwicklung.",
          "Durchführung von Funktions- und Qualitätstests sowie strukturierter Fehlerdokumentation und Ursachenanalyse (RCA).",
        ],
      },
    },
  ],
  education: [
    {
      degree: {
        en: "B.E. in Electronics & Communication Engineering",
        de: "B.E. in Elektronik & Kommunikationstechnik",
      },
      institution: "Saranathan College of Engineering (Anna University)",
      year: "2021 – 2025",
      score: "73.9% (CGPA 7.39)",
    },
    {
      degree: {
        en: "Higher Secondary (Computer Science)",
        de: "Höhere Sekundarschule (Informatik)",
      },
      institution: "Periyar Centenary Memorial Matriculation Hr. Sec. School",
      year: "2021",
      score: "82.02%",
    },
  ],
  skills: {
    backend: [
      "Core Java & OOP",
      "Hibernate",
      "JDBC & PreparedStatement",
      "Spring-Boot",
      "Servlets / JSP",
      "REST API Concepts",
      "Repository-Service Pattern",
      "Custom Exception Handling",
    ],
    database: [
      "PostgreSQL",
      "MySQL & Oracle SQL",
      "Parameterized CRUD Queries",
    ],
    frontend: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "React.js Basics",
    ],
    tooling: [
      "Git & GitHub",
      "Eclipse IDE",
      "Visual Studio Code",
      "Maven",
    ],
  },
};