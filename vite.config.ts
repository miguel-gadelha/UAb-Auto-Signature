import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { copy } from "vite-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConfigs = {
    plugins: [
      preact(),
      copy({
        copyList: [{ src: "./manifest.json", dest: "./dist" }],
      }),
    ],
  };

  if (mode === "index") {
    return {
      ...baseConfigs,
      build: {
        rollupOptions: {
          input: {
            index: "index.html",
          },
          output: {
            entryFileNames: (chunkInfo) => {
              return "assets/[name]-[hash].js";
            },
          },
        },
      },
    };
  }

  if (mode === "autoSign") {
    return {
      ...baseConfigs,
      build: {
        emptyOutDir: false,
        rollupOptions: {
          input: {
            autoSign: "src/services/auto-sign.tsx",
          },
          output: {
            entryFileNames: (chunkInfo) => {
              if (chunkInfo.name === "autoSign") {
                return "assets/auto-sign.js";
              }
              return "assets/[name]-[hash].js";
            },
          },
        },
      },
    };
  }
});
