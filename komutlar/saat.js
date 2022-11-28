const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 

  const sahbaz05 = new Discord.MessageEmbed()//Sahbaz05//

  .setTitle(":flag_tr: Türkiyemizin Saati Aşağıda Yazmaktadır")//Sahbaz05//

  .setTimestamp()//Sahbaz05//

  .setFooter("Türkiyemizin Saati ->")//Sahbaz05//

  .setColor("RANDOM")//Sahbaz05//

  //Sahbaz05//

  

  message.channel.send(sahbaz05)

  

  

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

}

exports.help = {

  name: 'saat',

  description: 'Saat komutudur.',

  usage: 'saat'

}