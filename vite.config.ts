// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vite-react-typescript-starter/', // ← Only if deploying to a subpath (like repo name)
  // Remove this line if you don't need it:
  // optimizeDeps: { exclude: ['lucide-react'] },
});