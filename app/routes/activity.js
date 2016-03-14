'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.user){
    res.render('activityList', { title: 'Activity',username: req.user.username });
  }else{
   res.render('activityList', { title: 'Activity'});
 }
});

router.get('/pendding', function(req, res, next) {

  if(req.user){
   res.render('activityPendding', { title: 'Pendding Activity', username: req.user.username });
 }else{
   res.render('activityPendding', { title: 'Pendding Activity' });
 }
});

module.exports = router;

