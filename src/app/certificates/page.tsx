"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  CheckCircle,
  Download,
  Maximize2,
  X,
  Copy,
  Check,
  ShieldCheck,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  badgeStyle: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl: string;
  pdfUrl: string;
  imageUrl: string;
  description: string;
  modulesOrSkills: string[];
}

const certificates: Certificate[] = [
  {
    id: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google & Coursera",
    issuerBadge: "GOOGLE CERTIFIED",
    badgeStyle: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    issueDate: "October 05, 2026",
    credentialId: "UV1INU8MFJ69",
    verifyUrl: "https://coursera.org/verify/professional-cert/UV1INU8MFJ69",
    pdfUrl: "/certificates/google-ai-professional-certificate.pdf",
    imageUrl: "/certificates/google-ai-professional-certificate.png",
    description:
      "Comprehensive 8-course professional program demonstrating fluent application of AI across workplace workflows, data analysis, custom AI solutions, and building + deploying real-world AI applications.",
    modulesOrSkills: [
      "AI Fundamentals",
      "AI for Brainstorming & Planning",
      "AI for Research & Insights",
      "AI for Writing & Communicating",
      "AI for Content Creation",
      "AI for Data Analysis",
      "AI for App Building",
      "AI for App Deployment",
      "20+ Artifacts Portfolio Built"
    ]
  },
  {
    id: "openai-apply-ai",
    title: "Apply AI at Work — Pathway Certificate",
    issuer: "OpenAI Academy",
    issuerBadge: "OPENAI ACADEMY",
    badgeStyle: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    issueDate: "September 25, 2026",
    expiryDate: "March 25, 2027",
    credentialId: "195236926",
    verifyUrl: "https://academy.openai.com",
    pdfUrl: "/certificates/openai-apply-ai-at-work.pdf",
    imageUrl: "/certificates/openai-apply-ai-at-work.png",
    description:
      "Certification pathway by OpenAI Academy covering frontier AI productivity, workplace automation, reasoning model prompting, and systematic evaluation. Completed all 3 courses with assessment scores of 80% or higher.",
    modulesOrSkills: [
      "Prompt Optimization & Structure",
      "Workplace Workflow Automation",
      "Context & Grounding Strategies",
      "Output Evaluation & Quality Auditing",
      "Score >= 80% on All Assessments"
    ]
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy (Digital Credential)",
    issuer: "IBM SkillsBuild",
    issuerBadge: "IBM SKILLSBUILD",
    badgeStyle: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    issueDate: "September 25, 2026",
    credentialId: "PLAN-1C903152880C",
    verifyUrl: "https://skillsbuild.org",
    pdfUrl: "/certificates/ibm-ai-literacy.pdf",
    imageUrl: "/certificates/ibm-ai-literacy.png",
    description:
      "Foundational certification on enterprise AI architectures, machine learning concepts, AI ethics, and data readiness principles validated through the IBM Learning Builder system of record.",
    modulesOrSkills: [
      "Enterprise AI Foundations",
      "Machine Learning Lifecycle",
      "AI Ethics & Governance",
      "Data Preparation Principles"
    ]
  }
];

const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RaihanFradita";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/raihan-fradita/";
const email = process.env.NEXT_PUBLIC_EMAIL || "raihanfradita.dev@gmail.com";

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-200">
      <Header />

      {/* Hero section for Certificates */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO HOME PORTFOLIO</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-blue)] mb-4">
                <Award size={13} />
                <span>VERIFIED ACCREDITATIONS &amp; CERTIFICATIONS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                Verified AI Credentials
              </h1>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                Formal certifications completed across Google, OpenAI Academy, and IBM SkillsBuild.
                Combining self-taught systems development with structured industry programs in AI deployment, prompt optimization, and applied machine learning.
              </p>
            </div>

            {/* Quick summary tally */}
            <div className="flex items-center gap-3 bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 rounded-xl font-mono text-xs shadow-xs">
              <div className="text-center px-3 border-r border-[var(--border-subtle)]">
                <div className="text-2xl font-bold text-[var(--accent-blue)]">3</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">ACCREDITED</div>
              </div>
              <div className="text-center px-3 border-r border-[var(--border-subtle)]">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8+</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">COURSES</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-bold text-[var(--text-primary)]">100%</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">VERIFIABLE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates List */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden shadow-xs hover:border-[var(--text-muted)] transition-colors p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Certificate Visual Image */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div
                    className="group relative rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-muted)] cursor-pointer aspect-[16/11]"
                    onClick={() => setSelectedImage(cert.imageUrl)}
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-200"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />

                    {/* Hover enlarge overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                      <Maximize2 size={16} />
                      <span>Click to enlarge preview</span>
                    </div>
                  </div>

                  {/* Actions under image */}
                  <div className="flex items-center justify-between gap-3 text-xs font-mono pt-1">
                    <button
                      onClick={() => setSelectedImage(cert.imageUrl)}
                      className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      <Maximize2 size={13} />
                      <span>Enlarge View</span>
                    </button>

                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors"
                    >
                      <Download size={13} />
                      <span>Download Official PDF</span>
                    </a>
                  </div>
                </div>

                {/* Certificate Information & Metadata */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Issuer Badge & Date */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${cert.badgeStyle}`}>
                        {cert.issuerBadge}
                      </span>

                      <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                        <Calendar size={13} />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
                      {cert.title}
                    </h2>

                    <div className="text-xs font-mono text-[var(--text-muted)] mb-4">
                      ORGANIZATION: <span className="text-[var(--text-primary)] font-semibold">{cert.issuer}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Modules / Skills Covered */}
                    <div className="mb-6">
                      <div className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400" />
                        <span>VERIFIED CURRICULUM &amp; COVERAGE</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.modulesOrSkills.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-muted)] border border-[var(--border-subtle)] px-2 py-0.5 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification Footer & CTA */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {cert.credentialId && (
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-[var(--text-muted)]">ID:</span>
                        <code className="font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-muted)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                          {cert.credentialId}
                        </code>
                        <button
                          onClick={() => handleCopyId(cert.id, cert.credentialId || "")}
                          className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                          title="Copy Credential ID"
                        >
                          {copiedId === cert.id ? (
                            <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy size={13} />
                          )}
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-2.5">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-xs font-mono font-medium text-[var(--text-primary)] transition-colors group"
                      >
                        <ShieldCheck size={14} className="text-[var(--accent-blue)]" />
                        <span>Verify Online</span>
                        <ExternalLink size={12} className="text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for HD Certificate Inspection */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl overflow-hidden p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-md bg-[var(--bg-muted)] hover:bg-[var(--border-color)] text-[var(--text-primary)] transition-colors cursor-pointer"
              title="Close preview"
            >
              <X size={18} />
            </button>
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedImage}
                alt="Enlarged Certificate View"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}

      <Footer githubUrl={github} linkedinUrl={linkedin} email={email} />
    </main>
  );
}
