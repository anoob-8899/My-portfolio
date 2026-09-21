"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData } from "@/data/personal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const headlineTopRef = useRef<HTMLDivElement>(null);
  const headlineBottomRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  const [activePillar, setActivePillar] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current) {
        // 1. Header reveal
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: -20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
              },
            }
          );
        }

        // 2. Portrait Frame reveal
        if (portraitFrameRef.current) {
          gsap.fromTo(
            portraitFrameRef.current,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: portraitFrameRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // 3. Top-Left Headline reveal
        if (headlineTopRef.current) {
          gsap.fromTo(
            headlineTopRef.current,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: portraitFrameRef.current || sectionRef.current,
                start: "top 75%",
              },
            }
          );
        }

        // 4. Bottom-Right Headline reveal
        if (headlineBottomRef.current) {
          gsap.fromTo(
            headlineBottomRef.current,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: portraitFrameRef.current || sectionRef.current,
                start: "top 70%",
              },
            }
          );
        }

        // 5. Statement reveal
        if (statementRef.current) {
          gsap.fromTo(
            statementRef.current.children,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: statementRef.current,
                start: "top 85%",
              },
            }
          );
        }

        // 6. Pillars reveal
        if (pillarsRef.current) {
          gsap.fromTo(
            pillarsRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: pillarsRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // 7. Metadata reveal
        if (metadataRef.current) {
          gsap.fromTo(
            metadataRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: metadataRef.current,
                start: "top 90%",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#050505] text-[#F4F2EE] border-t border-[#20272A] overflow-hidden select-none"
    >
      {/* Subtle Background Architectural Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,rgba(244,242,238,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,238,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Hairline Architectural Corner Indicators */}
      <div
        className="absolute top-6 left-6 text-[11px] font-mono text-white/15 pointer-events-none select-none"
        aria-hidden="true"
      >
        +
      </div>
      <div
        className="absolute top-6 right-6 text-[11px] font-mono text-white/15 pointer-events-none select-none"
        aria-hidden="true"
      >
        +
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 md:space-y-24">
        {/* ==================================================================== */}
        {/* EDITORIAL SECTION HEADER BAR                                         */}
        {/* ==================================================================== */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-[#20272A] pb-4"
        >
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-accent font-semibold tracking-widest uppercase">
              01
            </span>
            <span className="text-[#5F6264]">/</span>
            <span className="text-[#929292] tracking-widest uppercase">
              ABOUT ME
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] sm:text-xs text-[#5F6264] tracking-[0.2em] uppercase">
            <span className="hidden sm:inline">
              FIRST-YEAR BSC AI &amp; DATA SCIENCE
            </span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#929292]">PERSPECTIVE &amp; DRIVE</span>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* DESKTOP EDITORIAL CINEMATIC HERO COMPOSITION (lg:block)              */}
        {/* ==================================================================== */}
        <div className="hidden lg:block relative min-h-[600px] py-4">
          
          {/* Central Portrait Visual Anchor (Reusing /assets/portrait.jpg) */}
          <div className="flex justify-center items-center w-full">
            <div
              ref={portraitFrameRef}
              className="relative w-[340px] xl:w-[380px] aspect-[3/4] group transition-transform duration-700 hover:scale-[1.005]"
              data-cursor="REVEAL"
            >
              {/* Hairline Container */}
              <div className="relative w-full h-full overflow-hidden border border-white/10 bg-[#0D0F10] shadow-2xl">
                <Image
                  src="/assets/portrait.jpg"
                  alt="Vincent Antony — AI & Data Science Student"
                  fill
                  sizes="(max-width: 1200px) 340px, 380px"
                  className="object-cover object-center filter grayscale-[80%] contrast-[1.05] brightness-95 opacity-95 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-700 ease-out"
                />

                {/* Restrained Contrast Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Specifier Tag Top Left */}
                <div className="absolute top-3 left-3 bg-[#050505]/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 z-10">
                  <span className="font-mono text-[9px] text-[#929292] tracking-widest uppercase block">
                    {"IMG.01 // HERO ANCHOR"}
                  </span>
                </div>

                {/* Specifier Tag Top Right */}
                <div className="absolute top-3 right-3 bg-[#050505]/75 backdrop-blur-sm border border-white/10 px-2 py-0.5 z-10">
                  <span className="font-mono text-[9px] text-accent tracking-widest uppercase block">
                    BSC AI &amp; DS
                  </span>
                </div>

                {/* Framing Metadata Footer */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono z-10 text-xs">
                  <span className="text-[#F4F2EE] text-[11px] uppercase tracking-wider font-semibold">
                    {personalData.name}
                  </span>
                  <span className="text-[9px] text-[#929292] uppercase tracking-widest">
                    {personalData.contact.location}
                  </span>
                </div>
              </div>

              {/* Precise Architectural Corner Markers */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-accent/60" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-accent/60" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-accent/60" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-accent/60" />
            </div>
          </div>

          {/* Top-Left Oversized Display Title (Crosses Image Boundary) */}
          <div
            ref={headlineTopRef}
            className="absolute top-2 left-0 z-20 max-w-[500px] xl:max-w-[580px] pointer-events-none select-none"
          >
            <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase block mb-2">
              {"// FOUNDATIONAL DRIVERS"}
            </span>
            <h2
              id="about-heading"
              className="text-5xl xl:text-7xl font-display font-extrabold text-[#F4F2EE] uppercase tracking-tight leading-[0.92]"
            >
              EXPLORING THE <br />
              <span className="text-[#F4F2EE] underline decoration-accent/60 decoration-1 underline-offset-8">
                FRONTIER OF
              </span> <br />
              <span className="text-accent">AI &amp; DATA.</span>
            </h2>
          </div>

          {/* Bottom-Right Oversized Display Subtitle */}
          <div
            ref={headlineBottomRef}
            className="absolute bottom-12 right-0 z-20 max-w-[460px] xl:max-w-[540px] text-right pointer-events-none select-none"
          >
            <h3 className="text-3xl xl:text-5xl font-display font-extrabold text-[#F4F2EE]/90 uppercase tracking-tight leading-[0.96]">
              TRANSFORMING <br />
              <span className="text-[#929292]">CURIOSITY INTO</span> <br />
              <span className="text-[#F4F2EE] border-b border-[#20272A] pb-1">
                ENGINEERING DEPTH.
              </span>
            </h3>
          </div>

          {/* Mid-Right Monospace Indicator */}
          <div className="absolute top-6 right-0 flex items-center gap-2.5 font-mono text-[10px] text-[#5F6264] tracking-[0.2em] uppercase">
            <span className="text-[#929292]">
              LEARNING BY BUILDING
            </span>
          </div>

          {/* Bottom-Left Narrative Lead Paragraph */}
          <div
            ref={statementRef}
            className="absolute bottom-0 left-0 max-w-[420px] xl:max-w-[460px] space-y-3 text-left z-20"
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
              <span>{"01 // PERSPECTIVE"}</span>
            </div>
            <p className="text-[#929292] font-body text-sm xl:text-base leading-relaxed">
              {personalData.bio.detailedBio}
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MOBILE & TABLET STACKED COMPOSITION (< lg:block)                     */}
        {/* ==================================================================== */}
        <div className="block lg:hidden space-y-8">
          {/* Portrait Anchor Mobile */}
          <div className="flex justify-center">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] group"
              data-cursor="REVEAL"
            >
              <div className="relative w-full h-full overflow-hidden border border-white/10 bg-[#0D0F10]">
                <Image
                  src="/assets/portrait.jpg"
                  alt="Vincent Antony — AI & Data Science Student"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-center filter grayscale-[80%] contrast-[1.05] brightness-95 opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent opacity-75 pointer-events-none" />
                <div className="absolute top-2.5 left-2.5 bg-[#050505]/75 backdrop-blur-sm border border-white/10 px-2 py-0.5">
                  <span className="font-mono text-[9px] text-[#929292] tracking-widest uppercase block">
                    {"IMG.01 // HERO ANCHOR"}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between font-mono z-10 text-xs">
                  <span className="text-[#F4F2EE] text-xs uppercase tracking-wider font-semibold">
                    {personalData.name}
                  </span>
                  <span className="text-[9px] text-[#929292] uppercase tracking-widest">
                    {personalData.contact.location}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-accent/60" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-accent/60" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-accent/60" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-accent/60" />
            </div>
          </div>

          {/* Editorial Display Headlines Mobile */}
          <div ref={headlineTopRef} className="space-y-3">
            <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase block">
              {"// FOUNDATIONAL DRIVERS"}
            </span>
            <h2
              id="about-heading-mobile"
              className="text-3xl sm:text-4xl font-display font-extrabold text-[#F4F2EE] uppercase tracking-tight leading-[1.02]"
            >
              EXPLORING THE{" "}
              <span className="text-[#F4F2EE] underline decoration-accent/60 decoration-1 underline-offset-4">
                FRONTIER OF
              </span>{" "}
              <span className="text-accent">AI &amp; DATA.</span>
            </h2>
            <p className="text-xs font-mono text-[#929292] tracking-wider uppercase border-l border-[#20272A] pl-3 py-1">
              &ldquo;{personalData.bio.secondaryStatement}&rdquo;
            </p>
          </div>

          {/* Statement Mobile */}
          <div ref={statementRef} className="space-y-3 text-[#929292] font-body text-sm sm:text-base leading-relaxed">
            <p>{personalData.bio.detailedBio}</p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 6 CORE THEMATIC PILLARS GRID (CURIOSITY, POTENTIAL, CREATIVITY, ETC) */}
        {/* ==================================================================== */}
        <div className="space-y-6 pt-8 border-t border-[#20272A]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase block">
                {"02 // CORE DRIVERS"}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                CURIOSITY, POTENTIAL &amp; EXPERIMENTATION
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#5F6264] tracking-widest uppercase">
              [ HOVER TO EXPLORE DRIVERS ]
            </span>
          </div>

          <div
            ref={pillarsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono"
          >
            {personalData.pillars.map((pillar, index) => {
              const isActive = activePillar === index;
              return (
                <div
                  key={pillar.number}
                  onMouseEnter={() => setActivePillar(index)}
                  onMouseLeave={() => setActivePillar(null)}
                  className={`relative p-5 sm:p-6 border transition-all duration-500 ease-out cursor-default group ${
                    isActive
                      ? "border-accent/60 bg-[#0D0F10] shadow-[0_0_25px_var(--accent-subtle)]"
                      : "border-[#20272A] bg-[#050505] hover:border-white/20 hover:bg-[#0D0F10]/50"
                  }`}
                >
                  {/* Card Header Tag & Number */}
                  <div className="flex items-center justify-between mb-4 border-b border-[#20272A] pb-3">
                    <span className="text-[10px] text-accent tracking-widest uppercase font-semibold">
                      {pillar.tag}
                    </span>
                    <span
                      className={`text-xs tracking-wider transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-[#5F6264] group-hover:text-[#929292]"
                      }`}
                    >
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#F4F2EE] tracking-tight uppercase mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-[#929292] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hairline Active Indicator Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent transition-all duration-500 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* ACADEMIC & TECHNICAL SPECIFICATION PANEL                            */}
        {/* ==================================================================== */}
        <div
          ref={metadataRef}
          className="pt-10 border-t border-[#20272A] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs"
        >
          {/* Metadata Block 1: Academic Focus */}
          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-6 sm:pb-0 sm:pr-6">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              01 / ACADEMIC STATUS
            </span>
            <span className="text-[#F4F2EE] text-sm font-display font-semibold block uppercase tracking-wide">
              {personalData.academic.degree}
            </span>
            <span className="text-[10px] text-[#929292] block tracking-wider">
              {personalData.academic.status} ({personalData.academic.year})
            </span>
          </div>

          {/* Metadata Block 2: Core Focus Areas */}
          <div className="space-y-2 border-b lg:border-b-0 lg:border-r border-[#20272A] pb-6 sm:pb-0 sm:pr-6">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              02 / PRIMARY FOCUS
            </span>
            <span className="text-[#F4F2EE] text-sm font-display font-semibold block uppercase tracking-wide">
              AI &amp; WEB ARCHITECTURE
            </span>
            <span className="text-[10px] text-[#929292] block tracking-wider">
              ML Models / Web Interfaces / Data Pipelines
            </span>
          </div>

          {/* Metadata Block 3: Mindset */}
          <div className="space-y-2 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-6 sm:pb-0 sm:pr-6">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              03 / METHODOLOGY
            </span>
            <span className="text-[#F4F2EE] text-sm font-display font-semibold block uppercase tracking-wide">
              BUILD &amp; ITERATE
            </span>
            <span className="text-[10px] text-[#929292] block tracking-wider">
              Project-Driven Growth &amp; Rigor
            </span>
          </div>

          {/* Metadata Block 4: Location & Status */}
          <div className="space-y-2">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              04 / LOCATION
            </span>
            <span className="text-[#F4F2EE] text-sm font-display font-semibold block uppercase tracking-wide">
              {personalData.contact.location}
            </span>
            <span className="text-[10px] text-[#929292] block tracking-wider flex items-center gap-1.5">
              Open to Collaborative Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
