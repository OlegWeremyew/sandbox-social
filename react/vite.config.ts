import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(), // ✅ Подключаем React-плагин
    tsconfigPaths(), // 📌 Поддержка путей из tsconfig.json
    visualizer(), // 📊 Генерирует отчет о размерах бандлов
  ],
  server: {
    port: 3333, // 📌 Порт для dev-сервера
    open: true, // 🔄 Автоматически открывает браузер при запуске
    strictPort: true, // 🚨 Если порт занят — не переключается на другой
    hmr: {
      overlay: false, // ❌ Отключает всплывающее окно ошибок на экране
    },
    cors: true, // 🛠️ Разрешает CORS (полезно для работы с API)
    historyApiFallback: true, // 🔄 Перенаправляет все запросы на index.html (SPA)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 📌 Упрощает импорт файлов из src/
      '@styles': path.resolve(__dirname, './src/styles'), // 🎨 Упрощает импорт стилей
    },
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
  optimizeDeps: {
    include: ['react', 'react-dom'], // 🚀 Предварительная оптимизация зависимостей
    // exclude: ['some-heavy-library'], // ❌ Исключает тяжелые библиотеки из pre-bundling
  },
  base: './', // 📌 Позволяет запускать приложение локально без проблем с путями
}));
