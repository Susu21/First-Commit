const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.SearchFamily = async (req, res, next) => {
  const base_person_ID = req.body.base_person_ID;

  db.query(
    "SELECT Name, Description, Created_Date FROM family where base_person_ID = ?",
    [base_person_ID],
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
exports.insertFamily = async (req, res, next) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Created_Date = req.body.Created_Date;
  const base_person_ID = req.body.base_person_ID;
  const Family_Member_ID = req.body.Family_Member_ID;
  const familyrequest_ID = req.body.familyrequest_ID;

  db.query(
    "insert into family (Name, Description, Created_Date, base_person_ID, Family_Member_ID, familyrequest_ID) values (?,?,?,?,?,?)",
    [
      Name,
      Description,
      Created_Date,
      base_person_ID,
      Family_Member_ID,
      familyrequest_ID,
    ],
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

exports.DeleteFamily = async (req, res, next) => {
  const Name = req.body.Name;
  const ID = req.body.ID;

  db.query(
    "DELETE FROM family WHERE Name = ? AND ID = ?",
    [Name, ID],
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
exports.getFamily = async (req, res, next) => {
  const ID = req.params.ID;
  db.query("call getFamily(?)", [ID], (err, result) => {
    if (err) {
      console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
      const returnResult = {
        status: "failed",
        response: err,
      };
      res.status(400).send(returnResult);
    } else {
      if (!isEmpty(result)) {
        let wife;
        let father;
        let children = [];
        const data = result[0];
        data.forEach((el) => {
          if (
            !isEmpty(el.father) &&
            !isEmpty(el.wife) &&
            isEmpty(el.children)
          ) {
            wife = el;
          } else if (
            !isEmpty(el.father) &&
            !isEmpty(el.wife) &&
            !isEmpty(el.children)
          ) {
            children.push({ name: el.children, eventDate: el.acEventStart });
          }
        });
        const returnResult = {
          status: "success",
          response: {
            wife,
            father: data[0].father,
            family: data[0].family,
            children,
          },
        };
        res.status(200).send(returnResult);
      }
    }
  });
};
