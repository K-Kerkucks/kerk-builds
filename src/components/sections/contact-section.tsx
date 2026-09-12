import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { DATA } from "@/lib/data";

export function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-foreground p-7 text-background shadow-2xl shadow-foreground/10 sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),transparent_68%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 size-80 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22),transparent_68%)]" />
      <div className="relative grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-background/55">
            06 / Contact
          </p>
          <h2 className="mt-4 max-w-lg text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Let&apos;s build something that holds up in production
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-background/65 sm:text-base">
            I&apos;m always glad to compare notes on internal AI products, data
            platforms, and the engineering choices that turn prototypes into
            dependable tools.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-background px-5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" aria-hidden />
            Send an email
          </Link>
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 px-3 text-sm text-background/65 transition-colors hover:text-background"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
