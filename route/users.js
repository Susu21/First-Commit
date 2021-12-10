const express = require("express");
const { CreateUser, SelectUser, UpdateUser } = require("../controller/users");

const router = express.Router();
console.log("*************************dadada");
router.route("/").post(CreateUser);
router.route("/").get(SelectUser);
router.route("/").post(UpdateUser);

module.exports = router;
