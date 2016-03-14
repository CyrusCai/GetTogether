'use strict';

// Load the module dependencies
var mongoose = require('mongoose');
var config = require('./config');

// Define the Mongoose configuration method
module.exports = function(){
  // Use Mongoose to connect to MongoDB
  var db = mongoose.connect(config.db);

  // Load the application models
  require('../app/models/user');
  // Return the Mongoose connection instance
  return db;

};
