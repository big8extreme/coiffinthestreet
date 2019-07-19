var express = require('express');
var router = express.Router();
const participantsController = require('../controllers/participantsController');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), participantsController.index);

router.get('/:id', participantsController.show);

router.post('/', participantsController.create);

router.put('/:id', passport.authenticate('jwt', { session: false }), participantsController.update);

router.delete('/:id', passport.authenticate('jwt', { session: false }), participantsController.delete);

module.exports = router;