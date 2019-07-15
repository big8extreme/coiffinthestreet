const jwt = require('jsonwebtoken');
const User = require('../models').User;
const os = require('os');
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
      city: req.user.city
    };
    /* Signin jwt with your SECRET key */
    const token = jwt.sign(user, 'your_jwt_secret');
    /* Return user and token in json response */
    res.json({ user, token });
  },
  signUp: function (req, res, next) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      avatarUrl: req.file ? `${process.env.HOST}/${req.file.path}` : null,
      isAdmin: req.body.isAdmin || false,
      invitationCode: generateRandomString(8),
      godFatherId: req.inviter.id
    })
      .then((newUser) => {
        const userDatas = {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          compagny: 'Coiffinthestreet', //Todo add it to .env
          adress_mail: 'Coiffla@hotmail.com' //Todo add it to .env
        };
        mailer(userDatas, newUser.email, 'welcome');
        const token = jwt.sign(user, 'your_jwt_secret');
        /* Return user and token in json response */
        res.json({ user, token });
      })
      .catch((err) => res.send(err));
  },

  forgetPassword: function (req, res, next) {
    //Charger en base l'utilisateur concerné
    const generatePassword = () => {
      let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$_=+';
      let password = '';
      for (i = 0; i < 10; i++) {
        if (i < 9) k = Math.floor(Math.random() * 62);
        else k = Math.floor(Math.random() * 8) + 62;
        password += char[k];
      }
      return password;
    };

    //verifier si l'utilisateur exist en base
    //Todo add email as query parameter
    //TODO Use other function than findAll to get only one result
    User.findAll({ where: { email: req.body.email } })
      .then((users) => {
        if (!users) {
          return res.status(500).json({ message: 'Email introuvable merci de verifier' });
        }

        let user = users[0];
        //Génère un nouveau mot de passe de manière aléatoire
        //Encrypter le mot de passe (bcrypt)
        //TODO Use other function than findAll to get only one result      const password = generatePassword();
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            //Mettre à jour le mot de passe de l'utilisateur (avec la version chiffré)
            user.update({
              password: hash
            })
              .then((updatedUser) => {
                const userDatas = {
                  id: user.id,
                  password: password //dans l'email on renvoi le mot de passe en clair
                };

                mailer(userDatas, user.email, 'resetPassword');
                res.json({ updatedUser });
              })
              .catch((error) => res.status(500).json({ error }));
          });
        });
      })
      .catch((err) => res.send(err));
  }
};
