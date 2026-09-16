"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData } from "@/data/personal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const ringPortalRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Subtle desktop pointer proximity parallax on the physical portal ring & subject
      const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (hasFinePointer && containerRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current) return;
          const { left, top, width, height } = containerRef.current.getBoundingClientRect();
          const xPct = (e.clientX - (left + width / 2)) / (width / 2);
          const yPct = (e.clientY - (top + height / 2)) / (height / 2);

          if (ringPortalRef.current) {
            gsap.to(ringPortalRef.current, {
              x: xPct * 14,
              y: yPct * 14,
              rotateX: yPct * -6,
              rotateY: xPct * 6,
              duration: 1.2,
              ease: "power2.out",
            });
          }

          if (portraitRef.current) {
            gsap.to(portraitRef.current, {
              x: xPct * 8,
              y: yPct * 8,
              duration: 1.4,
              ease: "power2.out",
            });
          }

          if (glowRef.current) {
            gsap.to(glowRef.current, {
              x: xPct * 20,
              y: yPct * 20,
              duration: 1.6,
              ease: "power2.out",
            });
          }
        };

        const containerEl = containerRef.current;
        containerEl.addEventListener("mousemove", handleMouseMove);
        return () => containerEl.removeEventListener("mousemove", handleMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hero -> About Cinematic Portal Transition Timeline (Scroll-linked)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (containerRef.current && ringPortalRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // 1. APPROACH & ENTER PORTAL: Ring expands as camera moves into the portal
        tl.to(
          ringPortalRef.current,
          {
            scale: 3.2,
            opacity: 0.25,
            borderWidth: "1px",
            ease: "power1.inOut",
          },
          0
        );

        // 2. PORTRAIT RECEDES: Subject fades and gently scales as user approaches the portal
        if (portraitRef.current) {
          tl.to(
            portraitRef.current,
            {
              scale: 1.2,
              opacity: 0,
              y: -40,
              ease: "power1.inOut",
            },
            0
          );
        }

        // 3. EDITORIAL TYPOGRAPHY RECEDES UPWARD
        if (titleGroupRef.current) {
          tl.to(
            titleGroupRef.current,
            {
              y: -80,
              opacity: 0,
              ease: "power1.inOut",
            },
            0
          );
        }

        // 4. SUBTEXT & SCROLL CUE FADE
        if (subTextRef.current && scrollCueRef.current) {
          tl.to(
            [subTextRef.current, scrollCueRef.current],
            {
              opacity: 0,
              y: -20,
              ease: "power1.inOut",
            },
            0
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-bg-primary select-none"
    >
      {/* Architectural Framing Corner Details */}
      <div className="absolute top-6 left-6 md:left-12 lg:left-16 text-[11px] font-mono text-white/20 pointer-events-none select-none" aria-hidden="true">
        +
      </div>
      <div className="absolute top-6 right-6 md:right-12 lg:right-16 text-[11px] font-mono text-white/20 pointer-events-none select-none" aria-hidden="true">
        +
      </div>

      {/* Concentrated Focal Magenta Illumination directly behind the portal */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-accent/25 blur-[70px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main Hero Visual & Identity Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center">
        
        {/* Asymmetric Typography Identity Block (Connected to the central portal with strong visual relationship) */}
        <div ref={titleGroupRef} className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Subtle Minimal Metadata Framing Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cool-surface/40 border border-cool-border/80 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-text-secondary uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{personalData.title}</span>
          </div>

          {/* Oversized Identity Name */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-text-primary uppercase leading-[0.88] drop-shadow-sm transition-all duration-300">
            {personalData.name}
          </h1>

          {/* Secondary Subtitle Tagline */}
          <p className="text-xs sm:text-sm font-mono text-accent tracking-[0.25em] uppercase font-semibold">
            {personalData.tagline}
          </p>
        </div>

        {/* Signature Physical Circular Portal Composition */}
        <div className="relative my-3 sm:my-5 md:my-7 flex items-center justify-center">
          
          {/* Restrained Outer Structural Hairline Ring */}
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-white/[0.06] pointer-events-none z-0" />

          {/* Primary Physical Portal Ring */}
          <div
            ref={ringPortalRef}
            className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full border-2 border-accent/80 shadow-[0_0_40px_rgba(255,23,79,0.3)] transition-shadow duration-500 pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Embedded Subject Portrait */}
          <div
            ref={portraitRef}
            className="relative z-20 w-[170px] h-[210px] sm:w-[220px] sm:h-[280px] md:w-[270px] md:h-[340px] rounded-[80px] sm:rounded-[110px] overflow-hidden border border-cool-border bg-bg-secondary shadow-2xl transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
            data-cursor="ENTER"
          >
            <Image
              src="/images/portrait.svg"
              alt="Vincent Antony Editorial Portrait"
              fill
              priority
              className="object-cover object-center grayscale contrast-110 opacity-95 hover:grayscale-0 transition-all duration-700"
            />
            {/* Soft Ambient Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* Supporting Identity Message */}
        <div ref={subTextRef} className="max-w-md mx-auto space-y-2 mt-2 sm:mt-4">
          <p className="text-[11px] sm:text-xs font-mono tracking-widest text-text-secondary uppercase leading-relaxed">
            {personalData.bio.heroSub}
          </p>
        </div>
      </div>

      {/* Bottom Architectural Framing Bar: Left Social & Metadata + Center Scroll CTA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono tracking-widest">
        
        {/* Bottom-Left Metadata & Social Links */}
        <div className="flex items-center gap-4 text-[11px] text-text-muted">
          <span className="hidden sm:inline-block text-text-secondary">{personalData.contact.location}</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
            data-cursor="GITHUB"
          >
            GITHUB
          </a>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
            data-cursor="LINKEDIN"
          >
            LINKEDIN
          </a>
        </div>

        {/* Hero Scroll Cue / CTA (Preserved functional EXPLORE trigger) */}
        <div ref={scrollCueRef} className="flex justify-center">
          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="group flex items-center gap-3 text-[10px] font-mono tracking-widest text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-accent px-3.5 py-1.5 rounded-full border border-white/[0.08] hover:border-accent/40"
            data-cursor="EXPLORE"
            aria-label="Scroll to About Section"
          >
            <span className="tracking-[0.2em]">EXPLORE</span>
            <ArrowDown className="w-3 h-3 text-accent animate-bounce" />
          </a>
        </div>

        {/* Bottom-Right Minimal Metadata Accent */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] text-text-muted uppercase">
          <span>AI × DATA × TECH</span>
        </div>
      </div>
    </section>
  );
}
