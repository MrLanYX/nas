const { Controller } = require("egg");

// 定义创建接口的请求参数规则
const createRule = {
	id: "string",
};

class UserController extends Controller {
	async index() {
		const ctx = this.ctx;
		ctx.validate(createRule, ctx.request.body);
		const result = await ctx.service.user.find(ctx.request.body);
		ctx.body = result;
		ctx.status = 200;
	}
	async show() {
		const ctx = this.ctx;
		ctx.validate(createRule, ctx.params);
		const result = await ctx.service.user.find(ctx.params);
		ctx.body = result;
		ctx.status = 200;
	}
}

module.exports = UserController;
