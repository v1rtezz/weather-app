import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const COMPRESSION_QUALITY = 75;

export default defineConfig({
  root: "./",
  base: "./",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
  plugins: [
    ViteImageOptimizer({
      png: { quality: COMPRESSION_QUALITY },
      jpeg: { quality: COMPRESSION_QUALITY },
      jpg: { quality: COMPRESSION_QUALITY },
    }),
  ],
});
