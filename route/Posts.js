const express = require("express");
const { InsertPosts, SelectPosts } = require("../controller/Posts");

const router = express.Router();

router.route("/").post(InsertPosts);
router.route("/").get(SelectPosts);
module.exports = router;
