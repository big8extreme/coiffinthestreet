'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    maraudeId: DataTypes.INTEGER,
    isValidate: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    job: DataTypes.STRING
  }, {});
  Participant.associate = function (models) {
    Participant.belongsTo(models.Maraude, { foreignKey: 'maraudeId', as: 'maraude' });
  };
  return Participant;
};