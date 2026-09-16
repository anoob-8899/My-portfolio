import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { LaptopShowcase } from "@/components/projects/LaptopShowcase";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <LaptopShowcase />
      <Contact />
    </>
  );
}
