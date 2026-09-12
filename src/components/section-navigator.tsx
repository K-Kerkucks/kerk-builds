"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Introduction" },
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "education", label: "Credentials" },
  { id: "skills", label: "Capabilities" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

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
      className="fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end xl:flex"
      style={{ right: "max(0.75rem, calc((100vw - 1180px) / 2 - 3.5rem))" }}
    >
      <span className="sr-only">
        Section {activeIndex + 1} of {SECTIONS.length}
      </span>
      {SECTIONS.map((section) => {
        const active = section.id === activeId;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => jumpToSection(section.id)}
            aria-label={`Jump to ${section.label}`}
            aria-current={active ? "location" : undefined}
            className="group relative flex h-5 w-11 items-center justify-end rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              className={cn(
                "h-[3px] rounded-full transition-[width,background-color,opacity] duration-300",
                active
                  ? "w-9 bg-cyan-400 opacity-100"
                  : "w-3 bg-foreground opacity-25 group-hover:w-6 group-hover:opacity-55",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
