import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { BlurFade } from "@/components/ui/blur-fade";
import { BlurFadeText } from "@/components/ui/blur-fade-text";
import { SectionHeading } from "@/components/section-heading";
import { ContactSection } from "@/components/sections/contact-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { DATA } from "@/lib/data";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-24 pb-8 sm:gap-28">
      <section id="hero" className="project-breakout">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card px-6 py-10 shadow-xl shadow-foreground/[0.035] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-40 -top-52 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_68%)]" />
          <div className="pointer-events-none absolute -bottom-56 -left-44 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_68%)]" />
          <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_10rem] md:gap-6 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-10">
            <div className="max-w-3xl">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                  <Sparkles className="size-3.5 text-cyan-500" aria-hidden />
                  Data foundations · production AI · internal tools
                </div>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
                  Data and AI engineer turning complex internal operations into
                  dependable products — from semiconductor planning to multi-agent
                  platforms used in production.
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="#projects"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    Explore projects
                    <ArrowDownRight className="size-4" aria-hidden />
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/70 px-5 text-sm font-medium transition-colors hover:border-foreground/25"
                  >
                    View resume
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                  <span className="inline-flex items-center gap-1.5 px-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden />
                    {DATA.location}
                  </span>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 3} className="justify-self-start md:justify-self-end">
              <div className="relative w-40 sm:w-48 md:w-40 lg:w-56">
                <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-cyan-400/25 via-violet-400/20 to-rose-400/25 blur-lg" />
                <Image
                  src={DATA.avatarUrl}
                  alt={`${DATA.name} with a dog by the water`}
                  width={1120}
                  height={1400}
                  priority
                  className="relative aspect-[4/5] w-full rounded-[2rem] border-4 border-background object-cover shadow-2xl"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering that earns its place in the workflow."
          />
        </BlurFade>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="prose max-w-none text-pretty font-sans text-[0.95rem] leading-7 text-muted-foreground dark:prose-invert sm:text-base">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["40+", "pipelines built"],
                ["100+", "hours saved weekly"],
                ["2", "live internal apps"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-border/70 bg-muted/30 p-3 sm:p-4">
                  <p className="text-xl font-semibold tracking-tight sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[0.66rem] leading-snug text-muted-foreground sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work" className="project-breakout scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <SectionHeading
            eyebrow="02 / Experience"
            title="From data foundations to AI products."
            description="A fuller look at the systems I led, the operational problems behind them, and the outcomes they created."
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="mt-8">
            <WorkSection />
          </div>
        </BlurFade>
      </section>

      <section id="education" className="project-breakout scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <SectionHeading
            eyebrow="03 / Credentials"
            title="Education and continued learning."
            description="Formal training backed by current, hands-on certifications in data engineering and applied AI for cybersecurity."
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="mt-8">
            <CredentialsSection />
          </div>
        </BlurFade>
      </section>

      <section id="skills" className="scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionHeading
            eyebrow="04 / Capabilities"
            title="A cross-functional technical toolkit."
            description="Comfortable moving between product decisions, AI orchestration, data platforms, and the code that connects them."
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="mt-7">
            <SkillsSection />
          </div>
        </BlurFade>
      </section>

      <section id="projects" className="scroll-mt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="contact" className="scroll-mt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
