"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", number: "01", label: "ABOUT", href: "#about" },
  { id: "works", number: "02", label: "WORKS", href: "#works" },
  { id: "contact", number: "03", label: "CONTACT", href: "#contact" },
];

export function SideNavigation() {
  const [activeItem, setActiveItem] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveItem(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.history.pushState(null, "", href);
    }
  };

  return (
    <aside
      aria-label="Side Navigation"
      className="fixed right-6 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <nav className="flex flex-col items-end space-y-6">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className="group relative flex items-center space-x-3 text-xs tracking-widest font-mono transition-colors duration-300 py-1"
            >
              {/* Subtle hover / active accent line */}
              <motion.span
                className={`h-[1px] transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-[#FF174F]"
                    : "w-4 bg-white/20 group-hover:w-8 group-hover:bg-[#FF174F]"
                }`}
                layoutId={`nav-line-${item.id}`}
              />

              {/* Technical Numbering */}
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-[#FF174F]" : "text-[#929292] group-hover:text-white"
                }`}
              >
                {item.number}
              </span>

              {/* Label */}
              <span
                className={`font-semibold uppercase tracking-wider transition-all duration-300 transform group-hover:translate-x-0.5 ${
                  isActive ? "text-[#F5F5F5]" : "text-[#929292] group-hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
