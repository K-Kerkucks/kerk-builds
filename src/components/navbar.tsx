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
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 mx-auto">
      <Dock className="pointer-events-auto relative mx-auto flex min-h-full items-end rounded-2xl border bg-background px-1 shadow-lg [&>*]:h-full">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="flex aspect-square cursor-pointer items-center justify-center rounded-full size-12 bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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

        <Separator orientation="vertical" className="h-8 mx-0.5" />

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
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full size-12 bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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

        <Separator orientation="vertical" className="h-8 mx-0.5" />

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
