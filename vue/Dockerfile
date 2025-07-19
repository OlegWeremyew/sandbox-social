# 🏗 Stage 1: Development base image
FROM node:20-alpine AS dev

RUN corepack enable && corepack prepare yarn@1.22 --activate

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8888

# CMD ["sh", "-c", "VITE_DEV_SERVER_HOST=0.0.0.0 yarn run dev"]
CMD ["sh", "-c", "yarn run dev"]