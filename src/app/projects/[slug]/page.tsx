import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
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
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <BlurFade delay={0.1}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </BlurFade>

      <BlurFade delay={0.15}>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">{project.tagline}</p>
      </BlurFade>

      <BlurFade delay={0.3}>
        <div className="mt-6 flex gap-4">
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-4 w-4" /> Source Code
            </Link>
          )}
        </div>
      </BlurFade>

      {/* Placeholder hero image */}
      <BlurFade delay={0.35}>
        <div className="mt-10 aspect-video rounded-xl border border-border/50 bg-muted/50 flex items-center justify-center">
          <div className="text-center text-muted-foreground/40">
            <div className="text-6xl font-bold">{project.title[0]}</div>
            <p className="mt-2 text-sm">Screenshot coming soon</p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.4}>
        <div className="mt-10 prose prose-neutral dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>{project.description}</p>

          <h2>Key Features</h2>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>
                <strong>{tag}</strong> — Integrated as a core capability of the
                platform.
              </li>
            ))}
          </ul>

          <h2>Architecture</h2>
          <p>
            Built with a modern stack emphasising type safety, developer
            experience, and production reliability. The system is designed to
            scale horizontally and integrates with existing enterprise
            infrastructure.
          </p>
        </div>
      </BlurFade>
    </div>
  );
}
