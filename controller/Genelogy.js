const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.insertGenelogy = async (req, res, next) => {
  const father_person_id = req.body.father_person_ID;
  const mother_person_id = req.body.mother_person_ID;
  const child_person_id = req.body.child_person_ID;
  const eventAction = req.body.eventAction;
  const eventStartDate = req.body.eventStartDate;
  const eventEndDate = req.body.eventEndDate;

  console.log(`father_person_id`, father_person_id);
  console.log(`mother_person_id`, mother_person_id);
  console.log(`child_person_id`, child_person_id);
  console.log(`eventAction`, eventAction);

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
  const ID = req.params.ID;

  db.query(
    "SELECT father_person_ID, mother_person_ID, eventAction, eventStartDate FROM genelogybook where father_person_ID  = ?",
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
        }
        res.status(200).send(result);
      }
    }
  );
};
