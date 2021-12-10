const express = require("express");
const {
  AddFamMember,
  DeleteFamilyMember,
  SelectFamilyMember,
} = require("../controller/FamilyMember");
const router = express.Router();

router.route("/").post(AddFamMember);
router.route("/").get(SelectFamilyMember);
router.route("/:bpid").delete(DeleteFamilyMember);
module.exports = router;
