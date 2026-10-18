"use client";

import React from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Experience() {
  const { language } = useLanguage();
  const { experience, education } = portfolioConfig;

  return (
    <section id="experience" className="relative z-10 py-16 border-t border-[#1e1e24]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 7 Columns: Professional Experience & Training (Fades in from left) */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#FFE600] mb-2 font-bold">
                {language === "de" ? "BERUFSERFAHRUNG & TRAINING" : "EXPERIENCE & TRAINING"}
              </h2>
              <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#FFE600]" />
                {language === "de" ? "Werdegang" : "Professional Journey"}
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <ScrollReveal key={exp.company} direction="left" delay={0.2 + idx * 0.15}>
                <div className="bg-[#0d0d11] border border-[#1e1e24] hover:border-[#FFE600]/40 rounded-2xl p-6 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{exp.role[language]}</h4>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#FFE600]/10 text-[#FFE600] border border-[#FFE600]/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.highlights[language].map((bullet, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFE600] mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right 5 Columns: Education & Language Proficiency (Fades in from right) */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="right" delay={0.1}>
            <div className="mb-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#FFE600] mb-2 font-bold">
                {language === "de" ? "AUSBILDUNG & SPRACHEN" : "ACADEMIC FOUNDATION"}
              </h2>
              <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#FFE600]" />
                {language === "de" ? "Studium & Zertifikate" : "Education"}
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <ScrollReveal key={edu.institution} direction="right" delay={0.2 + idx * 0.15}>
                <div className="bg-[#0d0d11] border border-[#1e1e24] rounded-2xl p-5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FFE600] mb-1">
                    <span>{edu.year}</span>
                    <span>{edu.score}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{edu.degree[language]}</h4>
                  <p className="text-xs text-zinc-400">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}

            {/* Spoken Languages Card */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="bg-[#0d0d11] border border-[#1e1e24] rounded-2xl p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFE600] mb-3 font-bold">
                  {language === "de" ? "SPRACHKENNTNISSE" : "SPOKEN LANGUAGES"}
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-zinc-300">
                    <span>English</span>
                    <span className="text-zinc-500">Professional Working</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Tamil</span>
                    <span className="text-zinc-500">Native</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Deutsch (German)</span>
                    <span className="text-[#FFE600]">A1 (Active Learning)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}