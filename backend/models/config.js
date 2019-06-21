'use strict';
module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define('Config', {
    cgu: DataTypes.TEXT,
    charte: DataTypes.TEXT,
    email: DataTypes.STRING,
    videoGuidelines: DataTypes.TEXT,
    videoPath: DataTypes.STRING,
    legalMention: DataTypes.TEXT,  }, {});
  Config.associate = function(models) {
    // associations can be defined here
  };
  return Config;
};