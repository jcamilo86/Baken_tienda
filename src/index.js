const express = require("express");
const app = express();
const connectDB = require("./database/db");
require("dotenv").config();
const cors = require("cors");
connectDB();
const userRouter = require("./routes/user.routes");
const ropaRouter = require("./routes/ropa.routes");
const ordenRouter =require("./routes/orden.routes")

//middlewares
app.use(express.json());
app.use(cors());

//RUTAS
app.use("/user", userRouter);
app.use("/ropa", ropaRouter);
app.use("/orden", ordenRouter);



//EL SERVIDOR EN ESCUCHA
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo por el puerto: ${process.env.PORT}`);
});
