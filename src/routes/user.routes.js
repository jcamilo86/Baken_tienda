const express = require("express");
const router = express.Router();
const { getUser, createUser, updateUser, verifyUser, loginUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");


router.get("/verify", auth, verifyUser);

//READ
router.get("/", auth, getUser);

//CREATE
router.post("/", createUser);

router.post("/login", loginUser);

//UPDATE
router.put("/:id", auth, updateUser);

//DELETE
//router.delete("/id", auth, deleteUser);

module.exports = router;

