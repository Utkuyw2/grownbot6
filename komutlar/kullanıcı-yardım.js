const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .addField(
      `<a:dunya:820026247203127296> İşte Kullanıcı Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**            
<a:ates:739608060942614559> **${prefix}avatar**
**__Avatar Gösterir.__**

<a:ates:739608060942614559> **${prefix}afk <sebep>**
**__Afk Olursunuz!__**

<a:ates:739608060942614559> **${prefix}p**
**__Bir Botun Veya Kullanıcının Bilgisini Gösterir.__**

<a:ates:739608060942614559> **${prefix}sunucuresmi**
**__Sunucu Resmini Atar.__**

<a:ates:739608060942614559> **${prefix}emoji-id**
**__Emoji İd Atar.__**

<a:ates:739608060942614559> **${prefix}emojiler**
**__Sunucudaki Emojileri Atar.__**
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
  aliases: ["kullanıcı"],
  permLevel: 0
};
exports.help = {
  name: "kullanıcı",
  description: "Komut kategorilerini atar",
  usage: "!kullanıcı"
};
//DÜZENLENECEK