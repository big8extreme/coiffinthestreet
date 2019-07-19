const models = require('../models');
const User = models.User;

module.exports = {
  checkValidInvitationCode: function (req, res, next) {
    if (req.body.invitationCode) {
      User.findOne({
        where: { invitationCode: req.body.invitationCode }
      })
        .then((user) => {
          if (user) {
            console.log('PARAIN', user);
            req.inviter = user;
            next();
          } else { // code is invalid
            console.log('PARAIN NON TROUVE');
            res.status(401).json({ message: 'Invitation code is invalid' });
            res.end();
          }
        })
        .catch(err => res.json({ err }).status(500));
    } else { // no invitation code
      res.json({ message: 'Invitation code empty' }).status(422);
      res.end();
    }
  }
};
