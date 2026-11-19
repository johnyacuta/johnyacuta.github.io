import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [mdx(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
  },
});
