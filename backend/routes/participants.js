var express = require('express');
var router = express.Router();
const passport = require('passport');
const participantController = require('../controllers/participantsController');

/* GET users listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
//router.get('/', passport.authenticate('jwt', { session: false }), participantController.index);


router.get('/',passport.authenticate('jwt', { session: false }),   participantController.index);

router.get('/:id', passport.authenticate('jwt', { session: false }),  participantController.show);

router.post('/',passport.authenticate('jwt', { session: false }),   participantController.create);


module.exports = router;