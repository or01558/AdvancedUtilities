const rl = require("readline");
let Interface;
class Console {
	static async Open() {
		Interface = rl.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}
	static async ReadLine(type = "string") {
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
					Interface.question("", (value) => {
						const error = new Error("Not a String");
						resolve(value);
					});
				}
				if (
					type.toString().toLowerCase() == "number" &&
					Interface !== undefined || type.toString().toLowerCase() == "num" &&
					Interface !== undefined || type.toString().toLowerCase() == "int" &&
					Interface !== undefined
				)
					Interface.question("", (value) => {
						const error = new Error("Not a Number");
						if (isNaN(Number(value))) reject(error);
						resolve(parseInt(value));
					});
				if (
					type.toString().toLowerCase() == "double" &&
					Interface !== undefined
				)
					Interface.question("", (value) => {
						const error = new Error("Not a Number");
						if (isNaN(Number(value))) reject(error);
						resolve(parseFloat(value));
					});
				if (
					(type.toString().toLowerCase() == "boolean" &&
						Interface !== undefined) ||
					(type.toString().toLowerCase() == "bool" &&
						Interface !== undefined)
				)
					Interface.question("", (value) => {
						if (
							value.toLowerCase() !== "true" &&
							value.toLowerCase() !== "false"
						)
							reject("Not a true or false");
						const result = (value.toLowerCase() == "true");
						resolve(result);
					});
			} catch (err) {
				console.log(err);
			}
		});
		const result = await status;
		return result;
	}
	static async Close() {
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
	static async WriteLine(message) {
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
	static async Write(message) {
		const NoParams = new Error(
			"The function must get one argument - the message to write"
		);
		if (message == undefined) throw NoParams;
		const ConsoleClosed = new Error(
			"The Console is close!,Open it with Console.Open()"
		);
		if (Interface == undefined) throw ConsoleClosed;
		const NotString = new Error("The type of the message argument must be a string");
		if (typeof message !== "string") throw NotString;
		process.stdout.write(message);
	}
}
module.exports = Console;