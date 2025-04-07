FROM node:22-alpine AS build

WORKDIR /app

# Копируем только yarn-файлы для установки зависимостей
COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "VITE_DEV_SERVER_HOST=0.0.0.0 yarn run start:dev"]
