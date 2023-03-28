const express = require("express");
const app = express();
const connectDB = require("./database/db")
require('dotenv').config()
const cors = require('cors');
connectDB()


//middlewares
app.use(express.json());
app.use(cors());

//RUTAS
app.use("/usuarios")

//EL SERVIDOR EN ESCUCHA
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo por el puerto: ${process.env.PORT}`);
});


