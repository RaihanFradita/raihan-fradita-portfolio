"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";

interface ContactSectionProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function ContactSection({ email, githubUrl, linkedinUrl }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 relative">
      {/* Background warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-b from-[#15171d] to-[#101216] border border-zinc-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle top amber highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-4">
            <MessageSquare size={13} />
            <span>LET&apos;S COLLABORATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 mb-6 leading-tight">
            Have a problem worth figuring out?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl">
            I’m actively looking for <span className="text-amber-300 font-medium">AI Engineering internships</span>,
            junior positions, and research opportunities. Whether you want to talk RAG benchmarks, agent architectures, or have an open role, my inbox is open.
          </p>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-400/40 text-xs font-mono text-zinc-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-amber-400" />
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </div>
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-zinc-500 group-hover:text-zinc-300" />}
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-400/40 text-xs font-mono text-zinc-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-zinc-400" />
                <span>Direct Mail</span>
              </div>
              <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-400/40 text-xs font-mono text-zinc-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Github size={15} className="text-zinc-400" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-400/40 text-xs font-mono text-zinc-200 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin size={15} className="text-zinc-400" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Location & Status Bar */}
          <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for internships &amp; junior roles</span>
            </div>
            <span>Based in Indonesia · Open to Remote worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
