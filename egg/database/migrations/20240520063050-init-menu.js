"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("menu", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			parent_id: INTEGER,
			name: STRING(30),
			type: STRING(30),
			url: STRING(200),
			component: STRING(50),
			but_permissions: STRING(50),
			created_at: DATE,
			updated_at: DATE,
			delete_flag: STRING(1),
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("menu");
	},
};
