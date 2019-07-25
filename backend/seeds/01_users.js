const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
  firstName: 'John',
  lastName: 'DOE',
  email: 'john-doe@gmail.com',
  password: 'test1234',
  avatarUrl: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
   // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Barbara',
  lastName: 'Cascade',
  email: 'bcas@froufrou.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Jean',
  lastName: 'Flunch',
  email: 'vinc@terr.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Gilles',
  lastName: 'Aben',
  email: 'drole@rigolo.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: true,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Amine',
  lastName: 'Fouris',
  email: 'am.four@champi.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Delphine',
  lastName: 'Flika',
  email: 'dflika@ping.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
.then((user) => {
  // console.log('User created !', user);
})
.catch((err) => console.log(err));


User.create({
  firstName: 'Belos',
  lastName: 'Riviero',
  email: 'rivierob@chenapan.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Yakari',
  lastName: 'Nagawika',
  email: 'petitsioux@ping.com',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Remi',
  lastName: 'Hutchinson',
  email: 'flagre@ronflex.ki',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Florent',
  lastName: 'Richie',
  email: 'richief@rom.it',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
      // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: 'Candice',
  lastName: 'Joint',
  email: 'candi@golo.fr',
  password: 'test1234',
  avatarUrl: faker.image.avatar(),
  isAdmin: false,
  isActive: true,
  isBanned: false,
  invitationCode: 'abcd',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));
