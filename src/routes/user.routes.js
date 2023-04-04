const express = require("express");
const router = express.Router();
const {getUser,createUser,updateUser,verifyUser,loginUser} = require("../controllers/user.controller");
const auth = require("../middlewares/auth");


router.get("/verify", auth,verifyUser);



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

