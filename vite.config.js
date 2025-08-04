import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/blog/', // for GitHub Pages deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});