const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.SelectFriends = async (req, res, next) => {
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "select type,name from userfriend where base_person_ID = ?",
    [base_person_ID],
    (err, result) => {
      if (err) {
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
exports.InsertFriends = async (req, res, next) => {
  const Name = req.body.Name;
  const Type = req.body.Type;
  const base_person_ID = req.body.base_person_ID;
  db.query(
    " INSERT INTO userfriend (Name, Type, base_person_ID) values(?,?,?)",
    [Name, Type, base_person_ID],
    (err, result) => {
      if (err) {
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
