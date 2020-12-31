const Console = require("./libs/Console");
const fivem = require("./libs/fivem");
const fs = require("./libs/fs");
const json = require("./libs/json");
const minecraft = require("./libs/minecraft");
const fortnite = require("./libs/fortnite");
let a;
class au{
constructor(){
this.json = new json()
this.Console = new Console()
this.fivem = new fivem()
this.fs = new fs()
this.minecraft = new minecraft();
this.fortnite = new fortnite();
}
}
module.exports = new au();
