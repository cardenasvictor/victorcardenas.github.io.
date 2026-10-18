import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://victorcardenas.org',
  trailingSlash: 'never',
  build: { format: 'file' },
});
