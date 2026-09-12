import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DATA } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = DATA.projects.find((p) => slugify(p.title) === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = DATA.projects.find((p) => slugify(p.title) === slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col gap-8">
      <BlurFade delay={0.04}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{project.dates}</p>
      </BlurFade>

      <BlurFade delay={0.08}>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tag) => (
            <Badge
              key={tag}
              className="text-[11px] font-medium border border-border h-6 w-fit px-2"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.12}>
        <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{project.description}</Markdown>
        </div>
      </BlurFade>
    </div>
  );
}
