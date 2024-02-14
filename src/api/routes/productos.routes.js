const express = require("express");
const productosRoutes = express.Router();
const {
  getProductos,
  getProductosId,
  getProductosCode,
  createProductos,
  deleteProductos,
  updateProductos,
} = require("../controllers/productos.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

productosRoutes.get("/", getProductos);
productosRoutes.get("/:id", getProductosId);
productosRoutes.get("/code/:code", getProductosCode);
productosRoutes.post("/create", createProductos);
productosRoutes.put("/:id", updateProductos);
productosRoutes.delete("/:id", deleteProductos);

module.exports = productosRoutes;
