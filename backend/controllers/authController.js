const jwt = require('jsonwebtoken');
const User = require('../models').User;
const os = require('os');
const mailer = require('../mailer/mailer')
const bcrypt = require('bcrypt');

module.exports = {
  signIn: function (req, res, next) {
    /* By default passport save authenticated user in req.user object */
    const user = {
      id: req.user.id,
      email: req.user.email,
      isAdmin: req.user.isAdmin
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
      isAdmin: req.body.isAdmin || false
    })
      .then((newUser) => {
        const currentDate = new Date()
        const userDatas = {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          current_year: currentDate.getFullYear(),
          compagny: 'Coiffinthestreet',
          adress_mail: 'Coiffla@hotmail.com'
        }
        mailer(userDatas, newUser.email, 'welcome')
        res.json({ user: newUser });
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
    }

    User.findAll({
      where: {
        email: req.body.email //Todo add email as query parameter
      }
    })
      .then((users) => {
        if (!users) {
          return res.status(500).json({ message: 'Email introuvable merci de verifier' })
        }

        let user = users[0];
        //verifier si l'utilisateur exist en base
        //Génère un nouveau mot de passe de manière aléatoire
        //Encrypter le mot de passe (bcrypt)
        const password = generatePassword();
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            console.log(password + 'rerere')

            // Store hash in your password DB.
            //Mettre à jour le mot de passe de l'utilisateur (avec la version chiffré)
            user.update({
              password: hash
            })
              .then((updatedUser) => {
                const userDatas = {
                  id: user.id,
                  password: password,
                }
                //dans l'email, envoyer le mot de passe en clair
                mailer(userDatas, user.email, 'resetPassword')
                res.json({ updatedUser });
              })
              .catch((error) => res.status(500).json({ error }));
          })
        });
      })
      .catch((err) => res.send(err));

  }
};