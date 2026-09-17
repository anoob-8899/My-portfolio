"use client";

import React from "react";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

interface PurposeItem {
  id: string;
  number: string;
  label: string;
}

const PURPOSE_ITEMS: PurposeItem[] = [
  { id: "community", number: "01", label: "Know each other and foster department community" },
  { id: "activities", number: "02", label: "Learn about department activities, events and announcements" },
  { id: "resources", number: "03", label: "Access and download academic notes and study materials" },
  { id: "chatbot", number: "04", label: "Ask the website chatbot about academic and study doubts" },
];

const TECHNOLOGIES = ["ANTIGRAVITY", "GITHUB", "VERCEL"];

export function ProjectMetadata() {
  return (
    <div className="w-full space-y-12 md:space-y-16 pt-6">
      
      {/* 1. PROJECT DESCRIPTION & PURPOSE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-[#20272A] pt-10">
        
        {/* Left Column: Description & Objective */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF174F] tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF174F]" />
            <span>PROJECT OVERVIEW</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F5F5F5] tracking-tight leading-snug">
            A DYNAMIC WEBSITE FOR MY COLLEGE DEPARTMENT.
          </h3>

          <p className="font-body text-sm sm:text-base text-[#929292] leading-relaxed">
            Designed as a central digital platform connecting students, providing departmental updates, distribution of study notes, and an interactive AI chatbot for academic query resolution.
          </p>
        </div>

        {/* Right Column: Problem Solved / Key Student Benefits */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[#20272A] pb-3">
            <span className="font-mono text-[10px] text-[#FF174F] tracking-[0.25em] uppercase">
              STUDENT SOLUTIONS &amp; FEATURES
            </span>
            <span className="font-mono text-[10px] text-[#5F6264] tracking-widest uppercase">
              [ 04 CORE CAPABILITIES ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PURPOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 border border-[#20272A] bg-[#050505] hover:border-white/20 transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between mb-2 font-mono text-xs">
                  <span className="text-[#FF174F] font-semibold tracking-wider">
                    {item.number}
                  </span>
                  <span className="text-[#5F6264] text-[10px] tracking-widest uppercase group-hover:text-[#929292] transition-colors">
                    FEATURE
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#F5F5F5] leading-relaxed font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. TECHNICAL SPECIFICATIONS & ACTIONS ROW */}
      <div className="border-t border-[#20272A] pt-8 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
        
        {/* Spec 1: Year */}
        <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-6">
          <span className="text-[10px] text-[#FF174F] tracking-widest uppercase block">
            YEAR
          </span>
          <span className="text-[#F5F5F5] text-base font-display font-semibold block tracking-wider">
            2026
          </span>
        </div>

        {/* Spec 2: Status */}
        <div className="space-y-1.5 border-b lg:border-b-0 lg:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-6">
          <span className="text-[10px] text-[#FF174F] tracking-widest uppercase block">
            STATUS
          </span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[#F5F5F5] text-base font-display font-semibold uppercase tracking-wider">
              COMPLETED
            </span>
          </div>
        </div>

        {/* Spec 3: Technologies */}
        <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-[#20272A] pb-4 sm:pb-0 sm:pr-6">
          <span className="text-[10px] text-[#FF174F] tracking-widest uppercase block">
            TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#F5F5F5] text-xs font-semibold tracking-wider">
            {TECHNOLOGIES.map((tech, idx) => (
              <span key={tech}>
                {tech}
                {idx < TECHNOLOGIES.length - 1 && <span className="text-[#5F6264] ml-2">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Spec 4: Editorial Actions / Links */}
        <div className="space-y-3 pt-1 sm:pt-0">
          <span className="text-[10px] text-[#FF174F] tracking-widest uppercase block">
            PROJECT LINKS
          </span>

          <div className="flex flex-col space-y-2">
            {/* Live Website Link */}
            <a
              href="https://monday-website-kohl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between font-mono text-xs font-medium tracking-wider text-[#F5F5F5] hover:text-[#FF174F] border-b border-white/10 hover:border-[#FF174F] pb-1 transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                <span>LIVE WEBSITE</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF174F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/anoob-8899/monday-website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between font-mono text-xs font-medium tracking-wider text-[#929292] hover:text-[#F5F5F5] border-b border-transparent hover:border-white/20 pb-1 transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-[#929292] group-hover:text-white transition-colors" />
                <span>GITHUB REPOSITORY</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#929292] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
