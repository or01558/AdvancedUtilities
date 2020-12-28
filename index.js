const Console = require("./libs/Console");
const fivem = require("./libs/fivem");
const fs = require("./libs/fs");
const json = require("./libs/json");
const minecraft = require("./libs/minecraft");
//const fortnite = require("./libs/fortnite");
class au{
constructor(){
this.json = new json()
this.Console = new Console()
this.fivem = new fivem()
this.fs = new fs()
this.minecraft = new minecraft();
}
}
module.exports = new au();