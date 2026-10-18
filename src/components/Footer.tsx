import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export default function Footer({ githubUrl, linkedinUrl, email }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800/80 py-12 bg-[#0c0d10] text-zinc-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-amber-400">
            rf
          </div>
          <span className="text-zinc-300 font-semibold">Raihan Fradita</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500 text-[11px]">AI SYSTEMS &amp; RAG ENGINEERING</span>
        </div>

        <div className="text-center md:text-left text-zinc-500 text-[11px]">
          Crafted with care, coffee &amp; verifiable benchmarks. &copy; {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors"
            title="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-amber-400 transition-colors"
            title="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href="#top"
            className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all ml-2"
            title="Back to Top"
          >
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

