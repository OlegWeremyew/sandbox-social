import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(), // ✅ Подключаем React-плагин
    tsconfigPaths(),
    visualizer(),
  ],
  server: {
    port: 3333,
    open: true,
    strictPort: true,
    hmr: {
      overlay: false, // Отключает overlay ошибок
    },
    cors: true, // 🛠️ Разрешаем CORS, если работаешь с API
    historyApiFallback: true, // ✅ Перенаправляет запросы в index.html
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Подключаем алиасы
      '@styles': path.resolve(__dirname, './src/styles'), // 🎨 Алиас для стилей
    },
  },
  css: {
    modules: {
      generateScopedName: mode === 'development' ? '[local]' : '[hash:base64:5]', // Без хэшей в dev-режиме
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // 🎨 Автозагрузка SCSS-переменных
      },
    },
  },
  build: {
    target: 'esnext', // 🚀 Оптимизация для современных браузеров
    sourcemap: true, // 🛠️ Включает source maps для отладки в продакшене
    minify: 'esbuild', // ⚡ Используем esbuild для быстрой сборки
    chunkSizeWarningLimit: 1000, // ⚠️ Избавляемся от ворнингов по размеру чанков
    spaFallback: true, // ✅ Позволяет Vite работать как SPA
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // 🚀 Предварительная оптимизация зависимостей
    exclude: ['some-heavy-library'], // ❌ Исключаем тяжелые библиотеки из pre-bundling
  },
  base: './',
}));
