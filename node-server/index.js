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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/kviz/:id',(req,res) =>{
    const {id} = req.params;
    if(isNaN(id))
     {
        res.sendStatus(403);
        return;
    }
    con.query(`select * from Kviz WHERE idKviza = ${id}`, function (err, kviz, fields) {
        if (err) res.sendStatus(500)
        console.log(kviz)
        res.send({
            kviz
        });
    });
});

app.get('/pitanja/:idKviza',(req,res) =>{
    const {idKviza} = req.params;
    if(isNaN(idKviza))
     {
        res.sendStatus(403);
        return;
    }
    con.query(`select * from Pitanje WHERE idKviza = ${idKviza}`, function (err, pitanja, fields) {
        if (err) res.sendStatus(500)
        console.log(pitanja)
        res.send({
            pitanja
        });
    });
});

app.get('/odgovori/:idPitanja',(req,res) =>{
    const {idPitanja} = req.params;
    if(isNaN(idPitanja))
     {
        res.sendStatus(403);
        return;
    }
    con.query(`select * from Odgovor WHERE idPitanja = ${idPitanja}`, function (err, odgovori, fields) {
        if (err) res.sendStatus(500)
        console.log(odgovori)
        res.send({
            odgovori
        });
    });
});

app.get('/korisnikKvizovi/:idKreatora',(req,res) =>{
    const {idKreatora} = req.params;
    if(isNaN(idKreatora))
     {
        res.sendStatus(403);
        return;
    }
    con.query(`select * from Kviz WHERE idKreatora = ${idKreatora}`, function (err, kvizovi, fields) {
        if (err) res.sendStatus(500)
        console.log(kvizovi)
        res.send({
            kvizovi
        });
    });
});

app.post('/dodajKviz/:idKreatora/:imeKviza',(req,res) =>{
    const {idKreatora} = req.params;
    const {imeKviza} = req.params;
    if(isNaN(idKreatora))
    {
        res.sendStatus(403);
        return;
    }
    const onlyLettersPattern = /^[A-Za-z0-9 ]+$/;
    if(!imeKviza.match(onlyLettersPattern)){
        return res.status(403).json({ err: "No special characters, please!"})
      }
    con.query(`INSERT INTO Kviz(idKreatora, imeKviza) VALUES(${idKreatora},"${imeKviza}");`, function (err, kvizovi, fields) {
        if (err) res.sendStatus(500)
        res.sendStatus(200);
    });
});

app.get('/quiz/:id',(req,res) =>{
    const {id} = req.params;
    if(isNaN(id))
     {
        res.sendStatus(403);
        return;
    }
    con.query(`SELECT * from Kviz, Pitanje, Odgovor where Kviz.id=${id};`, function (err, kviz, fields) {
        if (err) res.sendStatus(500)
        console.log(kviz)
        res.send({
            kviz
        });
    });
});

app.listen(8080, () => console.log('live on http://localhost:8080'));
