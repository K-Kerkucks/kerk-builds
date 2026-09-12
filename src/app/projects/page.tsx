import type { Metadata } from "next";
import { ProjectsShowcase } from "@/components/project-showcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products and platforms I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsShowcase />
    </main>
  );
}
