const models = require('../models');
const User = models.User;
const Maraude = models.Maraude;

// Find Maraude by id
Maraude.findByPk(1, { include: ['photos', 'author'] })
  .then((response) => { console.log(response); })
  .catch((error) => { console.log(error); });

// Find maraude by id and get associated pictures
Maraude.findByPk(1, { include: ['photos'] })
  .then((maraude) => {
    maraude.addPhotos([4, 5, 6])
      .then((associatedPhotoAndMAraude) => { console.log(associatedPhotoAndMAraude); })
      .catch((error) => { console.log(error); });
  })
  .catch((error) => { console.log(error); });

// Find user by firstname and associate it childFather
User.findOne({ where: { firstname: 'Parrain' } })
  .then((user) => {
    user.setChildFathers([2])
      .then((user) => { console.log(user); })
      .catch((error) => { console.log(error); });

  })
  .catch((error) => { console.log(error); });

// Get gotFather of a  given user
User.findOne({ where: { firstname: 'Fieul' } })
  .then((user) => {
    user.getGodFather()
      .then((user) => { console.log(user); })
      .catch((error) => { console.log(error); });

  })
  .catch((error) => { console.log(error); });

// Get childFather on a given user
User.findOne({ where: { firstname: 'Parain' } })
  .then((user) => {
    user.getChildFathers()
      .then((user) => { console.log(user); })
      .catch((error) => { console.log(error); });

  })
  .catch((error) => { console.log(error); });
