"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("dictItem", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			parent_id: INTEGER,
			label: STRING(30),
			value: STRING(30),
			other: STRING(30),
			order: INTEGER,
			style: STRING(200),
			remake: STRING(200),
			created_at: DATE,
			updated_at: DATE,
			active_flag: STRING(1),
			delete_flag: STRING(1),
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("dictItem");
	},
};
