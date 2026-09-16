import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0D0F10",
          surface: "#121517",
          card: "#121517",
        },
        text: {
          primary: "#F4F2EE",
          secondary: "#929292",
          muted: "#5F6264",
        },
        accent: {
          DEFAULT: "#FF174F",
          glow: "rgba(255, 23, 79, 0.35)",
          subtle: "rgba(255, 23, 79, 0.12)",
        },
        cool: {
          surface: "#20272A",
          border: "rgba(244, 242, 238, 0.08)",
          subtle: "rgba(32, 39, 42, 0.6)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        widestLabel: "0.15em",
        mega: "0.25em",
      },
      maxWidth: {
        "7xl": "80rem", // 1280px
        "8xl": "90rem", // 1440px
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
