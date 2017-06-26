var express = require('express');
var method = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(method('_method'));

var expHB = require('express-handlebars');

app.engine('handlebars', expHB({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT);