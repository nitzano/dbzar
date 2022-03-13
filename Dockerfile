FROM node:lts as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build:prod


FROM node:lts-alpine as prod

ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn

COPY --from=builder /app/dist ./dist

ENTRYPOINT ["yarn", "start"]
CMD ["help"]
