const models = require('../models');
const Participant = models.Participant;
const mailer = require('../mailer/mailer');
const Maraude = require('../models/maraude');
const User = require('../models/user')

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
            isValidate: req.body.isValidate,
            email: req.body.email,
            job: req.body.job,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            city: req.body.city,
            age: req.body.age
        })
            .then((participant) => {
                const userDatas = {
                    firstName: participant.firstName,
                    lastName: participant.lastName,
                }
                Maraude.findAll({
                    where: {
                        maraudeId: req.body.maraudeId //Todo add email as query parameter
                    }
                        .then((coiffeur) => {
                            Maraude.findOne({
                                where: {
                                    userId: req.body.userId,
                                }
                                    .then((user) => {
                                        User.findAll({
                                            where: {
                                                userId: userId
                                            }
                                                .then((user) => {
                                                    const recipient = {
                                                        email: email.email,
                                                    }
                                                })
                                        })
                                    })
                            })
                        })
                    })
                    .catch((error) => res.status(500).json({ error }));
                    res.json({ participant });
                })
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