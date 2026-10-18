<div align="center">

# ⚡ Shakthi Gopinath — Developer Portfolio & Architecture Hub

**Java Backend & Full-Stack Developer**  
*Building structured relational database systems, layered backend architectures, and high-craft interactive web interfaces.*

[![Live Portfolio](https://img.shields.io/badge/🌐_LIVE_PORTFOLIO-FFE600?style=for-the-badge&logo=vercel&logoColor=black)](https://shakthigopinath-portfolio.vercel.app)
[![SharePlate Live Demo](https://img.shields.io/badge/🚀_SHAREPLATE_DEMO-22C55E?style=for-the-badge&logo=vercel&logoColor=black)](https://shareplate-green.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shakthi-gopinath-29a11a339/)
[![Email](https://img.shields.io/badge/EMAIL-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shakthigopinathj@gmail.com)

---

![Next.js](https://img.shields.io/badge/Next.js_16_(Turbopack)-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

</div>

---

## 📌 Overview

This repository houses the source code for my personal engineering portfolio. Designed with an obsidian-and-yellow (**Bumblebee**) dark aesthetic, the platform showcases my software engineering projects, backend system architectures, technical skills, and corporate quality-testing background.

### ✨ Key UI & Engineering Features
* **Interactive Architecture Trace Simulator:** Expandable pipeline visualizations on every project card demonstrating request flow across presentation, service, DAO/repository, and database layers.
* **GPU-Accelerated Spring Cursor & Spotlights:** Custom cursor physics (`useMotionValue` & `useSpring`) and radial mouse-tracking card spotlights that run outside React's virtual DOM re-render loop for 60fps performance.
* **Directional Scroll-Reveal Engine:** Custom `ScrollReveal` motion wrapper delivering staggered blur-in and directional entrance animations on scroll.
* **Reactive Bilingual Architecture (`EN` / `DE`):** Instant client-side language switching between English and German via React Context and strongly typed configuration contracts.
* **Interactive Particle Canvas:** HTML5 Canvas background starfield with low-overhead particle rendering.
* **Direct Resume & Contact Integration:** One-click PDF resume download (`/Shakthi_G_Resume.pdf`), instant clipboard email copy, and direct WhatsApp/Phone triggers.

---

## 🏗️ Featured Projects Showcased

| Project | Status | Tech Stack | Live Links |
| :--- | :--- | :--- | :--- |
| **SharePlate** — *Food Rescue & Distribution Platform* | 🟢 Live | Java, PostgreSQL, HTML5/CSS3, JavaScript, RBAC | [Live Demo](https://shareplate-green.vercel.app) • [GitHub Repo](https://github.com/ShakthiReign/shareplate) |
| **JobForge** — *Java Job Management System* | 🟡 In Progress | Core Java, OOP, JDBC (`PreparedStatement`), PostgreSQL, SQL | Architecture Trace inside Portfolio |
| **Voice-Based E-Mail System** — *Accessibility Interface* | 🔵 Completed | Python, NLP, Speech Recognition, Text-to-Speech | Architecture Trace inside Portfolio |

### 1. SharePlate (`Food Rescue & Distribution Platform`)
* **Problem Solved:** Connects food donors, NGOs, and volunteers to coordinate food collection and delivery with zero waste.
* **Engineering Highlights:** Role-based workflows (RBAC) for food listings, claims, volunteer assignment, and real-time handover status tracking backed by a structured relational database schema.

### 2. JobForge (`Java Job Management System`)
* **Problem Solved:** Separates core recruitment business rules from database persistence using clean object-oriented layering.
* **Engineering Highlights:** Built with the **Repository-Service pattern**, implementing secure JDBC CRUD operations with parameterized `PreparedStatement` queries, multi-criteria job search, input validation, and custom exception handling.

### 3. Voice-Based E-Mail Management System
* **Problem Solved:** Eliminates screen-reader navigation friction for visually impaired users.
* **Engineering Highlights:** Hands-free voice interface integrating speech-to-text, text-to-speech synthesis, and Natural Language Processing (NLP) command parsing.

---

## 📂 Repository Architecture

```text
my-portfolio/
├── public/
│   └── Shakthi_G_Resume.pdf          # Downloadable Resume PDF asset
├── src/
│   ├── app/
│   │   ├── globals.css               # Global Tailwind imports & custom theme rules
│   │   ├── layout.tsx                # Root layout & LanguageProvider context wrapper
│   │   └── page.tsx                  # Main entry assembling all portfolio sections
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── CustomCursor.tsx      # Spring-physics dual cursor follower
│   │   │   └── ParticleBackground.tsx# Interactive HTML5 Canvas background
│   │   ├── cards/
│   │   │   └── ProjectCard.tsx       # Radial spotlight card & architecture trace UI
│   │   ├── intro/
│   │   │   └── WelcomeScreen.tsx     # Boot percentage preloader screen
│   │   ├── navigation/
│   │   │   └── Navbar.tsx            # Sticky header with EN/DE language toggle
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Headline, availability pill, CTAs & tech marquee
│   │   │   ├── Projects.tsx          # Featured systems showcase grid
│   │   │   ├── Skills.tsx            # Categorized engineering skill matrix
│   │   │   ├── Experience.tsx        # Syrma SGS, QSpiders & B.E. education timeline
│   │   │   └── Contact.tsx           # Direct Email, WhatsApp & Phone call triggers
│   │   └── ui/
│   │       └── ScrollReveal.tsx      # Reusable directional blur/fade scroll wrapper
│   ├── config/
│   │   └── portfolio.config.ts       # Single source of truth for EN/DE portfolio data
│   ├── context/
│   │   └── LanguageContext.tsx       # Multilingual state management (EN / DE)
│   └── types/
│       └── index.ts                  # Strict TypeScript interfaces & contracts
├── package.json
└── tsconfig.json