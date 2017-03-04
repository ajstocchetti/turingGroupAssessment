'use strict';
const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/weather/:zip', function(req, res) {
    const zip = req.params.zip;
    const regex = /^\d{5}$/; // TODO: allow for zip code extension ie 12345-9876
    if (!regex.test(zip)) {
        res.status(500).send('Zip code is invalid');
    }

    res.send(`your zip code is ${zip}`);
});


app.listen(3000);
