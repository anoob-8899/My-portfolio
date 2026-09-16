"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef<number>();

  useEffect(() => {
    // Disable on touch devices or devices without fine pointer control
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [data-cursor]");
      if (interactiveEl) {
        setIsPointer(true);
        const text = interactiveEl.getAttribute("data-cursor");
        setCursorText(text || "");
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp trailing animation for the outer ring
  useEffect(() => {
    if (isTouchDevice) return;

    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      requestRef.current = requestAnimationFrame(animateTrailing);
    };

    requestRef.current = requestAnimationFrame(animateTrailing);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
      </div>

      {/* Outer Magnetic / Trailing Ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
            isPointer
              ? "w-10 h-10 border border-accent/80 bg-accent/10"
              : "w-6 h-6 border border-white/20 bg-transparent"
          }`}
        >
          {cursorText && (
            <span className="text-[8px] uppercase font-mono tracking-widest text-accent font-semibold">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
