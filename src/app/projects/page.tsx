import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products and platforms I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <BlurFade delay={0.1}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          A collection of products I&apos;ve built — from AI orchestration
          engines to real-time data platforms. Each one was designed and
          shipped end-to-end.
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <BlurFade key={project.slug} delay={0.15 + i * 0.08}>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
