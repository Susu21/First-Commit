const express = require("express");
const { InsertEvent, SelectEvent } = require("../controller/EventBook");

const router = express.Router();

router.route("/").post(InsertEvent);
router.route("/").get(SelectEvent);
module.exports = router;
