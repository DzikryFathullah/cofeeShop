'use strict';
module.exports = (sequelize, DataTypes) => {
  const cofee = sequelize.define('cofee', {
    cofee: DataTypes.STRING,
    price: DataTypes.INTEGER,
    picture: DataTypes.STRING
  }, {});
  cofee.associate = function(models) {
    // associations can be defined here
  };
  return cofee;
};