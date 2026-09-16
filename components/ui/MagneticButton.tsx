"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier for magnetic pulling effect (default: 0.3)
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Disable magnetic physics on touch/coarse devices
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer || !buttonRef.current) return;

    const button = buttonRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      gsap.to(button, {
        x: distanceX * strength,
        y: distanceY * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(button);
    };
  }, [strength]);

  return (
    <button
      ref={buttonRef}
      className={`relative inline-block transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
