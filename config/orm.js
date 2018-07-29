// Create the methods that will execute the necessary MySQL commands in the controllers.

var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + ';', function(err,
        result) {
            if(err) throw err;
            cb(result)
        })
    }
}