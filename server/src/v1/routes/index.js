var express = require("express");
var authRouter = require("./auth");
var boardRouter = require("./board");

var router = express.Router();

router.use("/auth", authRouter);
router.use("/boards", boardRouter);

module.exports = router;
