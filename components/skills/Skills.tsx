"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/data/skills";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current) {
        // Section Header Reveal
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
                start: "top 80%",
              },
            }
          );
        }

        // Skill Matrix Category Cards Reveal
        if (matrixRef.current) {
          const blocks = matrixRef.current.children;
          gsap.fromTo(
            blocks,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: matrixRef.current,
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
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-bg-primary border-t border-cool-border overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-16 md:space-y-20">
        
        {/* Editorial Section Header */}
        <div ref={headerRef} className="space-y-6">
          <div className="flex items-center justify-between border-b border-cool-border pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                02
              </span>
              <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                / SKILLS &amp; CAPABILITY
              </span>
            </div>
            <span className="font-mono text-[11px] text-text-muted tracking-[0.2em] uppercase hidden sm:inline">
              TECHNICAL MATRIX
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              id="skills-heading"
              className="text-3xl sm:text-5xl font-display font-extrabold text-text-primary uppercase tracking-tight max-w-2xl leading-[1.05]"
            >
              TOOLS I USE TO TURN{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                IDEAS
              </span>{" "}
              INTO SYSTEMS.
            </h2>

            <p className="font-mono text-xs text-text-secondary tracking-widest uppercase max-w-xs">
              // DATA-DRIVEN STACK BASED ON CONTINUOUS LEARNING &amp; PROJECT IMPLEMENTATION.
            </p>
          </div>
        </div>

        {/* Typographic Skill Matrix Layout (4 Category Architectural Columns) */}
        <div
          ref={matrixRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.id}
              className="bg-bg-secondary border border-cool-border p-6 sm:p-8 flex flex-col justify-between space-y-8 hover:border-cool-border/80 transition-colors duration-300 relative group"
            >
              {/* Category Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-cool-border/60 pb-3">
                  <span className="font-mono text-xs text-accent font-bold tracking-widest">
                    0{catIdx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                    DOMAIN
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-text-primary tracking-wide">
                  {category.title}
                </h3>
                
                <p className="font-mono text-xs text-text-muted leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Skill Items List */}
              <div className="space-y-4 pt-4 border-t border-cool-border/40">
                {category.items.map((item, itemIdx) => {
                  const itemKey = `${category.id}-${itemIdx}`;
                  const isHovered = hoveredSkill === itemKey;

                  return (
                    <div
                      key={itemIdx}
                      tabIndex={0}
                      role="button"
                      aria-label={`${item.name}: ${item.label}`}
                      onMouseEnter={() => setHoveredSkill(itemKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onFocus={() => setHoveredSkill(itemKey)}
                      onBlur={() => setHoveredSkill(null)}
                      className={`p-3 border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent ${
                        isHovered
                          ? "bg-bg-surface border-accent/60 translate-x-1"
                          : "bg-bg-primary/50 border-cool-border/60 hover:border-cool-border"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`font-display text-sm font-bold uppercase tracking-wide transition-colors ${
                            isHovered ? "text-accent" : "text-text-primary"
                          }`}
                        >
                          {item.name}
                        </span>
                        {isHovered && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </div>
                      <p className="font-mono text-[11px] text-text-secondary">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Architectural Hairline Detail */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-text-muted uppercase tracking-widest">
                <span>ACTIVE STACK</span>
                <span>{category.items.length} ITEMS</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section Footer / Narrative Bridge to CON 4 */}
        <div className="pt-12 border-t border-cool-border flex items-center justify-between text-xs font-mono text-text-muted uppercase tracking-widest">
          <span>02 / SKILLS COMPLETE</span>
          <span className="text-accent hidden sm:inline">PROCEED TO CON 4 — SELECTED WORK</span>
          <span>NEXT: SELECTED WORK</span>
        </div>

      </div>
    </section>
  );
}
