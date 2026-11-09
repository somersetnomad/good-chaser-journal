# Good Chaser — Journal source

Source of truth for the Good Chaser journal (https://goodchaser.noorintelligence.tech/journal).

The Vercel project `good-chaser` pulls these files in at build time via `scripts/fetch-journal.mjs`
(in the Vercel deployment), pinned to a commit SHA of this repo. To change a guide: edit the file in
`src/lib/journal/`, commit, then redeploy with the new SHA in `scripts/fetch-journal.mjs`.

- `src/lib/journal/*.ts` — the 45 guides, one file per category
- `src/lib/journal-data.ts` — exports `articles`, `findArticle`, `relatedArticles`, `mergedSlugs`
- `src/app/journal/[slug]/page.tsx` — guide template (meta tags, Article + Breadcrumb schema, related guides)
- `src/app/journal/page.tsx` — journal index
- `src/app/sitemap.ts` — sitemap with lastModified dates
- `next.config.ts` — security headers + 301s for the 7 merged guides (`mergedSlugs`)
- `src/app/layout.tsx` — site shell (header/footer); overrides the deployed copy, footer credits Noor Intelligence
