"use client";

import React, { useRef, useEffect } from "react";
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
  const bioRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

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

        // 5. Bio Copy reveal
        if (bioRef.current) {
          gsap.fromTo(
            bioRef.current.children,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bioRef.current,
                start: "top 85%",
              },
            }
          );
        }

        // 6. Metadata reveal
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

        // 7. Transition bridge reveal
        if (transitionRef.current) {
          gsap.fromTo(
            transitionRef.current,
            { opacity: 0, scaleX: 0.96 },
            {
              opacity: 1,
              scaleX: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: transitionRef.current,
                start: "top 95%",
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
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 bg-bg-primary border-t border-cool-border overflow-hidden select-none"
    >
      {/* Background Architectural Subtle Line Highlights */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,rgba(244,242,238,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,238,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Architectural Corner Markers */}
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-16">
        {/* Editorial Section Header */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-cool-border pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              01
            </span>
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              / ABOUT
            </span>
          </div>
          <span className="font-mono text-[11px] text-text-muted tracking-[0.2em] uppercase hidden sm:inline">
            THE PERSON BEHIND THE WORK
          </span>
        </div>

        {/* ==================================================================== */}
        {/* DESKTOP EDITORIAL CINEMATIC COMPOSITION (lg:grid)                     */}
        {/* ==================================================================== */}
        <div className="hidden lg:block relative min-h-[640px] py-4">
          
          {/* Central Portrait Visual Anchor */}
          <div className="flex justify-center items-center w-full">
            <div
              ref={portraitFrameRef}
              className="relative w-[360px] xl:w-[400px] aspect-[3/4] group transition-transform duration-700 hover:scale-[1.005]"
              data-cursor="REVEAL"
            >
              {/* Inner Image Container with Hairline Border */}
              <div className="relative w-full h-full overflow-hidden border border-cool-border/80 bg-bg-surface">
                <Image
                  src="/images/portrait.svg"
                  alt="Vincent Antony Editorial Portrait"
                  fill
                  sizes="(max-width: 1200px) 360px, 400px"
                  className="object-cover object-center filter grayscale contrast-[1.06] brightness-95 opacity-95 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />

                {/* Restrained Gradient Overlay supporting contrast without muddying portrait features */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-65 pointer-events-none" />

                {/* Editorial Specifier Tag */}
                <div className="absolute top-3 left-3 bg-bg-primary/60 backdrop-blur-sm border border-cool-border/60 px-2 py-0.5">
                  <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase block">
                    IMG.01 // SUBJECT
                  </span>
                </div>

                {/* Portrait Framing Metadata Footer */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono z-10">
                  <span className="text-text-primary text-[11px] uppercase tracking-wider font-semibold drop-shadow-sm">
                    {personalData.name}
                  </span>
                  <span className="text-[9px] text-text-secondary uppercase tracking-widest drop-shadow-sm">
                    {personalData.contact.location}
                  </span>
                </div>
              </div>

              {/* Minimal Hairline Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/20" />
            </div>
          </div>

          {/* Top-Left Oversized Editorial Typography (Crosses Portrait Boundary Naturally) */}
          <div
            ref={headlineTopRef}
            className="absolute top-4 left-0 z-20 max-w-[520px] xl:max-w-[600px] pointer-events-none select-none"
          >
            <h2
              id="about-heading"
              className="text-5xl xl:text-7xl font-display font-extrabold text-text-primary uppercase tracking-tight leading-[0.92]"
            >
              BUILDING WITH <br />
              <span className="text-text-primary underline decoration-accent/60 decoration-1 underline-offset-8">
                DATA &amp; CODE
              </span>
            </h2>
          </div>

          {/* Bottom-Right Oversized Editorial Typography (Crosses Portrait Boundary Naturally) */}
          <div
            ref={headlineBottomRef}
            className="absolute bottom-14 right-0 z-20 max-w-[480px] xl:max-w-[560px] text-right pointer-events-none select-none"
          >
            <h3 className="text-4xl xl:text-6xl font-display font-extrabold text-text-primary/95 uppercase tracking-tight leading-[0.94]">
              TURNING IDEAS INTO <br />
              <span className="font-outline text-text-primary/80">
                DIGITAL EXPERIENCES.
              </span>
            </h3>
          </div>

          {/* Mid-Right Subtle Architectural Indicator & Mono Statement */}
          <div className="absolute top-8 right-0 flex items-center gap-2.5 font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 bg-accent inline-block rounded-full" />
            <span className="text-text-secondary">
              BUILDING BEYOND AESTHETICS
            </span>
          </div>

          {/* Bottom-Left Bio Paragraphs */}
          <div
            ref={bioRef}
            className="absolute bottom-0 left-0 max-w-[400px] xl:max-w-[440px] space-y-4 text-left z-20"
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
              <span>01 // STATEMENT</span>
            </div>

            <p className="text-text-secondary font-body text-base leading-relaxed">
              {personalData.bio.aboutBio}
            </p>

            <p className="text-xs font-mono text-text-muted leading-relaxed border-l border-cool-border pl-3">
              Focused on understanding machine learning models, working with data pipelines, and building clean web interfaces.
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MOBILE & TABLET STACKED COMPOSITION (< lg:block)                     */}
        {/* ==================================================================== */}
        <div className="block lg:hidden space-y-10">
          
          {/* Portrait Anchor Mobile */}
          <div className="flex justify-center">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] group"
              data-cursor="REVEAL"
            >
              <div className="relative w-full h-full overflow-hidden border border-cool-border bg-bg-surface">
                <Image
                  src="/images/portrait.svg"
                  alt="Vincent Antony Editorial Portrait"
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover object-center filter grayscale contrast-[1.06] opacity-95 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-65 pointer-events-none" />
                <div className="absolute top-2.5 left-2.5 bg-bg-primary/60 backdrop-blur-sm border border-cool-border/60 px-2 py-0.5">
                  <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase block">
                    IMG.01 // SUBJECT
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs font-mono z-10">
                  <span className="text-text-primary text-xs uppercase tracking-wider font-semibold">
                    {personalData.name}
                  </span>
                  <span className="text-[9px] text-text-secondary uppercase tracking-widest">
                    {personalData.contact.location}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/20" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-white/20" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-white/20" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/20" />
            </div>
          </div>

          {/* Editorial Display Headlines Mobile */}
          <div ref={headlineTopRef} className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
              <span>FOCUS // AI • DATA • TECHNOLOGY</span>
            </div>

            <h2
              id="about-heading-mobile"
              className="text-3xl sm:text-4xl font-display font-extrabold text-text-primary uppercase tracking-tight leading-[1.04]"
            >
              BUILDING WITH{" "}
              <span className="text-text-primary underline decoration-accent/60 decoration-1 underline-offset-4">
                DATA, CODE
              </span>{" "}
              &amp; INTELLIGENCE.
            </h2>

            <p className="text-xs sm:text-sm font-mono text-text-secondary tracking-wider uppercase font-medium border-l border-cool-border pl-3.5 py-0.5">
              "{personalData.bio.secondaryStatement}"
            </p>
          </div>

          {/* Bio Text Mobile */}
          <div ref={bioRef} className="space-y-3 text-text-secondary font-body text-base leading-relaxed">
            <p>{personalData.bio.aboutBio}</p>
            <p className="text-xs font-mono text-text-muted leading-relaxed">
              Focused on understanding machine learning models, working with data pipelines, and building clean web interfaces.
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* EDITORIAL METADATA INFORMATION BLOCKS (Hairline Divider Style)        */}
        {/* ==================================================================== */}
        <div
          ref={metadataRef}
          className="pt-10 border-t border-cool-border grid grid-cols-1 sm:grid-cols-3 gap-8 font-mono text-xs"
        >
          {/* Metadata Item 1: Degree */}
          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-cool-border/60 pb-6 sm:pb-0 sm:pr-8">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              01 / DEGREE
            </span>
            <span className="text-text-primary text-sm font-display font-semibold block uppercase tracking-wide">
              BSc AI &amp; Data Science
            </span>
            <span className="text-[10px] text-text-muted block tracking-wider">
              Student &amp; Practitioner
            </span>
          </div>

          {/* Metadata Item 2: Location */}
          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-cool-border/60 pb-6 sm:pb-0 sm:pr-8">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              02 / LOCATION
            </span>
            <span className="text-text-primary text-sm font-display font-semibold block uppercase tracking-wide">
              {personalData.contact.location}
            </span>
            <span className="text-[10px] text-text-muted block tracking-wider">
              India
            </span>
          </div>

          {/* Metadata Item 3: Methodology */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-accent tracking-widest uppercase block">
              03 / METHODOLOGY
            </span>
            <span className="text-text-primary text-sm font-display font-semibold block uppercase tracking-wide">
              Build &amp; Learn
            </span>
            <span className="text-[10px] text-text-muted block tracking-wider">
              Project-driven growth
            </span>
          </div>
        </div>

        {/* Visual Connection Transition (About -> Skills) */}
        <div
          ref={transitionRef}
          className="pt-12 sm:pt-16 border-t border-cool-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>01 / IDENTITY</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[10px] text-text-muted">
            <span className="h-[1px] w-12 bg-cool-border" />
            <span className="text-accent/80">IDENTITY → CAPABILITY</span>
            <span className="h-[1px] w-12 bg-cool-border" />
          </div>

          <div className="flex items-center gap-2">
            <span>02 / CAPABILITY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cool-surface" />
          </div>
        </div>

      </div>
    </section>
  );
}
