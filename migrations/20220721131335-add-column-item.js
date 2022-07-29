'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface
      .addColumn('Items', 'image', { type: Sequelize.STRING });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Items', 'image');
  }
};
