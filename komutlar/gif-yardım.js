const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .addField(
      `<a:dunya:820026247203127296> İşte Gif Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**            
<a:ates:739608060942614559> **${prefix}gif-woman**
**__Woman Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-baby**
**__Baby Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-animal**
**__Animal Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-anime**
**__Anime Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-man**
**__Man Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-couple**
**__Couple Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-köpek**
**__Köpek Gif Atar.__**

<a:ates:739608060942614559> **${prefix}gif-kedi**
**__Kedi Gif Atar.__**

<a:ates:739608060942614559> **${prefix}random-gif (Yakında)**
**__Yakında.__**
-------------------------------------------
**Linkler ;** **[Davet Et](https://discord.com/oauth2/authorize?client_id=761180377690931220&scope=bot&permissions=2147483647) | [Destek Sunucusu](https://discord.gg/pygudy8YwD) | [Oy Ver](https://top.gg/bot/761180377690931220/vote)**
             `
    )
.setImage("https://cdn.discordapp.com/attachments/798495290729562122/799369696105201674/standard.gif")
.setFooter(
      `${message.author.username} Tarafından istendi.`,
      message.author.avatarURL()
    );

  return message.channel.send(jkood);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gif-yardım"],
  permLevel: 0
};
exports.help = {
  name: "gif-yardım",
  description: "Komut kategorilerini atar",
  usage: "!gif-yardım"
};
//DÜZENLENECEK