const models = require('../models');
const Participant = models.Participant;


// const activities = ['coiffeur', 'estheticien', 'photographe'];

Participant.create({
  maraudeId: 2,
  isValidate: true,
  email: 'rol@gto.li',
  job: 'Coiffeur'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 4,
  isValidate: true,
  email: 'moi@toi.fr',
  job: 'Esthéticien(ne)'
})
  .then((participant) => { console.log(participant); })
  .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 5,
  isValidate: true,
  email: 'gir@hut.li',
  job: 'Coiffeur'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 12,
  isValidate: true,
  email: 'frr@fee.fr',
  job: 'Photographe'
  })
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 2,
  isValidate: true,
  email: 'rou@filter.uk',
  job: 'Esthéticien(ne)'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 3,
  isValidate: true,
  email: 'gra@hut.fil',
  job: 'Coiffeur'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 9,
  isValidate: true,
  email: 'yolo@tg.fr',
  job: 'Photographe'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 3,
  isValidate: true,
  email: 'koa@la.gb',
  job: 'Coiffeur'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 3,
  isValidate: true,
  email: 'licorn@tu.us',
  job: 'Coiffeur'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 1,
  isValidate: true,
  email: 'git@lafon.gr',
  job: 'Esthéticien(ne)'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });

Participant.create({
  maraudeId: 5,
  isValidate: true,
  email: 'thus@koaloa.ch',
  job: 'Photographe'
})
    .then((participant) => { console.log(participant); })
    .catch((error) => { console.log(error); });
