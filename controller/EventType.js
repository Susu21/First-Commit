const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertEventType = async (req, res, next) => {
  const Description = req.body.Description;

  db.query(
    "INSERT INTO event_type (Description) VALUES (?)",
    [Description],
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
exports.SelectEventType = async (req, res, next) => {
  const Description = req.body.Description;
  db.query(
    "SELECT Description FROM event_type where Description = ?",
    [Description],
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
