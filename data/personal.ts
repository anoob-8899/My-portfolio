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
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
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
    aboutBio: "BSc AI & Data Science student exploring artificial intelligence, data science, software development, and creative technology.",
  },
  contact: {
    email: "contact@vincentantony.com", // Replace with real email when provided
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    location: "Kerala, India",
  },
};
