const models = require('../models');
const Config = models.Config;

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
};