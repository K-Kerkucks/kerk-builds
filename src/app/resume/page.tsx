import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import { DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { BlurFadeText } from "@/components/ui/blur-fade-text";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume — ${DATA.name}, ${DATA.description}`,
};

const DELAY = 0.04;

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <section className="flex flex-col gap-4">
        <BlurFade delay={DELAY}>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2 w-fit"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </BlurFade>

        <div className="flex items-start justify-between gap-4">
          <div>
            <BlurFadeText
              delay={DELAY * 2}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              text={DATA.name}
            />
            <BlurFade delay={DELAY * 3}>
              <p className="text-muted-foreground mt-1">{DATA.description}</p>
            </BlurFade>
          </div>
          <BlurFade delay={DELAY * 2}>
            <Link
              href="/resume.docx"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors shrink-0"
            >
              <Download className="h-4 w-4" />
              Download
            </Link>
          </BlurFade>
        </div>

        <BlurFade delay={DELAY * 4}>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>{DATA.contact.email}</span>
            <span className="text-border">|</span>
            <span>{DATA.location}</span>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section>
        <BlurFade delay={DELAY * 5}>
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Briefcase className="h-4 w-4" /> Work Experience
          </h2>
        </BlurFade>

        <div className="flex flex-col gap-6">
          {DATA.work.map((work, i) => (
            <BlurFade key={work.company} delay={DELAY * 6 + i * 0.05}>
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {work.company} &middot; {work.location}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap mt-1">
                    {work.start} — {work.end ?? "Present"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {work.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <BlurFade delay={DELAY * 9}>
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <GraduationCap className="h-4 w-4" /> Education
          </h2>
        </BlurFade>

        <div className="flex flex-col gap-4">
          {DATA.education.map((edu, i) => (
            <BlurFade key={edu.school} delay={DELAY * 10 + i * 0.05}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap mt-1">
                  {edu.start} — {edu.end}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <BlurFade delay={DELAY * 11}>
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Wrench className="h-4 w-4" /> Skills
          </h2>
        </BlurFade>

        <BlurFade delay={DELAY * 12}>
          <div className="flex flex-wrap gap-1.5">
            {DATA.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Certifications */}
      <section>
        <BlurFade delay={DELAY * 13}>
          <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Award className="h-4 w-4" /> Certifications
          </h2>
        </BlurFade>

        <BlurFade delay={DELAY * 14}>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>AI4I — Literacy & Foundation in AI</li>
          </ul>
        </BlurFade>
      </section>

      {/* Download CTA */}
      <BlurFade delay={DELAY * 15}>
        <div className="border-t border-border pt-6 text-center">
          <Link
            href="/resume.docx"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
          <p className="text-xs text-muted-foreground mt-2">
            .docx format
          </p>
        </div>
      </BlurFade>
    </div>
  );
}
