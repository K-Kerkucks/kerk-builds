export const siteConfig = {
  name: "Kerk Zhi Sheng",
  title: "Software Engineer & Product Builder",
  description:
    "Building intelligent systems that automate operations, streamline workflows, and turn complex data into actionable insight.",
  url: "https://kerkzhisheng.com",
  links: {
    github: "https://github.com/K-Kerkucks",
    linkedin: "https://linkedin.com/in/kerkzhisheng",
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
    slug: "posture-kit",
    title: "PostureKit",
    tagline: "AI Posture & Wellness Engine",
    description:
      "Real-time pose detection engine using MediaPipe for fitness, physiotherapy, and workplace ergonomics. Features posture scoring, guided onboarding, and an always-on monitoring widget with configurable sensitivity.",
    tags: ["Next.js", "MediaPipe", "Computer Vision", "WebGL", "Health Tech"],
    image: "/projects/posture-kit.png",
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
  languages: ["TypeScript", "Python", "SQL", "JavaScript"],
  frameworks: ["Next.js", "React", "Node.js", "FastAPI"],
  data: ["PostgreSQL", "Databricks", "Supabase", "pgvector"],
  ai: ["LLM Orchestration", "Multi-Agent Systems", "MediaPipe", "RAG"],
  infra: ["Vercel", "Docker", "CI/CD", "GitLab"],
  tools: ["Tailwind CSS", "shadcn/ui", "TipTap", "Zod"],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Government Technology Agency (GovTech)",
    period: "Present",
    description:
      "Building intelligent automation platforms for public sector operations. Designing multi-agent AI systems, data pipelines, and full-stack applications that serve government agencies.",
    highlights: [
      "Built AI triage system processing inbound requests across channels",
      "Designed workspace orchestration platform with configurable AI agents",
      "Developed real-time data pipelines on Databricks at scale",
    ],
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
