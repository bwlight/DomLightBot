const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("I am ready!");
});


// Set the prefix
let prefix = "~";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

bot.login(TCiZk-KMM15yPQDQVTZgLcuuoyt9A4rc);