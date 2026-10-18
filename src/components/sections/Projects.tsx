"use client";

import React from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import ProjectCard from "../cards/ProjectCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="relative z-10 py-16 border-t border-[#1e1e24]">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FFE600] mb-2 font-bold">
            {language === "de" ? "SYSTEM-ARCHITEKTUR & CODE" : "SYSTEM ARCHITECTURE & CODE"}
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">
            {language === "de" ? "Ausgewählte Systeme" : "Featured Projects"}
          </h3>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioConfig.projects.map((project, idx) => (
          <ScrollReveal key={project.id} direction="up" delay={idx * 0.2}>
            <ProjectCard project={project} index={idx} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}