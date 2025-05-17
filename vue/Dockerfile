FROM node:20-alpine AS build

RUN corepack enable && corepack prepare yarn@1.22 --activate

WORKDIR /app

# Копируем только yarn-файлы для установки зависимостей
COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8888

CMD ["sh", "-c", "VITE_DEV_SERVER_HOST=0.0.0.0 yarn run start:dev"]
