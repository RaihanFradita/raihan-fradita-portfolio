"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Cpu } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  role: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  architectureDetails: string[];
  links: { label: string; url: string; icon?: typeof Github }[];
}

const projects: Project[] = [
  {
    id: "rag-engine",
    number: "01",
    title: "Contextual RAG & Knowledge Retrieval System",
    tagline: "Hybrid dense-sparse retrieval pipeline with automated hallucination evaluation",
    category: "LLM ENGINEERING / RAG",
    status: "ACTIVE EXPERIMENT",
    role: "System Architecture & Retrieval Pipeline",
    stack: ["Python", "FastAPI", "pgvector", "LangChain", "DeepEval", "Docker"],
    metrics: [
      { label: "P95 Latency", value: "380ms" },
      { label: "Retrieval Hit Rate", value: "94.2%" },
      { label: "Faithfulness Score", value: "0.93 / 1.0" }
    ],
    overview:
      "Engineered an enterprise-grade retrieval pipeline to ground LLMs on proprietary domain documentation. Replaced naive vector search with hybrid dense embeddings + BM25 keyword matching and cross-encoder re-ranking, cutting hallucination rates drastically.",
    architectureDetails: [
      "Semantic chunking with dynamic overlap to keep Markdown tables and headers intact",
      "pgvector similarity index with HNSW for sub-50ms vector query execution",
      "Cross-encoder re-ranking step to eliminate irrelevant noise before passing to the prompt",
      "Continuous automated regression testing using DeepEval for groundedness and context recall"
    ],
    links: [
      { label: "View Architecture", url: "#architecture" },
      { label: "GitHub Repository", url: "https://github.com/RaihanFradita", icon: Github }
    ]
  },
  {
    id: "school-attendance",
    number: "02",
    title: "Real-time School QR Attendance Workflow",
    tagline: "High-throughput classroom verification system built for speed and zero duplicate scans",
    category: "FULLSTACK APPLICATION",
    status: "IN PRODUCTION / ACTIVE",
    role: "Frontend & API Integration",
    stack: ["React", "TypeScript", "Node.js", "REST API", "Tailwind CSS"],
    metrics: [
      { label: "Scan to Verify", value: "< 180ms" },
      { label: "Daily Check-ins", value: "850+ users" },
      { label: "Duplicate Error Rate", value: "0.0%" }
    ],
    overview:
      "A daily attendance workflow designed around single-scan QR validation, role-based views for educators, and immediate class recap analytics. Replaced cumbersome manual roll calls with an instant, abuse-resistant web scanner.",
    architectureDetails: [
      "Time-sensitive rotating QR tokens with client-side decryption to avoid screenshot abuse",
      "Optimistic UI updates for instant attendance feedback on low-bandwidth mobile connections",
      "Role-aware dashboard providing educators with aggregate attendance trends and exportable reports",
      "Strict input validation and rate-limiting on check-in endpoints"
    ],
    links: [
      { label: "GitHub Code", url: "https://github.com/RaihanFradita", icon: Github }
    ]
  },
  {
    id: "predictive-ml",
    number: "03",
    title: "Predictive ML: Student Retention & Graduation",
    tagline: "Supervised classification model with SHAP explainability for academic intervention",
    category: "APPLIED MACHINE LEARNING",
    status: "ACADEMIC RESEARCH",
    role: "ML Pipeline & Statistical Evaluation",
    stack: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas", "Matplotlib"],
    metrics: [
      { label: "ROC-AUC", value: "0.91" },
      { label: "F1-Score", value: "0.88" },
      { label: "Key Predictor", value: "Early Credit Ratio" }
    ],
    overview:
      "Explored supervised machine learning algorithms to predict student graduation timelines. Beyond raw accuracy, emphasized model explainability using SHAP values so academic advisors understand the driving factors behind each prediction without demographic bias.",
    architectureDetails: [
      "Extensive feature engineering: credit completion velocity, course withdrawal ratios, and term GPA trajectories",
      "Comparative benchmarking between Random Forest, Gradient Boosting, and Logistic Regression baseline",
      "SHAP summary plots to audit model fairness and isolate non-demographic risk factors",
      "Early warning threshold tuning targeting high recall to minimize false negatives"
    ],
    links: [
      { label: "Research Notes", url: "https://github.com/RaihanFradita", icon: Github }
    ]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "architecture">>({
    "rag-engine": "overview",
    "school-attendance": "overview",
    "predictive-ml": "overview"
  });

  const toggleTab = (projectId: string, tab: "overview" | "architecture") => {
    setActiveTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <Cpu size={13} />
              <span>SELECTED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Real implementations solving genuine problems. I prioritize transparent engineering trade-offs, measurable metrics, and verifiable code over hype.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {projects.map((project) => {
            const currentTab = activeTab[project.id] || "overview";
            return (
              <article
                key={project.id}
                className="rounded-2xl bg-[#121419] border border-zinc-800/90 hover:border-zinc-700/80 transition-all p-6 sm:p-8 relative overflow-hidden shadow-lg"
              >
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-amber-400">
                      {project.number}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <span className="font-mono text-xs text-zinc-400 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Details */}
                  <div className="lg:col-span-8 flex flex-col">
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-amber-300/80 mb-5">
                      {project.tagline}
                    </p>

                    {/* View Switcher Tabs */}
                    <div className="inline-flex p-1 rounded-lg bg-zinc-900/90 border border-zinc-800 w-fit mb-5 text-xs font-mono">
                      <button
                        onClick={() => toggleTab(project.id, "overview")}
                        className={`px-3 py-1 rounded-md transition-all ${
                          currentTab === "overview"
                            ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => toggleTab(project.id, "architecture")}
                        className={`px-3 py-1 rounded-md transition-all ${
                          currentTab === "architecture"
                            ? "bg-zinc-800 text-zinc-100 font-semibold shadow-sm"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        Architecture & Decisions
                      </button>
                    </div>

                    {/* Dynamic Tab Body */}
                    {currentTab === "overview" ? (
                      <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        {project.overview}
                      </p>
                    ) : (
                      <div className="space-y-2 mb-6">
                        {project.architectureDetails.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-850"
                          >
                            <span className="font-mono text-amber-400 mt-0.5">❯</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Role & Tech Stack */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-850">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono text-zinc-500">ROLE:</span>
                        <span className="text-zinc-300 font-medium">{project.role}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-zinc-400 bg-zinc-900/80 border border-zinc-800/80 px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Technical Metrics & Links */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    {/* Metrics Card */}
                    <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-4">
                      <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">
                        VERIFIED BENCHMARKS
                      </div>
                      <div className="space-y-3">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex items-center justify-between border-b border-zinc-800/60 pb-2 last:border-b-0 last:pb-0"
                          >
                            <span className="text-xs text-zinc-400">{metric.label}</span>
                            <span className="font-mono text-sm font-bold text-amber-400">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col gap-2">
                      {project.links.map((link) => {
                        const Icon = link.icon || ArrowUpRight;
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white border border-zinc-800 transition-all"
                          >
                            <span>{link.label}</span>
                            <Icon size={14} className="text-amber-400" />
                          </a>
                        );
                      })}
                    </div>
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
