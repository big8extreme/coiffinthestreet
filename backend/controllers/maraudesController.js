const Maraude = require('../models').Maraude;

module.exports = {
  index: function (req, res, next) {
    Maraude.findAll()
      .then((maraudes) => res.json({ maraudes }))
      .catch((err) => res.send(err));
  },

  show: function (req, res, next) {
    Maraude.findByPk(req.params.id)
      .then((maraude) => res.json({ maraude}))
      .catch((error) => res.status(500).json({error}));
  },


  create: function (req, res, next) {
    Maraude.create({

      userId:req.body.userId,
      title:req.body.title,
      startAt:req.body.startAt,
      endAt:req.body.endAt,
      description:req.body.description,
      city:req.body.city,
      isPublished: false,
      longitude:req.body.longitude,
      latitude:req.body.latitude
  

    })
    .then((maraude) => res.json({ maraude}))
    .catch((error) => res.status(500).json({error}));
}




};