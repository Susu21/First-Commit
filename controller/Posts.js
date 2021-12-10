const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertPosts = async (req, res, next) => {
  const description = req.body.description;
  const created_date = req.body.created_date;
  const updated_date = req.body.updated_date;
  const base_person_ID = req.body.base_person_ID;
  const comment_ID = req.body.comment_ID;

  db.query(
    "INSERT INTO posts (description, created_date, updated_date, base_person_ID, comment_ID) VALUES (?,?,?,?,?)",
    [description, created_date, updated_date, base_person_ID, comment_ID],
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
exports.SelectPosts = async (req, res, next) => {
  const ID = req.body.ID;
  const base_person_ID = req.body.base_person_ID;
  db.query(
    " SELECT * FROM posts where ID = ? OR base_person_ID = ?",
    [ID, base_person_ID],
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
