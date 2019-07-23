var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/usersController');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatars/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

//router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
// res.send('Hello wilders');
//});

router.get('/', userController.index);

router.get('/:id', userController.show);

router.post('/', upload.single('avatar'), userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;
