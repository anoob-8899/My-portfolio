"use client";

import React, { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

interface PhoneMockupProps {
  videoSrc: string;
  posterSrc?: string;
  altText: string;
  isActive?: boolean;
}

export function PhoneMockup({
  videoSrc,
  posterSrc = "/images/reemas-studio-poster.jpg",
  altText,
  isActive = true,
}: PhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Control playback based on visibility and active tab status
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion || !isActive) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isActive) {
            video.play().catch(() => {
              // Browser play promise rejection handle
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isActive, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] mx-auto select-none"
      aria-label={`Mobile Phone Showcase for ${altText}`}
    >
      {/* Ambient Accent Glow & Drop Shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/90 blur-xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/[0.04] blur-[80px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* PHONE CHASSIS / FRAME */}
      <div className="relative w-full aspect-[9/19.5] bg-[#0A0D0E] rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 border border-accent/20 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(0,229,255,0.06)] overflow-hidden">
        
        {/* Left Side Buttons (Volume Rockers) */}
        <div
          className="absolute -left-[3px] top-24 w-[3px] h-10 bg-[#1A2024] rounded-l-xs border-l border-y border-white/10"
          aria-hidden="true"
        />
        <div
          className="absolute -left-[3px] top-38 w-[3px] h-10 bg-[#1A2024] rounded-l-xs border-l border-y border-white/10"
          aria-hidden="true"
        />

        {/* Right Side Button (Power) */}
        <div
          className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#1A2024] rounded-r-xs border-r border-y border-white/10"
          aria-hidden="true"
        />

        {/* Top Punch-Hole Camera Notch (The ONLY allowed circle element) */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#050505] rounded-full border border-white/15 z-30 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-1.5 h-1.5 bg-[#0D1214] rounded-full" />
        </div>

        {/* Earpiece Speaker Slit */}
        <div
          className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full z-30 pointer-events-none"
          aria-hidden="true"
        />

        {/* SCREEN CONTAINER */}
        <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#050505] border border-black/80 shadow-inner group">
          
          {/* Subtle Gloss Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />

          {/* Video Player / Poster Fallback */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay={!shouldReduceMotion && isActive}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={altText}
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
          />

          {/* Bottom Navigation Indicator Bar */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-30 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
