const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.getUrgiinOvog = async (req, res, next) => {
  const ID = req.params.ID;
  db.query("call DrawTree (?)", [ID], (err, result) => {
    if (err) {
      console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
      const returnResult = {
        status: "failed",
        response: err,
      };
      res.status(400).send(returnResult);
    } else {
      if (!isEmpty(result)) {
        const datas = result[0];
        let dd;
        let spouse = "";
        let profile = "";
        let children = [];
        let fam = {};
        let tmp = [];
        let a = {};
        datas.forEach((el, index) => {
          if (isEmpty(el.Parent_ID)) {
            el.children = [];
          }
        });
        datas.forEach((el, index) => {
          if (isEmpty(el.children)) {
            el.children = [];
          }
          datas.forEach((elm) => {
            if (elm.Parent_ID == el.Child_ID) {
              el.children.push(elm);
              tmp.push(elm);
            }
          });
        });
        const e = datas;
        e.forEach((el) => {
          tmp.forEach((elm) => {
            if (el === elm) {
              console.log(`elm`, elm);
              const index = datas.indexOf(el);
              datas.splice(index, 1);
            }
          });
        });
        const returnResult = {
          status: "success",
          response: datas,
        };
        res.status(200).send(returnResult);
      }
    }
  });
};
exports.insertFamily = async (req, res, next) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Created_Date = req.body.Created_Date;
  const Family_Member_ID = req.body.Family_Member_ID;
  const familyrequest_ID = req.body.familyrequest_ID;

  db.query(
    "insert into family (Name, Description, Created_Date) values (,?,?,?)",
    [Name, Description, Created_Date],
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

exports.insertFamily = async (req, res, next) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Created_Date = req.body.Created_Date;

  db.query(
    "insert into family (Name, Description, Created_Date) values (?,?,?)",
    [Name, Description, Created_Date],
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

exports.getAllFamily = async (req, res, next) => {
  db.query("Select * from family", (err, result) => {
    if (err) {
      console.log("Ger Bul Oldsongui", err);
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
            mothers: data[0].mothers,
            fathers: data[0].father,
            family: data[0].family,
            children,
          },
        };
        res.status(200).send(returnResult);
      }
    }
  });
};
