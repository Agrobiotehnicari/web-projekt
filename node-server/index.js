const app = require('express')();
const PORT=8080;
var mysql = require('mysql');

const dotenv = require('dotenv').config({path: 'secrets.env'});
var con = mysql.createConnection({

  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE 
});

app.get('/kviz/:id/:rb',(req,res) =>{
    const {id} = req.params;
    const {rb} = req.params;
    con.query(`select * from Pitanje WHERE idKviza = ${id}`, function (err, kviz, fields) {
        if (err) throw err;
        console.log(kviz)
        console.log(rb)
        res.send({
            kviz
        });
    });
});

app.listen(8080, () => console.log('live on http://localhost:8080'));