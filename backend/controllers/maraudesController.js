const models = require('../models');
const sequelize = require('sequelize');
const Maraude = models.Maraude;

module.exports = {
  index: function (req, res, next) {
    const { city,  } = req.query;
 const query = {where: {
}}

if(req.query && req.query.city){
  query.where.city = req.query.city;
}
   Maraude.findAll(query)
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
  findByCoord: function (req, res, next) {
    const { lat, lng, limit } = req.query;
    Maraude.findAll({
      attributes: ['id', 'title', [sequelize.literal('6371 * acos(cos(radians(' + lat + ')) * cos(radians(latitude)) * cos(radians(' + lng + ') - radians(longitude)) + sin(radians(' + lat + ')) * sin(radians(latitude)))'), 'distance']],
      order: sequelize.col('distance'),
      limit: parseInt(limit) || 10,
    })
      .then((places) => {
        res.json({ places });
      })
      .catch((error) => { res.status(500).json({ error }); });
  }
};