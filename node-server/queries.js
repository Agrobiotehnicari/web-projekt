var mysql = require('mysql');

const dotenv = require('dotenv').config({path: 'secrets.env'});
var con = mysql.createConnection({

  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE 
});

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from Odgovor", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});