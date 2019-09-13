const fs = require('fs');

if (typeof process.env.NODE_DATABASE_RESET !== 'undefined' && process.env.NODE_DATABASE_RESET === 'yes') {
    fs.copyFile('db-schema.json', 'db-container/db.json', (err) => {
        if (err) throw err;
        console.log('Database reset!!');
    });
}
