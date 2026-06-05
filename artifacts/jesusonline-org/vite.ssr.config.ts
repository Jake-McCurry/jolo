import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [preact()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  ssr: {
    noExternal: ["wouter"],
  },
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "dist/server",
    emptyOutDir: true,
    rollupOptions: {
      output: { format: "esm" },
    },
  },
});
