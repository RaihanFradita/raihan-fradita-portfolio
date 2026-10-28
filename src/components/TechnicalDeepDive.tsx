import { ArrowRight, Check, CircleHelp, Code2, ScanSearch } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Question and context",
    description:
      "WaguriClient.answer builds a prompt from the question and any evidence supplied by the caller.",
    icon: CircleHelp
  },
  {
    number: "02",
    title: "Model adapter",
    description:
      "The client calls the ModelAdapter.generate interface. The repository currently includes a demo adapter.",
    icon: Code2
  },
  {
    number: "03",
    title: "Exact evidence check",
    description:
      "The current checker compares normalized text for an exact match; it does not determine semantic support.",
    icon: ScanSearch
  },
  {
    number: "04",
    title: "Reviewable result",
    description:
      "The client returns structured claim and evidence data and keeps the overall response marked needs_review.",
    icon: Check
  }
];

export default function TechnicalDeepDive() {
  return (
    <section id="deep-dive" className="border-b border-[var(--border-color)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-[var(--accent-blue)]">
              <Code2 size={13} aria-hidden="true" />
              <span>WAGURI FRAMEWORK</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
              A small, inspectable validation loop
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            The current implementation is intentionally modest: it provides a basic evidence signal for review, not a guarantee of factual correctness.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li
                key={stage.number}
                className="relative rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-xs"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--accent-blue)]">{stage.number}</span>
                  <Icon size={16} aria-hidden="true" className="text-[var(--text-muted)]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">{stage.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{stage.description}</p>
                {index < stages.length - 1 && (
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="absolute -right-2.5 top-6 z-10 hidden text-[var(--text-muted)] lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
