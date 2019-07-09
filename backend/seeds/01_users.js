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
   // console.log('User created !', user);
  })
  .catch((err) => console.log(err));

for(let i = 2; i < 11; i++){
  User.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'test1234',
    avatarUrl: faker.image.avatar(),
    isAdmin: false,
    isActive: true,
    isBanned: false,
    invitationCode: faker.lorem.word(),
    job: 'coiffeur'
  })
    .then((user) => {
      // console.log('User created !', user);
    })
    .catch((err) => console.log(err));
}