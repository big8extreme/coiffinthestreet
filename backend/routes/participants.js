var express = require('express');
var router = express.Router();
const participantsController = require('../controllers/participantsController');

router.get('/', participantsController.index);

router.get('/:id', participantsController.show);

router.post('/', participantsController.create);

router.put('/:id', participantsController.update);

router.delete('/:id', participantsController.delete);

module.exports = router;