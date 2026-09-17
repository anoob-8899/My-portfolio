"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroPortrait } from "./HeroPortrait";
import { HeroTypography } from "./HeroTypography";
import { HeroMetadata } from "./HeroMetadata";
import { SideNavigation } from "../navigation/SideNavigation";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      setMousePos({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] text-[#F5F5F5] overflow-hidden px-6 py-12 md:py-16 lg:px-16"
    >
      {/* Background Ambient Grid & Crimson Flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF174F]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Composition Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-between">
        
        {/* Top Header / Metadata Bar */}
        <div className="w-full flex justify-between items-start pt-4 md:pt-8">
          <HeroMetadata />

          {/* Mobile Quick Nav Indicator */}
          <div className="md:hidden font-mono text-[10px] tracking-widest text-[#929292] uppercase flex items-center space-x-3">
            <a href="#about" className="hover:text-[#FF174F] transition-colors">01 ABOUT</a>
            <span>/</span>
            <a href="#works" className="hover:text-[#FF174F] transition-colors">02 WORKS</a>
            <span>/</span>
            <a href="#contact" className="hover:text-[#FF174F] transition-colors">03 CONTACT</a>
          </div>
        </div>

        {/* Central Content: Portrait & Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
          
          {/* Central / Left Portrait Anchor */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <HeroPortrait mouseX={mousePos.x} mouseY={mousePos.y} />
          </div>

          {/* Editorial Display Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-left">
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : mousePos.x * -8,
                y: shouldReduceMotion ? 0 : mousePos.y * -8,
              }}
            >
              <HeroTypography />
            </motion.div>
          </div>

        </div>

        {/* Bottom Status / Footer metadata line */}
        <div className="w-full flex justify-between items-end pb-4 font-mono text-[10px] sm:text-xs text-[#929292] tracking-widest uppercase">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF174F]" />
            <span>EST. 2026</span>
          </div>

          <div className="hidden sm:block">
            SCROLL TO EXPLORE
          </div>
        </div>

      </div>

      {/* Right-Side Vertical Navigation */}
      <SideNavigation />
    </section>
  );
}
