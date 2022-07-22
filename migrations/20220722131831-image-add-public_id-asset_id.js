'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Images', 'public_id', Sequelize.STRING);
    await queryInterface.addColumn('Images', 'asset_id', Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Images', 'public_id');
    await queryInterface.removeColumn('Images', 'asset_id');
  }
};
