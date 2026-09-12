import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { HomeIcon, NotebookIcon, Mail } from "lucide-react";

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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      href: "",
      dates: "2024 — Present",
      active: true,
      description:
        "A channel-agnostic triage system that classifies incoming requests, matches them against a knowledge base, and auto-replies or escalates. Configurable multi-agent pipeline with threshold-based routing and LLM-powered decision making.",
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
      href: "",
      dates: "2024 — Present",
      active: true,
      description:
        "An intelligent workspace assistant combining Kanban board management with AI-powered ticket proposals, cross-workspace operations, and configurable agent profiles.",
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
      href: "",
      dates: "2024",
      active: false,
      description:
        "AI-powered gig platform with skill-based matching using vector embeddings, verified identity integration, and intelligent job recommendations.",
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
      href: "",
      dates: "2022 — Present",
      active: true,
      description:
        "Real-time operational dashboards with automated anomaly detection, cross-functional audit trails, and drill-down analytics for engineering teams.",
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
  ],
} as const;
