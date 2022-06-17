const mongoose = require("mongoose");

const funkoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  coleccion:{
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  top: {
    type: Boolean,
    required: true,
  }


});
const Funko = mongoose.model("funko", funkoSchema);

module.exports = Funko;