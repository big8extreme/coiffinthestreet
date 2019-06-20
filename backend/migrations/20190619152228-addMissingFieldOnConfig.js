'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn('Configs', 'legalMention', Sequelize.TEXT)
        
      ])

  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Configs', 'legalMention')
    ])

},
  };
