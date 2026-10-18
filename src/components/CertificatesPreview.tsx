"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface CertificatePreviewItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  badgeColor: string;
  date: string;
  image: string;
  skills: string[];
}

const previewCerts: CertificatePreviewItem[] = [
  {
    id: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google & Coursera",
    issuerBadge: "GOOGLE CERTIFIED",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    date: "Oct 2026",
    image: "/certificates/google-ai-professional-certificate.png",
    skills: ["8 Courses Completed", "20+ AI Artifacts", "Custom AI Solution"]
  },
  {
    id: "openai-apply-ai",
    title: "Apply AI at Work — Pathway Completion",
    issuer: "OpenAI Academy",
    issuerBadge: "OPENAI ACADEMY",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    date: "Sep 2026",
    image: "/certificates/openai-apply-ai-at-work.png",
    skills: ["Scored >= 80% on all assessments", "Prompt Engineering", "Workplace AI"]
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy (Digital Credential)",
    issuer: "IBM SkillsBuild",
    issuerBadge: "IBM SKILLSBUILD",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    date: "Sep 2026",
    image: "/certificates/ibm-ai-literacy.png",
    skills: ["Enterprise ML Foundations", "AI Ethics", "Data Readiness"]
  }
];

export default function CertificatesPreview() {
  return (
    <section className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2.5">
              <Award size={13} />
              <span>ACCREDITATION &amp; PROVEN KNOWLEDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Verified AI Certifications
            </h2>
          </div>

          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 border border-zinc-800 hover:border-amber-400/40 text-xs font-mono transition-all group"
          >
            <span>View All Credentials &amp; Proofs</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewCerts.map((cert) => (
            <Link
              key={cert.id}
              href="/certificates"
              className="group rounded-2xl bg-[#121419] border border-zinc-800 hover:border-zinc-700/80 transition-all p-5 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Certificate Thumbnail */}
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-zinc-850 bg-zinc-950 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 font-mono text-[10px] bg-zinc-900/90 border border-zinc-700/60 px-2 py-0.5 rounded text-zinc-300">
                    {cert.date}
                  </div>
                </div>

                {/* Badge & Title */}
                <div className="mb-2">
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                    {cert.issuerBadge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-100 group-hover:text-amber-300 transition-colors mb-1 tracking-tight">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mb-4">
                  {cert.issuer}
                </div>

                {/* Key Skills */}
                <div className="space-y-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-1.5 text-xs text-zinc-300">
                      <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-amber-400 transition-colors">
                <span>Inspect Certificate</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
