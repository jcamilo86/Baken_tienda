const express = require("express");
const router = express.Router();
const { getRopaByTipo,createRopa,updateRopa } = require("../controllers/ropa.controller");
const auth = require("../middlewares/auth");

//read
router.get("", getRopaByTipo );
router.post("", createRopa );
router.put("/:id", updateRopa );

module.exports = router;
