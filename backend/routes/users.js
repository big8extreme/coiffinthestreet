var express = require('express');
var router = express.Router();
const passport = require('passport');

 router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  // router.get('/', function (req, res, next) {
  res.send('Hello wilders');
});

module.exports = router;
