const express=require("express");
const router = express.Router();
const {createOrden} =require ("../controllers/orden.controller");
const auth = require("../middlewares/auth")
  
router.post("/", auth,createOrden);

module.exports=router