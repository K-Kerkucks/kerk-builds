import type { Metadata } from "next";
import Link from "next/link";
import { Mail, GraduationCap, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig, skills, experience, education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kerk Zhi Sheng — AI engineer and product builder. NUS ISE, ex-Micron, now building AI platforms at GovTech.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Intro */}
      <BlurFade delay={0.1}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m <strong className="text-foreground">{siteConfig.name}</strong>,
            an AI engineer and product builder based in Singapore. I specialise in
            designing full-stack platforms that automate operations, orchestrate
            intelligent agents, and turn complex data into actionable insight.
          </p>
          <p>
            My journey started in supply chain optimization at{" "}
            <strong className="text-foreground">Micron Technology</strong>, where I
            led data engineering for tactical planning — building 40+ pipelines,
            driving automation that saved 100+ man-hours weekly, and leading
            migration projects to Snowflake.
          </p>
          <p>
            Now at{" "}
            <strong className="text-foreground">GovTech</strong>, I build
            AI-powered platforms for the public sector — multi-agent
            orchestration systems, real-time data pipelines on Databricks, and
            developer-focused tools that scale. I care about shipping products
            that solve real problems, not just technically impressive demos.
          </p>
        </div>
      </BlurFade>

      {/* Education */}
      <section className="mt-14">
        <BlurFade delay={0.25}>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> Education
          </h2>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-4 rounded-xl border border-border/50 p-5">
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">{education.school}</p>
            <p className="text-sm text-muted-foreground">{education.period}</p>
            {education.certifications.length > 0 && (
              <div className="mt-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {education.certifications.map((cert) => (
                    <Badge key={cert} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </BlurFade>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <BlurFade delay={0.3}>
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </BlurFade>

        <div className="mt-6 space-y-10">
          {experience.map((exp, i) => (
            <BlurFade key={exp.company} delay={0.35 + i * 0.08}>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary shrink-0 mt-0.5">-</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14">
        <BlurFade delay={0.4}>
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </BlurFade>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], i) => (
            <BlurFade key={category} delay={0.45 + i * 0.05}>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-14">
        <BlurFade delay={0.5}>
          <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Open to collaboration, interesting projects, or just connecting with
            fellow engineers. Reach out via any channel below.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton className="h-10 px-5">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </span>
              </ShimmerButton>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
            >
              <Mail className="h-4 w-4" /> Email
            </Link>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
