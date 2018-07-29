// Create the code that will call the ORM functions using burger specific input for the ORM.

var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        })
    }
}

module.exports = burger;