let book = connect("127.0.0.1:27017/books");
let customer = connect("127.0.0.1:27017/customer");
let order = connect("127.0.0.1:27017/order");

book.books.insertMany([
  {
    _id: ObjectId("5f380bd326509c2b381f8c5c"),
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    numberPages: 250,
    publisher: "Amazing Reads",
    __v: 0,
  },
]);

customer.customers.insertMany([
  {
    _id: ObjectId("5f380bf52592f6162830adfe"),
    name: "Jack Ryan",
    age: 29,
    address: "Newyork",
    __v: 0,
  },
]);

order.orders.insertMany([
  {
    _id: ObjectId("5f380df62de32327548f7481"),
    customerId: ObjectId("5f380bf52592f6162830adfe"),
    bookId: ObjectId("5f380bd326509c2b381f8c5c"),
    initialDate: "2020-08-15T00:00:00.000Z",
    deliveryDate: "2020-08-16T00:00:00.000Z",
    __v: 0,
  },
]);
