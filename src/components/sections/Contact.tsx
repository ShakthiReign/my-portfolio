"use client";

import React from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import { useLanguage } from "../../context/LanguageContext";
import { Mail, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function Contact() {
  const { language } = useLanguage();
  const { email, phone, whatsapp } = portfolioConfig.personal;

  return (
    <section id="contact" className="relative z-10 py-16 border-t border-[#1e1e24]">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="max-w-3xl bg-gradient-to-r from-[#FFE600]/10 via-[#0d0d11] to-[#0d0d11] border border-[#FFE600]/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {language === "de" ? "Lust auf Zusammenarbeit?" : "Have an opportunity or project?"}
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            {language === "de"
              ? "Ich bin aktiv auf der Suche nach Java-Backend- und Full-Stack-Software-Positionen."
              : "I am actively seeking software engineering positions focused on Java backend, Spring Boot, or full-stack web systems."}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* Primary Email CTA */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFE600] text-black font-bold text-xs font-mono hover:bg-[#E6CF00] shadow-[0_0_15px_rgba(255,230,0,0.3)] transition"
            >
              <Mail className="w-4 h-4" />
              {email}
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#050507] border border-[#1e1e24] text-zinc-200 hover:text-[#FFE600] hover:border-[#FFE600]/50 font-mono text-xs font-semibold transition"
            >
              <MessageSquare className="w-4 h-4 text-[#FFE600]" />
              WhatsApp: {phone}
            </a>

            {/* Direct Phone Call CTA */}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#050507] border border-[#1e1e24] text-zinc-200 hover:text-[#FFE600] hover:border-[#FFE600]/50 font-mono text-xs font-semibold transition"
            >
              <Phone className="w-4 h-4 text-[#FFE600]" />
              {language === "de" ? "Anrufen" : "Call"}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}