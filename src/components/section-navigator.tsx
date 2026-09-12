"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Start", accent: "#22d3ee" },
  { id: "about", label: "About", accent: "#a78bfa" },
  { id: "work", label: "Experience", accent: "#ef3340" },
  { id: "education", label: "Education", accent: "#2563eb" },
  { id: "skills", label: "Capabilities", accent: "#34d399" },
  { id: "projects", label: "Projects", accent: "#22d3ee" },
  { id: "contact", label: "Contact", accent: "#f59e0b" },
] as const;

function pad(number: number) {
  return String(number).padStart(2, "0");
}

export function SectionNavigator() {
  const [activeId, setActiveId] = useState<(typeof SECTIONS)[number]["id"]>("hero");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const readingLine = window.innerHeight * 0.38;
        let closest: (typeof SECTIONS)[number] = SECTIONS[0];
        let closestDistance = Number.POSITIVE_INFINITY;

        for (const section of SECTIONS) {
          const element = document.getElementById(section.id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const distance = rect.top <= readingLine && rect.bottom >= readingLine
            ? 0
            : Math.min(Math.abs(rect.top - readingLine), Math.abs(rect.bottom - readingLine));

          if (distance < closestDistance) {
            closest = section;
            closestDistance = distance;
          }
        }

        setActiveId(closest.id);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const jumpToSection = (id: (typeof SECTIONS)[number]["id"]) => {
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const activeIndex = SECTIONS.findIndex((section) => section.id === activeId);

  return (
    <nav
      aria-label="Jump to page section"
      className="fixed top-1/2 z-40 hidden w-28 -translate-y-1/2 flex-col min-[1420px]:flex"
      style={{ right: "max(0.5rem, calc((100vw - 1180px) / 2 - 11.5rem))" }}
    >
      <span className="sr-only">
        Section {activeIndex + 1} of {SECTIONS.length}
      </span>
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="block">Section</span>
        <span className="mt-1 block text-base tracking-normal text-foreground">
          {pad(activeIndex + 1)} <span className="text-xs text-muted-foreground">/ {pad(SECTIONS.length)}</span>
        </span>
      </div>
      <div className="flex flex-col items-stretch gap-0.5">
        {SECTIONS.map((section) => {
          const active = section.id === activeId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => jumpToSection(section.id)}
              aria-label={`Jump to ${section.label}`}
              aria-current={active ? "location" : undefined}
              className={cn(
                "group flex min-h-8 items-center gap-2 rounded-md px-1.5 text-left text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "h-1.5 shrink-0 rounded-full bg-foreground/25 transition-all duration-300",
                  active ? "w-8" : "w-1.5 group-hover:w-3",
                )}
                style={{ backgroundColor: active ? section.accent : undefined }}
              />
              <span className="truncate">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
