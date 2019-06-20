'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Participants','lastName', Sequelize.TEXT),
      queryInterface.addColumn('Participants', 'firstName', Sequelize.TEXT),
      queryInterface.addColumn('Participants','city', Sequelize.TEXT),
      queryInterface.addColumn('Participants','age', Sequelize.INT),
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Participants','lastName'),
      queryInterface.removeColumn('Participants','fistName'),
      queryInterface.removeColumn('Participants','city'),
      queryInterface.removeColumn('Participants','age' ),
    ])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
