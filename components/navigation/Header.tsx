"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { personalData } from "@/data/personal";

interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "about", number: "01", label: "ABOUT", href: "#about" },
  { id: "works", number: "02", label: "WORKS", href: "#works" },
  { id: "contact", number: "03", label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.id);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-16 flex items-center justify-between ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-cool-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        {/* Brand Identity Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-display tracking-widest text-text-primary text-sm md:text-base font-bold uppercase transition-colors"
          data-cursor="HOME"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(255,23,79,0.8)]" />
          <span className="hidden md:inline">{personalData.name}</span>
          <span className="inline md:hidden">{personalData.shortName}</span>
        </Link>

        {/* Desktop Navigation (Hidden during initial Hero state, fades in on scroll) */}
        <nav
          aria-label="Main navigation"
          className={`hidden md:flex transition-all duration-500 ease-in-out text-xs font-mono tracking-widest flex-row items-center gap-6 lg:gap-10 ${
            scrolled
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none focus-within:opacity-100 focus-within:pointer-events-auto"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-all duration-300 flex items-center gap-2 group ${
                  isActive ? "text-text-primary font-bold" : "text-text-secondary hover:text-text-primary"
                }`}
                data-cursor={item.label}
              >
                <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors">{item.number}</span>
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(255,23,79,0.8)] transition-all duration-300"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center gap-2 text-xs font-mono tracking-widest text-text-primary py-2 px-3 rounded-md bg-cool-surface/60 border border-cool-border focus:outline-none focus:ring-1 focus:ring-accent"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          data-cursor="MENU"
        >
          {isOpen ? (
            <>
              <span>CLOSE</span>
              <X className="w-4 h-4 text-accent" />
            </>
          ) : (
            <>
              <span>MENU</span>
              <Menu className="w-4 h-4 text-text-secondary" />
            </>
          )}
        </button>
      </header>

      {/* Full-screen Overlay Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Overlay"
        >
          <nav aria-label="Mobile main navigation" className="flex flex-col gap-6 my-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex items-baseline justify-between border-b border-cool-border/40 pb-4 text-2xl font-display font-bold uppercase tracking-wider text-text-primary hover:text-accent transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-sm text-text-muted group-hover:text-accent">
                  {item.number}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-cool-border/40 text-xs font-mono text-text-secondary flex justify-between items-center">
            <span>{personalData.title}</span>
            <span className="text-accent">{personalData.tagline}</span>
          </div>
        </div>
      )}
    </>
  );
}
