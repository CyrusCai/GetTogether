'use strict';
// Load the module dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');

module.exports = function(db) {
  var app = express();
// setup our public directory (which will serve any file stored in the 'public' directory)
  app.use(express.static('public'));
  app.use(cookieParser());

  // express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //set session of
  app.use(session({ secret: 'keyboard cat' , resave: false, saveUninitialized: false}));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  // view engine setup
  app.set('views', path.join(__dirname, '../views/'));
  app.set('view engine', 'jade');

  // loading the routes. If new routes is added, add require and app.use here
  var index = require('../app/routes/index');
  var users = require('../app/routes/user');
  var activity = require('../app/routes/activity');

  app.use('/',index);
  app.use('/activities', activity);
  app.use('/users', users);

  // require('../app/routes/index')(app);
  // require('../app/routes/user')(app);
  // require('../app/routes/activity')(app);

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));



  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  };

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  return app;
};