"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PipelineVisualizer from "@/components/PipelineVisualizer";
import Projects from "@/components/Projects";
import CertificatesPreview from "@/components/CertificatesPreview";
import StackSection from "@/components/StackSection";
import NotesSection from "@/components/NotesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveTerminal from "@/components/InteractiveTerminal";

const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RaihanFradita";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/raihan-fradita/";
const email = process.env.NEXT_PUBLIC_EMAIL || "raihanfradita.dev@gmail.com";

export default function Home() {
  const [showTerminalDrawer, setShowTerminalDrawer] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-[#0b0c0f] text-zinc-100 flex flex-col relative">
      {/* Top Navbar */}
      <Header onToggleTerminal={() => setShowTerminalDrawer(!showTerminalDrawer)} />

      {/* Hero Section */}
      <Hero githubUrl={github} linkedinUrl={linkedin} />

      {/* Interactive RAG & Agent Pipeline Architecture */}
      <PipelineVisualizer />

      {/* Featured Projects with Architecture Tabs & Benchmarks */}
      <Projects />

      {/* Verified AI Certifications Preview */}
      <CertificatesPreview />

      {/* Technical Stack, Tooling & Continuous Evals */}
      <StackSection />

      {/* Interactive Terminal Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>INTERACTIVE DEVELOPER SHELL</span>
          </div>
          <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
            Type &apos;help&apos; for list of commands
          </span>
        </div>
        <InteractiveTerminal />
      </section>

      {/* Field Notes & Mental Models */}
      <NotesSection />

      {/* Background & About */}
      <AboutSection linkedinUrl={linkedin} />

      {/* Contact Section */}
      <ContactSection email={email} githubUrl={github} linkedinUrl={linkedin} />

      {/* Footer */}
      <Footer githubUrl={github} linkedinUrl={linkedin} email={email} />

      {/* Optional Floating Terminal Modal if triggered from header */}
      {showTerminalDrawer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <InteractiveTerminal onClose={() => setShowTerminalDrawer(false)} />
          </div>
        </div>
      )}
    </main>
  );
}
