var express = require('express');
var router = express.Router();
const passport = require('passport');
const maraudeController = require('../controllers/maraudesController');

/* GET users listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', passport.authenticate('jwt', { session: false }), maraudeController.index);

router.get('/', passport.authenticate('jwt', { session: false }),  maraudeController.index);

router.get('/:id',passport.authenticate('jwt', { session: false }),   maraudeController.show);

router.post('/', passport.authenticate('jwt', { session: false }),  maraudeController.create);


module.exports = router;
