const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs'); 

app.use('/', express.static('public'));

let budget = {}

fs.readFile('./dataset.json', 'utf-8', (err, data) => {
    if (err) throw err
    budget = JSON.parse(data)
})


app.get('/hello', (req, res) => {
    res.send('Hello World! From Mrinal');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});