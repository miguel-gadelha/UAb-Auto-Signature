import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        autoSign: "src/services/auto-sign.tsx",
        index: "index.html",
      },
    },
  },
});
