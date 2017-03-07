'use strict';
const db = require('./connect').getDb();
const col = 'forecast'


function saveForecast(zip, forecast) {
    const query = { zip };
    const doc = {
        zip,
        forecast,
        updated: new Date(),
    }
    return db.collection(col).findOneAndUpdate(query, doc, { upsert: true });
}

function getForecast(zip) {
    const lookback = new Date();
    lookback.setHours(lookback.getHours() - 1);
    const query = {
        zip,
        updated: {
            $gte: lookback,
        },
    };
    return db.collection(col).findOne(query)
    .then(doc => {
        if (doc) return doc.forecast;
        return null;
    });
}


module.exports = {
    getForecast,
    saveForecast,
};
