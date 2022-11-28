const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField(
      `<a:dunya:820026247203127296> İşte Ban Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}ban-log-ayarla #kanal**
**__Ban Log Ayarlar.__**

<a:ates:739608060942614559> **${prefix}ban-yetkili-rol-ayarla @Rol**
**__Ban Yetkilisi Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}ban**
**__Üyeyi Banlar.__**

<a:ates:739608060942614559> **${prefix}unban**
**__Üyenin Banını Kaldırır.__**

<a:ates:739608060942614559> **${prefix}ban-sistemi-sıfırla**
**__Ban Sistemini Sıfırlar.__**
**-------------------------------------------**
**Linkler ; [Davet Et](https://discord.com/api/oauth2/authorize?client_id=761180377690931220&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**

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

  aliases: ["ban-sistem"],

  permLevel: 0
};

exports.help = {
  name: "ban-sistem",

  description: "Komut kategorilerini atar",

  usage: "!ban-sistem"
};

//DÜZENLENECEK