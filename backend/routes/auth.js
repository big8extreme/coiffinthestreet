const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Require and setup uploader to keep files in uploads folder
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

/* POST email and password and return jwt if authenticated successfull */
router.post('/signin', passport.authenticate('local', { session: false }), authController.signIn);

/* POST create new user. multer create an object, we can access it with req.avatar */
router.post('/signup', upload.single('avatar'), authController.signUp);

router.post('/reset', authController.forgetPassword);

module.exports = router;