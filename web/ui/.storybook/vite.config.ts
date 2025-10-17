import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from '../postcss.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
});
