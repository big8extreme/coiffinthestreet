const jwt = require('jsonwebtoken');
const User = require('../models').User;
const { getHost } = require('../utils/ip');
const mailer = require('../mailer/mailer');
const bcrypt = require('bcrypt');
const { generateRandomString } = require('../utils/string');
module.exports = {
  signIn: function (req, res, next) {
    /* By default passport save authenticated user in req.user object */
    const user = {
      id: req.user.id,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      job: req.user.job,
      city: req.user.city,
      invitationCode: req.user.invitationCode,
    };
    /* Signin jwt with your SECRET key */
    const token = jwt.sign(user, process.env.JWT_SECRET);
    /* Return user and token in json response */
    res.json({ user, token });
  },
  signUp: function (req, res, next) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      avatarUrl: req.file ? `${getHost()}/${req.file.path}` : null,
      isAdmin: req.body.isAdmin || false,
      isActive: true,
      invitationCode: generateRandomString(8),
      godFatherId: req.inviter.id
    })
      .then((newUser) => {
        const userDatas = {
          id: newUser.id,
          isAdmin: newUser.isAdmin,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          job: newUser.job,
          city: newUser.city,
          invitationCode: newUser.invitationCode,
        };
        mailer(userDatas, newUser.email, 'welcome');
        const token = jwt.sign(userDatas, process.env.JWT_SECRET);
        /* Return user and token in json response */
        res.json({ user: userDatas, token });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message, error });
      });
  },
  deleteAccount: function (req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          user.update({ isActive: false }) // dont really destroy to keep userId on maraude
            .then((deletedUser) => { res.json({ user: deletedUser }); })
            .catch((error) => { res.status(500).json({ error }); });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  changePassword: function (req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          bcrypt.compare(req.body.oldPassword, user.dataValues.password, function (err, result) {
            if (result) {
              user.update({ password: req.body.password })
                .then((updatedUser) => { res.json({ user: updatedUser }); })
                .catch((error) => { res.status(500).json({ error }); });
            } else {
              res.status(401).json({ message: 'Invalid password' });
            }
          });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  forgetPassword: function (req, res, next) {
    //Charger en base l'utilisateur concerné
    const generatePassword = () => {
      let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      let password = '';
      let k;
      for (let i = 0; i < 10; i++) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        password += randomChar;
      }
      return password;
    };

    //verifier si l'utilisateur exist en base
    //Todo add email as query parameter
    //TODO Use other function than findAll to get only one result
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (!user) {
          return res.status(500).json({ message: 'Email introuvable merci de verifier' });
        }

        //Génère un nouveau mot de passe de manière aléatoire
        //Encrypter le mot de passe (bcrypt)
        //TODO Use other function than findAll to get only one result    
        const password = generatePassword();
        user.update({
          password
        })
          .then((updatedUser) => {
            const userDatas = {
              id: user.id,
              password: password //dans l'email on renvoi le mot de passe en clair
            };

            mailer(userDatas, user.email, 'resetPassword');
            res.json({ updatedUser });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }
};
