import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compress';

export default defineConfig({
  plugins: [
    react(),
    compress({
      brotli: true, // Enables Brotli compression
      gzip: true    // Enables Gzip compression
    })
  ]
});
