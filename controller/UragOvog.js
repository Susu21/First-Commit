const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.CreateOvog = async (req, res, next) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Created_Date = req.body.Created_Date;
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "INSERT INTO urgiin_ovog (Name, Description, Created_Date, base_person_ID) VALUES (?,?,?,?)",
    [Name, Description, Created_Date, base_person_ID],
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
exports.SelectOvog = async (req, res, next) => {
  const ID2 = req.params.ID2;
  db.query("Select * from urgiin_ovog", (err, result) => {
    [ID2];
    if (err) {
      console.log("Iim urag baidgui baigashu!!!!!!!!!!!!!!!!!!!!!", err);
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
