
const Service = require("egg").Service;

class TopicService extends Service {
	constructor(ctx) {
		super(ctx);
	}

	async find(params) {
		const ctx = this.ctx;
		const data = await ctx.model.User.findByPk(params.id);
		return data;
	}
}

module.exports = TopicService;
