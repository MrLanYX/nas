"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("share", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			target_id: INTEGER,
			effective_time: STRING(30),
			visits_num: INTEGER,
			keep_num: INTEGER,
			once_efficacy_flag: STRING(30),
			owner: INTEGER,
			author_name: STRING(30),
			created_at: DATE,
			updated_at: DATE,
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("share");
	},
};
