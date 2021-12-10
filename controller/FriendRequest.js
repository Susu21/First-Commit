const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.SendFriendRequest = async (req, res, next) => {
  const created_Date = req.body.created_Date;
  const updated_Date = req.body.updated_Date;
  const FriendRequest_Status = req.body.FriendRequest_Status;
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "INSERT INTO friendrequest (created_Date, updated_Date, FriendRequest_Status, base_person_ID) VALUES (?,?,?,?)",
    [created_Date, updated_Date, FriendRequest_Status, base_person_ID],
    (err, result) => {
      if (err) {
        console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
        const returnResult = {
          status: "failed",
          response: err,
        };
        res.status(400).send(returnResult);
      } else {
        if (!isEmpty(result)) {
          const returnResult = {
            status: "success",
            response: result,
          };
          res.status(200).send(returnResult);
        }
      }
    }
  );
};
exports.SelectFriendRequest = async (req, res, next) => {
  const base_person_ID = req.body.base_person_ID;
  db.query(
    "SELECT created_Date, updated_Date, FriendRequest_Status FROM friendrequest where base_person_ID = ?",
    [base_person_ID],
    (err, result) => {
      if (err) {
        console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
        const returnResult = {
          status: "failed",
          response: err,
        };
        res.status(400).send(returnResult);
      } else {
        if (!isEmpty(result)) {
          const returnResult = {
            status: "success",
            response: result,
          };
          res.status(200).send(returnResult);
        }
      }
    }
  );
};
