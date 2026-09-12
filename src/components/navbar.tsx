"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, FolderOpen, BookOpen, User, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="size-4" />,
  Projects: <FolderOpen className="size-4" />,
  Blog: <BookOpen className="size-4" />,
  About: <User className="size-4" />,
};

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: <GithubIcon className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <LinkedinIcon className="size-4" />,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: <Mail className="size-4" />,
  },
];

const linkClasses = cn(
  "flex aspect-square cursor-pointer items-center justify-center rounded-full",
  "size-12 bg-background p-0 text-muted-foreground",
  "hover:text-foreground hover:bg-muted transition-colors",
);

export function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 mx-auto">
      <TooltipProvider delay={0}>
        <Dock className="pointer-events-auto relative mx-auto flex min-h-full items-end rounded-2xl border bg-background px-1 shadow-lg [&>*]:h-full">
          {navItems.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={item.href} aria-label={item.label} className={linkClasses}>
                    {iconMap[item.label] || <Home className="size-4" />}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-8 mx-0.5" />

          {socialLinks.map((link) => (
            <DockIcon key={link.label}>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={linkClasses}
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
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
      </TooltipProvider>
    </div>
  );
}
