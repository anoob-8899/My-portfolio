"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface HeroPortraitProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroPortrait({ mouseX = 0, mouseY = 0 }: HeroPortraitProps) {
  const shouldReduceMotion = useReducedMotion();

  // Subtle parallax offsets
  const ringX = shouldReduceMotion ? 0 : mouseX * -15;
  const ringY = shouldReduceMotion ? 0 : mouseY * -15;
  const portraitX = shouldReduceMotion ? 0 : mouseX * 10;
  const portraitY = shouldReduceMotion ? 0 : mouseY * 10;

  return (
    <div className="relative flex items-center justify-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] aspect-square mx-auto">
      {/* Crimson Circular Ring (#FF174F) */}
      <motion.div
        className="absolute inset-0 rounded-full border-[1.5px] border-[#FF174F]/80 shadow-[0_0_30px_rgba(255,23,79,0.15)] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />

      {/* Inner Accent Ring Accent Marker */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF174F]"
        style={{
          x: ringX,
          y: ringY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Central Portrait Container */}
      <motion.div
        className="relative w-[82%] h-[82%] rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#080808]"
        style={{
          x: portraitX,
          y: portraitY,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Image
          src="/assets/portrait.jpg"
          alt="Vincent Antony — Hero Portrait"
          fill
          priority
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px"
          className="object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
        />

        {/* Subtle Vignette Gradient Overlay */}
        <div
          className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40 mix-blend-multiply"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
