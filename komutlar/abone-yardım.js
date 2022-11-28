const Discord = require("discord.js");

const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .addField(
      `<a:dunya:820026247203127296> İşte Abone Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**
<a:ates:739608060942614559> **${prefix}abone-log #Kanal**
**__Abone Log Ayarlar.__**

<a:ates:739608060942614559> **${prefix}abone-rol @Rol**
**__Abone Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}abone-yetkili-rol @Rol**
**__Abone Yetkilisi Ayarlar.__**

<a:ates:739608060942614559> **${prefix}a/abone @Kişi**
**__Etiketlediğiniz Kişiye Abone Rolü Verir.__**
**-------------------------------------------**
**Linkler ; [Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**

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

  aliases: ["aboneyardım"],

  permLevel: 0
};

exports.help = {
  name: "abone-yardım",

  description: "Komut kategorilerini atar",

  usage: ">abone-yardım"
};

//DÜZENLENECEK