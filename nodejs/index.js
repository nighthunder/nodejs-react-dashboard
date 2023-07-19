const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const connection = require('./config/connection');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});