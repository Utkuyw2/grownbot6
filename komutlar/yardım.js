const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .addField(
      `<a:dunya:820026247203127296> İşte Yardım Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**            
<a:ates:739608060942614559> **${prefix}moderasyon**\n**__Moderasyon Komutlarını Gösterir__**\n\n<a:ates:739608060942614559> **${prefix}eğlence**\n**__Eğlence Komutlarını Gösterir.__**\n\n<a:ates:739608060942614559> **${prefix}ayarlamalı**\n**__Ayarlamalı Komutları Gösterir.__**\n\n<a:ates:739608060942614559> **${prefix}bot**\n**__Bot Komutlarını Gösterir.__**\n\n<a:ates:739608060942614559> **${prefix}kullanıcı**\n**__Kullanıcı Komutlarını Gösterir.__**\n\n**<a:ates:739608060942614559> ${prefix}gif-yardım**\n**__Gif Komutlarını Gösterir__**\n\n<a:ates:739608060942614559> **${prefix}logo-yardım**\n**__Logo Komutlarını Gösterir.__**\n\n**<a:ates:739608060942614559> ${prefix}sunucu-kur-yardım**\n**__Sunucu Kur Komutlarını Gösterir.__**
-------------------------------------------
**Linkler;** **[Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) | [Destek Sunucusu](https://discord.gg/hbdbdhdbdh) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**
             `
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif"
    )
    .setFooter(
      `${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL()
    );

  return message.channel.send(jkood);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "Komut kategorilerini atar",
  usage: "!yardım"
};
//DÜZENLENECEK