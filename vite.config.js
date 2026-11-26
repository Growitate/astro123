import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 2626,
    strictPort: true,
    allowedHosts: ['astro123.cyberpunk.co.in'],
  },
  preview: {
    host: true,
    port: 2626,
    allowedHosts: ['astro123.cyberpunk.co.in'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    sourcemap: false,
  },
});
