'use strict'

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, // You can add this line for UUID generation
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      profile: Sequelize.JSONB,
      created_at: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        field: 'deleted_at',
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users')
  },
}
