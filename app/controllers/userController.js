'use strict';
var User = require('mongoose').model('User');
var passport = require('passport');

exports.saveUser = function(req,res,next){
  console.log("enter save user")
  var user = new User(req.body);
  user.save(function(err){
    if(err) throw err;
    else{
      console.log('redirect to activities');
      res.redirect("/activities");
    }
  });
};


exports.authenticate = function(req,res,next){
  passport.authenticate('local', { successRedirect: '/activities',
                                   failureRedirect: '/',
                                   failureFlash: true });
};