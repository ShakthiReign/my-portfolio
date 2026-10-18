"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "../types";

// 1. Define the shape of our Context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

// 2. Initialize the Context with default placeholder values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

// 3. The Provider Component that wraps the application
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check 1: User's previously saved preference
    const saved = localStorage.getItem("bumble_lang") as Language | null;
    if (saved && (saved === "en" || saved === "de")) {
      setLanguageState(saved);
      return;
    }

    // Check 2: Browser/System language
    const browserLang = navigator.language || (navigator as any).userLanguage || "";
    if (browserLang.toLowerCase().startsWith("de")) {
      setLanguageState("de");
      return;
    }

    // Check 3: IP-based Country Detection (DACH region: Germany, Austria, Switzerland)
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && (data.country_code === "DE" || data.country_code === "AT" || data.country_code === "CH")) {
          setLanguageState("de");
        }
      })
      .catch(() => {
        // Fallback remains 'en' if offline or blocked by ad-blocker
      });
  }, []);

  // Update state and persist to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bumble_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "de" : "en";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 4. Custom Hook for easy injection into any component
export const useLanguage = () => useContext(LanguageContext);