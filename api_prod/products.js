const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
userid: String,
productId: String,
category: String,
productName: String,
productModel: String,
price: Number,
availableQuantity: Number
},
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;