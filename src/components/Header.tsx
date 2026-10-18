"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Check, Copy, Award } from "lucide-react";

interface HeaderProps {
  onToggleTerminal?: () => void;
}

export default function Header({ onToggleTerminal }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const email = process.env.NEXT_PUBLIC_EMAIL || "raihanfradita.dev@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f12]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Identifier */}
        <Link
          href="/#top"
          className="group flex items-center gap-3 text-zinc-200 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center font-mono text-xs font-semibold text-amber-400 group-hover:border-amber-400/50 group-hover:shadow-[0_0_12px_rgba(251,191,36,0.15)] transition-all">
            rf
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 flex items-center gap-1.5">
              Raihan Fradita
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
              AI_ENGINEER // SYSTEMS
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 border border-white/[0.08] px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-sm">
          <Link
            href="/#architecture"
            className="px-3 py-1 rounded-full hover:text-amber-300 hover:bg-zinc-800/80 transition-all"
          >
            Architecture
          </Link>
          <Link
            href="/#projects"
            className="px-3 py-1 rounded-full hover:text-amber-300 hover:bg-zinc-800/80 transition-all"
          >
            Projects
          </Link>
          <Link
            href="/#stack"
            className="px-3 py-1 rounded-full hover:text-amber-300 hover:bg-zinc-800/80 transition-all"
          >
            Stack &amp; Evals
          </Link>
          <Link
            href="/certificates"
            className="px-3 py-1 rounded-full text-amber-300/90 hover:text-amber-300 hover:bg-zinc-800/80 transition-all flex items-center gap-1"
          >
            <Award size={12} className="text-amber-400" />
            <span>Certificates</span>
          </Link>
          <Link
            href="/#notes"
            className="px-3 py-1 rounded-full hover:text-amber-300 hover:bg-zinc-800/80 transition-all"
          >
            Notes
          </Link>
          <Link
            href="/#about"
            className="px-3 py-1 rounded-full hover:text-amber-300 hover:bg-zinc-800/80 transition-all"
          >
            About
          </Link>
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              title="Open Interactive Terminal"
              className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-amber-400 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/[0.08] px-3 py-1.5 rounded-lg transition-all"
            >
              <Terminal size={13} className="text-amber-400/90" />
              <span>terminal</span>
            </button>
          )}

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-xs font-medium text-zinc-200 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-lg transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-300 font-mono text-[11px]">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} className="opacity-70" />
                <span>Get in touch</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
