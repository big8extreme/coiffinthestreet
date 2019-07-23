const models = require('../models');
const sequelize = require('sequelize');
const { getHost } = require('../utils/ip');
const moment = require('moment');
const Maraude = models.Maraude;
const Picture = models.Picture;

module.exports = {
  index: function (req, res, next) {
    const { city, passed, lastweek, all } = req.query;
    const query = {
      include: ['photos', 'author'],
      where: {
      }
    };
    // only future by default
    query.where.startAt = { [sequelize.Op.gt]: moment(new Date()).toDate() };
    if (city) {
      query.where.city = sequelize.where(sequelize.fn('LOWER', sequelize.col('city')), 'LIKE', '%' + city + '%');
    }
    if (lastweek) {
      query.where.endAt = { [sequelize.Op.gte]: moment(new Date()).subtract(7, 'days').toDate() };
      delete query.where.startAt;
    }
    if (passed) {
      query.where.endAt = { [sequelize.Op.lt]: moment(new Date()).toDate() };
      delete query.where.startAt;
    }
    if (all) {
      delete query.where.endAt;
      delete query.where.startAt;
    }
    Maraude.findAll(query)
      .then((maraudes) => {
        res.json({ maraudes, count: maraudes.length });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },

  show: function (req, res, next) {
    Maraude.findByPk(req.params.id, { include: ['photos'] })
      .then((maraude) => { res.json({ maraude }); })
      .catch((error) => res.status(500).json({ error }));
  },

  create: function (req, res, next) {
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
      .catch((error) => {
        res.status(500).json({ error });
      });
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
      attributes: [
        'id', 'userId', 'title', 'startAt', 'endAt', 'description', 'address', 'city', 'isPublished', 'longitude', 'latitude',
        [sequelize.literal('6371 * acos(cos(radians(' + lat + ')) * cos(radians(latitude)) * cos(radians(' + lng + ') - radians(longitude)) + sin(radians(' + lat + ')) * sin(radians(latitude)))'), 'distance']],
      where: { startAt: { [sequelize.Op.gt]: moment(new Date()).toDate() } },
      order: sequelize.col('distance'),
      limit: parseInt(limit) || 10,
      include: { all: true, nested: true }
    })
      .then((maraudes) => {
        res.json({ maraudes });
      })
      .catch((error) => { res.status(500).json({ error }); });
  },

  upload: function (req, res, next) {
    Picture.create({
      url: `${getHost()}/${req.file.path}`,
      maraudeId: req.params.id
    })
      .then((picture) => {
        Maraude.findByPk(req.params.id, { include: ['photos'] })
          .then((maraude) => {
            res.json({ maraude });
          })
          .catch((error) => res.status(500).json({ error }));

      })
      .catch((error) => res.status(500).json({ error }));
  }

};
