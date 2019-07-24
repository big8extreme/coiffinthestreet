const models = require('../models');
const Maraude = models.Maraude;

Maraude.create({
  userId: 1,
  title: 'Maraude en bord de Mer',
  startAt: new Date('2019-07-10T09:15:00'),
  endAt: new Date('2019-07-10T12:15:00'),
  description: 'Dans une brise fraîche et agréable ! Merci aux participants !',
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  startAt: new Date('2019-07-10T10:15:00'),
  endAt: new Date('2019-07-10T11:15:00'),
  description: "On se lève tous pour la maraude !",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  startAt: new Date('2019-07-08T08:45:00'),
  endAt: new Date('2019-07-08T13:15:00'),
  description: 'Le soleil tape fort mais on est toujours là pour marauder !',
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  title: 'Maraude pour la fête du travail',
  startAt: new Date('2019-05-01T15:15:00'),
  endAt: new Date('2019-05-01T19:15:00'),
  description: "Super maraude ! un moment fort en émotions et les participants ont été au top ! Merci à tous !",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  title: 'Maraude du soir',
  startAt: new Date('2019-06-17T19:15:00'),
  endAt: new Date('2019-06-17T22:30:00'),
  description: "Maraude tardive mais super, merci à tous ceux qui ont participés à une heure pareille",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  title: 'Maraude du petit Marseillais',
  startAt: new Date('2019-06-17T09:15:00'),
  endAt: new Date('2019-06-17T13:15:00'),
  description: "",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  title: "Pour aider mon prochain",
  startAt: new Date('2019-06-13T15:15:00'),
  endAt: new Date('2019-06-13T21:15:00'),
  description: "Démarre à la ciotat et il me manque un(e) esthéticien(ne)",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
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
  title: "Maraude du parc",
  startAt: new Date('2019-06-15T8:00:00'),
  endAt: new Date('2019-06-15T17:30:00'),
  description: "Très belle maraude, les participants étaient au top !",
  city: 'Arles',
  isPublished: true,
  longitude: '4.633333',
  latitude: '43.666667',
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
  title: 'Maraude au quartier est',
  startAt: new Date('2019-06-19T07:00:00'),
  endAt: new Date('2019-06-19T12:15:00'),
  description: '',
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
  userId: 11,
  title: 'Maraude du crépuscule',
  startAt: new Date(),
  endAt: new Date(),
  description: 'Un super couché de soleil et un moment riche en émotion ... A refaire vite !',
  city: 'Aix-en-provence',
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
  startAt: new Date('2019-06-16T14:30:00'),
  endAt: new Date('2019-06-16T19:30:00'),
  description: "Mauvais temps prévu ce jour là. Participants, n'hésitez pas à sortir couverts !",
  city: 'Nice',
  isPublished: false,
  longitude: '7.250000',
  latitude: '43.700000',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 13,
  title: 'Maraude en centre ville',
  startAt: new Date('2019-06-29T12:30:00'),
  endAt: new Date('2019-06-29T18:15:00'),
  description: 'Déja un photographe et deux coiffeurs prévus. Un esthéticien serait le bienvenue.',
  city: 'Marseille',
  isPublished: false,
  longitude: '5.400000',
  latitude: '43.300000',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 14,
  title: 'Maraude du Sud',
  startAt: new Date('2019-06-29T08:30:00'),
  endAt: new Date('2019-06-29T13:15:00'),
  description: 'Belle maraude dans une belle ville.',
  city: 'Arles',
  isPublished: false,
  longitude: '4.633333',
  latitude: '43.666667',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 15,
  title: 'La bienveillance avant tout !',
  startAt: new Date('2019-06-30T07:30:00'),
  endAt: new Date('2019-06-30T12:15:00'),
  description: "Besoin d'un esthéticien pour une maraude à notre-dame-de-Beauvoir",
  city: 'Istres',
  isPublished: false,
  longitude: '4.987968',
  latitude: '43.513006',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 16,
  title: 'Maraude ',
  startAt: new Date('2019-07-01T07:30:00'),
  endAt: new Date('2019-07-01T12:15:00'),
  description: "Je commence la maraude aux arènes de Nîmes et la maraude se fera sur tout le centre ville et plus si on a encore le temps.",
  city: 'Nîmes',
  isPublished: false,
  longitude: '4.35',
  latitude: '43.8333',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 17,
  title: "Maraude de l'extreme",
  startAt: new Date('2019-07-01T8:00:00'),
  endAt: new Date('2019-07-01T17:30:00'),
  description: "Envie de faire une longue maraude ? J'en organise une ! 8h pour les plus endurants ! comptez 8h45 en totalité pour la pause repas",
  city: 'Nice',
  isPublished: false,
  longitude: '7.25',
  latitude: '43.7',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });