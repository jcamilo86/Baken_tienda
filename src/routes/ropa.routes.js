const express = require("express");
const router = express.Router();
const { getRopaByTipo,createRopa } = require("../controllers/ropa.controller");
const auth = require("../middlewares/auth");

//read
router.get("/filtrar", getRopaByTipo );
router.post("/crear", createRopa )

module.exports = router;
