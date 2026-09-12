import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BlurFadeText } from "@/components/ui/blur-fade-text";
import { SectionHeading } from "@/components/section-heading";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { DATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${DATA.name}, ${DATA.description}`,
};

const DELAY = 0.04;

export default function ResumePage() {
  return (
    <main className="project-breakout flex flex-col gap-20 pb-8 sm:gap-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-7 shadow-xl shadow-foreground/[0.035] sm:p-10">
        <div className="pointer-events-none absolute -right-32 -top-44 size-96 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_68%)]" />
        <div className="relative">
          <BlurFade delay={DELAY}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back home
            </Link>
          </BlurFade>

          <div className="mt-10 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <BlurFadeText
                delay={DELAY * 2}
                className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl"
                text={DATA.name}
              />
              <BlurFade delay={DELAY * 3}>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                  Data &amp; AI Engineer building production-ready internal products
                  from intentional data foundations.
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={DELAY * 3}>
              <Link
                href="/Kerk_Zhi_Sheng_Resume.docx"
                download="Kerk_Zhi_Sheng_Resume.docx"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" aria-hidden />
                Download .docx
              </Link>
            </BlurFade>
          </div>

          <BlurFade delay={DELAY * 4}>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-border/70 pt-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5" aria-hidden />
                {DATA.contact.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden />
                {DATA.location}
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      <section>
        <BlurFade delay={DELAY * 4}>
          <SectionHeading
            eyebrow="Profile"
            title="Built for adoption, scale, and operational trust"
          />
        </BlurFade>
        <BlurFade delay={DELAY * 5}>
          <div className="prose mt-7 max-w-4xl text-pretty font-sans text-base leading-8 text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>

      <section>
        <BlurFade delay={DELAY * 6}>
          <SectionHeading
            eyebrow="Experience"
            title="Selected professional work"
            description="Delivery details, production outcomes, and the data-engineering foundations behind each role."
          />
        </BlurFade>
        <BlurFade delay={DELAY * 7}>
          <div className="mt-8">
            <WorkSection />
          </div>
        </BlurFade>
      </section>

      <section>
        <BlurFade delay={DELAY * 8}>
          <SectionHeading
            eyebrow="Credentials"
            title="Education and certifications"
          />
        </BlurFade>
        <BlurFade delay={DELAY * 9}>
          <div className="mt-8">
            <CredentialsSection />
          </div>
        </BlurFade>
      </section>

      <section>
        <BlurFade delay={DELAY * 10}>
          <SectionHeading eyebrow="Capabilities" title="Technical toolkit" />
        </BlurFade>
        <BlurFade delay={DELAY * 11}>
          <div className="mt-7">
            <SkillsSection />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
