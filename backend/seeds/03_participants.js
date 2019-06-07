const models = require('../models');
const Participant = models.Participant;
const faker = require('faker');

const activities = ['coiffeur', 'estheticien', 'photographe'];

for(let i = 1; i < 11; i++){
  
  Participant.create({
    maraudeId: 2,
    isValidate: true,
    email: faker.internet.email(),
    job: activities[Math.floor(Math.random()*activities.length)]
  })
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });
}