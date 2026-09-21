"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroTypography() {
  return (
    <div className="flex flex-col space-y-3 z-20">
      {/* Small Editorial Phrase (No dot preceding) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center"
      >
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#929292] uppercase font-medium">
          JUST A BEGINNING...
        </span>
      </motion.div>

      {/* Main Display Name */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="font-syne font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-[#F5F5F5] leading-[0.88] select-none"
      >
        VINCY
      </motion.h1>

      {/* Role Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="pt-1"
      >
        <h2 className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-widest text-[#F5F5F5] uppercase">
          PASSIONATE AI &amp; DATA SCIENCE STUDENT
        </h2>
      </motion.div>

      {/* Identity Line with clean slashes instead of dots */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="pt-2 border-t border-white/10 max-w-xl"
      >
        <p className="font-mono text-xs sm:text-sm tracking-wider text-[#929292] uppercase">
          DATA <span className="text-[#5F6264]">/</span> DESIGN{" "}
          <span className="text-[#5F6264]">/</span> EDIT{" "}
          <span className="text-[#5F6264]">/</span> CREATIVE{" "}
          <span className="text-[#5F6264]">/</span> DETERMINED
        </p>
      </motion.div>
    </div>
  );
}
