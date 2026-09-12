import type { Metadata } from "next";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on building AI systems, engineering, and product.",
};

const posts = [
  {
    slug: "building-multi-agent-pipelines",
    title: "Building Multi-Agent Pipelines That Actually Work",
    date: "2026-09-10",
    tags: ["AI", "Architecture"],
    excerpt:
      "Lessons from building production multi-agent systems — threshold-first decisions, prompt engineering, and why hybrid approaches beat pure LLM routing.",
    readingTime: "8 min",
  },
  {
    slug: "from-monolith-to-agents",
    title: "From Monolith to Agents: Refactoring a Triage System",
    date: "2026-08-25",
    tags: ["Refactoring", "AI"],
    excerpt:
      "How I broke a single-LLM-call triage system into a 5-stage pipeline with configurable sub-agents, and what I'd do differently.",
    readingTime: "6 min",
  },
  {
    slug: "real-time-pipelines-databricks",
    title: "Real-time Data Pipelines on Databricks at Scale",
    date: "2026-07-15",
    tags: ["Data", "Databricks"],
    excerpt:
      "Patterns for building reliable ETL pipelines that process millions of records with proper error handling, SLA monitoring, and automated recovery.",
    readingTime: "10 min",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <BlurFade delay={0.1}>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Writing about AI engineering, system design, and shipping products.
        </p>
      </BlurFade>

      <div className="mt-12 space-y-8">
        {posts.map((post, i) => (
          <BlurFade key={post.slug} delay={0.15 + i * 0.08}>
            <article className="group relative rounded-xl border border-border/50 p-6 transition-all hover:border-border hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-border">|</span>
                <span>{post.readingTime} read</span>
              </div>

              <h2 className="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="absolute inset-0 rounded-xl" />
            </article>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.5}>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          More posts coming soon.
        </div>
      </BlurFade>
    </div>
  );
}
