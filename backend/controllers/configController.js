const models = require('../models');
const Config = models.Config;
const mailer = require('../mailer/mailer')

module.exports = {
    index: function (req, res, next) {
        Config.findAll()
            .then((configs) => { res.json({ configs: configs[0] }); })
            .catch((error) => res.status(500).json({ error }));
    },

    update: function (req, res, next) {
        Config.findByPk(1)
            .then((config) => {
                config.update({
                    cgu: req.body.cgu,
                    charte: req.body.charte,
                    email: req.body.email,
                    videoGuidelines: req.body.videoGuidelines,
                    videoPath: req.body.videoPath,
                    legalMention: req.body.legalMention
                })
                    .then((updatedConfig) => { res.json({ updatedConfig }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },

    update: function (req, res, next) {
        const user = {
            id: req.body.id,
        };
    },

    contactAdmin: function (req, res, next) {
        // const message = {
        //     subject: req.body.subject,
        //     message: req.body.message
        // }
        const userDatas = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            subject: req.body.subject,
            message: req.body.message
        };
        mailer(userDatas, userDatas.email, 'contactAdmin')
        res.json({ message: userDatas });
    }

};
