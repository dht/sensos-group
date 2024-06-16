import react from '@vitejs/plugin-react';
import path from 'path';
import analyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ANALYZE_BUNDLE = true;

const cwd = path.resolve(process.cwd(), '.');

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {},
      },
    },
    plugins: [
      tsconfigPaths({
        loose: true,
      }),
      react(),
      visualizer(),
    ],
    rollupOptions: {
      plugins: [ANALYZE_BUNDLE ? analyze() : null],
    },
    resolve: {
      alias: {},
    },
    define: {},
    server: {
      host: true,
      port: 3000,
      hmr: {
        overlay: false,
      },
    },
  };
});
