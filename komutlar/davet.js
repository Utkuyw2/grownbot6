const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {
  
  const davet = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle("<a:loading2:820600711388987392> Beni Sunucuna Ekle <a:loading2:820600711388987392>")

  .setDescription("**[Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) \n[Destek Sunucusu](https://discord.gg/Y5zKTvw3ba) \n[Bota Oy Ver](https://top.gg/bot/761180377690931220/vote)**")

  message.channel.send(davet)
  
}
  
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["invite"],

  permLevel: 0

};

exports.help = {

  name: 'davet',

  description: '',

  usage: ''

};