const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
  firstName: 'Kevin',
  lastName: 'Ortega',
  email: 'kevin-ortega@gmail.com',
  password: 'FWkCBesX',
  avatarUrl: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
  isAdmin: true,
  isActive: true,
  isBanned: false,
  invitationCode: 'kev-cits',
  job: 'Coiffeur'
})
  .then((user) => {
    // console.log('User created !', user);
  })
  .catch((err) => console.log(err));