const express = require('express');
const { title } = require('process');
const app = express();
const port = 3000;

app.use('/', express.static('public'));



const budget = {
    myBudget: [
    {
        title: 'Eat Out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 440
    },
    {
        title: 'Groceries',
        budget: 90
    },
    {
        title: 'Fuel',
        budget: 40
    }

]
};
app.get('/hello', (req, res) => {
    res.send('Hello World! From Mrinal');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

