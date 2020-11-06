FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "customer.js" ]