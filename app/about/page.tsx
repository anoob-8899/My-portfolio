import { Metadata } from "next";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";

export const metadata: Metadata = {
  title: "ABOUT // Vincent Antony — AI & Data Science Student",
  description:
    "About Vincent Antony — First-year BSc AI & Data Science student at St Berchmans College building across AI, data science, and creative technology.",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen pt-12 md:pt-16 pb-24 md:pb-32">
      <About />
      <Skills />
    </div>
  );
}
