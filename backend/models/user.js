'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    isBanned: DataTypes.BOOLEAN,
    invitationCode: DataTypes.STRING,
    job: DataTypes.STRING
  }, {
      hooks: {
        beforeCreate: (user, options) => {
          return bcrypt.hash(user.password, 10)
            .then((hash) => user.password = hash)
            .catch((err) => console.log(err));
        }
      }
    });
  User.associate = function (models) {
    User.belongsToMany(models.User, { foreignKey: 'godFatherId', through: 'GodFather', as: 'childFather' });
  };
  return User;
};