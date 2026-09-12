"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card transition-all hover:shadow-lg hover:border-border"
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
              {project.title[0]}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-auto pt-2 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
