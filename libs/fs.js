const { rejects } = require("assert");
const file = require("fs");
const { resolve } = require("path");
class fs{

static async Create(name, type = "txt", content = "") {
	const status = new Promise((resolve, reject) => {
		const noName = new Error(
			"No Arguments,The function must get at least one argument - The name of the file"
		);
		if (name == undefined) return reject(noName);
     file.readFile(`${name + "." + type}`,(error,data) => {
     if(error){
		file.writeFileSync(`${name + "." + type}`, content);
        resolve({status:200,message:"File Created"})
}else{
reject("There is already file with this name and type!,to change file content use the change function")
}
})
	})
const res = await status;
return res;
}
static async Delete(path) {
	const status = new Promise((resolve, reject) => {
		const noName = new Error(
			"No Arguments,The function must get one argument - The path of the file"
		);
		if (path == undefined) reject(noName);
		else{

}
			file.unlink(path, function (err) {
				if (err) resolve({status:404,error:err.message,message:"Error"});
				else resolve({status:200,message:"Success"});
			});
	})
	const res = await status;
    return res;
}
static async Change(path, content) {
	const status = new Promise((resolve, reject) => {
		const noArgs = new Error(
			"No Arguments,The function must get two arguments - The path of the file and the new content"
		);
		if (path == undefined || content == undefined) return reject(noArgs);
     file.readFile(path,(error,data) => {
     if(!error){
		file.writeFileSync(path, content);
        resolve({status:200,message:"File Content was changed"})
}else{
resolve({status:404,message:"File Not Found"})
}
})
	})
const res = await status;
return res;
}
}
module.exports = fs;
