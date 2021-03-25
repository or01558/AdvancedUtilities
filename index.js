const Console = require("./libs/Console");
const fivem = require("./libs/fivem");
const fs = require("./libs/fs");
const json = require("./libs/json");
const minecraft = require("./libs/minecraft");
const fortnite = require("./libs/fortnite");

class au {
    constructor() {
        this.json = json;
        this.Console = Console;
        this.fivem = fivem;
        this.fs = fs;
        this.minecraft = minecraft;
        this.fortnite = fortnite;
    }
}
module.exports = new au();