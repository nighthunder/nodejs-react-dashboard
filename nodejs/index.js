const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(cors({origin: '*'}));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
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

  const type = req.body.type;
  const situation = req.body.situation;
  const first_name = req.body.firstname;
  const last_name = req.body.lastname;
  const email = req.body.email;
  const passwd = "123456";
  const phone = req.body.phone;
  const updated_at = new Date();
  const created_at = new Date();

  con.query("INSERT into user(type, situation, firstname, lastname, email, passwd, phone, created_at, updated_at ) values(?,?,?,?,?,?,?,?,?);", [ type, situation, first_name, last_name, email, passwd, phone, created_at, updated_at  ], function (err, result, fields) {
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
  const description = req.body.description;
  const situation = req.body.situation;
  const updated_at = new Date();
  const created_at = new Date();

  con.query("INSERT into user_type(description, situation, created_at, updated_at ) values(?,?,?,?);", [ description, situation, created_at, updated_at  ], function (err, result, fields) {
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