export interface CaseStudySection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription?: string;
  year?: string;
  role?: string;
  technologies?: string[];
  thumbnail?: string; // Screen mockup preview SVG or image path
  slug: string;
  liveUrl?: string;
  repositoryUrl?: string;
  isComingSoon?: boolean;
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
    id: "project-02-placeholder",
    number: "02",
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
    number: "03",
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
