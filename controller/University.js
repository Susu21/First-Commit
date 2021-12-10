const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertUniversity = async (req, res, next) => {
  const Name = req.body.Name;

  db.query(
    "INSERT INTO University (Name) VALUES (?)",
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
exports.SelectUniversity = async (req, res, next) => {
  const ID = req.body.ID;
  const Name = req.body.Name;
  db.query(
    " SELECT * FROM University where ID = ? OR Name = ?",
    [ID, Name],
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
