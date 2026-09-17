"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LaptopMockup } from "./LaptopMockup";
import { ProjectMetadata } from "./ProjectMetadata";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_ASSETS = {
  videoSrc: "/projects/college-department/website.mp4",
  screenshots: [
    "/projects/college-department/homepage.jpg",
    "/projects/college-department/page-02.jpg",
    "/projects/college-department/page-03.jpg",
  ],
};

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current) {
        // 1. Header Identifier Reveal
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

        // 2. Display Title Reveal
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: titleRef.current || sectionRef.current,
                start: "top 80%",
              },
            }
          );
        }

        // 3. Laptop Visual Reveal
        if (visualRef.current) {
          gsap.fromTo(
            visualRef.current,
            { opacity: 0, y: 40, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: visualRef.current,
                start: "top 75%",
              },
            }
          );
        }

        // 4. Metadata Reveal
        if (metadataRef.current) {
          gsap.fromTo(
            metadataRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: metadataRef.current,
                start: "top 80%",
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
      id="works"
      ref={sectionRef}
      aria-labelledby="works-heading"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#050505] text-[#F5F5F5] border-t border-[#20272A] overflow-hidden select-none"
    >
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Hairline Architectural Corner Markers */}
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
        
        {/* EDITORIAL SECTION HEADER BAR */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-[#20272A] pb-4"
        >
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#FF174F] font-semibold tracking-widest uppercase">
              02
            </span>
            <span className="text-[#5F6264]">/</span>
            <span className="text-[#929292] tracking-widest uppercase">
              WORKS
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[10px] sm:text-xs text-[#5F6264] tracking-[0.2em] uppercase">
            <span className="hidden sm:inline">FEATURED PROJECT SHOWCASE</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#929292]">COLLEGE DEPARTMENT</span>
          </div>
        </div>

        {/* PROJECT TITLE & SUBTITLE HEADER */}
        <div ref={titleRef} className="space-y-3">
          <span className="font-mono text-[10px] text-[#FF174F] tracking-[0.25em] uppercase block">
            // FEATURED PROJECT
          </span>

          <h2
            id="works-heading"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-[0.92]"
          >
            COLLEGE DEPARTMENT <br className="hidden sm:block" />
            <span className="text-[#FF174F]">WEBSITE</span>
          </h2>

          <p className="text-sm sm:text-base font-mono text-[#929292] tracking-wider uppercase pt-2">
            A DYNAMIC WEBSITE FOR MY COLLEGE DEPARTMENT
          </p>
        </div>

        {/* CINEMATIC LAPTOP VISUAL SHOWCASE */}
        <div ref={visualRef} className="w-full">
          <LaptopMockup
            videoSrc={PROJECT_ASSETS.videoSrc}
            screenshots={PROJECT_ASSETS.screenshots}
            altText="College Department Website"
          />
        </div>

        {/* EDITORIAL PROJECT METADATA & PURPOSE */}
        <div ref={metadataRef} className="w-full">
          <ProjectMetadata />
        </div>

      </div>
    </section>
  );
}
