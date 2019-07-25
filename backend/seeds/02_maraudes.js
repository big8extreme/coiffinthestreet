const models = require('../models');
const Maraude = models.Maraude;
const { getHost } = require('../utils/ip')

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
    { url: `${getHost()}/uploads/maraudes/IMG_01.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_02.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_03.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_04.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_05.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_06.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_07.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_08.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_09.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_10.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_11.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_12.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_13.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_14.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_15.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_16.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_17.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_18.jpg` },
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
    { url: `${getHost()}/uploads/maraudes/IMG_19.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_20.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_21.jpg` },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 8,
  title: 'Pour aider mon prochain',
  startAt: new Date('2019-06-13T15:15:00'),
  endAt: new Date('2019-06-13T21:15:00'),
  description: "Démarre à la ciotat et il me manque un(e) esthéticien(ne)",
  city: 'Marseille',
  isPublished: true,
  longitude: '5.400000',
  latitude: '43.300000',
  photos: [
    { url: `${getHost()}/uploads/maraudes/IMG_22.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_23.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_24.jpg` },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 3,
  title: 'Maraude au quartier est',
  startAt: new Date('2019-06-16T07:00:00'),
  endAt: new Date('2019-06-16T12:15:00'),
  description: '',
  city: 'Nîmes',
  isPublished: true,
  longitude: '4.35',
  latitude: '43.8333',
  photos: [
    { url: `${getHost()}/uploads/maraudes/IMG_25.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_26.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_27.jpg` },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 6,
  title: 'Maraude du crépuscule',
  startAt: new Date('2019-06-20T17:00:00'),
  endAt: new Date('2019-06-20T22:15:00'),
  description: 'Un super couché de soleil et un moment riche en émotion ... A refaire vite !',
  city: 'Aix-en-provence',
  isPublished: true,
  longitude: '4.35',
  latitude: '43.8333',
  photos: [
    { url: `${getHost()}/uploads/maraudes/IMG_28.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_29.jpg` },
    { url: `${getHost()}/uploads/maraudes/IMG_30.jpg` },
  ]
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 1,
  title: 'Maraude Niçoise',
  startAt: new Date('2019-08-12T14:30:00'),
  endAt: new Date('2019-08-12T19:30:00'),
  description: "Mauvais temps prévu ce jour là. Participants, n'hésitez pas à sortir couverts !",
  city: 'Nice',
  isPublished: true,
  longitude: '7.250000',
  latitude: '43.700000',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });

Maraude.create({
  userId: 2,
  title: 'Maraude en centre ville',
  startAt: new Date('2019-08-13T12:30:00'),
  endAt: new Date('2019-08-13T18:15:00'),
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
  userId: 4,
  title: 'Maraude du Sud',
  startAt: new Date('2019-08-14T08:30:00'),
  endAt: new Date('2019-08-14T13:15:00'),
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
  userId: 5,
  title: 'La bienveillance avant tout !',
  startAt: new Date('2019-08-15T07:30:00'),
  endAt: new Date('2019-08-15T12:15:00'),
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
  userId: 6,
  title: 'Maraude des arènes',
  startAt: new Date('2019-08-16T07:30:00'),
  endAt: new Date('2019-08-16T12:15:00'),
  description: "Je commence la maraude aux arènes de Nîmes et la maraude se fera sur tout le centre ville et plus si on a encore le temps.",
  city: 'Nîmes',
  isPublished: true,
  longitude: '4.35',
  latitude: '43.8333',
  photos: []
}, { include: ['photos'] })
  .then((maraude) => { console.log(maraude); })
  .catch((error) => { console.log(error); });
