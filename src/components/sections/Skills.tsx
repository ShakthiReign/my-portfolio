"use client";

import React from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { Server, Database, Layers, Wrench } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Skills() {
  const { language } = useLanguage();
  const { skills } = portfolioConfig;

  const categories = [
    { title: "Backend & Core", icon: Server, items: skills.backend },
    { title: "Persistence & DB", icon: Database, items: skills.database },
    { title: "Frontend UI", icon: Layers, items: skills.frontend },
    { title: "Tooling & DevOps", icon: Wrench, items: skills.tooling },
  ];

  return (
    <section id="skills" className="relative z-10 py-16 border-t border-[#1e1e24]">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FFE600] mb-2 font-bold">
            {language === "de" ? "TECHNOLOGIE-STACK" : "TECH STACK"}
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">
            {language === "de" ? "Technische Fähigkeiten" : "Engineering Skills"}
          </h3>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c, idx) => {
          const Icon = c.icon;
          return (
            <ScrollReveal key={c.title} direction="up" delay={idx * 0.15}>
              <div className="h-full bg-[#0d0d11] border border-[#1e1e24] hover:border-[#FFE600]/40 rounded-2xl p-6 transition group">
                <div className="flex items-center gap-2.5 mb-5 text-white font-mono text-sm font-semibold">
                  <div className="p-2 rounded-lg bg-[#050507] border border-[#1e1e24] text-[#FFE600]">
                    <Icon className="w-4 h-4" />
                  </div>
                  {c.title}
                </div>
                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-mono text-zinc-400 flex items-center gap-2.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFE600]/60 group-hover:bg-[#FFE600] transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}