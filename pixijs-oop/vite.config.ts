import { defineConfig } from "vite"
import * as path from "path"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(() => ({
  plugins: [
    tsconfigPaths(), // 📌 Поддержка путей из tsconfig.json
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true,
    strictPort: true,
    hmr: {
      overlay: false,
    },
    cors: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 📌 Упрощает импорт файлов из src/
    },
  },
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 1000,
    spaFallback: true,
  },
  base: "./",
}))
