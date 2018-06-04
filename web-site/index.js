const express = require('express');
const database = require('./database');
const app = express();

database.initializeMongo();

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(3000, function() {
    console.log('the app is running at port : 3000');
});

app.get('/testFind', function(req, res) {
    database.kitten.find(function(err, kittens) {
        if (err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    });
})