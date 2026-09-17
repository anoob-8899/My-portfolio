import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Works } from "@/components/works/Works";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
}
