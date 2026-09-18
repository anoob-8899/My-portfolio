"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroPortrait() {
  const handleNavigateToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#about";
    }
  };

  return (
    <button
      type="button"
      onClick={handleNavigateToAbout}
      aria-label="View About section"
      data-cursor="ABOUT"
      className="group relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] aspect-square mx-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF174F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] rounded-full transition-transform duration-500 ease-out"
    >
      {/* Crimson Circular Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-[1.5px] border-[#FF174F]/40 group-hover:border-[#FF174F] group-hover:shadow-[0_0_25px_rgba(255,23,79,0.25)] transition-all duration-500 ease-out pointer-events-none"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />

      {/* Central Portrait Container */}
      <motion.div
        className="relative w-[82%] h-[82%] rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#080808] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <Image
          src="/assets/portrait.jpg"
          alt="Vincent Antony — Hero Portrait"
          fill
          priority
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 440px"
          className="object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 ease-out"
        />

        {/* Subtle Vignette Gradient Overlay */}
        <div
          className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40 mix-blend-multiply group-hover:opacity-20 transition-opacity duration-500"
          aria-hidden="true"
        />
      </motion.div>
    </button>
  );
}

