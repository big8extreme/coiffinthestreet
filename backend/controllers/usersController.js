const User = require('../models').User;
const { getHost } = require('../utils/ip');

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


  update: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({

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
          .then((updatedUser) => { res.json({ user: updatedUser }); })
          .catch((error) => res.status(500).json({ error }));
      });
  },

  create: function (req, res, next) {
    User.create({

      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      avatarUrl: `${getHost()}/${req.file.path}`,
      isAdmin: req.body.isAdmin,
      isActive: req.body.isActive,
      isBanned: req.body.isBanned,
      invitationCode: req.body.invitationCode,
      godFatherId: req.body.godFatherId,
      job: req.body.job,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt

    })
      .then((user) => res.json({ user }))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
  },

  delete: function (req, res, next) {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((user) => { res.json({ message: 'user has been deleted !' }); })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error)
      );
  }

};


