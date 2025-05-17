import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    tsconfigPaths(), // 📌 Поддержка путей из tsconfig.json
    visualizer(), // 📊 Генерирует отчет о размерах бандлов
  ],
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    strictPort: true,
    hmr: {
      overlay: false,
    },
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 📌 Упрощает импорт файлов из src/
      '@styles': path.resolve(__dirname, './src/styles'), // 🎨 Упрощает импорт стилей
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[local]' : '[hash:base64:5]',
      // 🎨 В dev-режиме классы читаемые, в prod — минифицированные
    },
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@import "@/styles/index.scss";`,
      //   // 🎨 Автоматически подключает глобальные SCSS-стили
      // },
    },
  },
  build: {
    target: 'esnext', // 🚀 Оптимизация под современные браузеры
    sourcemap: true, // 🛠️ Включает source maps для отладки
    minify: 'esbuild', // ⚡ Быстрая минимизация с esbuild
    chunkSizeWarningLimit: 1000, // ⚠️ Предупреждение при больших чанках (уменьшает шум)
    spaFallback: true, // ✅ SPA-режим (все пути редиректятся на index.html)
  },
  optimizeDeps: {},
  base: './', // 📌 Позволяет запускать приложение локально без проблем с путями
}));
