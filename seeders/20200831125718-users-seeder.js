'use strict';
const bcrypt = require('bcrypt');

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
    await queryInterface.bulkInsert('users', [
      {
        name: 'rosyid',
        profession: 'Backend Developer',
        role: 'admin',
        email: 'rosyid@abc.com',
        password: await bcrypt.hash('rosyid@abc.com', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Panji',
        profession: 'Frontend Developer',
        role: 'student',
        email: 'panji@abc.com',
        password: await bcrypt.hash('panji@abc.com', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
