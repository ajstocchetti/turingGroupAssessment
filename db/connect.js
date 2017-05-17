'use strict';
const MongoClient = require('mongodb').MongoClient;
let _db;

function startDb() {
    const uri = `mongodb://mongodb/tgweather`;
    return MongoClient.connect(uri)
    .then(db => {
        console.log('Connected to mongodb');
        _db = db;
        return db;
    }).catch(err => {
        console.log(`Error connecting to mongodb: ${err}`);
        throw err; // throw err after logging
    });
};

function getDb() {
    return _db;
}

module.exports = {
    startDb,
    getDb,
};
