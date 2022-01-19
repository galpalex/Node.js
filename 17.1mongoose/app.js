const mongoose = require("mongoose");
const createProducts = require("./utils/utils");

mongoose.connect(
  "mongodb://127.0.0.1:27017/e-commerce",
  () => {
    console.log("connected");
    createProducts();
  },
  (e) => console.error(e)
);
