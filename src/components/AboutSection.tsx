import Image from "next/image";
import Link from "next/link";
import { User, Compass, ArrowUpRight, Award } from "lucide-react";

interface AboutSectionProps {
  linkedinUrl: string;
}

export default function AboutSection({ linkedinUrl }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] mb-2">
              <User size={13} />
              <span>BACKGROUND &amp; LEARNING PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              About Me
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
            Informatics Engineering student pursuing applied AI engineering, systems development, and rigorous project evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4 shadow-xs">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                From Core Computing to Applied AI Systems
              </h3>

              <p>
                I am an Informatics Engineering (Teknik Informatika) student based in Indonesia with a strong commitment to becoming an AI Engineer. My initial software engineering background was built on data structures, web technologies, and relational databases. As modern generative models and machine learning advanced, I recognized that the most impactful engineering challenge lies in making models dependable, grounded, and usable in production software.
              </p>

              <p>
                Rather than treating language models as black-box magic or stopping at clever prompts, I focus on the engineering scaffolding that surrounds them: retrieval-augmented generation pipelines, local model execution via Ollama, structured schema validation with Pydantic, and evaluation metrics that catch hallucinations before users do.
              </p>
            </div>

            {/* Learning Philosophy Card */}
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-blue)] font-semibold mb-3">
                <Compass size={14} />
                <span>HOW I WORK &amp; LEARN</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[var(--accent-blue)] font-bold mt-0.5">01.</span>
                  <div>
                    <strong className="text-[var(--text-primary)]">Understand fundamentals first:</strong>{" "}
                    Study vector spaces, embedding similarities, and statistical classification before importing high-level frameworks.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-[var(--accent-blue)] font-bold mt-0.5">02.</span>
                  <div>
                    <strong className="text-[var(--text-primary)]">Build through real projects:</strong>{" "}
                    Theory becomes concrete when wrestling with latency budgets, hardware memory constraints, and messy datasets.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-[var(--accent-blue)] font-bold mt-0.5">03.</span>
                  <div>
                    <strong className="text-[var(--text-primary)]">Evaluate objectively:</strong>{" "}
                    Measure recall, precision, and context faithfulness with reproducible test sets rather than relying on intuitive &apos;vibes&apos;.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-[var(--accent-blue)] font-bold mt-0.5">04.</span>
                  <div>
                    <strong className="text-[var(--text-primary)]">Document trade-offs honestly:</strong>{" "}
                    Record current limitations and failure modes transparently so systems can be improved systematically.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile & Credentials Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-xs space-y-5">
              {/* Photo & Identity */}
              <div className="flex items-center gap-4 pb-4 border-b border-[var(--border-subtle)]">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-muted)] flex-shrink-0">
                  <Image
                    src="/raihan.jpg"
                    alt="Raihan Fradita Portrait"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">Raihan Fradita</h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono">Informatics Engineering Student</p>
                  <p className="text-xs text-[var(--accent-blue)] font-mono font-medium">Aspiring AI Engineer</p>
                </div>
              </div>

              {/* Attributes List */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">MAJOR</span>
                  <span className="text-[var(--text-primary)] font-medium">Informatics Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">LOCATION</span>
                  <span className="text-[var(--text-primary)]">Indonesia (UTC+7)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">GOAL</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AI Engineering Internships</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[var(--text-muted)]">LANGUAGES</span>
                  <span className="text-[var(--text-primary)]">Indonesian (Native), English</span>
                </div>
              </div>

              {/* Certificates Callout */}
              <Link
                href="/certificates"
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-muted)]/60 hover:bg-[var(--bg-muted)] transition-colors text-xs font-mono group"
              >
                <div className="flex items-center gap-2 text-[var(--text-primary)]">
                  <Award size={15} className="text-[var(--accent-blue)]" />
                  <span>3 Verified AI Certifications</span>
                </div>
                <ArrowUpRight size={13} className="text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors" />
              </Link>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full p-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-xs font-medium text-[var(--text-primary)] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
