const request = require("request");
const json = require("../libs/json");
class fivem {
    static async pingServer(ip, port = 30120) {
        const IP = `${ip}:${port}`;
        let Body;
        let server = new Promise((ok, error) => {
            request(`http://${IP}/info.json`, (err, data, body) => {
                if (!err) Body = json.parseJs(body);
                if (err) ok({
                    status: 404,
                    error: "Can't get the server info",
                    message: err.message
                });
                else ok({
                    info: Body,
                    status: 200,
                    message: "Success!"
                });
            })
        })
        const res = await server;
        return server;
    }
    static async getPlayers(ip, port = 30120) {
        const IP = `${ip}:${port}`;
        let Body;
        let players = new Promise((ok, error) => {
            request(`http://${IP}/players.json`, (err, data, body) => {
                if (!err) Body = json.parseJs(body);
                if (err) ok({
                    status: 404,
                    error: "Can't get the server info",
                    message: err.message
                });
                else ok({
                    list: Body,
                    status: 200,
                    message: "Success!"
                });
            })
        })
        const res = await players;
        return res;
    }
}
module.exports = fivem;