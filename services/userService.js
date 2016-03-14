var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var passport = require("passport");
var User = mongoose.model("User");

router.post('/register', function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err){
    if(err) throw err;
    else res.redirect("/activities");
  });
});


router.post('/login',
            passport.authenticate('local', { successRedirect: '/activities',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

module.exports = router;
