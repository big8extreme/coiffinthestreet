const models = require('../models');
const Participant = models.Participant;
const Maraude = models.Maraude;
const User = models.User;
const mailer = require('../mailer/mailer');


module.exports = {
    index: function (req, res, next) {
        Participant.findAll({ include: 'maraude' })
            .then((participants) => { res.json({ participants }); })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Participant.findByPk(req.params.id, { include: 'maraude' })
            .then((participant) => { res.json({ participant }); })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Participant.create({
            maraudeId: req.body.maraudeId,
            email: req.body.email,
            job: req.body.job,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            city: req.body.city,
            age: req.body.age,
            isValidate: false
        })
            .then((participant) => {
                res.json({ participant });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error });
            });

    },
    update: function (req, res, next) {
        Participant.findByPk(req.params.id)
            .then((participant) => {
                participant.update({
                    maraudeId: req.body.maraudeId,
                    isValidate: req.body.isValidate,
                    email: req.body.email,
                    job: req.body.job,
                    lastName: req.body.lastName,
                    firstName: req.body.firstName,
                    city: req.body.city,
                    age: req.body.age
                })
                    .then((updatedParticipant) => { res.json({ participant: updatedParticipant }); })
                    .catch((error) => res.status(500).json({ error }));
            });
    },
    delete: function (req, res, next) {
        Participant.findByPk(req.params.id)
            .then((participant) => {
                participant.destroy()
                    .then((participant) => { res.json({ message: 'Participant has been deleted !' }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
};