const express = require("express");
const {
  InsertNationality,
  SelectNationality,
} = require("../controller/Nationality");

const router = express.Router();

router.route("/").post(InsertNationality);
router.route("/").get(SelectNationality);
module.exports = router;
