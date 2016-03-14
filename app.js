'use strict';

// Load the module dependencies
var mongoose = require('./config/mongoose');
var passport = require('./config/passport');
var express = require('./config/express');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Configure the Passport middleware
var passport = passport();

module.exports = app;
