'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Maraudes', 'startDate', Sequelize.DATE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Maraudes', 'startDate');
  }
};
