const Discord = require("discord.js");
const bot = new Discord.Client();
 
Client.on("ready", () => {
  console.log("I am ready!");
});
 
Client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
Client.login('TCiZk-KMM15yPQDQVTZgLcuuoyt9A4rc');