'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    isBanned: DataTypes.BOOLEAN,
    invitationCode: DataTypes.STRING,
    job: DataTypes.STRING,
    godFatherId: DataTypes.INTEGER,
  }, {
      hooks: {
        beforeCreate: (user, options) => {
          return bcrypt.hash(user.password, 10)
            .then((hash) => user.password = hash)
            .catch((error) => console.log('Error on user creation', error));
        },
        beforeUpdate: (user, options) => {
          return bcrypt.hash(user.password, 10)
            .then((hash) => user.password = hash)
            .catch((error) => console.log('Error on user creation', error));
        }
      }
    });
  User.associate = function (models) {
    User.belongsTo(models.User, { foreignKey: 'godFatherId', as: 'godFather' });
    User.hasMany(models.User, { foreignKey: 'godFatherId', as: 'childFathers' });
    User.hasMany(models.Maraude, { as: 'maraudes' });
  };

  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  };
  return User;
};
