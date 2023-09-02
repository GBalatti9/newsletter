'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn('suscribers', 'created_at', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      }, { transaction: t });

      await queryInterface.addColumn('suscribers', 'deleted_at', {
        type: Sequelize.DATE,
        allowNull: true, // Puede ser NULL si no se elimina suavemente
      }, { transaction: t });
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn('suscribers', 'created_at', { transaction: t });
      await queryInterface.removeColumn('suscribers', 'deleted_at', { transaction: t });
    });
  }
};