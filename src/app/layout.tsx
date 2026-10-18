import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raihan Fradita — AI Engineer & Systems",
    template: "%s | Raihan Fradita"
  },
  description:
    "Raihan Fradita builds production AI systems with hybrid RAG pipelines, deterministic agent workflows, continuous evals, Python, and modern web architectures.",
  applicationName: "Raihan Fradita Portfolio",
  keywords: [
    "Raihan Fradita",
    "AI Engineer",
    "RAG",
    "Vector Search",
    "pgvector",
    "LLM Evals",
    "AI Agents",
    "Python",
    "FastAPI",
    "Next.js"
  ],
  openGraph: {
    type: "website",
    title: "Raihan Fradita — AI Engineer & Systems",
    description:
      "Hybrid RAG architectures, compound AI agent workflows, and deterministic evaluation loops.",
    siteName: "Raihan Fradita"
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Fradita — AI Engineer & Systems",
    description: "Hybrid RAG, compound AI workflows, and deterministic evals."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0b0c0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0b0c0f] text-zinc-100 antialiased selection:bg-amber-400/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
