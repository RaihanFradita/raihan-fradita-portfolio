"use client";

import { useState } from "react";
import {
  Database,
  Filter,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  Code2,
  Sliders,
  Gauge
} from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  category: string;
  icon: typeof Database;
  latency: string;
  tokenCost: string;
  summary: string;
  description: string;
  parameters: { name: string; value: string; desc: string }[];
  codeSnippet: string;
  tradeoff: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "chunking",
    name: "1. Semantic Ingestion",
    category: "PRE-PROCESSING",
    icon: Layers,
    latency: "~45ms",
    tokenCost: "0 tokens",
    summary: "Recursive markdown & semantic chunking with metadata attachment.",
    description:
      "Raw documents are normalized, cleaned, and split across semantic boundaries rather than fixed token limits. Headers, timestamps, and origin IDs are injected into each chunk to preserve contextual hierarchy.",
    parameters: [
      { name: "Chunk Size", value: "512 tokens", desc: "Optimal context window density" },
      { name: "Chunk Overlap", value: "64 tokens", desc: "Prevents edge token information loss" },
      { name: "Metadata Fields", value: "doc_id, section, timestamp", desc: "For pre-filtering" }
    ],
    codeSnippet: `from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=64,
    separators=["\\n## ", "\\n\\n", "\\n", " "]
)
chunks = splitter.create_documents(texts=[raw_markdown], metadatas=[meta])`,
    tradeoff: "Smaller chunks increase retrieval precision but require re-ranking to assemble coherent context."
  },
  {
    id: "retrieval",
    name: "2. Hybrid Retrieval (Dense + BM25)",
    category: "VECTOR SEARCH",
    icon: Database,
    latency: "~85ms",
    tokenCost: "1 embed call",
    summary: "Reciprocal Rank Fusion combining dense semantic embeddings with BM25 keyword matching.",
    description:
      "Dense vectors excel at conceptual nuance, while BM25 handles precise serial numbers, acronyms, and proper nouns. Fusing both via RRF ensures high recall without vocabulary mismatch.",
    parameters: [
      { name: "Embedding Model", value: "text-embedding-3-small", desc: "1536 dimensions" },
      { name: "Top-K Dense", value: "20 chunks", desc: "High recall initial pool" },
      { name: "Top-K BM25", value: "20 chunks", desc: "Lexical keyword pool" },
      { name: "RRF Alpha", value: "60", desc: "Standard fusion weight constant" }
    ],
    codeSnippet: `# Reciprocal Rank Fusion (RRF) score calculation
def rrf_score(rank_dense: int, rank_bm25: int, k: int = 60) -> float:
    score_dense = 1.0 / (k + rank_dense)
    score_bm25 = 1.0 / (k + rank_bm25)
    return score_dense + score_bm25

# Execute hybrid query across pgvector + full-text index
candidates = await db.hybrid_search(query_vector, query_text, top_k=25)`,
    tradeoff: "Dual index incurs 2x storage footprint in PostgreSQL, but boosts out-of-domain recall by ~28%."
  },
  {
    id: "reranking",
    name: "3. Cross-Encoder Re-Ranking",
    category: "RELEVANCE FILTER",
    icon: Filter,
    latency: "~95ms",
    tokenCost: "0 API tokens",
    summary: "Cross-encoder scoring to eliminate irrelevant chunks and compress context window.",
    description:
      "Bi-encoders (vector search) compare query and document embeddings independently. A cross-encoder performs full cross-attention over query-document pairs, scoring true semantic relevance with high discrimination.",
    parameters: [
      { name: "Re-ranker Model", value: "bge-reranker-base", desc: "Local ONNX runtime" },
      { name: "Relevance Threshold", value: "0.72", desc: "Hard cutoff for noise injection" },
      { name: "Final Context K", value: "Top 4 chunks", desc: "Fits tight prompt budget" }
    ],
    codeSnippet: `from sentence_transformers import CrossEncoder

reranker = CrossEncoder("BAAI/bge-reranker-base")
pairs = [[query, doc.page_content] for doc in candidates]
scores = reranker.predict(pairs)

# Filter by relevance threshold to eliminate hallucination vectors
filtered_docs = [
    doc for doc, score in zip(candidates, scores) if score >= 0.72
][:4]`,
    tradeoff: "Cross-encoder latency scales with O(N) candidates. We limit initial candidate pool to <= 25."
  },
  {
    id: "generation",
    name: "4. Structured Synthesis & Tool Call",
    category: "INFERENCE",
    icon: Cpu,
    latency: "~180ms TTFT",
    tokenCost: "~850 tokens",
    summary: "Streaming generation constrained by Pydantic schema validation.",
    description:
      "The LLM is prompted with strictly grounded context and system constraints. Outputs are enforced via JSON Schema / Pydantic models so downstream APIs receive predictable, type-safe data rather than unstructured prose.",
    parameters: [
      { name: "Temperature", value: "0.1", desc: "Near-deterministic factual grounding" },
      { name: "Output Format", value: "Pydantic BaseModel", desc: "Strict JSON validation" },
      { name: "Citation Tagging", value: "Mandatory [doc_id]", desc: "Auditable traceability" }
    ],
    codeSnippet: `from pydantic import BaseModel, Field

class VerifiedAnswer(BaseModel):
    answer: str = Field(description="Direct synthesized answer")
    citations: list[str] = Field(description="Source chunk IDs used")
    confidence: float = Field(ge=0.0, le=1.0)
    requires_human_review: bool

# Enforce structured output via Instructor / OpenAI client
response = client.chat.completions.create(
    model="gpt-4o-mini",
    response_model=VerifiedAnswer,
    messages=prompt_messages
)`,
    tradeoff: "Strict schemas occasionally cause retries on edge cases, handled via a fallback validation handler."
  },
  {
    id: "evals",
    name: "5. Automated Evals & Guardrails",
    category: "OBSERVABILITY",
    icon: CheckCircle2,
    latency: "Async background",
    tokenCost: "Batch evals",
    summary: "Deterministic checks for faithfulness, hallucination score, and latency tracking.",
    description:
      "Every production query & response is logged with its context. Automated test harnesses evaluate RAG Triad metrics (Context Relevance, Groundedness, Answer Relevance) to detect regression across model upgrades.",
    parameters: [
      { name: "Faithfulness Target", value: "> 0.92", desc: "Zero invented facts allowed" },
      { name: "Context Relevance", value: "> 0.88", desc: "Noise minimization" },
      { name: "Telemetry Tracing", value: "OpenTelemetry / Langfuse", desc: "Latency & cost audit" }
    ],
    codeSnippet: `# Automated evaluation harness using RAG Triad principles
async def run_quality_eval(query, context, response):
    faithfulness = calculate_groundedness(response.answer, context)
    relevance = calculate_relevance(response.answer, query)
    
    assert faithfulness >= 0.90, f"Potential hallucination detected: {faithfulness}"
    await telemetry.log_trace(
        query=query,
        latency_ms=total_latency,
        eval_metrics={"faithfulness": faithfulness, "relevance": relevance}
    )`,
    tradeoff: "Comprehensive synthetic evals take time to compute; we run them asynchronously to never block user latency."
  }
];

export default function PipelineVisualizer() {
  const [activeStepId, setActiveStepId] = useState<string>("retrieval");
  const activeStep = pipelineSteps.find((s) => s.id === activeStepId) || pipelineSteps[0];

  return (
    <section id="architecture" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <Sparkles size={13} />
              <span>SYSTEM ARCHITECTURE & OBSERVABILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Interactive RAG Pipeline
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Click through each stage to inspect the actual parameters, latency budgets, and real Python implementations I use in production.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all text-xs ${
                  isActive
                    ? "bg-zinc-800/90 border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.08)] ring-1 ring-amber-400/20"
                    : "bg-[#121419]/80 border-zinc-800/80 hover:bg-zinc-800/50 hover:border-zinc-700 text-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    size={16}
                    className={isActive ? "text-amber-400" : "text-zinc-500"}
                  />
                  <span className="font-mono text-[10px] text-zinc-500">
                    {step.latency}
                  </span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">
                  {step.category}
                </div>
                <div
                  className={`font-semibold tracking-tight text-xs ${
                    isActive ? "text-zinc-100" : "text-zinc-300"
                  }`}
                >
                  {step.name.split(". ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="rounded-2xl bg-[#121419] border border-zinc-800 p-6 lg:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Details & Parameters */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                  {activeStep.category}
                </span>
                <span className="font-mono text-xs text-zinc-400 flex items-center gap-1">
                  <Gauge size={13} className="text-zinc-500" />
                  Budget: {activeStep.latency} · {activeStep.tokenCost}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-3 tracking-tight">
                {activeStep.name}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Parameters Breakdown */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 mb-3">
                  <Sliders size={13} className="text-amber-400/90" />
                  <span>KEY PARAMETERS & HYPERPARAMETERS</span>
                </div>
                <div className="space-y-2">
                  {activeStep.parameters.map((param) => (
                    <div
                      key={param.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-xs"
                    >
                      <div>
                        <span className="font-mono text-zinc-300 font-medium">{param.name}</span>
                        <div className="text-[11px] text-zinc-400">{param.desc}</div>
                      </div>
                      <span className="font-mono text-amber-300 bg-amber-400/10 px-2 py-1 rounded text-right font-medium">
                        {param.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Trade-off Box */}
              <div className="p-3.5 rounded-lg bg-zinc-950/70 border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
                <span className="font-mono text-amber-400/90 font-medium mr-1.5">ENGINEERING TRADE-OFF:</span>
                {activeStep.tradeoff}
              </div>
            </div>

            {/* Right Column: Code Snippet */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono text-zinc-400 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Code2 size={13} className="text-emerald-400" />
                  <span>implementation.py</span>
                </div>
                <span className="text-[10px] text-zinc-400">PYTHON 3.11</span>
              </div>

              <div className="rounded-xl bg-zinc-950 border border-zinc-850 p-4 font-mono text-xs text-zinc-200 overflow-x-auto leading-relaxed h-full">
                <pre className="text-[11.5px] leading-6 font-mono">
                  <code>{activeStep.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
