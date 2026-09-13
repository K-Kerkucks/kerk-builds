"use client";

import Link from "next/link";
import { DATA } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2 z-30 mx-auto px-2 sm:bottom-4 sm:px-0">
      <Dock
        iconSize={36}
        className="pointer-events-auto relative mx-auto flex h-[52px] max-w-[calc(100vw-1rem)] items-end gap-0 rounded-2xl border bg-background p-1 shadow-lg sm:h-[58px] sm:max-w-none sm:gap-2 sm:p-2 [&>*]:h-full"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="flex aspect-square size-9 cursor-pointer items-center justify-center rounded-full bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:size-12"
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="mx-0 h-8 sm:mx-0.5" />

        {Object.entries(DATA.contact.social)
          .filter(([, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex aspect-square size-9 cursor-pointer items-center justify-center rounded-full bg-background p-0 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:size-12"
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        <Separator orientation="vertical" className="mx-0 h-8 sm:mx-0.5" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
