'use strict';
module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define('member', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  member.associate = function(models) {
    // associations can be defined here
  };
  return member;
};