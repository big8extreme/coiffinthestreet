const models = require('../models');
const Config = models.Config;
const faker = require('faker');

Config.create({
  cgu: faker.lorem.sentence(),
  email: faker.internet.email(),
  videoPath: faker.internet.url()
})