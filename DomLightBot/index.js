const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

bot.login(TCiZk-KMM15yPQDQVTZgLcuuoyt9A4rc);