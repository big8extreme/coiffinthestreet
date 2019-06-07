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
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

  // faker users //

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'hdh98',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'stb63',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'ebo74',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'hdr10',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'bep47',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'map03',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(),
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'abo59',
  job: 'coiffeur'
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));