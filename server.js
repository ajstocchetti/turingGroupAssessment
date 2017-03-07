'use strict';
require('dotenv').config();
const express = require('express');
const forecast = require('./forecast');
const helmet = require('helmet');
const path = require('path');

const app = express();
app.use(helmet());

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/weather/:zip', function(req, res) {
    const zip = req.params.zip;
    const regex = /^\d{5}$/; // TODO: allow for zip code extension ie 12345-9876
    if (!regex.test(zip)) {
        return sendError(res, 'Zip code is invalid');
    }

    forecast.getForecast(zip)
    .then(data => {
        res.send(data);
    }).catch(err => {
        sendError(res, err);
    });
});


function sendError(res, msg) {
    res.status(500).send(msg);
}

app.listen(3000);
