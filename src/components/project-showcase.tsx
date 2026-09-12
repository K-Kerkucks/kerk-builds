"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/project-visual";
import { DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

type ProjectsShowcaseProps = {
  compact?: boolean;
};

function pad(number: number) {
  return String(number).padStart(2, "0");
}

export function ProjectsShowcase({ compact = false }: ProjectsShowcaseProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const scrollToProject = (index: number) => {
    const container = scrollerRef.current;
    const target = container?.querySelector<HTMLElement>(`[data-project-index="${index}"]`);
    if (!container || !target) return;
    container.scrollTo({
      top: target.offsetTop,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const updateActiveProject = () => {
    const container = scrollerRef.current;
    if (!container) return;

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>("[data-project-index]"),
    );
    const closest = slides.reduce(
      (best, slide, index) => {
        const distance = Math.abs(slide.offsetTop - container.scrollTop);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    if (closest.index !== activeIndex) setActiveIndex(closest.index);
  };

  return (
    <div className="project-breakout">
      <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" /> Selected systems
          </div>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Products built to move work forward.
          </h2>
        </div>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Scroll through six end-to-end builds—from agentic operations to playful
          experiments. Each frame captures the problem, system, and outcome.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-6">
        <aside className="flex items-center justify-between lg:flex-col lg:items-stretch lg:justify-start lg:py-5">
          <div>
            <div className="font-mono text-xs text-muted-foreground">PROJECT</div>
            <div className="mt-1 flex items-baseline gap-1 font-mono">
              <span className="text-3xl font-medium">{pad(activeIndex + 1)}</span>
              <span className="text-sm text-muted-foreground">/ {pad(DATA.projects.length)}</span>
            </div>
          </div>

          <nav className="flex items-center gap-1.5 lg:mt-10 lg:flex-col lg:items-stretch" aria-label="Choose a project">
            {DATA.projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => scrollToProject(index)}
                className={cn(
                  "group flex items-center gap-2 rounded-full p-1.5 text-left transition-colors lg:rounded-md lg:px-2 lg:py-1.5",
                  index === activeIndex
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-label={`Show ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-7" : "w-1.5 group-hover:w-3",
                  )}
                  style={{ backgroundColor: index === activeIndex ? project.accent : undefined }}
                />
                <span className="hidden truncate text-xs lg:block">{project.title}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto hidden items-center gap-2 pt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground lg:flex">
            <ArrowDown className="size-3.5 animate-bounce" /> Scroll to explore
          </div>
        </aside>

        <div
          ref={scrollerRef}
          onScroll={updateActiveProject}
          className={cn(
            "project-scroll-shell relative overflow-y-auto overscroll-contain rounded-[1.75rem] border bg-card shadow-2xl shadow-black/5 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 dark:shadow-black/30",
            compact
              ? "h-[min(760px,calc(100svh-7rem))] min-h-[620px]"
              : "h-[calc(100svh-8rem)] min-h-[640px]",
          )}
          tabIndex={0}
          aria-label="Scrollable project case studies"
        >
          {DATA.projects.map((project, index) => (
            <motion.article
              key={project.slug}
              id={`project-${project.slug}`}
              data-project-index={index}
              initial={reduceMotion ? false : { opacity: 0.35, scale: 0.985 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ root: scrollerRef, amount: 0.55 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onPointerMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
                event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
              }}
              className="project-story group relative flex min-h-full snap-start snap-always flex-col overflow-hidden p-5 sm:p-8 lg:p-10"
              style={{ "--project-accent": project.accent } as React.CSSProperties}
            >
              <div className="project-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
              />

              <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: project.accent }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{project.dates}</span>
              </div>

              <div className="relative z-10 grid flex-1 gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
                <div className="flex flex-col">
                  <div className="mb-4 font-mono text-xs text-muted-foreground">{pad(index + 1)}</div>
                  <h3 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 grid gap-4 border-t pt-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      ["Challenge", project.challenge],
                      ["System", project.approach],
                      ["Outcome", project.outcome],
                    ].map(([label, copy]) => (
                      <div key={label}>
                        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
                          {label}
                        </div>
                        <p className="line-clamp-3 text-xs leading-5 text-muted-foreground">{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full bg-background/40 px-2.5 py-1 text-[10px] backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium"
                  >
                    Read the full case study
                    <span className="grid size-7 place-items-center rounded-full border transition-transform group-hover:translate-x-1" style={{ borderColor: `${project.accent}66` }}>
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </Link>
                </div>

                <div className="h-64 sm:h-72 lg:h-[min(44vh,390px)]">
                  <ProjectVisual kind={project.visual} title={project.title} accent={project.accent} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
