'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    userId: DataTypes.STRING,
    carName: DataTypes.STRING,
    promotionEndDate: DataTypes.STRING,
    description: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.STRING,
    address: DataTypes.STRING,
    mileage: DataTypes.STRING,
    carPicture: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};