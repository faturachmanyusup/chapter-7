'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface
      .addColumn('Items', 'category', { type: DataTypes.STRING });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Items', 'category');
  }
};
