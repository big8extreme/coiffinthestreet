var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/usersController');

/* GET users listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
//router.get('/', passport.authenticate('jwt', { session: false }), userController.index);

router.get('/', passport.authenticate('jwt', { session: false }), userController.index);

router.get('/:id', passport.authenticate('jwt', { session: false }), userController.show);

router.post('/', passport.authenticate('jwt', { session: false }), userController.create);

// NE PAS TOUCHER HAFID S'OCCUPE DE FINIR

module.exports = router;
