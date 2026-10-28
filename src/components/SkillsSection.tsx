import { Cpu, Database, Terminal } from "lucide-react";

const stacks = [
  {
    title: "AI reliability",
    icon: Cpu,
    description: "Core tools and validation approach represented in Waguri Framework.",
    technologies: ["Python", "Pydantic", "pytest", "Evidence checks"]
  },
  {
    title: "LLM applications",
    icon: Terminal,
    description: "LLM integration options used or configured across the current projects.",
    technologies: ["LLM adapters", "Ollama", "Gemma 3 4B", "Anthropic"]
  },
  {
    title: "Full-stack applications",
    icon: Database,
    description: "Application technologies and data workflows represented in AIRA Business.",
    technologies: ["React", "Elysia.js", "PostgreSQL", "Excel / CSV"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[var(--border-color)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-[var(--accent-blue)]">
            <Cpu size={13} aria-hidden="true" />
            <span>TOOLS IN CURRENT PROJECTS</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Current Project Stack
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            Technologies reflected in the code and configuration of my featured projects. Optional AI providers are labeled as integrations, not as the only way either application runs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stacks.map((stack) => {
            const Icon = stack.icon;
            return (
              <article
                key={stack.title}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-xs"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-muted)] p-1.5 text-[var(--accent-blue)]">
                    <Icon size={15} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{stack.title}</h3>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {stack.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {stack.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-[var(--border-subtle)] bg-[var(--bg-muted)] px-2 py-1 font-mono text-[10px] text-[var(--text-secondary)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
