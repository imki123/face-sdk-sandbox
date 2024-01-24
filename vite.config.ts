import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // for github pages
  base: "/face-sdk-sandbox",
  server: {
    open: true,
    // port: 3000,
  },
  // for rollup error.
  // reference: https://vitejs.dev/blog/announcing-vite3.html#esbuild-deps-optimization-at-build-time-experimental
  optimizeDeps: {
    disabled: false,
  },
  build: {
    commonjsOptions: {
      include: [],
    },
  },
});
