import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const sansCommentaires = {
  name: "sans-commentaires",
  enforce: "post",
  generateBundle(options, bundle) {
    for (const fichier of Object.values(bundle)) {
      if (fichier.type === "chunk") {
        fichier.code = fichier.code.replaceAll(/\/\* [#@]__[A-Z_]+__ \*\/ ?/g, "");
      }
    }
  },
};

export default defineConfig({
  plugins: [react(), sansCommentaires],
  root: path.resolve(__dirname, ".."),
  base: "/",
  css: { postcss: __dirname },
  publicDir: "static",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  build: {
    outDir: "public",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "bibliotheques";
        },
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
