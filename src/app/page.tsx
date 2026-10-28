"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalDeepDive from "@/components/TechnicalDeepDive";
import SkillsSection from "@/components/SkillsSection";
import CertificatesPreview from "@/components/CertificatesPreview";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RaihanFradita";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/raihan-fradita/";
const email = process.env.NEXT_PUBLIC_EMAIL || "raihanfradita.dev@gmail.com";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200">
      {/* Top Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero githubUrl={github} linkedinUrl={linkedin} email={email} />

      {/* Featured Projects */}
      <Projects />

      {/* Technical Architecture Deep-Dive */}
      <TechnicalDeepDive />

      {/* Categorized Skills & Technologies */}
      <SkillsSection />

      {/* Verified AI Certifications Preview */}
      <CertificatesPreview />

      {/* About Me & Learning Philosophy */}
      <AboutSection linkedinUrl={linkedin} />

      {/* Contact Section */}
      <ContactSection email={email} githubUrl={github} linkedinUrl={linkedin} />

      {/* Footer */}
      <Footer githubUrl={github} linkedinUrl={linkedin} email={email} />
    </main>
  );
}
