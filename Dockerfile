FROM node:12.4.0-alpine

WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install

COPY index.js ./index.js
COPY index.html ./index.html

EXPOSE 3000
CMD ["yarn", "start"]