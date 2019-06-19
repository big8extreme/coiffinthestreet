const models = require('../models');
const Maraude = models.Maraude;

module.exports = {
  index: function (req, res, next) {
    Maraude.findAll({include:['photos']})
      .then((maraudes) => { res.json({ maraudes }); })
      .catch((error) => res.status(500).json({ error }));
  },

  show: function (req, res, next) {
    Maraude.findByPk(req.params.id, {include:['photos']})
      .then((maraude) => { res.json({ maraude }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: function (req, res, next) {
    // no safe //
    Maraude.create({
      userId: req.body.userId,
      title: req.body.title,
      startAt: req.body.startAt,
      endAt: req.body.endAt,
      description: req.body.description,
      city: req.body.city,
      isPublished: true,
      longitude: req.body.longitude,
      latitude: req.body.latitude
    })
      .then((maraude) => { res.json({ maraude }); })
      .catch((error) => res.status(500).json({ error }));
  },

  update: function (req, res, next) {
    Maraude.findByPk(req.params.id)
      .then((maraude) => {
        maraude.update({
          userId: req.body.userId,
          title: req.body.title,
          startAt: req.body.startAt,
          endAt: req.body.endAt,
          description: req.body.description,
          city: req.body.city,
          isPublished: req.body.isPublished,
          longitude: req.body.longitude,
          latitude: req.body.latitude
        })
          .then((updatedMaraude) => { res.json({ updatedMaraude }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },

  delete: function (req, res, next) {
    Maraude.findByPk(req.params.id)
      .then((maraude) => {
        maraude.destroy()
          .then((maraude) => { res.json({ message: 'maraude has been deleted !' }); })
          .catch((error) => res.status(500).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  },
};