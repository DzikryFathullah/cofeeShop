'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('members', [{
    name: 'Akhmad Dzikry',
    email: 'dzikry.fathullah@gmail.com',
    phone: '081316991114',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: 'Dzikry Fathullah',
    email: 'dzi_mavia@yahoo.co.id',
    phone: '085714755999',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('members', null, {});
  }
};
