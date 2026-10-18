import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Github, Linkedin, Activity, Database, Award } from "lucide-react";

interface HeroProps {
  githubUrl: string;
  linkedinUrl: string;
}

export default function Hero({ githubUrl, linkedinUrl }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient warm glow background - subtle late-night desk lamp feeling */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-amber-500/[0.07] via-amber-700/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Photo Avatar & Status Badge */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-amber-400/40 shadow-[0_0_18px_rgba(251,191,36,0.15)] flex-shrink-0 bg-zinc-900">
                <Image
                  src="/raihan.jpg"
                  alt="Raihan Fradita"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] text-zinc-300">
                  OPEN TO AI ROLES &amp; RESEARCH
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-400 text-[11px]">ID &amp; REMOTE</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.08] mb-6">
              Engineering AI systems that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 font-serif italic font-normal">
                survive contact
              </span>{" "}
              with reality.
            </h1>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              I’m <span className="text-zinc-100 font-medium">Raihan Fradita</span>, an Information Technology
              undergraduate specializing in <span className="text-amber-300/90 font-medium">AI Engineering</span>.
              I build hybrid RAG pipelines, structured agent workflows, and deterministic evals—moving beyond prompt guesswork into observable production software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
              >
                <span>Interactive Pipeline</span>
                <ArrowDownRight size={15} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] text-xs font-medium transition-all"
              >
                <span>Selected Projects</span>
              </a>

              <Link
                href="/certificates"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono transition-all"
              >
                <Award size={13} className="text-amber-400" />
                <span>3 Certifications</span>
              </Link>

              <div className="flex items-center gap-1.5 sm:ml-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-white/[0.08] transition-all"
                >
                  <Github size={16} />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-white/[0.08] transition-all"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Core Philosophy Footnote */}
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-800/80 w-full max-w-lg">
              <span className="text-amber-400/90">PRINCIPIA:</span>
              <span className="text-zinc-300">Context &gt; Clever Prompts</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-300">Evals &gt; Vibes</span>
            </div>
          </div>

          {/* Right Side: Engineering Telemetry / Cozy System Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#121419]/90 border border-zinc-800/90 p-5 shadow-2xl backdrop-blur-md">
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-zinc-300 tracking-wide font-medium">
                    ai_engine_runtime.py
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-700/50">
                  HEALTH: NOMINAL
                </span>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-lg p-3">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] font-mono mb-1">
                    <span>RAG HIT RATE</span>
                    <Database size={12} className="text-amber-400/80" />
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-100">94.6%</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Top-3 Recall @ dense+BM25</div>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-lg p-3">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] font-mono mb-1">
                    <span>P95 LATENCY</span>
                    <Activity size={12} className="text-emerald-400/80" />
                  </div>
                  <div className="text-xl font-bold font-mono text-zinc-100">340ms</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">TTFT via streaming chunk</div>
                </div>
              </div>

              {/* Real Engineering Code Snapshot */}
              <div className="bg-zinc-950/90 rounded-lg p-3.5 border border-zinc-800/70 font-mono text-[11px] text-zinc-300 leading-relaxed overflow-x-auto">
                <div className="text-zinc-500">{"// Grounded generation with deterministic guardrail"}</div>
                <div className="text-amber-300/90">
                  <span className="text-purple-400">async def</span>{" "}
                  <span className="text-blue-300">retrieve_and_verify</span>(query: <span className="text-emerald-400">str</span>):
                </div>
                <div className="pl-4 text-zinc-400">
                  docs = <span className="text-zinc-200">await hybrid_retriever.get(query, k=5)</span>
                </div>
                <div className="pl-4 text-zinc-400">
                  ranked = <span className="text-zinc-200">rerank_cross_encoder(docs, threshold=0.78)</span>
                </div>
                <div className="pl-4 text-zinc-400">
                  eval_score = <span className="text-amber-300">eval_faithfulness</span>(ranked, context)
                </div>
                <div className="pl-4 text-emerald-400">
                  return <span className="text-zinc-200">synthesize_structured_output(ranked)</span>
                </div>
              </div>

              {/* Stack Badges inside Card */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-400">LOCAL_MODELS</span>
                <div className="flex gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Qwen 2.5</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">Llama 3.2</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">vLLM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
