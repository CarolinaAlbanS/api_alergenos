const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  ingredients: [{ type: String }],
  brands: [{ type: String, require: true }],
  allergens: [{ type: String }],
  quantity: { type: String },
  traces: [{ type: String }],
  barcode: {type: Number}
});

const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto;
