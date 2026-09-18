"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Image as ImageIcon, Film } from "lucide-react";

interface LaptopMockupProps {
  videoSrc: string;
  screenshots: string[];
  altText: string;
}

export function LaptopMockup({ videoSrc, screenshots, altText }: LaptopMockupProps) {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [manualFallback, setManualFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt parallax effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setTilt({ x: x * 4, y: y * -4 }); // Subtle tilt in degrees
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Screenshot slideshow cycle when fallback is active
  useEffect(() => {
    if ((!videoError && !manualFallback) || screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [videoError, manualFallback, screenshots.length]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const useFallback = videoError || manualFallback;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto my-8 md:my-14 perspective-1000"
    >
      <motion.div
        style={{
          rotateY: shouldReduceMotion ? 0 : tilt.x,
          rotateX: shouldReduceMotion ? 0 : tilt.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
        className="relative w-full transform-gpu"
      >
        {/* Ambient Laptop Glow / Base Drop Shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-12 bg-black/90 blur-2xl rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-[#FF174F]/[0.03] blur-[100px] rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAPTOP DISPLAY FRAME (Top Lid) */}
        <div className="relative w-full aspect-[16/10] bg-[#121416] rounded-t-2xl sm:rounded-t-[20px] p-2.5 sm:p-4 md:p-5 border border-white/[0.14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Top Bezel Camera Dot & Sensor */}
          <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#08090a] border border-white/20 shadow-inner inline-block" />
            <span className="w-1 h-1 rounded-full bg-emerald-500/80 inline-block animate-pulse" title="Screen Display Active" />
          </div>

          {/* SCREEN DISPLAY CONTAINER */}
          <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-[#050505] border border-black/80 shadow-inner group">
            
            {/* Glossy Screen Glare / Highlight Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent pointer-events-none z-20"
              aria-hidden="true"
            />

            {/* Subtle Screen Scanline / Grid overlay */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-20 opacity-40"
              aria-hidden="true"
            />

            {/* MEDIA DISPLAY CONTENT */}
            {!useFallback ? (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02]"
              />
            ) : (
              /* SCREENSHOT FALLBACK SLIDESHOW */
              <div className="relative w-full h-full bg-[#080A0B]">
                {screenshots.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activeScreenshot ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={`${altText} slide ${index + 1}`}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </motion.div>
                ))}

                {/* Slideshow Progress Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshot(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === activeScreenshot ? "w-6 bg-[#FF174F]" : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`View slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN OVERLAY CONTROLS BAR (Appears on hover) */}
            <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-[#929292]">
              {!videoError && (
                <button
                  onClick={togglePlay}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                  aria-label={isPlaying ? "Pause video preview" : "Play video preview"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#FF174F]" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#FF174F]" />
                      <span>PLAY</span>
                    </>
                  )}
                </button>
              )}

              <span className="text-white/20">|</span>

              <button
                onClick={() => setManualFallback(!manualFallback)}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title={manualFallback ? "Switch to Video View" : "Switch to Screenshot View"}
              >
                {manualFallback ? (
                  <>
                    <Film className="w-3 h-3 text-[#FF174F]" />
                    <span>VIDEO MODE</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-3 h-3 text-[#929292]" />
                    <span>STILLS</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Screen Live Status Bar Tag */}
            <div className="absolute bottom-2.5 left-3 z-30 pointer-events-none hidden sm:flex items-center gap-2 bg-[#050505]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 font-mono text-[9px] text-[#929292] tracking-wider uppercase">
              <span>COLLEGE DEPARTMENT PORTAL // LIVE PREVIEW</span>
            </div>

          </div>
        </div>

        {/* LAPTOP HINGE & BOTTOM BASE CHIN */}
        <div className="relative w-[104%] -ml-[2%] h-4 sm:h-5 md:h-6 bg-gradient-to-b from-[#1c1f22] via-[#141618] to-[#0a0b0c] rounded-b-xl sm:rounded-b-2xl border-t border-white/20 border-b border-black/80 shadow-2xl flex items-center justify-center">
          {/* Thumb Notch Cutout */}
          <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#08090a] rounded-b-md border-x border-b border-white/10 shadow-inner" />
          
          {/* Subtle Base Side Edges */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/10 rounded-full" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-white/10 rounded-full" />
        </div>

      </motion.div>
    </div>
  );
}
