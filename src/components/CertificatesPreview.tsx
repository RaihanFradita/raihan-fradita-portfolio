import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, CheckCircle } from "lucide-react";

interface CertificatePreviewItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  badgeStyle: string;
  date: string;
  image: string;
  keyPoints: string[];
}

const previewCerts: CertificatePreviewItem[] = [
  {
    id: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google & Coursera",
    issuerBadge: "GOOGLE CERTIFIED",
    badgeStyle: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    date: "Oct 2026",
    image: "/certificates/google-ai-professional-certificate.png",
    keyPoints: ["8 Courses Completed", "20+ Artifacts Built", "Prompting & App Deployment"]
  },
  {
    id: "openai-apply-ai",
    title: "Apply AI at Work — Pathway Certificate",
    issuer: "OpenAI Academy",
    issuerBadge: "OPENAI ACADEMY",
    badgeStyle: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    date: "Sep 2026",
    image: "/certificates/openai-apply-ai-at-work.png",
    keyPoints: ["Credential ID: 195236926", "Score >= 80% on All Assessments", "Workplace Automation"]
  },
  {
    id: "ibm-ai-literacy",
    title: "AI Literacy (Digital Credential)",
    issuer: "IBM SkillsBuild",
    issuerBadge: "IBM SKILLSBUILD",
    badgeStyle: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    date: "Sep 2026",
    image: "/certificates/ibm-ai-literacy.png",
    keyPoints: ["Plan: PLAN-1C903152880C", "Enterprise ML Concepts", "AI Ethics & Data Readiness"]
  }
];

export default function CertificatesPreview() {
  return (
    <section className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <Award size={13} />
              <span>ACCREDITATION &amp; CONTINUOUS LEARNING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Verified Certifications
            </h2>
          </div>

          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] text-xs font-mono font-medium transition-colors group"
          >
            <span>View All Certificates &amp; Verification Proofs</span>
            <ArrowRight size={13} className="text-[var(--text-muted)] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewCerts.map((cert) => (
            <Link
              key={cert.id}
              href="/certificates"
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)] transition-colors p-5 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Certificate Thumbnail */}
                <div className="relative aspect-[16/11] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-muted)] mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 font-mono text-[10px] bg-[var(--bg-surface)]/90 border border-[var(--border-color)] px-2 py-0.5 rounded text-[var(--text-secondary)] shadow-xs">
                    {cert.date}
                  </div>
                </div>

                {/* Badge & Title */}
                <div className="mb-2">
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${cert.badgeStyle}`}>
                    {cert.issuerBadge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-[var(--text-muted)] mb-4">
                  {cert.issuer}
                </div>

                {/* Key Points */}
                <div className="space-y-1.5 mb-4">
                  {cert.keyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle size={12} className="text-[var(--accent-blue)] flex-shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors">
                <span>View Full Details &amp; PDF</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
