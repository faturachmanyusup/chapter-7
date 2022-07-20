'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface
      .addColumn('Items', 'image', { type: DataTypes.STRING });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Items', 'image');
  }
};
