var connection = require('./connection.js');

var ORM = {
    selectAll: function(tbl) {
        var queryString = 'select * from ??;';
        connection.query(queryString, [tbl], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tbl, val) {
        var queryString = 'insert into ?? (burger_name, devoured, date) values (?, false, now());';
        connection.query(queryString, [tbl, val], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tbl, col, val) {
        var queryString = 'update ?? set ?? where ?? = ?;';
        connection.query(queryString, [tbl, col, col, val], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    }
}

module.exports = ORM;