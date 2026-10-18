# victorcardenas.org

Static site built with [Astro](https://astro.build). No client framework; plain HTML/CSS output with ~1 KB of JS (mobile menu, scroll reveal).

## Edit content
All copy lives in `src/data/content.ts` — services, cases, metrics, research lines, bio, contact details. Pages read from it.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy
`dist/` is a plain static folder. Netlify, Cloudflare Pages, Vercel or GitHub Pages all work:
- Build command: `npm run build`
- Publish directory: `dist`

## Pending assets
- `public/images/portrait.jpg` — replace the SVG placeholder in `index.astro` and `about.astro`
- Contact form: wire `action` in `src/pages/contact.astro` to Formspree / Netlify Forms
- Real LinkedIn, Google Scholar and Calendly URLs in `src/data/content.ts`
