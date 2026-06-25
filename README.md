# BloomFlyWebsite

Static marketing website repository for the Bloom & Fly mobile app.

This repository is separate from the `BloomFlyApp` mobile application repository. It contains the static Astro marketing website for Bloom & Fly.

## Current Status

Current scope:

- Astro static site scaffold
- npm scripts for local development, build, and preview
- GitHub Actions workflow for GitHub Pages deployment
- FR/EN landing pages
- FR/EN discover, about, and contact pages
- FR/EN legal pages migrated from the current WordPress render
- SEO metadata, Open Graph image, sitemap, robots.txt, custom 404, and legacy alias redirects

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Hosting

The workflow in `.github/workflows/deploy.yml` builds `dist/` on pushes to `main` and deploys to GitHub Pages when the repository is public.

Custom domain setup for `bloomandflyapp.com` is not switched here. DNS and GitHub Pages custom-domain activation must be approved separately.

## Product Constraints

- No backend
- No CMS
- No newsletter or waitlist form
- No analytics, cookies, or third-party scripts without explicit approval
- Preserve public-critical URLs and legal pages during migration
- Do not change legal wording without explicit legal/content review
