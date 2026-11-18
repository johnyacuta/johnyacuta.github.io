import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [mdx(), react()],
  };
});
