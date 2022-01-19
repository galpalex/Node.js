const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const productArray = require("./products");

mongoose.connect(
  "mongodb://127.0.0.1:27017/e-commerce",
  () => {
    console.log("connected");
    createProducts();
  },
  (e) => console.error(e)
);

const createProducts = async () => {
  try {
    const products = await Product.create(productArray);
    console.log(products);
  } catch (err) {
    console.log(err.message);
  }
};

const Product = mongoose.model(
  "Product",
  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    details: {
      description: {
        type: String,
        required: true,
        minLength: 10,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        validate(value) {
          if (value < 0) {
            throw new Error("Price must be a positive number");
          }
        },
      },
      discount: {
        type: Number,
        default: 0,
      },
      images: {
        type: Array,
        validate(value) {
          if (value.length < 2) {
            throw new Error("Must include at least two images");
          }
        },
      },
      phoneNumber: {
        type: String,
        required: true,
        validate(value) {
          if (!validator.isMobilePhone(value, ["he-IL"])) {
            throw new Error("Invalid Phone Number");
          }
        },
      },
      dateAdded: {
        type: Date,
        default: Date.now,
      },
    },
  })
);

//add one item
// const monitor = new Product({
//   name: "samsung monitor",
//   category: "electronics",
//   details: {
//     description: "27 inch samsung monitor",
//     price: 1200,
//     images: ["1http", "2http"],
//     phoneNumber: "0504567823",
//   },
// });

// monitor
//   .save()
//   .then(() => {
//     console.log(monitor);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
