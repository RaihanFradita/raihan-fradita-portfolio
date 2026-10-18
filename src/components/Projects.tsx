"use client";

import { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, FolderGit2, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  status: "Completed" | "In Progress" | "Prototype";
  statusNote: string;
  problem: string;
  implementation: string;
  technologies: string[];
  keyDecisions: string[];
  evaluation: string;
  challenges: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "aira-ai",
    name: "AIRA / NOVA AI Assistant",
    category: "LLM Engineering & Conversational AI",
    status: "Prototype",
    statusNote: "Active Prototype — Exploring Local RAG & Function Calling",
    problem:
      "Off-the-shelf cloud AI assistants require ongoing external API subscriptions, do not natively index personal notes or local documents, and pose privacy concerns for sensitive academic or personal workflows.",
    implementation:
      "Built a prototype conversational assistant that integrates local LLMs (via Ollama) and cloud APIs with retrieval-augmented generation. Implemented a document loader for PDF/Markdown notes, vector similarity search, and structured prompt pipelines with memory retention across conversational turns.",
    technologies: ["Python", "Ollama", "LangChain", "FastAPI", "Next.js", "ChromaDB"],
    keyDecisions: [
      "Benchmarked local 7B-8B quantized models (Llama 3.2, Qwen 2.5) via Ollama to balance response latency against reasoning quality on consumer hardware.",
      "Implemented semantic chunking with overlapping boundaries to avoid losing context in tabular data and structured markdown notes.",
      "Structured API contracts with FastAPI and Pydantic models to ensure predictable responses for frontend state management."
    ],
    evaluation:
      "Tested locally across 50+ document Q&A test queries. Context retrieval hit rate successfully retrieved relevant chunks for 88% of factual queries. Average Time-To-First-Token (TTFT) on local hardware averages ~1.2s on quantized 7B models.",
    challenges: [
      "Hardware memory limitations when running concurrent embeddings and generation locally.",
      "Handling edge-case queries where retrieved context contains contradictory or ambiguous notes.",
      "Future goal: Implementing reranking with cross-encoders to further filter low-relevance chunks."
    ],
    githubUrl: "https://github.com/RaihanFradita"
  },
  {
    id: "graduation-prediction",
    name: "Student Graduation Prediction",
    category: "Academic Machine Learning",
    status: "Completed",
    statusNote: "Academic Project — Completed & Documented",
    problem:
      "University academic advisors often identify at-risk students too late in their academic trajectory, resulting in delayed graduation rates and higher dropout risks that early intervention could prevent.",
    implementation:
      "Developed a machine learning classification pipeline to predict student on-time graduation based on early semester academic records. Performed data preprocessing, exploratory feature analysis, class imbalance mitigation, and cross-validated model evaluation comparing Random Forest with a Logistic Regression baseline.",
    technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    keyDecisions: [
      "Selected Random Forest classifier for its resilience to non-linear feature relationships and interpretability through feature importance rankings.",
      "Optimized evaluation targeting Recall rather than raw Accuracy to prioritize identifying at-risk students (reducing false negatives).",
      "Engineered longitudinal features including credit completion velocity (credits earned vs. attempted) and semester GPA delta."
    ],
    evaluation:
      "Achieved 86% accuracy and 0.84 recall on test validation sets using 5-fold cross-validation. Feature importance analysis identified semester 2-3 credit completion velocity and foundational STEM course performance as primary predictors.",
    challenges: [
      "Dataset was limited to historical academic records without non-academic factors (e.g., socio-economic status, campus engagement).",
      "Handling class imbalance between regular and delayed graduation cohorts through stratified sampling.",
      "Future improvement: Incorporating longitudinal survival analysis techniques to estimate expected semester of graduation."
    ],
    githubUrl: "https://github.com/RaihanFradita"
  },
  {
    id: "school-qr-attendance",
    name: "School QR Attendance System",
    category: "Full-Stack Information System",
    status: "Completed",
    statusNote: "Functional Prototype / Collaborative Web System",
    problem:
      "Traditional manual roll-call attendance consumes 10–15 minutes of lecture time per session, is susceptible to proxy attendance, and requires laborious manual data entry into administrative spreadsheets.",
    implementation:
      "Engineered a responsive web application facilitating rapid classroom attendance via dynamic QR scans. Developed role-based views for educators and administrators, automated class recap statistics, and integrated REST endpoints for student records management.",
    technologies: ["React", "TypeScript", "Node.js", "REST API", "Tailwind CSS"],
    keyDecisions: [
      "Designed time-sensitive session tokens for QR codes to deter students from sharing static screenshots with absent peers.",
      "Built optimistic UI state updates on mobile scanning views to provide instant feedback even on spotty campus Wi-Fi networks.",
      "Structured role-based authorization ensuring educators only access and modify their assigned course sections."
    ],
    evaluation:
      "Successfully demonstrated in test classroom sessions, reducing attendance recording time from ~10 minutes to under 2 minutes for a class of 30 students with zero duplicate check-in submissions.",
    challenges: [
      "Ensuring smooth camera access and QR scanner performance across diverse mobile browsers and camera hardware.",
      "Network resilience when multiple students attempt to verify attendance simultaneously at the beginning of class.",
      "Future improvement: Adding offline verification queueing via service workers."
    ],
    githubUrl: "https://github.com/RaihanFradita"
  }
];

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState<Record<string, "summary" | "engineering">>({
    "aira-ai": "summary",
    "graduation-prediction": "summary",
    "school-qr-attendance": "summary"
  });

  const toggleTab = (id: string, tab: "summary" | "engineering") => {
    setSelectedTab((prev) => ({ ...prev, [id]: tab }));
  };

  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
      case "In Progress":
        return "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-800";
      case "Prototype":
        return "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <FolderGit2 size={13} />
              <span>FEATURED WORK &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineering Projects
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Honest evaluations of what was built, key engineering decisions, and current limitations. Labeled by verified development state.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projectsData.map((project, index) => {
            const currentTab = selectedTab[project.id] || "summary";
            return (
              <article
                key={project.id}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs hover:border-[var(--text-muted)] transition-colors"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[var(--border-subtle)] mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                    <span className="text-[var(--border-color)]">/</span>
                    <span className="font-mono text-xs text-[var(--text-secondary)] font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium ${getStatusBadge(
                        project.status
                      )}`}
                    >
                      {project.status === "Completed" && <CheckCircle size={11} />}
                      {project.status === "Prototype" && <Clock size={11} />}
                      {project.status === "In Progress" && <Clock size={11} />}
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {project.name}
                    </h3>

                    {/* View Switcher Tabs */}
                    <div className="inline-flex rounded-md border border-[var(--border-color)] bg-[var(--bg-muted)] p-0.5 text-xs font-mono">
                      <button
                        onClick={() => toggleTab(project.id, "summary")}
                        className={`px-3 py-1 rounded transition-colors ${
                          currentTab === "summary"
                            ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => toggleTab(project.id, "engineering")}
                        className={`px-3 py-1 rounded transition-colors ${
                          currentTab === "engineering"
                            ? "bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold shadow-xs"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        Engineering Details
                      </button>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[var(--text-muted)] mb-4">
                    {project.statusNote}
                  </p>
                </div>

                {/* Tab Content */}
                {currentTab === "summary" ? (
                  <div className="space-y-6">
                    {/* Problem & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <div className="p-4 rounded-lg bg-[var(--bg-muted)]/70 border border-[var(--border-subtle)]">
                        <div className="font-mono text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                          Problem Statement
                        </div>
                        <p className="leading-relaxed">{project.problem}</p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--bg-muted)]/70 border border-[var(--border-subtle)]">
                        <div className="font-mono text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                          Implemented Solution
                        </div>
                        <p className="leading-relaxed">{project.implementation}</p>
                      </div>
                    </div>

                    {/* Evaluation Results */}
                    <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
                      <div className="font-mono text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <CheckCircle size={13} />
                        <span>Evaluation &amp; Observations</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {project.evaluation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Engineering Decisions */}
                    <div>
                      <div className="font-mono text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Engineering Decisions
                      </div>
                      <div className="space-y-2">
                        {project.keyDecisions.map((decision, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-muted)]/50 border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed"
                          >
                            <span className="font-mono text-[var(--accent-blue)] font-bold mt-0.5">
                              0{idx + 1}.
                            </span>
                            <span>{decision}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Limitations & Challenges */}
                    <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/60">
                      <div className="font-mono text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertCircle size={13} />
                        <span>Challenges, Trade-offs &amp; Limitations</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                        {project.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-600 dark:text-amber-400 mt-0.5">▪</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Card Footer: Tech Stack & Actions */}
                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      <Github size={13} />
                      <span>Repository</span>
                      <ArrowUpRight size={12} />
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
