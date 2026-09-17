"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroMetadata() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="font-mono text-[10px] sm:text-xs text-[#929292] tracking-widest uppercase space-y-1.5 border-l border-[#FF174F]/40 pl-3 md:pl-4 py-1"
    >
      <div className="flex items-center space-x-2 text-[#F5F5F5] font-semibold">
        <span>VINCENT ANTONY</span>
        <span className="text-[#FF174F]">//</span>
        <span className="text-[#929292]">01 / 04 • PORTFOLIO</span>
      </div>

      <div className="text-[#929292]">
        ST BERCHMANS COLLEGE
      </div>

      <div className="text-[#929292] hidden sm:block">
        AI & DATA SCIENCE <span className="text-[#FF174F]">•</span> CREATIVE TECHNOLOGY
      </div>

      <div className="text-[#929292]">
        KERALA, INDIA
      </div>
    </motion.div>
  );
}
