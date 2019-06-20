const models = require('../models');
const Config = models.Config;

module.exports = {
    index: function (req, res, next) {
        Config.findAll()
            .then((configs) => { res.json({ configs: configs[0] }); })
            .catch((error) => res.status(500).json({ error }));
    },

    show: function (req, res, next) {
        Config.findByPk(req.params.id)
            .then((config) => { res.json({ config }); })
            .catch((error) => res.status(500).json({ error }));
    },

    create: function (req, res, next) {
        // no safe //
        Config.create({
            cgu: req.body.cgu,
            charte: req.body.charte,
            email: req.body.email,
            videoGuidelines: req.body.videoGuidelines,
            videoPath: req.body.videoPath,
        })
            .then((config) => { res.json({ config }); })
            .catch((error) => res.status(500).json({ error }));
    },

    update: function (req, res, next) {
        Config.findByPk(req.params.id)
            .then((config) => {
                config.update({
                    cgu: req.body.cgu,
                    charte: req.body.charte,
                    email: req.body.email,
                    videoGuidelines: req.body.videoGuidelines,
                    videoPath: req.body.videoPath,
                })
                    .then((updatedConfig) => { res.json({ updatedConfig }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },

    delete: function (req, res, next) {
        Config.findByPk(req.params.id)
            .then((config) => {
                config.destroy()
                    .then((config) => { res.json({ message: 'The text has been deleted !' }); })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    },
};