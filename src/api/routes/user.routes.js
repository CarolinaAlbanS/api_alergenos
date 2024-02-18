const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  authenticate,
  logout,
  updateUser,
  updateDiario,
  getUsers,
  getUserId,
  updateFavorito,
} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/create", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);
userRouter.patch("/:id", [isAuth], updateUser);
userRouter.delete("/:id1/diario/:id2", [isAuth], updateDiario);
userRouter.delete("/:id3/favorito/:id4", [isAuth], updateFavorito);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserId);

module.exports = userRouter;
