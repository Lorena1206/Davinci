var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: 'davinci'
});

module.exports = con;