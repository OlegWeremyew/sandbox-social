FROM node:20-alpine AS dev

RUN corepack enable && corepack prepare yarn@1.22 --activate

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .


EXPOSE 7777

CMD ["yarn", "start:dev"]
