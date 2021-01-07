'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert('Heroes', [
    {
      name: 'Wonder Woman',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Harley Quinn',
      createdAt: new Date(),
      updatedAt: new Date()          
    },
    {
      name: 'Spider-Man',
      createdAt: new Date(),
      updatedAt: new Date()          
    }
  ], {});


},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Heroes');
  }
};
