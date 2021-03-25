const fetch = require("node-fetch");
const Client = require('fortnite');
const api = new Client("177c2431-c4d4-4af4-8551-6ded76038f87");

class fortnite {
	static async getUserId(username) {
		const NoUsername = new Error("The function must get a one arg - the fortnite username");
		if (username == undefined) throw NoUsername;
		const status = new Promise((reslove, reject) => {
			fetch(`https://fortnite-api.p.rapidapi.com/matcheshistory/${username}`, {
					method: "get",
					headers: {
						"x-rapidapi-key": "3fc364e72cmshb92f75570779652p10c68ejsnd20c16508af7",
						"x-rapidapi-host": "fortnite-api.p.rapidapi.com",
						"useQueryString": true
					}
				})
				.then(res => res.json())
				.then(json => {
					json.id = json.account;
					json.exists = true;
					delete json.account;
					delete json.max_results
					delete json.result;
					delete json.matches;
					reslove({
						username: username,
						id: json.id,
						exists: json.exists,
						status: 200,
						message: "Success!"
					})
				}).catch(err => {
					if (err) reslove({
						status: 404,
						error: "User Not Found",
						exists: false
					});
				})
		})
		return await status;
	}
	static async getProfile(UsernameOrId, platform = "pc") {
		const NoParams = new Error("The function must get a one arg - the fortnite username or fortnite user id");
		if (UsernameOrId == undefined) throw NoParams;
		const status = new Promise(async (reslove, reject) => {
			api.user(UsernameOrId, platform).then(profile => {
				delete profile.stats["undefined"];
				if (profile.stats.lifetime.score.toString() == "NaN") delete profile.stats.lifetime.score;
				profile.platform = platform;
				reslove(profile)
			}).catch(async (err) => {
				const user = await this.getUserId(UsernameOrId);
				if (user.exists) {
					reslove({
						status: 404,
						error: "User stats are private",
						exists: true
					})
				} else {
					console.log(user)
					reslove({
						status: 404,
						error: "User Not Found",
						exists: false
					});
				}
			})
		})
		return await status;
	}
	static async getShop() {
		const status = new Promise(async (reslove, reject) => {
			api.store().then(shop => {
				reslove(shop);
			}).catch((err) => {
				reject(err);
			})
		})
		return await status;
	}
	static async getChallenges() {
		const status = new Promise(async (reslove, reject) => {
			api.challenges().then(challenges => {
				reslove(challenges);
			}).catch((err) => {
				reject(err);
			})
		})
		return await status;
	}
}
module.exports = fortnite;