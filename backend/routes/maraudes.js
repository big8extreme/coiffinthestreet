var express = require('express');
var router = express.Router();
// const passport = require('passport');
const maraudesController = require('../controllers/maraudesController')

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', maraudesController.index);

router.get('/:id', maraudesController.show);

router.post('/', maraudesController.create);

router.put('/:id', maraudesController.update);

router.delete('/:id', maraudesController.delete);


module.exports = router;
