'use strict';

var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/register', userController.saveUser);

router.post('/login',userController.authenticate);


module.exports = router;
