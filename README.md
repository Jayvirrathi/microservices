# Express Microservice API Starter with MongoDB

Includes API Server utilities:

- [concurrently](https://www.npmjs.com/package/concurrently)
  - Promise based HTTP client for the browser and node.js
- [axios](https://www.npmjs.com/package/axios)
  - Run multiple commands concurrently
- [mongoose](https://www.npmjs.com/package/mongoose)
  - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment
- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Setup

```
npm install
```

## Start

```
npm run start
```

## Development

```
npm run dev
```

## Docker

### comment all variables in envs for docker build
```
docker-compose up --build
```