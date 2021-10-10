const Discord = require('discord.js');
const client = new Discord.Client();
const activator = new Discord.Client();
const observer = new Discord.Client();
global.mystatus = "0";

activator.on("message", (message) => {
  function main (message){
  if (mystatus == "1"){
   if (message.content.startsWith("<@500076766996725760>") && message.channel.id == "819947069039968286"){
     message.channel.send("<@500076766996725760>")
   }
  }
}
   
   if (message.content.startsWith("start") && message.channel.id == "819947069039968286"){
    global.mystatus = "1";
    message.channel.send("<@500076766996725760>")
   
  
  
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
  if (mystatus == "1"){
  if (messagea.content.startsWith("<@500076766996725760>") && messagea.channel.id == "819947069039968286"){
    messagea.channel.send("<@500076766996725760>")
  }
}
}
try{
    actvc(messagea)
}
catch{
    actvc(messagea)
}








});

client.on('message', (messageb) => {

    if (messageb.content.startsWith("stop")){
        global.mystatus = "0";
        messageb.reply("k");
    }


});

//replace your bot token with the token you get from the discord dev website
client.login(process.env.CLIENT_TOKEN);
activator.login(process.env.ACTIVATOR_TOKEN);
observer.login(process.env.OBSERVER_TOKEN);
