export interface AboutPillar {
  number: string;
  title: string;
  tag: string;
  description: string;
}

export interface PersonalData {
  name: string;
  shortName: string;
  tagline: string;
  title: string;
  bio: {
    heroSub: string;
    mainStatement: string;
    secondaryStatement: string;
    aboutBio: string;
    detailedBio: string;
  };
  academic: {
    degree: string;
    status: string;
    year: string;
    focus: string[];
  };
  pillars: AboutPillar[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    location: string;
  };
}

export const personalData: PersonalData = {
  name: "VINCENT ANTONY",
  shortName: "V.A.",
  tagline: "AI × DATA × TECHNOLOGY",
  title: "AI & Data Science Student",
  bio: {
    heroSub: "AI & DATA SCIENCE STUDENT BUILDING WITH DATA, CODE & INTELLIGENCE",
    mainStatement: "BUILDING WITH\nDATA, CODE\n& INTELLIGENCE.",
    secondaryStatement: "TURNING IDEAS INTO DIGITAL EXPERIENCES.",
    aboutBio: "First-year BSc AI & Data Science student driven by curiosity, technical experimentation, and a passion for building intelligent digital systems.",
    detailedBio: "I am a first-year student pursuing a degree in Artificial Intelligence & Data Science. Rather than viewing code as just syntax, I approach it as a creative medium for problem-solving. My focus spans understanding machine learning fundamentals, architecting clean web experiences, and turning abstract data concepts into functional, high-performance software.",
  },
  academic: {
    degree: "BSc AI & Data Science",
    status: "First-Year Undergraduate",
    year: "2026 – Present",
    focus: [
      "Machine Learning Fundamentals",
      "Data Structures & Algorithms",
      "Full-Stack Web Engineering",
      "Applied Mathematics & Statistics",
    ],
  },
  pillars: [
    {
      number: "01",
      title: "CURIOSITY",
      tag: "DISCOVERY",
      description: "Driven by a deep need to understand how intelligent systems work beneath the abstraction layer — from mathematical foundations to core algorithms.",
    },
    {
      number: "02",
      title: "POTENTIAL",
      tag: "GROWTH",
      description: "Channeling early-stage learning into rapid capability acquisition, approaching every challenge with unconstrained problem-solving energy.",
    },
    {
      number: "03",
      title: "CREATIVITY",
      tag: "DESIGN × CODE",
      description: "Fusing mathematical precision with sharp editorial aesthetics to create digital experiences that are functional, intuitive, and visually compelling.",
    },
    {
      number: "04",
      title: "AMBITION",
      tag: "PURPOSE",
      description: "Setting high standards early, striving to build real-world software and intelligent tools that extend far beyond classroom assignments.",
    },
    {
      number: "05",
      title: "LEARNING",
      tag: "PRACTICE",
      description: "Treating every framework, model, and dataset as an opportunity to build deep technical intuition through continuous hands-on building.",
    },
    {
      number: "06",
      title: "EXPERIMENTATION",
      tag: "PROTOTYPING",
      description: "Testing hypotheses through code, exploring the frontier where artificial intelligence interfaces with modern web architecture.",
    },
  ],
  contact: {
    email: "vincentantony244@gmail.com",
    github: "https://github.com/anoob-8899",
    linkedin: "https://www.linkedin.com/in/vincent-antony-67173b430/",
    instagram: "https://instagram.com/vincy_jr_99",
    location: "Kottayam, Kerala, India",
  },
};
