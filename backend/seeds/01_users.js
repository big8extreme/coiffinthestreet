const models = require('../models');
const User = models.User;

User.create({
  firstName: 'John',
  lastName: 'DOE',
  email: 'john-doe@gmail.com',
  password: 'test1234',
  avatarUrl: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
  isAdmin: true
})
  .then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));