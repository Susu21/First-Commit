const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertBasePersonEdu = async (req, res, next) => {
  const Name = req.body.Name;
  const base_person_ID = req.body.base_person_ID;
  const university_ID = req.body.university_ID;

  db.query(
    "INSERT INTO base_person_education (Name, base_person_ID, university_ID) VALUES (?,?,?)",
    [Name, base_person_ID, university_ID],
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
exports.SelectBasePersonEdu = async (req, res, next) => {
  const ID = req.body.ID;
  db.query(
    "SELECT base_person_ID, university_ID, name FROM base_person_education where id = ?",
    [ID],
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
