"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";

interface InteractiveTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ isOpen = true, onClose }: InteractiveTerminalProps) {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="text-zinc-300 space-y-1">
          <div>Raihan Fradita AI Shell [Version 1.4.2]</div>
          <div className="text-zinc-400">Type <span className="text-amber-400 font-semibold">help</span> to list available diagnostic commands.</div>
        </div>
      )
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-amber-400 font-semibold mb-1">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-[140px_1fr] gap-1 text-xs">
              <span className="text-emerald-400 font-mono">projects</span>
              <span className="text-zinc-400">List core engineering projects & benchmarks</span>
              <span className="text-emerald-400 font-mono">certs</span>
              <span className="text-zinc-400">View verified AI certificates & credentials</span>
              <span className="text-emerald-400 font-mono">stack</span>
              <span className="text-zinc-400">View RAG, LLM, and infrastructure stack</span>
              <span className="text-emerald-400 font-mono">evals</span>
              <span className="text-zinc-400">Run simulated RAG Triad test harness</span>
              <span className="text-emerald-400 font-mono">whoami</span>
              <span className="text-zinc-400">Bio & current focus</span>
              <span className="text-emerald-400 font-mono">cat manifesto.txt</span>
              <span className="text-zinc-400">Read engineering principles</span>
              <span className="text-emerald-400 font-mono">contact</span>
              <span className="text-zinc-400">Get direct email and social links</span>
              <span className="text-emerald-400 font-mono">clear</span>
              <span className="text-zinc-400">Clear terminal history</span>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-zinc-200">
              <span className="text-amber-400 font-bold">[01] Contextual RAG System</span> · Hybrid Dense+BM25, BGE Reranker (Hit Rate: 94.2%)
            </div>
            <div className="text-zinc-200">
              <span className="text-amber-400 font-bold">[02] School QR Attendance</span> · Cryptographic tokens, 850+ daily active users
            </div>
            <div className="text-zinc-200">
              <span className="text-amber-400 font-bold">[03] Predictive ML Retention</span> · XGBoost + SHAP feature attribution (ROC-AUC: 0.91)
            </div>
          </div>
        );
        break;

      case "certs":
      case "certificates":
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-zinc-200">
              <span className="text-emerald-400 font-bold">● Google AI Professional Certificate</span> (Coursera) · 8 courses, 20+ artifacts
            </div>
            <div className="text-zinc-200">
              <span className="text-emerald-400 font-bold">● OpenAI Academy</span> · Apply AI at Work Pathway (ID: 195236926, Score &gt;= 80%)
            </div>
            <div className="text-zinc-200">
              <span className="text-emerald-400 font-bold">● IBM SkillsBuild</span> · AI Literacy &amp; Machine Learning Foundations
            </div>
            <div className="text-amber-400 pt-1">
              Visit <a href="/certificates" className="underline font-semibold">/certificates</a> to inspect high-res proofs and verify online.
            </div>
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="space-y-1 text-xs">
            <div><span className="text-amber-400">Retrieval:</span> pgvector, Chroma, Hybrid Search, Cohere/BGE Rerankers</div>
            <div><span className="text-amber-400">Inference:</span> vLLM, Ollama, LangChain, Pydantic Structured Outputs</div>
            <div><span className="text-amber-400">Evals:</span> DeepEval, Ragas, Synthetic Test Generation</div>
            <div><span className="text-amber-400">Systems:</span> Python 3.11, FastAPI, Docker, Next.js 15, TypeScript</div>
          </div>
        );
        break;

      case "evals":
        output = (
          <div className="space-y-1 font-mono text-xs">
            <div className="text-emerald-400 font-semibold">RUNNING SUITE: rag_faithfulness_suite.py</div>
            <div className="text-zinc-400">[RUN] Evaluating 150 test fixtures across multi-hop contexts...</div>
            <div className="text-zinc-300">✓ Context Relevance: <span className="text-emerald-400">0.91</span> [PASS]</div>
            <div className="text-zinc-300">✓ Faithfulness / Groundedness: <span className="text-emerald-400">0.94</span> [PASS]</div>
            <div className="text-zinc-300">✓ Answer Relevance: <span className="text-emerald-400">0.89</span> [PASS]</div>
            <div className="text-zinc-300">✓ Hallucination Rate: <span className="text-emerald-400">&lt; 2.1%</span> [PASS]</div>
            <div className="text-amber-400 font-semibold mt-1">STATUS: ALL 150 TEST CASES PASSED (Total: 412ms)</div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs text-zinc-300 leading-relaxed">
            Raihan Fradita — Information Technology undergraduate building AI Engineering pipelines.
            Interested in turning raw probabilistic models into verifiable, grounded software systems.
          </div>
        );
        break;

      case "cat manifesto.txt":
      case "cat philosophy.md":
        output = (
          <div className="text-xs text-zinc-300 space-y-1 italic font-serif">
            <div>&quot;1. Clean chunking and indexing beat clever prompt engineering every single time.&quot;</div>
            <div>&quot;2. If you don&apos;t evaluate with deterministic test suites, you don&apos;t have an AI system; you have a demo.&quot;</div>
            <div>&quot;3. Latency and cost are first-class architecture metrics, not afterthoughts.&quot;</div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs space-y-1">
            <div>Email: <a href="mailto:raihanfradita.dev@gmail.com" className="text-amber-400 underline">raihanfradita.dev@gmail.com</a></div>
            <div>GitHub: <a href="https://github.com/RaihanFradita" target="_blank" rel="noreferrer" className="text-amber-400 underline">github.com/RaihanFradita</a></div>
            <div>Location: Indonesia (Open to Remote & Hybrid worldwide)</div>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            command not found: {cmd}. Type <span className="text-amber-400">help</span> for a list of valid commands.
          </div>
        );
    }

    setLogs((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div
      className={`rounded-2xl bg-[#0f1115] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs transition-all ${
        isExpanded ? "fixed inset-6 z-50 flex flex-col" : "w-full"
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setLogs([])} title="Clear terminal" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Toggle expand" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
            <TerminalIcon size={12} className="text-amber-400" />
            raihan@ai-station:~$
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-500">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:text-zinc-200 transition-colors"
            title="Expand"
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          {onClose && (
            <button onClick={onClose} className="p-1 hover:text-zinc-200 transition-colors">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Body */}
      <div className={`p-4 space-y-3 overflow-y-auto ${isExpanded ? "flex-1" : "max-h-72"}`}>
        {logs.map((log, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">❯</span>
              <span className="text-zinc-200 font-mono">{log.command}</span>
            </div>
            <div className="pl-4">{log.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Command Input */}
      <form
        onSubmit={handleCommand}
        className="flex items-center gap-2 px-4 py-3 bg-zinc-950/90 border-t border-zinc-850"
      >
        <span className="text-amber-400 font-bold text-sm">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Try typing 'help', 'evals', 'projects', or 'stack'..."
          className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none font-mono text-xs"
        />
        <button
          type="submit"
          className="text-zinc-500 hover:text-amber-400 transition-colors p-1"
          title="Submit command"
        >
          <CornerDownLeft size={14} />
        </button>
      </form>
    </div>
  );
}
