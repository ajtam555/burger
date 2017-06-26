var orm = require('../config/orm.js');

orm.selectAll('burgers');

orm.insertOne('burgers','burger_name');

orm.updateOne('burgers','burger_name','cheeseburger');

module.exports = burger.js;