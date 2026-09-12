import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig, skills, experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "About",
  description: "About Kerk Zhi Sheng — software engineer and product builder.",
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
        <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            I&apos;m <strong>{siteConfig.name}</strong>, a software engineer who
            builds intelligent systems at the intersection of AI, data, and
            product. I specialise in designing full-stack platforms that
            automate operations, surface insights, and scale reliably.
          </p>
          <p>
            My work spans multi-agent AI orchestration, real-time data
            pipelines, and developer-focused tools. I care about shipping
            products that solve real problems — not just technically impressive
            demos.
          </p>
        </div>
      </BlurFade>

      {/* Experience */}
      <section className="mt-16">
        <BlurFade delay={0.25}>
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </BlurFade>

        <div className="mt-6 space-y-8">
          {experience.map((exp, i) => (
            <BlurFade key={exp.company} delay={0.3 + i * 0.1}>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-2 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary mt-0.5">-</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <BlurFade delay={0.3}>
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        </BlurFade>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], i) => (
            <BlurFade key={category} delay={0.35 + i * 0.05}>
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
      <section className="mt-16">
        <BlurFade delay={0.4}>
          <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just connecting with like-minded engineers.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
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
              href="mailto:hello@kerkzhisheng.com"
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
