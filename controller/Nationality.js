const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertNationality = async (req, res, next) => {
  const Name = req.body.Name;
  db.query(
    "INSERT INTO nationality (Name) VALUES (?)",
    [Name],
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
exports.SelectNationality = async (req, res, next) => {
  const ID = req.body.ID;
  db.query(
    " SELECT Name FROM nationality where ID = ?",
    [ID],
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
