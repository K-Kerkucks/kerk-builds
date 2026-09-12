export const siteConfig = {
  name: "Kerk Zhi Sheng",
  title: "AI Engineer & Product Builder",
  description:
    "From supply chain optimization at Micron to building AI-powered platforms — I design intelligent systems that automate operations, orchestrate agents, and turn complex data into actionable insight.",
  url: "https://kerkzhisheng.com",
  email: "zhishengkerk@gmail.com",
  links: {
    github: "https://github.com/K-Kerkucks",
    linkedin: "https://www.linkedin.com/in/kerk-zhi-sheng-59060a171/",
  },
};

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "inbox-pilot",
    title: "InboxPilot",
    tagline: "AI Inbox Orchestrator",
    description:
      "A channel-agnostic triage system that classifies incoming requests, matches them against a knowledge base, and auto-replies or escalates. Configurable multi-agent pipeline with threshold-based routing, KB search, and LLM-powered decision making.",
    tags: ["Next.js", "Multi-Agent AI", "LLM", "PostgreSQL", "Email Automation"],
    image: "/projects/inbox-pilot.png",
    featured: true,
  },
  {
    slug: "board-flow",
    title: "BoardFlow",
    tagline: "Workspace Command Center",
    description:
      "An intelligent workspace assistant combining Kanban board management with AI-powered ticket proposals, cross-workspace operations, and configurable agent profiles. Features real-time collaboration, rich text editing, and automated workflow orchestration.",
    tags: ["Next.js", "AI Assistant", "Kanban", "PostgreSQL", "Real-time"],
    image: "/projects/board-flow.png",
    featured: true,
  },
  {
    slug: "gig-connect",
    title: "GigConnect",
    tagline: "Smart Gig Marketplace",
    description:
      "AI-powered gig platform with skill-based matching using vector embeddings, verified identity integration, and intelligent job recommendations. Connects workers to opportunities with semantic search across qualifications and job requirements.",
    tags: ["Next.js", "Supabase", "pgvector", "AI Matching", "Identity"],
    image: "/projects/gig-connect.png",
    featured: false,
  },
  {
    slug: "data-lens",
    title: "DataLens",
    tagline: "Ops Intelligence Dashboard",
    description:
      "Real-time operational dashboards with automated anomaly detection, cross-functional audit trails, and drill-down analytics. Designed for engineering teams managing complex data pipelines at scale.",
    tags: ["Databricks", "SQL", "ETL", "Analytics", "Monitoring"],
    image: "/projects/data-lens.png",
    featured: false,
  },
];

export interface Skill {
  name: string;
  icon: string;
}

export const skills = {
  languages: ["TypeScript", "Python", "SQL", "JavaScript", "R", "C"],
  frameworks: ["Next.js", "React", "Node.js", "FastAPI"],
  data: ["PostgreSQL", "Databricks", "Snowflake", "Supabase", "pgvector", "NiFi"],
  ai: ["LLM Orchestration", "Multi-Agent Systems", "MediaPipe", "RAG", "Stochastic Optimization"],
  infra: ["Vercel", "Docker", "CI/CD", "GitLab", "Tableau"],
  tools: ["Tailwind CSS", "shadcn/ui", "TipTap", "Zod", "Excel VBA"],
};

export const experience = [
  {
    role: "AI Engineer & Product Builder",
    company: "Government Technology Agency (GovTech)",
    period: "2024 — Present",
    description:
      "Designing and shipping AI-powered platforms for public sector operations — from multi-agent orchestration to real-time data pipelines on Databricks.",
    highlights: [
      "Built multi-agent AI triage system with configurable pipelines, KB matching, and auto-reply across channels",
      "Designed workspace orchestration platform with AI assistant, Kanban boards, and cross-workspace operations",
      "Developed real-time pose detection engine using MediaPipe for wellness applications",
      "Architected operational dashboards and ETL pipelines on Databricks at scale",
      "Built AI-powered gig marketplace with vector-based skill matching",
    ],
  },
  {
    role: "Data Science Engineer",
    company: "Micron Technology",
    period: "Jun 2022 — 2024",
    description:
      "Technical lead for supply chain optimization and data engineering. Built and maintained 40+ data pipelines, led migration projects to Snowflake, and drove automation saving 100+ man-hours weekly.",
    highlights: [
      "Technical Lead for Supply Chain Optimization — achieved 2-5% additional cost savings for assembly products",
      "Built and maintained 40+ data pipelines and 60+ tables as single sources of truth",
      "Led data migration projects to Snowflake for Planned Order Firming Process",
      "Drove end-to-end firming process automation saving 80+ hours weekly",
      "Led Product Assembly Re-Entrance reporting, contributing to 20+ hours weekly savings",
      "Designed equipment performance-to-model tracking and comparison reports",
    ],
  },
  {
    role: "Research Intern",
    company: "National University of Singapore (C4NGP/C4NGL)",
    period: "May 2021 — Aug 2021",
    description:
      "Researched strategic technologies for PSA and assisted in warehouse simulation projects for Huawei.",
    highlights: [
      "Technology scanning and strategic analysis for PSA operations",
      "Refined entity flow diagrams and coded simulation backbone in XML",
      "Assisted in warehouse simulation project for Huawei",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering, Industrial and Systems Engineering",
  school: "National University of Singapore (NUS)",
  period: "Aug 2018 — May 2022",
  certifications: ["AI4I — Literacy & Foundation in AI"],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
