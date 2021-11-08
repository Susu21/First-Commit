const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,         
    optionSuccessStatus:200
}
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'b8b53739e00f0f',
    host: 'us-cdbr-east-04.cleardb.com',
    password: '30eaf774',
    database: 'heroku_3ee373ed9bd978b'
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
});

//  app.put("/update", (req, res) => {
//      const id = req.body.id;
//      const Цалин = req.body.Цалин;
//      db.query(
//          "UPDATE SET employees цалин = ? WHERE id =?", 
//          [Цалин, id], 
//          (err, result) => {
//         if (err) {
//              console.log(err);
//          } else {
//              res.send(result);
//          }
//      });
//  });


// app.delete()

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`SErver is running ${PORT}`);
});

module.exports = db;