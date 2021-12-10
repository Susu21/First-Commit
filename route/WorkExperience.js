const express = require("express");
const {
  person_work_experience,
  SelectPerson_work_experience,
} = require("../controller/WorkExperience");

const router = express.Router();

router.route("/").post(person_work_experience);
router.route("/").get(SelectPerson_work_experience);

module.exports = router;
