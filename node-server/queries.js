var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  password: "kruno",
  database: "mariadb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM kviz", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});