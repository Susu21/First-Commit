const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Mongolia9939',
    database: 'employeesystem'
});

app.post('/create', (req, res) => {
    const Нэр = req.body.Нэр
    const Нас = req.body.Нас
    const Хот = req.body.Хот
    const албантушаал = req.body.албантушаал
    const Цалин = req.body.Цалин

    db.query(
    "INSERT INTO employees (Нэр, Нас, Хот, албантушаал, Цалин) VALUES (?,?,?,?,?)",
     [Нэр, Нас, Хот, албантушаал, Цалин], 
     (err, result) => {
         if(err) {
             console.log(err)
         }else{
             res.send("Values Inserted")
         }
     }
     
     )

})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(process.env.port || port, () => {
    console.log(`SErver is running ${port}`);
});