const discordBotModule = require('./module');
const discordBot = new discordBotModule("secret");

var config = {
        "token": "NDU4MjM5MzEyNDA0ODA3NzEx.DgkwIw.tLllKClvA-M--g8qHv53wKtKWYg",
        "prefix": "v!",
        "name": "Varion",
        "playing": "bu bir selam",
        "owner": ["257047627261149185"],
        "readyMessage": "Bot çalışıyor"
};

//console.log(process.env.OPERATION)
if (process.env.OPERATION !== "start" && process.env.OPERATION !== "stop") throw Error("OPERATION start ya da stop olmalı.")
else {
    if (process.env.OPERATION === "start") return discordBot.startBot(config);
    else {
        discordBot.stopBot("bot id");
    }
}
