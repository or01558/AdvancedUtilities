const { publicDecrypt } = require("crypto");
const { resolve } = require("path");
const rl = require("readline");
let Interface;
class Console {
	constructor() {}
	async Open() {
		Interface = rl.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}
	async ReadLine(message, type = "string") {
		const status = new Promise((resolve, reject) => {
			let Closed = new Error(
				"The Console is close!,Open it with Console.Open()"
			);
			if (Interface == undefined) reject(Closed);
			try {
				if (
					type.toString().toLowerCase() == "string" &&
					Interface !== undefined
				) {
					Interface.question(message + "\n", (value) => {
						const error = new Error("Not a String");
						if (typeof message == "string") resolve(value);
						else reject(error);
					});
				}
				if (
					type.toString().toLowerCase() == "number" &&
					Interface !== undefined
				)
					Interface.question(message + "\n", (value) => {
						const error = new Error("Not a Number");
						if (isNaN(Number(value))) reject(error);
						resolve(parseInt(value));
					});
				if (
					(type.toString().toLowerCase() == "boolean" &&
						Interface !== undefined) ||
					(type.toString().toLowerCase() == "bool" &&
						Interface !== undefined)
				)
					Interface.question(message + "\n", (value) => {
						if (
							value.toLowerCase !== "true" &&
							value.toLowerCase !== "false"
						)
							reject("Not a true or false");
						resolve(Boolean(value));
					});
			} catch (err) {
				console.log(err);
			}
		});
		const result = await status;
		return result;
	}
	async Close() {
		const status = new Promise((resolve, reject) => {
			let Closed = new Error("The Console alreay close!");
			if (Interface == undefined) reject(Closed);
			if (Interface !== undefined) resolve("Closing!");
		});
		status
			.then(() => {
				Interface.close();
			})
			.catch((err) => {
				return console.log(err);
			});
	}
	async WriteLine(message) {
		const status = new Promise((resolve, reject) => {
			let Closed = new Error(
				"The Console is close!,Open it with Console.Open()"
			);
			if (Interface == undefined) reject(Closed);
			const NoArgs = new Error(
				"No Arguments,The function must get one argument - The message to write in the console"
			);
			if (message == undefined) reject(NoArgs);
			else resolve("Writing...");
		});
		const res = await status;
		if (res == "Writing...") {
			return console.log(message);
		} else console.log(res);
	}
	async Write(message) {
		let NoParams = new Error(
			"The function must get one argument - the message to write"
		);
		if (message == undefined) throw NoParams;
		let ConsoleClosed = new Error(
			"The Console is close!,Open it with Console.Open()"
		);
		if (Interface == undefined) throw ConsoleClosed;
        process.stdout.write(message);
	}
}
module.exports = Console;
