// Connection file

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhose',
    user: 'root',
    password: 'Qwerty123',
    database: 'burgers_db'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadid);
});

module.exports = connection;