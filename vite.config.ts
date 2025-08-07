import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

const repoName = 'vs'; // GitHub Pages repo name

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    // ✅ Used only in production (e.g., GitHub Pages)
    // base: isProduction ? `/${repoName}/` : '/',
    base: process.env.VITE_BASE_PATH || '/vs',


    server: {
      host: true,
      port: 8080,
    },

    plugins: [
      react(),
      !isProduction && componentTagger(),
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
        drop: ['console', 'debugger'], // Remove in production
      },
    },
  };
});
