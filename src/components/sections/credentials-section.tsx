/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { DATA } from "@/lib/data";

export function CredentialsSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {DATA.education.map((education) => (
        <Link
          key={education.school}
          href={education.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] lg:col-span-4"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#064b8e] to-[#ef7c00]" />
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#064b8e]/10 text-[#064b8e] dark:text-blue-300">
                <GraduationCap className="size-4.5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold">{education.school}</p>
                <p className="mt-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {education.start} / {education.end}
                </p>
              </div>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <div className="mt-5 flex h-20 items-center rounded-xl border border-border/60 bg-white px-4">
            <img
              src={education.logoUrl}
              alt={`${education.school} logo`}
              className="max-h-14 w-full max-w-[13rem] object-contain object-left"
            />
          </div>

          <h3 className="mt-5 text-lg font-semibold leading-snug tracking-[-0.03em]">
            {education.degree}
          </h3>
          <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
            {education.description}
          </p>

          <div className="mt-4 border-t border-border/60 pt-4">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Academic foundations
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {education.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-[0.68rem] text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8">
        {DATA.certifications.map((certification) => (
          <Link
            key={certification.name}
            href={certification.imageUrl}
            target="_blank"
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] sm:last:col-span-2 md:last:col-span-1"
            aria-label={`Open ${certification.name} certificate image`}
          >
            <span
              className="absolute inset-x-0 top-0 h-1"
              style={{ backgroundColor: certification.accent }}
            />

            <div className="relative flex aspect-[1.35/1] items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white p-1.5">
              <img
                src={certification.imageUrl}
                alt={`${certification.name} certificate`}
                className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-lg backdrop-blur-sm">
                <ArrowUpRight className="size-3.5" aria-hidden />
              </span>
            </div>

            <div className="flex flex-1 flex-col px-1 pb-1 pt-3.5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {certification.issuer}
              </p>
              <h3 className="mt-1.5 text-sm font-semibold leading-snug tracking-[-0.02em] sm:text-[0.95rem]">
                {certification.name}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {certification.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
