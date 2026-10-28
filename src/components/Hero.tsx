import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

const coreTechnologies = [
  "AI Engineering",
  "Large Language Models (LLMs)",
  "AI Reliability",
  "Full-Stack AI Applications"
];

export default function Hero({ githubUrl, linkedinUrl, email }: HeroProps) {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Professional Label Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs text-[var(--text-secondary)] mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="font-mono font-medium text-[11px] tracking-wide text-[var(--text-primary)]">
                Aspiring AI Engineer
              </span>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="text-[var(--text-muted)] text-[11px]">Informatics Engineering Student</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15] mb-6">
              Building AI Systems with{" "}
              <span className="text-[var(--accent-blue)]">Reliability and Real-World Applications.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
              I&apos;m an Informatics student exploring AI engineering, large language models, and full-stack development. I build practical AI projects focused on reliable LLM outputs and AI-assisted financial intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs active:translate-y-px"
              >
                <span>Explore Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] text-xs font-medium transition-colors"
              >
                <Github size={14} />
                <span>View GitHub</span>
                <ArrowUpRight size={13} className="text-[var(--text-muted)]" />
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-colors"
                title={`Send email to ${email}`}
              >
                <Mail size={14} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Restrained Technology Summary */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs font-mono text-[var(--text-muted)] pt-6 border-t border-[var(--border-color)] w-full">
              <span className="text-[var(--text-secondary)] font-semibold uppercase text-[10px] tracking-wider">
                SPECIALIZATIONS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {coreTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[var(--bg-muted)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Clean Profile Photo Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-4 shadow-sm">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[var(--bg-muted)] border border-[var(--border-subtle)] mb-4">
                <Image
                  src="/raihan.jpg"
                  alt="Raihan Fradita - Aspiring AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[var(--text-primary)]">Raihan Fradita</h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    Active Learner
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Undergraduate student in Informatics Engineering pursuing applied AI and systems integration.
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
                  <span>Based in Indonesia</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                      className="hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className="hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
