var express = require('express');               //Packages Import
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var request = require('request');
var cookieParser = require('cookie-parser')
var passport = require('passport');
var http = require('http');
var https = require('https');
var fs = require('fs');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);
const mongoDBConnection = require('./mongoDbConnection')
const appRoutes = require('./routes');

var app = express();


var port = 5000;

// set up our express application
app.set('port', port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser("secretcode"));
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(passport.initialize());
//app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

appRoutes.initRoutes(app)

app.listen(port);


http.createServer(app);


//httpServer.listen(port);
//httpsServer.listen(8443);

module.export = app;