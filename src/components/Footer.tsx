import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export default function Footer({ githubUrl, linkedinUrl, email }: FooterProps) {
  return (
    <footer className="py-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-muted)] font-mono text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center text-[10px] font-bold">
            RF
          </div>
          <span className="text-[var(--text-primary)] font-semibold">Raihan Fradita</span>
          <span className="text-[var(--border-color)]">/</span>
          <span className="text-[var(--text-muted)] text-[11px]">ASPIRING AI ENGINEER</span>
        </div>

        <div className="text-center sm:text-left text-[var(--text-muted)] text-[11px]">
          Built with Next.js, TypeScript &amp; Tailwind CSS. &copy; {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-[var(--text-primary)] transition-colors"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail size={15} />
          </a>
          <a
            href="#top"
            className="p-1 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--bg-muted)] text-[var(--text-primary)] transition-colors ml-2"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
