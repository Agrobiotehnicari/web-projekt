var mysql = require('mysql');

const dotenv = require('secrets.env').config();

var con = mysql.createPool({

  connectionLimit : process.env.DB_CONLIMIT,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER ,
  password        : process.env.DB_PASSWORD ,
  database        : process.env.DB_DATABASE 
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM kviz", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});