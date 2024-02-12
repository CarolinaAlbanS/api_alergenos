const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const productoSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  img: { type: String, require: true },
  ingredientes: { type: String },
  fabricante: { type: String, require: true },
  fechaEscaneo: { type: String },
  alergenos: { type: String },
});

const Producto = mongoose.model("producto", productoSchema);
module.exports = Producto;
