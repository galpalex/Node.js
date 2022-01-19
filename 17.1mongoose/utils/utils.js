const Product = require("../productSchema");
const productArray = require("../products");

const createProducts = async () => {
  try {
    const products = await Product.create(productArray);
    console.log(products);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = createProducts;
