'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    maraudeId: DataTypes.INTEGER,
  }, {});
  Picture.associate = function (models) {
    Picture.belongsTo(models.Maraude, { foreignKey: 'maraudeId', as: 'maraude' });
  };
  return Picture;
};