const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

require("./order.model.js");
const Order = mongoose.model("orders");

const url = process.env.MONGO_URL || "mongodb://mongo:27017/order";

const bookUrl = process.env.BOOK_URL || "http://book:3000/book/";
const customerUrl =
  process.env.CUSTOMER_URL || "http://customer:4000/customer/";

console.log(url, bookUrl, customerUrl);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with OrderService");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("This is order service");
});

app.post("/order", (req, res) => {
  const newOrder = {
    customerId: mongoose.Types.ObjectId(req.body.customerId),
    bookId: mongoose.Types.ObjectId(req.body.bookId),
    initialDate: req.body.initialDate,
    deliveryDate: req.body.deliveryDate,
  };
  const order = new Order(newOrder);
  order
    .save()
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400).send("Order could not be placed");
      }
    })
    .catch((err) => res.send(err));
});

app.get("/orders", (req, res) => {
  Order.find()
    .then((orders) => {
      if (orders) {
        res.status(200).send(orders);
      } else {
        res.send("No orders placed");
      }
    })
    .catch((err) => res.send(err));
});

app.get("/order/:id", (req, res) => {
  Order.findById(req.params.id)
    .then(async (order) => {
      if (order) {
        const orderObj = {
          id: order.id,
          initialDate: order.initialDate,
          deliveryDate: order.deliveryDate,
          customerName: "",
          bookTitle: "",
        };
        await axios
          .get(customerUrl + order.customerId)
          .then((customer) => {
            orderObj.customerName = customer.data.name;
          })
          .catch(() => res.send("Invalid customer id"));

        await axios
          .get(bookUrl + order.bookId)
          .then((book) => {
            orderObj.bookTitle = book.data.title;
          })
          .catch(() => res.send("Invalid book id"));
        res.status(200).send(orderObj);
      } else {
        res.status(404).send("No order found with given id");
      }
    })
    .catch((err) => res.send(err.message));
});

app.delete("/order/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => {
      if (order) {
        res.status(200).send(order);
      } else {
        res.status(404).send("No such order to delete");
      }
    })
    .catch((err) => res.send(err.message));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running order service");
});
