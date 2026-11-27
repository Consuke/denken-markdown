import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkCjkFriendly from 'remark-cjk-friendly';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import {
  katexOptions,
  remarkFormulaSources,
  rehypeAssertMath,
} from './src/lib/math';
import { siteOrigin } from './src/lib/site';
import { thinTagRoutes } from './src/lib/content-files';

const preview = process.env.LOCAL_SAMPLE_PREVIEW === '1';
const env = loadEnv(
  process.env.NODE_ENV || 'production',
  process.cwd(),
  'PUBLIC_',
);
if (preview && process.env.CF_PAGES === '1')
  throw new Error('サンプルプレビュービルドはCloudflare Pagesに配置できません');

// 記事の少ないタグページはnoindexにするため、サイトマップにも載せない。
const excludedFromSitemap = new Set([
  '/404.html',
  '/404/',
  ...(preview ? [] : await thinTagRoutes()),
]);

export default defineConfig({
  site: siteOrigin(process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL),
  output: 'static',
  outDir: preview ? './dist-preview' : './dist',
  trailingSlash: 'always',
  compressHTML: false,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkCjkFriendly, remarkMath, remarkFormulaSources],
      rehypePlugins: [[rehypeKatex, katexOptions], rehypeAssertMath],
    }),
  },
  vite: { define: { __CONTENT_PREVIEW__: JSON.stringify(preview) } },
  integrations: preview
    ? []
    : [
        sitemap({
          filter: (page) => !excludedFromSitemap.has(new URL(page).pathname),
        }),
      ],
  devToolbar: { enabled: false },
});
