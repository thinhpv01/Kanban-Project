var express = require("express");
var authRouter = require("./auth");
var boardRouter = require("./board");
var sectionRouter = require("./section");
var taskRouter = require("./task");

var router = express.Router();

router.use("/auth", authRouter);
router.use("/boards", boardRouter);
router.use("/boards/:boardId/sections", sectionRouter);
router.use("/boards/:boardId/tasks", taskRouter);

module.exports = router;
