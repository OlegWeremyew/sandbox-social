import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({mode}) => ({
    plugins: [
        react(), // ✅ Подключаем React-плагин
    ],
    server: {
        port: 3333,
        open: true,
        strictPort: true,
        hmr: true, // 🔥 Включаем Hot Module Replacement (автообновление)
        cors: true, // 🛠️ Разрешаем CORS, если работаешь с API
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // ✅ Подключаем алиасы
            "@styles": path.resolve(__dirname, "./src/styles"), // 🎨 Алиас для стилей
        },
    },
    css: {
        modules: {
            generateScopedName: mode === "development" ? "[local]" : "[hash:base64:5]", // Без хэшей в dev-режиме
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/global.scss";`, // 🎨 Автозагрузка SCSS-переменных
            },
        },
    },
    build: {
        target: "esnext", // 🚀 Оптимизация для современных браузеров
        sourcemap: true, // 🛠️ Включает source maps для отладки в продакшене
        minify: "esbuild", // ⚡ Используем esbuild для быстрой сборки
        chunkSizeWarningLimit: 1000, // ⚠️ Избавляемся от ворнингов по размеру чанков
    },
    optimizeDeps: {
        include: ["react", "react-dom"], // 🚀 Предварительная оптимизация зависимостей
        exclude: ["some-heavy-library"], // ❌ Исключаем тяжелые библиотеки из pre-bundling
    },
}))
