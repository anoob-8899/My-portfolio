export interface SkillItem {
  name: string;
  label: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI & INTELLIGENCE",
    subtitle: "Exploring models, computer vision & machine learning fundamentals",
    items: [
      { name: "Machine Learning", label: "Core Algorithms & Predictive Modeling" },
      { name: "Computer Vision", label: "Image Processing & Visual Feature Extraction" },
      { name: "Deep Learning", label: "Neural Network Architectures & Fundamentals" },
    ],
  },
  {
    id: "data",
    title: "DATA SCIENCE",
    subtitle: "Data manipulation, visualization & statistical analysis",
    items: [
      { name: "Python", label: "Data Science & Primary Language" },
      { name: "NumPy & Pandas", label: "Data Wrangling & Analysis" },
      { name: "SQL", label: "Database Querying & Data Modeling" },
      { name: "Data Visualization", label: "Matplotlib & Visual Analytics" },
    ],
  },
  {
    id: "development",
    title: "DEVELOPMENT",
    subtitle: "Modern web standards, components & software engineering tools",
    items: [
      { name: "HTML & CSS", label: "Semantic Layouts & Modern Styling" },
      { name: "JavaScript / TypeScript", label: "Interactive Web Logic" },
      { name: "Next.js & React", label: "Component Architecture & Web Apps" },
      { name: "Git & GitHub", label: "Version Control & Source Management" },
    ],
  },
  {
    id: "creative-tech",
    title: "CREATIVE TECH",
    subtitle: "Interactive media, responsive UI design & web animation",
    items: [
      { name: "UI/UX Architecture", label: "Design Systems & Editorial Layouts" },
      { name: "Web Animation", label: "GSAP & Interactive Motion" },
      { name: "Prototyping", label: "Digital Workspace Concepts" },
    ],
  },
];
