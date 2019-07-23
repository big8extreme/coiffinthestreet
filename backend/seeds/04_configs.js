const models = require('../models');
const Config = models.Config;
const faker = require('faker');

Config.create({
  cgu: faker.lorem.sentence(),
  legalMention: faker.lorem.sentence(),
  email: faker.internet.email(),
  videoPath: faker.internet.url(),
  charte: faker.lorem.sentence()
})