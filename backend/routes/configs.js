var express = require('express');
var router = express.Router();
// const passport = require('passport');
const configsController = require('../controllers/configController')

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', configsController.index);

router.get('/:id', configsController.show);

router.post('/', configsController.create);

router.put('/:id', configsController.update);

router.delete('/:id', configsController.delete);


module.exports = router;
