const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField(
      `<a:dunya:820026247203127296> İşte Eğlence Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}atatürk**
**__Atatürk Resmi Atar.__**

<a:ates:739608060942614559> **${prefix}fbi**
**__Fbi Gelir.__**

<a:ates:739608060942614559> **${prefix}gol**
**__Gol Atarsınız.__**

<a:ates:739608060942614559> **${prefix}tekme @Üye**
**__Tekme Atarsın__**

<a:ates:739608060942614559> **${prefix}saat**
**__Saat Gösterir.__**

<a:ates:739608060942614559> **${prefix}token**
**__Botun Tokenini Gösterir.__**

<a:ates:739608060942614559> **${prefix}zar-at**
**__Zar Atarsınız.__** 

<a:ates:739608060942614559> **${prefix}wasted**
**__Profiline Wasted Efekt Ekler.__**

<a:ates:739608060942614559> **${prefix}stres-çarkı**
**__Stres Çarkı Çevirirsin.__**
**------------------------------------------**
**Linkler; [Davet Et](https://bit.ly/2OEHqRx) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**

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

  aliases: ["eğlence"],

  permLevel: 0
};

exports.help = {
  name: "eğlence",

  description: "Komut kategorilerini atar",

  usage: "!eğlence"
};

//DÜZENLENECEK
