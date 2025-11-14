import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Clean config that works everywhere (Vercel, Netlify, GitHub Pages)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
