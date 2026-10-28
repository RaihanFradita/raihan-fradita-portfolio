import Image from "next/image";
import { ArrowUpRight, Check, Clock3, Github } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "waguri",
    name: "Waguri Framework",
    tagline: "Building More Reliable AI Systems.",
    description:
      "An experimental Python framework that makes LLM responses easier to inspect by checking generated text against supplied evidence and returning structured review results.",
    status: "Under Development",
    highlights: [
      "Current checks use exact, case- and whitespace-normalized text matching; results identify supported or uncertain evidence.",
      "Responses are flagged for review. Semantic verification and real local or cloud provider adapters are not yet implemented.",
      "Pytest coverage includes claim splitting, evidence checks, and client response handling."
    ],
    technologies: ["Python", "LLM", "AI Reliability", "Evidence Validation", "pytest"],
    githubUrl: "https://github.com/RaihanFradita/waguri-framework"
  },
  {
    id: "aira-business",
    name: "AIRA Business",
    tagline: "AI-Powered Financial Intelligence Platform.",
    description:
      "A financial intelligence app for exploring business performance through dashboards, interactive analytics, Excel/CSV imports, and AI-assisted financial analysis. It is designed for local use, with Ollama and Gemma 3 4B available as an optional provider alongside Anthropic and built-in analysis.",
    status: "Built — Under Audit and Refinement",
    highlights: [
      "Dashboard and analytics views for business and financial data.",
      "Import financial data from Excel and CSV files.",
      "AI assistant for financial analysis, with configurable local and external provider options."
    ],
    technologies: ["React", "Elysia.js", "PostgreSQL", "Ollama", "Gemma 3 4B", "LLM Integration"],
    githubUrl: "https://github.com/RaihanFradita/AIRA-AI-Business"
  }
];

function ProjectPreview({ projectId }: { projectId: Project["id"] }) {
  if (projectId === "aira-business") {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]">
        <Image
          src="/projects/aira-financial-analytics.png"
          alt="AIRA Business financial analytics dashboard"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <figure className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)] p-4 sm:p-5">
      <figcaption className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        Current response path
      </figcaption>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {["Question + context", "Model adapter", "Exact text check", "Needs review"].map((step, index) => (
          <div
            key={step}
            className="flex min-h-16 flex-col justify-between rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-2.5"
          >
            <span className="font-mono text-[10px] text-[var(--accent-blue)]">0{index + 1}</span>
            <span className="text-xs font-medium leading-snug text-[var(--text-primary)]">{step}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border-color)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-[var(--accent-blue)]">
            <span>FEATURED WORK</span>
            <span aria-hidden="true">/</span>
            <span>INDEPENDENT PROJECTS</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Engineering Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
            Practical work in AI reliability and financial intelligence, with current capabilities and project maturity stated clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="flex flex-col rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-xs transition-colors duration-200 hover:border-[var(--text-muted)] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[var(--text-muted)]">PROJECT 0{index + 1}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-mono text-[10px] font-medium text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
                  <Clock3 size={11} aria-hidden="true" />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent-blue)]">{project.tagline}</p>
              <p className="mt-3 min-h-[5rem] text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>

              <div className="my-5">
                <ProjectPreview projectId={project.id} />
              </div>

              <ul className="mb-5 space-y-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent-blue)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-[var(--border-subtle)] pt-4">
                <div className="mb-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] px-3.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
                >
                  <Github size={14} aria-hidden="true" />
                  View on GitHub
                  <ArrowUpRight size={13} aria-hidden="true" className="text-[var(--text-muted)]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
