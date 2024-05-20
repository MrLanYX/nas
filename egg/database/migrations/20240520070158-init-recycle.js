"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("recycle", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			name: STRING(30),
			del_all_id: STRING(200),
			folder_num: INTEGER,
			file_num: INTEGER,
			size: STRING(30),
			owner: INTEGER,
			created_at: DATE,
			updated_at: DATE,
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("recycle");
	},
};
