FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
