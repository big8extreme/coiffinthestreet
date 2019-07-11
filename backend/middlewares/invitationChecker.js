const models = require('../models');
const User = models.User;

module.exports = {
  checkValidInvitationCode: function(req, res, next){
    if(req.body.invitationCode){
      User.findOne({
        where: {invitationCode: req.body.invitationCode}
      })
      .then((user) => {
        if(user){
          req.inviter = user
          next()
        } else { // code is invalid
          return res.json({message: 'Invitation code is invalid'}).status(401)
        }
      })
      .catch(err => res.json({err}).status(500))
    } else { // no invitation code
      return res.json({message: 'Invitation code empty'}).status(422)
    }
  }
}
