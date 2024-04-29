/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1713861950762_5306";

	// add your middleware config here
	config.middleware = [];

	// 数据库配置
	// config.mysql = {
	// 	// 单数据库信息配置
	// 	client: {
	// 		// host
	// 		host: "127.0.0.1",
	// 		// 端口号
	// 		port: "3306",
	// 		// 用户名
	// 		user: "root",
	// 		// 密码
	// 		password: "1518959431",
	// 		// 数据库名
	// 		database: "nas",
	// 	},
	// 	// 是否加载到 app 上，默认开启
	// 	app: true,
	// 	// 是否加载到 agent 上，默认关闭
	// 	agent: false,
	// };
	// 管理数据库配置
	config.sequelize = {
		dialect: "mysql",
		database: "nas",
		host: "127.0.0.1",
		port: 3306,
		username: "root",
		password: "1518959431",
	};

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig,
	};
};
