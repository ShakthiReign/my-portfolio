"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function WelcomeScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();

  const words = language === "de"
    ? ["INITIALISIERUNG", "WILLKOMMEN", "SYSTEM BEREIT"]
    : ["INITIALIZING", "WELCOME", "SYSTEM READY"];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    // 1. Progress Counter (0% -> 100%)
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // 2. Cycling Headline Words
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 450);

    return () => {
      clearInterval(progressTimer);
      clearInterval(wordTimer);
    };
  }, [words.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] select-none"
        >
          <div className="w-full max-w-xs px-6 text-center">
            {/* Cycling Multilingual Status */}
            <motion.h2
              key={currentWord}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs font-mono tracking-[0.3em] uppercase text-[#FFE600] font-bold mb-6"
            >
              {words[currentWord]}
            </motion.h2>

            {/* High-Voltage Bumblebee Progress Bar */}
            <div className="w-full h-[2px] bg-[#1e1e24] rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-[#FFE600] transition-all duration-75 shadow-[0_0_15px_#FFE600]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Sub-label indicators */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>CORE_BOOT</span>
              <span className="text-[#FFE600] font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}