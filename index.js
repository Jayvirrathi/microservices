let book = connect("127.0.0.1:27017/books");
let customer = connect("127.0.0.1:27017/customer");
let order = connect("127.0.0.1:27017/order");

book.books.insertMany([
  {
    _id: "5f353ed5e03f2d2842505e36",
    title: "Python for beginners",
    author: "Andrew",
    numberPages: 400,
    publisher: "Oceans publication",
    __v: 0,
  },
  {
    _id: "5f353f1ae03f2d2842505e37",
    title: "Wings of fire",
    author: "APJ Abdul Kalam",
    __v: 0,
  },
]);

customer.customers.insertMany([
  {
    _id: "5f362782b88ba245b0245672",
    name: "Jack Ryan",
    age: 29,
    address: "Street 3113",
    __v: 0,
  },
  {
    _id: "5f36288ff6dc474710e9f643",
    name: "Clay Jenson",
    age: 23,
    address: "140 Evergreen Street",
    __v: 0,
  },
  {
    _id: "5f3628daf6dc474710e9f645",
    name: "Lara Senior",
    age: 17,
    address: "Long Beach, CA 78789",
    __v: 0,
  },
]);

order.orders.insertMany([
  {
    _id: "5f364626efd225024c2bfcaa",
    customerId: "5f36288ff6dc474710e9f643",
    bookId: "5f353ed5e03f2d2842505e36",
    initialDate: "2019-05-21T00:00:00.000Z",
    deliveryDate: "2019-05-25T00:00:00.000Z",
    __v: 0,
  },
  {
    _id: "5f36484f1350720bbb8744a2",
    customerId: "5f362782b88ba245b0245672",
    bookId: "5f353ed5e03f2d2842505e36",
    initialDate: "2019-01-10T00:00:00.000Z",
    deliveryDate: "2019-01-15T00:00:00.000Z",
    __v: 0,
  },
]);
