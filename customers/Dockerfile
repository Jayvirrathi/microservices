FROM node:13.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "customer.js" ]