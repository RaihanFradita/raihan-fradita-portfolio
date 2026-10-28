import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://raihan-fradita-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raihan Fradita | AI Engineer Portfolio",
    template: "%s | Raihan Fradita"
  },
  description:
    "Explore Raihan Fradita's AI engineering projects, including Waguri Framework for AI reliability and AIRA Business for AI-powered financial intelligence.",
  alternates: {
    canonical: "/"
  },
  applicationName: "Raihan Fradita Portfolio",
  keywords: [
    "Raihan Fradita",
    "AI Engineer Portfolio",
    "AI Reliability",
    "LLM Applications",
    "Financial Intelligence",
    "Python",
    "Elysia.js",
    "Next.js"
  ],
  authors: [{ name: "Raihan Fradita", url: "https://github.com/RaihanFradita" }],
  openGraph: {
    type: "website",
    title: "Raihan Fradita | AI Engineer Portfolio",
    description:
      "Explore Raihan Fradita's AI engineering projects, including Waguri Framework for AI reliability and AIRA Business for AI-powered financial intelligence.",
    siteName: "Raihan Fradita Portfolio",
    locale: "en_US",
    images: [{ url: "/raihan.jpg", alt: "Raihan Fradita" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Fradita | AI Engineer Portfolio",
    description:
      "Explore Raihan Fradita's AI engineering projects, including Waguri Framework for AI reliability and AIRA Business for AI-powered financial intelligence.",
    images: ["/raihan.jpg"]
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
