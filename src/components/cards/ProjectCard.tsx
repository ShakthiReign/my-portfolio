"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { ProjectItem } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import { ExternalLink, Network, Code2, Sparkles, Clock } from "lucide-react";

export default function ProjectCard({ project, index = 0 }: { project: ProjectItem; index?: number }) {
  const { language } = useLanguage();
  const [showFlow, setShowFlow] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-[#0d0d11] border border-[#1e1e24] hover:border-[#FFE600]/50 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Cursor-Following Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 230, 0, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {/* Header Row: Index Number, Category Badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-bold">
              0{index + 1} //
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFE600] bg-[#FFE600]/10 border border-[#FFE600]/20 px-2.5 py-0.5 rounded-full font-semibold">
              {project.tagline[language]}
            </span>
          </div>

          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
              <Clock className="w-3 h-3 animate-pulse" />
              {project.status[language]}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-[#FFE600] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">
          {project.description[language]}
        </p>

        {/* Engineering Impact Callout */}
        <div className="text-xs font-mono text-zinc-300 mb-6 bg-[#050507]/90 p-3.5 rounded-xl border border-[#1e1e24] group-hover:border-[#FFE600]/20 transition">
          <div className="flex items-center gap-1.5 text-[#FFE600] font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING IMPACT</span>
          </div>
          {project.problemSolved[language]}
        </div>

        {/* Action Buttons: Live Demo + Code <> GitHub + Trace Simulator */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FFE600] text-black font-bold hover:bg-[#E6CF00] shadow-[0_0_15px_rgba(255,230,0,0.25)] transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {language === "de" ? "Live-Demo" : "Live Demo"}
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#050507] border border-[#1e1e24] text-zinc-200 hover:text-[#FFE600] hover:border-[#FFE600]/50 font-semibold transition"
            >
              <Code2 className="w-3.5 h-3.5 text-[#FFE600]" />
              <span>Code &lt;&gt; GitHub</span>
            </a>
          )}

          <button
            onClick={() => setShowFlow(!showFlow)}
            className="text-xs font-mono flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] hover:bg-[#FFE600]/20 font-semibold transition cursor-pointer"
          >
            <Network className="w-3.5 h-3.5" />
            {showFlow
              ? language === "de"
                ? "Trace verbergen"
                : "Hide Trace"
              : language === "de"
              ? "Architektur-Trace"
              : "Architecture Trace"}
          </button>
        </div>

        {/* Animated Architecture Trace Pipeline */}
        <AnimatePresence>
          {showFlow && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 20 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="p-3.5 bg-[#050507] rounded-xl border border-[#FFE600]/30 text-xs font-mono text-zinc-300 flex flex-wrap items-center gap-2">
                {project.architecture.map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="px-2.5 py-1 bg-[#0d0d11] rounded-md border border-[#1e1e24] text-[#FFE600] font-semibold">
                      {step}
                    </span>
                    {idx < project.architecture.length - 1 && (
                      <span className="text-[#FFE600] font-bold">→</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Technology Stack Pills */}
      <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-[#1e1e24]">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono bg-[#050507] text-zinc-300 px-2.5 py-1 rounded-md border border-[#1e1e24] group-hover:border-zinc-700 transition"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}