import { FileText } from "lucide-react";

interface NoteItem {
  id: string;
  topic: string;
  date: string;
  title: string;
  summary: string;
  keyTakeaway: string;
}

const technicalNotes: NoteItem[] = [
  {
    id: "local-rag",
    topic: "LLM ENGINEERING",
    date: "OCTOBER 2026",
    title: "Building Local RAG with Ollama: Managing Context and Memory",
    summary:
      "When running local language models (such as Llama 3.2 3B and Qwen 2.5 7B) on consumer hardware, naive RAG often fails due to memory exhaustion or slow Time-To-First-Token. Limiting retrieved context to 3–4 high-scoring chunks and using 4-bit quantization stabilizes latency without meaningful loss of answer accuracy.",
    keyTakeaway: "Smaller, well-grounded context beats large, noisy context windows on resource-constrained hardware."
  },
  {
    id: "eval-metrics",
    topic: "MACHINE LEARNING",
    date: "SEPTEMBER 2026",
    title: "Evaluating Classification Models Beyond Raw Accuracy",
    summary:
      "In predictive academic retention models where delayed graduation is the minority class, a model predicting 100% on-time graduation can achieve ~80% accuracy while being completely useless. Prioritizing Recall and examining the precision-recall curve ensures vulnerable students are not overlooked.",
    keyTakeaway: "In early warning systems, false negatives (failing to identify an at-risk student) carry far higher cost than false positives."
  },
  {
    id: "structured-outputs",
    topic: "AI INTEGRATION",
    date: "SEPTEMBER 2026",
    title: "Enforcing Deterministic Contracts with Pydantic",
    summary:
      "Natural language generation without schema constraints leads to unpredictable JSON parsing failures in backend microservices. Using Pydantic models with instructor/function-calling patterns transforms probabilistic text generation into strictly typed API data structures.",
    keyTakeaway: "Downstream applications require reliable schemas; validation layers belong at the API boundary."
  }
];

export default function NotesSection() {
  return (
    <section id="notes" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <FileText size={13} />
              <span>TECHNICAL OBSERVATIONS &amp; WRITE-UPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Learning &amp; Technical Notes
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Concise summaries of technical problems encountered, evaluated trade-offs, and lessons learned while building.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalNotes.map((note) => (
            <article
              key={note.id}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-[var(--text-muted)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <span className="text-[var(--accent-blue)] font-semibold">{note.topic}</span>
                  <span>{note.date}</span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3 leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                  {note.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] bg-[var(--bg-muted)]/50 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 p-4 rounded-b-xl">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  CORE TAKEAWAY
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)] italic">
                  &ldquo;{note.keyTakeaway}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
