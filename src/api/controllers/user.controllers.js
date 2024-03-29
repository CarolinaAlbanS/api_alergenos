const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Producto = require("../models/productos.models");
const { response } = require("express");

const createUser = async (request, response, next) => {
  try {
    const user = new User(request.body);

    const salt = 10;
    user.password = await bcrypt.hash(request.body.password, salt);

    if (await User.findOne({ name: request.body.name })) {
      return response.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }

    const createUsers = await user.save();
    console.log(createUser);

    return response.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: createUsers,
    });
  } catch (error) {
    next(error);
  }
};

const authenticate = async (request, response, next) => {
  try {
    // email y pasword
    const userInfo = await User.findOne({ email: request.body.email });
    if (bcrypt.compareSync(request.body.password, userInfo.password)) {
      // if (userInfo.password == request.body.password) {

      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        request.app.get("secretKey"),
        { expiresIn: "1d" }
      );

      return response.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { user: userInfo, token: token },
      });
    } else {
      return response.json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (request, response, next) => {
  try {
    return response.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      token: null,
    });
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (request, response, next) => {
  try {
    const id = request.params.id;
    const body = request.body;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    if (!user) {
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

const updateDiario = async (request, response, next) => {
  try {
    const userId = request.params.id1;
    const diarioId = request.params.id2;
    const user = await User.findOne({ _id: userId });

    const entradasFiltradas = user.diario.filter((entrada) => {
      return entrada._id.toString() != diarioId.toString();
    });

    user.diario = entradasFiltradas;
    const updatedUser = await User.findByIdAndUpdate(userId, user);

    return response.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const updateFavorito = async (request, response, next) => {
  try {
    const userId = request.params.id3;
    const favoritoId = request.params.id4;
    const user = await User.findOne({ _id: userId });

    const entradasFiltradas = user.favorites.filter((fav) => {
      return fav._id.toString() != favoritoId.toString();
    });

    user.favorites = entradasFiltradas;
    const updatedUser = await User.findByIdAndUpdate(userId, user);

    return response.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (request, response, next) => {
  try {
    const users = await User.find()
      .populate("favorites")
      .populate("diario.producto");
    response.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
      .populate("favorites")
      .populate("diario.producto");
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  authenticate,
  logout,
  updateUser,
  updateDiario,
  updateFavorito,
  getUsers,
  getUserId,
};
