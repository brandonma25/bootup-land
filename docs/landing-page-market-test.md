# Boot Up Landing Page Market Test

## Purpose

Create a standalone landing page for validating whether people understand and want Boot Up as a daily intelligence product. This repository is separate from the existing Daily Intelligence Aggregator / Boot Up MVP and does not depend on that codebase.

## Target User Hypothesis

Globally minded operators, founders, product managers, investors, and ambitious professionals want a faster way to understand important developments without reading a large volume of generic news coverage.

## Positioning Hypothesis

Boot Up can stand apart from generic news apps by presenting concise signal cards that explain:

- what happened
- why it matters
- what led to this
- what it connects to

The hypothesis is that this structure communicates a clearer value proposition than "daily news" or "AI summaries" alone.

## Conversion Goal

The initial conversion goal is early-access intent: a visitor should understand the product quickly and request an invite or express interest in joining the first reader cohort.

## Out of Scope

- Supabase
- Auth
- OpenAI API
- News ingestion
- Editorial dashboard
- Signal generation backend
- Existing Daily Intelligence Aggregator code
- Existing app secrets or environment variables

## Vercel Deployment Notes

This is a standalone Next.js App Router application intended to deploy from the `main` branch of the connected GitHub repository. Vercel should auto-deploy after `main` is pushed if the project is already linked to this GitHub repo.

Use local validation first:

```bash
npm install
npm run lint
npm run build
```

Then run the development server and confirm the local landing page loads before relying on a Vercel preview or production deployment.
