# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A static Astro 7 site that publishes 電験二種 exam questions (secondary stage, and primary stage in progress), official answers and original explanations. Each question is one Markdown file (one 大問 per file). Deployed to Cloudflare Pages as plain static HTML (`dist/`). There is no SSR, database or auth. The docs (README, TODO.md, docs/) and all UI strings are in Japanese.

Node 24.13.0 (`.node-version`), npm ≥ 11. Dependencies are pinned exactly, and `katex` is forced to a single version through `overrides`. Keep it that way, because math validation relies on rehype-katex and direct KaTeX checks using the same version.

## Commands

```sh
npm ci
npm run dev                 # dev server on :4321, shows ALL questions (drafts too)
npm run build               # validate:content → clean dist → astro build → validate:output
npm run build:preview       # same, but builds every question into dist-preview/ (noindex, never deploy)
npm run check               # astro check (TypeScript strict)
npm run format:check        # prettier (question Markdown is excluded on purpose)
npm run validate:content    # schema/section/duplicate checks + KaTeX checks on src/content/questions
npm run validate:links      # internal links in built output (run after a build)
npm run test                # vitest, tests/unit/**/*.test.ts
npx vitest run tests/unit/math.test.ts          # single file
npx vitest run -t 'テスト名の一部'                # single test by name
npm run browsers:install    # Playwright chromium+webkit into node_modules (add `-- --with-deps` on Linux)
npm run test:e2e            # builds dist-preview, serves on :4322, runs desktop/Android/iPhone projects
```

Always build through the npm scripts and never call `astro build` directly. Running it directly skips validation and the output-directory reset, so HTML for withdrawn questions can be left behind. CI (`.github/workflows/ci.yml`) runs format:check, check, validate:content, test, build and test:e2e.

## Architecture

**Content pipeline.** `src/content.config.ts` defines the `questions` collection with a `glob` loader. The ID is the filename without `.md`, taken from `questionId()` in `src/lib/validation.ts`. It is a permanent ID, and frontmatter `slug` overrides are rejected. The Zod schema in `src/lib/schema.ts` is shared by Astro and the standalone `scripts/validate-*.ts`. Subjects and topic slugs come from `src/lib/taxonomy.ts`.

**Visibility.** All pages get their data from `getVisibleQuestions()` in `src/lib/questions.ts`. It re-reads each raw `.md` file from disk, because Content Collections normalises the trailing newline of `body` and the copy feature needs the exact original text. It then runs `validateQuestionSet()` and filters with `selectVisibleQuestions()` (`src/lib/visibility.ts`). A production build includes only `reviewStatus: published && sample: false`. Preview mode (`import.meta.env.DEV` or the `__CONTENT_PREVIEW__` define, which is set when `LOCAL_SAMPLE_PREVIEW=1`) includes everything. Detail pages, listings, year/subject/topic pages, related questions, the sitemap and diagram output must all use this one filter. `astro.config.ts` refuses to run a preview build when `CF_PAGES=1`.

**Section model.** The body must start with `## 問題`. The optional sections `## 解答`, `## 独自解説` and `## 関連知識` must appear in that order, and sub-headings use H3. `src/lib/markdown-export.ts` parses the body with remark and slices each H2 section out of the original source using AST offsets. Never use string splitting or re-serialise the Markdown, because the copy buttons must reproduce the source byte for byte (newlines and `$`/`$$` delimiters). `src/lib/render-section.ts` turns each sliced AST straight into HTML. Raw HTML and unsafe URL protocols are rejected at parse time. `parseMarkdown()` and the Astro processor both use `remark-cjk-friendly`, so `**…**` closes correctly before Japanese text after full-width punctuation (e.g. `**位相（…）**が`); keep the two plugin lists in sync.

**Math.** Inline math is `$...$` and display math is a `$$` block. Do not use ` ```math ` fences. `src/lib/math.ts` provides the KaTeX options (`trust: false`, strict), `remarkFormulaSources` (keeps the TeX in `data-tex`) and `rehypeAssertMath`. The site's Markdown processing is wired explicitly through `markdown.processor: unified(...)` in `astro.config.ts` (Astro 7 API). Any KaTeX error fails the build for every reviewStatus.

**AI explain links.** Each question page has "ChatGPTで解説" and "Claudeで解説" links built at build time by `buildAiLinks()` in `src/lib/ai-prompt.ts`. The prompt (question + official answer, with diagram paths made absolute) goes in `?q=`. URLs are capped at `maxAiUrlLength` (14,000, under Cloudflare's 16KB URL limit). If the full prompt does not fit, the link carries the question only. The full prompt is also shown in `#ai-prompt` and copied through the `prompt` key of the `#copy-sources` payload. `validate-output.ts` checks the links and prompt against the source.

**Articles.** Blog-style explainer articles live in `src/content/articles/*.md` (collection `articles`, schema `articleSchema` in `src/lib/schema.ts`, writing guide in `docs/ARTICLE-TEMPLATE.md`). Scope is 電験二種 study content only; no general IT/dev-log posts. Frontmatter `category` and `tags` are written as Japanese labels and transformed to slugs via the dictionaries in `src/lib/taxonomy.ts`; unknown labels fail the build. Because of that transform, `validateArticleSet()` (`src/lib/article-model.ts`) checks IDs, bodies and references but does not re-parse the schema. Visibility is `!draft && !sample`, applied through `getVisibleArticles()` (`src/lib/articles.ts`) everywhere: `/articles/` (`[...index].astro`, emitted only when at least one article is visible), `/articles/<id>/`, `/articles/category/<slug>/`, `/articles/tag/<slug>/`, the header link, home, question-page backlinks (`relatedQuestions`) and topic pages. Tag pages with fewer than `minIndexableTagArticles` (3) articles are `noindex, follow` and excluded from the sitemap (`thinTagRoutes()` in `astro.config.ts`). Article images live in `src/assets/article-images/<id>/` and are served at `/diagrams/articles/<id>/`; articles may also reference `/diagrams/questions/...`. SVG sources for article figures are in `assets/article-figures/<id>/*.svg`; `npm run generate:figures` renders them to those PNGs with Playwright (commit both). Article IDs `category` and `tag` are reserved.

**Diagrams.** Question PNGs live in `src/assets/question-diagrams/<year>/` and are referenced in Markdown as `/diagrams/questions/<year>/<name>.png`. `src/pages/diagrams/questions/[...image].png.ts` is a static endpoint that emits only the images referenced by visible questions (`questionDiagramFiles()` in `src/lib/question-diagrams.ts`), so draft figures never reach production. `public/diagrams/` is only for shared, publicly safe images.

**Output validation.** `scripts/validate-output.ts` checks the built HTML with cheerio: noindex/robots behaviour, that no non-public content leaked, and the AdSense snippet (it allows only the expected code and checks its count, placement and attributes, and that the publisher ID matches `public/ads.txt`). AdSense lives in `src/layouts/BaseLayout.astro`. It is emitted only on indexable production pages and never in dev, preview, 404 or with the placeholder origin. If you change the ad markup, update the validator too.

**Site URL.** `PUBLIC_SITE_URL` must be a bare HTTPS origin (`siteOrigin()` in `src/lib/site.ts`). While it is the placeholder `https://example.com`, every page is noindex and robots.txt is `Disallow: /`.

## Adding / editing questions

- Filenames are lowercase ASCII slugs such as `2026-secondary-power-management-q01.md` or `2026-primary-theory-q01.md`. Each subject in `src/lib/taxonomy.ts` has a `stage`: `theory` / `power` / `machine` / `law` are `primary`, `power-management` / `machine-control` are `secondary`, and the schema requires `examStage` to match. Subject and topic pages (and their links in `BrowseFilters`) are emitted only when they have visible questions. The combination of year, stage, subject, questionNumber and partNumber must be unique within real questions and, separately, within samples.
- `sourceName` and an HTTPS `sourceUrl` are required. `answerSourceUrl` is set when an official answer is transcribed. Dates are quoted `YYYY-MM-DD`, with `publishedAt ≤ updatedAt` and no future dates (JST).
- After changing the schema or taxonomy, restart `npm run dev`.
- Provenance for the PDF imports is in `docs/imports/*.json` (page/figure manifests with SHA-256 values) and in `docs/IMPORT-2017-2025.md` and `docs/IMPORT-2026.md`. `tests/unit/archive-import.test.ts` and `tests/unit/pdf-import.test.ts` check the content files against these manifests.

## Current state to be aware of

- The three fictional `sample-*.md` question files are fixtures for `content.test.ts` and `navigation.test.ts`, and the two `src/content/articles/sample-*.md` files are fixtures for `articles.test.ts` and `tests/e2e/articles.spec.ts`. Do not delete them.
- One real article is published (`complex-numbers-ac-circuits`).
- Local E2E: Astro auto-backgrounds `astro preview` when it detects an AI agent, which makes Playwright's webServer exit early. Run with `env -u CLAUDECODE -u CLAUDE_CODE_ENTRYPOINT -u AI_AGENT CI=1 PLAYWRIGHT_BROWSERS_PATH=0 npx playwright test` after `npm run build:preview`.
- All 140 real secondary questions (2013–2026) are `published`. The import tests (`archive-import.test.ts`, `pdf-import.test.ts`) assert this for 2017–2026.
- Primary stage: 2023–2026 are imported and `published` (30 files per year, see `docs/IMPORT-PRIMARY.md`). Blanks are written `［(1)］`, the answer group is `### 問Nの解答群`, and `## 解答` lists the official symbol plus the option text. The official site lists primary PDFs only for 2020–2026; older years need user-supplied PDFs. The PDFs' text layer drops Ω/Greek glyphs from CenturyOldstyle, so check math-heavy pages against page images.
- 2013–2016 (see `docs/IMPORT-2013-2016.md`) have no `docs/imports/*.json` manifest and no import test. They were published before a full check against the original PDFs.
