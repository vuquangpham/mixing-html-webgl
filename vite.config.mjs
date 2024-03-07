import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: false,

    /* https://stackoverflow.com/a/71190586 */
    rollupOptions: {
      output: {
        assetFileNames: `[hash][extname]`,
        chunkFileNames: `[hash].js`,
        entryFileNames: `[hash].js`,
      },
    },
  },

  // plugins
  plugins: [glsl()],

  // dev server
  server: {
    port: 8080,
  },
});
