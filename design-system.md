# Visual Design System Specification
**Vincent Antony — Portfolio Identity (`BSc AI & Data Science`)**

---

## 1. Visual Direction & Identity Core

The visual identity is designed to communicate **technical depth, editorial sophistication, minimal elegance, and cinematic pacing**. It positions Vincent Antony as an AI & Data Science practitioner through disciplined visual hierarchy rather than superficial sci-fi tropes.

### Core Aesthetic Pillars
- **Cinematic & Editorial Rhythm**: Generous vertical whitespace, high-contrast monochrome backbone with tactical accent highlights, stark typographic scale, and widescreen media framing.
- **Architectural Precision**: Hairline structural grids (`rgba(244, 242, 238, 0.08)` / `#20272A`), zero-radius (`rounded-none`) or micro-radius (`rounded-sm` 2px-4px) boundaries, precise monospace metadata labels.
- **Selective Accent Focus**: Signature Magenta (`#FF174F`) is strictly capped at 5%–10% visual coverage across any view (active indicators, indexes, key interactive focus states).

### Explicit Anti-Patterns Banned
- ❌ **No Rounded Card Overload**: Standard rounded cards (`rounded-2xl`, `rounded-3xl`) are strictly avoided in favor of sharp architectural hairline grid structures.
- ❌ **No Heavy Glassmorphism or SaaS Blur Clouds**: No frosted glass, heavy background blur panels, or glowing floating orbs.
- ❌ **No Cyberpunk or Multicolored Gradients**: Pure color solid foundations without noisy radial gradients or neon rainbow accents.
- ❌ **No Blanket Grayscale Filters**: Project UI screenshots retain their natural interface colors for legibility; only portrait/identity imagery uses controlled desaturation.
- ❌ **No Gimmicky Particle Canvases**: Visual atmosphere is created via a subtle 3.5% SVG grain overlay and geometric spacing, not canvas particle networks.

---

## 2. Color System & Token Palette

| Token Name | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| `bg-primary` | `#050505` | Primary canvas black — main stage and deep contrast backdrop |
| `bg-secondary` | `#0D0F10` | Elevated secondary dark surface for section breaks and media containers |
| `bg-surface` | `#121517` | Structural card panels, code snippet blocks, and meta containers |
| `text-primary` | `#F4F2EE` | Off-white bone/silk primary reading text and main headers |
| `text-secondary` | `#929292` | Neutral grey for body paragraphs, descriptions, and secondary metadata |
| `text-muted` | `#5F6264` | Quiet structural text, index numbers, disabled labels, border guides |
| `accent` | `#FF174F` | Signature Crimson Magenta — selective focal points, active states |
| `cool-surface` | `#20272A` | Cool slate structural borders, secondary button outlines, badge backgrounds |
| `cool-border` | `rgba(244, 242, 238, 0.08)` | Hairline grid lines and container dividers |

---

## 3. Typography & Hierarchy

The typography balances geometric technological display face (`Space Grotesk`) with ultra-legible neutral body text (`Inter`).

### Font Families
- **Display & Monospace Labels**: `Space Grotesk` (`var(--font-space-grotesk)`)
- **Body & Editorial Paragraphs**: `Inter` (`var(--font-inter)`)

### Typographic Scale

| Level | Font Family | Size Range | Weight | Letter Spacing | Class Utility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Space Grotesk | 44px – 104px (`clamp(2.75rem, 7.5vw, 6.5rem)`) | 700 (Bold) | `-0.035em` | `.font-display-hero` |
| **Section Title (H1)** | Space Grotesk | 36px – 68px (`clamp(2.25rem, 5vw, 4.25rem)`) | 600 (SemiBold) | `-0.025em` | `.font-display-h1` |
| **Subsection Header (H2)**| Space Grotesk | 24px – 40px (`clamp(1.5rem, 3vw, 2.5rem)`) | 600 (SemiBold) | `-0.02em` | `.font-display-h2` |
| **Component Header (H3)** | Space Grotesk | 20px – 28px (`clamp(1.25rem, 2vw, 1.75rem)`) | 500 (Medium) | `-0.015em` | `.font-display-h3` |
| **Body Lead** | Inter | 18px – 20px | 400 (Regular) | Normal | `text-lg text-text-secondary` |
| **Body Standard** | Inter | 15px – 16px | 400 (Regular) | Normal | `text-base text-text-secondary` |
| **Technical Label / Meta** | Space Grotesk | 12px (0.75rem) | 500 (Medium) | `0.15em` (Widest) | `.font-label-mono` |

---

## 4. Spacing System & Responsive Grid Architecture

### Spatial Pacing Rhythm
- **Base Rhythm**: 4px / 8px scale (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`, `160px`).
- **Section Padding**: Desktop `py-24` to `py-36` (96px – 144px), Mobile `py-16` to `py-20` (64px – 80px).
- **Container Max-Widths**:
  - `max-w-7xl` (1280px): Standard editorial content containers (`.section-container`).
  - `max-w-8xl` (1440px): Ultra-wide cinematic media / project showcases (`.section-container-wide`).

### Grid & Borders
- **12-Column Responsive Grid**: Asymmetric layout split (e.g., 4-col sticky metadata sidebar + 8-col content flow).
- **Hairline Border Rule**: All grid boundaries use `1px` crisp borders (`border-white/[0.08]` or `#20272A`).

---

## 5. Component Primitives & Interaction Rules

### Buttons
1. **Primary CTA (`.btn-primary`)**:
   - Solid off-white (`#F4F2EE`) rectangular block with sharp corners (`rounded-none`).
   - Text color: `#050505`.
   - **Selective Magnetic Behavior**: Wrapped with `<MagneticButton>` **only** for key desktop primary actions (e.g. Hero CTA, Contact Submit).
2. **Secondary Button (`.btn-secondary`)**:
   - Dark background (`#0D0F10`), 1px cool hairline border (`#20272A`), white text.
   - Non-magnetic, responsive border/color transition on hover.
3. **Ghost Text Link (`.btn-ghost`)**:
   - Minimal inline text link with kinetic underline slide animation in Accent Magenta (`#FF174F`).

### Image Treatment & Media Framing
- **Portrait & Identity Imagery (`.img-portrait`)**:
  - Monochromatic/desaturated base (`grayscale-[80%] contrast-[1.05]`) transitioning to natural color on hover (`duration-700 ease-out`).
- **Project Screenshots (`.img-project-container` & `.img-project`)**:
  - **Preserves full original interface colors** to ensure interface legibility.
  - Framed inside dark surface containers (`#0D0F10`) with 1px hairline borders (`rgba(244, 242, 238, 0.08)`).

### Cursor Behavior
- **Precision Dual Element Cursor**:
  - Center 6px dot + smooth lerp trailing ring in `#FF174F` tint.
  - **Touch & Pointer Query Check**: Disabled automatically on mobile/touch screens (`(hover: hover) and (pointer: fine)`).
  - Keyboard accessible: Does not override standard `:focus-visible` outlines.

### Atmosphere & Motion
- **Tactile Grain Overlay**: Fixed 3.5% opacity SVG fractal turbulence noise layer (`.grain-overlay`).
- **Animation Easing**: Cinematic slow cubic-bezier curves `cubic-bezier(0.16, 1, 0.3, 1)` for GSAP and CSS transitions.
