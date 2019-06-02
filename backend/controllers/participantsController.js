const Participant = require('../models').Participant;

module.exports = {
  index: function (req, res, next) {
    Participant.findAll()
      .then((participants) => res.json({ participants }))
      .catch((err) => res.send(err));
  },


  show: function (req, res, next) {
    Participant.findByPk(req.params.id)
      .then((participant) => res.json({ participant}))
      .catch((error) => res.status(500).json({error}));
  },


  create: function (req, res, next) {
    Participant.create({

      maraudeId:req.body.maraudeId,
      isValidate:req.body.isValidate,
      email:req.body.email,
      job:req.body.job

       })
    .then((participant) => res.json({ participant}))
    .catch((error) => res.status(500).json({error}));
}


};