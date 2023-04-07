// 1. IMPORTACIONES
const mongoose = require("mongoose");

// 2. SCHEMA
const ropaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    talla: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      enum: ["HOMBRE", "MUJER"],
      required: false,
    },

    precio: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
  }
);

// 3. MODELO
const Ropa = mongoose.model("Ropa", ropaSchema);

// 4. EXPORTACIÓN
module.exports = Ropa;
