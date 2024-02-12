const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");
const Producto = require("../models/productos.models");

const createUser = async (request, response, next) => {
  try {
    const user = new User(request.body);

    console.log(request.body);
    // user.name = request.body.name;
    // user.password = request.body.password;

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
    const userInfo = await User.findOne({ name: request.body.name });
    if (bcrypt.compareSync(request.body.password, userInfo.password)) {
      // if (userInfo.password == request.body.password) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          name: userInfo.name,
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
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      token: null,
    });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (request, response, next) => {
  try {
    const users = await User.find();
    response.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  authenticate,
  logout,
  getUsers,
};
