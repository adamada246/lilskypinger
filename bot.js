const Discord = require('discord.js');
const client = new Discord.Client();
const activator = new Discord.Client();
global.onoffind = '0';

activator.on("message", (message) => {
  function main (message){
  if (global.onoffind == '1'){
   if (message.content.startsWith("<@500076766996725760>") && message.channel.id == "819947069039968286"){
     message.channel.send("<@500076766996725760>")
   }
  }
   if (message.content.startsWith("start") && message.channel.id == "819947069039968286"){
     global.onoffind = '1';
    message.channel.send("<@500076766996725760>")
  
  }
  if (message.content.startsWith("stop")){
      message.channel.send("k");
     global.onoffind = '0';
  }
}
    try{
        main(message)
    }
    catch{
        main(message)
    }
});

client.on('message', (messagea) => {
    function actvc (messagea){
  if (global.onoffind == '1'){
  if (messagea.content.startsWith("<@500076766996725760>") && messagea.channel.id == "819947069039968286"){
    messagea.channel.send("<@500076766996725760>")
  }
}
try{
    actvc(messagea)
}
catch{
    actvc(messagea)
}

}

});

//replace your bot token with the token you get from the discord dev website
client.login(process.env.CLIENT_TOKEN);
activator.login(process.env.ACTIVATOR_TOKEN);
