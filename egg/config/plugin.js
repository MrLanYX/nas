/** @type Egg.EggPlugin */
module.exports = {
	// 数据库操作
	// mysql: { enable: true, package: "egg-mysql" },
	sequelize: {
		enable: true,
		package: "egg-sequelize",
	},
	validate: {
		enable: true,
		package: "egg-validate",
	},
};
