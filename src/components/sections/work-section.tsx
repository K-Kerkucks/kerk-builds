/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ImageIcon,
  MapPin,
  Presentation,
} from "lucide-react";
import { DATA } from "@/lib/data";

export function WorkSection() {
  return (
    <div className="relative space-y-5">
      <div className="absolute bottom-8 left-[1.55rem] top-8 hidden w-px bg-border/80 sm:block" />

      {DATA.work.map((work, index) => (
        <article
          key={work.company}
          className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] sm:ml-12 sm:p-7"
        >
          <span
            className="absolute inset-x-0 top-0 h-1 opacity-80"
            style={{ backgroundColor: work.accent }}
          />
          <span
            className="absolute -left-[2.98rem] top-8 hidden size-3 rounded-full border-[3px] border-background shadow-[0_0_0_1px_var(--border)] sm:block"
            style={{ backgroundColor: work.accent }}
          />

          <div className="grid gap-7 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)]">
            <div className="flex flex-col gap-5">
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-24 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-white p-4 transition-colors hover:border-foreground/20"
                aria-label={`Visit ${work.company}`}
              >
                <img
                  src={work.logoUrl}
                  alt={`${work.company} logo`}
                  className={`max-h-16 w-full object-contain ${index === 0 ? "max-w-[5.5rem]" : "max-w-[10rem]"}`}
                />
              </Link>

              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {work.start} / {work.end ?? "Present"}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden />
                  {work.location}
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {work.company}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em]">
                    {work.title}
                  </h3>
                </div>
                <Link
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                  aria-label={`Visit ${work.company}`}
                >
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
                {work.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {work.metrics.map((metric) => (
                  <div
                    key={`${work.company}-${metric.label}`}
                    className="rounded-xl border border-border/60 bg-muted/35 px-3 py-3"
                  >
                    <p className="text-sm font-semibold tracking-tight">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-[0.68rem] leading-snug text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-border/60 pt-5">
                <p className="mb-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Selected contributions
                </p>
                <div className="grid gap-6 lg:grid-cols-2">
                  {work.highlightGroups.map((group) => (
                    <div key={group.label} className="min-w-0">
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.15em]" style={{ color: work.accent }}>
                        {group.label}
                      </p>
                      <ul className="mt-3 grid gap-3">
                        {group.items.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <span
                              className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full text-white"
                              style={{ backgroundColor: work.accent }}
                            >
                              <Check className="size-2.5" strokeWidth={3} aria-hidden />
                            </span>
                            <span className="min-w-0 break-words">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {work.activities.length > 0 ? (
                <div className="mt-6 grid gap-5 border-t border-border/60 pt-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                  {work.activityImages.length > 0 ? (
                    <div className="grid grid-cols-2 items-start gap-2">
                      {work.activityImages.map((image, imageIndex) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          className={`h-auto w-full rounded-xl border border-border/60 ${imageIndex === 2 ? "col-span-2" : ""}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 text-center text-muted-foreground">
                      <ImageIcon className="size-5" aria-hidden />
                      <p className="mt-2 text-xs font-medium">Event photo placeholder</p>
                      <p className="mt-1 text-[0.65rem]">Ready for your next image</p>
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Presentation className="size-4" style={{ color: work.accent }} aria-hidden />
                      <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Speaking &amp; innovation
                      </p>
                    </div>
                    <ul className="mt-3 space-y-3">
                      {work.activities.map((activity) => (
                        <li key={activity} className="min-w-0 break-words text-sm leading-6 text-muted-foreground">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
