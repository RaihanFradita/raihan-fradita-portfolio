"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Coffee, Compass, ArrowUpRight, Award } from "lucide-react";

interface AboutSectionProps {
  linkedinUrl: string;
}

export default function AboutSection({ linkedinUrl }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <User size={13} />
              <span>BACKGROUND &amp; MOTIVATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Behind the Terminal
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            A little about my path into systems engineering, machine learning, and why I care about building things that work reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#121419] border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-zinc-100">
                Bridging academic models and usable software.
              </h3>
              <p>
                I am an Information Technology undergraduate based in Indonesia. While many initial AI tutorials stop at calling an API with a creative prompt, I quickly realized the hardest—and most interesting—problems in AI are deeply architectural:
              </p>
              <p className="text-zinc-400 pl-4 border-l-2 border-amber-400/60 italic font-serif">
                How do we guarantee that an LLM grounds every claim in factual data? How do we minimize latency so a user isn&apos;t staring at a spinner for eight seconds? How do we test non-deterministic pipelines before shipping to production?
              </p>
              <p>
                These questions pulled me into AI Engineering. Today, I spend my time exploring hybrid vector search, structured function-calling agents, and continuous automated evals. I love building tools where complex underlying machine learning feels effortless, fast, and genuinely helpful.
              </p>
            </div>

            {/* Current Explorations */}
            <div className="p-6 rounded-2xl bg-[#121419] border border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-3">
                <Compass size={14} />
                <span>CURRENT EXPERIMENTS &amp; READING</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">●</span>
                  <span><strong>Small Language Models (SLMs) on Edge:</strong> Serving quantized Qwen 2.5 and Llama 3.2 via vLLM with low VRAM footprint.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">●</span>
                  <span><strong>Tabular RAG:</strong> Exploring specialized chunking algorithms that maintain row-column relations for structured business data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">●</span>
                  <span><strong>Deterministic Agent Loops:</strong> Multi-step agents with state machines to prevent circular tool execution.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info & Telemetry Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Featured Portrait & Profile Card */}
            <div className="p-6 rounded-2xl bg-[#121419] border border-zinc-800 space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-zinc-700/80 shadow-md flex-shrink-0 bg-zinc-900">
                  <Image
                    src="/raihan.jpg"
                    alt="Raihan Fradita Portrait"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-zinc-100">Raihan Fradita</span>
                  <span className="font-mono text-xs text-amber-400">AI Engineer in Progress</span>
                  <span className="text-xs text-zinc-400 mt-0.5">B.S. Information Technology</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs pt-2 border-t border-zinc-800/80">
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-500">DEGREE</span>
                  <span className="text-zinc-200">B.S. Information Technology</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-500">LOCATION</span>
                  <span className="text-zinc-200">Indonesia (UTC+7)</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-500">STATUS</span>
                  <span className="text-emerald-400 font-bold">Open to Internships &amp; Roles</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-500">PRIMARY TOOLS</span>
                  <span className="text-zinc-200">Python · PyTorch · FastAPI · Next.js</span>
                </div>
              </div>

              {/* Verified Credentials Link */}
              <Link
                href="/certificates"
                className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-amber-400" />
                  <span>3 Accredited AI Certifications</span>
                </div>
                <ArrowUpRight size={14} className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-200 hover:text-white transition-all group"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Cozy Personal Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181a20] to-[#121419] border border-zinc-800/80">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
                <Coffee size={14} />
                <span>WORK PHILOSOPHY</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                I believe in pair programming, clear documentation, reading the actual research papers, and writing software that respects people&apos;s time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
