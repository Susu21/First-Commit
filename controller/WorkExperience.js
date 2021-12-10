const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.person_work_experience = async (req, res, next) => {
  const workedCompany_name = req.body.WorkedCompany_Name;
  const start_year = req.body.Start_Year;
  const end_year = req.body.End_Year;
  const position_name = req.body.Position_Name;
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "INSERT INTO person_work_experience (WorkedCompany_Name, Start_Year, End_Year, Position_Name, base_person_ID) VALUES (?,?,?,?,?)",
    [workedCompany_name, start_year, end_year, position_name, base_person_ID],
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

exports.SelectPerson_work_experience = async (req, res, next) => {
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "SELECT WorkedCompany_Name,position_name, Round((DATEDIFF(End_Year, Start_Year)/365),1) AS Worked_Year FROM person_work_experience where base_person_ID = ?",
    [base_person_ID],
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
