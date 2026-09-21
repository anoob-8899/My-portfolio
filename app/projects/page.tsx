import { Metadata } from "next";
import { Works } from "@/components/works/Works";

export const metadata: Metadata = {
  title: "WORKS // Vincent Antony — Featured Projects",
  description:
    "Featured Projects and Case Studies by Vincent Antony — AI & Data Science Student.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen pt-12 md:pt-16 pb-24 md:pb-32">
      <Works />
    </div>
  );
}
