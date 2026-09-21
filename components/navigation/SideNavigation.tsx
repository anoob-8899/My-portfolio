"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", number: "00", label: "HOME", href: "/" },
  { id: "about", number: "01", label: "ABOUT", href: "/about" },
  { id: "works", number: "02", label: "WORKS", href: "/projects" },
  { id: "contact", number: "03", label: "CONTACT", href: "/contact" },
];

export function SideNavigation() {
  const pathname = usePathname();

  // Determine active item from current route
  const getActiveId = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/projects") || pathname.startsWith("/works") || pathname.startsWith("/work")) {
      return "works";
    }
    if (pathname.startsWith("/contact")) return "contact";
    return "";
  };

  const activeId = getActiveId();

  return (
    <>
      {/* Top-Left Brand Anchor (Way back to Home on all pages, no dot, no menu bar) */}
      <div className="fixed top-6 left-6 md:left-12 lg:left-16 z-40 pointer-events-auto">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display tracking-widest text-text-primary text-xs md:text-sm font-bold uppercase transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          data-cursor="HOME"
          aria-label="Return to home page"
        >
          <span className="group-hover:text-accent transition-colors">
            VINCENT ANTONY
          </span>
        </Link>
      </div>

      {/* Desktop Vertical Toolbar */}
      <aside
        aria-label="Site Navigation"
        className="fixed right-6 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 z-40 hidden md:block select-none"
      >
        <nav className="flex flex-col items-end space-y-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex items-center space-x-3 text-xs tracking-widest font-mono transition-colors duration-300 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                data-cursor={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Active / Hover accent line (No dots) */}
                <span
                  className={`h-[1px] transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-white/20 group-hover:w-8 group-hover:bg-accent"
                  }`}
                />

                {/* Numbering */}
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? "text-accent font-semibold" : "text-[#929292] group-hover:text-white"
                  }`}
                >
                  {item.number}
                </span>

                {/* Text Label */}
                <span
                  className={`uppercase tracking-wider transition-all duration-300 transform group-hover:translate-x-0.5 ${
                    isActive
                      ? "text-text-primary font-bold"
                      : "text-[#929292] group-hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Compact Fixed Bottom Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-5 inset-x-0 mx-auto w-fit z-40 md:hidden select-none px-4"
      >
        <div className="flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full bg-[#0D0F10]/95 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-accent font-bold bg-white/5 border-b-2 border-accent"
                    : "text-[#929292] hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
