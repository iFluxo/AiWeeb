import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { site } from './src/config/site';

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
