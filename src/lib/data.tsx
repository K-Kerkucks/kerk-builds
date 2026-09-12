import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  FileTextIcon,
  Mail,
  PanelsTopLeft,
} from "lucide-react";

export const DATA = {
  name: "Kerk Zhi Sheng",
  initials: "KZS",
  url: "https://kerkzhisheng.com",
  location: "Singapore",
  description:
    "AI Engineer & Product Builder. From supply chain optimization to multi-agent AI platforms — I build systems that automate the boring stuff.",
  summary:
    "I started my career optimising semiconductor supply chains at [Micron Technology](https://www.micron.com), where I led data engineering for tactical planning — building **40+ pipelines** and driving automation that saved **100+ man-hours weekly**. Now at [GovTech](https://www.tech.gov.sg), I design and ship AI-powered platforms for the public sector: multi-agent orchestration systems, real-time [Databricks](https://databricks.com) pipelines, and full-stack tools that actually get used.",
  avatarUrl: "/me.png",

  skills: [
    "TypeScript",
    "Python",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Databricks",
    "Snowflake",
    "Docker",
    "LLM Orchestration",
    "Multi-Agent Systems",
    "RAG",
    "NiFi",
    "Tableau",
    "R",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: PanelsTopLeft, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: FileTextIcon, label: "Resume" },
  ],

  contact: {
    email: "zhishengkerk@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/K-Kerkucks",
        icon: GithubIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kerk-zhi-sheng-59060a171/",
        icon: LinkedinIcon,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:zhishengkerk@gmail.com",
        icon: Mail,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GovTech",
      href: "https://www.tech.gov.sg",
      badges: [],
      location: "Singapore",
      title: "Data & AI Engineer",
      logoUrl: "/govtech.png",
      start: "2024",
      end: "Present",
      description:
        "Designing and shipping AI-powered platforms for public sector operations. Built multi-agent AI triage system with configurable pipelines, KB matching, and auto-reply across channels. Designed workspace orchestration platform with AI assistant, Kanban boards, and cross-workspace operations. Developed real-time pose detection engine using MediaPipe. Architected operational dashboards and ETL pipelines on Databricks at scale.",
    },
    {
      company: "Micron Technology",
      href: "https://www.micron.com",
      badges: [],
      location: "Singapore",
      title: "Data Science Engineer",
      logoUrl: "/micron.png",
      start: "Jun 2022",
      end: "2024",
      description:
        "Technical Lead for Supply Chain Optimization — achieved 2-5% additional cost savings for assembly products. Built and maintained 40+ data pipelines and 60+ tables as single sources of truth. Led data migration projects to Snowflake for Planned Order Firming Process. Drove end-to-end firming process automation saving 80+ hours weekly. Led Product Assembly Re-Entrance reporting, contributing to 20+ hours weekly savings.",
    },
    {
      company: "National University of Singapore",
      href: "https://nus.edu.sg",
      badges: [],
      location: "Singapore",
      title: "Research Intern (C4NGP/C4NGL)",
      logoUrl: "/nus.png",
      start: "May 2021",
      end: "Aug 2021",
      description:
        "Technology scanning and strategic analysis for PSA operations. Assisted in warehouse simulation project for Huawei. Refined entity flow diagrams and coded simulation backbone in XML.",
    },
  ],

  education: [
    {
      school: "National University of Singapore",
      href: "https://nus.edu.sg",
      degree: "Bachelor of Engineering, Industrial and Systems Engineering",
      logoUrl: "/nus.png",
      start: "2018",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "InboxPilot",
      slug: "inboxpilot",
      category: "AI operations",
      accent: "#22d3ee",
      visual: "inbox",
      href: "",
      dates: "2024 — Present",
      active: true,
      description:
        "A channel-agnostic triage system that classifies incoming requests, matches them against a knowledge base, and auto-replies or escalates. Configurable multi-agent pipeline with threshold-based routing and LLM-powered decision making.",
      challenge:
        "High-volume requests arrive with inconsistent context, making manual sorting slow and reliable responses difficult to scale.",
      approach:
        "A configurable agent pipeline classifies intent, retrieves grounded knowledge, scores confidence, and chooses between reply and human escalation.",
      outcome:
        "A repeatable path from unstructured messages to traceable decisions, with people kept in the loop for ambiguous cases.",
      technologies: [
        "Next.js",
        "Multi-Agent AI",
        "LLM",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "BoardFlow",
      slug: "boardflow",
      category: "AI workspace",
      accent: "#a78bfa",
      visual: "board",
      href: "",
      dates: "2024 — Present",
      active: true,
      description:
        "An intelligent workspace assistant combining Kanban board management with AI-powered ticket proposals, cross-workspace operations, and configurable agent profiles.",
      challenge:
        "Project context is fragmented across boards, tickets, and teams, so routine coordination becomes a constant tax on delivery.",
      approach:
        "A shared workspace model lets an AI assistant propose structured work, operate across boards, and adapt through configurable agent profiles.",
      outcome:
        "Teams get one operational surface where planning and AI-assisted execution stay connected instead of drifting into separate tools.",
      technologies: [
        "Next.js",
        "AI Assistant",
        "Kanban",
        "PostgreSQL",
        "Real-time",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "GigConnect",
      slug: "gigconnect",
      category: "Talent matching",
      accent: "#fb7185",
      visual: "network",
      href: "",
      dates: "2024",
      active: false,
      description:
        "AI-powered gig platform with skill-based matching using vector embeddings, verified identity integration, and intelligent job recommendations.",
      challenge:
        "Keyword search misses adjacent skills and makes it hard for credible talent to surface when job descriptions are imperfect.",
      approach:
        "Semantic matching pairs skill embeddings with verified profiles, then turns similarity signals into explainable recommendations.",
      outcome:
        "Discovery becomes more relevant than literal keyword matching while identity checks help make each recommendation more trustworthy.",
      technologies: [
        "Next.js",
        "Supabase",
        "pgvector",
        "AI Matching",
        "Identity",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "DataLens",
      slug: "datalens",
      category: "Data platform",
      accent: "#34d399",
      visual: "analytics",
      href: "",
      dates: "2022 — Present",
      active: true,
      description:
        "Real-time operational dashboards with automated anomaly detection, cross-functional audit trails, and drill-down analytics for engineering teams.",
      challenge:
        "Operational signals live across disconnected sources, delaying anomaly detection and making root-cause analysis difficult to audit.",
      approach:
        "Streaming pipelines standardise events into trusted models, then expose anomalies, drill-downs, and audit trails in one analytical layer.",
      outcome:
        "Engineering teams can move from a top-level signal to supporting detail without losing the lineage behind each decision.",
      technologies: [
        "Databricks",
        "SQL",
        "ETL",
        "Tableau",
        "Python",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Desktop Pet",
      slug: "desktop-pet",
      category: "Creative coding",
      accent: "#fbbf24",
      visual: "pet",
      href: "",
      dates: "2024",
      active: false,
      description:
        "An interactive desktop companion that lives on your screen — reacts to mouse movements, has idle animations, and brings a bit of joy to long coding sessions. Built as a fun weekend project to explore desktop rendering and sprite animation.",
      challenge:
        "Desktop utilities are useful but rarely delightful; this experiment asked how a tiny ambient character could feel alive without becoming distracting.",
      approach:
        "A lightweight Electron shell combines pointer-aware behaviour, an animation state machine, and canvas-rendered sprite sequences.",
      outcome:
        "A playful always-on-top companion and a compact exploration of expressive interaction within tight performance constraints.",
      technologies: [
        "Electron",
        "TypeScript",
        "Canvas API",
        "Sprite Animation",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Nihongo Drill",
      slug: "nihongo-drill",
      category: "Learning tool",
      accent: "#60a5fa",
      visual: "language",
      href: "",
      dates: "2023 — 2024",
      active: false,
      description:
        "A Japanese language learning app built for personal study. Features hiragana/katakana drills, vocabulary flashcards with spaced repetition, and JLPT N5-N4 grammar exercises. Built because existing apps were either too gamified or too expensive.",
      challenge:
        "Many language apps optimise for streaks or subscriptions instead of focused repetition that matches a learner's actual weak spots.",
      approach:
        "A local-first mobile experience combines kana drills, vocabulary cards, grammar practice, and a spaced-repetition schedule.",
      outcome:
        "A calm, purpose-built study loop that keeps the learner focused on recall and progression rather than game mechanics.",
      technologies: [
        "React Native",
        "TypeScript",
        "SQLite",
        "Spaced Repetition",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
