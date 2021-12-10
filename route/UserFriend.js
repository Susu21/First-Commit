const express = require("express");
const { SelectFriends, InsertFriends } = require("../controller/UserFriend");

const router = express.Router();

router.route("/").post(InsertFriends);
router.route("/").get(SelectFriends);
module.exports = router;
