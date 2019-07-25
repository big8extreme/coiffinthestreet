const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models').User;

const localAuthStrategy = passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
},
  function (email, password, done) {
    User.findOne({ where: { email: email } })
      .then((user) => {
        if (user && user.isActive) { // dont loggin user if is not active
          bcrypt.compare(password, user.dataValues.password, function (err, res) {
            if (res) {
              return done(null, user.dataValues);
            } else {
              return done(null, false);
            }
          });
        } else {
          return done(null, false);
        }
      })
      .catch(err => done(null, false));
  }
));

module.exports.localAuthStrategy = localAuthStrategy;