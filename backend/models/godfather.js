'use strict';
module.exports = (sequelize, DataTypes) => {
  const GodFather = sequelize.define('GodFather', {
    godFatherId: DataTypes.INTEGER,
    childFatherId: DataTypes.INTEGER
  }, {});
  GodFather.associate = function (models) {
    GodFather.belongsTo(models.User, { foreignKey: 'godFatherId', as: 'godFather' });
    GodFather.belongsTo(models.User, { foreignKey: 'childFatherId', as: 'childFather' });
  };
  return GodFather;
};