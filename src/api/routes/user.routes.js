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
} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/create", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);
userRouter.patch("/:id", [isAuth], updateUser);
userRouter.delete("/:id1/diario/:id2", [isAuth], updateDiario);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserId);

module.exports = userRouter;
