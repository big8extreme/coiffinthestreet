'use strict';
module.exports = (sequelize, DataTypes) => {
  const Maraude = sequelize.define('Maraude', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    startAt: DataTypes.DATE,
    endAt: DataTypes.DATE,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    longitude: DataTypes.DECIMAL(11, 2),
    latitude: DataTypes.DECIMAL(11, 2)
  }, {});
  Maraude.associate = function (models) {
    Maraude.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
    Maraude.hasMany(models.Picture, { as: 'photos', onDelete: 'CASCADE', hooks: true });
    Maraude.hasMany(models.Participant, { as: 'participants', onDelete: 'CASCADE', hooks: true });
  };
  return Maraude;
};