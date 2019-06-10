const User = require('../models').User;

module.exports = {

  index: function (req, res, next) {
    User.findAll()
      .then((users) => res.json({ users }))
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => res.json({ user }))
      .catch((error) => res.status(500).json({ error }));
  },


  create: function (req, res, next) {
    User.create({

      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      avatarUrl: req.body.avatarUrl,
      isAdmin: req.body.isAdmin,
      isActive: req.body.isActive,
      isBanned: req.body.isBanned,
      invitationCode: req.body.invitationCode,
      job: req.body.job,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt

    })
      .then((user) => res.json({ user }))
      .catch((error) => res.status(500).json({ error }));
  },


  delete: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((user) => { res.json({ message: 'user has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  }


  // NE PAS TOUCHER HAFID S'OCCUPE DE FINIR

};


