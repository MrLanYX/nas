"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	// 在执行数据库升级时调用的函数，创建 users 表
	up: async (queryInterface, Sequelize) => {
		const { INTEGER, DATE, STRING } = Sequelize;
		await queryInterface.createTable("user", {
			id: { type: INTEGER, primaryKey: true, autoIncrement: true },
			name: STRING(30),
			password: STRING(30),
			nickname: STRING(30),
			phone: STRING(30),
			email: STRING(30),
			created_at: DATE,
			updated_at: DATE,
			active_flag: STRING(1),
			delete_flag: STRING(1),
		});
	},
	// 在执行数据库降级时调用的函数，删除 users 表
	down: async (queryInterface) => {
		await queryInterface.dropTable("user");
	},
};
