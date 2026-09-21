"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroPortrait() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        href="/projects"
        aria-label="View projects"
        data-cursor="PROJECTS"
        className="group relative flex items-center justify-center w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-square mx-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded-full transition-all duration-500 ease-out"
      >
        {/* Accent Circular Ring (No marker dot on the ring) */}
        <motion.div
          className="absolute inset-0 rounded-full border-[1.5px] border-accent/40 group-hover:border-accent group-hover:shadow-[0_0_35px_var(--accent-glow)] transition-all duration-500 ease-out pointer-events-none"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />

        {/* Central Portrait Container with subtle scale on hover */}
        <motion.div
          className="relative w-[82%] h-[82%] rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#080808] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Image
            src="/assets/portrait.jpg"
            alt="Vincent Antony — Hero Portrait"
            fill
            priority
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 420px"
            className="object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out"
          />

          {/* Subtle Vignette Gradient Overlay */}
          <div
            className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40 mix-blend-multiply group-hover:opacity-20 transition-opacity duration-500"
            aria-hidden="true"
          />
        </motion.div>
      </Link>

      {/* Navigation Hint: Always clearly visible on touch/mobile devices, subtly elevated on hover on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pointer-events-none select-none"
      >
        <Link
          href="/projects"
          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D0F10]/90 border border-accent/40 text-accent font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:border-accent hover:shadow-[0_0_16px_var(--accent-glow)] hover:scale-105"
          aria-label="View projects page"
        >
          <span>CLICK TO VIEW PROJECTS</span>
          <span className="text-xs">→</span>
        </Link>
      </motion.div>
    </div>
  );
}
