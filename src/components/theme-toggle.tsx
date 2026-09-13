"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setTheme(theme === "dark" ? "light" : "dark"); }}
      className="relative flex aspect-square size-9 cursor-pointer items-center justify-center rounded-full bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:size-12"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
}
