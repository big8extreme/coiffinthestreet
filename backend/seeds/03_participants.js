const models = require('../models');
const Participant = models.Participant;
const faker = require('faker');

Participant.create({
  maraudeId: 1,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 2,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 3,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 4,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 5,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 6,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 7,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 8,
  isValidate: true,
  email: faker.internet.email(),
  job: 'coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });