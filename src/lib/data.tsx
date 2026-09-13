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
  siteName: "Kerk Builds",
  initials: "KZS",
  url: "https://kerkbuilds.com",
  location: "Singapore",
  description:
    "Data & AI Engineer building production-ready internal products, from deliberate data foundations to multi-agent workflows.",
  summary:
    "My work starts with data engineering. At [GovTech](https://www.tech.gov.sg), my core scope spans **five internal projects** covering dashboards, data pipelines, optimization, and operational monitoring. I also build AI products on top of that foundation. Two internal applications are in production, with more progressing through UAT. Earlier at [Micron Technology](https://www.micron.com), I built **40+ pipelines** and automation that saved **100+ hours weekly**. I design data models, reliable state, traceable decisions, and operating workflows early so an application can move beyond a quick demonstration.",
  avatarUrl: "/kerk-bamboo-portrait.jpg",

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

  skillGroups: [
    {
      label: "AI systems",
      description:
        "Design agent workflows that can be tested, traced, and operated by internal teams.",
      applied: ["Confidence-based routing", "Grounded retrieval", "Human review paths"],
      skills: ["LLM Orchestration", "Multi-Agent Systems", "RAG", "AI Agents"],
    },
    {
      label: "Data platforms",
      description:
        "Build and maintain dependable pipelines, trusted models, and monitoring across data products.",
      applied: ["Pipeline maintenance", "Skip and volume monitoring", "Data optimization"],
      skills: ["Databricks", "Snowflake", "PostgreSQL", "NiFi", "SQL"],
    },
    {
      label: "Product engineering",
      description:
        "Turn internal workflows into usable products, from interaction design to deployment.",
      applied: ["Full-stack delivery", "Permission-aware workflows", "Production deployment"],
      skills: ["TypeScript", "React", "Next.js", "Node.js", "Docker"],
    },
    {
      label: "Analytics",
      description:
        "Create dashboards and analysis that help teams detect issues and understand their causes.",
      applied: ["Dashboard development", "Operational analysis", "Optimization and simulation"],
      skills: ["Python", "Tableau", "R", "Optimization", "Simulation"],
    },
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
      accent: "#ef3340",
      href: "https://www.tech.gov.sg",
      badges: [],
      location: "Singapore",
      title: "Data & AI Engineer",
      logoUrl: "/logos/govtech.png",
      start: "2024",
      end: "Present",
      description:
        "My core scope covers data engineering across five internal projects, including dashboard development, data pipeline delivery and maintenance, optimization, and operational monitoring. I also design and ship internal AI products on top of this foundation.",
      highlightGroups: [
        {
          label: "Core data engineering",
          items: [
            "Worked across five internal projects, developing operational dashboards and building, maintaining, and improving data pipelines used by internal teams.",
            "Developed optimization and monitoring solutions, including pipeline skip detection and volume analysis to surface skipped runs and unexpected processing patterns.",
          ],
        },
        {
          label: "AI product engineering",
          items: [
            "Built a channel-agnostic, multi-agent triage system with configurable pipelines, knowledge-base matching, confidence thresholds, automated replies, human escalation, and auditable state.",
            "Designed an intelligent workspace platform combining AI-assisted ticket proposals, Kanban workflows, configurable agent profiles, permissions, and cross-workspace operations.",
            "Applied data engineering principles to AI production readiness through intentional schemas, dependable persistence, traceable agent decisions, and maintainable integration boundaries.",
            "Developed a real-time pose-detection engine with MediaPipe for an internal workflow.",
          ],
        },
      ],
      metrics: [
        { value: "5", label: "Core data projects" },
        { value: "2 live", label: "Internal AI apps" },
        { value: "UAT", label: "More AI apps in validation" },
        { value: "End to end", label: "Data to product" },
      ],
      activities: [
        "Presented an internal Databricks brown-bag session on Genie agents and Genie Code, sharing how they can accelerate the path from data to insight.",
        "Participated actively in internal speaking forums and hackathons to share applied AI patterns and explore new product ideas.",
      ],
      activityImage: "",
    },
    {
      company: "Micron Technology",
      accent: "#2563eb",
      href: "https://www.micron.com",
      badges: [],
      location: "Singapore",
      title: "Data Science Engineer",
      logoUrl: "/logos/micron.png",
      start: "Jun 2022",
      end: "2025",
      description:
        "I led data engineering and optimization work for tactical semiconductor planning, turning operational constraints into trusted data products and automated workflows.",
      highlightGroups: [
        {
          label: "Optimization and planning",
          items: [
            "Led continuous improvement of the tactical-planning optimizer, delivering an additional 2-5% cost saving for assembly products while preserving order constraints.",
            "Directed equipment performance-to-model tracking and coordinated data engineers building reliable sources for model-accuracy analysis.",
          ],
        },
        {
          label: "Data platforms and automation",
          items: [
            "Built and maintained 40+ data pipelines and automation flows plus 60+ trusted tables supporting optimization, planning reports, and material-health analysis.",
            "Led the Planned Order Firming migration to Snowflake and automated the end-to-end process, saving 80+ hours weekly.",
            "Scaled automated re-entrance reporting across product groups, contributing a further 20+ hours of weekly time savings.",
          ],
        },
      ],
      metrics: [
        { value: "40+", label: "Data pipelines" },
        { value: "60+", label: "Trusted tables" },
        { value: "100+ hrs", label: "Saved weekly" },
        { value: "2-5%", label: "Additional savings" },
      ],
      activities: [],
      activityImage: "",
    },
    {
      company: "National University of Singapore",
      accent: "#f58220",
      href: "https://nus.edu.sg",
      badges: [],
      location: "Singapore",
      title: "Research Intern (C4NGP/C4NGL)",
      logoUrl: "/logos/nus.png",
      start: "May 2021",
      end: "Aug 2021",
      description:
        "Supported applied operations research for industry partners through technology scanning, process modelling, and simulation development.",
      highlightGroups: [
        {
          label: "Research and simulation",
          items: [
            "Researched PSA’s operating context and evaluated technologies with potential strategic value.",
            "Supported a warehouse-simulation project for Huawei by refining entity-flow diagrams and defining path-mover behaviour on a grid layout.",
            "Implemented the XML backbone that translated warehouse process flows into the simulation model.",
          ],
        },
      ],
      metrics: [
        { value: "PSA", label: "Technology scan" },
        { value: "Huawei", label: "Simulation project" },
        { value: "XML", label: "Model backbone" },
      ],
      activities: [],
      activityImage: "",
    },
  ],

  education: [
    {
      school: "National University of Singapore",
      href: "https://nus.edu.sg",
      degree: "Bachelor of Engineering, Industrial and Systems Engineering",
      description:
        "Coursework and applied projects across operations research, stochastic optimization, simulation, machine learning, quality engineering, and product delivery.",
      focusAreas: [
        "Operations research",
        "Stochastic optimization",
        "Simulation",
        "Machine learning",
        "Quality engineering",
        "Product delivery",
      ],
      logoUrl: "/logos/nus.png",
      start: "2018",
      end: "2022",
    },
  ],

  certifications: [
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      issued: "Nov 2025",
      expires: "Nov 2027",
      credentialId: "166618858",
      accent: "#ff3621",
      imageUrl: "/certifications/databricks-data-engineer-associate.png",
      description:
        "Validated practical knowledge of data engineering workflows and the Databricks Lakehouse platform.",
    },
    {
      name: "AI for Cybersecurity Practitioners",
      issuer: "DART",
      issued: "Aug 2026",
      expires: "",
      credentialId: "",
      accent: "#8b5cf6",
      imageUrl: "/certifications/dart-ai-cybersecurity.png",
      description:
        "Completed DART’s three-day AI for Cybersecurity Practitioners programme from 26 to 28 August 2026; certificate earned 31 August 2026.",
    },
    {
      name: "AI for Industry®: Literacy in AI",
      issuer: "AI Singapore",
      issued: "May 2021",
      expires: "",
      credentialId: "32518583",
      accent: "#0ea5e9",
      imageUrl: "/certifications/ai4i-literacy-in-ai.png",
      description:
        "AI Singapore’s AI for Industry programme covering foundational artificial intelligence concepts and practical applications.",
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
      dates: "2024 to Present",
      active: true,
      release: "Production · Internal",
      description:
        "A channel-agnostic triage system that classifies incoming requests, matches them against a knowledge base, and auto-replies or escalates. Configurable multi-agent pipeline with threshold-based routing and LLM-powered decision making.",
      challenge:
        "High-volume requests arrive with inconsistent context, making manual sorting slow and reliable responses difficult to scale.",
      approach:
        "A configurable agent pipeline classifies intent, retrieves grounded knowledge, scores confidence, and chooses between reply and human escalation. Versioned knowledge, durable state, and explicit audit records keep the workflow operable beyond the demo.",
      outcome:
        "A production-deployed internal application that turns unstructured messages into traceable decisions while keeping people in the loop for ambiguous cases.",
      productionFocus:
        "Intentional schemas for conversations, knowledge versions, confidence decisions, and human overrides make every automated action explainable and recoverable.",
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
      dates: "2024 to Present",
      active: true,
      release: "Production · Internal",
      description:
        "An intelligent workspace assistant combining Kanban board management with AI-powered ticket proposals, cross-workspace operations, and configurable agent profiles.",
      challenge:
        "Project context is fragmented across boards, tickets, and teams, so routine coordination becomes a constant tax on delivery.",
      approach:
        "A shared workspace model lets an AI assistant propose structured work, operate across boards, and adapt through configurable agent profiles. The underlying ticket, workspace, permission, and event models were designed as product infrastructure, not incidental storage.",
      outcome:
        "A production-deployed internal workspace where planning and AI-assisted execution stay connected instead of drifting into separate tools.",
      productionFocus:
        "A durable relational model, permission boundaries, and traceable agent actions let the system grow across workspaces without compromising operational control.",
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
      release: "UAT · Internal",
      description:
        "AI-powered gig platform with skill-based matching using vector embeddings, verified identity integration, and intelligent job recommendations.",
      challenge:
        "Keyword search misses adjacent skills and makes it hard for credible talent to surface when job descriptions are imperfect.",
      approach:
        "Semantic matching pairs skill embeddings with verified profiles, then turns similarity signals into explainable recommendations.",
      outcome:
        "Discovery becomes more relevant than literal keyword matching while identity checks help make each recommendation more trustworthy.",
      productionFocus:
        "Relational identity and job data remain the source of truth while embeddings add semantic retrieval, keeping AI recommendations grounded in governed records.",
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
      dates: "2022 to Present",
      active: true,
      release: "UAT · Internal",
      description:
        "Real-time operational dashboards with automated anomaly detection, cross-functional audit trails, and drill-down analytics for engineering teams.",
      challenge:
        "Operational signals live across disconnected sources, delaying anomaly detection and making root-cause analysis difficult to audit.",
      approach:
        "Streaming pipelines standardise events into trusted models, then expose anomalies, drill-downs, and audit trails in one analytical layer.",
      outcome:
        "Engineering teams can move from a top-level signal to supporting detail without losing the lineage behind each decision.",
      productionFocus:
        "Freshness checks, lineage, reproducible transformations, and auditable models turn a dashboard into a dependable operating product.",
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
      release: "Personal build",
      description:
        "An interactive desktop companion that lives on your screen, reacts to mouse movements, has idle animations, and brings a bit of joy to long coding sessions. Built as a fun weekend project to explore desktop rendering and sprite animation.",
      challenge:
        "Desktop utilities are useful but rarely delightful; this experiment asked how a tiny ambient character could feel alive without becoming distracting.",
      approach:
        "A lightweight Electron shell combines pointer-aware behaviour, an animation state machine, and canvas-rendered sprite sequences.",
      outcome:
        "A playful always-on-top companion and a compact exploration of expressive interaction within tight performance constraints.",
      productionFocus:
        "A small state machine keeps behaviour predictable while separating animation, pointer input, and rendering concerns.",
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
      dates: "2023 to 2024",
      active: false,
      release: "Personal build",
      description:
        "A Japanese language learning app built for personal study. Features hiragana/katakana drills, vocabulary flashcards with spaced repetition, and JLPT N5-N4 grammar exercises. Built because existing apps were either too gamified or too expensive.",
      challenge:
        "Many language apps optimise for streaks or subscriptions instead of focused repetition that matches a learner's actual weak spots.",
      approach:
        "A local-first mobile experience combines kana drills, vocabulary cards, grammar practice, and a spaced-repetition schedule.",
      outcome:
        "A calm, purpose-built study loop that keeps the learner focused on recall and progression rather than game mechanics.",
      productionFocus:
        "A local-first SQLite model preserves learner progress and keeps review scheduling deterministic, portable, and private.",
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
