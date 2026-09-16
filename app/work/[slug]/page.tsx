import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { CaseStudyView } from "@/components/casestudy/CaseStudyView";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found — Vincent Antony",
    };
  }

  return {
    title: `${project.title} — Case Study | Vincent Antony`,
    description: project.shortDescription || `Case study for ${project.title} by Vincent Antony.`,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
