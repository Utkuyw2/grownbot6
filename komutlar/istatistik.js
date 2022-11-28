const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter(``,client.avatarURL)
    .addField("<a:mavi:820600656591192074> **__Servers__**", `**${client.guilds.cache.size.toLocaleString()}**`, true)
  
    .addField("<a:mavi:820600656591192074> **__Users__** ", `**${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`, true)
    
    .addField("<a:mavi:820600656591192074> **__Channel__**", `**${client.channels.cache.size.toLocaleString()}**`, true)
  
    .addField("<a:mavi:820600656591192074> **__Bot Owner__**", `**aloysha#3805**`, true)
  
    .addField("<a:mavi:820600656591192074> **__Node.JS__**", `**${process.version}**`, true)
  
    .addField("<a:mavi:820600656591192074> **__Discord.JS__**", `**${Discord.version}**`, true)
  
   .setThumbnail("https://cdn.discordapp.com/avatars/761180377690931220/012ec859de9934ce49be31d4af979f8b.png?size=2048")
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};
//ALOYSHA
exports.help = {
  name: "istatistik",
  description: "istatistik",
  usage: "istatistik"
};
