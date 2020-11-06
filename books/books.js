const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

require("./book.model.js");
const Book = mongoose.model("books");
const url = process.env.MONGO_URL || "mongodb://mongo:27017/books";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with Book");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("This is books service");
});

app.post("/book", (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/books", (req, res) => {
  Book.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/book/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (book) {
        res.status(200).send(book);
      } else {
        res.status(404).send("No such book found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/book/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      if (book) {
        res.status(200).send(book);
      } else {
        res.status(404).send("No book found");
      }
    })
    .catch((err) => res.status(400).send(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running books service");
});
