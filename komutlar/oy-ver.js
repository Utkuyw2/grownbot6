const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle("<a:036:816649035087216640> Bana Oy Ver <a:036:816649035087216640>")

  .setDescription("**[Oy Vermek İçin Tıkla!](https://top.gg/bot/761180377690931220/vote)**")

  message.channel.send(davet)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["oy-ver"],

  permLevel: 0

};

exports.help = {

  name: 'oyver',

  description: 'Oy Verir',

  usage: '>oy-ver'

};