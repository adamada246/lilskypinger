const Discord = require('discord.js');
const client = new Discord.Client();
const activator = new Discord.Client();
global.status = '0';

activator.on("message", (message) => {
  if (global.status == '1'){
   if (message.content.startsWith("<@500076766996725760>") && message.channel.id == "819947069039968286"){
     message.channel.send("<@500076766996725760>")
   }
  }
   if (message.content.startsWith("start") && message.channel.id == "819947069039968286"){
     global.status = '1';
    message.channel.send("<@500076766996725760>")
  
  }
  if (message.content.startsWith("stop")){
      message.channel.send("k");
     global.status = '0';
  }
});

client.on('message', (messagea) => {
  if (global.status == '1'){
  if (messagea.content.startsWith("<@500076766996725760>") && messagea.channel.id == "819947069039968286"){
    messagea.channel.send("<@500076766996725760>")
  }
}

});

//replace your bot token with the token you get from the discord dev website
client.login(process.env.CLIENT_TOKEN);
activator.login(process.env.ACTIVATOR_TOKEN);
