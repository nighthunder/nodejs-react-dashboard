var mysql = require('mysql');
require('dotenv').config({path: '../.env'});

var con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWD,
  port: '3306',
  database: process.env.DATABASE_SCHEMA
});

con.connect(function(err) {
  if (err) throw err;

  console.log("Connected at mysql database!");

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
