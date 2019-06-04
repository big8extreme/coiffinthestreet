const models = require('../models');
const User = models.User;
const Picture = models.Picture;
const Maraude = models.Maraude;

// Create User (godFather)
User.create({
  firstName: 'Parrain',
  lastName: 'DELEPAMPA',
  email: 'taattatata@gmail.com',
  password: 'test1234',
  avatarUrl: 'www.google/image1.png',
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'coiffeur'
})
  .then((user) => { console.log(user); })
  .catch((error) => { console.log(error); });

// Create other User (childFather)
User.create({
  firstName: 'Filleul',
  lastName: 'DOE',
  email: 'filleul@gmail.com',
  password: 'test1234',
  avatarUrl: 'www.google/image2.png',
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'efgh',
  job: 'coiffeur'
})
  .then((user) => { console.log(user); })
  .catch((error) => { console.log(error); });

// Create Maraude and associated pictures
Maraude.create({
  userId: 1,
  title: 'Maraude no 1',
  startAt: new Date(),
  endAt: new Date(),
  description: 'la description',
  city: 'Marseille',
  isPublished: true,
  longitude: '54.4783783748',
  latitude: '6.783748',
  photos: [
    { url: 'www.google.fr/image8.png' },
    { url: 'www.google.fr/image9.png' },
    { url: 'www.google.fr/image10.png' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

// Create pictures without associations
Picture.bulkCreate([
  { url: 'www.google.fr/image1.png' },
  { url: 'www.google.fr/image2.png' },
  { url: 'www.google.fr/image3.png' },
])
  .then((pictures) => { console.log(pictures); })
  .catch((error) => { console.log(error); });

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