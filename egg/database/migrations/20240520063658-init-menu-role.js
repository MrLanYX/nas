"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("menu-role", {
			role_id: INTEGER,
			menu_id: INTEGER,
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("menu-role");
	},
};
