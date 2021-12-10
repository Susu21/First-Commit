const express = require("express");
const {
  SelectUniversity,
  InsertUniversity,
} = require("../controller/University");

const router = express.Router();

router.route("/").post(InsertUniversity);
router.route("/").get(SelectUniversity);
module.exports = router;
