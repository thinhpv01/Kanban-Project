var express = require("express");
var authRouter = require("./auth");

var router = express.Router();

router.use("/auth", authRouter);

module.exports = router;
