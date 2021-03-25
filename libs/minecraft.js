const fetch = require("node-fetch");
class minecraft {

	static async queryServer(ip, port = 25565) {
		const noIp = new Error(
			"No Arguments,Usage: queryServer(server-ip,server-port)"
		);
		if (!ip) throw noIp;
		const status = new Promise((resolve, reject) => {
			fetch(`https://api.minetools.eu/query/${ip}/${port}`)
				.then((res) => res.json())
				.then((json) => {
					resolve(json);
				})
				.catch((err) => {
					reject({
						status: 404,
						message: "Server Offline"
					});
				});
		});
		const res = await status;
		return res;
	}
	static async pingServer(ip, port = 25565) {
		const noIp = new Error(
			"No Arguments,Usage: queryServer(server-ip,server-port)"
		);
		if (!ip) throw noIp;
		const status = new Promise((resolve, reject) => {
			fetch(`https://api.minetools.eu/ping/${ip}/${port}`)
				.then((res) => res.json())
				.then((json) => {
					resolve(json);
				})
				.catch((err) => {
					reject({
						status: 404,
						message: "Server Offline"
					});
				});
		});
		const res = await status;
		return res;
	}
	static async getFavicon(ip, port = 25565) {
		const noIp = new Error(
			"No Arguments,Usage: queryServer(server-ip,server-port)"
		);
		if (!ip) throw noIp;
		const status = new Promise((resolve, reject) => {
			fetch(`https://api.minetools.eu/favicon/${ip}/${port}`)
				.then((res) => {
					const noFavicon = new Object();
					noFavicon.status = 404;
					noFavicon.message = "The server doesn't have favicon!";
					if (res.headers.get("content-type") === "text/html; charset=utf-8")
						resolve(noFavicon);
					else resolve({
						status: 200,
						favicon: res.url
					});
				})
				.catch((err) => {
					console.log(err);
					reject("Server Offline");
				});
		});
		const res = await status;
		return res;
	}
	static async getUuid(username) {
		const noName = new Error(
			"No Arguments,The function must get one argument - minecraft username"
		);
		if (!username) throw noName;
		const status = new Promise((resolve, reject) => {
			const noUser = new Object();
			noUser.status = 404;
			noUser.message = "User Not Found";
			fetch(`https://api.minetools.eu/uuid/${username}`)
				.then((res) => res.json())
				.then((json) => {
					if (json.status == "ERR" && res.id == null) resolve(noUser);
					else resolve({
						status: 200,
						message: "OK",
						uuid: json.id
					});
				})
				.catch((err) => {
					resolve(noUser);
				});
		});
		const res = await status;
		return res;
	}
	static async getProfile(id) {
		const noId = new Error(
			"No Arguments,The function must get one argument - minecraft user uuid"
		);
		if (!id) throw noId;
		const status = new Promise((resolve, reject) => {
			fetch(`https://api.minetools.eu/profile/${id}`)
				.then((res) => res.json())
				.then((json) => {
					if (json.status == "ERR") resolve(json);
					else resolve(json);
				})
				.catch((err) => {});
		});
		const res = await status;
		return res;
	}
}

module.exports = minecraft;