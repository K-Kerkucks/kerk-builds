"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  highlights?: string[];
  badges?: string[];
}

export function ResumeCard({
  altText,
  title,
  subtitle,
  period,
  description,
  highlights,
  badges,
}: ResumeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasContent = description || (highlights && highlights.length > 0);

  return (
    <div
      className={cn(
        "group relative flex gap-4 rounded-lg border border-transparent p-3 -mx-3 transition-colors",
        hasContent && "cursor-pointer hover:border-border hover:bg-accent/50",
      )}
      onClick={() => hasContent && setExpanded(!expanded)}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-muted text-lg font-bold">
        {altText[0]}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-semibold leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
              {period}
            </span>
            {hasContent && (
              <ChevronDown
                className={cn(
                  "size-4 text-muted-foreground transition-transform",
                  expanded && "rotate-180",
                )}
              />
            )}
          </div>
        </div>

        {badges && badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {expanded && hasContent && (
          <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {description && <p>{description}</p>}
            {highlights && highlights.length > 0 && (
              <ul className="mt-2 space-y-1">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-primary shrink-0">-</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
