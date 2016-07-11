var express = require('express');
var app = express();
var morgan = require('morgan');
var parser = require('body-parser');
var db = require('./db');
var router = require('./routes.js');
var path = require('path');

app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static('./Client'));
app.use(router);


module.exports = app;