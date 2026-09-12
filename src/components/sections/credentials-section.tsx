/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarRange,
  GraduationCap,
} from "lucide-react";
import { DATA } from "@/lib/data";

export function CredentialsSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      {DATA.education.map((education) => (
        <Link
          key={education.school}
          href={education.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] lg:col-span-5"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#064b8e] to-[#ef7c00]" />
          <div className="flex items-start justify-between gap-4">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#064b8e]/10 text-[#064b8e] dark:text-blue-300">
              <GraduationCap className="size-5" aria-hidden />
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="mt-8 flex h-24 items-center rounded-2xl border border-border/60 bg-white px-5">
            <img
              src={education.logoUrl}
              alt={`${education.school} logo`}
              className="max-h-20 w-full max-w-[17rem] object-contain object-left"
            />
          </div>
          <p className="mt-6 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-muted-foreground">
            {education.start} — {education.end}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
            {education.degree}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {education.description}
          </p>
        </Link>
      ))}

      <div className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
        {DATA.certifications.map((certification, index) => {
          const className = `group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] ${index === 2 ? "sm:col-span-2" : ""}`;

          return (
            <Link
              key={certification.name}
              href={certification.imageUrl}
              target="_blank"
              className={className}
              aria-label={`Open ${certification.name} certificate image`}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: certification.accent }}
              />

              <div
                className={`relative overflow-hidden rounded-2xl border border-border/60 bg-white ${index === 2 ? "aspect-[2.85/1]" : "aspect-[1.36/1]"}`}
              >
                <img
                  src={certification.imageUrl}
                  alt={`${certification.name} certificate`}
                  className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-lg backdrop-blur-sm">
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </span>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  <span>{certification.issuer}</span>
                  {certification.issued ? (
                    <>
                      <span className="size-1 rounded-full bg-border" />
                      <span className="inline-flex items-center gap-1">
                        <CalendarRange className="size-3" aria-hidden />
                        {certification.issued}
                      </span>
                    </>
                  ) : null}
                </div>
                <h3 className="mt-2 text-base font-semibold leading-snug tracking-[-0.02em]">
                  {certification.name}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {certification.description}
                </p>
                {certification.credentialId ? (
                  <p className="mt-3 font-mono text-[0.65rem] text-muted-foreground">
                    Credential {certification.credentialId}
                    {certification.expires
                      ? ` · Valid through ${certification.expires}`
                      : ""}
                  </p>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
