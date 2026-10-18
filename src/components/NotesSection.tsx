"use client";

import { BookOpen, Zap, Shield, Split, Clock } from "lucide-react";

interface Note {
  number: string;
  title: string;
  icon: typeof Zap;
  category: string;
  excerpt: string;
  takeaway: string;
}

const engineeringNotes: Note[] = [
  {
    number: "01",
    title: "Context is King, Prompting is Queen",
    icon: Split,
    category: "RAG & RETRIEVAL",
    excerpt:
      "When an LLM produces a hallucinated answer, 90% of developers tweak the system prompt. In reality, the issue almost always stems from poor semantic boundary chunking, missing metadata, or lack of cross-encoder reranking.",
    takeaway: "Clean chunking and hybrid indexing solve what 10 pages of prompt engineering cannot."
  },
  {
    number: "02",
    title: "Deterministic Evals Over 'Vibe Testing'",
    icon: Shield,
    category: "EVALUATION & RELIABILITY",
    excerpt:
      "Testing an AI pipeline by manually prompting it five times creates false security. Production reliability requires a version-controlled test suite tracking Faithfulness, Context Recall, and Groundedness on every git push.",
    takeaway: "If you cannot measure regression automatically, you don't have a system—you have a demo."
  },
  {
    number: "03",
    title: "Compound AI Systems Over Monolithic Models",
    icon: Zap,
    category: "SYSTEMS ARCHITECTURE",
    excerpt:
      "Instead of delegating everything to a massive frontier model, compound systems combine fast local SLMs (Small Language Models) for classification, vector DBs for retrieval, and strict Pydantic schemas for verification.",
    takeaway: "Specialized components with clear boundaries are cheaper, faster, and far easier to debug."
  },
  {
    number: "04",
    title: "Latency and TTFT as First-Class Metrics",
    icon: Clock,
    category: "PERFORMANCE ENGINEERING",
    excerpt:
      "A brilliant model that takes 8 seconds before returning a token feels broken to users. Prioritizing Time-to-First-Token (TTFT), token streaming, and semantic response caching transforms user perception.",
    takeaway: "Fast partial feedback keeps users engaged while heavy inference completes."
  }
];

export default function NotesSection() {
  return (
    <section id="notes" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <BookOpen size={13} />
              <span>FIELD NOTES & MENTAL MODELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Engineering Principles
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            The practical heuristics I follow when building AI systems. Pragmatic, test-driven, and focused on real-world utility over hype.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringNotes.map((note) => {
            const Icon = note.icon;
            return (
              <article
                key={note.number}
                className="rounded-2xl bg-[#121419] border border-zinc-800 p-6 sm:p-7 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-5">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {note.number} / {note.category}
                    </span>
                    <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                      <Icon size={14} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-tight">
                    {note.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {note.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-850/80 bg-zinc-950/40 -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                    CORE HEURISTIC
                  </div>
                  <div className="text-xs font-medium text-amber-300/90 leading-snug">
                    &ldquo;{note.takeaway}&rdquo;
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
