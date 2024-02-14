const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10; // complejidad del encriptado

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, unique: true, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  email: { type: String, required: true },
  phone: { type: Number, require: true },
  img: { type: String },
  allergens: [{ type: String }],
  // favorites: [{ type: String, ref: "Producto" }],
  favorites: [{ type: Schema.Types.ObjectId, ref: "Producto" }],
  diario: [
    {
      producto: [{ type: Schema.Types.ObjectId, ref: "Producto" }],
      fechaEscaneo: { type: Number },
    },
  ],
  emergency: {
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    seguro: { type: String },
  },
});

userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;
