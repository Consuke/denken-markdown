import type { APIRoute } from 'astro';
import { isContentPreview } from '../lib/questions';

export const GET: APIRoute = ({ site }) =>
  new Response(
    isContentPreview || site?.hostname === 'example.com'
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
