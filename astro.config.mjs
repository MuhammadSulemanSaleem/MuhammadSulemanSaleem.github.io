import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://muhammadsulemansaleem.github.io',
  integrations: [sitemap()],
});
