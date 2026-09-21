export interface ProjectFeature {
  title: string;
  description: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  headline?: string;
  shortDescription?: string;
  year?: string;
  status?: string;
  role?: string;
  technologies?: string[];
  thumbnail?: string; // Screen mockup preview SVG or image path
  videoSrc?: string;
  posterSrc?: string;
  slug: string;
  liveUrl?: string;
  repositoryUrl?: string;
  isComingSoon?: boolean;
  features?: ProjectFeature[];
  caseStudy?: {
    overview?: string;
    problem?: string;
    approach?: string;
    development?: string;
    technologies?: string[];
    result?: string;
    learnings?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "st-berchmans-aids",
    number: "01",
    title: "ST. BERCHMANS AI & DATA SCIENCE",
    shortDescription: "Department website and digital portal.",
    year: "2024",
    role: "WEB DESIGN / DEVELOPMENT",
    technologies: ["WEB DESIGN", "DEVELOPMENT", "NEXT.JS", "POSTGRESQL"],
    thumbnail: "/images/projects/st-berchmans-portal.svg",
    slug: "st-berchmans-aids",
    liveUrl: "#",
    repositoryUrl: "#",
    isComingSoon: false,
    caseStudy: {
      overview: "Digital portal and departmental platform designed for the AI & Data Science department at St. Berchmans College.",
      problem: "Creating an accessible, modern digital hub to communicate departmental updates, curriculum highlights, and academic resources.",
      approach: "Built a responsive, content-rich web experience with clean visual structure and fast page performance.",
      development: "Developed using Next.js for server rendering and structured components, with modern styling for academic presentation.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      result: "A clean digital identity and central hub for departmental resources.",
      learnings: "Gained practical experience organizing data hierarchy and optimizing multi-page web applications.",
    }
  },
  {
    id: "reemas-studio",
    number: "02",
    title: "REEMAS STUDIO",
    tagline: "Cinematic visual narratives & editorial photography",
    headline: "A CINEMATIC PORTFOLIO WEBSITE FOR A PHOTOGRAPHY STUDIO.",
    shortDescription: "A portfolio website for an independent photography studio based in Changanassery, Kerala.",
    year: "2026",
    status: "Completed",
    role: "Designer & Developer",
    technologies: ["Next.js", "React", "Vercel", "Cloudinary"],
    videoSrc: "/videos/reemas-studio.mp4",
    posterSrc: "/images/reemas-studio-poster.jpg",
    slug: "reemas-studio",
    liveUrl: "https://reemas-studio.vercel.app/",
    isComingSoon: false,
    features: [
      {
        title: "Cinematic Hero",
        description: "full-screen hero image with a clear call to action to explore the work."
      },
      {
        title: "Curated Project Galleries",
        description: "separate galleries for Fashion, Portraits, Weddings and Events."
      },
      {
        title: "Optimized Image Delivery",
        description: "images served through Cloudinary with automatic format and quality."
      },
      {
        title: "Studio Story & Inquiry Flow",
        description: "an About page with the photographer's philosophy, linked to a contact page for commissions."
      }
    ],
    caseStudy: {
      overview: "A portfolio website for an independent photography studio based in Changanassery, Kerala. It presents editorial, portrait, wedding and event work through a cinematic full-screen hero, category-based project galleries, an About page and a contact page for worldwide commissions.",
      problem: "Presenting diverse visual media with high visual fidelity while maintaining high performance and smooth responsive flows.",
      approach: "Built with Next.js and Cloudinary image management to deliver full-screen cinematic visual narratives.",
      development: "Developed modern gallery layouts, fluid animations, and lightweight mobile media delivery.",
      technologies: ["Next.js", "React", "Vercel", "Cloudinary"],
      result: "A sleek, immersive editorial photography portfolio.",
      learnings: "Optimized media compression and progressive web presentation for high-res photography."
    }
  },
  {
    id: "project-02-placeholder",
    number: "03",
    title: "AI & VISION EXPLORATIONS",
    shortDescription: "Project details and case study coming soon.",
    year: "2024",
    role: "RESEARCH & EXPERIMENTATION",
    technologies: ["PYTHON", "COMPUTER VISION", "MACHINE LEARNING"],
    thumbnail: "/images/projects/project-02-placeholder.svg",
    slug: "ai-vision-explorations",
    isComingSoon: true,
  },
  {
    id: "project-03-placeholder",
    number: "04",
    title: "DATA ANALYTICS WORKSPACE",
    shortDescription: "Project details and case study coming soon.",
    year: "2024",
    role: "DATA SCIENCE",
    technologies: ["PYTHON", "PANDAS", "DATA VISUALIZATION"],
    thumbnail: "/images/projects/project-03-placeholder.svg",
    slug: "data-analytics-workspace",
    isComingSoon: true,
  }
];
