import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing by Kerk Zhi Sheng. Coming soon.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-[65svh] flex-col">
      <BlurFade delay={0.04}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back home
        </Link>
      </BlurFade>

      <BlurFade delay={0.08} className="my-auto py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-8 text-center shadow-xl shadow-foreground/[0.035] sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_42%)]" />
          <div className="relative mx-auto flex size-12 items-center justify-center rounded-2xl border border-border/70 bg-background shadow-sm">
            <PenLine className="size-5 text-muted-foreground" aria-hidden />
          </div>
          <p className="relative mt-7 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Notes / Coming later
          </p>
          <h1 className="relative mt-3 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            The page is intentionally quiet
          </h1>
          <p className="relative mx-auto mt-4 max-w-lg text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
            I have not published any articles here yet. When I do, this space will
            contain only writing I have actually authored.
          </p>
        </div>
      </BlurFade>
    </main>
  );
}
