class json{
constructor(){
}
parseJs(json) {
	const noJson = new Error(
		"No Arguments,The function must get one argument - json text"
	);
	if (json == undefined) throw noJson;
	return JSON.parse(json);
}
 parseJson(js) {
	const noJs = new Error(
		"No Arguments,The function must get one argument - js text"
	);
	if (js == undefined) throw noJs;
	return JSON.stringify(js);
}
}


module.exports = json;