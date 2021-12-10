// const PORT = 3001;
const mysql = require("mysql");

// app.use(cors());
// app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Mongolia9939",
  database: "diplomatest",
});

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Server is running ${PORT}`);
// });

module.exports = db;
