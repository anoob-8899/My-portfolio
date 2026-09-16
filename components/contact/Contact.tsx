"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Copy, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData } from "@/data/personal";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
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

        // Sequential GSAP reveal: Header -> Headline -> Copy -> Actions -> Footer
        if (headerRef.current) {
          tl.fromTo(
            headerRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        }

        if (headlineRef.current) {
          tl.fromTo(
            headlineRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.5"
          );
        }

        if (copyRef.current) {
          tl.fromTo(
            copyRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          );
        }

        if (actionsRef.current) {
          tl.fromTo(
            actionsRef.current.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.5"
          );
        }

        if (footerRef.current) {
          tl.fromTo(
            footerRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4"
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="relative min-h-[85vh] w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 bg-bg-primary border-t border-cool-border overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Architectural Subtle Grid Lines */}
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

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 my-auto">
        {/* 1. SECTION LABEL: 04 / CONTACT */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-cool-border pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold">
              04
            </span>
            <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
              / CONTACT
            </span>
          </div>
          <span className="font-mono text-[11px] text-text-muted tracking-[0.2em] uppercase">
            {personalData.contact.location}
          </span>
        </div>

        {/* 2. MAIN CLOSING HEADLINE & SUPPORTING COPY */}
        <div className="space-y-8">
          <div ref={headlineRef} className="space-y-2">
            <h2
              id="contact-heading"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-text-primary tracking-tight uppercase leading-[0.94]"
            >
              LET&apos;S BUILD <br />
              <span className="text-accent underline decoration-accent/40 underline-offset-8 sm:underline-offset-[12px]">
                SOMETHING
              </span>{" "}
              <br />
              <span className="font-outline hover:text-text-primary transition-colors duration-500">
                INTERESTING.
              </span>
            </h2>
          </div>

          {/* 3. SUPPORTING COPY */}
          <p
            ref={copyRef}
            className="text-text-secondary font-body text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Interested in technology, data, AI, and building meaningful digital experiences.
          </p>

          {/* 4. CONTACT ACTION & 5. SOCIAL LINKS */}
          <div
            ref={actionsRef}
            className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-t border-cool-border/60"
          >
            {/* Interactive Email Pill [ email / contact ] */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 px-4 py-3 rounded-none border border-cool-border bg-bg-surface hover:border-accent/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all font-mono text-xs text-text-secondary hover:text-text-primary min-h-[44px]"
                title="Click to copy email address"
                aria-label={`Copy email address ${personalData.contact.email}`}
                data-cursor="COPY"
              >
                <span className="text-accent font-bold">[ email / contact ]</span>
                <span className="text-text-primary">{personalData.contact.email}</span>
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-mono text-[10px] ml-1">
                    <Check className="w-3.5 h-3.5" /> COPIED
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors ml-1" />
                )}
              </button>
            </div>

            {/* Social Links & Primary CTA */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {personalData.contact.github && (
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-secondary hover:text-accent tracking-widest transition-colors flex items-center gap-1.5 group py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label="Visit Vincent Antony GitHub profile"
                  data-cursor="GITHUB"
                >
                  <Github className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  <span>GITHUB</span>
                  <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {personalData.contact.linkedin && (
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-secondary hover:text-accent tracking-widest transition-colors flex items-center gap-1.5 group py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  aria-label="Visit Vincent Antony LinkedIn profile"
                  data-cursor="LINKEDIN"
                >
                  <Linkedin className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  <span>LINKEDIN</span>
                  <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              )}

              {/* Primary CTA: ↗ GET IN TOUCH */}
              <MagneticButton strength={0.25}>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all min-h-[44px]"
                  aria-label="Send email to Vincent Antony"
                  data-cursor="EMAIL"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>GET IN TOUCH</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* 7. FOOTER */}
        <div
          ref={footerRef}
          className="pt-10 border-t border-cool-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-text-secondary"
        >
          {/* Left Metadata */}
          <div className="space-y-1">
            <p className="font-display font-bold text-sm tracking-wider text-text-primary uppercase">
              VINCENT ANTONY
            </p>
            <p className="text-text-muted text-xs tracking-widest uppercase">
              BSc AI &amp; Data Science
            </p>
          </div>

          {/* Center/Right: Back To Top Button */}
          <button
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label="Scroll back to top of page"
            data-cursor="TOP"
          >
            <span className="tracking-widest uppercase">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Right Copyright */}
          <div className="text-text-muted text-xs tracking-widest uppercase">
            © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}


