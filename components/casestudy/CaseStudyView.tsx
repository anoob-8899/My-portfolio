"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Terminal, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project, projectsData } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const containerRef = useRef<HTMLElement>(null);
  const heroLabelRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubheadRef = useRef<HTMLDivElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const primaryVisualRef = useRef<HTMLDivElement>(null);
  const metaColRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);

  // Calculate Previous and Next Projects for Subtle Navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const { caseStudy } = project;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Hero Reveal Sequence
      if (heroLabelRef.current) {
        tl.fromTo(
          heroLabelRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }

      if (heroTitleRef.current) {
        tl.fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
      }

      if (heroSubheadRef.current) {
        tl.fromTo(
          heroSubheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        );
      }

      if (heroDescRef.current) {
        tl.fromTo(
          heroDescRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      if (primaryVisualRef.current) {
        tl.fromTo(
          primaryVisualRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          "-=0.3"
        );
      }

      // 2. ScrollTrigger reveals for content sections
      if (metaColRef.current) {
        gsap.fromTo(
          metaColRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metaColRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (contentColRef.current) {
        const sections = contentColRef.current.querySelectorAll(".cs-section");
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [project.slug]);

  return (
    <article
      ref={containerRef}
      className="min-h-screen w-full pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-[#050505] text-[#F4F2EE] relative overflow-hidden select-none"
    >
      {/* Background Subtle Architectural Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(244,242,238,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,242,238,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Architectural Corner Accent Markers */}
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
        
        {/* ==================================================================== */}
        {/* 1. TOP NAVIGATION & HERO IDENTIFIER                                 */}
        {/* ==================================================================== */}
        <div ref={heroLabelRef} className="space-y-6">
          <div className="flex items-center justify-between border-b border-cool-border pb-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent tracking-widest uppercase transition-colors group"
              data-cursor="BACK"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-accent group-hover:-translate-x-1 transition-transform" />
              <span>← BACK TO SELECTED WORK</span>
            </Link>

            <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
              <span className="text-accent font-semibold">{project.number}</span>
              <span>/</span>
              <span>SELECTED WORK</span>
              {project.year && (
                <span className="hidden sm:inline text-text-muted">[{project.year}]</span>
              )}
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. EDITORIAL HERO DISPLAY HEADER                                    */}
        {/* ==================================================================== */}
        <header className="space-y-6 max-w-5xl">
          {/* Project Title */}
          <h1
            ref={heroTitleRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#F4F2EE] uppercase leading-[0.94] break-words"
          >
            {project.title}
          </h1>

          {/* Project Type / Role Metadata Banner */}
          <div
            ref={heroSubheadRef}
            className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm text-accent tracking-[0.2em] uppercase font-medium pt-1"
          >
            {project.role && <span>{project.role}</span>}
            {project.isComingSoon && (
              <span className="px-2.5 py-0.5 rounded bg-accent/10 border border-accent/30 text-[10px] text-accent">
                IN DEVELOPMENT
              </span>
            )}
          </div>

          {/* Short Factual Description */}
          {project.shortDescription && (
            <p
              ref={heroDescRef}
              className="text-lg sm:text-xl md:text-2xl text-text-secondary font-body font-normal leading-relaxed max-w-3xl pt-2"
            >
              {project.shortDescription}
            </p>
          )}

          {/* Live & Source Repository External Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-text-primary text-bg-primary font-display text-xs font-bold uppercase tracking-widest transition-all hover:bg-white active:scale-95 shadow-lg"
                data-cursor="OPEN"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.repositoryUrl && project.repositoryUrl !== "#" && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-bg-secondary border border-cool-border text-text-primary hover:border-white/30 font-mono text-xs uppercase tracking-widest transition-all active:scale-95"
                data-cursor="CODE"
              >
                <Github className="w-3.5 h-3.5" />
                <span>SOURCE REPOSITORY</span>
              </a>
            )}
          </div>
        </header>

        {/* ==================================================================== */}
        {/* 3. PRIMARY PROJECT VISUAL ANCHOR (DEVICE FRAME)                      */}
        {/* ==================================================================== */}
        <div ref={primaryVisualRef} className="relative w-full pt-4 pb-8">
          <div className="relative w-full max-w-6xl mx-auto aspect-[16/10] bg-[#0D0F10] rounded-xl border border-cool-border p-2.5 sm:p-4 md:p-5 shadow-2xl">
            
            {/* Window / Mockup Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#080A0B] rounded-t-md border-b border-cool-border/40 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF174F]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5F6264]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#20272A]" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-text-muted tracking-widest uppercase">
                CASE STUDY VISUAL — {project.slug}.app
              </span>
            </div>

            {/* Display Area — Preserving Original Image Colors */}
            <div className="relative w-full h-[calc(100%-36px)] rounded-b-md overflow-hidden bg-[#050505] border border-cool-border/30">
              <Image
                src={project.thumbnail || "/images/projects/st-berchmans-portal.svg"}
                alt={`${project.title} primary screenshot preview`}
                fill
                className="object-cover object-top"
                priority
              />

              {/* In Development Overlay Notice if project is coming soon */}
              {project.isComingSoon && (
                <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center">
                  <Terminal className="w-8 h-8 text-accent mb-3" />
                  <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase font-semibold mb-1">
                    PROJECT IN DEVELOPMENT
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F4F2EE] uppercase max-w-md">
                    DOCUMENTATION &amp; CODEBASE UNDER REFINEMENT
                  </h3>
                </div>
              )}
            </div>

            {/* Subtle Base Hinge Accent */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-40 sm:w-56 h-1.5 bg-[#20272A] rounded-b-md shadow-sm" />
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 4. ASYMMETRIC 12-COLUMN EDITORIAL INFORMATION & CONTENT SECTION     */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-cool-border">
          
          {/* LEFT SIDEBAR: STICKY PROJECT METADATA (Cols 1 to 4) */}
          <aside
            ref={metaColRef}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-8 font-mono text-xs"
          >
            {/* Header label */}
            <div className="flex items-center gap-2 text-accent tracking-[0.2em] uppercase font-semibold border-b border-cool-border pb-3">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>PROJECT SPECIFICATIONS</span>
            </div>

            {/* Project Number & Title Spec */}
            <div className="space-y-1">
              <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                01 / PROJECT INDEX
              </span>
              <span className="text-text-primary text-sm font-display font-semibold block uppercase">
                {project.number} — {project.title}
              </span>
            </div>

            {/* Role */}
            {project.role && (
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  02 / ROLE &amp; SCOPE
                </span>
                <span className="text-text-primary text-sm font-display font-medium block uppercase tracking-wide">
                  {project.role}
                </span>
              </div>
            )}

            {/* Timeline */}
            {project.year && (
              <div className="space-y-1">
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  03 / TIMELINE
                </span>
                <span className="text-text-primary text-sm font-display font-medium block uppercase">
                  {project.year}
                </span>
              </div>
            )}

            {/* Technologies */}
            {((caseStudy?.technologies && caseStudy.technologies.length > 0) ||
              (project.technologies && project.technologies.length > 0)) && (
              <div className="space-y-2">
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  04 / TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(caseStudy?.technologies || project.technologies || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-bg-secondary border border-cool-border text-[11px] text-text-primary uppercase tracking-wider font-mono rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {(project.liveUrl || project.repositoryUrl) && (
              <div className="space-y-2 pt-2 border-t border-cool-border/50">
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  05 / LINKS
                </span>
                <div className="space-y-2">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors uppercase tracking-wider"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO URL</span>
                    </a>
                  )}
                  {project.repositoryUrl && project.repositoryUrl !== "#" && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors uppercase tracking-wider"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE REPOSITORY</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>

          {/* RIGHT COLUMN: MAIN CASE STUDY CONTENT FLOW (Cols 5 to 12) */}
          <main ref={contentColRef} className="lg:col-span-8 space-y-16">
            
            {/* 01 — OVERVIEW */}
            {(caseStudy?.overview || project.shortDescription) && (
              <section className="cs-section space-y-4">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    OVERVIEW
                  </h2>
                </div>
                <p className="text-text-primary font-body text-base sm:text-lg leading-relaxed pt-1">
                  {caseStudy?.overview || project.shortDescription}
                </p>
              </section>
            )}

            {/* 02 — THE PROBLEM & CHALLENGE */}
            {caseStudy?.problem && (
              <section className="cs-section space-y-4 pt-4 border-t border-cool-border/40">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    THE PROBLEM &amp; CHALLENGE
                  </h2>
                </div>
                <p className="text-text-secondary font-body text-base leading-relaxed pt-1">
                  {caseStudy.problem}
                </p>
              </section>
            )}

            {/* 03 — ARCHITECTURAL APPROACH */}
            {caseStudy?.approach && (
              <section className="cs-section space-y-4 pt-4 border-t border-cool-border/40">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    03
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    ARCHITECTURAL APPROACH
                  </h2>
                </div>
                <p className="text-text-secondary font-body text-base leading-relaxed pt-1">
                  {caseStudy.approach}
                </p>
              </section>
            )}

            {/* 04 — DESIGN & DEVELOPMENT */}
            {caseStudy?.development && (
              <section className="cs-section space-y-4 pt-4 border-t border-cool-border/40">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    04
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    DESIGN &amp; DEVELOPMENT
                  </h2>
                </div>
                <p className="text-text-secondary font-body text-base leading-relaxed pt-1">
                  {caseStudy.development}
                </p>
              </section>
            )}

            {/* 05 — RESULT & IMPACT */}
            {caseStudy?.result && (
              <section className="cs-section space-y-4 pt-4 border-t border-cool-border/40">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    05
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    RESULT &amp; IMPACT
                  </h2>
                </div>
                <p className="text-text-secondary font-body text-base leading-relaxed pt-1">
                  {caseStudy.result}
                </p>
              </section>
            )}

            {/* 06 — KEY LEARNINGS */}
            {caseStudy?.learnings && (
              <section className="cs-section space-y-4 pt-4 border-t border-cool-border/40">
                <div className="flex items-center gap-3 border-b border-cool-border pb-3">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
                    06
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F2EE]">
                    KEY LEARNINGS
                  </h2>
                </div>
                <p className="text-text-secondary font-body text-base leading-relaxed pt-1">
                  {caseStudy.learnings}
                </p>
              </section>
            )}

            {/* ADDITIONAL VISUAL PREVIEW CONTAINER */}
            <section className="cs-section pt-8 border-t border-cool-border/40 space-y-4">
              <div className="flex items-center justify-between border-b border-cool-border pb-3">
                <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                  ADDITIONAL PROJECT VISUAL
                </span>
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  FIG.02 // INTERFACE FRAME
                </span>
              </div>
              <div className="relative w-full aspect-[16/9] bg-bg-secondary rounded-lg border border-cool-border overflow-hidden">
                <Image
                  src={project.thumbnail || "/images/projects/st-berchmans-portal.svg"}
                  alt={`${project.title} layout frame`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-text-secondary">
                  <span>{project.title}</span>
                  <span className="text-accent">SELECTED WORK</span>
                </div>
              </div>
            </section>

          </main>
        </div>

        {/* ==================================================================== */}
        {/* 5. EDITORIAL PREVIOUS / NEXT NAVIGATION & FOOTER                     */}
        {/* ==================================================================== */}
        <footer className="pt-16 sm:pt-24 border-t border-cool-border space-y-12">
          
          {/* Subtle Prev / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            {/* Previous Project */}
            {prevProject && (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group p-6 bg-bg-secondary border border-cool-border hover:border-white/20 transition-all flex flex-col justify-between gap-3"
                data-cursor="PREV"
              >
                <div className="flex items-center gap-2 text-text-muted group-hover:text-accent transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span className="tracking-widest uppercase">PREVIOUS PROJECT</span>
                </div>
                <div className="font-display text-lg font-bold text-[#F4F2EE] uppercase group-hover:text-accent transition-colors truncate">
                  {prevProject.number} — {prevProject.title}
                </div>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group p-6 bg-bg-secondary border border-cool-border hover:border-white/20 transition-all flex flex-col justify-between gap-3 text-right"
                data-cursor="NEXT"
              >
                <div className="flex items-center justify-end gap-2 text-text-muted group-hover:text-accent transition-colors">
                  <span className="tracking-widest uppercase">NEXT PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-display text-lg font-bold text-[#F4F2EE] uppercase group-hover:text-accent transition-colors truncate">
                  {nextProject.number} — {nextProject.title}
                </div>
              </Link>
            )}
          </div>

          {/* Bottom Back Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-3 px-8 py-4 bg-bg-secondary border border-cool-border hover:border-white/30 text-[#F4F2EE] hover:text-accent font-mono text-xs uppercase tracking-[0.2em] transition-all group"
              data-cursor="RETURN"
            >
              <ArrowLeft className="w-4 h-4 text-accent group-hover:-translate-x-1 transition-transform" />
              <span>← BACK TO SELECTED WORK</span>
            </Link>
          </div>

        </footer>

      </div>
    </article>
  );
}
