const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.Genelogy = async (req, res, next) => {
  const father_person_id = req.body.father_person_id;
  const mother_person_id = req.body.mother_person_id;
  const child_person_id = req.body.child_person_id;
  const eventAction = req.body.eventAction;
  const eventStartDate = req.body.eventStartDate;
  const eventEndDate = req.body.eventEndDate;

  db.query(
    "INSERT INTO genelogybook (father_person_id, mother_person_id, child_person_id, eventAction, eventStartDate, eventEndDate) VALUES (?,?,?,?,?,?)",
    [
      father_person_id,
      mother_person_id,
      child_person_id,
      eventAction,
      eventStartDate,
      eventEndDate,
    ],
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
exports.SelectGenelogy = async (req, res, next) => {
  const father_person_ID = req.body.father_person_ID;

  db.query(
    "SELECT father_person_ID, father_person_ID, eventAction, eventStartDate FROM genelogybook where father_person_ID  = ?",
    [father_person_ID],
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
        }
        res.status(200).send(result);
      }
    }
  );
};
