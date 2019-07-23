const models = require('../models');
const Maraude = models.Maraude;

Maraude.create({
  userId: 1,
  title: 'Maraude en bord de Mer',
  startAt: new Date(),
  endAt: new Date(),
  description: 'Dans une brise fraîche et agréable ! Merci aux participants !',
  city: 'Marseille',
  isPublished: true,
  longitude: '5.368414',
  latitude: '43.301999',
  photos: [
    { url: 'uploads/maraudes/IMG_001.jpg' },
    { url: 'uploads/maraudes/IMG_002.jpg' },
    { url: 'uploads/maraudes/IMG_003.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 2,
  title: 'Maraude Matinale',
  startAt: new Date(),
  endAt: new Date(),
  description: "On se lève tous pour la maraude !",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.389014',
  latitude: '43.29925',
  photos: [
    { url: 'uploads/maraudes/IMG_004.jpg' },
    { url: 'uploads/maraudes/IMG_005.jpg' },
    { url: 'uploads/maraudes/IMG_006.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 3,
  title: 'Maraude du Soleil',
  startAt: new Date(),
  endAt: new Date(),
  description: 'Le soleil tape fort mais on est toujours là pour marauder !',
  city: 'Marseille',
  isPublished: true,
  longitude: '5.376311',
  latitude: '43.293003',
  photos: [
    { url: 'uploads/maraudes/IMG_007.jpg' },
    { url: 'uploads/maraudes/IMG_008.jpg' },
    { url: 'uploads/maraudes/IMG_009.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 4,
  title: 'Maraude du ricard',
  startAt: new Date('2019-06-07T14:15:00'),
  endAt: new Date('2019-06-07T18:15:00'),
  description: 'Maraude exceptionnelle à la gare de Nîmes pendant la féria.',
  city: 'Nîmes',
  isPublished: true,
  longitude: '4.35',
  latitude: '43.8333',
  photos: [
    { url: 'uploads/maraudes/IMG_001.jpg' },
    { url: 'uploads/maraudes/IMG_002.jpg' },
    { url: 'uploads/maraudes/IMG_003.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 5,
  title: 'Maraude no 5',
  startAt: new Date(),
  endAt: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.370941',
  latitude: '43.273206',
  photos: [
    { url: 'uploads/maraudes/IMG_004.jpg' },
    { url: 'uploads/maraudes/IMG_005.jpg' },
    { url: 'uploads/maraudes/IMG_006.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 6,
  title: 'Maraude no 6',
  startAt: new Date(),
  endAt: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.376434',
  latitude: '43.263706',
  photos: [
    { url: 'uploads/maraudes/IMG_007.jpg' },
    { url: 'uploads/maraudes/IMG_008.jpg' },
    { url: 'uploads/maraudes/IMG_009.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 7,
  title: 'Maraude no 7',
  startAt: new Date(),
  endAt: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.367508',
  latitude: '43.240201',
  photos: [
    { url: 'uploads/maraudes/IMG_001.jpg' },
    { url: 'uploads/maraudes/IMG_002.jpg' },
    { url: 'uploads/maraudes/IMG_003.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 8,
  title: 'Maraude no 8',
  startAt: new Date(),
  endAt: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.362921',
  latitude: '43.233866',
  photos: [
    { url: 'uploads/maraudes/IMG_004.jpg' },
    { url: 'uploads/maraudes/IMG_005.jpg' },
    { url: 'uploads/maraudes/IMG_006.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 9,
  title: 'Maraude no 9',
  startAt: new Date(),
  endAt: new Date(),
  description: faker.lorem.sentence(),
  city: 'Marseille',
  isPublished: true,
  longitude: '5.389244',
  latitude: '43.334752',
  photos: [
    { url: 'uploads/maraudes/IMG_007.jpg' },
    { url: 'uploads/maraudes/IMG_008.jpg' },
    { url: 'uploads/maraudes/IMG_009.jpg' },
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
    { url: 'uploads/maraudes/IMG_001.jpg' },
    { url: 'uploads/maraudes/IMG_002.jpg' },
    { url: 'uploads/maraudes/IMG_003.jpg' },
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
    { url: 'uploads/maraudes/IMG_004.jpg' },
    { url: 'uploads/maraudes/IMG_005.jpg' },
    { url: 'uploads/maraudes/IMG_006.jpg' },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

  Maraude.create({
    userId: 12,
    title: 'Maraude Niçoise',
    startAt: new Date(),
    endAt: new Date(),
    description: "Beau temps prévu ce jour là. Participants, n'hésitez pas à vous joindre à nous !",
    city: 'Nice',
    isPublished: true,
    longitude: '7.250000',
    latitude: '43.700000',
    photos: []
  }, { include: ['photos'] })
    .then((maraude) => { console.log(maraude); })
    .catch((error) => { console.log(error); });

    Maraude.create({
      userId: 13,
      title: 'Maraude en centre ville',
      startAt: new Date(),
      endAt: new Date(),
      description: 'Déja un photographe et deux coiffeurs prévus. Un esthéticien serait le bienvenue.',
      city: 'Marseille',
      isPublished: true,
      longitude: '5.400000',
      latitude: '43.300000',
      photos: []
    }, { include: ['photos'] })
      .then((maraude) => { console.log(maraude); })
      .catch((error) => { console.log(error); });

      Maraude.create({
        userId: 14,
        title: 'Maraude du Sud',
        startAt: new Date(),
        endAt: new Date(),
        description: 'Belle maraude dans une belle ville.',
        city: 'Arles',
        isPublished: true,
        longitude: '4.633333',
        latitude: '43.666667',
        photos: []
      }, { include: ['photos'] })
        .then((maraude) => { console.log(maraude); })
        .catch((error) => { console.log(error); });

        Maraude.create({
          userId: 15,
          title: 'La bienveillance avant tout !',
          startAt: new Date(),
          endAt: new Date(),
          description: "Besoin d'un esthéticien pour une maraude à notre-dame-de-Beauvoir",
          city: 'Istres',
          isPublished: true,
          longitude: '4.987968',
          latitude: '43.513006',
          photos: []
        }, { include: ['photos'] })
          .then((maraude) => { console.log(maraude); })
          .catch((error) => { console.log(error); });

          Maraude.create({
            userId: 16,
            title: 'Maraude ',
            startAt: new Date(),
            endAt: new Date(),
            description: faker.lorem.sentence(),
            city: 'Nîme',
            isPublished: true,
            longitude: '5.41259',
            latitude: '43.337499',
            photos: []
          }, { include: ['photos'] })
            .then((maraude) => { console.log(maraude); })
            .catch((error) => { console.log(error); });

            Maraude.create({
              userId: 17,
              title: 'Maraude no 17',
              startAt: new Date(),
              endAt: new Date(),
              description: faker.lorem.sentence(),
              city: 'Nice',
              isPublished: true,
              longitude: '5.41259',
              latitude: '43.337499',
              photos: []
            }, { include: ['photos'] })
              .then((maraude) => { console.log(maraude); })
              .catch((error) => { console.log(error); });