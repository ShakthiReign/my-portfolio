"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { FileText, Copy, Check, Code2, Share2, ArrowUpRight, Terminal } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioConfig;

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marqueeItems = [
    "JAVA 21",
    "SPRING BOOT",
    "SPRING SECURITY",
    "POSTGRESQL",
    "RESTFUL APIS",
    "DATA JPA & JDBC",
    "REACT",
    "SYSTEM ARCHITECTURE",
  ];

  return (
    <section className="relative z-10 pt-20 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Top Status Bar */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE600] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFE600]"></span>
            </span>
            {language === "de" ? "Verfügbar für Software-Rollen" : "Available for Engineering Roles"}
          </div>

          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 bg-[#0d0d11] px-3 py-1.5 rounded-full border border-[#1e1e24]">
            <Terminal className="w-3.5 h-3.5 text-[#FFE600]" />
            {personal.location[language]}
          </span>
        </motion.div>

        {/* Oversized Editorial Headline */}
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            00 // PORTFOLIO &amp; ARCHITECTURE
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            {personal.name.split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#fff275] to-[#FFE600]">
              {personal.name.split(" ")[1]}
            </span>
          </h1>
        </motion.div>

        {/* Role & Bio */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-xl sm:text-2xl text-zinc-200 font-mono font-semibold flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#FFE600] inline-block" />
            {personal.role[language]}
          </p>

          <p className="max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
            {personal.bio[language]}
          </p>
        </motion.div>

        {/* Interactive Spring Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-3">
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={personal.resumePath}
            download
            className="flex items-center gap-2 px-5 py-3 bg-[#FFE600] text-black font-bold text-xs font-mono rounded-xl hover:bg-[#E6CF00] shadow-[0_0_25px_rgba(255,230,0,0.35)] transition"
          >
            <FileText className="w-4 h-4" />
            {language === "de" ? "Lebenslauf [PDF]" : "Resume [PDF]"}
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#0d0d11] border border-[#1e1e24] text-zinc-200 hover:text-[#FFE600] text-xs font-mono rounded-xl hover:border-[#FFE600]/50 transition"
          >
            <Code2 className="w-4 h-4 text-[#FFE600]" /> GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-[#0d0d11] border border-[#1e1e24] text-zinc-200 hover:text-[#FFE600] text-xs font-mono rounded-xl hover:border-[#FFE600]/50 transition"
          >
            <Share2 className="w-4 h-4 text-[#FFE600]" /> LinkedIn
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 bg-[#0d0d11] border border-[#1e1e24] text-zinc-300 hover:text-[#FFE600] text-xs font-mono rounded-xl hover:border-[#FFE600]/50 transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-[#FFE600]" /> : <Copy className="w-4 h-4 text-[#FFE600]" />}
            {copied ? (language === "de" ? "Kopiert!" : "Copied!") : personal.email}
          </motion.button>
        </motion.div>

        {/* Infinite Kinetic Tech Ticker */}
        <motion.div
          variants={itemVariants}
          className="pt-10 overflow-hidden border-y border-[#1e1e24]/80 py-4 mt-8 relative"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="flex items-center gap-8 whitespace-nowrap w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 font-semibold">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFE600]" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}