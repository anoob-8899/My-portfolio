"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroPortrait } from "./HeroPortrait";
import { HeroTypography } from "./HeroTypography";
import { HeroMetadata } from "./HeroMetadata";
import { SideNavigation } from "../navigation/SideNavigation";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-[100svh] h-[100svh] flex flex-col justify-between bg-[#050505] text-[#F5F5F5] overflow-hidden px-6 py-6 md:py-8 lg:px-16"
    >
      {/* Background Ambient Grid Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Main Composition Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-between">
        
        {/* Top Header / Academic Metadata Bar */}
        <div className="w-full flex justify-between items-start pt-2 md:pt-6">
          <HeroMetadata />

          {/* Mobile Quick Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden font-mono text-[10px] tracking-widest text-[#929292] uppercase flex items-center space-x-3 pt-1"
          >
            <a href="#about" className="hover:text-[#FF174F] transition-colors">01 ABOUT</a>
            <span>/</span>
            <a href="#works" className="hover:text-[#FF174F] transition-colors">02 WORKS</a>
            <span>/</span>
            <a href="#contact" className="hover:text-[#FF174F] transition-colors">03 CONTACT</a>
          </motion.div>
        </div>

        {/* Central Content: Portrait & Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto py-4">
          
          {/* Portrait Anchor */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <HeroPortrait />
          </div>

          {/* Editorial Display Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            <HeroTypography />
          </div>

        </div>

        {/* Bottom Metadata & Status Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-between items-end pb-3 font-mono text-[10px] sm:text-xs text-[#929292] tracking-widest uppercase"
        >
          <div>
            <span>EST. 2026</span>
          </div>

          <div className="hidden sm:block text-[#929292]">
            CLICK PORTRAIT OR NAV TO EXPLORE
          </div>
        </motion.div>

      </div>

      {/* Right-Side Vertical Navigation */}
      <SideNavigation />
    </section>
  );
}

