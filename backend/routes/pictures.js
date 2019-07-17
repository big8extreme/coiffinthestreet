var express = require('express');
var router = express.Router();
// const passport = require('passport');
const picturesController = require('../controllers/picturesController');

router.delete('/:id', picturesController.delete);

module.exports = router;
