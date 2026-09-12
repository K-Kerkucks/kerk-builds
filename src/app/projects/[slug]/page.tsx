import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DATA } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/project-visual";
import { ArrowLeft, DatabaseZap } from "lucide-react";
import Link from "next/link";

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
    <main className="project-breakout">
      <BlurFade delay={0.03}>
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> All projects
        </Link>
      </BlurFade>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <BlurFade delay={0.05}>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-2 rounded-full" style={{ backgroundColor: project.accent }} />
            {project.category} · {project.dates} · {project.release}
          </div>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tag) => (
              <Badge key={tag} className="rounded-full px-3 py-1" variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.1} className="h-[360px] sm:h-[440px]">
          <ProjectVisual kind={project.visual} title={project.title} accent={project.accent} />
        </BlurFade>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-3">
        {[
          ["01 / Challenge", project.challenge],
          ["02 / System", project.approach],
          ["03 / Outcome", project.outcome],
        ].map(([label, copy], index) => (
          <BlurFade key={label} delay={0.12 + index * 0.04} className="bg-background p-7 sm:p-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
              {label}
            </div>
            <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground">{copy}</p>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.25}>
        <section className="mt-6 grid gap-5 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 md:grid-cols-[auto_1fr]">
          <span
            className="grid size-12 place-items-center rounded-2xl"
            style={{ backgroundColor: `${project.accent}1f`, color: project.accent }}
          >
            <DatabaseZap className="size-5" aria-hidden />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
              Production-readiness by design
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              The data model is part of the product.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              {project.productionFocus}
            </p>
          </div>
        </section>
      </BlurFade>
    </main>
  );
}
