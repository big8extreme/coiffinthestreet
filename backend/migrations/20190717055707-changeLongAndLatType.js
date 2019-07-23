'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Maraudes', 'longitude', Sequelize.DECIMAL(10, 7)),
      queryInterface.changeColumn('Maraudes', 'latitude', Sequelize.DECIMAL(10, 7)),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Maraudes', 'longitude', Sequelize.DECIMAL(11, 2)),
      queryInterface.changeColumn('Maraudes', 'latitude', Sequelize.DECIMAL(11, 2)),
    ]);
  }
};