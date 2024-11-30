FROM node:lts-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 7171

CMD ["sh", "./start.sh"]