const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const productoSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  ingredients: [{ type: String }],
  brands: [{ type: String, require: true }],
  allergens: [{ type: String }],
  quantity: { type: String },
  traces: [{ type: String }],
});

const Producto = mongoose.model("producto", productoSchema);
module.exports = Producto;
