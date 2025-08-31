import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Use default esbuild minification (fast and efficient)
    // minify: 'esbuild' — this is default, so you can omit it
    sourcemap: false, // Set to true if you need source maps in production
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
});