var express = require('express');
var router = express.Router();
// const passport = require('passport');
const maraudesController = require('../controllers/maraudesController');

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', maraudesController.index);


router.get('/:id(\\d+)/', maraudesController.show);

// /api/v1/places/search?lat=6.37&lng=43.26&limit=20
router.get('/search', maraudesController.findByCoord);

router.post('/', maraudesController.create);

router.put('/:id(\\d+)/', maraudesController.update);

router.delete('/:id(\\d+)/', maraudesController.delete);


module.exports = router;
