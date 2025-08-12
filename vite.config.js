import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/blog/', // for GitHub Pages deployment
  assetsInclude: ['**/*.html'], // Include HTML files as assets
  define: {
    global: 'globalThis',
    Buffer: ['buffer', 'Buffer'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['buffer', 'gray-matter'],
  },
});