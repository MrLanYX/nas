"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("notice", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			title: STRING(100),
			type: STRING(30),
			body: STRING(200),
			author: INTEGER,
			created_at: DATE,
			updated_at: DATE,
			active_flag: STRING(1),
			delete_flag: STRING(1),
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("notice");
	},
};
