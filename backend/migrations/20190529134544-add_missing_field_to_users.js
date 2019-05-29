'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'isActive', Sequelize.BOOLEAN),
      queryInterface.addColumn('Users', 'isBanned', Sequelize.BOOLEAN),
      queryInterface.addColumn('Users', 'invitationCode', Sequelize.STRING),
      queryInterface.addColumn('Users', 'job', Sequelize.STRING)
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'isActive'),
      queryInterface.removeColumn('Users', 'isBanned'),
      queryInterface.removeColumn('Users', 'invitationCode'),
      queryInterface.removeColumn('Users', 'job')
    ]);
  }
};
