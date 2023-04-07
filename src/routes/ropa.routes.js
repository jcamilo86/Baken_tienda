const express = require("express");
const router = express.Router();
const { getRopaByTipo } = require("../controllers/ropa.controller");
const auth = require("../middlewares/auth");

//read
router.get("/", auth, getRopaByTipo);

module.exports = router;
