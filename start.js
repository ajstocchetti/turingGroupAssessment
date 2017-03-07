'use strict';
const db = require('./db/connect.js');

db.startDb().then(() => {
    require('./server.js');
}).catch(err => {
    console.log(err);
    console.log('Could not start server');
    process.exit(1);
});
