const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "bf2dfd37cb3004",
  host: "us-cdbr-east-04.cleardb.com",
  password: "39eeabdb",
  database: "family",
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running ${PORT}`);
});
