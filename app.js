'use strict';
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const request = require('request');

const app = express();
app.use(helmet());

app.get('/weather/:zip', function(req, res) {
    const zip = req.params.zip;
    const regex = /^\d{5}$/; // TODO: allow for zip code extension ie 12345-9876
    if (!regex.test(zip)) {
        return sendError(res, 'Zip code is invalid');
    }

    // const url = `http://api.wunderground.com/api/${process.env.WUND_API_KEY}/forecast/q/CA/San_Francisco.json`
    const url = `http://api.wunderground.com/api/${process.env.WUND_API_KEY}/forecast/q/${zip}.json`
    // const url = `http://api.wunderground.com/api/${process.env.WUND_API_KEY}/geolookup/q/${zip}.json`;
    request.get(url, (err, resp, body) => {
        if (err) return sendError(res, err);
        const data = JSON.parse(body); // TODO: put in try/catch
        if (data.response.hasOwnProperty('error')) return sendError(res, data.response.error.description);

        res.send(data); // success
    });
});

function sendError(res, msg) {
    res.status(500).send(msg);
}

app.listen(3000);
