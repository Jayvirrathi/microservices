FROM node:13.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "node", "orders.js" ]