 ## NEED TO UPDATE THIS LATER

FROM node:24.18.0

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["pnpm",  "--filter", "run", "start:prod"]