const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const jkood = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .addField(
      `<a:dunya:820026247203127296> İşte Kayıt Komutlarım! <a:dunya:820026247203127296>`,
      `
**-------------------------------------------**            
<a:ates:739608060942614559> **${prefix}kayıt-kanal #kanal**
**__Kayıt Kanalını Ayarlar.__**

<a:ates:739608060942614559> **${prefix}kayıt-hg #kanal**
**__Kayıt Hg Ayarlar.__**

<a:ates:739608060942614559> **${prefix}kayıt-yetkili @Rol**
**__Kayıt Yetkili Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}erkek-rol @Rol**
**__Erkek Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}kız-rol @Rol**
**__Kız Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}alınacak-rol @Rol**
**__Alınacak Rolü Ayarlar.__**

<a:ates:739608060942614559> **${prefix}erkek @Üye <İsim> <Yaş>**
**__Erkek Rolü Verir.__**

<a:ates:739608060942614559> **${prefix}kız @Üye <İsim> <Yaş>**
**__Kız Rolü Verir.__**
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
  aliases: ["kayıt-sistem"],
  permLevel: 0
};
exports.help = {
  name: "kayıtsistem",
  description: "Komut kategorilerini atar",
  usage: "!kayıt-sistem"
};
//DÜZENLENECEK