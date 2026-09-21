"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Instagram, Copy, Check, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData } from "@/data/personal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const layoutGridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      if (sectionRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        // Sequential GSAP reveal: Header -> Headline -> Copy -> Layout Grid -> Footer
        if (headerRef.current) {
          tl.fromTo(
            headerRef.current,
            { opacity: 0, y: -15 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
          );
        }

        if (headlineRef.current) {
          tl.fromTo(
            headlineRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4"
          );
        }

        if (copyRef.current) {
          tl.fromTo(
            copyRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.5"
          );
        }

        if (layoutGridRef.current) {
          tl.fromTo(
            layoutGridRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }

        if (footerRef.current) {
          tl.fromTo(
            footerRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.3"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    if (!personalData.contact.email) return;
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="relative min-h-[90vh] w-full py-20 sm:py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#050505] border-t border-white/12 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Ambient Cyan Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Architectural Subtle Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:5rem_5rem]"
        aria-hidden="true"
      />

      {/* Architectural Corner Markers */}
      <div
        className="absolute top-6 left-6 text-[10px] font-mono text-white/20 pointer-events-none select-none"
        aria-hidden="true"
      >
        + 03/CONTACT
      </div>
      <div
        className="absolute top-6 right-6 text-[10px] font-mono text-white/20 pointer-events-none select-none"
        aria-hidden="true"
      >
        SYS.FIN // 2026
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 my-auto">
        {/* 1. SECTION IDENTIFIER: 03 / CONTACT */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-white/12 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
              03
            </span>
            <span className="font-mono text-xs text-[#929292] tracking-widest uppercase">
              / CONTACT
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#929292] font-mono text-[11px] tracking-widest uppercase">
            <MapPin className="w-3 h-3 text-accent" />
            <span>{personalData.contact.location}</span>
          </div>
        </div>

        {/* 2. MAIN CLOSING HEADLINE & SUPPORTING STATEMENT */}
        <div className="space-y-8">
          <div ref={headlineRef} className="space-y-3">
            <h2
              id="contact-heading"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold text-[#F5F5F5] tracking-tight uppercase leading-[0.92]"
            >
              LET&apos;S BUILD <br />
              <span>SOMETHING</span> <br />
              <span className="font-outline hover:text-[#F5F5F5] transition-colors duration-500 cursor-default">
                INTERESTING.
              </span>
            </h2>
          </div>

          {/* 3. HUMBLE / REALISTIC CLOSING STATEMENT */}
          <p
            ref={copyRef}
            className="text-[#929292] font-body text-base sm:text-lg max-w-xl leading-relaxed tracking-wide"
          >
            Still learning. Still building. Always curious about what&apos;s next. Open for conversations, creative ideas, and early-stage collaboration.
          </p>
        </div>

        {/* 4. ASYMMETRICAL CONTACT & SOCIAL GRID */}
        <div
          ref={layoutGridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/12"
        >
          {/* Email Direct Interaction (Col 1-6) */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono text-xs text-[#929292] tracking-widest uppercase block">
              01 // DIRECT EMAIL
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${personalData.contact.email}`}
                className="group flex-1 inline-flex items-center justify-between px-5 py-4 bg-[#121517] border border-white/12 hover:border-accent/60 transition-all font-mono text-xs sm:text-sm text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[48px]"
                aria-label={`Send email to Vincent Antony at ${personalData.contact.email}`}
                data-cursor="EMAIL"
              >
                <span className="truncate group-hover:text-accent transition-colors">
                  {personalData.contact.email}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#929292] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-4 bg-[#20272A]/60 border border-white/12 hover:border-white/30 text-[#929292] hover:text-[#F5F5F5] transition-all font-mono text-xs flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[48px] shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email address to clipboard"
                data-cursor="COPY"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location Block (Col 7-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#929292] tracking-widest uppercase block">
              02 // LOCATION
            </span>
            <div className="p-4 bg-[#121517]/50 border border-white/12 min-h-[48px] flex items-center">
              <span className="font-mono text-xs text-[#F5F5F5] tracking-wide">
                Kottayam, Kerala, India
              </span>
            </div>
          </div>

          {/* Social Connections Matrix (Col 9-12) */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#929292] tracking-widest uppercase block">
              03 // CONNECT
            </span>
            <div className="flex flex-col gap-2">
              {personalData.contact.github && (
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-2.5 bg-[#121517]/50 border border-white/12 hover:border-accent/50 transition-all font-mono text-xs text-[#929292] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label="Visit Vincent Antony GitHub Profile"
                  data-cursor="GITHUB"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-[#929292] group-hover:text-accent transition-colors" />
                    <span className="tracking-wider">GITHUB</span>
                  </div>
                  <span className="text-[#929292] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {personalData.contact.linkedin && (
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-2.5 bg-[#121517]/50 border border-white/12 hover:border-accent/50 transition-all font-mono text-xs text-[#929292] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label="Visit Vincent Antony LinkedIn Profile"
                  data-cursor="LINKEDIN"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-[#929292] group-hover:text-accent transition-colors" />
                    <span className="tracking-wider">LINKEDIN</span>
                  </div>
                  <span className="text-[#929292] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {personalData.contact.instagram && (
                <a
                  href={personalData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-2.5 bg-[#121517]/50 border border-white/12 hover:border-accent/50 transition-all font-mono text-xs text-[#929292] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label="Visit Vincent Antony Instagram Profile"
                  data-cursor="INSTAGRAM"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#929292] group-hover:text-accent transition-colors" />
                    <span className="tracking-wider">INSTAGRAM</span>
                  </div>
                  <span className="text-[#929292] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 5. FOOTER SIGNATURE & BACK-TO-TOP CONTROL */}
        <div
          ref={footerRef}
          className="pt-10 border-t border-white/12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-[#929292]"
        >
          {/* Left Metadata / Identity */}
          <div className="space-y-1">
            <p className="font-display font-bold text-sm tracking-wider text-[#F5F5F5] uppercase">
              VINCY
            </p>
            <p className="text-[#929292] text-xs tracking-widest uppercase">
              ST. BERCHMANS COLLEGE — AI &amp; DATA SCIENCE
            </p>
          </div>

          {/* Center: Back To Top Smooth Scroll */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2.5 px-4 py-2 bg-[#121517] border border-white/12 hover:border-accent text-[#929292] hover:text-[#F5F5F5] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Scroll back to top of page"
            data-cursor="TOP"
          >
            <span className="tracking-widest uppercase text-xs">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Right Copyright */}
          <div className="text-[#929292] text-xs tracking-widest uppercase">
            © 2026 VINCENT ANTONY
          </div>
        </div>
      </div>
    </section>
  );
}
