import { Metadata } from "next";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "CONTACT // Vincent Antony — Get In Touch",
  description:
    "Contact Vincent Antony — First-year BSc AI & Data Science student. Open for conversations, creative ideas, and early-stage collaboration.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-12 md:pt-16 pb-24 md:pb-32">
      <Contact />
    </div>
  );
}
