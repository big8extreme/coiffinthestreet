var express = require('express');
var router = express.Router();
// const passport = require('passport');
const maraudesController = require('../controllers/maraudesController');
const passport = require('passport');
// Require and setup uploader to keep files in uploads folder
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/maraudes/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } });

/* GET maraudes listing. */
// Use header "Authorization": "bearer token-generated-by-signin"
router.get('/', maraudesController.index);


router.get('/:id(\\d+)/', maraudesController.show);

// /api/v1/places/search?lat=6.37&lng=43.26&limit=20
router.get('/search', maraudesController.findByCoord);

router.post('/', passport.authenticate('jwt', { session: false }), maraudesController.create);

router.put('/:id(\\d+)/', passport.authenticate('jwt', { session: false }), maraudesController.update);

router.put('/:id(\\d+)/pictures/', passport.authenticate('jwt', { session: false }), upload.single('pictures'), maraudesController.upload);

router.delete('/:id(\\d+)/', passport.authenticate('jwt', { session: false }), maraudesController.delete);


module.exports = router;
