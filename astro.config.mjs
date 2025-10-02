import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lucadelavia.dev',
  integrations: [],
  vite: {
    css: {
      devSourcemap: true
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  experimental: {
    contentCollectionCache: true
  }
});
