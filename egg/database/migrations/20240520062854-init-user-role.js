"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("user-role", {
			user_id: INTEGER,
			role_id: INTEGER,
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("user-role");
	},
};
