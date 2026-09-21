"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { LaptopMockup } from "./LaptopMockup";
import { PhoneMockup } from "./PhoneMockup";
import { ProjectMetadata } from "./ProjectMetadata";
import { projectsData } from "@/data/projects";

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
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const reemasProject = projectsData.find((p) => p.slug === "reemas-studio");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current && headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      aria-labelledby="works-heading"
      className="relative w-full h-full min-h-[calc(100vh-6rem)] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#050505] text-[#F5F5F5] border-t border-[#20272A] overflow-y-auto select-none"
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 md:space-y-12 pb-16">
        
        {/* EDITORIAL SECTION HEADER BAR WITH SWITCHER */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#20272A] pb-4"
        >
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-accent font-semibold tracking-widest uppercase">
              02
            </span>
            <span className="text-[#5F6264]">/</span>
            <span className="text-[#929292] tracking-widest uppercase">
              WORKS
            </span>
          </div>

          {/* PROJECT SWITCHER CONTROLS (Cyan accent, 01 / 02 counter, no dots) */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 bg-[#0D1214] border border-[#20272A] px-3 py-1.5 rounded-md">
              <button
                onClick={handlePrevProject}
                className="p-1 text-[#929292] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-accent font-bold tracking-wider px-2">
                0{activeProjectIndex + 1} / 02
              </span>

              <button
                onClick={handleNextProject}
                className="p-1 text-[#929292] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[10px] text-[#5F6264] tracking-[0.2em] uppercase">
              <button
                onClick={() => setActiveProjectIndex(0)}
                className={`transition-colors ${
                  activeProjectIndex === 0 ? "text-accent font-semibold" : "hover:text-[#929292]"
                }`}
              >
                01 ST. BERCHMANS
              </button>
              <span>/</span>
              <button
                onClick={() => setActiveProjectIndex(1)}
                className={`transition-colors ${
                  activeProjectIndex === 1 ? "text-accent font-semibold" : "hover:text-[#929292]"
                }`}
              >
                02 REEMAS STUDIO
              </button>
            </div>
          </div>
        </div>

        {/* PROJECT CONTENT VIEW */}
        <AnimatePresence mode="wait">
          {activeProjectIndex === 0 ? (
            <motion.div
              key="project-01"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-12 md:space-y-16"
            >
              {/* PROJECT TITLE & SUBTITLE HEADER */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase block">
                  {"// FEATURED PROJECT 01"}
                </span>

                <h2
                  id="works-heading"
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-[0.92]"
                >
                  COLLEGE DEPARTMENT <br className="hidden sm:block" />
                  <span className="text-accent">WEBSITE</span>
                </h2>

                <p className="text-sm sm:text-base font-mono text-[#929292] tracking-wider uppercase pt-2">
                  A DYNAMIC WEBSITE FOR MY COLLEGE DEPARTMENT
                </p>
              </div>

              {/* CINEMATIC LAPTOP VISUAL SHOWCASE */}
              <div className="w-full">
                <LaptopMockup
                  videoSrc={PROJECT_ASSETS.videoSrc}
                  screenshots={PROJECT_ASSETS.screenshots}
                  altText="College Department Website"
                />
              </div>

              {/* EDITORIAL PROJECT METADATA & PURPOSE */}
              <div className="w-full">
                <ProjectMetadata />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="project-02"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-12 md:space-y-16"
            >
              {/* PROJECT TITLE & SUBTITLE HEADER */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase block">
                  {"// FEATURED PROJECT 02"}
                </span>

                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-[0.95]">
                  REEMAS <span className="text-accent">STUDIO</span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base font-mono text-[#929292] tracking-wider uppercase pt-1">
                  {reemasProject?.headline || "A CINEMATIC PORTFOLIO WEBSITE FOR A PHOTOGRAPHY STUDIO."}
                </p>
              </div>

              {/* PROJECT 02 MAIN SHOWCASE (DESKTOP: PHONE MOCKUP + DETAILS SIDE-BY-SIDE | MOBILE: STACKED) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
                
                {/* LEFT / CENTER: PHONE MOCKUP */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  <PhoneMockup
                    videoSrc="/videos/reemas-studio.mp4"
                    posterSrc="/images/reemas-studio-poster.jpg"
                    altText="REEMAS STUDIO Mobile Portfolio Preview"
                    isActive={activeProjectIndex === 1}
                  />
                </div>

                {/* RIGHT: OVERVIEW, 4 FEATURES & METADATA */}
                <div className="lg:col-span-7 space-y-10">
                  
                  {/* OVERVIEW & DESCRIPTION */}
                  <div className="space-y-4 border-t border-[#20272A] pt-6">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-accent tracking-[0.25em] uppercase">
                      <span>PROJECT OVERVIEW</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F5F5F5] tracking-tight leading-snug">
                      CINEMATIC VISUAL NARRATIVES &amp; EDITORIAL PHOTOGRAPHY
                    </h3>

                    <p className="font-body text-sm sm:text-base text-[#929292] leading-relaxed">
                      {reemasProject?.caseStudy?.overview ||
                        "A portfolio website for an independent photography studio based in Changanassery, Kerala. It presents editorial, portrait, wedding and event work through a cinematic full-screen hero, category-based project galleries, an About page and a contact page for worldwide commissions."}
                    </p>
                  </div>

                  {/* 4-CARD FEATURES LAYOUT WITH "FEATURE" TAGS */}
                  <div className="space-y-4 border-t border-[#20272A] pt-6">
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase">
                        STUDIO SOLUTIONS &amp; FEATURES
                      </span>
                      <span className="font-mono text-[10px] text-[#5F6264] tracking-widest uppercase">
                        [ 04 CORE CAPABILITIES ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {reemasProject?.features?.map((feature, idx) => (
                        <div
                          key={feature.title}
                          className="p-4 border border-[#20272A] bg-[#050505] hover:border-white/20 transition-colors duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-2 font-mono text-xs">
                            <span className="text-accent font-semibold tracking-wider">
                              0{idx + 1}
                            </span>
                            <span className="text-[#5F6264] text-[10px] tracking-widest uppercase group-hover:text-[#929292] transition-colors">
                              FEATURE
                            </span>
                          </div>
                          <h4 className="font-display text-sm font-bold text-[#F5F5F5] mb-1">
                            {feature.title}
                          </h4>
                          <p className="font-body text-xs text-[#929292] leading-relaxed font-normal">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* METADATA ROW */}
                  <div className="border-t border-[#20272A] pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
                    
                    {/* Spec 1: Year */}
                    <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-4">
                      <span className="text-[10px] text-accent tracking-widest uppercase block">
                        YEAR
                      </span>
                      <span className="text-[#F5F5F5] text-base font-display font-semibold block tracking-wider">
                        2026
                      </span>
                    </div>

                    {/* Spec 2: Status */}
                    <div className="space-y-1.5 border-b lg:border-b-0 lg:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-4">
                      <span className="text-[10px] text-accent tracking-widest uppercase block">
                        STATUS
                      </span>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[#F5F5F5] text-sm font-display font-semibold uppercase tracking-wider">
                          COMPLETED
                        </span>
                      </div>
                    </div>

                    {/* Spec 3: Role & Tech */}
                    <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-4">
                      <span className="text-[10px] text-accent tracking-widest uppercase block">
                        ROLE &amp; TECH
                      </span>
                      <p className="text-[#F5F5F5] text-xs font-semibold tracking-wider">
                        Designer &amp; Developer
                      </p>
                      <p className="text-[#929292] text-[10px] tracking-wider uppercase">
                        Next.js / React / Vercel / Cloudinary
                      </p>
                    </div>

                    {/* Spec 4: Live Website Link */}
                    <div className="space-y-2 pt-1 sm:pt-0">
                      <span className="text-[10px] text-accent tracking-widest uppercase block">
                        PROJECT LINKS
                      </span>

                      <a
                        href="https://reemas-studio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between w-full font-mono text-xs font-medium tracking-wider text-[#F5F5F5] hover:text-accent border-b border-white/10 hover:border-accent pb-1 transition-colors duration-300"
                        aria-label="Open REEMAS STUDIO Live Website in a new tab"
                      >
                        <span className="flex items-center gap-2">
                          <span>LIVE WEBSITE</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
