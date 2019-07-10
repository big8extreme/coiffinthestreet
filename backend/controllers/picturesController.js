const models = require('../models');
const Picture = models.Picture;

module.exports = {
    delete: function (req, res, next) {
        Picture.findByPk(req.params.id)
        .then((picture) => {
          if(picture){
            picture.destroy()
            .then((deletedPicture) => {
              res.json({message: 'Picture has been deleted'})
            })
            .catch(err => res.json({err}).status(500))
          }
        })
        .catch(err => res.json({err}).status(500))
    }
};
