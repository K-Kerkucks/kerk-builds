import type { Metadata } from "next";
import { DATA } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Products and platforms I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <BlurFade delay={0.04}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          A collection of products I&apos;ve built — from AI orchestration
          engines to real-time data platforms.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
        {DATA.projects.map((project, i) => (
          <BlurFade key={project.title} delay={0.08 + i * 0.05} className="h-full">
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
