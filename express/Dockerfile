FROM node:20-alpine AS build

RUN npm install -g yarn@1.22

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5555

CMD ["sh", "-c", "VITE_DEV_SERVER_HOST=0.0.0.0 yarn run start:dev"]
