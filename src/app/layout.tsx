import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raihan-fradita-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raihan Fradita — Aspiring AI Engineer | LLM Applications · RAG · AI Agents",
    template: "%s | Raihan Fradita"
  },
  description:
    "Personal engineering portfolio of Raihan Fradita, an Informatics Engineering student focused on building practical AI applications, exploring machine learning, LLM-powered systems, RAG, and AI agents.",
  applicationName: "Raihan Fradita Portfolio",
  keywords: [
    "Raihan Fradita",
    "Aspiring AI Engineer",
    "Informatics Engineering",
    "LLM Applications",
    "RAG",
    "AI Agents",
    "Machine Learning",
    "scikit-learn",
    "Python",
    "FastAPI",
    "Next.js"
  ],
  authors: [{ name: "Raihan Fradita", url: "https://github.com/RaihanFradita" }],
  openGraph: {
    type: "website",
    title: "Raihan Fradita — Aspiring AI Engineer",
    description:
      "Informatics Engineering student building practical AI applications, exploring machine learning, LLM-powered systems, RAG, and AI agents.",
    siteName: "Raihan Fradita Portfolio",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Fradita — Aspiring AI Engineer",
    description: "Building AI Systems That Solve Real Problems. Projects, architecture, and code."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1014" }
  ],
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
