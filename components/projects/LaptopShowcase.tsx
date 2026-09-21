"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LaptopShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      projectRefs.current.forEach((el) => {
        if (!el) return;

        const number = el.querySelector(".project-number");
        const title = el.querySelector(".project-title");
        const visual = el.querySelector(".project-visual");
        const info = el.querySelector(".project-info");
        const cta = el.querySelector(".project-cta");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (number) {
          tl.fromTo(number, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        }
        if (title) {
          tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
        }
        if (visual) {
          tl.fromTo(visual, { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" }, "-=0.5");
        }
        if (info) {
          tl.fromTo(info, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
        }
        if (cta) {
          tl.fromTo(cta, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#050505] text-[#F4F2EE] overflow-hidden select-none"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 border-b border-cool-border pb-6 flex items-center justify-between">
        <span className="font-mono text-xs text-text-muted tracking-[0.25em] uppercase font-medium">
          03 / SELECTED WORK
        </span>
        <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
          01 — 0{projectsData.length}
        </span>
      </div>

      {/* Projects Editorial Stack */}
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
        {projectsData.map((project, index) => {
          const roleText = project.role ? project.role.toUpperCase() : "";
          const techText = project.technologies
            ? project.technologies.join(" · ").toUpperCase()
            : "";

          return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="space-y-8 md:space-y-12 pb-24 md:pb-36 border-b border-cool-border last:border-b-0 last:pb-0"
            >
              {/* 1. PROJECT HEADER */}
              <div className="space-y-3 md:space-y-4">
                {/* Project Number (visually quieter than title) */}
                <span className="project-number font-mono text-sm md:text-base text-text-muted tracking-widest block font-medium">
                  {project.number}
                </span>

                {/* Editorial Display Title */}
                <h3 className="project-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#F4F2EE] uppercase leading-[0.95] max-w-4xl">
                  {project.title}
                </h3>
              </div>

              {/* 2. LARGE PROJECT VISUAL / LAPTOP OBJECT */}
              <div className="project-visual group relative w-full my-6 md:my-10">
                <div className="relative w-full max-w-6xl mx-auto aspect-[16/10] bg-[#0D0F10] rounded-xl border border-cool-border p-2.5 sm:p-4 md:p-5 shadow-2xl transition-all duration-500 group-hover:border-cool-border/80 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.9)]">
                  
                  {/* Laptop Screen Bezel Header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#080A0B] rounded-t-md border-b border-cool-border/40 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-[1.5px] bg-accent/80" />
                      <span className="w-4 h-[1.5px] bg-[#5F6264]/40" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-text-muted tracking-widest uppercase">
                      PORTFOLIO WORKSPACE — {project.slug}.app
                    </span>
                  </div>

                  {/* Display Screen */}
                  <div className="relative w-full h-[calc(100%-36px)] rounded-b-md overflow-hidden bg-[#050505]">
                    <Image
                      src={project.thumbnail || "/images/projects/st-berchmans-portal.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      priority={index === 0}
                    />

                    {/* Coming Soon Overlay Indicator */}
                    {project.isComingSoon && (
                      <div className="absolute inset-0 bg-[#050505]/75 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-2 font-semibold">
                          PROJECT IN DEVELOPMENT
                        </span>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-[#F4F2EE] uppercase">
                          INFORMATION COMING SOON
                        </h4>
                      </div>
                    )}
                  </div>

                  {/* Laptop Base Hinge Accent */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-40 sm:w-56 h-1.5 bg-[#20272A] rounded-b-md shadow-sm" />
                </div>
              </div>

              {/* 3. RESTRAINED EDITORIAL INFORMATION ROW & CTA */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end pt-2">
                
                {/* Description & Typographic Metadata (Columns 1 to 8) */}
                <div className="project-info md:col-span-8 space-y-4">
                  {/* Factual Short Description */}
                  <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed max-w-2xl">
                    {project.shortDescription}
                  </p>

                  {/* Metadata displayed strictly as typography (NOT rounded pills) */}
                  <div className="font-mono text-xs md:text-sm text-text-muted space-y-1 tracking-wider uppercase pt-2">
                    {roleText && (
                      <div className="text-text-secondary font-medium">
                        {roleText}
                      </div>
                    )}
                    {techText && (
                      <div className="text-text-muted">
                        {techText}
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. CASE STUDY CTA (Columns 9 to 12) */}
                <div className="project-cta md:col-span-4 md:flex md:justify-end">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-3 font-mono text-xs md:text-sm font-semibold tracking-[0.15em] text-[#F4F2EE] hover:text-accent transition-colors py-2"
                    data-cursor="VIEW"
                  >
                    <span className="relative">
                      VIEW CASE STUDY
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
