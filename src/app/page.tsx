import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, projects, skills, experience, education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {siteConfig.name.split(" ")[0]} 👋
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            {siteConfig.description}
          </p>
        </BlurFade>
      </section>

      {/* About */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              I&apos;m an AI engineer and product builder based in Singapore. I
              started my career optimising semiconductor supply chains at{" "}
              <strong className="text-foreground">Micron Technology</strong>,
              where I led data engineering for tactical planning — building 40+
              pipelines and driving automation that saved 100+ man-hours weekly.
            </p>
            <p>
              Now at{" "}
              <strong className="text-foreground">GovTech</strong>, I design and
              ship AI-powered platforms for the public sector: multi-agent
              orchestration systems, real-time Databricks pipelines, and
              full-stack tools that actually get used. I care about products that
              solve real problems — not just technically impressive demos.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="mt-4 flex flex-col gap-1">
          {experience.map((exp, i) => (
            <BlurFade key={exp.company} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
              <ResumeCard
                altText={exp.company}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                description={exp.description}
                highlights={exp.highlights}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        <div className="mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <ResumeCard
              altText={education.school}
              title={education.degree}
              subtitle={education.school}
              period={education.period}
              badges={education.certifications}
            />
          </BlurFade>
        </div>
      </section>

      {/* Skills */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {Object.values(skills)
            .flat()
            .map((skill, i) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 12 + i * 0.02}
              >
                <Badge variant="secondary">{skill}</Badge>
              </BlurFade>
            ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Projects</h2>
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all <ArrowUpRight className="size-3" />
            </Link>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Products I&apos;ve designed and shipped end-to-end. Each one framed as a
            general-purpose capability.
          </p>
        </BlurFade>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <BlurFade key={project.slug} delay={BLUR_FADE_DELAY * 14 + i * 0.05}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <Separator className="mb-8" />
          <div className="text-center">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Open to collaboration, interesting projects, or just connecting
              with fellow engineers. Reach out via the dock below or drop me an{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline"
              >
                email
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
