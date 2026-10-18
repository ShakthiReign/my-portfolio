"use client";

import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const links = [
    { label: language === "de" ? "Projekte" : "Projects", href: "#projects" },
    { label: language === "de" ? "Fähigkeiten" : "Skills", href: "#skills" },
    { label: language === "de" ? "Kontakt" : "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050507]/80 border-b border-[#1e1e24]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="font-mono text-sm tracking-wider font-bold text-white flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-[#FFE600] shadow-[0_0_10px_#FFE600] transition-transform group-hover:scale-125" />
          shakthi<span className="text-[#FFE600]">.g</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-[#FFE600] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}

          {/* Desktop Language Switcher Pills */}
          <div className="flex items-center bg-[#0d0d11] border border-[#1e1e24] rounded-full p-0.5 ml-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition ${
                language === "en"
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_10px_rgba(255,230,0,0.3)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("de")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition ${
                language === "de"
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_10px_rgba(255,230,0,0.3)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              DE
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300 hover:text-[#FFE600] transition p-1"
          aria-label="Toggle Navigation"
        >
          {open ? <X className="w-5 h-5 text-[#FFE600]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Visible when hamburger is clicked) */}
      {open && (
        <div className="md:hidden bg-[#050507]/95 border-b border-[#1e1e24] px-6 py-6 flex flex-col gap-4 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-mono text-zinc-300 hover:text-[#FFE600] transition"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Switcher Row */}
          <div className="pt-3 border-t border-[#1e1e24] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#FFE600]" />
              {language === "de" ? "Sprache wählen" : "Select Language"}
            </span>

            <div className="flex items-center bg-[#0d0d11] border border-[#1e1e24] rounded-full p-0.5">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition ${
                  language === "en" ? "bg-[#FFE600] text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("de")}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition ${
                  language === "de" ? "bg-[#FFE600] text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}