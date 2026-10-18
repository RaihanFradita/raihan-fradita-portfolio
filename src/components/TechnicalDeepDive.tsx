"use client";

import { useState } from "react";
import { Cpu, Code2, AlertTriangle } from "lucide-react";

interface PipelineStage {
  step: string;
  name: string;
  description: string;
  decisions: string;
  codePreview: string;
}

const pipelineStages: PipelineStage[] = [
  {
    step: "01",
    name: "Document Ingestion & Chunking",
    description:
      "Markdown and PDF notes are parsed and divided along semantic boundaries (headers, paragraphs) rather than rigid token boundaries.",
    decisions:
      "Selected 512-token chunks with 64-token overlap. A smaller chunk size (256) lost table context; larger chunk sizes (1024) introduced irrelevant noise into the prompt context window.",
    codePreview: `# Semantic text splitting with overlap preservation
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=512,
    chunk_overlap=64,
    separators=["\\n## ", "\\n\\n", "\\n", " "]
)
documents = splitter.create_documents(texts=[note_text], metadatas=[meta])`
  },
  {
    step: "02",
    name: "Local Embedding & Vector Indexing",
    description:
      "Chunks are mapped into dense vector spaces using local embedding models and stored in a lightweight vector database.",
    decisions:
      "Chose local embeddings (nomic-embed-text, 768 dimensions) to run entirely offline without external API costs or data leakage for personal academic notes.",
    codePreview: `# Embedding generation and local ChromaDB ingestion
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OllamaEmbeddings(model="nomic-embed-text")
vector_store = Chroma.from_documents(
    documents=documents,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`
  },
  {
    step: "03",
    name: "Context Retrieval & Filtering",
    description:
      "Given a user query, compute vector similarity to retrieve the Top-K most relevant chunks based on cosine distance.",
    decisions:
      "Limited Top-K to 4 passages. Testing revealed that passing 6+ passages caused smaller local models to suffer from 'lost in the middle' syndrome and increased latency by ~60%.",
    codePreview: `# Similarity retrieval with score threshold
retriever = vector_store.as_retriever(
    search_type="similarity_score_threshold",
    search_kwargs={"k": 4, "score_threshold": 0.65}
)
relevant_chunks = retriever.invoke(user_query)`
  },
  {
    step: "04",
    name: "Grounded Synthesis via Local LLM",
    description:
      "Retrieved passages are injected into a strict system prompt instructing the model to rely solely on the provided context.",
    decisions:
      "Utilized Ollama serving Llama 3.2 3B and Qwen 2.5 7B with low temperature (0.1) to suppress speculative hallucinations and produce verifiable citations.",
    codePreview: `# Grounded prompt synthesis via Ollama
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.llms import Ollama

prompt = ChatPromptTemplate.from_template("""
You are a helpful assistant. Answer ONLY using the following context.
If the answer cannot be found in the context, say "I cannot find this in your notes."

Context:
{context}

Question: {question}
""")
model = Ollama(model="qwen2.5:7b", temperature=0.1)
chain = prompt | model`
  }
];

export default function TechnicalDeepDive() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = pipelineStages[activeStageIndex];

  return (
    <section id="deep-dive" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <Cpu size={13} />
              <span>TECHNICAL REASONING &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Architecture Deep-Dive
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Detailed breakdown of engineering decisions, data flows, and trade-offs when designing a local RAG pipeline.
          </p>
        </div>

        {/* Interactive Architecture Flow Layout */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
          {/* Architecture Title & Subtitle */}
          <div className="pb-6 border-b border-[var(--border-subtle)] mb-6">
            <span className="font-mono text-[11px] text-[var(--accent-blue)] font-semibold uppercase tracking-wider">
              CASE STUDY: LOCAL RAG WITH OLLAMA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
              End-to-End Retrieval &amp; Grounding Data Flow
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
              An architectural exploration of how offline embedding models, vector indices, and local quantized LLMs interact to provide verifiable question answering.
            </p>
          </div>

          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {pipelineStages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3 text-left rounded-lg border transition-all text-xs font-mono ${
                  activeStageIndex === idx
                    ? "border-[var(--accent-blue)] bg-[var(--accent-blue-light)] text-[var(--text-primary)] font-bold shadow-xs"
                    : "border-[var(--border-color)] bg-[var(--bg-muted)]/60 text-[var(--text-secondary)] hover:bg-[var(--bg-muted)]"
                }`}
              >
                <div className="text-[10px] text-[var(--text-muted)] mb-1">STAGE {stage.step}</div>
                <div className="truncate">{stage.name}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Explanation & Trade-offs */}
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
              <div>
                <span className="font-mono text-xs text-[var(--accent-blue)] font-bold">
                  STAGE {activeStage.step} OF 04
                </span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mt-1">
                  {activeStage.name}
                </h4>
                <p className="mt-2 leading-relaxed">{activeStage.description}</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--bg-muted)]/70 border border-[var(--border-subtle)]">
                <div className="font-mono text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                  Engineering Rationale
                </div>
                <p className="leading-relaxed text-xs">{activeStage.decisions}</p>
              </div>

              {/* Trade-off Warning */}
              <div className="p-3.5 rounded-lg border border-[var(--border-color)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                <AlertTriangle size={15} className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Hardware Constraint:</strong> Running 7B models on 8GB VRAM requires 4-bit quantization (GGUF Q4_K_M) to maintain ~15–20 tokens/sec generation speed.
                </span>
              </div>
            </div>

            {/* Right: Code Implementation Snippet */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] mb-2">
                <div className="flex items-center gap-1.5">
                  <Code2 size={13} className="text-[var(--accent-blue)]" />
                  <span>rag_pipeline.py</span>
                </div>
                <span>PYTHON 3.11</span>
              </div>

              <div className="rounded-lg bg-[var(--bg-muted)] border border-[var(--border-color)] p-4 font-mono text-xs overflow-x-auto text-[var(--text-primary)] leading-relaxed">
                <pre className="text-[11.5px] leading-6">
                  <code>{activeStage.codePreview}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Technical Evaluation Methodology Banner */}
          <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]/40">
              <div className="font-mono text-[11px] font-bold text-[var(--text-primary)] mb-1">
                Context Relevance
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Audits whether retrieved passages directly pertain to the prompt without superfluous content.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]/40">
              <div className="font-mono text-[11px] font-bold text-[var(--text-primary)] mb-1">
                Groundedness / Faithfulness
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Validates that all statements in the model output can be traced directly to context chunks.
              </p>
            </div>

            <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]/40">
              <div className="font-mono text-[11px] font-bold text-[var(--text-primary)] mb-1">
                Answer Relevance
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Ensures the synthesized response directly addresses the user intent rather than evading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
