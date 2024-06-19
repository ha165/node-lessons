const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'testing',
    user: 'root',
    password: '@BurneyWailer32'
});

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Database Connected Succesfully");
    }
});

module.exports = connection;