const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', (req, res) => {
    // Asynchronous file reading
    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
        console.log(data);
        console.log("Bitch!");
    });
  
    // Synchronous file reading
    try {
        const data = fs.readFileSync('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});