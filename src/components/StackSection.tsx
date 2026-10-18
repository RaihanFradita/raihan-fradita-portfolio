"use client";

import { Database, Cpu, ShieldCheck, Server, Binary } from "lucide-react";

interface StackCategory {
  title: string;
  icon: typeof Database;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

const stackCategories: StackCategory[] = [
  {
    title: "Vector Search & Retrieval",
    icon: Database,
    description: "Multi-stage retrieval architectures for low-latency context grounding.",
    skills: [
      { name: "pgvector & HNSW", level: "Production", note: "Sub-50ms vector query execution in Postgres" },
      { name: "Hybrid Search (Dense + BM25)", level: "Production", note: "RRF combination for out-of-domain recall" },
      { name: "Cross-Encoder Reranking", level: "Production", note: "BGE / Cohere re-scoring to eliminate noise" },
      { name: "Semantic Chunking", level: "Production", note: "Preserves document hierarchy & Markdown tables" }
    ]
  },
  {
    title: "LLM Orchestration & Serving",
    icon: Cpu,
    description: "Self-hosted inference engines and agentic workflows with strict guardrails.",
    skills: [
      { name: "vLLM & Ollama", level: "Production", note: "Local serving of Qwen 2.5, Llama 3.2 on edge" },
      { name: "Structured Outputs (Pydantic)", level: "Production", note: "Enforcing deterministic JSON schema contracts" },
      { name: "LangChain & LlamaIndex", level: "Production", note: "Composable tool use and retriever abstraction" },
      { name: "Hugging Face Ecosystem", level: "Proficient", note: "Transformers, tokenizers, quantization (GGUF, AWQ)" }
    ]
  },
  {
    title: "Automated Evals & Quality",
    icon: ShieldCheck,
    description: "Continuous testing to measure faithfulness, groundedness, and drift.",
    skills: [
      { name: "DeepEval & Ragas", level: "Production", note: "RAG Triad metrics: faithfulness, recall, precision" },
      { name: "Synthetic Dataset Generation", level: "Proficient", note: "Bootstrap test sets for niche documentation" },
      { name: "Guardrails & Content Safety", level: "Proficient", note: "Regex checks, toxicity filters, PII sanitization" },
      { name: "Telemetry Tracing", level: "Proficient", note: "Tracking token cost, cache hits, and latency distributions" }
    ]
  },
  {
    title: "Systems, Backend & Fullstack",
    icon: Server,
    description: "Robust asynchronous services to bring models to real humans.",
    skills: [
      { name: "FastAPI & Asyncio", level: "Production", note: "High-concurrency streaming endpoints" },
      { name: "Python 3.11+", level: "Primary", note: "Type annotations, poetry, uv, pytest" },
      { name: "Next.js 15 & React 19", level: "Production", note: "Server components, reactive streaming UI" },
      { name: "TypeScript & Tailwind CSS", level: "Production", note: "Clean, type-safe developer interfaces" },
      { name: "Docker & Containerization", level: "Proficient", note: "Reproducible inference microservices" }
    ]
  }
];

export default function StackSection() {
  return (
    <section id="stack" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <Binary size={13} />
              <span>CORE TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Stack & Evaluation Standards
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            I choose tools based on latency, determinism, and maintainability. Here is the operational stack I deploy across projects.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-[#121419] border border-zinc-800/90 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-100">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-850 hover:border-zinc-750 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-xs font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-[11px] text-zinc-400">{skill.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Evaluation Benchmarks Card */}
        <div className="rounded-2xl bg-gradient-to-b from-[#15181f] to-[#101216] border border-zinc-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800 mb-6">
            <div>
              <div className="font-mono text-xs text-amber-400 mb-1">EVALUATION METHODOLOGY</div>
              <h3 className="text-xl font-bold text-zinc-100">The RAG Quality Benchmark</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Tested on every git commit</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <div className="font-mono text-xs text-zinc-400 mb-1">FAITHFULNESS</div>
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">&gt; 0.92</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Measures whether claims in the model answer can be directly inferred from the retrieved chunks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <div className="font-mono text-xs text-zinc-400 mb-1">CONTEXT RELEVANCE</div>
              <div className="text-2xl font-bold font-mono text-amber-400 mb-1">&gt; 0.88</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Audits the ratio of signal to noise in retrieved passages to conserve context window budget.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
              <div className="font-mono text-xs text-zinc-400 mb-1">P95 TIME-TO-FIRST-TOKEN</div>
              <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">&lt; 400ms</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ensures the streaming response begins promptly, preventing user perception of pipeline lag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
