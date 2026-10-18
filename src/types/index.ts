export type Language = 'en' | 'de';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: { 
    en: string; 
    de: string; 
  };
  description: { 
    en: string; 
    de: string; 
  };
  problemSolved: { 
    en: string; 
    de: string; 
  };
  architecture: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: {
    en: string;
    de: string;
  };
}

export interface ExperienceItem {
  role: { en: string; de: string };
  company: string;
  period: string;
  highlights: { en: string[]; de: string[] };
}

export interface EducationItem {
  degree: { en: string; de: string };
  institution: string;
  year: string;
  score: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: { en: string; de: string };
    bio: { en: string; de: string };
    location: { en: string; de: string };
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    resumePath: string;
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: {
    backend: string[];
    database: string[];
    frontend: string[];
    tooling: string[];
  };
}