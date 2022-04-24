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

app.get('/kviz/:id',(req,res) =>{
    const {id} = req.params;
    con.query(`select * from Kviz WHERE idKviza = ${id}`, function (err, kviz, fields) {
        if (err) throw err;
        console.log(kviz)
        res.send({
            kviz
        });
    });
});

app.get('/pitanja/:idKviza',(req,res) =>{
    const {idKviza} = req.params;
    con.query(`select * from Pitanje WHERE idKviza = ${idKviza}`, function (err, pitanja, fields) {
        if (err) throw err;
        console.log(pitanja)
        res.send({
            pitanja
        });
    });
});

app.get('/odgovori/:idPitanja',(req,res) =>{
    const {idPitanja} = req.params;
    con.query(`select * from Odgovor WHERE idPitanja = ${idPitanja}`, function (err, odgovori, fields) {
        if (err) throw err;
        console.log(odgovori)
        res.send({
            odgovori
        });
    });
});

app.get('/korisnikKvizovi/:idKreatora',(req,res) =>{
    const {idKreatora} = req.params;
    con.query(`select * from Kviz WHERE idKreatora = ${idKreatora}`, function (err, kvizovi, fields) {
        if (err) throw err;
        console.log(kvizovi)
        res.send({
            kvizovi
        });
    });
});

app.listen(8080, () => console.log('live on http://localhost:8080'));