import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

const repoName = 'vs'; // GitHub repo name

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`,
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    mode !== 'production' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    target: 'esnext',
    esbuild: {
      drop: ['console', 'debugger'], // ✅ Optional cleanup
    },
  },
}));
