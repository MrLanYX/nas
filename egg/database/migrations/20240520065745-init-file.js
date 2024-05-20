"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("file", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			parent_id: INTEGER,
			name: STRING(30),
			is_folder: STRING(30),
			type: STRING(30),
			size: STRING(30),
			url: STRING(100),
			is_share: STRING(30),
			now_owner: INTEGER,
			up_owner: INTEGER,
			author: INTEGER,
			created_at: DATE,
			updated_at: DATE,
			delete_flag: STRING(1),
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("file");
	},
};
