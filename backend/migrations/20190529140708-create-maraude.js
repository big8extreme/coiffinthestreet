'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Maraudes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
         key: 'id'
       }
      },
      title: {
        type: Sequelize.STRING
      },
      startAt: {
        type: Sequelize.DATE
      },
      endAt: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      isPublished: {
        type: Sequelize.BOOLEAN
      },
      longitude: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Maraudes');
  }
};