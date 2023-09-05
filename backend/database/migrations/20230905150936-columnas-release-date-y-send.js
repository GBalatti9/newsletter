'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn('newsletter_content', 'release_date', {
        type: Sequelize.DATE,
        allowNull: false,
      }, { transaction: t });

      await queryInterface.addColumn('newsletter_content', 'send', {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, { transaction: t });
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn('newsletter_content', 'release_date', { transaction: t });
      await queryInterface.removeColumn('newsletter_content', 'send', { transaction: t });
    });
  }
};
