const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField(
      `<a:dunya:820026247203127296> İşte Ayarlamalı Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}botlist-sistem**
**__BotList Sistemini Gösterir.__**

<a:ates:739608060942614559> **${prefix}abone-sistem**
**__Abone Sistemini Gösterir.__**

<a:ates:739608060942614559> **${prefix}kayıt-sistem**
**__Kayıt Sistemini Gösterir.__**
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

  aliases: ["ayarlamalı"],

  permLevel: 0
};

exports.help = {
  name: "ayarlamalı",

  description: "Komut kategorilerini atar",

  usage: "!ayarlamalı"
};

//DÜZENLENECEK