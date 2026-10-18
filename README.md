# Raihan Fradita — AI Engineer Portfolio

A responsive, dark editorial portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4. The visual styling is custom CSS rather than a generic component template.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

Update the following environment variables (or replace the fallback values in `src/app/page.tsx`):

```bash
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
NEXT_PUBLIC_EMAIL=your-real-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/yourusername
```

Also update:

1. The project cards with repository links, real screenshots, and verified contributions.
2. The illustrative project visuals. They are intentionally labeled as illustrative in the current draft and are not product screenshots.
3. The About section if you want to add verified achievements, certifications, or experience.
4. Open Graph preview artwork if you add a social sharing image.

Do not claim model scores, production deployment, customer results, or experience unless you can substantiate them.

## Build for production

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

Import the repository into Vercel, set the environment variables above, and deploy. The project uses Next.js defaults and does not require a database or API secrets.

## SEO

Metadata, Open Graph fields, a robots route, and a sitemap route are included. Replace the `https://example.com` fallback with your real canonical domain before launch.
