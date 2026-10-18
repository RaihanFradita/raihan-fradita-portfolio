import { Cpu, Terminal, Database, GitBranch, Layout } from "lucide-react";

interface SkillItem {
  name: string;
  level: "Practical Experience" | "Foundational Knowledge";
  detail: string;
}

interface SkillCategory {
  title: string;
  icon: typeof Cpu;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI and Machine Learning",
    icon: Cpu,
    description: "Core statistical modeling, data preparation, and algorithm evaluation.",
    skills: [
      { name: "Python", level: "Practical Experience", detail: "Primary language for ML modeling, data pipelines, and scripting." },
      { name: "scikit-learn", level: "Practical Experience", detail: "Supervised classification, Random Forest, Logistic Regression." },
      { name: "pandas & NumPy", level: "Practical Experience", detail: "Data cleaning, feature engineering, and matrix operations." },
      { name: "Model Evaluation", level: "Practical Experience", detail: "Cross-validation, ROC-AUC, precision, recall, confusion matrix." }
    ]
  },
  {
    title: "LLM Engineering",
    icon: Terminal,
    description: "Frameworks and patterns for building with modern language models.",
    skills: [
      { name: "Ollama", level: "Practical Experience", detail: "Local model serving (Llama 3.2, Qwen 2.5) on consumer GPUs." },
      { name: "RAG & Vector Embeddings", level: "Practical Experience", detail: "Semantic chunking, similarity retrieval, and context grounding." },
      { name: "LLM Integration", level: "Practical Experience", detail: "LangChain orchestration, prompt templates, and streaming." },
      { name: "Tool Calling & AI Agents", level: "Foundational Knowledge", detail: "Function execution, schema validation, and multi-step reasoning." }
    ]
  },
  {
    title: "Backend and Data",
    icon: Database,
    description: "Services and databases supporting reliable application workflows.",
    skills: [
      { name: "REST APIs", level: "Practical Experience", detail: "Designing clean endpoints, validation, and status handling." },
      { name: "FastAPI", level: "Practical Experience", detail: "Async endpoints, Pydantic type safety, and OpenAPI documentation." },
      { name: "PostgreSQL & SQL", level: "Practical Experience", detail: "Relational schema design, queries, and pgvector extension." },
      { name: "Authentication", level: "Foundational Knowledge", detail: "Session tokens, JWT, and role-based access control." }
    ]
  },
  {
    title: "Software Engineering",
    icon: GitBranch,
    description: "Development standards for maintainable and reproducible code.",
    skills: [
      { name: "Git & GitHub", level: "Practical Experience", detail: "Version control, branching, PR review, and collaboration." },
      { name: "Testing & Debugging", level: "Practical Experience", detail: "Unit testing, reproducible test cases, and error tracing." },
      { name: "Deployment", level: "Practical Experience", detail: "Vercel, containerization with Docker, and cloud hosting." },
      { name: "Technical Documentation", level: "Practical Experience", detail: "Writing clear READMEs, architecture summaries, and API docs." }
    ]
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "Interface development to make complex backend systems accessible.",
    skills: [
      { name: "React", level: "Practical Experience", detail: "Component lifecycles, state management, and hooks." },
      { name: "TypeScript & JavaScript", level: "Practical Experience", detail: "Type-safe interfaces, modern ES6+ standards." },
      { name: "Responsive UI Development", level: "Practical Experience", detail: "Tailwind CSS, mobile-first layouts, and accessible semantics." }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <Cpu size={13} />
              <span>TECHNOLOGIES &amp; PROFICIENCIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Skills and Technologies
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Technologies I have actually studied or deployed in projects. Differentiated honestly by verified application experience.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono mb-8 p-3 rounded-lg bg-[var(--bg-muted)]/60 border border-[var(--border-subtle)]">
          <span className="text-[var(--text-secondary)] font-semibold">LEVEL KEY:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-[var(--text-secondary)]">Practical Experience (Used in Projects)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="text-[var(--text-muted)]">Foundational Knowledge (Studied / In Progress)</span>
          </div>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-md bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--accent-blue)]">
                      <Icon size={15} />
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-[var(--bg-muted)]/50 border border-[var(--border-subtle)] text-xs"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${
                              skill.level === "Practical Experience"
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"
                            }`}
                          >
                            {skill.level === "Practical Experience" ? "Applied" : "Foundational"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
