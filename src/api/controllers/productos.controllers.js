const Producto = require("../models/productos.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const getProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: productos,
    });
  } catch (error) {
    next(error);
  }
};

const getProductosId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = await Producto.findById(id);
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: productos,
    });
  } catch (error) {
    next(error);
  }
};

const createProductos = async (req, res, next) => {
  try {
    const productos = new Producto(req.body);
    // book.id = req.body.id;
    // book.img = req.body.img;
    // book.title = req.body.title;
    // book.autor = req.body.autor;
    // book.year = req.body.year;

    if (await Producto.findOne({ title: req.body.title })) {
      return res.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
    const createProducto = await productos.save();
    return res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: createProducto,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteproducto = await Producto.findByIdAndDelete(id);
    if (!deleteproducto) {
      return res.status(404).json({
        status: 404,
        messagee: HTTPSTATUSCODE[404],
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateProductos = async (request, response, next) => {
  try {
    const id = request.params.id;
    const body = request.body;
    const producto = await Producto.findByIdAndUpdate(id, body, { new: true });
    if (!producto) {
      return response.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    response.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductos,
  getProductos,
  createProductos,
  deleteProductos,
  updateProductos,
};
