const User = require('../models').User;

module.exports = {

  index: function (req, res, next) {
    User.findAll()
      .then((users) => res.json({ users }))
      .catch((error) => res.status(500).json({error}));
  },

  show: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => res.json({ user}))
      .catch((error) => res.status(500).json({error}));
  },


  create: function (req, res, next) {
    User.create({

      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      password:req.body.password,
      avatarUrl:req.body.avatarUrl,
      isAdmin: false,
      isActive: false,
      isBanned: false,
      invitationCode:req.body.invitationCode,
      job:req.body.job,
      createdAt:req.body.createdAt,
      updatedAt:req.body.updatedAt

    })
    .then((user) => res.json({ user}))
    .catch((error) => res.status(500).json({error}));
},

//VIDEO FULL TODOAPP 29:45


};


