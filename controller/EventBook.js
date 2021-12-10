const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertEvent = async (req, res, next) => {
  const Date = req.body.Date;
  const Comments = req.body.Comments;
  const Details = req.body.Details;
  const base_person_ID = req.body.base_person_ID;
  const event_type_ID = req.body.event_type_ID;
  const Name = req.body.Name;

  db.query(
    "INSERT INTO event_book (Date, Comments, Details, base_person_ID, event_type_ID, Name) VALUES (?,?,?,?,?,?)",
    [Date, Comments, Details, base_person_ID, event_type_ID, Name],
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
exports.SelectEvent = async (req, res, next) => {
  const Name = req.body.Name;
  const Details = req.body.Details;
  db.query(
    "SELECT Date, Comments, Details FROM event_book where Name = ? OR Details = ?",
    [Name, Details],
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
