const express = require("express");
const router = express.Router();
const {getUser,createUser,updateUser,verifyUser,loginUser} = require("../controllers/user.controller");


router.get("/verify",verifyUser);

//READ
router.get("/", getUser);

//CREATE
router.post("/", createUser);

router.post("/login", loginUser);

//UPDATE
router.put("/:id", updateUser);

//DELETE
//router.delete("/id", deleteUser);

module.exports = router;

