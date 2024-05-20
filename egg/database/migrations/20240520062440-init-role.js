"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("role", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			name: STRING(30),
			card: STRING(30),
			remake: STRING(200),
			created_at: DATE,
			updated_at: DATE,
			active_flag: STRING(1),
			delete_flag: STRING(1),
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("role");
	},
};
