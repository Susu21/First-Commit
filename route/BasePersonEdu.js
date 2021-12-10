const express = require("express");
const {
  InsertBasePersonEdu,
  SelectBasePersonEdu,
} = require("../controller/BasePersonEdu");

const router = express.Router();

router.route("/").post(InsertBasePersonEdu);
router.route("/").get(SelectBasePersonEdu);

module.exports = router;
