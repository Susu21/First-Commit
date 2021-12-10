const express = require("express");
const { InsertComment, SelectComment } = require("../controller/Comment");

const router = express.Router();

router.route("/").post(InsertComment);
router.route("/").get(SelectComment);
module.exports = router;
