# Advanced-Utilities
**Adds more Console options,new name for json functions,minecraft stats,file system,fivem server stats.** <br/>
**Join my discord server to get support or report bugs.** 
### Click Below for joining ###
[Discord-Server](https://discord.gg/Ykwr258WSK)
## Examples:  
**Console Class:** \
Open Console:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
Console.Open();
```
Close Console:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
Console.Open();
```
Console ReadLine:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
Console.Open();
async function ConsoleInput(){
Console.WriteLine("Please type one number:");
let num = await Console.ReadLine("number");//ReadLine(type),Default type is string,Types:
//string, number || num || int, double, bool || boolean
Console.Close();
}
ConsoleInput();
```
Console WriteLine:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
Console.Open();
Console.WriteLine("Hi");
Console.Close();
}
```
Console Write:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
Console.Open();
Console.Write("Hello ");
Console.Write("Hello2 ");
Console.Write("Hello3 ");
Console.Write("Hello4 ");
Console.Close();
}
```
**Minecraft Class:**
```javascript
const au = require("advanced-utilities");
const mc = au.minecraft;
const Console = au.Console;
async function Stats(){
const stats = await mc.pingServer("play.hypixel.net",25565);
Console.Open()
Console.WriteLine(stats);
}
Stats();
```
**Json Class:**
```javascript
const au = require("advanced-utilities");
const json = au.json;
  const toJson = json.parseJs(js) //from json to js
  const toJs = json.parseJson(js) //from js to json
```
**Fivem Class:** <br/>
Get server stats,without players list:
```javascript
const au = require("advanced-utilities");
const Console = au.Console;
const fivem = au.fivem;
async function Stats(){
Console.Open();
const stats = await fivem.pingServer("54.37.245.139",30278) //pingServer(ip,port)
Console.WriteLine(stats);
Console.Close();
}
Stats();
```
Get players list:
```javascript 
const au = require("advanced-utilities");
const Console = au.Console;
const fivem = au.fivem;
async function Stats(){
Console.Open();
const players = await fivem.getPlayers("54.37.245.139",30278) //getPlayers(ip,port)
Console.WriteLine(players);
Console.Close();
}
Stats();
```
**Fortnite Class** <br/>
Get user id:
```js
const au = require("advanced-utilities");
const fortnite = au.fortnite;
const Console = au.Console;
async function Stats(){
const user = await fortnite.getUserId("Ninja");//getUserId(username)
Console.Open();
Console.WriteLine(user)//User Object
Console.Close();
}
Stats();
```
Get user profile:
```js
const au = require("advanced-utilities");
const fortnite = au.fortnite;
const Console = au.Console;
async function Stats(){
const profile = await fortnite.getProfile("Ninja");//getProfile(username or id,platform),If you don't specfic a platform,The platform will be pc.
Console.Open();
Console.WriteLine(profile) //Profile Object
Console.Close();
}
Stats();
```
Get fortnite shop:
```js
const au = require("advanced-utilities");
const fortnite = au.fortnite;
const Console = au.Console;
async function Stats(){
const shop = await fortnite.getShop();
Console.Open();
Console.WriteLine(shop) //Shop array. Each array value has an object that contains a details about specific item.
Console.Close();
}
Stats();
```
Get fortnite shop:
```js
const au = require("advanced-utilities");
const fortnite = au.fortnite;
const Console = au.Console;
async function Stats(){
const challenges = await fortnite.getChallenges();
Console.Open();
Console.WriteLine(challenges) //challenges array. Each array value has an object that contains a details about specific challenge.
Console.Close();
}
Stats();
```
**File System Class:** <br/>
Create File:
```javascript
const au = require("advanced-utilities");
const fs = au.fs;
const Console = au.Console;
async function Main(){
const file = await fs.Create("vars",'js',"let i = 0"); // Create(name,type,content);
Console.Open()
Console.WriteLine(file);//Response of The file creation
}
Main();
```
Delete File:
```javascript
const au = require("advanced-utilities");
const fs = au.fs;
const Console = au.Console;
async function Main(){
const file = await fs.Delete("./vars.js"); // Delete(path);
Console.Open()
Console.WriteLine(file);//Response of The delete - success or error
}
Main();
```
Change File Content:
```javascript
const au = require("advanced-utilities");
const fs = au.fs;
const Console = au.Console;
async function Main(){
const file = await fs.Change("./vars.js","let i = 0; \n let z = 5;"); // Change(path,newContent);
Console.Open()
Console.WriteLine(file);//Response of The change - success or error
}
Main();
```
**You can use then and catch in all the classes instead of await!**
## Example: ##
```javascript
const au = require("advanced-utilities");
const fs = au.fs;
const Console = au.Console;
// Change(path,newContent);
fs.Change("./vars.js","let i = 0; \n let z = 5;").then(res => {
Console.Open()
Console.WriteLine(res);//Response of The change 
}).catch(err => {
Console.WriteLine(err);
})
```
