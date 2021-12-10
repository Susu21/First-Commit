const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertComment = async (req, res, next) => {
  const description = req.body.description;
  const created_date = req.body.created_date;
  const updated_date = req.body.updated_date;
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "INSERT INTO comment (description, created_date, updated_date, base_person_ID) VALUES (?,?,?,?)",
    [description, created_date, updated_date, base_person_ID],
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
exports.SelectComment = async (req, res, next) => {
  const base_person_ID = req.body.base_person_ID;
  db.query(
    "SELECT description, created_date, updated_date FROM Comment where base_person_ID = ?",
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
