var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/usersController');

//router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
 // res.send('Hello wilders');
//});

router.get('/', passport.authenticate('jwt', { session: false }), userController.index);

//router.get('/:id', passport.authenticate('jwt', { session: false }), userController.show);

router.post('/', passport.authenticate('jwt', { session: false }), userController.create);

//router.put('/:id', passport.authenticate('jwt', { session: false }), userController.update);

router.delete('/:id', passport.authenticate('jwt', { session: false }), userController.delete);

module.exports = router;
