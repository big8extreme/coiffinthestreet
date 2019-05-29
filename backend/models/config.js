'use strict';
module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define('Config', {
    cgu: DataTypes.TEXT,
    email: DataTypes.STRING,
    videoGuidelines: DataTypes.TEXT,
    videoPath: DataTypes.STRING
  }, {});
  Config.associate = function(models) {
    // associations can be defined here
  };
  return Config;
};