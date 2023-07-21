const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors({origin: '*'}));
//const con = require('./config/connection');
const con = require('./config/connection');

app.get('/', (req, res) => {
    res.send(`Express api working at port: ${port}.`);
    console.log();
});

app.get('/users', (req, res) => {
  con.query("SELECT * FROM user ORDER BY firstname ASC", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out retrieving users!!");
  });
});

app.get('/user', (req, res) => {

  const user_id = req.query.id;
  con.query("SELECT * FROM users where id = ?", [ user_id ], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out retrieving a specific user.");
  });
});

app.post('/user', (req, res) => {

  const type = req.query.type;
  const email = req.query.email;
  const first_name = req.query.firstname;
  const last_name = req.query.lastname;
  const birthday = req.query.birthday;
  const phone = req.query.phone;
  const updated_at = new Date();
  const created_at = new Date();
  const passwd = "123456";

  con.query("INSERT into users(firstname, lastname, email, type, phone, passwd, birthday, created_at, updated_at ) values(?,?,?,?,?,?,?,?,?);", [ first_name, last_name, type, birthday, email, phone, passwd, created_at, updated_at  ], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out saving a new user.");
  });
});

app.get('/situations', (req, res) => {
  con.query("SELECT * FROM situation", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out retrieving all types!!");
  });
});

app.get('/types', (req, res) => {
  con.query("SELECT * FROM user_type", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out retrieving all types!!");
  });
});

app.post('/type', (req, res) => {
  const description = req.query.description;
  const updated_at = new Date();
  const created_at = new Date();

  con.query("INSERT into user_type(description, created_at, updated_at ) values(?,?,?);", [ description, created_at, updated_at  ], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out saving a new type.");
  });
  
});

app.get('/type', (req, res) => {
  
  const types_id = req.query.id;
  con.query("SELECT * FROM user_type where id = ?", [ type_id ], function (err, result, fields) {
    if (err) throw err;
    res.send(result);
    console.log("Worked out retrieving a specific type.");
  });
});

app.listen(port, () => {
  console.log(`Serving this app listening at http://localhost:${port}`);
});