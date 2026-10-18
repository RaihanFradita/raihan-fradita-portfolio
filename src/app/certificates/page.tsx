"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  CheckCircle2,
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
  badgeColor: string;
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
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    issueDate: "October 05, 2026",
    credentialId: "UV1INU8MFJ69",
    verifyUrl: "https://coursera.org/verify/professional-cert/UV1INU8MFJ69",
    pdfUrl: "/certificates/google-ai-professional-certificate.pdf",
    imageUrl: "/certificates/google-ai-professional-certificate.png",
    description:
      "Comprehensive 8-course professional program demonstrating fluent application of AI across workplace workflows, data analysis, vibe coding custom AI solutions, and building + deploying real-world AI applications.",
    modulesOrSkills: [
      "AI Fundamentals",
      "AI for Brainstorming & Planning",
      "AI for Research & Insights",
      "AI for Writing & Communicating",
      "AI for Content Creation",
      "AI for Data Analysis",
      "AI for App Building",
      "AI for App Deployment",
      "20+ Artifacts Portfolio",
      "Vibe Coded AI Solution"
    ]
  },
  {
    id: "openai-apply-ai",
    title: "Apply AI at Work — Pathway Completion Certificate",
    issuer: "OpenAI Academy",
    issuerBadge: "OPENAI ACADEMY",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    issueDate: "September 25, 2026",
    expiryDate: "March 25, 2027",
    credentialId: "195236926",
    verifyUrl: "https://academy.openai.com",
    pdfUrl: "/certificates/openai-apply-ai-at-work.pdf",
    imageUrl: "/certificates/openai-apply-ai-at-work.png",
    description:
      "Rigorous certification pathway by OpenAI Academy covering frontier AI productivity, workplace automation, reasoning model prompting, and systematic evaluation. Completed all 3 courses with assessment scores of 80% or higher.",
    modulesOrSkills: [
      "Prompt Optimization",
      "Workplace Automation",
      "Context & Grounding",
      "Model Output Evaluation",
      "Scored >= 80% across all assessments"
    ]
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy (Digital Credential)",
    issuer: "IBM SkillsBuild",
    issuerBadge: "IBM SKILLSBUILD",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
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
    <main className="min-h-screen bg-[#0b0c0f] text-zinc-100 flex flex-col relative">
      <Header />

      {/* Hero section for Certificates */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Warm glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-4">
                <Award size={13} />
                <span>VERIFIED CREDENTIALS &amp; CERTIFICATIONS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
                Continuous Learning &amp; AI Standards
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
                Formal certifications completed across Google, OpenAI Academy, and IBM SkillsBuild.
                Combining self-taught systems engineering with verified industry programs in AI deployment, prompt optimization, and applied machine learning.
              </p>
            </div>

            {/* Quick summary tally */}
            <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl font-mono text-xs">
              <div className="text-center px-3 border-r border-zinc-800">
                <div className="text-2xl font-bold text-amber-400">3</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">ACCREDITED</div>
              </div>
              <div className="text-center px-3 border-r border-zinc-800">
                <div className="text-2xl font-bold text-emerald-400">8+</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">COURSES</div>
              </div>
              <div className="text-center px-3">
                <div className="text-2xl font-bold text-zinc-200">100%</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">VERIFIABLE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates List */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className="rounded-3xl bg-[#121419] border border-zinc-800/90 overflow-hidden shadow-xl hover:border-zinc-700/80 transition-all p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Certificate Visual Image */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div
                    className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/80 cursor-pointer aspect-[16/11]"
                    onClick={() => setSelectedImage(cert.imageUrl)}
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />

                    {/* Hover enlarge overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-zinc-200">
                      <Maximize2 size={16} className="text-amber-400" />
                      <span>Click to enlarge preview</span>
                    </div>
                  </div>

                  {/* Actions under image */}
                  <div className="flex items-center justify-between gap-3 text-xs font-mono pt-1">
                    <button
                      onClick={() => setSelectedImage(cert.imageUrl)}
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
                    >
                      <Maximize2 size={13} />
                      <span>Enlarge View</span>
                    </button>

                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
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
                      <span className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${cert.badgeColor}`}>
                        {cert.issuerBadge}
                      </span>

                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                        <Calendar size={13} className="text-zinc-500" />
                        <span>Issued: {cert.issueDate}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight mb-2">
                      {cert.title}
                    </h2>

                    <div className="text-xs font-mono text-zinc-400 mb-4">
                      ORGANIZATION: <span className="text-zinc-200 font-semibold">{cert.issuer}</span>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Modules / Skills Covered */}
                    <div className="mb-6">
                      <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400" />
                        <span>VERIFIED CURRICULUM &amp; SKILLS</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.modulesOrSkills.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-2.5 py-1 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verification Footer & CTA */}
                  <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {cert.credentialId && (
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-zinc-500">ID:</span>
                        <code className="font-mono text-xs text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          {cert.credentialId}
                        </code>
                        <button
                          onClick={() => handleCopyId(cert.id, cert.credentialId || "")}
                          className="p-1 text-zinc-500 hover:text-amber-400 transition-colors"
                          title="Copy Credential ID"
                        >
                          {copiedId === cert.id ? (
                            <Check size={13} className="text-emerald-400" />
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-medium transition-all group"
                      >
                        <ShieldCheck size={14} className="text-amber-400" />
                        <span>Verify Online</span>
                        <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-all"
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
