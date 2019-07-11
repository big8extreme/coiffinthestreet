const models = require('../models');
const Maraude = models.Maraude;
const faker = require('faker');

Maraude.create({
  userId: 1,
  title: 'Maraude no 1',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.368414',
  latitude: '43.301999',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 2,
  title: 'Maraude no 2',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.389014',
  latitude: '43.29925',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 3,
  title: 'Maraude no 3',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.376311',
  latitude: '43.293003',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 4,
  title: 'Maraude no 4',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.352745',
  latitude: '43.281954',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 5,
  title: 'Maraude no 5',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.370941',
  latitude: '43.273206',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 6,
  title: 'Maraude no 6',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.376434',
  latitude: '43.263706',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 7,
  title: 'Maraude no 7',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.367508',
  latitude: '43.240201',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 8,
  title: 'Maraude no 8',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.362921',
  latitude: '43.233866',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 9,
  title: 'Maraude no 9',
  startAt: new Date(),
  endAt: new Date(),
  startDate: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.389244',
  latitude: '43.334752',
  photos: [
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
    { url: faker.image.imageUrl() },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

  Maraude.create({
    userId: 10,
    title: 'Maraude no 10',
    startAt: new Date(),
    endAt: new Date(),
    description: faker.lorem.sentence(),
    city: 'Marseille',
    isPublished: true,
    longitude: '5.41259',
    latitude: '43.337499',
    photos: [
      { url: faker.image.imageUrl() },
      { url: faker.image.imageUrl() },
      { url: faker.image.imageUrl() },
    ]
  }, { include: ['photos'] })
    .then((maraude) => { console.log(maraude); })
    .catch((error) => { console.log(error); });

    Maraude.create({
      userId: 11,
      title: 'Maraude no 11',
      startAt: new Date(),
      endAt: new Date(),
      description: faker.lorem.sentence(),
      city: 'Nice',
      isPublished: true,
      longitude: '5.41259',
      latitude: '43.337499',
      photos: [
        { url: faker.image.imageUrl() },
        { url: faker.image.imageUrl() },
        { url: faker.image.imageUrl() },
      ]
    }, { include: ['photos'] })
      .then((maraude) => { console.log(maraude); })
      .catch((error) => { console.log(error); });