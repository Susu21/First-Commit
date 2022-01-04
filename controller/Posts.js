const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertPosts = async (req, res, next) => {
  const description = req.body.description;
  const created_date = req.body.created_date;
  const updated_date = req.body.updated_date;
  const base_person_ID = req.body.base_person_ID;
  const Picture = req.body.Picture;

  db.query(
    "INSERT INTO posts (description, created_date, updated_date, base_person_ID, picture) VALUES (?,?,?,?,?)",
    [description, created_date, updated_date, base_person_ID, Picture],
    (err, result) => {
      console.log(err);
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
  db.query(" SELECT * FROM posts", (err, result) => {
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
  });
};
