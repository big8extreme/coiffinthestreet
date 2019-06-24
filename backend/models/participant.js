'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    maraudeId: DataTypes.INTEGER,
    isValidate: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    job: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    city: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {});
  Participant.associate = function (models) {
    Participant.belongsTo(models.Maraude, { foreignKey: 'maraudeId', as: 'maraude', onDelete: 'SET NULL', hooks: true });
  };
  return Participant;
};