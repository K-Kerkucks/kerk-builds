import {
  BrainCircuit,
  ChartNoAxesCombined,
  CodeXml,
  Database,
} from "lucide-react";
import { DATA } from "@/lib/data";

const icons = [BrainCircuit, Database, CodeXml, ChartNoAxesCombined];

export function SkillsSection() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {DATA.skillGroups.map((group, index) => {
        const Icon = icons[index] ?? CodeXml;

        return (
          <article
            key={group.label}
            className="rounded-[1.5rem] border border-border/70 bg-card p-6 transition-colors hover:border-foreground/15"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/50 text-muted-foreground">
                <Icon className="size-4" aria-hidden />
              </span>
              <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                {group.label}
              </h3>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
            <div className="mt-5 border-t border-border/60 pt-4">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Applied in my work
              </p>
              <ul className="mt-3 grid gap-2 text-xs leading-5 text-muted-foreground sm:grid-cols-2">
                {group.applied.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
