import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig, projects, skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { Particles } from "@/components/ui/particles";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const allTags = Object.values(skills).flat();

  return (
    <div className="relative">
      <Particles
        className="fixed inset-0 -z-10 opacity-40 dark:opacity-60"
        quantity={60}
        staticity={30}
        color="var(--foreground)"
      />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <BlurFade delay={0.1}>
          <Badge variant="secondary" className="mb-6">
            Open to collaboration
          </Badge>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">{siteConfig.name}</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-4 text-xl text-muted-foreground sm:text-2xl">
            <TypingAnimation duration={30}>
              I build intelligent systems that automate the boring stuff.
            </TypingAnimation>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            From supply chain optimization at Micron to building AI platforms at
            GovTech — I design multi-agent systems, real-time data pipelines,
            and developer-friendly products that ship and scale.
          </p>
        </BlurFade>

        <BlurFade delay={0.6}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects">
              <ShimmerButton className="h-11 px-6">
                <span className="flex items-center gap-2 text-sm font-medium">
                  View Projects <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              About Me
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 5, label: "Products Shipped", suffix: "+" },
              { value: 40, label: "Data Pipelines", suffix: "+" },
              { value: 100, label: "Hours Saved Weekly", suffix: "+" },
              { value: 4, label: "Years Experience", suffix: "+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold tabular-nums">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <BlurFade delay={0.1}>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                Products I&apos;ve designed and built end-to-end
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <BlurFade key={project.slug} delay={0.15 + i * 0.1}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-6 mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center">
            Tech Stack
          </h2>
          <p className="mt-2 text-muted-foreground text-center">
            Technologies I work with daily
          </p>
        </div>
        <Marquee pauseOnHover className="[--duration:40s]">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="mx-1 text-sm px-4 py-2"
            >
              {tag}
            </Badge>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <BlurFade delay={0.1}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Interested in collaboration or want to learn more about my work?
            Check out the projects or get in touch.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/about">
              <ShimmerButton className="h-11 px-6">
                <span className="flex items-center gap-2 text-sm font-medium">
                  Get in Touch <ExternalLink className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
