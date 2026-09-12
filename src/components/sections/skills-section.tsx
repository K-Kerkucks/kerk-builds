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
            className="rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-foreground/15"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/50 text-muted-foreground">
                <Icon className="size-4" aria-hidden />
              </span>
              <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                {group.label}
              </h3>
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
