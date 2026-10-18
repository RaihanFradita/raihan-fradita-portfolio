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
    <section id="contact" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-3">
            <MessageSquare size={13} />
            <span>LET&apos;S CONNECT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Open to AI Engineering Opportunities
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
            I am actively seeking <strong className="text-[var(--text-primary)]">AI Engineering internships</strong>, junior roles, and technical project collaborations. If you are building LLM applications, evaluating ML pipelines, or have an opportunity to discuss, my inbox is open.
          </p>

          {/* Contact Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)]/50 hover:bg-[var(--bg-muted)] text-xs font-mono text-[var(--text-primary)] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[var(--accent-blue)]" />
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </div>
              {copied ? (
                <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy size={13} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)]/50 hover:bg-[var(--bg-muted)] text-xs font-mono text-[var(--text-primary)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[var(--text-muted)]" />
                <span>Send Mail</span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)]/50 hover:bg-[var(--bg-muted)] text-xs font-mono text-[var(--text-primary)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Github size={15} className="text-[var(--text-muted)]" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors" />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)]/50 hover:bg-[var(--bg-muted)] text-xs font-mono text-[var(--text-primary)] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin size={15} className="text-[var(--text-muted)]" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors" />
            </a>
          </div>

          {/* Location & Status Bar */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>Available for internships &amp; junior positions</span>
            </div>
            <span>Based in Indonesia · Open to Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
}
