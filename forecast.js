'use strict';
const db = require('./db/utils');
const request = require('request');

function getForecast(zip) {
    return db.getForecast(zip)
    .then(savedForecast => {
        if (savedForecast) return savedForecast;
        else return lookupFromWunderground(zip);
    });
}

function lookupFromWunderground(zip) {
    const url = `http://api.wunderground.com/api/${process.env.WUND_API_KEY}/forecast/q/${zip}.json`;
    return getAsPromise(url)
    .then(resp => {
        if (resp.response.hasOwnProperty('error')) throw new Error(resp.response.error.description);
        else db.saveForecast(zip, resp);
        return resp;
    });
}

function getAsPromise(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, resp, body) => {
            if (err) reject(err);
            else {
                const data = JSON.parse(body); // TODO: put in try/catch
                resolve(data);
            }
        });
    });
}

module.exports = {
    getForecast,
}
