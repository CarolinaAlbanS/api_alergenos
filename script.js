require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const HTTPSTATUSCODE = require("./src/utils/httpStatusCode");
const { connectMongo } = require("./src/utils/db");
const productoRoutes = require("./src/api/routes/productos.routes");
const userRouter = require("./src/api/routes/user.routes");

connectMongo();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");
app.use(mongoSanitize());

// Respuesta que da nuestra app
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(
  cors({
    origin: ["*", "http://localhost:3001"],
    // "http://localhost:4200" puerto que habiamos puesto para que funcionara en anguñar estaba segido de una coma despues del 3001
    credentials: true,
  })
);

// routes
app.use("/productos", productoRoutes);
app.use("/users", userRouter);

// ruta de bienvenida

app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to my server",
    app: "Porductos App",
  });
});

// Manejor de errores

app.use((request, response, next) => {
  let error = new Error();
  error.status = 404;
  error.message = HTTPSTATUSCODE[404];
  next(error);
});

app.use((error, request, response, next) => {
  return response
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

// Escucha del puerto

app.listen(process.env.PORT, () => {
  console.log(`app running in port ${process.env.PORT}`);
});
