const mongoose = require("mongoose");

const ordenSchema = mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  estado:{
    type:String,
    required:true
  },
  productos: [
    {
      productoId: {
        type: String,
        required: true,
      },
      cantidad: {
        type: String,
        required: true,
      },
    },
  ],
},
{
timestanps: true,
});



const Orden = mongoose.model("Orden", ordenSchema);

module.exports = Orden;
