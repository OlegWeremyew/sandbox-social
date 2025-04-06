# Используем официальный Node.js образ для сборки
FROM node:22-alpine AS build

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем только package.json и package-lock.json
COPY package*.json ./

# Устанавливаем все зависимости приложения
RUN npm install

# Копируем все исходные файлы приложения в контейнер
COPY ./src ./src
COPY ./public ./public

# Строим приложение (собираем статические файлы)
RUN npm run build

# Используем тот же образ Node.js для продакшн-окружения
FROM node:22-alpine AS production

# Устанавливаем рабочую директорию в /app
WORKDIR /app

# Копируем только скомпилированные файлы (из build)
COPY --from=build /app/build /app/build

# Устанавливаем глобально инструмент serve для обслуживания статики
RUN npm install -g serve

# Открываем порт 3000 для доступа
EXPOSE 3000

# Запускаем сервер для раздачи скомпилированных файлов
CMD ["serve", "-s", "build", "-l", "3000"]
